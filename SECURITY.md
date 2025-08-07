# Security Implementation Guide

This document outlines the comprehensive security measures implemented to protect the contact form from abuse, spam, and malicious attacks.

## Overview

The security system implements multiple layers of protection:

1. **reCAPTCHA v3** - Google's invisible bot detection
2. **Redis-based Rate Limiting** - Multiple rate limiting layers
3. **Honeypot Fields** - Hidden fields to catch bots
4. **Timing Analysis** - Detect forms submitted too quickly
5. **Request Fingerprinting** - Track suspicious patterns
6. **Input Validation** - Comprehensive data validation

## Security Layers

### 1. reCAPTCHA v3 Protection

**Implementation:**
- Invisible reCAPTCHA that analyzes user behavior
- Minimum score threshold of 0.5 (configurable)
- Graceful degradation if reCAPTCHA fails to load
- Hebrew error messages for failed verification

**Configuration:**
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key
RECAPTCHA_MIN_SCORE=0.5
```

**Features:**
- Automatic token generation on form submission
- Server-side verification with Google's API
- Score-based filtering (0.0 = bot, 1.0 = human)
- Fallback to allow submissions if service is down

### 2. Redis-based Rate Limiting

**Multiple Rate Limiting Layers:**

#### IP-based Rate Limiting
- **Limit:** 10 submissions per hour per IP (lenient)
- **Purpose:** Prevent automated attacks from single IP
- **Key:** `rate_limit:ip:{ip_address}`

#### Email-based Rate Limiting
- **Limit:** 5 submissions per day per email (lenient)
- **Purpose:** Prevent spam from same email address
- **Key:** `rate_limit:email:{normalized_email}`

#### Phone-based Rate Limiting
- **Limit:** 5 submissions per day per phone (lenient)
- **Purpose:** Prevent spam from same phone number
- **Key:** `rate_limit:phone:{normalized_phone}`

#### Global Rate Limiting
- **Limit:** 200 submissions per hour globally (lenient)
- **Purpose:** Protect against coordinated attacks
- **Key:** `rate_limit:global:global`

**Configuration:**
```env
REDIS_URL=redis://localhost:6379
RATE_LIMIT_IP_MAX_REQUESTS=10
RATE_LIMIT_EMAIL_MAX_REQUESTS=5
RATE_LIMIT_PHONE_MAX_REQUESTS=5
RATE_LIMIT_GLOBAL_MAX_REQUESTS=200
```

**Features:**
- Sliding window rate limiting using Redis sorted sets
- Automatic cleanup of expired entries
- Graceful degradation if Redis is unavailable
- Hebrew error messages with WhatsApp fallback

### 3. Honeypot Fields

**Implementation:**
- Hidden input field named "website"
- Positioned off-screen with CSS
- Not visible to human users
- Automatically filled by most bots

**Detection Logic:**
```javascript
// If honeypot field has any value, it's likely a bot
if (honeypotValue !== null && honeypotValue !== '' && honeypotValue !== undefined) {
    // Block submission
}
```

### 4. Timing Analysis

**Implementation:**
- Records form load time in hidden field
- Checks submission time against minimum threshold
- Default minimum: 3 seconds (configurable)

**Detection Logic:**
```javascript
const timeTaken = Date.now() - formStartTime;
if (timeTaken < 3000) {
    // Block submission - too fast for human
}
```

### 5. Request Fingerprinting

**Implementation:**
- Creates unique fingerprint from request headers
- Tracks User-Agent, Accept-Language, Accept-Encoding, IP
- Used for logging and pattern analysis

**Fingerprint Components:**
- Client IP address
- User-Agent string
- Accept-Language header
- Accept-Encoding header

### 6. Input Validation

**Zod Schema Validation:**
```typescript
const contactFormSchema = z.object({
    fullName: z.string().min(2).max(50),
    phone: z.string().min(9).max(15).regex(/^[0-9+\-\s()]+$/),
    email: z.string().email().min(5).max(100),
    // Protection fields
    recaptchaToken: z.string().optional(),
    honeypot: z.string().optional(),
    formStartTime: z.number().optional()
});
```

**Features:**
- Hebrew error messages
- Phone number normalization for Israeli numbers
- Email normalization (lowercase, trim)
- Comprehensive input sanitization

## Security Flow

### Form Submission Process

1. **Client-side Protection:**
   - reCAPTCHA token generation
   - Honeypot field check
   - Form timing validation
   - Input validation

2. **Server-side Verification:**
   - Environment variables validation
   - Request parsing and validation
   - Client information extraction
   - Honeypot field verification
   - Timing analysis
   - reCAPTCHA verification
   - Multi-layer rate limiting checks

3. **Processing:**
   - AllChat API submission
   - Email fallback if needed
   - Success/error response

### Error Handling

**Graceful Degradation:**
- Form works even if reCAPTCHA fails to load
- Rate limiting bypassed if Redis is unavailable
- Email fallback if AllChat API fails
- WhatsApp contact option for blocked users

**Hebrew Error Messages:**
- All error messages in Hebrew
- Clear instructions for users
- WhatsApp fallback contact information
- User-friendly explanations

## Monitoring and Logging

### Security Events Logged

1. **Blocked Submissions:**
   - Honeypot triggers
   - Fast submissions
   - reCAPTCHA failures
   - Rate limit violations

2. **Successful Submissions:**
   - Processing time
   - reCAPTCHA scores
   - Client information
   - Rate limit status

3. **System Events:**
   - Redis connection issues
   - reCAPTCHA API failures
   - AllChat API errors
   - Environment configuration warnings

### Log Format

```javascript
console.log('Security event:', {
    type: 'rate_limit_exceeded',
    ip: clientIP,
    email: normalizedEmail,
    fingerprint: requestFingerprint,
    timestamp: Date.now()
});
```

## Configuration

### Required Environment Variables

```env
# Required
ALLCHAT_API_TOKEN=your-token
ALLCHAT_API_URL=https://app.allchat.chat/api/contacts

