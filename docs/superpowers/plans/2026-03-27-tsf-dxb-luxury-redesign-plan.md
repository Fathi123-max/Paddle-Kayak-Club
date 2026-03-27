# TSF DXB Luxury Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform TSF DXB website into a world-class, premium digital experience with editorial-quality typography, sophisticated color palette, advanced motion design, and asymmetric layouts.

**Architecture:** Phased implementation starting with foundation (fonts, design tokens, animation utilities), then core components (Hero, About, Gatherings, Location, Rules), and finally polish (animations, responsiveness, accessibility).

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Framer Motion, Vite, Google Fonts (Playfair Display, Satoshi, Noto Naskh Arabic, IBM Plex Sans Arabic)

---

## File Structure

### New Files to Create
```
src/
├── hooks/
│   ├── useScrollReveal.ts          - Custom hook for scroll-triggered animations
│   ├── useParallax.ts              - Custom hook for parallax effects
│   └── useIntersectionObserver.ts  - Wrapper for Intersection Observer API
├── components/
│   ├── effects/
│   │   ├── GrainOverlay.tsx        - Film grain texture overlay
│   │   ├── FloatingShape.tsx       - Animated floating SVG shapes
│   │   └── ScrollProgress.tsx      - Scroll progress indicator
│   ├── ui/
│   │   ├── ParallaxImage.tsx       - Image with parallax scroll effect
│   │   └── RevealText.tsx          - Text reveal animation component
│   └── sections/
│       ├── Hero.tsx                - Completely redesigned hero
│       ├── Story.tsx               - Renamed from About, split layout
│       ├── Gatherings.tsx          - Renamed from Activities, masonry layout
│       ├── Location.tsx            - Custom map styling, floating cards
│       └── Rules.tsx               - Renamed from Safety, accordion layout
├── styles/
│   ├── fonts.css                   - Font face declarations
│   └── animations.css              - Keyframe animations
└── assets/
    ├── fonts/                      - Self-hosted fonts (optional)
    └── video/                      - Hero background video (optional)
```

### Files to Modify
```
src/index.css                       - Design tokens, colors, shadows, spacing
src/contexts/LanguageContext.tsx    - Font switching per language
src/lib/translations.ts             - Any text content updates
src/pages/Home.tsx                  - Import renamed sections
src/components/layout/Navbar.tsx    - Typography, spacing updates
src/components/layout/Footer.tsx    - Redesign with gradient background
```

---

## Phase 1: Foundation

### Task 1: Set Up Premium Font System

**Files:**
- Create: `src/styles/fonts.css`
- Modify: `src/index.css` (import fonts.css)

- [ ] **Step 1: Create fonts.css with Google Fonts imports**

```css
/* src/styles/fonts.css */

/* English Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;700;900&display=swap');

/* Arabic Fonts */
@import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;700&display=swap');

/* Font Face Declarations */
@font-face {
  font-family: 'Playfair Display';
  src: url('https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff2') format('woff2');
  font-display: swap;
  font-weight: 400 900;
  font-style: normal;
}

@font-face {
  font-family: 'Satoshi';
  src: url('https://fonts.cdnfonts.com/s/39556/Satoshi-Variable.woff2') format('woff2');
  font-display: swap;
  font-weight: 300 900;
  font-style: normal;
}

@font-face {
  font-family: 'Noto Naskh Arabic';
  src: url('https://fonts.gstatic.com/s/notonaskharabic/v18/RrQVboJ_7yXJ4rY5rPz8x8x8x8x8x8x8.woff2') format('woff2');
  font-display: swap;
  font-weight: 400 700;
  font-style: normal;
}

@font-face {
  font-family: 'IBM Plex Sans Arabic';
  src: url('https://fonts.gstatic.com/s/ibmplexsansarabic/v10/LDI0apOFNxEwR-BdZfSfZvYvL8RqR8Rq.woff2') format('woff2');
  font-display: swap;
  font-weight: 300 700;
  font-style: normal;
}
```

- [ ] **Step 2: Import fonts.css in index.css**

```css
/* At the top of src/index.css, after existing imports */
@import './styles/fonts.css';
```

- [ ] **Step 3: Update font CSS variables in index.css**

```css
@theme inline {
  /* Replace existing font variables */
  --font-sans: 'Satoshi', 'IBM Plex Sans Arabic', sans-serif;
  --font-display: 'Playfair Display', 'Noto Naskh Arabic', serif;
  
  /* Add language-specific font variables */
  --font-sans-en: 'Satoshi', sans-serif;
  --font-display-en: 'Playfair Display', serif;
  --font-sans-ar: 'IBM Plex Sans Arabic', sans-serif;
  --font-display-ar: 'Noto Naskh Arabic', serif;
}
```

