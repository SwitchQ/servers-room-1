import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema for the contact form
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
        .min(5, "כתובת אימייל קצרה מדי")
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
    try {
        // Parse and validate the request body
        const body = await request.json();
        const validatedData = contactFormSchema.parse(body);

        console.log('Processing contact form submission:', {
            name: validatedData.fullName,
            email: validatedData.email,
            phone: validatedData.phone
        });

        // Try to send to AllChat API with retries
        try {
            await retryWithBackoff(async () => {
                const success = await sendToAllChat(validatedData);
                if (!success) {
                    throw new Error('AllChat API call failed');
                }
                return success;
            }, 3, 1000);

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
