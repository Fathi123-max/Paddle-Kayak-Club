// src/components/sections/Hero.tsx
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
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
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
              className="h-16 px-10 rounded-full font-bold text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_50px_-10px_rgba(37,211,102,0.6)] transition-all duration-600 border-none hover:shadow-[0_0_60px_-5px_rgba(37,211,102,0.8)] hover:-translate-y-1"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className={`me-3 w-6 h-6 ${isAR ? 'rtl-mirror' : ''}`} />
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
            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: 0.9 }}
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
        transition={{ duration: prefersReducedMotion ? 0 : 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
