import { motion } from "framer-motion";
import { MapPin, ParkingCircle, Users, Navigation } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MAP_SRC = "https://maps.google.com/maps?q=25.318419070956256,55.34765853282304&z=17&output=embed";
const MAP_HREF = "https://maps.google.com/?q=25.318419070956256,55.34765853282304";

export function Location() {
  const { t, lang } = useLanguage();
  const mapSrc = `${MAP_SRC}&hl=${lang}`;

  return (
    <section id="location" className="py-28 bg-slate-50/70 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">{t.location_label}</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mt-3 mb-4">{t.location_title}</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">{t.location_sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg border border-border/50">
              <iframe
                title="Al Mamzar Beach Park, Dubai"
                src={mapSrc}
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 text-sm text-primary font-semibold hover:underline"
            >
              <Navigation className="w-4 h-4" />
              {t.location_maps_link}
            </a>
          </motion.div>

          {/* How to Find Us */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <h3 className="text-2xl font-display font-bold text-foreground">{t.location_how}</h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{t.location_addr_title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.location_addr_body}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center shrink-0">
                  <ParkingCircle className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{t.location_park_title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.location_park_body}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{t.location_meet_title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t.location_meet_pre} <strong className="text-foreground">{t.location_meet_bold}</strong> {t.location_meet_body}
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-5 border border-primary/10">
                <p className="text-sm text-primary font-medium leading-relaxed">{t.location_tip}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
