# TSF DXB Website - Luxury Redesign Specification

**Date:** March 27, 2026  
**Project:** Paddle-Kayak-Club / TSF DXB Website  
**Design Direction:** Luxury Coastal Minimalism  
**Status:** Draft for Review

---

## Executive Summary

Transform the TSF DXB community website from a standard informational site into a world-class, premium digital experience that reflects the aspirational nature of Dubai's paddle community. The redesign focuses on editorial-quality typography, sophisticated color palettes, advanced motion design, and asymmetric layouts that position TSF DXB alongside luxury resort brands and high-end lifestyle publications.

---

## Design Philosophy

### Core Aesthetic: "Luxury Coastal Minimalism"

A visual language that combines:
- **Aman Resorts** — Serene minimalism, generous whitespace, premium materials
- **Kinfolk Magazine** — Editorial typography, calm composition, intentional pacing
- **Dubai Modern** — Futuristic sophistication, bold gestures, premium finishes
- **Coastal Serenity** — Ocean-inspired colors, natural textures, fluid motion

### Design Principles

1. **Typography as Art** — Fonts are the primary visual element, not decoration
2. **Whitespace is Luxury** — Generous spacing signals premium quality
3. **Motion with Intention** — Every animation serves a purpose, nothing gratuitous
4. **Asymmetric Balance** — Dynamic layouts that feel organic, not grid-locked
5. **Tactile Digital** — Textures, gradients, and shadows create depth and warmth

---

## Visual Design System

### 1. Typography System

#### English Fonts

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display | **Playfair Display** | 400, 500, 600, 700, 800, 900 | Headlines, hero text, section titles |
| Body | **Satoshi** | 300, 400, 500, 700 | Body copy, navigation, buttons, labels |
| Mono | **JetBrains Mono** | 400, 500 | Technical details, timestamps (optional) |

#### Arabic Fonts

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display | **Noto Naskh Arabic** | 400, 500, 600, 700 | Headlines, hero text, section titles |
| Body | **IBM Plex Sans Arabic** | 300, 400, 500, 700 | Body copy, navigation, buttons, labels |

#### Type Scale (Desktop)

```
Hero Headline:     88px / 1.1 line-height / -0.02em letter-spacing
Section Title:     56px / 1.2 line-height / -0.01em letter-spacing
H1:                48px / 1.25 line-height
H2:                40px / 1.3 line-height
H3:                32px / 1.35 line-height
H4:                24px / 1.4 line-height
Body Large:        20px / 1.7 line-height
Body:              17px / 1.8 line-height
Body Small:        15px / 1.7 line-height
Caption:           13px / 1.6 line-height / 0.05em letter-spacing
```

#### Mobile Type Scale (responsive)

```
Hero Headline:     48px
Section Title:     36px
H1:                32px
H2:                28px
H3:                24px
```

### 2. Color Palette

#### Primary Colors

```css
/* Deep Oceanic Navy - replaces bright teal */
--primary: 217 91% 18%;        /* #0A2540 */
--primary-light: 217 91% 28%;  /* #16406B */
--primary-dark: 217 91% 12%;   /* #051626 */

/* Warm Sand - for warmth and contrast */
--sand: 35 100% 96%;           /* #FFF9F0 */
--sand-dark: 35 60% 92%;       /* #F5E6D3 */

/* Crisp White */
--white: 0 0% 100%;            /* #FFFFFF */
--off-white: 210 40% 98%;      /* #F8FAFC */
```

#### Accent Colors

```css
/* Bronze/Gold - luxury accent */
--bronze: 38 92% 58%;          /* #D4A574 */
--bronze-light: 38 92% 68%;    /* #E5C5A3 */

/* UAE Green - heritage accent (used sparingly) */
--uae-green: 150 100% 24%;     /* #00734F */

/* Sunset Coral - warm accent */
--coral: 12 85% 65%;           /* #FF8B6B */
```

#### Neutral Palette

```css
/* Deep Navy for text (softer than pure black) */
--text-primary: 217 91% 12%;   /* #051626 */
--text-secondary: 215 28% 35%; /* #6B7280 */
--text-tertiary: 215 16% 55%;  /* #9CA3AF */

/* Borders and dividers */
--border-light: 214 32% 91%;   /* #E5E7EB */
--border-medium: 215 28% 75%;  /* #D1D5DB */
```

#### Gradient Definitions

