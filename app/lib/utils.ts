import { NextRequest } from 'next/server';

/**
 * Extract the client's IP address from the request
 * Handles various proxy headers and fallbacks
 */
export function getClientIP(request: NextRequest): string {
    // Check various headers that might contain the real IP
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    const cfConnectingIP = request.headers.get('cf-connecting-ip');
    const xClientIP = request.headers.get('x-client-ip');

    // x-forwarded-for can contain multiple IPs, take the first one
    if (forwardedFor) {
        const ips = forwardedFor.split(',').map(ip => ip.trim());
        return ips[0];
    }

    // Check other headers
    if (cfConnectingIP) return cfConnectingIP;
    if (realIP) return realIP;
    if (xClientIP) return xClientIP;

    // Fallback when no IP headers are available
    return 'unknown';
}

/**
 * Normalize phone number for consistent rate limiting
 */
export function normalizePhoneNumber(phone: string): string {
    // Remove all non-digit characters except +
    const cleaned = phone.replace(/[^\d+]/g, '');

    // Handle Israeli numbers
    if (cleaned.startsWith('0')) {
        return '+972' + cleaned.substring(1);
    } else if (cleaned.startsWith('972')) {
        return '+' + cleaned;
    } else if (cleaned.startsWith('+972')) {
        return cleaned;
    }

    return cleaned;
}

/**
 * Normalize email for consistent rate limiting
 */
export function normalizeEmail(email: string): string {
    return email.toLowerCase().trim();
}

/**
 * Create a honeypot field validator
 * Returns true if the request appears to be from a bot
 */
export function isHoneypotTriggered(honeypotValue: string | null): boolean {
    // If honeypot field has any value, it's likely a bot
    return honeypotValue !== null && honeypotValue !== '' && honeypotValue !== undefined;
}

/**
 * Check if form was submitted too quickly (likely a bot)
 * @param startTime - Timestamp when form was loaded (from hidden field)
 * @param minTimeMs - Minimum time in milliseconds (default: 3 seconds)
 */
export function isSubmittedTooQuickly(startTime: number, minTimeMs: number = 3000): boolean {
    const now = Date.now();
    const timeTaken = now - startTime;
    return timeTaken < minTimeMs;
}

/**
 * Generate a simple hash for request fingerprinting
 */
export function generateRequestFingerprint(request: NextRequest): string {
    const userAgent = request.headers.get('user-agent') || '';
    const acceptLanguage = request.headers.get('accept-language') || '';
    const acceptEncoding = request.headers.get('accept-encoding') || '';
    const ip = getClientIP(request);

    // Create a simple hash of the request characteristics
    const fingerprint = `${ip}-${userAgent}-${acceptLanguage}-${acceptEncoding}`;

    // Simple hash function (not cryptographically secure, but sufficient for fingerprinting)
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
        const char = fingerprint.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }

    return Math.abs(hash).toString(36);
}

/**
 * Validate that required environment variables are set
 */
export function validateEnvironmentVariables(): { valid: boolean; missing: string[] } {
    const required = [
        'ALLCHAT_API_TOKEN',
        'ALLCHAT_API_URL'
    ];

    const optional = [
        'REDIS_URL',
        'RECAPTCHA_SITE_KEY',
        'RECAPTCHA_SECRET_KEY',
        'RECAPTCHA_MIN_SCORE'
    ];

    const missing: string[] = [];

    for (const envVar of required) {
        if (!process.env[envVar]) {
            missing.push(envVar);
        }
    }

    // Log warnings for missing optional variables
    for (const envVar of optional) {
        if (!process.env[envVar]) {
            console.warn(`Optional environment variable ${envVar} is not set`);
        }
    }

    return {
        valid: missing.length === 0,
        missing
    };
}

/**
 * Format time remaining for rate limit messages
 */
export function formatTimeRemaining(resetTime: number): string {
    const now = Date.now();
    const remaining = Math.max(0, resetTime - now);

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 0) {
        return `${hours} שעות ו-${minutes} דקות`;
    } else if (minutes > 0) {
        return `${minutes} דקות`;
    } else {
        return 'פחות מדקה';
    }
}
