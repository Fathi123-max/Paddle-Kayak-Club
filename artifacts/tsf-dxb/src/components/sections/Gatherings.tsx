// src/components/sections/Gatherings.tsx
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
    <section ref={ref} id="gatherings" className="py-[80px] sm:py-[120px] md:py-[160px] lg:py-[200px] bg-slate-50/70 dark:bg-slate-900/50 relative" aria-label="Community gatherings section">
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
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-2xl mb-20 max-w-4xl mx-auto relative -top-4 sm:-top-6 md:-top-8"
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
