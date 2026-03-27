import { motion } from "framer-motion";
import { Waves, Sun, Coffee } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const cards = [
    { icon: Sun, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/30", title: t.story_c1_title, body: t.story_c1_body },
    { icon: Waves, color: "text-primary", bg: "bg-primary/5 dark:bg-primary/10", title: t.story_c2_title, body: t.story_c2_body },
    { icon: Coffee, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-950/30", title: t.story_c3_title, body: t.story_c3_body },
  ];

  return (
    <section id="story" className="py-28 bg-white dark:bg-background relative overflow-hidden">
      <div className="absolute top-0 start-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 end-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <img src={`${import.meta.env.BASE_URL}tsf-dxb-logo.png`} alt="TSF DXB" className="h-20 w-auto mx-auto mb-10 drop-shadow-sm" />
          <span className="text-primary font-bold tracking-widest uppercase text-sm">{t.story_label}</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mt-3 mb-8 leading-tight">
            {t.story_h1}<br />
            <span className="text-primary">{t.story_h2}</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-foreground font-light leading-loose text-center max-w-3xl mx-auto"
          >
            {t.story_intro}{" "}
            <strong className="font-bold text-primary">{t.story_intro_bold}</strong>
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map(({ icon: Icon, color, bg, title, body }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.55 }}
                className={`${bg} rounded-3xl p-8 border border-border/40`}
              >
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-5 ${color} bg-white/60 dark:bg-white/10`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-foreground text-xl mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/8 to-teal-500/5 rounded-3xl p-10 md:p-14 text-center border border-primary/10"
          >
            <p className="text-2xl md:text-3xl font-display font-bold text-foreground leading-snug mb-4">{t.story_quote}</p>
            <p className="text-muted-foreground text-lg">{t.story_quote_sub}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