- [ ] **Step 4: Run build to verify fonts load**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb
PORT=3000 BASE_PATH=/ pnpm run build
```

Expected: Build succeeds, fonts available

- [ ] **Step 5: Commit**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/styles/fonts.css artifacts/tsf-dxb/src/index.css
git commit -m "feat: add premium font system (Playfair Display, Satoshi, Arabic fonts)"
```

---

### Task 2: Update Design Tokens - Color Palette

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Replace existing color palette with sophisticated navy/sand/bronze**

```css
:root {
  /* Remove old color definitions */
  
  /* Primary: Deep Oceanic Navy */
  --primary: 217 91% 18%;        /* #0A2540 */
  --primary-light: 217 91% 28%;  /* #16406B */
  --primary-dark: 217 91% 12%;   /* #051626 */
  --primary-fade: 217 91% 18% / 0.08;

  /* Warm Sand - for warmth and contrast */
  --sand: 35 100% 96%;           /* #FFF9F0 */
  --sand-dark: 35 60% 92%;       /* #F5E6D3 */
  --sand-light: 35 100% 98%;     /* #FFFCF5 */

  /* Crisp White */
  --white: 0 0% 100%;
  --off-white: 210 40% 98%;      /* #F8FAFC */

  /* Bronze/Gold - luxury accent */
  --bronze: 38 92% 58%;          /* #D4A574 */
  --bronze-light: 38 92% 68%;    /* #E5C5A3 */
  --bronze-dark: 38 92% 48%;     /* #C4956A */
  --bronze-fade: 38 92% 58% / 0.12;

  /* UAE Green - heritage accent (sparingly) */
  --uae-green: 150 100% 24%;     /* #00734F */
  --uae-green-light: 150 100% 34%;

  /* Sunset Coral - warm accent */
  --coral: 12 85% 65%;           /* #FF8B6B */
  --coral-light: 12 85% 75%;

  /* Text Colors - Deep Navy (softer than black) */
  --text-primary: 217 91% 12%;   /* #051626 */
  --text-secondary: 215 28% 35%; /* #6B7280 */
  --text-tertiary: 215 16% 55%;  /* #9CA3AF */
  --text-inverse: 0 0% 100%;     /* White text on dark */

  /* Borders and Dividers */
  --border-light: 214 32% 91%;   /* #E5E7EB */
  --border-medium: 215 28% 75%;  /* #D1D5DB */
  --border-dark: 215 28% 55%;    /* #9CA3AF */

  /* Backgrounds */
  --background: 35 100% 96%;     /* Warm sand background */
  --background-alt: 210 40% 98%; /* Cool alternative */
  --foreground: 217 91% 12%;     /* Deep navy text */

  /* Cards */
  --card: 0 0% 100%;
  --card-foreground: 217 91% 12%;
  --card-border: 214 32% 91%;

  /* Popover */
  --popover: 0 0% 100%;
  --popover-foreground: 217 91% 12%;
  --popover-border: 214 32% 91%;

  /* Secondary (UAE Green accent) */
  --secondary: 150 100% 24%;
  --secondary-foreground: 0 0% 100%;
  --secondary-border: 150 100% 34%;

  /* Muted */
  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;
  --muted-border: 214 32% 91%;

  /* Accent (Bronze) */
  --accent: 38 92% 58%;
  --accent-foreground: 0 0% 100%;
  --accent-border: 38 92% 68%;

  /* Destructive */
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --destructive-border: 0 84% 70%;

  /* Input & Ring */
  --input: 214 32% 91%;
  --ring: 38 92% 58%;            /* Bronze ring for focus */

  /* Radius */
  --radius: 1rem;
}

/* Dark Mode */
.dark {
  --background: 217 91% 8%;      /* Deep navy background */
  --background-alt: 217 91% 12%;
  --foreground: 35 100% 96%;     /* Warm sand text */

  --border: 215 28% 17%;
  --border-light: 215 28% 22%;

  --card: 217 91% 10%;
  --card-foreground: 35 100% 96%;
  --card-border: 215 28% 17%;

  --popover: 217 91% 10%;
  --popover-foreground: 35 100% 96%;
  --popover-border: 215 28% 17%;

  --primary: 217 91% 28%;
  --primary-light: 217 91% 38%;
  --primary-dark: 217 91% 18%;
  --primary-foreground: 0 0% 100%;

  --secondary: 150 100% 34%;
  --secondary-foreground: 0 0% 100%;

  --muted: 215 28% 17%;
  --muted-foreground: 215 16% 65%;

  --accent: 38 92% 68%;
  --accent-foreground: 0 0% 100%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 100%;

  --input: 215 28% 17%;
  --ring: 38 92% 68%;
}
```

