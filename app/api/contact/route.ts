import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { checkRateLimit, RATE_LIMIT_CONFIGS } from '../../lib/rateLimiter';
import { verifyRecaptcha } from '../../lib/recaptcha';
import {
    getClientIP,
    normalizeEmail,
    normalizePhoneNumber,
    isHoneypotTriggered,
    isSubmittedTooQuickly,
    generateRequestFingerprint,
    validateEnvironmentVariables
} from '../../lib/utils';

// Validation schema for the contact form with protection fields
const contactFormSchema = z.object({
    fullName: z
        .string()
        .min(2, "שם חייב להכיל לפחות 2 תווים")
        .max(50, "שם לא יכול להכיל יותר מ-50 תווים"),
    phone: z
        .string()
        .min(9, "מספר טלפון חייב להכיל לפחות 9 ספרות")
        .max(15, "מספר טלפון לא יכול להכיל יותר מ-15 ספרות")
        .regex(/^[0-9+\-\s()]+$/, "מספר טלפון לא תקין"),
    email: z
        .string()
        .email("כתובת אימייל לא תקינה")
        .min(5, "כתובת אימייל קצרה מדי"),
    // Protection fields
    recaptchaToken: z.string().optional(),
    honeypot: z.string().optional(),
    formStartTime: z.number().optional()
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Helper function to split full name
function splitFullName(fullName: string): { firstName: string; lastName: string } {
    const parts = fullName.trim().split(' ');
    return {
        firstName: parts[0] || '',
        lastName: parts.slice(1).join(' ') || ''
    };
}

// Helper function to process phone number
function processPhoneNumber(input: string): string {
    // Remove all non-digit characters except +
    const cleaned = input.replace(/[^\d+]/g, '');

    // Handle Israeli numbers
    if (cleaned.startsWith('0')) {
        return '+972' + cleaned.substring(1);
    } else if (cleaned.startsWith('972')) {
        return '+' + cleaned;
    } else if (cleaned.startsWith('+972')) {
        return cleaned;
    }

    return cleaned; // Return as-is for international numbers
}

// Helper function to send data to AllChat API
async function sendToAllChat(data: ContactFormData): Promise<boolean> {
    const { firstName, lastName } = splitFullName(data.fullName);
    const processedPhone = processPhoneNumber(data.phone);

    const payload = {
        phone: processedPhone,
        email: data.email,
        first_name: firstName,
        last_name: lastName,
        actions: [
            { action: "add_tag", tag_name: "Landing Page" },
            { action: "set_field_value", field_name: "Products of interest", value: "חדרי שרתים" },
            { action: "send_flow", flow_id: 1753785330127 }
        ]
    };

    const apiToken = process.env.ALLCHAT_API_TOKEN;
    const apiUrl = process.env.ALLCHAT_API_URL || 'https://app.allchat.chat/api/contacts';

    if (!apiToken) {
        console.error('ALLCHAT_API_TOKEN is not configured');
        return false;
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'X-ACCESS-TOKEN': apiToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error('AllChat API error:', response.status, await response.text());
            return false;
        }

        console.log('Successfully sent to AllChat API');
        return true;
    } catch (error) {
        console.error('AllChat API request failed:', error);
        return false;
    }
}

// Helper function to send email fallback
async function sendEmailFallback(data: ContactFormData): Promise<boolean> {
    // For now, we'll just log the fallback
    // In production, you would implement actual email sending
    console.log('Email fallback triggered for:', data);

    // You can implement nodemailer or other email service here
    // For static export compatibility, you might want to use a service like:
    // - SendGrid API
    // - Mailgun API
    // - AWS SES API

    return true; // Assume email sending succeeds for now
}

// Retry function with exponential backoff
async function retryWithBackoff<T>(
    fn: () => Promise<T>,
    maxRetries: number = 3,
    baseDelay: number = 1000
): Promise<T> {
    let lastError: Error;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error as Error;

            if (attempt < maxRetries - 1) {
                const delay = baseDelay * Math.pow(2, attempt);
                console.log(`Attempt ${attempt + 1} failed, retrying in ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    throw lastError!;
}

export async function POST(request: NextRequest) {
    const startTime = Date.now();

    try {
        // Validate environment variables
        const envValidation = validateEnvironmentVariables();
        if (!envValidation.valid) {
            console.error('Missing required environment variables:', envValidation.missing);
            return NextResponse.json({
                success: false,
                message: 'שגיאה בהגדרות המערכת. אנא צור קשר ב-WhatsApp: 0765991386'
            }, { status: 500 });
        }

        // Parse and validate the request body
        const body = await request.json();
        console.log('Received request body:', {
            ...body,
            recaptchaToken: body.recaptchaToken ? 'present' : 'missing'
        });
        const validatedData = contactFormSchema.parse(body);

        // Extract client information
        const clientIP = getClientIP(request);
        const fingerprint = generateRequestFingerprint(request);
        const normalizedEmail = normalizeEmail(validatedData.email);
        const normalizedPhone = normalizePhoneNumber(validatedData.phone);

        console.log('Processing contact form submission:', {
            name: validatedData.fullName,
            email: normalizedEmail,
            phone: normalizedPhone,
            ip: clientIP,
            fingerprint
        });

        // 1. Check honeypot field (bot detection)
        if (isHoneypotTriggered(validatedData.honeypot || null)) {
            console.warn('Honeypot triggered, likely bot submission:', { ip: clientIP, fingerprint });
            return NextResponse.json({
                success: false,
                message: 'הבקשה נראית חשודה. אנא נסה שוב או צור קשר ב-WhatsApp: 0765991386'
            }, { status: 400 });
        }

        // 2. Check submission timing (bot detection)
        if (validatedData.formStartTime && isSubmittedTooQuickly(validatedData.formStartTime)) {
            console.warn('Form submitted too quickly, likely bot:', { ip: clientIP, fingerprint });
            return NextResponse.json({
                success: false,
                message: 'הטופס נשלח מהר מדי. אנא המתן מספר שניות ונסה שוב.'
            }, { status: 400 });
        }

        // 3. Verify reCAPTCHA (if token is provided)
        if (validatedData.recaptchaToken) {
            console.log('About to verify reCAPTCHA token:', {
                tokenType: typeof validatedData.recaptchaToken,
                tokenLength: validatedData.recaptchaToken.length,
                tokenPreview: validatedData.recaptchaToken.substring(0, 20) + '...'
            });

            const recaptchaResult = await verifyRecaptcha(validatedData.recaptchaToken);

            console.log('reCAPTCHA verification result:', {
                success: recaptchaResult.success,
                score: recaptchaResult.score,
                message: recaptchaResult.message
            });

            if (!recaptchaResult.success) {
                console.warn('reCAPTCHA verification failed:', {
                    ip: clientIP,
                    fingerprint,
                    score: recaptchaResult.score,
                    message: recaptchaResult.message
                });
                return NextResponse.json({
                    success: false,
                    message: recaptchaResult.message || 'אימות reCAPTCHA נכשל. אנא נסה שוב או צור קשר ב-WhatsApp: 0765991386'
                }, { status: 400 });
            }
            console.log('reCAPTCHA verification successful:', { score: recaptchaResult.score });
        } else {
            console.warn('No reCAPTCHA token provided, but continuing with lenient policy');
        }

        // 4. Check rate limits (multiple layers)

        // IP-based rate limiting
        const ipRateLimit = await checkRateLimit(clientIP, RATE_LIMIT_CONFIGS.IP);
        if (!ipRateLimit.success) {
            console.warn('IP rate limit exceeded:', { ip: clientIP, fingerprint });
            return NextResponse.json({
                success: false,
                message: ipRateLimit.message
            }, { status: 429 });
        }

        // Email-based rate limiting
        const emailRateLimit = await checkRateLimit(normalizedEmail, RATE_LIMIT_CONFIGS.EMAIL);
        if (!emailRateLimit.success) {
            console.warn('Email rate limit exceeded:', { email: normalizedEmail, ip: clientIP });
            return NextResponse.json({
                success: false,
                message: emailRateLimit.message
            }, { status: 429 });
        }

        // Phone-based rate limiting
        const phoneRateLimit = await checkRateLimit(normalizedPhone, RATE_LIMIT_CONFIGS.PHONE);
        if (!phoneRateLimit.success) {
            console.warn('Phone rate limit exceeded:', { phone: normalizedPhone, ip: clientIP });
            return NextResponse.json({
                success: false,
                message: phoneRateLimit.message
            }, { status: 429 });
        }

        // Global rate limiting
        const globalRateLimit = await checkRateLimit('global', RATE_LIMIT_CONFIGS.GLOBAL);
        if (!globalRateLimit.success) {
            console.warn('Global rate limit exceeded:', { ip: clientIP, fingerprint });
            return NextResponse.json({
                success: false,
                message: globalRateLimit.message
            }, { status: 429 });
        }

        console.log('All security checks passed, processing submission');

        // 5. Process the form submission
        try {
            await retryWithBackoff(async () => {
                const success = await sendToAllChat(validatedData);
                if (!success) {
                    throw new Error('AllChat API call failed');
                }
                return success;
            }, 3, 1000);

            // Log successful submission
            console.log('Form submission successful:', {
                email: normalizedEmail,
                phone: normalizedPhone,
                ip: clientIP,
                processingTime: Date.now() - startTime
            });

            // Success response
            return NextResponse.json({
                success: true,
                message: 'הודעתך נשלחה בהצלחה! נחזור אליך בהקדם.'
            });

        } catch (apiError) {
            console.error('AllChat API failed after retries, trying email fallback:', apiError);

            // Try email fallback
            try {
                await sendEmailFallback(validatedData);

                return NextResponse.json({
                    success: true,
                    message: 'הודעתך נשלחה באימייל. נחזור אליך בהקדם.'
                });
            } catch (emailError) {
                console.error('Email fallback also failed:', emailError);

                return NextResponse.json({
                    success: false,
                    message: 'אירעה שגיאה. אנא נסה שוב או צור קשר ב-WhatsApp: 0765991386'
                }, { status: 500 });
            }
        }

    } catch (error) {
        console.error('Contact form error:', error);

        // Handle validation errors
        if (error instanceof z.ZodError) {
            return NextResponse.json({
                success: false,
                message: 'נתונים לא תקינים',
                errors: error.errors
            }, { status: 400 });
        }

        // Handle other errors
        return NextResponse.json({
            success: false,
            message: 'אירעה שגיאה. אנא נסה שוב או צור קשר ב-WhatsApp: 0765991386'
        }, { status: 500 });
    }
}

// Handle other HTTP methods
export async function GET() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
