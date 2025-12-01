# Arogya React Components

Reusable React components for the Arogya wellness website, built following the Arogya Design System specifications.

## Installation

```bash
npm install prop-types
```

## Components

### Button

A flexible button component with three variants and three sizes.

**Props:**
- `children` (node, required) - Button content
- `variant` (string) - 'primary', 'secondary', or 'ghost' (default: 'primary')
- `size` (string) - 'small', 'medium', or 'large' (default: 'medium')
- `onClick` (function) - Click handler
- `disabled` (boolean) - Disabled state
- `type` (string) - 'button', 'submit', or 'reset' (default: 'button')
- `className` (string) - Additional CSS classes
- `ariaLabel` (string) - Accessibility label

**Usage:**
```jsx
import { Button } from './components';

<Button variant="primary" size="large" onClick={handleClick}>
  Join the Program
</Button>

<Button variant="secondary">
  Learn More
</Button>

<Button variant="ghost">
  View Schedule
</Button>
```

---

### Input

Text input component with label, error states, and helper text support.

**Props:**
- `label` (string) - Input label
- `id` (string) - Input ID (defaults to name if not provided)
- `name` (string, required) - Input name
- `type` (string) - Input type (default: 'text')
- `placeholder` (string) - Placeholder text
- `value` (string) - Input value
- `onChange` (function) - Change handler
- `onBlur` (function) - Blur handler
- `required` (boolean) - Required field
- `disabled` (boolean) - Disabled state
- `error` (string) - Error message
- `helperText` (string) - Helper text
- `className` (string) - Additional CSS classes

**Usage:**
```jsx
import { Input } from './components';

<Input
  label="Full Name"
  name="fullName"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
/>

<Input
  label="Email Address"
  name="email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
  required
/>
```

---

### Card

Card container component with three variants.

**Props:**
- `children` (node, required) - Card content
- `variant` (string) - 'default', 'elevated', or 'feature' (default: 'default')
- `className` (string) - Additional CSS classes
- `onClick` (function) - Click handler (makes card interactive)

**Usage:**
```jsx
import { Card } from './components';

<Card variant="default">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>

<Card variant="elevated">
  <p>This card has a shadow effect.</p>
</Card>

<Card variant="feature" onClick={handleClick}>
  <h3>Interactive Feature Card</h3>
  <p>This card is clickable and has hover effects.</p>
</Card>
```

---

### SessionCard

Specialized card for displaying exercise sessions and lifestyle discussions.

**Props:**
- `type` (string, required) - 'exercise' or 'lifestyle'
- `title` (string, required) - Session title
- `time` (string, required) - Session time (e.g., "9:00 AM ET")
- `duration` (string, required) - Session duration (e.g., "45 minutes")
- `topic` (string) - Optional topic for lifestyle discussions
- `onJoin` (function) - Join button click handler
- `className` (string) - Additional CSS classes

**Usage:**
```jsx
import { SessionCard } from './components';

<SessionCard
  type="exercise"
  title="Morning Movement"
  time="9:00 AM ET"
  duration="45 minutes"
  onJoin={handleJoinSession}
/>

<SessionCard
  type="lifestyle"
  title="Weekly Lifestyle Discussion"
  time="7:00 PM ET"
  duration="30 minutes"
  topic="Sleep Hygiene"
  onJoin={handleJoinSession}
/>
```

---

### Accordion

FAQ accordion component with expandable items.

**Props:**
- `items` (array, required) - Array of objects with `question` and `answer` properties
- `allowMultiple` (boolean) - Allow multiple items open at once (default: false)
- `className` (string) - Additional CSS classes

**Usage:**
```jsx
import { Accordion } from './components';

const faqItems = [
  {
    question: 'What fitness level is required?',
    answer: 'None! Our program is designed for all fitness levels...'
  },
  {
    question: 'What equipment do I need?',
    answer: 'Very little. Most sessions require just a yoga mat...'
  }
];

<Accordion items={faqItems} />

<Accordion items={faqItems} allowMultiple />
```

---

### Header

Sticky navigation header with mobile menu support.

**Props:**
- `logo` (string|node) - Logo image URL or React element
- `logoAlt` (string) - Logo alt text (default: 'Arogya')
- `navLinks` (array) - Array of nav link objects with `label`, `href`, and optional `active` properties
- `ctaText` (string) - CTA button text (default: 'Join Now')
- `onCtaClick` (function) - CTA button click handler
- `className` (string) - Additional CSS classes

**Usage:**
```jsx
import { Header } from './components';

const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'About', href: '/about' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Contact', href: '/contact' }
];

<Header
  logo="/logo.svg"
  logoAlt="Arogya"
  navLinks={navLinks}
  ctaText="Join Now"
  onCtaClick={() => console.log('CTA clicked')}
/>
```

---

### Footer

Site footer with navigation, newsletter signup, and social links.

**Props:**
- `logo` (string|node) - Logo image URL or React element
- `logoAlt` (string) - Logo alt text (default: 'Arogya')
- `tagline` (string) - Footer tagline
- `contactEmail` (string) - Contact email address
- `navLinks` (array) - Navigation links
- `legalLinks` (array) - Legal links (Privacy, Terms, etc.)
- `socialLinks` (array) - Social media links with icons
- `onNewsletterSubmit` (function) - Newsletter form submit handler
- `className` (string) - Additional CSS classes

**Usage:**
```jsx
import { Footer } from './components';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Contact', href: '/contact' }
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' }
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/arogya',
    icon: <FacebookIcon />
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/arogya',
    icon: <InstagramIcon />
  }
];

<Footer
  tagline="Move better. Feel better. Live better."
  contactEmail="hello@arogya.com"
  navLinks={navLinks}
  legalLinks={legalLinks}
  socialLinks={socialLinks}
  onNewsletterSubmit={async (email) => {
    // Handle newsletter signup
    await subscribeToNewsletter(email);
  }}
/>
```

---

## Design System Compliance

All components follow the Arogya Design System specifications:

- **Typography**: DM Sans font family with proper size scale
- **Colors**: Primary teal (#0D9488), Secondary coral (#F97316), warm gray neutrals
- **Spacing**: 4px base unit with consistent rhythm
- **Accessibility**: WCAG AA compliant contrast ratios, keyboard navigation, ARIA labels
- **Responsive**: Mobile-first design with tablet and desktop breakpoints

## CSS Variables Required

Components expect the following CSS custom properties to be defined in your global styles:

```css
:root {
  /* Colors */
  --color-primary: #0D9488;
  --color-primary-hover: #0F766E;
  --color-primary-active: #115E59;
  --color-secondary: #F97316;
  --color-secondary-hover: #EA580C;

  /* Text */
  --text-primary: #1C1917;
  --text-secondary: #57534E;
  --text-muted: #78716C;
  --text-inverse: #FFFFFF;
  --text-inverse-muted: rgba(255, 255, 255, 0.8);

  /* Backgrounds */
  --bg-primary: #FFFFFF;
  --bg-secondary: #FAFAF9;
  --bg-dark: #1C1917;
  --bg-accent: #F0FDFA;

  /* Borders */
  --border-light: #E7E5E4;
  --border-default: #D6D3D1;

  /* Semantic Colors */
  --color-error: #EF4444;
  --color-success: #10B981;

  /* Typography */
  --font-primary: 'DM Sans', system-ui, sans-serif;

  /* Neutrals */
  --neutral-400: #A8A29E;
}
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11 not supported (uses modern CSS features)

## Accessibility Features

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly
- Touch target sizes (minimum 44x44px)
- Color contrast compliance (WCAG AA)

## License

Copyright 2024 Arogya. All rights reserved.