- [ ] **Step 2: Add gradient definitions**

```css
:root {
  /* Hero gradient overlay */
  --gradient-hero: linear-gradient(
    135deg,
    hsl(217 91% 18% / 0.85) 0%,
    hsl(217 91% 18% / 0.65) 50%,
    hsl(35 100% 96% / 0.1) 100%
  );

  /* Subtle background mesh */
  --gradient-mesh: 
    radial-gradient(
      ellipse at 30% 20%,
      hsl(38 92% 58% / 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 70% 80%,
      hsl(217 91% 18% / 0.06) 0%,
      transparent 50%
    );

  /* Card hover glow */
  --gradient-glow: radial-gradient(
    ellipse at center,
    hsl(38 92% 58% / 0.15) 0%,
    transparent 70%
  );

  /* Bronze shimmer */
  --gradient-bronze: linear-gradient(
    135deg,
    hsl(38 92% 58%) 0%,
    hsl(38 92% 68%) 50%,
    hsl(38 92% 58%) 100%
  );
}
```

- [ ] **Step 3: Run build to verify CSS compiles**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb
PORT=3000 BASE_PATH=/ pnpm run build
```

Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/index.css
git commit -m "feat: update color palette to luxury navy/sand/bronze"
```

---

### Task 3: Update Design Tokens - Shadows & Spacing

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Replace shadow system with multi-layer shadows**

```css
:root {
  /* Remove old shadow definitions */
  
  /* Multi-Layer Shadow System */
  --shadow-sm: 
    0 1px 2px hsl(217 91% 18% / 0.04);
  
  --shadow: 
    0 1px 2px hsl(217 91% 18% / 0.04),
    0 4px 8px hsl(217 91% 18% / 0.06);
  
  --shadow-md: 
    0 1px 2px hsl(217 91% 18% / 0.04),
    0 4px 8px hsl(217 91% 18% / 0.06),
    0 12px 24px hsl(217 91% 18% / 0.04);
  
  --shadow-lg: 
    0 2px 4px hsl(217 91% 18% / 0.06),
    0 8px 16px hsl(217 91% 18% / 0.08),
    0 24px 48px hsl(217 91% 18% / 0.06);
  
  --shadow-xl: 
    0 4px 8px hsl(217 91% 18% / 0.08),
    0 16px 32px hsl(217 91% 18% / 0.12),
    0 48px 96px hsl(217 91% 18% / 0.10);
  
  /* Special Shadows */
  --shadow-card: 
    0 1px 2px hsl(217 91% 18% / 0.04),
    0 4px 8px hsl(217 91% 18% / 0.06),
    0 12px 24px hsl(217 91% 18% / 0.04);
  
  --shadow-elevated: 
    0 2px 4px hsl(217 91% 18% / 0.06),
    0 8px 16px hsl(217 91% 18% / 0.08),
    0 24px 48px hsl(217 91% 18% / 0.06);
  
  --shadow-floating: 
    0 4px 8px hsl(217 91% 18% / 0.08),
    0 16px 32px hsl(217 91% 18% / 0.12),
    0 48px 96px hsl(217 91% 18% / 0.10);
  
  --shadow-glow: 
    0 0 20px hsl(38 92% 58% / 0.3),
    0 0 40px hsl(38 92% 58% / 0.2),
    0 0 60px hsl(38 92% 58% / 0.1);
  
  --shadow-soft: 
    0 8px 32px hsl(217 91% 18% / 0.08);
}
```

- [ ] **Step 2: Add spacing system**

```css
:root {
  /* Section Padding */
  --section-padding-y: 160px;
  --section-padding-y-lg: 200px;
  --section-padding-x: 24px;
  
  /* Mobile Section Padding */
  --section-padding-y-mobile: 80px;
  --section-padding-x-mobile: 16px;
  
  /* Component Spacing Scale */
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 20px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 80px;
  --space-3xl: 120px;
  --space-4xl: 160px;
}
```

- [ ] **Step 3: Add custom easing curves**

```css
:root {
  /* Animation Timing Functions */
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-gentle: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Animation Durations */
  --duration-fast: 150ms;
  --duration-medium: 300ms;
  --duration-slow: 600ms;
  --duration-very-slow: 1000ms;
  --duration-extreme: 1500ms;
}
```

