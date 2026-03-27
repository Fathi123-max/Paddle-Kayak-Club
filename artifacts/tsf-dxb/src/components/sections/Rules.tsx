// src/components/sections/Rules.tsx
import { motion } from 'framer-motion';
import { Waves, Users, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Rules() {
  const { t, isAR } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const RULES = [
    { icon: Leaf, iconColor: 'text-secondary', iconBg: 'bg-secondary/10', number: t.r1_num, title: t.r1_title, body: t.r1_body },
    { icon: Users, iconColor: 'text-primary', iconBg: 'bg-primary/10', number: t.r2_num, title: t.r2_title, body: t.r2_body },
    { icon: Waves, iconColor: 'text-amber-500', iconBg: 'bg-amber-50 dark:bg-amber-950/30', number: t.r3_num, title: t.r3_title, body: t.r3_body },
  ];

  return (
    <section ref={ref} className="py-[160px] md:py-[200px] bg-white dark:bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_end,_var(--tw-gradient-stops))] from-primary/4 via-transparent to-transparent" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-24"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">{t.rules_label}</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-foreground mt-6 mb-8 leading-[1.05] tracking-tight">{t.rules_title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.rules_sub}</p>
        </motion.div>

        {/* Rules Cards - Stacked */}
        <div className="space-y-6 mb-20">
          {RULES.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isAR ? 40 : -40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 + idx * 0.15 }}
                className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl p-10 md:p-12 border border-border/40 hover:border-primary/20 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col sm:flex-row gap-8 relative z-10">
                  {/* Left: Number + Icon */}
                  <div className="flex items-start gap-6 shrink-0">
                    <span className="text-[80px] sm:text-[120px] md:text-[200px] font-display font-black text-border/60 group-hover:text-primary/20 transition-colors duration-500 leading-none select-none">
                      {rule.number}
                    </span>
                    <div className={`w-20 h-20 rounded-2xl ${rule.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-10 h-10 ${rule.iconColor}`} />
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
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.8 }}
          className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-16 md:p-24 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />
          <div className="absolute top-8 left-12 text-9xl text-white/10 font-serif leading-none">"</div>
          
          <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-snug mb-6 relative z-10">
            {t.rules_quote}
          </p>
          
          <div className="absolute bottom-8 right-12 text-9xl text-white/10 font-serif leading-none rotate-180">"</div>
        </motion.div>
      </div>
    </section>
  );
}
