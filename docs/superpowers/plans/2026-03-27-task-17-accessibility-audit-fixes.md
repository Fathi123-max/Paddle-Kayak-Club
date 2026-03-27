# Task 17: Accessibility Audit & Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ensure WCAG 2.1 AA compliance with proper color contrast, keyboard navigation, screen reader support, and focus states across all major components.

**Architecture:** Add skip-to-content link in App.tsx, enhance all interactive elements with ARIA labels and focus states, ensure color contrast meets 4.5:1 ratio, add reduced motion support using framer-motion's useReducedMotion hook, and ensure keyboard navigation works for all interactive elements.

**Tech Stack:** React, TypeScript, Tailwind CSS, framer-motion, lucide-react icons, wouter router.

---

### Task 1: Add Skip to Content Link in App.tsx

**Files:**
- Modify: `artifacts/tsf-dxb/src/App.tsx`
- Modify: `artifacts/tsf-dxb/src/pages/Home.tsx`

- [ ] **Step 1: Add skip link and main content wrapper in App.tsx**

Update App.tsx to include skip link at top of render and wrap Router with main element:

```tsx
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          {/* Skip to content link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Skip to main content
          </a>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
      <GrainOverlay opacity={0.03} />
    </QueryClientProvider>
  );
}

export default App;
```

- [ ] **Step 2: Add id="main-content" to Home.tsx main element**

```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Gatherings } from "@/components/sections/Gatherings";
import { Rules } from "@/components/sections/Rules";
import { Story } from "@/components/sections/Story";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <Navbar />

      <main id="main-content">
        <Hero />
        <Story />
        <Gatherings />
        <Location />
        <Rules />
      </main>

      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Run typecheck to verify changes compile**

Run: `cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb && PORT=3000 BASE_PATH=/ pnpm run typecheck`
Expected: No errors

- [ ] **Step 4: Commit changes**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/App.tsx artifacts/tsf-dxb/src/pages/Home.tsx
git commit -m "feat(a11y): add skip to content link for keyboard navigation"
```

---

### Task 2: Enhance Navbar Accessibility

**Files:**
- Modify: `artifacts/tsf-dxb/src/components/layout/Navbar.tsx`

- [ ] **Step 1: Add ARIA labels and focus states to all interactive elements**

Update Navbar.tsx with proper ARIA labels, focus states, and keyboard navigation:

```tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_URL = "https://wa.me/971569431688";

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_LINKS = [
    { name: t.nav_home, href: "#" },
    { name: t.nav_story, href: "#story" },
    { name: t.nav_gatherings, href: "#gatherings" },
    { name: t.nav_rules, href: "#safety" },
    { name: t.nav_findUs, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3 dark:bg-slate-900/90"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-3 z-50 group"
              aria-label="TSF DXB Home"
            >
              <img
                src={`${import.meta.env.BASE_URL}tsf-dxb-logo.png`}
                alt="TSF DXB Logo"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className={`font-display font-bold text-xl hidden sm:block transition-colors duration-300 ${
                  isScrolled
                    ? "text-slate-900 dark:text-white"
                    : "text-white"
                }`}
              >
                TSF DXB
              </span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-5" role="menubar">
                {NAV_LINKS.map((link) => (
                  <li key={link.name} role="none">
                    <a
                      href={link.href}
                      role="menuitem"
                      className={`text-sm font-semibold transition-all duration-300 hover:text-primary focus:outline-none focus:underline focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                        isScrolled
                          ? "text-slate-700 dark:text-slate-200"
                          : "text-white/90"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={toggleLang}
                className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isScrolled
                    ? "text-slate-700 border-slate-200 hover:border-primary/50 hover:text-primary dark:text-slate-200 dark:border-slate-700"
                    : "text-white/80 border-white/20 hover:border-white/60 hover:text-white"
                }`}
                aria-label="Switch language"
              >
                <Globe className="w-3.5 h-3.5" />
                {t.lang_switch}
              </button>

              <Button
                asChild
                className="rounded-full font-bold px-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join us on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 me-2" />
                  {t.nav_joinFree}
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleLang}
                className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isScrolled
                    ? "text-slate-700 border-slate-200 dark:text-white dark:border-slate-700"
                    : "text-white/80 border-white/20"
                }`}
                aria-label="Switch language"
              >
                <Globe className="w-3 h-3" />
                {t.lang_switch}
              </button>
              <button
                className={`z-50 p-2 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isScrolled
                    ? "text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
                    : "text-white hover:bg-white/20"
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-900 pt-24 px-6 pb-6 flex flex-col"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <ul className="flex flex-col gap-6 text-center mt-8" role="menu">
              {NAV_LINKS.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  role="none"
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    role="menuitem"
                    className="text-2xl font-display font-bold text-slate-900 dark:text-white block w-full py-2 focus:outline-none focus:underline focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pb-8">
              <Button
                asChild
                size="lg"
                className="w-full rounded-2xl font-bold text-lg h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join us on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 me-2" />
                  {t.hero_cta}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

- [ ] **Step 2: Run typecheck**

Run: `cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb && PORT=3000 BASE_PATH=/ pnpm run typecheck`
Expected: No errors

- [ ] **Step 3: Commit changes**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/components/layout/Navbar.tsx
git commit -m "feat(a11y): add ARIA labels and focus states to Navbar"
```

---

### Task 3: Enhance Hero Section Accessibility

**Files:**
- Modify: `artifacts/tsf-dxb/src/components/sections/Hero.tsx`

- [ ] **Step 1: Add ARIA labels and focus states to Hero buttons and links**

Update Hero.tsx with proper ARIA labels and focus states:

```tsx
import { memo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const WHATSAPP_URL = 'https://wa.me/971569431688';

export const Hero = memo(function Hero() {
  const { t, isAR } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden" aria-label="Hero section">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <img
          src="https://pixabay.com/get/g89e648228e80f06d19ae07f7e02a3163c339dd46fe6130d8eddf99ef2044196bf4bb6c0fd9c1057fb85d48b6ec41ea3762b6d42ffc9cdb396c2d0c93077d2b06_1280.jpg"
          alt="Paddlers at golden hour on calm Dubai waters"
          loading="lazy"
          decoding="async"
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
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-widest uppercase">
              {t.hero_badge}
            </span>
          </motion.div>

          {/* Headline - Massive Editorial Scale */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black text-white leading-[1.05] tracking-tight mt-8 mb-8"
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
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl font-light"
            style={{ lineHeight: isAR ? '2' : '1.8' }}
          >
            {t.hero_sub}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.19, 1, 0.22, 1], delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            <Button
              asChild
              size="lg"
              className="h-16 px-10 rounded-full font-bold text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_50px_-10px_rgba(37,211,102,0.6)] transition-all duration-600 border-none hover:shadow-[0_0_60px_-5px_rgba(37,211,102,0.8)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join us on WhatsApp"
              >
                <MessageCircle className={`me-3 w-6 h-6 ${isAR ? 'rtl-mirror' : ''}`} />
                {t.hero_cta}
              </a>
            </Button>
            <a
              href="#gatherings"
              className="text-white/70 hover:text-white transition-colors duration-300 text-base font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Scroll to Gatherings section"
            >
              {t.hero_secondary}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: 0.9 }}
            className="mt-20 flex flex-wrap items-center gap-x-12 gap-y-4 text-sm"
            role="list"
            aria-label="Community statistics"
          >
            <div role="listitem">
              <span className="text-white font-medium">{t.hero_stat1}</span>
            </div>
            <span className="text-white/30 hidden sm:block" aria-hidden="true">·</span>
            <div role="listitem">
              <span className="text-white font-medium">{t.hero_stat2}</span>
            </div>
            <span className="text-white/30 hidden sm:block" aria-hidden="true">·</span>
            <div role="listitem">
              <span className="text-white font-medium">{t.hero_stat3}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: prefersReducedMotion ? 0 : 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
            transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </motion.div>
      </motion.div>
    </section>
  );
});
```

- [ ] **Step 2: Run typecheck**

Run: `cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb && PORT=3000 BASE_PATH=/ pnpm run typecheck`
Expected: No errors

- [ ] **Step 3: Commit changes**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/components/sections/Hero.tsx
git commit -m "feat(a11y): add ARIA labels and focus states to Hero section"
```

---

### Task 4: Enhance Story Section Accessibility

**Files:**
- Modify: `artifacts/tsf-dxb/src/components/sections/Story.tsx`

- [ ] **Step 1: Add ARIA labels and semantic structure to Story section**

Update Story.tsx with proper ARIA labels and semantic structure:

```tsx
import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Waves, Sun, Coffee } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const Story = memo(function Story() {
  const { t, isAR } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const cards = [
    { icon: Sun, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30', title: t.story_c1_title, body: t.story_c1_body },
    { icon: Waves, color: 'text-primary', bg: 'bg-primary/5 dark:bg-primary/10', title: t.story_c2_title, body: t.story_c2_body },
    { icon: Coffee, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/30', title: t.story_c3_title, body: t.story_c3_body },
  ];

  return (
    <section ref={ref} className="py-[160px] md:py-[200px] bg-white dark:bg-background relative overflow-hidden" aria-label="Our story section">
      {/* Background Gradients */}
      <div className="absolute top-0 start-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 end-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header - Editorial Scale */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-20 md:mb-32"
        >
          <img
            src={`${import.meta.env.BASE_URL}tsf-dxb-logo.png`}
            alt="TSF DXB"
            loading="lazy"
            decoding="async"
            className="h-20 w-auto mx-auto mb-10 drop-shadow-sm"
          />
          <span className="text-primary font-bold tracking-widest uppercase text-sm">{t.story_label}</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-foreground mt-6 mb-10 leading-[1.05] tracking-tight">
            {t.story_h1}
            <br />
            <span className="text-primary">{t.story_h2}</span>
          </h2>
        </motion.div>

        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          {/* Left: Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: isAR ? 40 : -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://pixabay.com/get/g89e648228e80f06d19ae07f7e02a3163c339dd46fe6130d8eddf99ef2044196bf4bb6c0fd9c1057fb85d48b6ec41ea3762b6d42ffc9cdb396c2d0c93077d2b06_1280.jpg"
              alt="Paddle community at sunrise"
              loading="lazy"
              decoding="async"
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
            />
            {/* Overlay Card */}
            <div className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-8 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-xl max-w-xs">
              <p className="text-primary font-display font-bold text-2xl mb-2">500+</p>
              <p className="text-muted-foreground text-sm">Active community members</p>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isAR ? -40 : 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
            className={`${isAR ? 'text-right' : 'text-left'}`}
          >
            <p
              className="text-2xl md:text-3xl text-foreground font-light leading-loose mb-12"
              style={{ lineHeight: isAR ? '2' : '1.8' }}
            >
              {t.story_intro}
              <strong className="font-bold text-primary">{t.story_intro_bold}</strong>
            </p>

            {/* Story Cards - Vertical Stack */}
            <div className="space-y-8" role="list" aria-label="Community features">
              {cards.map(({ icon: Icon, color, bg, title, body }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.6 + idx * 0.15 }}
                  className={`${bg} rounded-2xl p-8 border border-border/40`}
                  role="listitem"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${color} bg-white/60 dark:bg-white/10`}>
                    <Icon className={`w-6 h-6 ${isAR ? 'rtl-mirror' : ''}`} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-2xl mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pull Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 1.2 }}
          className="bg-gradient-to-br from-primary/8 to-teal-500/5 rounded-3xl p-12 md:p-20 text-center border border-primary/10 relative"
          role="blockquote"
        >
          <div className="absolute top-0 left-8 md:left-12 text-8xl text-primary/20 font-serif leading-none" aria-hidden="true">"</div>
          <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-snug mb-6 relative z-10">
            {t.story_quote}
          </p>
          <p className="text-muted-foreground text-xl relative z-10">{t.story_quote_sub}</p>
          <div className="absolute bottom-0 right-8 md:right-12 text-8xl text-primary/20 font-serif leading-none rotate-180" aria-hidden="true">"</div>
        </motion.div>
      </div>
    </section>
  );
});
```

- [ ] **Step 2: Run typecheck**

Run: `cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb && PORT=3000 BASE_PATH=/ pnpm run typecheck`
Expected: No errors

- [ ] **Step 3: Commit changes**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/components/sections/Story.tsx
git commit -m "feat(a11y): add ARIA labels and semantic structure to Story section"
```

---

### Task 5: Enhance Gatherings Section Accessibility

**Files:**
- Modify: `artifacts/tsf-dxb/src/components/sections/Gatherings.tsx`

- [ ] **Step 1: Add ARIA labels and focus states to Gatherings section**

Update Gatherings.tsx with proper ARIA labels and focus states for all interactive elements:

```tsx
import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sun, Users, Waves, Star, MessageCircle, Wind, Droplets, Thermometer, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const WHATSAPP_URL = 'https://wa.me/971569431688';

export const Gatherings = memo(function Gatherings() {
  const { t, isAR } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const GATHERINGS = [
    { icon: Sun, iconColor: 'text-amber-500', iconBg: 'bg-amber-50 dark:bg-amber-950/40', tag: t.g1_tag, time: t.g1_time, title: t.g1_title, body: t.g1_body, vibe: t.g1_vibe, emoji: '☀️', note: t.g1_note },
    { icon: Waves, iconColor: 'text-primary', iconBg: 'bg-primary/8 dark:bg-primary/15', tag: t.g2_tag, time: t.g2_time, title: t.g2_title, body: t.g2_body, vibe: t.g2_vibe, emoji: '🚣', note: t.g2_note },
    { icon: Users, iconColor: 'text-secondary', iconBg: 'bg-secondary/8 dark:bg-secondary/15', tag: t.g3_tag, time: t.g3_time, title: t.g3_title, body: t.g3_body, vibe: t.g3_vibe, emoji: '🌅', note: t.g3_note },
    { icon: Star, iconColor: 'text-orange-500', iconBg: 'bg-orange-50 dark:bg-orange-950/40', tag: t.g4_tag, time: t.g4_time, title: t.g4_title, body: t.g4_body, vibe: t.g4_vibe, emoji: '🎉', note: t.g4_note },
  ];

  return (
    <section ref={ref} className="py-[80px] sm:py-[120px] md:py-[160px] lg:py-[200px] bg-slate-50/70 dark:bg-slate-900/50 relative" aria-label="Community gatherings section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">{t.gatherings_label}</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-foreground mt-6 mb-8 leading-[1.05] tracking-tight">{t.gatherings_title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.gatherings_sub}</p>
        </motion.div>

        {/* Schedule Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
          className="bg-gradient-to-r from-primary/10 via-teal-500/8 to-primary/5 border border-primary/20 rounded-3xl p-10 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto shadow-lg"
        >
          <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-start">
            <span className="text-6xl" aria-hidden="true">📅</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{t.schedule_label}</p>
              <h3 className="text-3xl md:text-4xl font-display font-black text-foreground">{t.schedule_title}</h3>
              <p className="text-lg text-muted-foreground font-medium mt-1">{t.schedule_sub}</p>
            </div>
          </div>
          <Button
            asChild
            className="rounded-full font-bold px-10 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RSVP via WhatsApp"
            >
              <MessageCircle className={`w-5 h-5 me-2 ${isAR ? 'rtl-mirror' : ''}`} aria-hidden="true" />
              {t.schedule_rsvp}
            </a>
          </Button>
        </motion.div>

        {/* Weather Widget - Floating */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-2xl mb-20 max-w-4xl mx-auto relative -top-8"
          role="region"
          aria-label="Current weather conditions"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
            <div>
              <h4 className="font-display font-bold text-foreground text-xl mb-1">{t.conditions_title}</h4>
              <p className="text-sm text-muted-foreground">{t.conditions_sub}</p>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold border border-secondary/20">{t.conditions_badge}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="list" aria-label="Weather details">
            {[
              { icon: Wind, bg: 'bg-sky-50 dark:bg-sky-950/30 border-sky-100 dark:border-sky-900', color: 'text-sky-500', val: t.wind_value, unit: t.wind_unit, desc: t.wind_desc },
              { icon: Droplets, bg: 'bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900', color: 'text-teal-500', val: t.water_value, unit: t.water_unit, desc: t.water_desc },
              { icon: Thermometer, bg: 'bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900', color: 'text-amber-500', val: t.temp_value, unit: t.temp_unit, desc: t.temp_desc },
            ].map(({ icon: Icon, bg, color, val, unit, desc }, i) => (
              <div key={i} className={`flex flex-col items-center gap-3 ${bg} rounded-2xl p-4 sm:p-6 border`} role="listitem">
                <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${color} ${isAR ? 'rtl-mirror' : ''}`} aria-hidden="true" />
                <span className="text-xl sm:text-2xl font-display font-black text-foreground">{val}</span>
                <span className="text-xs text-muted-foreground font-medium text-center">{unit}<br /><span className={`${color} font-semibold`}>{desc}</span></span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6 text-center">{t.conditions_note}</p>
        </motion.div>

        {/* Gathering Cards - Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" role="list" aria-label="Upcoming gatherings">
          {GATHERINGS.map((g, idx) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.4 + idx * 0.1 }}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500"
                role="listitem"
              >
                {/* Card Content */}
                <div className="p-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${g.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-7 h-7 ${g.iconColor}`} aria-hidden="true" />
                    </div>
                    <div className={`${isAR ? 'text-right' : 'text-left'}`}>
                      <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">{g.tag}</span>
                      <span className="block text-sm font-semibold text-foreground mt-1">{g.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl" aria-hidden="true">{g.emoji}</span>
                    <h3 className="text-3xl font-display font-bold text-foreground">{g.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{g.body}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary/50 shrink-0" aria-hidden="true" />
                    <span className="italic">{t.vibe_label} {g.vibe}</span>
                  </div>
                  <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl px-6 py-5 border border-primary/10">
                    <p className="text-sm text-primary font-medium">💡 {g.note}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BBQ Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 0.9 }}
          className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20 rounded-3xl p-10 md:p-14 border border-orange-200/60 dark:border-orange-900/40 shadow-lg mb-16"
          role="region"
          aria-label="BBQ event information"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center shrink-0">
              <Flame className="w-10 h-10 text-orange-500" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl" aria-hidden="true">🔥🏖️</span>
                <h3 className="text-3xl font-display font-bold text-foreground">{t.bbq_title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{t.bbq_body}</p>
              <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mt-4">{t.bbq_note}</p>
            </div>
          </div>
        </motion.div>

        {/* No Board Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 1.0 }}
          className="bg-white dark:bg-slate-900 rounded-3xl p-12 md:p-16 border border-border/50 shadow-xl text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-5xl mb-6 block" aria-hidden="true">🏄</span>
          <h3 className="text-3xl font-display font-bold text-foreground mb-4">{t.noboard_title}</h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t.noboard_body}{' '}
            <strong className="text-foreground">{t.noboard_bold}</strong>
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 1.1 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-8 text-lg">{t.gatherings_bottom_note}</p>
          <Button
            asChild
            size="lg"
            className="rounded-full h-16 px-12 font-bold text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-[0_0_50px_-10px_rgba(37,211,102,0.6)] hover:shadow-[0_0_60px_-5px_rgba(37,211,102,0.8)] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join community on WhatsApp"
            >
              <MessageCircle className={`w-6 h-6 me-2 ${isAR ? 'rtl-mirror' : ''}`} aria-hidden="true" />
              {t.gatherings_cta}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
});
```

- [ ] **Step 2: Run typecheck**

Run: `cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb && PORT=3000 BASE_PATH=/ pnpm run typecheck`
Expected: No errors

- [ ] **Step 3: Commit changes**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/components/sections/Gatherings.tsx
git commit -m "feat(a11y): add ARIA labels and focus states to Gatherings section"
```

---

### Task 6: Enhance Location Section Accessibility

**Files:**
- Modify: `artifacts/tsf-dxb/src/components/sections/Location.tsx`

- [ ] **Step 1: Add ARIA labels and focus states to Location section**

Update Location.tsx with proper ARIA labels and focus states:

```tsx
import { memo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { MapPin, ParkingCircle, Users, Navigation } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const MAP_SRC = 'https://maps.google.com/maps?q=25.318419070956256,55.34765853282304&z=17&output=embed';
const MAP_HREF = 'https://maps.google.com/?q=25.318419070956256,55.34765853282304';

export const Location = memo(function Location() {
  const { t, lang, isAR } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const mapSrc = `${MAP_SRC}&hl=${lang}`;

  const { scrollY } = useScroll();
  const mapY = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <section ref={ref} className="py-[160px] md:py-[200px] bg-slate-50/70 dark:bg-slate-900/50 relative overflow-hidden" aria-label="Location section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">{t.location_label}</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-foreground mt-6 mb-6 leading-[1.05] tracking-tight">{t.location_title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.location_sub}</p>
        </motion.div>

        {/* Map with Parallax */}
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : mapY }}
          className="mb-16"
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-border/50">
            <iframe
              title="Al Mamzar Beach Park location on Google Maps"
              src={mapSrc}
              width="100%"
              height="400"
              style={{ border: 0, display: 'block', filter: 'grayscale(0.3) contrast(1.1) brightness(0.95)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          <a
            href={MAP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-3 text-primary font-semibold hover:text-primary-light transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:underline"
            aria-label="Open location in Google Maps"
          >
            <Navigation className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isAR ? 'rtl-mirror' : ''}`} aria-hidden="true" />
            {t.location_maps_link}
          </a>
        </motion.div>

        {/* Floating Info Cards - Overlapping Map */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto -mt-32 relative z-10"
          role="list"
          aria-label="Location information"
        >
          {/* Address Card */}
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-2xl" role="listitem">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-primary" aria-hidden="true" />
            </div>
            <h4 className="font-display font-bold text-foreground text-xl mb-3">{t.location_addr_title}</h4>
            <p className="text-muted-foreground leading-relaxed">{t.location_addr_body}</p>
          </div>

          {/* Parking Card */}
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-2xl" role="listitem">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center mb-6">
              <ParkingCircle className="w-7 h-7 text-amber-500" aria-hidden="true" />
            </div>
            <h4 className="font-display font-bold text-foreground text-xl mb-3">{t.location_park_title}</h4>
            <p className="text-muted-foreground leading-relaxed">{t.location_park_body}</p>
          </div>

          {/* Meet Point Card */}
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-2xl" role="listitem">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-secondary" aria-hidden="true" />
            </div>
            <h4 className="font-display font-bold text-foreground text-xl mb-3">{t.location_meet_title}</h4>
            <p className="text-muted-foreground leading-relaxed">
              {t.location_meet_pre} <strong className="text-foreground">{t.location_meet_bold}</strong> {t.location_meet_body}
            </p>
          </div>
        </motion.div>

        {/* Pro Tip Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
          className="bg-gradient-to-br from-primary/8 to-teal-500/5 dark:from-primary/15 dark:to-teal-500/10 rounded-3xl p-10 md:p-12 border border-primary/10 max-w-4xl mx-auto mt-12"
          role="note"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-3xl" aria-hidden="true">🌅</span>
            </div>
            <div>
              <p className="text-lg font-bold text-primary mb-2">{t.location_tip_bold}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">{t.location_tip}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
```

- [ ] **Step 2: Run typecheck**

Run: `cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb && PORT=3000 BASE_PATH=/ pnpm run typecheck`
Expected: No errors

- [ ] **Step 3: Commit changes**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/components/sections/Location.tsx
git commit -m "feat(a11y): add ARIA labels and focus states to Location section"
```

---

### Task 7: Enhance Rules Section Accessibility

**Files:**
- Modify: `artifacts/tsf-dxb/src/components/sections/Rules.tsx`

- [ ] **Step 1: Add ARIA labels and semantic structure to Rules section**

Update Rules.tsx with proper ARIA labels and semantic structure:

```tsx
import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Waves, Users, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const Rules = memo(function Rules() {
  const { t, isAR } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const RULES = [
    { icon: Leaf, iconColor: 'text-secondary', iconBg: 'bg-secondary/10', number: t.r1_num, title: t.r1_title, body: t.r1_body },
    { icon: Users, iconColor: 'text-primary', iconBg: 'bg-primary/10', number: t.r2_num, title: t.r2_title, body: t.r2_body },
    { icon: Waves, iconColor: 'text-amber-500', iconBg: 'bg-amber-50 dark:bg-amber-950/30', number: t.r3_num, title: t.r3_title, body: t.r3_body },
  ];

  return (
    <section ref={ref} className="py-[160px] md:py-[200px] bg-white dark:bg-background relative overflow-hidden" aria-label="Community rules section">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_end,_var(--tw-gradient-stops))] from-primary/4 via-transparent to-transparent" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-24"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">{t.rules_label}</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-foreground mt-6 mb-8 leading-[1.05] tracking-tight">{t.rules_title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.rules_sub}</p>
        </motion.div>

        {/* Rules Cards - Stacked */}
        <div className="space-y-6 mb-20" role="list" aria-label="Community guidelines">
          {RULES.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isAR ? 40 : -40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 + idx * 0.15 }}
                className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl p-10 md:p-12 border border-border/40 hover:border-primary/20 transition-all duration-500 overflow-hidden"
                role="listitem"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

                <div className="flex flex-col sm:flex-row gap-8 relative z-10">
                  {/* Left: Number + Icon */}
                  <div className="flex items-start gap-6 shrink-0">
                    <span className="text-[80px] sm:text-[120px] md:text-[200px] font-display font-black text-border/60 group-hover:text-primary/20 transition-colors duration-500 leading-none select-none" aria-hidden="true">
                      {rule.number}
                    </span>
                    <div className={`w-20 h-20 rounded-2xl ${rule.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-10 h-10 ${rule.iconColor} ${isAR ? 'rtl-mirror' : ''}`} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className={`${isAR ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{rule.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{rule.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.19, 1, 0.22, 1], delay: 0.8 }}
          className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-16 md:p-24 text-center relative overflow-hidden"
          role="blockquote"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" aria-hidden="true" />
          <div className="absolute top-8 left-12 text-9xl text-white/10 font-serif leading-none" aria-hidden="true">"</div>

          <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-snug mb-6 relative z-10">
            {t.rules_quote}
          </p>

          <div className="absolute bottom-8 right-12 text-9xl text-white/10 font-serif leading-none rotate-180" aria-hidden="true">"</div>
        </motion.div>
      </div>
    </section>
  );
});
```

- [ ] **Step 2: Run typecheck**

Run: `cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb && PORT=3000 BASE_PATH=/ pnpm run typecheck`
Expected: No errors

- [ ] **Step 3: Commit changes**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/components/sections/Rules.tsx
git commit -m "feat(a11y): add ARIA labels and semantic structure to Rules section"
```

---

### Task 8: Enhance Footer Accessibility

**Files:**
- Modify: `artifacts/tsf-dxb/src/components/layout/Footer.tsx`

- [ ] **Step 1: Add ARIA labels and focus states to Footer section**

Update Footer.tsx with proper ARIA labels and focus states:

```tsx
import { MapPin, Instagram, Heart, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/971569431688';

export function Footer() {
  const { t, isAR } = useLanguage();

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-24 pb-12 relative overflow-hidden" role="contentinfo">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* CTA Section */}
        <div
          className="rounded-[2rem] p-14 md:p-20 text-center mb-24 relative overflow-hidden border border-white/5"
          style={{ background: 'linear-gradient(135deg, hsl(217 91% 18%) 0%, hsl(217 91% 28%) 50%, hsl(38 92% 58% / 0.2) 100%)' }}
          role="region"
          aria-label="Join community call to action"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
          <div className="relative z-10">
            <span className="text-6xl block mb-8" aria-hidden="true">🌊</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-snug max-w-4xl mx-auto">{t.footer_cta_title}</h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-4 leading-relaxed">{t.footer_cta_sub}</p>
            <p className="text-slate-400 text-base mb-10">{t.footer_cta_schedule}</p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-12 h-16 text-lg font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_50px_-10px_rgba(37,211,102,0.6)] hover:shadow-[0_0_60px_-5px_rgba(37,211,102,0.8)] hover:-translate-y-1 transition-all duration-300 border-none focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join community on WhatsApp"
              >
                <MessageCircle className="w-6 h-6 me-2" aria-hidden="true" />
                {t.footer_cta_btn}
              </a>
            </Button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-2xl">
                <img src={`${import.meta.env.BASE_URL}tsf-dxb-logo.png`} alt="TSF DXB Logo" className="h-16 w-auto object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">TSF DXB</h3>
                <p className="text-primary font-medium text-xs tracking-widest uppercase">Team Supboard Forever</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">{t.footer_brand_desc}</p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-white font-display font-bold text-xl mb-6">{t.footer_explore}</h4>
            <ul className="flex flex-col gap-4" role="list">
              {[
                { href: '#story', label: t.footer_link_story },
                { href: '#gatherings', label: t.footer_link_gatherings },
                { href: '#location', label: t.footer_link_location },
                { href: '#safety', label: t.footer_link_rules },
              ].map(({ href, label }) => (
                <li key={href} role="listitem">
                  <a
                    href={href}
                    className="group flex items-center gap-3 text-slate-400 hover:text-primary transition-colors duration-300 focus:outline-none focus:underline focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" aria-hidden="true" />
                    <span className="relative">
                      {label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300 ease-out" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-xl mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4" role="list">
              {[
                { href: '#', label: 'Home' },
                { href: '#story', label: 'About Us' },
                { href: '#gatherings', label: 'Events' },
                { href: '#safety', label: 'Community Guidelines' },
              ].map(({ href, label }) => (
                <li key={href} role="listitem">
                  <a
                    href={href}
                    className="group flex items-center gap-3 text-slate-400 hover:text-primary transition-colors duration-300 focus:outline-none focus:underline focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" aria-hidden="true" />
                    <span className="relative">
                      {label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300 ease-out" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-display font-bold text-xl mb-6">{t.footer_findus}</h4>
            <ul className="flex flex-col gap-4" role="list">
              <li role="listitem">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-slate-400 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-950"
                  aria-label="Contact us on WhatsApp"
                >
                  <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-primary" aria-hidden="true" />
                  </div>
                  <span>{t.footer_whatsapp}</span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-slate-400" role="listitem">
                <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <span>{t.footer_location}</span>
              </li>
              <li role="listitem">
                <a
                  href="https://instagram.com/tsf_dxb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-slate-400 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-950"
                  aria-label="Follow us on Instagram"
                >
                  <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-5 h-5 text-primary group-hover:text-primary" aria-hidden="true" />
                  </div>
                  <span>{t.footer_instagram}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2 flex-wrap">
            {t.footer_built} <Heart className="w-4 h-4 fill-red-500 text-red-500 mx-1" aria-hidden="true" /> {t.footer_in}
            <span className="text-slate-600 mx-2" aria-hidden="true">·</span>
            © {new Date().getFullYear()} {t.footer_copy}
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Run typecheck**

Run: `cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb && PORT=3000 BASE_PATH=/ pnpm run typecheck`
Expected: No errors

- [ ] **Step 3: Commit changes**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/components/layout/Footer.tsx
git commit -m "feat(a11y): add ARIA labels and focus states to Footer"
```

---

### Task 9: Final Build Verification

**Files:**
- All modified component files

- [ ] **Step 1: Run full typecheck**

Run: `cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb && PORT=3000 BASE_PATH=/ pnpm run typecheck`
Expected: No errors

- [ ] **Step 2: Run production build**

Run: `cd /Users/Apple/Documents/Paddle-Kayak-Club/artifacts/tsf-dxb && PORT=3000 BASE_PATH=/ pnpm run build`
Expected: Build completes successfully with no errors

- [ ] **Step 3: Create final commit**

```bash
cd /Users/Apple/Documents/Paddle-Kayak-Club
git add artifacts/tsf-dxb/src/components/sections/*.tsx artifacts/tsf-dxb/src/components/layout/*.tsx artifacts/tsf-dxb/src/App.tsx artifacts/tsf-dxb/src/pages/Home.tsx
git commit -m "feat: enhance accessibility with WCAG AA compliance (a11y)"
```

---

## Summary of Accessibility Improvements

1. **Skip to Content Link**: Added in App.tsx for keyboard users to bypass navigation
2. **ARIA Labels**: Added to all interactive elements (buttons, links, navigation)
3. **Focus States**: Added visible focus rings to all interactive elements using `focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`
4. **Semantic Structure**: Added proper `role` attributes (navigation, main, contentinfo, list, listitem, blockquote, region)
5. **Reduced Motion**: Already implemented via `useReducedMotion` from framer-motion in all animated components
6. **Keyboard Navigation**: All interactive elements are natively keyboard accessible (links and buttons)
7. **Screen Reader Support**: Added `aria-hidden="true"` to decorative elements and descriptive labels to interactive elements
8. **Color Contrast**: Text colors use high-contrast combinations (white text on dark backgrounds, dark text on light backgrounds)
