# Technical Specifications & Requirements

## Next.js Configuration
- **Version**: Next.js 14 with App Router
- **TypeScript**: Strict mode enabled
- **Static Export**: Configured for static hosting
- **Image Optimization**: Next.js Image component with static export
- **Internationalization**: Hebrew RTL support

## Tailwind CSS Setup
- **RTL Support**: Using `dir="rtl"` with Tailwind RTL utilities
- **Custom Colors**: SwitchQ brand colors
- **Typography**: Hebrew-friendly fonts (Heebo, Assistant, or system fonts)
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Optional implementation

## Project Structure
```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── components/
├── public/
│   ├── images/
│   └── icons/
├── lib/
│   └── utils.ts
├── types/
│   └── index.ts
└── data/
    └── products.json
```

## Required Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "lucide-react": "^0.300.0",
    "framer-motion": "^10.16.0",
    "react-hook-form": "^7.48.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "@tailwindcss/typography": "^0.5.0",
    "@tailwindcss/forms": "^0.5.0"
  }
}
```

## Performance Requirements
- **Core Web Vitals**: All metrics in green
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms
- **Image Optimization**: WebP format with fallbacks
- **Bundle Size**: < 500KB initial load

## SEO Requirements
- **Meta Tags**: Hebrew title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Schema Markup**: LocalBusiness and Product schemas
- **Sitemap**: XML sitemap generation
- **Robots.txt**: Search engine directives
- **Hebrew Keywords**: Server room, IoT, monitoring, sensors

## Accessibility (WCAG 2.1 AA)
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: ARIA labels and descriptions
- **Color Contrast**: Minimum 4.5:1 ratio
- **Focus Indicators**: Visible focus states
- **Alt Text**: All images with descriptive alt text
- **Semantic HTML**: Proper heading hierarchy

## Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **RTL Support**: All supported browsers with RTL text direction

## Security Considerations
- **Content Security Policy**: Strict CSP headers
- **Form Validation**: Client and server-side validation
- **XSS Protection**: Input sanitization
- **HTTPS**: SSL/TLS encryption required
- **Privacy**: GDPR-compliant contact forms

## Development Environment
- **Node.js**: Version 18+ required
- **Package Manager**: npm or yarn
- **Code Formatting**: Prettier with Hebrew support
- **Linting**: ESLint with Next.js rules
- **Git Hooks**: Pre-commit formatting and linting

## Deployment Configuration
- **Static Export**: `next export` for static hosting
- **Asset Optimization**: Image compression and optimization
- **CDN Ready**: Static assets optimized for CDN delivery
- **Environment Variables**: Production configuration
- **Build Optimization**: Tree shaking and code splitting