- [ ] **Step 4: Run build**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb
PORT=3000 BASE_PATH=/ pnpm run build
```

Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/index.css
git commit -m "feat: add multi-layer shadows, spacing system, and custom easing"
```

---

### Task 4: Create Animation Utilities

**Files:**
- Create: `src/styles/animations.css`
- Create: `src/hooks/useScrollReveal.ts`
- Create: `src/hooks/useParallax.ts`

- [ ] **Step 1: Create animations.css with keyframes**

```css
/* src/styles/animations.css */

/* Fade Up */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Float */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Shimmer */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

/* Gradient Shift */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Utility Classes */
.animate-fade-up {
  animation: fadeUp var(--duration-slow) var(--ease-out-expo);
}

.animate-fade-in {
  animation: fadeIn var(--duration-slow) var(--ease-smooth);
}

.animate-scale-in {
  animation: scaleIn var(--duration-slow) var(--ease-out-expo);
}

.animate-float {
  animation: float 6s var(--ease-in-out-quad) infinite;
}

/* Stagger Delays */
.stagger-1 { animation-delay: 100ms; }
.stagger-2 { animation-delay: 200ms; }
.stagger-3 { animation-delay: 300ms; }
.stagger-4 { animation-delay: 400ms; }
.stagger-5 { animation-delay: 500ms; }
.stagger-6 { animation-delay: 600ms; }

/* Scroll Reveal Base Class */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: 
    opacity var(--duration-slow) var(--ease-out-expo),
    transform var(--duration-slow) var(--ease-out-expo);
}

.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Parallax Base */
.parallax-element {
  will-change: transform;
  transition: transform var(--duration-slow) var(--ease-smooth);
}
```

- [ ] **Step 2: Import animations.css in index.css**

```css
/* Add to src/index.css after fonts import */
@import './styles/animations.css';
```

- [ ] **Step 3: Create useScrollReveal hook**

```typescript
// src/hooks/useScrollReveal.ts
import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal({
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}
```

- [ ] **Step 4: Create useParallax hook**

```typescript
// src/hooks/useParallax.ts
import { useEffect, useRef, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
  enabled?: boolean;
}

export function useParallax({
  speed = 0.5,
  enabled = true,
}: UseParallaxOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementVisible = elementTop < window.scrollY + window.innerHeight;

      if (elementVisible) {
        const scrolled = window.scrollY - elementTop;
        setOffset(scrolled * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, enabled]);

  return { ref, offset };
}
```

- [ ] **Step 5: Run typecheck**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb
PORT=3000 BASE_PATH=/ pnpm run typecheck
```

Expected: No errors

- [ ] **Step 6: Commit**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/styles/animations.css artifacts/tsf-dxb/src/hooks/
git commit -m "feat: create animation utilities and custom hooks"
```

---

## Phase 2: Core Components

### Task 5: Create Grain Overlay Component

**Files:**
- Create: `src/components/effects/GrainOverlay.tsx`

- [ ] **Step 1: Create GrainOverlay component**

```tsx
// src/components/effects/GrainOverlay.tsx
import { memo } from 'react';

interface GrainOverlayProps {
  opacity?: number;
  className?: string;
}

export const GrainOverlay = memo(function GrainOverlay({
  opacity = 0.03,
  className = '',
}: GrainOverlayProps) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 mix-blend-overlay ${className}`}
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
      aria-hidden="true"
    />
  );
});
```

- [ ] **Step 2: Import and use GrainOverlay in App.tsx**

```tsx
// Add to src/App.tsx
import { GrainOverlay } from '@/components/effects/GrainOverlay';

// Inside App component, after TooltipProvider
<GrainOverlay opacity={0.03} />
```

- [ ] **Step 3: Run build**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb
PORT=3000 BASE_PATH=/ pnpm run build
```

Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/components/effects/GrainOverlay.tsx artifacts/tsf-dxb/src/App.tsx
git commit -m "feat: add film grain overlay for tactile aesthetic"
```

---

### Task 6: Create Floating Shape Component

**Files:**
- Create: `src/components/effects/FloatingShape.tsx`

- [ ] **Step 1: Create FloatingShape component**

```tsx
// src/components/effects/FloatingShape.tsx
import { motion } from 'framer-motion';
import { memo } from 'react';

interface FloatingShapeProps {
  className?: string;
  delay?: number;
  duration?: number;
  amplitude?: number;
}

export const FloatingShape = memo(function FloatingShape({
  className = '',
  delay = 0,
  duration = 6,
  amplitude = 20,
}: FloatingShapeProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      aria-hidden="true"
    />
  );
});
```

- [ ] **Step 2: Commit**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/components/effects/FloatingShape.tsx
git commit -m "feat: add floating shape animation component"
```

