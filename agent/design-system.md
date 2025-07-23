# Design System & UI/UX Guidelines

## Brand Colors (SwitchQ)
Based on SwitchQ website analysis:

```css
:root {
  /* Primary Colors */
  --primary-purple: #7a00cc;
  --primary-dark: #5c0099;
  --primary-light: #9933ff;
  
  /* Secondary Colors */
  --secondary-gray: #6b7280;
  --secondary-light: #f3f4f6;
  --secondary-dark: #374151;
  
  /* Accent Colors */
  --accent-green: #10b981;
  --accent-orange: #f59e0b;
  --accent-red: #ef4444;
  
  /* Neutral Colors */
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  
  /* Status Colors */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;
}
```

## Typography (Hebrew RTL)

### Font Stack
```css
font-family: 'Heebo', 'Assistant', 'Noto Sans Hebrew', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Font Sizes & Hierarchy
```css
/* Headlines */
.text-hero: 3.5rem (56px) - Hero headline
.text-h1: 2.5rem (40px) - Main section titles
.text-h2: 2rem (32px) - Subsection titles
.text-h3: 1.5rem (24px) - Component titles
.text-h4: 1.25rem (20px) - Card titles

/* Body Text */
.text-lg: 1.125rem (18px) - Large body text
.text-base: 1rem (16px) - Regular body text
.text-sm: 0.875rem (14px) - Small text
.text-xs: 0.75rem (12px) - Caption text

/* Line Heights */
.leading-tight: 1.25
.leading-normal: 1.5
.leading-relaxed: 1.625
```

### Font Weights
```css
.font-light: 300
.font-normal: 400
.font-medium: 500
.font-semibold: 600
.font-bold: 700
.font-extrabold: 800
```

## Layout & Spacing

### Container Sizes
```css
.container-sm: max-width: 640px
.container-md: max-width: 768px
.container-lg: max-width: 1024px
.container-xl: max-width: 1280px
.container-2xl: max-width: 1536px
```

### Spacing Scale (Tailwind)
```css
.space-1: 0.25rem (4px)
.space-2: 0.5rem (8px)
.space-3: 0.75rem (12px)
.space-4: 1rem (16px)
.space-5: 1.25rem (20px)
.space-6: 1.5rem (24px)
.space-8: 2rem (32px)
.space-10: 2.5rem (40px)
.space-12: 3rem (48px)
.space-16: 4rem (64px)
.space-20: 5rem (80px)
.space-24: 6rem (96px)
```

### Grid System
```css
/* 12-column grid */
.grid-cols-12
.col-span-1 to .col-span-12

/* Common layouts */
.grid-cols-1 (mobile)
.grid-cols-2 (tablet)
.grid-cols-3 (desktop)
.grid-cols-4 (large desktop)
```

## Components Design

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: var(--primary-purple);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(122, 0, 204, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--primary-purple);
  border: 2px solid var(--primary-purple);
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
}

/* CTA Button */
.btn-cta {
  background: var(--accent-green);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--gray-200);
  transition: all 0.3s;
}

.card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-product {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--gray-100);
}
```

### Forms
```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--gray-300);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-purple);
  box-shadow: 0 0 0 3px rgba(122, 0, 204, 0.1);
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--gray-700);
}
```

### Navigation
```css
.nav-link {
  color: var(--gray-700);
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s;
}

.nav-link:hover {
  color: var(--primary-purple);
  background: var(--gray-50);
}

.nav-link.active {
  color: var(--primary-purple);
  background: var(--primary-light);
  background-opacity: 0.1;
}
```

## RTL (Right-to-Left) Considerations

### Text Direction
```css
html[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

/* Flip margins and paddings */
html[dir="rtl"] .ml-4 { margin-right: 1rem; margin-left: 0; }
html[dir="rtl"] .mr-4 { margin-left: 1rem; margin-right: 0; }
html[dir="rtl"] .pl-4 { padding-right: 1rem; padding-left: 0; }
html[dir="rtl"] .pr-4 { padding-left: 1rem; padding-right: 0; }
```

### Icons & Images
```css
/* Flip directional icons */
html[dir="rtl"] .icon-arrow-right {
  transform: scaleX(-1);
}

/* Maintain image orientation */
html[dir="rtl"] img {
  transform: none;
}
```

## Responsive Breakpoints

```css
/* Mobile First Approach */
/* xs: 0px - 639px (default) */
/* sm: 640px and up */
@media (min-width: 640px) { }

/* md: 768px and up */
@media (min-width: 768px) { }

/* lg: 1024px and up */
@media (min-width: 1024px) { }

/* xl: 1280px and up */
@media (min-width: 1280px) { }

/* 2xl: 1536px and up */
@media (min-width: 1536px) { }
```

## Animation & Transitions

### Micro-interactions
```css
/* Hover effects */
.hover-lift:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}

/* Button press effect */
.btn:active {
  transform: translateY(1px);
}

/* Fade in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

### Loading States
```css
.loading-spinner {
  border: 3px solid var(--gray-200);
  border-top: 3px solid var(--primary-purple);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Accessibility

### Focus States
```css
.focus-visible:focus {
  outline: 2px solid var(--primary-purple);
  outline-offset: 2px;
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-purple);
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
}

.skip-link:focus {
  top: 6px;
}
```

### Color Contrast
- All text must meet WCAG AA standards (4.5:1 ratio)
- Interactive elements must have clear focus indicators
- Error states must be distinguishable by more than color alone

## Icons & Graphics

### Icon System
- Use Lucide React icons for consistency
- 24px default size for UI icons
- 32px for feature icons
- 48px for section icons

### Image Guidelines
- WebP format with JPEG fallback
- Responsive images with srcset
- Alt text for all images
- Lazy loading for below-fold images

## Dark Mode (Optional)
```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--gray-900);
    --bg-secondary: var(--gray-800);
    --text-primary: var(--gray-100);
    --text-secondary: var(--gray-300);
  }
}
```

## Performance Considerations
- Critical CSS inlined
- Non-critical CSS loaded asynchronously
- Font loading optimization
- Image optimization and lazy loading
- Minimal JavaScript for interactions
- CSS animations over JavaScript animations
