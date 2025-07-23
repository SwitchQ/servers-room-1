# Component Architecture & Development Plan

## Component Hierarchy

```
app/
├── layout.tsx (Root Layout - RTL, Hebrew fonts, global styles)
├── page.tsx (Main Landing Page)
├── globals.css (Global styles, Tailwind, RTL support)
└── components/
    ├── layout/
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   └── Navigation.tsx
    ├── sections/
    │   ├── HeroSection.tsx
    │   ├── ProblemSection.tsx
    │   ├── SolutionSection.tsx
    │   ├── ProductShowcase.tsx
    │   ├── HowItWorks.tsx
    │   ├── BenefitsSection.tsx
    │   ├── PackagesSection.tsx
    │   ├── ApplicationsSection.tsx
    │   └── ContactSection.tsx
    ├── ui/
    │   ├── Button.tsx
    │   ├── Card.tsx
    │   ├── Badge.tsx
    │   ├── Input.tsx
    │   ├── Textarea.tsx
    │   ├── Modal.tsx
    │   └── LoadingSpinner.tsx
    ├── product/
    │   ├── ProductCard.tsx
    │   ├── SensorCard.tsx
    │   ├── GatewayCard.tsx
    │   ├── PackageCard.tsx
    │   └── SpecificationTable.tsx
    ├── forms/
    │   ├── ContactForm.tsx
    │   ├── QuoteForm.tsx
    │   └── FormField.tsx
    └── common/
        ├── Icon.tsx
        ├── Logo.tsx
        ├── Stats.tsx
        └── AnimatedCounter.tsx
```

## Core Components Specifications

### 1. Layout Components

#### Header.tsx
```typescript
interface HeaderProps {
  className?: string;
}

// Features:
// - SwitchQ logo with link to home
// - Navigation menu (desktop/mobile)
// - Contact phone number (clickable)
// - CTA button "צור קשר"
// - Mobile hamburger menu
// - RTL support
```

#### Footer.tsx
```typescript
interface FooterProps {
  className?: string;
}

// Features:
// - Company information
// - Quick links
// - Contact details
// - Social media links (if applicable)
// - Copyright notice
// - Legal links
```

#### Navigation.tsx
```typescript
interface NavigationProps {
  isMobile?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}

// Features:
// - Smooth scroll to sections
// - Active section highlighting
// - Mobile responsive
// - RTL support
```

### 2. Section Components

#### HeroSection.tsx
```typescript
interface HeroSectionProps {
  className?: string;
}

// Features:
// - Main headline in Hebrew
// - Subheadline with key benefits
// - Primary CTA button
// - Hero image/illustration
// - Key statistics or badges
// - Animated elements
```

#### ProblemSection.tsx
```typescript
interface ProblemSectionProps {
  className?: string;
}

// Features:
// - Problem statement
// - Risk factors list
// - Statistics about server room failures
// - Visual icons for each problem
// - Urgency messaging
```

#### SolutionSection.tsx
```typescript
interface SolutionSectionProps {
  className?: string;
}

// Features:
// - Solution overview
// - Key components explanation
// - Benefits highlighting
// - System architecture diagram
// - Partnership mention (SwitchQ + Efento)
```

#### ProductShowcase.tsx
```typescript
interface ProductShowcaseProps {
  sensors: Sensor[];
  gateway: Gateway;
  className?: string;
}

// Features:
// - Interactive product cards
// - Detailed specifications
// - Use case explanations
// - Product images
// - Links to detailed specs
```

#### HowItWorks.tsx
```typescript
interface HowItWorksProps {
  className?: string;
}

// Features:
// - 3-step process visualization
// - Step-by-step illustrations
// - Timeline or progress indicator
// - Interactive elements
// - Time estimates
```

#### BenefitsSection.tsx
```typescript
interface BenefitsSectionProps {
  benefits: Benefit[];
  className?: string;
}

// Features:
// - Benefit cards with icons
// - Statistics and metrics
// - Animated counters
// - Comparison tables
// - ROI calculator (optional)
```

#### PackagesSection.tsx
```typescript
interface PackagesSectionProps {
  packages: Package[];
  className?: string;
}

// Features:
// - Package comparison cards
// - Feature lists
// - Pricing display (or contact for pricing)
// - Recommendation badges
// - CTA buttons for each package
```

#### ApplicationsSection.tsx
```typescript
interface ApplicationsSectionProps {
  applications: Application[];
  className?: string;
}

// Features:
// - Industry-specific use cases
// - Customer logos/testimonials
// - Success metrics
// - Case study links
// - Interactive industry selector
```

#### ContactSection.tsx
```typescript
interface ContactSectionProps {
  className?: string;
}

// Features:
// - Contact form
// - Contact information
// - WhatsApp integration
// - Map (optional)
// - Response time promise
```

### 3. UI Components

#### Button.tsx
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'cta' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  href?: string; // For link buttons
}

// Variants:
// - primary: Blue background, white text
// - secondary: Transparent background, blue border
// - cta: Green background, larger size
// - outline: Border only, transparent background
```

#### Card.tsx
```typescript
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'product' | 'benefit' | 'package';
  hover?: boolean;
  className?: string;
}