```css
/* Hero gradient overlay */
--gradient-hero: linear-gradient(
  135deg,
  rgba(10, 37, 64, 0.85) 0%,
  rgba(10, 37, 64, 0.65) 50%,
  rgba(255, 249, 240, 0.1) 100%
);

/* Subtle background mesh */
--gradient-mesh: radial-gradient(
  ellipse at 30% 20%,
  rgba(212, 165, 116, 0.08) 0%,
  transparent 50%
),
radial-gradient(
  ellipse at 70% 80%,
  rgba(10, 37, 64, 0.06) 0%,
  transparent 50%
);

/* Card hover glow */
--gradient-glow: radial-gradient(
  ellipse at center,
  rgba(212, 165, 116, 0.15) 0%,
  transparent 70%
);
```

### 3. Shadow System

#### Multi-Layer Shadows (3+ layers for depth)

```css
/* Card shadow - subtle elevation */
--shadow-card:
  0 1px 2px rgba(5, 22, 38, 0.04),
  0 4px 8px rgba(5, 22, 38, 0.06),
  0 12px 24px rgba(5, 22, 38, 0.04);

/* Elevated shadow - hover state */
--shadow-elevated:
  0 2px 4px rgba(5, 22, 38, 0.06),
  0 8px 16px rgba(5, 22, 38, 0.08),
  0 24px 48px rgba(5, 22, 38, 0.06);

/* Floating shadow - dramatic elements */
--shadow-floating:
  0 4px 8px rgba(5, 22, 38, 0.08),
  0 16px 32px rgba(5, 22, 38, 0.12),
  0 48px 96px rgba(5, 22, 38, 0.10);

/* Glow shadow - accent elements */
--shadow-glow:
  0 0 20px rgba(212, 165, 116, 0.3),
  0 0 40px rgba(212, 165, 116, 0.2),
  0 0 60px rgba(212, 165, 116, 0.1);
```

### 4. Spacing System

#### Section Padding

```css
/* Desktop */
--section-padding-y: 160px;    /* Generous vertical spacing */
--section-padding-y-lg: 200px; /* Hero/large sections */

/* Mobile */
--section-padding-y-mobile: 80px;
```

#### Component Spacing

```css
--space-xs: 8px;
--space-sm: 12px;
--space-md: 20px;
--space-lg: 32px;
--space-xl: 48px;
--space-2xl: 80px;
--space-3xl: 120px;
```

### 5. Border & Radius System

```css
/* Thin, elegant borders */
--border-thin: 1px;
--border-medium: 2px;

/* Subtle opacity for refinement */
--border-opacity: 0.12;

/* Radius values */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

---

## Motion Design System

### 1. Animation Timing Functions

```css
/* Custom easing curves for premium feel */
--ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
--ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
```

### 2. Animation Durations

```css
/* Fast - micro-interactions */
--duration-fast: 150ms;

/* Medium - standard transitions */
--duration-medium: 300ms;

/* Slow - premium, deliberate */
--duration-slow: 600ms;

/* Very slow - dramatic reveals */
--duration-very-slow: 1000ms;
```

### 3. Staggered Reveals

```css
/* Sequential fade-in with delay */
.stagger-1 { animation-delay: 0ms; }
.stagger-2 { animation-delay: 100ms; }
.stagger-3 { animation-delay: 200ms; }
.stagger-4 { animation-delay: 300ms; }
.stagger-5 { animation-delay: 400ms; }
.stagger-6 { animation-delay: 500ms; }
```

### 4. Scroll-Triggered Animations

```css
/* Fade up on scroll */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s var(--ease-out-expo),
              transform 1s var(--ease-out-expo);
}

.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Scale reveal for images */
.scale-reveal {
  transform: scale(1.1);
  transition: transform 1.2s var(--ease-out-expo);
}

.scale-reveal.is-visible {
  transform: scale(1);
}
```

### 5. Parallax Effects

```css
/* Subtle parallax on scroll */
.parallax-bg {
  transform: translateY(0);
  will-change: transform;
}

