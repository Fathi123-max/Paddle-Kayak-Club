import { motion } from "framer-motion";
import { Sun, Users, Waves, Star, MessageCircle, Wind, Droplets, Thermometer, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_URL = "https://wa.me/971569431688";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 18 } },
};

export function Activities() {
  const { t } = useLanguage();

  const GATHERINGS = [
    { icon: Sun, iconColor: "text-amber-500", iconBg: "bg-amber-50 dark:bg-amber-950/40", tag: t.g1_tag, time: t.g1_time, title: t.g1_title, body: t.g1_body, vibe: t.g1_vibe, emoji: "☀️", note: t.g1_note },
    { icon: Waves, iconColor: "text-primary", iconBg: "bg-primary/8 dark:bg-primary/15", tag: t.g2_tag, time: t.g2_time, title: t.g2_title, body: t.g2_body, vibe: t.g2_vibe, emoji: "🚣", note: t.g2_note },
    { icon: Users, iconColor: "text-secondary", iconBg: "bg-secondary/8 dark:bg-secondary/15", tag: t.g3_tag, time: t.g3_time, title: t.g3_title, body: t.g3_body, vibe: t.g3_vibe, emoji: "🌅", note: t.g3_note },
    { icon: Star, iconColor: "text-orange-500", iconBg: "bg-orange-50 dark:bg-orange-950/40", tag: t.g4_tag, time: t.g4_time, title: t.g4_title, body: t.g4_body, vibe: t.g4_vibe, emoji: "🎉", note: t.g4_note },
  ];

  return (
    <section id="gatherings" className="py-28 bg-slate-50/70 dark:bg-slate-900/50 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65 }}>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{t.gatherings_label}</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mt-3 mb-6">{t.gatherings_title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.gatherings_sub}</p>
          </motion.div>
        </div>

        {/* Schedule Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 via-teal-500/8 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-start">
            <span className="text-5xl">📅</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{t.schedule_label}</p>
              <h3 className="text-2xl md:text-3xl font-display font-black text-foreground">{t.schedule_title}</h3>
              <p className="text-lg text-muted-foreground font-medium mt-0.5">{t.schedule_sub}</p>
            </div>
          </div>
          <Button asChild className="rounded-full font-bold px-8 h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-md shrink-0">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 me-2" />
              {t.schedule_rsvp}
            </a>
          </Button>
        </motion.div>

        {/* Paddle Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-border/50 shadow-sm mb-14 max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <div>
              <h4 className="font-display font-bold text-foreground text-lg">{t.conditions_title}</h4>
              <p className="text-sm text-muted-foreground">{t.conditions_sub}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold border border-secondary/20">{t.conditions_badge}</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Wind, bg: "bg-sky-50 dark:bg-sky-950/30 border-sky-100 dark:border-sky-900", color: "text-sky-500", val: t.wind_value, unit: t.wind_unit, desc: t.wind_desc, descColor: "text-sky-600" },
              { icon: Droplets, bg: "bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900", color: "text-teal-500", val: t.water_value, unit: t.water_unit, desc: t.water_desc, descColor: "text-teal-600" },
              { icon: Thermometer, bg: "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900", color: "text-amber-500", val: t.temp_value, unit: t.temp_unit, desc: t.temp_desc, descColor: "text-amber-600" },
            ].map(({ icon: Icon, bg, color, val, unit, desc, descColor }, i) => (
              <div key={i} className={`flex flex-col items-center gap-2 ${bg} rounded-xl p-4 border`}>
                <Icon className={`w-6 h-6 ${color}`} />
                <span className="text-xl font-display font-black text-foreground">{val}</span>
                <span className="text-xs text-muted-foreground font-medium text-center">{unit}<br /><span className={`${descColor} font-semibold`}>{desc}</span></span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">{t.conditions_note}</p>
        </motion.div>

        {/* Gathering Cards */}
        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {GATHERINGS.map((g, idx) => {
            const Icon = g.icon;
            return (
              <motion.div key={idx} variants={itemVariants} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${g.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${g.iconColor}`} />
                  </div>
                  <div className="text-start">
                    <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">{g.tag}</span>
                    <span className="block text-sm font-semibold text-foreground mt-0.5">{g.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{g.emoji}</span>
                  <h3 className="text-2xl font-display font-bold text-foreground">{g.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">{g.body}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span className="italic">{t.vibe_label} {g.vibe}</span>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl px-5 py-4 border border-primary/10">
                  <p className="text-sm text-primary font-medium">💡 {g.note}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BBQ Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20 rounded-3xl p-8 md:p-10 border border-orange-200/60 dark:border-orange-900/40 shadow-sm mb-10"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center shrink-0">
              <Flame className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔥🏖️</span>
                <h3 className="text-2xl font-display font-bold text-foreground">{t.bbq_title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{t.bbq_body}</p>
              <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mt-3">{t.bbq_note}</p>
            </div>
          </div>
        </motion.div>

        {/* No Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 border border-border/50 shadow-sm text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-4xl mb-4 block">🏄</span>
          <h3 className="text-2xl font-display font-bold text-foreground mb-3">{t.noboard_title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.noboard_body}{" "}
            <strong className="text-foreground">{t.noboard_bold}</strong>
          </p>
        </motion.div>

        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-muted-foreground mb-6 text-lg">{t.gatherings_bottom_note}</p>
            <Button asChild size="lg" className="rounded-full h-14 px-10 font-bold text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 me-2" />
                {t.gatherings_cta}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
