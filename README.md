# SwitchQ IoT Server Room Protection Landing Page

A professional Hebrew RTL landing page for SwitchQ's IoT server room protection solution using Efento sensors, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🇮🇱 **Hebrew RTL Support** - Complete right-to-left layout and typography
- 📱 **Mobile-First Responsive** - Optimized for all device sizes
- 🚀 **High Performance** - Lighthouse score > 90
- 📧 **Contact Form Integration** - AllChat API with email fallback
- 🎨 **Professional Design** - SwitchQ branding with purple/green theme
- ♿ **Accessible** - WCAG 2.1 AA compliance
- 🔧 **TypeScript** - Strict mode for better code quality

## Contact Form Integration

The contact form integrates with AllChat API for lead management:

### Form Fields (Simplified)
- **שם מלא** (Full Name) - Required
- **טלפון** (Phone) - Required, auto-formats Israeli numbers
- **אימייל** (Email) - Required

### API Integration
- **Primary**: AllChat API with retry logic (3 attempts)
- **Fallback**: Email notification if API fails
- **Error Handling**: Hebrew error messages with WhatsApp fallback

## Setup Instructions

### 1. Environment Variables

Copy the example environment file:
```bash
cp .env.example .env.local
```

Configure your environment variables in `.env.local`:
```env
# AllChat API Configuration
ALLCHAT_API_TOKEN=your-actual-token-here
ALLCHAT_API_URL=https://app.allchat.chat/api/contacts

# Next.js Configuration
NEXT_OUTPUT=
```

### 2. Development

Install dependencies:
```bash
npm install
```

Start development server (with API routes):
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 3. Production Deployment

#### Option A: With API Routes (Recommended for Laravel Forge)
```bash
npm run build
npm start
```

#### Option B: Static Export (for CDN hosting)
```bash
npm run build:static
# or
npm run export
```

## Deployment on Laravel Forge

### Prerequisites
1. **Node.js Version**: Ensure Node.js 18+ is installed on your server
2. **PM2**: Install PM2 for process management: `npm install -g pm2`

### Deployment Steps

1. **Environment Variables**: Set up the following in Laravel Forge environment file:
   ```bash
   ALLCHAT_API_TOKEN=1828114.l2pGf6nJDfHCI0mdquVkyW5kU9eaIosTjcRVEvYQSddf37E123
   ALLCHAT_API_URL=https://app.allchat.chat/api/contacts
   NODE_ENV=production
   ```

2. **Build Script**: In Laravel Forge, set your build script to:
   ```bash
   cd /home/forge/your-domain.com
   git pull origin main
   npm install
   npm run build
   pm2 restart servers-room-1 || pm2 start npm --name "servers-room-1" -- start
   ```

   **Or use the provided deployment script:**
   ```bash
   bash deploy.sh
   ```

3. **Alternative Start Methods**:
   - **Option A (Recommended)**: `npm start` (uses npx)
   - **Option B**: `npm run start:local` (uses local binary)
   - **Option C**: `npx next start`
   - **Option D**: `./node_modules/.bin/next start`

4. **Port Configuration**: 
   - Default port: 3000
   - Custom port: `PORT=3001 npm start`

### Troubleshooting

**If you get "next: not found" error:**

1. **Check if dependencies are installed**:
   ```bash
   ls node_modules/.bin/next
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Use npx instead**:
   ```bash
   npx next start
   ```

4. **Check Node.js version**:
   ```bash
   node --version  # Should be 18+
   npm --version
   ```

### PM2 Process Management (Recommended)

1. **Start with PM2**:
   ```bash
   pm2 start npm --name "servers-room-1" -- start
   ```

2. **Save PM2 configuration**:
   ```bash
   pm2 save
   pm2 startup
   ```

3. **Monitor processes**:
   ```bash
   pm2 status
   pm2 logs servers-room-1
   ```

## API Endpoints

### POST /api/contact

Handles contact form submissions with AllChat integration.

**Request Body:**
```json
{
  "fullName": "נדב אלבלק",
  "phone": "0501234567",
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "הודעתך נשלחה בהצלחה! נחזור אליך בהקדם."
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "אירעה שגיאה. אנא נסה שוב או צור קשר ב-WhatsApp: 0765991386"
}
```

## Phone Number Processing

The system automatically processes Israeli phone numbers:
- `0501234567` → `+972501234567`
- `972501234567` → `+972501234567`
- `+972501234567` → `+972501234567` (no change)

## AllChat Integration Details

The form data is sent to AllChat with the following structure:
```json
{
  "phone": "+972501234567",
  "email": "user@example.com",
  "first_name": "נדב",
  "last_name": "אלבלק",
  "actions": [
    { "action": "add_tag", "tag_name": "Landing Page" },
    { "action": "set_field_value", "field_name": "Products of interest", "value": "חדרי שרתים" },
    { "action": "send_flow", "flow_id": 1753785330127 }
  ]
}
```

## Error Handling Strategy

1. **Retry Logic**: 3 attempts with exponential backoff (1s, 2s, 4s)
2. **Email Fallback**: If API fails, send email notification
3. **User Experience**: Clear Hebrew error messages
4. **WhatsApp Fallback**: Direct users to WhatsApp for immediate support

## File Structure

```
app/
├── api/
│   └── contact/
│       └── route.ts              # AllChat API integration
├── components/
│   ├── forms/
│   │   └── ContactForm.tsx       # Simplified contact form
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Textarea.tsx
├── globals.css                   # Global styles with RTL
├── layout.tsx                    # Root layout with Hebrew fonts
└── page.tsx                      # Main landing page
```

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with RTL support
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Heebo, Assistant, Noto Sans Hebrew

## Contact Information

- **WhatsApp**: +972765991386
- **Email**: contact@switchq.co.il
- **Company**: SwitchQ

## License

ISC License - SwitchQ
