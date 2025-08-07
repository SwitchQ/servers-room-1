import Redis from 'ioredis';

let redis: Redis | null = null;

export function getRedisClient(): Redis | null {
    if (!process.env.REDIS_URL) {
        console.warn('REDIS_URL not configured, rate limiting will be disabled');
        return null;
    }

    if (!redis) {
        try {
            redis = new Redis(process.env.REDIS_URL, {
                maxRetriesPerRequest: 3,
                lazyConnect: true,
            });

            redis.on('error', (error) => {
                console.error('Redis connection error:', error);
            });

            redis.on('connect', () => {
                console.log('Redis connected successfully');
            });
        } catch (error) {
            console.error('Failed to create Redis client:', error);
            return null;
        }
    }

    return redis;
}

export async function closeRedisConnection(): Promise<void> {
    if (redis) {
        await redis.quit();
        redis = null;
    }
}
