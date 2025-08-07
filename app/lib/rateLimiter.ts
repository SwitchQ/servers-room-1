import { getRedisClient } from './redis';

export interface RateLimitResult {
    success: boolean;
    remaining: number;
    resetTime: number;
    message?: string;
}

export interface RateLimitConfig {
    windowMs: number;
    maxRequests: number;
    keyPrefix: string;
}

// Default configurations (lenient settings)
export const RATE_LIMIT_CONFIGS = {
    IP: {
        windowMs: 60 * 60 * 1000, // 1 hour
        maxRequests: 10, // 10 submissions per hour per IP (lenient)
        keyPrefix: 'rate_limit:ip:'
    },
    EMAIL: {
        windowMs: 24 * 60 * 60 * 1000, // 24 hours
        maxRequests: 5, // 5 submissions per day per email (lenient)
        keyPrefix: 'rate_limit:email:'
    },
    PHONE: {
        windowMs: 24 * 60 * 60 * 1000, // 24 hours
        maxRequests: 5, // 5 submissions per day per phone (lenient)
        keyPrefix: 'rate_limit:phone:'
    },
    GLOBAL: {
        windowMs: 60 * 60 * 1000, // 1 hour
        maxRequests: 200, // 200 submissions per hour globally (lenient)
        keyPrefix: 'rate_limit:global:'
    }
};

export async function checkRateLimit(
    identifier: string,
    config: RateLimitConfig
): Promise<RateLimitResult> {
    const redis = getRedisClient();

    // If Redis is not available, allow the request (graceful degradation)
    if (!redis) {
        console.warn('Redis not available, skipping rate limit check');
        return {
            success: true,
            remaining: config.maxRequests - 1,
            resetTime: Date.now() + config.windowMs
        };
    }

    const key = `${config.keyPrefix}${identifier}`;
    const now = Date.now();
    const windowStart = now - config.windowMs;

    try {
        // Use Redis pipeline for atomic operations
        const pipeline = redis.pipeline();

        // Remove expired entries
        pipeline.zremrangebyscore(key, 0, windowStart);

        // Count current requests in window
        pipeline.zcard(key);

        // Add current request
        pipeline.zadd(key, now, `${now}-${Math.random()}`);

        // Set expiration
        pipeline.expire(key, Math.ceil(config.windowMs / 1000));

        const results = await pipeline.exec();

        if (!results) {
            throw new Error('Pipeline execution failed');
        }

        // Get count after removing expired entries
        const currentCount = results[1][1] as number;

        const resetTime = now + config.windowMs;
        const remaining = Math.max(0, config.maxRequests - currentCount - 1);

        if (currentCount >= config.maxRequests) {
            // Remove the request we just added since it's over the limit
            await redis.zrem(key, `${now}-${Math.random()}`);

            return {
                success: false,
                remaining: 0,
                resetTime,
                message: getHebrewRateLimitMessage(config.keyPrefix)
            };
        }

        return {
            success: true,
            remaining,
            resetTime
        };

    } catch (error) {
        console.error('Rate limit check failed:', error);
        // On error, allow the request (graceful degradation)
        return {
            success: true,
            remaining: config.maxRequests - 1,
            resetTime: now + config.windowMs
        };
    }
}

function getHebrewRateLimitMessage(keyPrefix: string): string {
    switch (keyPrefix) {
        case 'rate_limit:ip:':
            return 'נשלחו יותר מדי בקשות מהכתובת שלך. אנא נסה שוב בעוד שעה או צור קשר ב-WhatsApp: 0765991386';
        case 'rate_limit:email:':
            return 'כתובת האימייל הזו כבר שלחה מספר בקשות היום. אנא נסה מחר או צור קשר ב-WhatsApp: 0765991386';
        case 'rate_limit:phone:':
            return 'מספר הטלפון הזה כבר שלח מספר בקשות היום. אנא נסה מחר או צור קשר ב-WhatsApp: 0765991386';
        case 'rate_limit:global:':
            return 'המערכת עמוסה כרגע. אנא נסה שוב בעוד מספר דקות או צור קשר ב-WhatsApp: 0765991386';
        default:
            return 'נשלחו יותר מדי בקשות. אנא נסה שוב מאוחר יותר או צור קשר ב-WhatsApp: 0765991386';
    }
}

export async function getRateLimitStatus(
    identifier: string,
    config: RateLimitConfig
): Promise<{ count: number; resetTime: number }> {
    const redis = getRedisClient();

    if (!redis) {
        return { count: 0, resetTime: Date.now() + config.windowMs };
    }

    const key = `${config.keyPrefix}${identifier}`;
    const now = Date.now();
    const windowStart = now - config.windowMs;

    try {
        // Remove expired entries and count current ones
        await redis.zremrangebyscore(key, 0, windowStart);
        const count = await redis.zcard(key);

        return {
            count,
            resetTime: now + config.windowMs
        };
    } catch (error) {
        console.error('Failed to get rate limit status:', error);
        return { count: 0, resetTime: now + config.windowMs };
    }
}