/* Applied via JavaScript on scroll */
.parallax-bg.scrolled {
  transform: translateY(20px);
}
```

---

## Component Redesign Specifications

### 1. Hero Section

**Current State:** Standard full-height image with centered text overlay.

**Redesigned Vision:**

- **Background:** Full-screen video or high-resolution image with parallax scroll effect
- **Overlay:** Multi-layer gradient (deep navy to transparent)
- **Typography:** 
  - Headline: 88px Playfair Display, massive scale, -0.02em letter-spacing
  - Subhead: 20px Satoshi, generous line-height (1.8)
- **Layout:** Asymmetric - text positioned 15% from left, not centered
- **CTA Button:** 
  - Elevated design with multi-layer shadow
  - Bronze/gold accent border (1px, 12% opacity)
  - Hover: subtle lift (translateY -4px) + shadow expansion
- **Floating Elements:** 
  - Subtle animated wave or water droplet shapes (SVG)
  - 2-3 second float animation (ease-in-out)
- **Scroll Indicator:** 
  - Elegant animated arrow or "scroll" text
  - Fade out on scroll

**Animation Choreography:**
1. Background fades in (800ms)
2. Badge reveals (600ms, delay 200ms)
3. Headline splits by word/letter, staggers in (800ms, delay 400ms)
4. Subhead fades up (600ms, delay 800ms)
5. CTA buttons fade in (400ms, delay 1000ms)
6. Stats fade in sequentially (400ms each, delay 1200ms)

### 2. About / Story Section

**Current State:** Three cards in a grid with icons.

**Redesigned Vision:**

- **Layout:** Split-screen asymmetric
  - Left: Large editorial image (60% width, overlapping section boundary)
  - Right: Text content with generous whitespace
- **Typography:**
  - Section label: 13px uppercase, 0.2em tracking, bronze color
  - Title: 56px Playfair Display, deep navy
  - Body: 17px Satoshi, 1.8 line-height
- **Pull Quote:** 
  - 32px italic, centered, with decorative quotation marks
  - Bronze left border (3px)
  - Generous padding (80px vertical)
- **Cards:** 
  - Horizontal layout (not vertical grid)
  - Scroll-triggered horizontal scroll or snap sections
  - Each card: 400px width, full-height
  - Image background with gradient overlay
  - Text reveals on hover

**Animation:**
- Image parallax on scroll
- Text content fades in from right (staggered)
- Pull quote scales up from 0.95 to 1.0

### 3. Gatherings / Activities Section

**Current State:** Grid of cards with icons and weather information.

**Redesigned Vision:**

- **Layout:** Masonry grid or horizontal scroll gallery
- **Cards:**
  - Full-bleed imagery as card backgrounds
  - Gradient overlay (navy to transparent, bottom to top)
  - Content positioned bottom-left
  - Hover: image scales (1.0 to 1.05), overlay darkens
- **Weather Widget:**
  - Floating card with backdrop blur (glassmorphism)
  - Positioned overlapping section boundary
  - Minimalist icons (thin stroke weight)
  - Animated wind direction indicator
- **Schedule Banner:**
  - Full-width, asymmetric layout
  - Large typography ("SATURDAY & SUNDAY")
  - Bronze accent line
  - CTA button with hover glow effect

**Animation:**
- Cards stagger in from bottom (100ms delay each)
- Weather widget floats in from right
- Hover states: smooth 600ms transitions

### 4. Location Section

**Current State:** Map on left, info cards on right.

**Redesigned Vision:**

- **Map:** 
  - Custom-styled Google Maps (dark mode, desaturated)
  - Full-width, 600px height
  - Custom marker (bronze circle with pulse animation)
- **Info Cards:**
  - Floating above map (negative margin, shadow)
  - Backdrop blur + white background (90% opacity)
  - Horizontal layout, not vertical stack
  - Icons in bronze circles
- **Pro Tip:**
  - Highlighted box with gradient background (sand to white)
  - Bronze left border
  - Italic typography

**Animation:**
- Map loads with scale reveal (0.95 to 1.0)
- Info cards slide up from bottom (staggered)
- Marker pulses continuously (2s animation)

### 5. Rules / Safety Section

**Current State:** Three numbered cards in a vertical stack.

**Redesigned Vision:**

- **Layout:** Horizontal accordion or interactive tabs
- **Cards:**
  - Full-width, stacked
  - Hover: expands to reveal full content
  - Number: massive (200px), outlined, bronze
  - Icon: minimal, thin stroke
  - Background: subtle gradient mesh
- **Quote:**
  - Centered, large italic (28px)
  - Deep navy background, white text
  - Generous padding (120px vertical)

**Animation:**
- Accordion expand/collapse (600ms ease-out-expo)
- Number fades in from left, text from right
- Quote parallax on scroll

### 6. Footer

**Current State:** Standard three-column footer.

**Redesigned Vision:**

- **CTA Section:**
  - Full-width, gradient background (navy to bronze)
  - Massive typography ("READY TO PADDLE?")
  - CTA button: white with bronze border
- **Links Section:**
  - Four columns, generous spacing
  - Hover: underline animation (left to right)
  - Bronze accent on active state
- **Brand Section:**
  - Logo + tagline
  - Social icons: minimal, hover fill bronze
  - Copyright: small, tertiary text color

**Animation:**
- Gradient background shifts subtly (10s loop)
- Links underline on hover (300ms)
- Social icons scale (1.0 to 1.1)

---

## Technical Implementation

### 1. Font Loading Strategy

```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/PlayfairDisplay-Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Satoshi-Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/NotoNaskhArabic-Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/IBMPlexSansArabic-Variable.woff2" as="font" type="font/woff2" crossorigin>

