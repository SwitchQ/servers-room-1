"use client";

import { useEffect, useState, useCallback } from 'react';
import { loadRecaptchaScript, executeRecaptcha } from '../recaptcha';

interface UseRecaptchaOptions {
    siteKey?: string;
    action?: string;
}

interface UseRecaptchaReturn {
    isLoaded: boolean;
    isLoading: boolean;
    error: string | null;
    executeRecaptcha: () => Promise<string | null>;
}

export function useRecaptcha(options: UseRecaptchaOptions = {}): UseRecaptchaReturn {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const siteKey = options.siteKey || process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const action = options.action || 'submit';

    useEffect(() => {
        if (!siteKey) {
            console.warn('reCAPTCHA site key not provided. Expected:', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
            return;
        }

        if (isLoaded || isLoading) {
            return;
        }

        setIsLoading(true);
        setError(null);

        loadRecaptchaScript(siteKey)
            .then(() => {
                setIsLoaded(true);
                setError(null);
            })
            .catch((err) => {
                console.error('Failed to load reCAPTCHA:', err);
                setError('Failed to load reCAPTCHA');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [siteKey, isLoaded, isLoading]);

    const execute = useCallback(async (): Promise<string | null> => {
        if (!siteKey) {
            console.warn('reCAPTCHA site key not available');
            return null;
        }

        if (!isLoaded) {
            console.warn('reCAPTCHA not loaded yet');
            return null;
        }

        try {
            const token = await executeRecaptcha(siteKey, action);
            return token;
        } catch (err) {
            console.error('reCAPTCHA execution failed:', err);
            setError('reCAPTCHA execution failed');
            return null;
        }
    }, [siteKey, action, isLoaded]);

    return {
        isLoaded,
        isLoading,
        error,
        executeRecaptcha: execute
    };
}
