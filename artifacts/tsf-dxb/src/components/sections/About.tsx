import { motion } from "framer-motion";
import { Waves, Sun, Coffee } from "lucide-react";

export function About() {
  return (
    <section id="story" className="py-28 bg-white dark:bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <img
            src={`${import.meta.env.BASE_URL}tsf-dxb-logo.png`}
            alt="TSF DXB"
            className="h-20 w-auto mx-auto mb-10 drop-shadow-sm"
          />
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mt-3 mb-8 leading-tight">
            Dubai moves fast.<br />
            <span className="text-primary">The water doesn't.</span>
          </h2>
        </motion.div>

        <div className="space-y-16 text-lg text-muted-foreground leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-foreground font-light leading-loose text-center max-w-3xl mx-auto"
          >
            We created TSF DXB to break away from the rush — the appointments, the memberships,
            the transactional nature of everything. We just wanted to{" "}
            <strong className="font-semibold text-primary">paddle with friends.</strong>
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sun,
                color: "text-amber-500",
                bg: "bg-amber-50 dark:bg-amber-950/30",
                title: "It started with one sunrise.",
                body: "A handful of people, two borrowed boards, and a beach in Dubai. No plan. No agenda. Just the sound of water and the feeling of being completely present."
              },
              {
                icon: Waves,
                color: "text-primary",
                bg: "bg-primary/5 dark:bg-primary/10",
                title: "Then the word spread.",
                body: "Friends told friends. Strangers became regulars. The WhatsApp group grew. And we realised we'd accidentally built something beautiful — a community of real people who love the water."
              },
              {
                icon: Coffee,
                color: "text-orange-500",
                bg: "bg-orange-50 dark:bg-orange-950/30",
                title: "Now it's a weekly ritual.",
                body: "We paddle, we share stories, we grab coffee on the beach. No logos. No coaches. No fees. Just TSF DXB — Team Supboard Forever — showing up for each other, week after week."
              }
            ].map(({ icon: Icon, color, bg, title, body }, idx) => (
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
            <p className="text-2xl md:text-3xl font-display font-bold text-foreground leading-snug mb-4">
              "TSF DXB is a safe space for absolute beginners
              and seasoned pros alike."
            </p>
            <p className="text-muted-foreground text-lg">
              If you can float, you belong. The only qualification we ask for is a good attitude.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
