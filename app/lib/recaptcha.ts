export interface RecaptchaVerificationResult {
    success: boolean;
    score?: number;
    action?: string;
    challenge_ts?: string;
    hostname?: string;
    error_codes?: string[];
    message?: string;
}

export async function verifyRecaptcha(token: string): Promise<RecaptchaVerificationResult> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || '0.5');

    console.log('reCAPTCHA verification debug:', {
        hasSecretKey: !!secretKey,
        hasToken: !!token,
        tokenPreview: token ? token.substring(0, 20) + '...' : 'null',
        minScore
    });

    if (!secretKey) {
        console.warn('RECAPTCHA_SECRET_KEY not configured, skipping reCAPTCHA verification');
        return {
            success: true,
            message: 'reCAPTCHA verification skipped (not configured)'
        };
    }

    if (!token) {
        console.error('reCAPTCHA token is missing or null');
        return {
            success: false,
            message: 'אסימון reCAPTCHA חסר. אנא רענן את הדף ונסה שוב.'
        };
    }

    try {
        console.log('Making request to Google reCAPTCHA API...');

        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                secret: secretKey,
                response: token,
            }),
        });

        console.log('Google API response status:', response.status);

        if (!response.ok) {
            console.error('Google API HTTP error:', response.status, response.statusText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Google API response data:', data);

        // Check if verification was successful
        if (!data.success) {
            // Google uses 'error-codes' with hyphens, not underscores
            const errorCodes = data['error-codes'] || data.error_codes || [];
            console.error('reCAPTCHA verification failed by Google:', {
                success: data.success,
                'error-codes': errorCodes,
                score: data.score,
                action: data.action,
                challenge_ts: data.challenge_ts,
                hostname: data.hostname
            });
            return {
                success: false,
                error_codes: errorCodes,
                message: getHebrewRecaptchaErrorMessage(errorCodes)
            };
        }

        // For reCAPTCHA v3, check the score
        if (data.score !== undefined) {
            if (data.score < minScore) {
                console.warn(`reCAPTCHA score too low: ${data.score} < ${minScore}`);
                return {
                    success: false,
                    score: data.score,
                    message: 'הבקשה נראית חשודה. אנא נסה שוב או צור קשר ב-WhatsApp: 0765991386'
                };
            }
        }

        return {
            success: true,
            score: data.score,
            action: data.action,
            challenge_ts: data.challenge_ts,
            hostname: data.hostname
        };

    } catch (error) {
        console.error('reCAPTCHA verification error:', error);

        // In case of network errors or API issues, we'll be lenient and allow the request
        // This ensures the form still works even if reCAPTCHA service is down
        return {
            success: true,
            message: 'reCAPTCHA verification failed due to network error, allowing request'
        };
    }
}

function getHebrewRecaptchaErrorMessage(errorCodes?: string[]): string {
    if (!errorCodes || errorCodes.length === 0) {
        return 'אימות reCAPTCHA נכשל. אנא נסה שוב.';
    }

    // Handle specific error codes
    if (errorCodes.includes('browser-error')) {
        return 'שגיאת דפדפן ב-reCAPTCHA. אנא רענן את הדף ונסה שוב או צור קשר ב-WhatsApp: 0765991386';
    }

    if (errorCodes.includes('timeout-or-duplicate')) {
        return 'אסימון reCAPTCHA פג תוקף. אנא רענן את הדף ונסה שוב.';
    }

    if (errorCodes.includes('invalid-input-response')) {
        return 'אסימון reCAPTCHA לא תקין. אנא רענן את הדף ונסה שוב.';
    }

    if (errorCodes.includes('missing-input-response')) {
        return 'אסימון reCAPTCHA חסר. אנא רענן את הדף ונסה שוב.';
    }

    if (errorCodes.includes('invalid-input-secret')) {
        return 'שגיאה בהגדרות המערכת. אנא צור קשר ב-WhatsApp: 0765991386';
    }

    if (errorCodes.includes('missing-input-secret')) {
        return 'שגיאה בהגדרות המערכת. אנא צור קשר ב-WhatsApp: 0765991386';
    }

    // Generic error message
    return 'אימות reCAPTCHA נכשל. אנא נסה שוב או צור קשר ב-WhatsApp: 0765991386';
}

// Helper function to load reCAPTCHA script dynamically
export function loadRecaptchaScript(siteKey: string): Promise<void> {
    return new Promise((resolve, reject) => {
        // Check if reCAPTCHA is already loaded
        if (window.grecaptcha) {
            resolve();
            return;
        }

        // Check if script is already being loaded
        const existingScript = document.querySelector('script[src*="recaptcha"]');
        if (existingScript) {
            existingScript.addEventListener('load', () => resolve());
            existingScript.addEventListener('error', reject);
            return;
        }

        // Create and load the script
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            // Wait for grecaptcha to be available
            const checkGrecaptcha = () => {
                if (typeof window.grecaptcha !== 'undefined' && typeof window.grecaptcha.ready === 'function') {
                    resolve();
                } else {
                    setTimeout(checkGrecaptcha, 100);
                }
            };
            checkGrecaptcha();
        };

        script.onerror = () => {
            reject(new Error('Failed to load reCAPTCHA script'));
        };

        document.head.appendChild(script);
    });
}

// Helper function to execute reCAPTCHA
export function executeRecaptcha(siteKey: string, action: string = 'submit'): Promise<string> {
    return new Promise((resolve, reject) => {
        if (typeof window.grecaptcha === 'undefined') {
            reject(new Error('reCAPTCHA not loaded'));
            return;
        }

        try {
            window.grecaptcha.ready(() => {
                window.grecaptcha.execute(siteKey, { action })
                    .then((token) => {
                        if (token) {
                            resolve(token);
                        } else {
                            reject(new Error('reCAPTCHA returned null token'));
                        }
                    })
                    .catch((error) => {
                        console.error('reCAPTCHA execution error:', error);
                        reject(error);
                    });
            });
        } catch (error) {
            console.error('reCAPTCHA ready error:', error);
            reject(error);
        }
    });
}

// Type declarations for global grecaptcha
declare global {
    interface Window {
        grecaptcha: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        };
    }
}
