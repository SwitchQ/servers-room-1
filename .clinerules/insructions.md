# Coding Agent Instructions for IoT Server Room Protection Landing Page

## Project Overview
You are tasked with building a professional Hebrew landing page for SwitchQ's IoT server room protection solution using Efento sensors. This is a B2B landing page targeting IT managers, data center operators, and business owners in Israel.

## Technology Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript (strict mode)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Static export ready

## Key Requirements

### 1. Hebrew RTL Support
- **CRITICAL**: All text must be in Hebrew with RTL (right-to-left) direction
- Use `dir="rtl"` on the html element
- Implement proper RTL Tailwind utilities
- Hebrew fonts: Heebo, Assistant, or Noto Sans Hebrew
- Test all layouts in RTL mode

### 2. SwitchQ Branding
- Primary colors: Purple (#7a00cc), Green (#10b981)
- Professional, technical aesthetic
- Use SwitchQ contact information:
  - WhatsApp: +972765991386 (primary contact method)
  - Email: contact@switchq.co.il
  - WhatsApp integration required

### 3. Content Structure (All in Hebrew)
Follow the content structure defined in `/agent/content-structure.md`:
1. Header with navigation
2. Hero section - "הגנה חכמה על חדרי השרתים שלכם"
3. Problem statement - Server room risks
4. Solution overview - SwitchQ + Efento
5. Product showcase - 4 sensors + gateway
6. How it works - 3 steps
7. Benefits section
8. Packages comparison
9. Applications/use cases
10. Contact form
11. Footer

### 4. Product Information
Use data from `/agent/products-data.json`:
- Temperature & Humidity Sensor
- Water Leak Sensor  
- Motion/Access Sensor
- BLE PoE Gateway
- 3 package tiers (Basic, Professional, Enterprise)

### 5. Performance Requirements
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Mobile-first responsive design
- Image optimization with Next.js Image
- Static export configuration

### 6. Component Architecture
Follow the structure in `/agent/component-architecture.md`:
- Reusable UI components (Button, Card, Badge, etc.)
- Section components for each page section
- Product-specific components
- Form components with validation
- Layout components (Header, Footer, Navigation)

## Development Guidelines

### File Structure
```
app/
├── layout.tsx (RTL setup, Hebrew fonts)
├── page.tsx (Main landing page)
├── globals.css (Tailwind + RTL styles)
└── components/
    ├── layout/ (Header, Footer, Navigation)
    ├── sections/ (HeroSection, ProductShowcase, etc.)
    ├── ui/ (Button, Card, Input, etc.)
    ├── product/ (ProductCard, SensorCard, etc.)
    ├── forms/ (ContactForm, QuoteForm)
    └── common/ (Icon, Logo, Stats)
```

### Code Quality Standards
- **TypeScript**: Strict mode, no `any` types
- **Components**: Single responsibility, proper interfaces
- **Styling**: Tailwind classes only, no inline styles
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Optimize images, lazy loading
- **RTL**: Test all components in RTL mode

### Hebrew Content Guidelines
- All user-facing text in Hebrew
- Technical terms can remain in English if commonly used
- Proper Hebrew typography and spacing
- RTL-appropriate icon directions
- Hebrew form labels and validation messages

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions on mobile
- Optimized mobile navigation
- Responsive typography scaling

### Form Handling
- React Hook Form for form management
- Zod schemas for validation
- Hebrew error messages
- Contact form fields:
  - שם מלא (Full Name)
  - חברה (Company)
  - טלפון (Phone)
  - אימייל (Email)
  - גודל חדר השרתים (Server Room Size)
  - סוג הציוד (Equipment Type)
  - הודעה (Message)

### Animation Guidelines
- Subtle, professional animations
- Scroll-triggered reveals
- Hover effects on interactive elements
- Loading states for forms
- Smooth transitions between states
- Performance-optimized animations

## Implementation Priority

### Phase 1: Foundation
1. Next.js setup with TypeScript
2. Tailwind configuration with RTL
3. Basic component structure
4. Hebrew font integration

### Phase 2: Core Components
1. UI components (Button, Card, Input)
2. Layout components (Header, Footer)
3. Basic styling and theming

### Phase 3: Content Sections
1. Hero section with main CTA
2. Problem and solution sections
3. Product showcase
4. Contact form

### Phase 4: Polish & Optimization
1. Animations and interactions
2. Mobile optimization
3. Performance optimization
4. Accessibility testing

## Testing Requirements
- Test all components in RTL mode
- Verify Hebrew text rendering
- Mobile responsiveness testing
- Form validation testing
- Cross-browser compatibility
- Accessibility with screen readers

## Deployment Configuration
- Configure for static export
- Optimize for CDN delivery
- Environment variables for contact form
- SEO meta tags in Hebrew
- Sitemap generation

## Success Criteria
- Professional, conversion-focused design
- Perfect Hebrew RTL implementation
- Mobile-optimized experience
- Fast loading performance
- Accessible to all users
- Lead generation through contact forms

## Resources
- Design system: `/agent/design-system.md`
- Product data: `/agent/products-data.json`
- Content structure: `/agent/content-structure.md`
- Component architecture: `/agent/component-architecture.md`
- Development roadmap: `/agent/development-roadmap.md`

## Contact for Clarifications
If you need clarification on any requirements, refer to the documentation in the `/agent/` folder or ask specific questions about:
- Hebrew content and RTL implementation
- SwitchQ branding requirements
- Technical product specifications
- Component architecture decisions
- Performance optimization strategies

Remember: This is a professional B2B landing page for the Israeli market. Quality, performance, and proper Hebrew implementation are critical for success.