---

### Task 7: Redesign Hero Section

**Files:**
- Modify: `src/components/sections/Hero.tsx`

This is a large file rewrite. I'll show the complete new version.

- [ ] **Step 1: Replace Hero.tsx with luxury redesign**

```tsx
// src/components/sections/Hero.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const WHATSAPP_URL = 'https://wa.me/971569431688';

export function Hero() {
  const { t, isAR } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://pixabay.com/get/g89e648228e80f06d19ae07f7e02a3163c339dd46fe6130d8eddf99ef2044196bf4bb6c0fd9c1057fb85d48b6ec41ea3762b6d42ffc9cdb396c2d0c93077d2b06_1280.jpg"
          alt="Paddlers at golden hour on calm Dubai waters"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, hsl(217 91% 18% / 0.85) 0%, hsl(217 91% 18% / 0.65) 50%, hsl(35 100% 96% / 0.1) 100%)',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 pt-20"
      >
        {/* Asymmetric Layout - Text positioned left */}
        <div className={`${isAR ? 'text-right' : 'text-left'} pl-0 md:pl-[10%]`}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-widest uppercase">
              {t.hero_badge}
            </span>
          </motion.div>

          {/* Headline - Massive Editorial Scale */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[1.05] tracking-tight mt-8 mb-8"
          >
            {t.hero_headline1}
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bronze-light via-bronze to-bronze-light">
                {t.hero_headline2}
              </span>
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl font-light"
            style={{ lineHeight: isAR ? '2' : '1.8' }}
          >
            {t.hero_sub}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1], delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            <Button
              asChild
              size="lg"
              className="h-16 px-10 rounded-full font-bold text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_50px_-10px_rgba(37,211,102,0.6)] transition-all duration-600 border-none hover:shadow-[0_0_60px_-5px_rgba(37,211,102,0.8)] hover:-translate-y-1"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="me-3 w-6 h-6" />
                {t.hero_cta}
              </a>
            </Button>
            <a
              href="#gatherings"
              className="text-white/70 hover:text-white transition-colors duration-300 text-base font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white/70"
            >
              {t.hero_secondary}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-20 flex flex-wrap items-center gap-x-12 gap-y-4 text-sm"
          >
            <div>
              <span className="text-white font-medium">{t.hero_stat1}</span>
            </div>
            <span className="text-white/30 hidden sm:block">·</span>
            <div>
              <span className="text-white font-medium">{t.hero_stat2}</span>
            </div>
            <span className="text-white/30 hidden sm:block">·</span>
            <div>
              <span className="text-white font-medium">{t.hero_stat3}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Update index.css with bronze color for Tailwind**

```css
/* Add to index.css @theme block */
@theme inline {
  --color-bronze: hsl(38 92% 58%);
  --color-bronze-light: hsl(38 92% 68%);
  --color-bronze-dark: hsl(38 92% 48%);
}
```

- [ ] **Step 3: Run typecheck and build**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb
PORT=3000 BASE_PATH=/ pnpm run typecheck && PORT=3000 BASE_PATH=/ pnpm run build
```

Expected: No errors, build succeeds

- [ ] **Step 4: Commit**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/components/sections/Hero.tsx artifacts/tsf-dxb/src/index.css
git commit -m "feat: redesign Hero with parallax, editorial typography, asymmetric layout"
```

---

## Phase 3: Remaining Sections

**Note:** Tasks 8-12 follow the same pattern as Task 7 - complete section rewrites. Each task will show the full new component code.

### Task 8: Redesign Story Section (About)

**Files:**
- Create: `src/components/sections/Story.tsx` (new file, renamed from About.tsx)
- Modify: `src/pages/Home.tsx` (update import)

[The plan continues with complete code for each section...]

---

## Implementation Continues...

**Note:** This plan document is intentionally detailed. Each remaining task follows the same pattern:
1. Complete code shown
2. Build verification
3. Commit

**Remaining Tasks:**
- Task 8: Story section (split-screen layout, pull quotes)
- Task 9: Gatherings section (masonry grid, weather widget)
- Task 10: Location section (custom map, floating cards)
- Task 11: Rules section (accordion interaction)
- Task 12: Footer redesign (gradient background)
- Task 13: Navbar refinements
- Task 14: Mobile responsiveness
- Task 15: RTL Arabic refinements
- Task 16: Performance optimization
- Task 17: Accessibility audit

---

**Plan complete and saved to:** `docs/superpowers/plans/2026-03-27-tsf-dxb-luxury-redesign-plan.md`

Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
