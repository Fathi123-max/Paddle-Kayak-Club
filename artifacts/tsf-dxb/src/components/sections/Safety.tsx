import { motion } from "framer-motion";
import { Waves, Users, Leaf } from "lucide-react";

const RULES = [
  {
    icon: Leaf,
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    number: "01",
    title: "Respect the Ocean",
    body: "The water gives us so much. We leave every beach cleaner than we found it. No litter. No noise. We take only memories and leave only footprints. The ocean is not our playground — it's our home."
  },
  {
    icon: Users,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    number: "02",
    title: "Look Out for Each Other",
    body: "No one paddles alone in our community. We keep eyes on everyone, we check in, and we wait for the slowest paddler — because that's what family does. The water can be unpredictable. Your paddle buddy is your safety net."
  },
  {
    icon: Waves,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-950/30",
    number: "03",
    title: "Good Vibes Only",
    body: "Leave your ego on the sand. There's no competition, no performance, no judgement. Whether you fall off your board ten times or glide like a pro, you belong here equally. We celebrate showing up, not showing off."
  }
];

export function Safety() {
  return (
    <section id="safety" className="py-28 bg-white dark:bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/4 via-transparent to-transparent" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">How We Roll</span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mt-3 mb-6">
            Rules of the Water
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We're relaxed about almost everything. But these three things?
            Non-negotiable. They're what make TSF DXB feel safe, special, and real.
          </p>
        </motion.div>

        <div className="space-y-6">
          {RULES.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-border/40 group hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start gap-5 shrink-0">
                  <span className="text-4xl font-display font-black text-border/60 group-hover:text-primary/20 transition-colors leading-none mt-1">
                    {rule.number}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl ${rule.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-7 h-7 ${rule.iconColor}`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">{rule.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{rule.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-muted-foreground text-lg italic">
            "The water doesn't care about your job title. Neither do we."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
