# TSF DXB Performance & Enhancement Package - Design Specification

**Date:** 2026-03-28  
**Status:** Approved  
**Author:** Creative Enhancement Team

---

## Overview

This specification defines a three-phase enhancement package for the TSF DXB website, combining performance optimization, strategic visual effects, and mobile-first polish to deliver an inspiring experience that performs exceptionally across all devices.

---

## Goals

1. **Reduce bundle size** by 40% (1.08MB → ~650KB) through code-splitting and optimization
2. **Add high-impact effects** that enhance storytelling without bloating the bundle
3. **Ensure 60fps** on mid-range mobile devices through adaptive rendering
4. **Maintain accessibility** with reduced-motion and battery-saver support
5. **Achieve Lighthouse Performance > 90** on desktop and mobile

---

## Architecture

### Phase 1: Performance Optimization

**Purpose:** Reduce initial bundle size and improve load times while maintaining visual quality.

**Optimizations:**

1. **Lazy Load Three.js**
   - Use React.lazy() + Suspense for HeroParticles component
   - Show loading skeleton during async load
   - Preload Three.js with low priority hint

2. **Vite Code Splitting**
   - Configure manualChunks to separate vendor chunks
   - Split: `three`, `gsap`, `framer-motion` into separate chunks
   - Enable dynamic imports for non-critical paths

3. **Particle Optimization**
   - Reduce default count: 2500 → 1500 (imperceptible visual difference)
   - Use InstancedBufferGeometry for better GPU utilization
   - Cap pixel ratio at 2x for high-DPI displays

4. **GSAP Tree-Shaking**
   - Import only ScrollTrigger plugin (already done)
   - Use ES modules for proper tree-shaking
   - Remove unused GSAP effects

5. **Idle Callbacks**
   - Defer non-critical animations until `requestIdleCallback`
   - Priority-based initialization queue

**Expected Results:**
- Initial bundle: 1.08MB → ~650KB (-40%)
- First Contentful Paint: 2.5s → < 2.0s
- Time to Interactive: 3.2s → < 2.5s

---

### Phase 2: Strategic Visual Effects

**Purpose:** Add high-impact visual enhancements that leverage existing dependencies.

**Effects:**

1. **Horizontal Scroll Section (Gatherings)**
   - Replace grid with horizontal scroll on desktop
   - Cards scroll sideways as user scrolls down
   - GSAP ScrollTrigger with `pin: true`
   - Mobile: Keep vertical grid (better UX)

2. **Parallax Backgrounds (Story Section)**
   - Multi-layer floating shapes with different scroll speeds
   - Framer Motion `useScroll` + `useTransform`
   - Subtle movement (20-50px range) for depth
   - Disabled on reduced-motion preference

3. **Magnetic Buttons (CTA Elements)**
   - Buttons attract cursor with spring physics
   - Framer Motion `useMotionValue` + `useSpring`
   - Applies to: WhatsApp CTA buttons, primary actions
   - Touch devices: Disable magnetic effect

**Technical Approach:**
- All effects use existing GSAP / Framer Motion
- No new dependencies required
- Progressive enhancement (graceful degradation)

---

### Phase 3: Mobile Polish

**Purpose:** Ensure exceptional performance and UX on mobile devices.

**Optimizations:**

1. **Device Detection**
   - Custom `useDeviceDetect` hook
   - Detect: mobile/tablet/desktop, touch support
   - Battery saver mode detection via `navigator.getBattery()`

2. **Adaptive Particle Counts**
   - Mobile: 800 particles
   - Desktop: 1500 particles
   - Low power mode: Static fallback image

3. **Touch-Optimized Interactions**
   - Replace hover states with tap feedback
   - Larger touch targets (min 44x44px)
   - Touch-friendly scroll thresholds

4. **Performance Hints**
   - `will-change: transform` on animated elements
   - `transform: translateZ(0)` for GPU acceleration
   - Image optimization with WebP format

5. **Battery-Aware Animations**
   - Detect battery status via Battery Status API
   - Reduce animation complexity when charging = false
   - Respect system-level power savings

**Expected Results:**
- 60fps on iPhone 12+ / equivalent Android
- Touch response < 100ms
- Battery drain minimized during extended browsing

---

## File Structure

