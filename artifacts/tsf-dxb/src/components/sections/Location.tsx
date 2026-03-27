// src/components/sections/Location.tsx
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto -mt-16 sm:-mt-24 md:-mt-32 relative z-10"
          role="list"
          aria-label="Location information"
        >
          {/* Address Card */}
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border/50 shadow-2xl" role="listitem">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-primary" aria-hidden="true" />
            </div>
            <h4 className="font-display font-bold text-foreground text-xl mb-3">{t.location_addr_title}</h4>
            <p className="text-muted-foreground leading-relaxed">{t.location_addr_body}</p>
          </div>

          {/* Parking Card */}
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border/50 shadow-2xl" role="listitem">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center mb-6">
              <ParkingCircle className="w-7 h-7 text-amber-500" aria-hidden="true" />
            </div>
            <h4 className="font-display font-bold text-foreground text-xl mb-3">{t.location_park_title}</h4>
            <p className="text-muted-foreground leading-relaxed">{t.location_park_body}</p>
          </div>

          {/* Meet Point Card */}
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border/50 shadow-2xl" role="listitem">
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
