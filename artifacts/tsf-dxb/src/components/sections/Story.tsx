// src/components/sections/Story.tsx
import { memo, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Waves, Sun, Coffee } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCounterAnimation } from '@/hooks/useScrollAnimations';

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
    <section ref={ref} id="story" className="py-[160px] md:py-[200px] bg-white dark:bg-background relative overflow-hidden" aria-label="Our story section">
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
            <div className="absolute bottom-4 right-4 md:bottom-8 md:-right-8 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl max-w-[200px] md:max-w-xs">
              <p
                ref={useCounterAnimation(500, 2) as React.RefObject<HTMLParagraphElement>}
                className="text-primary font-display font-bold text-xl md:text-2xl mb-1"
              >
                0+
              </p>
              <p className="text-muted-foreground text-xs md:text-sm">Active community members</p>
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