// Features:
// - Hover effects
// - Shadow variations
// - Border radius consistency
// - RTL support
```

#### Badge.tsx
```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant: 'success' | 'warning' | 'info' | 'default';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Use cases:
// - Feature highlights
// - Status indicators
// - Category labels
// - Recommendations
```

### 4. Product Components

#### ProductCard.tsx
```typescript
interface ProductCardProps {
  product: Sensor | Gateway;
  showDetails?: boolean;
  onDetailsClick?: () => void;
  className?: string;
}

// Features:
// - Product image
// - Name and description
// - Key specifications
// - Use case explanation
// - CTA button
// - Hover effects
```

#### SensorCard.tsx
```typescript
interface SensorCardProps {
  sensor: Sensor;
  compact?: boolean;
  className?: string;
}

// Features:
// - Sensor-specific layout
// - Specification highlights
// - Category badge
// - Feature list
// - Technical details modal
```

#### PackageCard.tsx
```typescript
interface PackageCardProps {
  package: Package;
  recommended?: boolean;
  onSelect?: () => void;
  className?: string;
}

// Features:
// - Package contents list
// - Feature comparison
// - Pricing display
// - Recommendation badge
// - Selection state
```

#### SpecificationTable.tsx
```typescript
interface SpecificationTableProps {
  specifications: Record<string, any>;
  title?: string;
  className?: string;
}

// Features:
// - Responsive table layout
// - Hebrew/English value support
// - Collapsible sections
// - Search/filter functionality
```

### 5. Form Components

#### ContactForm.tsx
```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  loading?: boolean;
  className?: string;
}

interface ContactFormData {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  serverRoomSize: string;
  equipmentType: string;
  message: string;
}

// Features:
// - Form validation with Zod
// - Hebrew labels and placeholders
// - Error handling
// - Success states
// - Required field indicators
```

#### QuoteForm.tsx
```typescript
interface QuoteFormProps {
  selectedPackage?: string;
  onSubmit: (data: QuoteFormData) => void;
  className?: string;
}

// Features:
// - Package pre-selection
// - Custom requirements
// - File upload (floor plans)
// - Multi-step form
// - Progress indicator
```

### 6. Common Components

#### Icon.tsx
```typescript
interface IconProps {
  name: string; // Lucide icon name
  size?: number;
  color?: string;
  className?: string;
}

// Features:
// - Lucide React integration
// - RTL icon flipping
// - Consistent sizing
// - Color theming
```

#### Logo.tsx
```typescript
interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Features:
// - SwitchQ logo variants
// - Responsive sizing
// - Dark/light mode support
// - Link functionality
```

#### Stats.tsx
```typescript
interface StatsProps {
  value: string | number;
  label: string;
  description?: string;
  animated?: boolean;
  className?: string;
}

// Features:
// - Animated counters
// - Large number formatting
// - Hebrew text support
// - Visual emphasis
```

## State Management

### Context Providers
```typescript
// ContactContext - Form state management
// ThemeContext - Dark/light mode (optional)
// LanguageContext - Hebrew/English (if needed)
```

### Custom Hooks
```typescript
// useContactForm - Form handling
// useScrollSpy - Active section detection
// useIntersectionObserver - Animations
// useLocalStorage - User preferences
```

## Animation Strategy

### Framer Motion Integration
```typescript
// Scroll-triggered animations
// Page transitions
// Hover effects
// Loading states
// Form interactions
```

### Animation Patterns
- **Fade In**: Section reveals on scroll
- **Slide Up**: Cards and content blocks
- **Scale**: Buttons and interactive elements
- **Stagger**: Lists and grids
- **Counter**: Animated statistics

## Responsive Design Strategy

### Breakpoint Usage
- **Mobile**: 320px - 639px (single column)
- **Tablet**: 640px - 1023px (2 columns)
- **Desktop**: 1024px - 1279px (3-4 columns)
- **Large**: 1280px+ (full layout)

### Component Responsiveness
- Grid layouts with responsive columns
- Typography scaling
- Image optimization
- Touch-friendly interactions
- Mobile navigation patterns

## Performance Optimization

### Code Splitting
```typescript
// Lazy load non-critical components
// Dynamic imports for heavy features
// Route-based splitting (if multi-page)
```

### Image Optimization
```typescript
// Next.js Image component
// WebP with fallbacks
// Responsive images
// Lazy loading
// Placeholder blur
```

### Bundle Optimization
```typescript
// Tree shaking
// Dead code elimination
// Minimal dependencies
// CSS purging
// Compression
```

## Testing Strategy

### Component Testing
```typescript
// Jest + React Testing Library
// Accessibility testing
// Form validation testing
// Responsive design testing
// RTL text testing
```

### Integration Testing
```typescript
// User flow testing
// Form submission testing
// Navigation testing
// Cross-browser testing
```

## Development Workflow

### File Naming Conventions
- Components: PascalCase (e.g., `ProductCard.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useContactForm.ts`)
- Utilities: camelCase (e.g., `formatPrice.ts`)
- Types: PascalCase with 'Type' suffix (e.g., `ProductType.ts`)

### Import Organization
```typescript
// 1. React and Next.js imports
// 2. Third-party libraries
// 3. Internal components
// 4. Types and interfaces
// 5. Utilities and helpers
```

### Code Quality
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Husky pre-commit hooks
- Conventional commits