<!-- Use font-display: swap for performance -->
@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/PlayfairDisplay-Variable.woff2') format('woff2');
  font-display: swap;
  font-weight: 400 900;
}
```

### 2. Scroll Animation Library

**Recommended:** Use `framer-motion` with custom hooks for scroll-triggered animations.

```tsx
// Custom hook for scroll reveal
function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold, rootMargin: '50px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
```

### 3. Performance Optimizations

- **Images:** Use WebP format with fallback, lazy loading
- **Video:** Compressed MP4 + WebM, poster image fallback
- **Animations:** Use `will-change` sparingly, GPU-accelerated properties only
- **Code Splitting:** Lazy load sections below the fold

### 4. Accessibility Requirements

- All animations respect `prefers-reduced-motion`
- Color contrast meets WCAG AA (4.5:1 for text)
- Keyboard navigation for all interactive elements
- Screen reader-friendly semantic HTML

---

## File Structure Changes

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx (redesigned)
│   │   └── Footer.tsx (redesigned)
│   ├── sections/
│   │   ├── Hero.tsx (completely rewritten)
│   │   ├── About.tsx (redesigned)
│   │   ├── Gatherings.tsx (renamed from Activities, redesigned)
│   │   ├── Location.tsx (redesigned)
│   │   └── Rules.tsx (renamed from Safety, redesigned)
│   ├── ui/
│   │   ├── Button.tsx (enhanced with variants)
│   │   ├── Card.tsx (new component)
│   │   └── ParallaxImage.tsx (new component)
│   └── effects/
│       ├── FloatingShape.tsx (new)
│       ├── GrainOverlay.tsx (new)
│       └── ScrollProgress.tsx (new)
├── hooks/
│   ├── useScrollReveal.ts (new)
│   ├── useParallax.ts (new)
│   └── useIntersectionObserver.ts (new)
├── lib/
│   ├── animations.ts (new - animation presets)
│   └── translations.ts (enhanced)
├── styles/
│   ├── fonts.css (new - font faces)
│   ├── animations.css (new - keyframes)
│   └── index.css (enhanced with new design tokens)
└── assets/
    ├── fonts/ (new - self-hosted fonts)
    ├── images/ (optimized)
    └── video/ (new - hero background)
```

---

## Implementation Phases

### Phase 1: Foundation
1. Set up new font system (self-hosted variable fonts)
2. Update design tokens in CSS (colors, shadows, spacing)
3. Create animation utility hooks
4. Build grain/grain overlay component

### Phase 2: Core Components
1. Redesign Hero section (video background, parallax, typography)
2. Redesign About section (split layout, pull quotes)
3. Redesign Gatherings section (masonry/horizontal scroll)
4. Redesign Location section (custom map, floating cards)
5. Redesign Rules section (accordion interaction)

### Phase 3: Polish
1. Implement scroll-triggered animations throughout
2. Add hover states and micro-interactions
3. Fine-tune animation timing and easing
4. Optimize performance (lazy loading, code splitting)
5. Test accessibility (keyboard nav, screen readers)

### Phase 4: Refinement
1. Mobile responsive adjustments
2. Arabic RTL layout refinements
3. Cross-browser testing
4. Performance audit and optimization

---

## Success Metrics

### Qualitative
- "This feels premium" — user feedback
- "The animations are so smooth" — user feedback
- "It's like a magazine come to life" — user feedback

### Quantitative
- Page load time < 3s (Lighthouse)
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Lighthouse Performance score > 90
- Lighthouse Accessibility score > 95

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Video background slows load | Use compressed WebM, poster image, lazy load |
| Complex animations hurt performance | Use GPU-accelerated properties, `will-change` sparingly |
| Custom fonts cause FOUT | Use `font-display: swap`, preload critical fonts |
| Arabic RTL breaks layouts | Test early, use logical properties (margin-inline-start) |
| Over-designed feels heavy | Ruthless editing, remove anything gratuitous |

---

## Open Questions

1. **Hero Video:** Do we have access to high-quality paddle/sunset video footage? Or use static image?
2. **Icon Set:** Should we commission custom icons or use a premium library (Lucide, Phosphor)?
3. **Map Styling:** Use Mapbox (more customization) or Google Maps (familiar)?
4. **Horizontal Scroll:** Is horizontal scroll for Gatherings too unconventional for the audience?

---

## Next Steps

1. **User Review:** Review this spec and provide feedback
2. **Implementation Plan:** Break down into detailed tasks
3. **Asset Collection:** Gather images, video, confirm font licenses
4. **Development:** Execute in phases with regular checkpoints

---

**Approval Required:** Please review this specification and confirm if this design direction aligns with your vision for TSF DXB. Once approved, I'll create a detailed implementation plan.