```
artifacts/tsf-dxb/src/
├── components/
│   ├── effects/
│   │   ├── HeroParticles.tsx           [MODIFY]
│   │   └── MagneticButton.tsx          [NEW]
│   ├── sections/
│   │   ├── Story.tsx                   [MODIFY]
│   │   └── Gatherings.tsx              [MODIFY]
│   └── layout/
│       └── Navbar.tsx                  [MODIFY]
├── hooks/
│   ├── useDeviceDetect.ts              [NEW]
│   └── useScrollAnimations.ts          [MODIFY]
├── lib/
│   └── three/
│       └── particleUtils.ts            [MODIFY]
├── vite.config.ts                      [MODIFY]
└── package.json                        [NO CHANGE]
```

---

## Success Criteria

### Performance Metrics

- [ ] Bundle size < 700KB (uncompressed)
- [ ] Gzipped bundle < 350KB
- [ ] First Contentful Paint < 2.0s
- [ ] Time to Interactive < 2.5s
- [ ] Lighthouse Performance > 90

### Animation Metrics

- [ ] 60fps on desktop (Chrome, Firefox, Safari)
- [ ] 60fps on iPhone 12+ / Samsung S21+
- [ ] No frame drops during scroll animations
- [ ] Touch response < 100ms

### Accessibility

- [ ] All animations disabled with `prefers-reduced-motion`
- [ ] Battery-saver mode detected and respected
- [ ] Touch targets min 44x44px
- [ ] Keyboard navigation works throughout

---

## Technical Decisions

### Why React.lazy for Three.js?

Three.js is the largest dependency (~500KB). Lazy loading defers this cost until after initial paint, improving FCP and TTI. The hero video provides visual cover during the async load.

### Why Not Add Lottie for Animations?

Lottie would add ~50KB for marginal benefit. GSAP and Framer Motion already provide all required animation capabilities with better performance for scroll-linked effects.

### Why Adaptive Particle Counts?

Mobile GPUs have less headroom for particle systems. Adaptive counts ensure visual quality scales with device capability, maintaining 60fps across all devices.

---

## Risk Mitigation

### Bundle Size Creep

**Risk:** New effects increase bundle size, negating optimizations.

**Mitigation:**
- All effects use existing dependencies
- Strict code review for new imports
- Bundle size budget enforced in CI (future)

### Mobile Performance Issues

**Risk:** Effects cause frame drops on older devices.

**Mitigation:**
- Device detection with conservative defaults
- Automatic fallback to static content
- User can enable reduced-motion system-wide

### Battery Drain Concerns

**Risk:** Continuous animations drain battery.

**Mitigation:**
- Battery Status API detection
- Pause animations when battery < 20% and not charging
- Respect system-level power savings mode

---

## Testing Strategy

### Performance Testing

1. **Lighthouse** - Run on desktop and mobile emulation
2. **WebPageTest** - Test on 4G networks from multiple locations
3. **Chrome DevTools Performance** - Profile frame rates
4. **Bundle Analyzer** - Verify code-splitting effectiveness

### Device Testing

1. **Desktop:** Chrome, Firefox, Safari, Edge (latest)
2. **iOS:** Safari on iPhone 12, iPhone 14, iPad
3. **Android:** Chrome on Samsung S21, Pixel 6

### Accessibility Testing

1. **Reduced Motion:** Enable in system preferences, verify static fallback
2. **Battery Saver:** Test on laptop with battery saver enabled
3. **Keyboard:** Tab through all interactive elements
4. **Touch:** Test tap targets on actual mobile devices

---

## Implementation Order

1. **Setup** - Configure Vite manualChunks, verify build
2. **Lazy Load Three.js** - React.lazy + Suspense boundary
3. **Device Detection Hook** - useDeviceDetect implementation
4. **Adaptive Particles** - Modify HeroParticles with device-aware counts
5. **Horizontal Scroll** - Gatherings section enhancement
6. **Parallax Backgrounds** - Story section enhancement
7. **Magnetic Buttons** - CTA enhancement
8. **Battery Detection** - Power-aware animations
9. **Testing** - Performance, device, accessibility
10. **Optimization** - Fine-tune based on metrics
11. **Deploy** - Push to production

---

## Dependencies

No new dependencies required. All effects use:
- `framer-motion` (existing)
- `gsap` (existing)
- `three` (existing)

---

## Future Enhancements (Out of Scope)

- Service Worker for offline caching
- Image CDN for automatic optimization
- WebGL water shader simulation
- Multi-page transition animations
- Custom cursor effects

---

## Approval

**Design Approved:** 2026-03-28  
**Implementation Method:** Sequential (Phase 1 → 2 → 3)  
**Next Step:** Create implementation plan via writing-plans skill