# Optional but recommended
REDIS_URL=redis://localhost:6379
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key
```

### Optional Configuration

```env
# reCAPTCHA
RECAPTCHA_MIN_SCORE=0.5

# Rate Limiting (uses defaults if not set)
RATE_LIMIT_IP_MAX_REQUESTS=10
RATE_LIMIT_EMAIL_MAX_REQUESTS=5
RATE_LIMIT_PHONE_MAX_REQUESTS=5
RATE_LIMIT_GLOBAL_MAX_REQUESTS=200
```

## Deployment Considerations

### Redis Setup

**Local Development:**
```bash
# Install Redis
brew install redis  # macOS
sudo apt install redis-server  # Ubuntu

# Start Redis
redis-server
```

**Production Options:**
- Redis Cloud
- AWS ElastiCache
- Google Cloud Memorystore
- Azure Cache for Redis

### reCAPTCHA Setup

1. Visit [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Create new site with reCAPTCHA v3
3. Add your domain(s)
4. Copy Site Key and Secret Key to environment variables

### Security Headers

Consider adding these security headers in production:

```javascript
// next.config.js
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    }
                ]
            }
        ];
    }
};
```

## Testing

### Security Testing

1. **Rate Limiting:**
   - Submit multiple forms quickly
   - Verify rate limit messages
   - Test different IP addresses

2. **reCAPTCHA:**
   - Test with valid/invalid tokens
   - Test with network failures
   - Verify graceful degradation

3. **Honeypot:**
   - Fill honeypot field programmatically
   - Verify bot detection

4. **Timing:**
   - Submit form immediately after load
   - Verify timing validation

### Load Testing

```bash
# Example with curl
for i in {1..20}; do
  curl -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{"fullName":"Test","email":"test@example.com","phone":"0501234567"}' &
done
```

## Maintenance

### Regular Tasks

1. **Monitor Redis Memory Usage:**
   ```bash
   redis-cli info memory
   ```

2. **Check Rate Limit Keys:**
   ```bash
   redis-cli keys "rate_limit:*"
   ```

3. **Review Security Logs:**
   - Check for unusual patterns
   - Monitor blocked submissions
   - Analyze reCAPTCHA scores

### Updates

1. **Dependencies:**
   - Keep Redis client updated
   - Update reCAPTCHA libraries
   - Monitor security advisories

2. **Configuration:**
   - Adjust rate limits based on usage
   - Update reCAPTCHA score thresholds
   - Review and update error messages

## Troubleshooting

### Common Issues

1. **Redis Connection Errors:**
   - Check Redis server status
   - Verify connection string
   - Check network connectivity

2. **reCAPTCHA Failures:**
   - Verify site/secret keys
   - Check domain configuration
   - Monitor API quotas

3. **Rate Limiting Issues:**
   - Check Redis key expiration
   - Verify rate limit configuration
   - Monitor Redis memory usage

### Debug Mode

Enable debug logging by setting:
```env
NODE_ENV=development
```

This will provide detailed logs for troubleshooting security issues.

## Security Best Practices

1. **Regular Updates:**
   - Keep all dependencies updated
   - Monitor security advisories
   - Update rate limit thresholds based on usage

2. **Monitoring:**
   - Set up alerts for unusual activity
   - Monitor rate limit violations
   - Track reCAPTCHA score distributions

3. **Backup Plans:**
   - Ensure graceful degradation works
   - Test fallback mechanisms
   - Have manual contact options available

4. **Documentation:**
   - Keep security documentation updated
   - Document configuration changes
   - Maintain incident response procedures

## Support

For security-related issues or questions:

1. Check logs for detailed error information
2. Verify environment configuration
3. Test individual security components
4. Contact development team with specific error details

Remember: Security is an ongoing process. Regularly review and update these measures based on new threats and usage patterns.
