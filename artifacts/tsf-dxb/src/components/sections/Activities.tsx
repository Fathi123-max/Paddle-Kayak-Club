import { motion } from "framer-motion";
import { Sun, Sunset, Users, Waves, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/971544667458";

const GATHERINGS = [
  {
    icon: Sun,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-950/40",
    tag: "Every Friday",
    time: "6:00 AM",
    title: "The Sunrise Paddle",
    body: "We catch the first light together. There's something magic about being on the water as Dubai wakes up. We paddle for an hour, then someone always brings coffee to share on the beach afterwards.",
    vibe: "Calm, meditative, spectacular",
    emoji: "☀️",
    note: "Great for beginners — the water is glassy and still."
  },
  {
    icon: Waves,
    iconColor: "text-primary",
    iconBg: "bg-primary/8 dark:bg-primary/15",
    tag: "Mid-week",
    time: "5:30 PM",
    title: "The Sunset Float",
    body: "Your mid-week reset. Golden skies, warm water, and the city skyline turning pink behind you. No agenda, just floating with good people and decompressing from the week.",
    vibe: "Relaxed, golden, restorative",
    emoji: "🌅",
    note: "Absolute beginners welcome. We go at your pace."
  },
  {
    icon: Users,
    iconColor: "text-secondary",
    iconBg: "bg-secondary/8 dark:bg-secondary/15",
    tag: "Monthly",
    time: "Morning",
    title: "The Big Community Meetup",
    body: "Once a month we gather everyone — regular paddlers, first-timers, and total strangers who heard about us through a friend. More boards, more laughs, more memories made on the water.",
    vibe: "Energetic, social, festive",
    emoji: "🎉",
    note: "The more the merrier. Bring a friend!"
  },
  {
    icon: Star,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50 dark:bg-orange-950/40",
    tag: "Weekend",
    time: "7:00 AM",
    title: "The Kayak Explore",
    body: "We take the kayaks out and discover Dubai from the water. The creek, the canals, the coastline — there's so much you miss from the shore. These are the paddles people talk about for weeks.",
    vibe: "Adventurous, exploratory, unforgettable",
    emoji: "🚣",
    note: "Kayaks available to rent locally — we'll show you where."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 18 } }
};

export function Activities() {
  return (
    <section id="gatherings" className="py-28 bg-slate-50/70 dark:bg-slate-900/50 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Weekly Rhythm</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mt-3 mb-6">
              Our Gatherings
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't do schedules or sessions. We do meetups and moments.
              Here's how we usually flow through the week — jump in wherever feels right.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {GATHERINGS.map((g, idx) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${g.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${g.iconColor}`} />
                  </div>
                  <div className="text-right">
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
                  <span className="italic">Vibe: {g.vibe}</span>
                </div>

                <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl px-5 py-4 border border-primary/10">
                  <p className="text-sm text-primary font-medium">💡 {g.note}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Board rental note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 border border-border/50 shadow-sm text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-4xl mb-4 block">🏄</span>
          <h3 className="text-2xl font-display font-bold text-foreground mb-3">Don't have a board?</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No problem at all! We'll show you exactly where to rent one nearby. Or just ask in the group — someone almost always has a spare.{" "}
            <strong className="text-foreground">Just show up.</strong> That's all we ask.
          </p>
        </motion.div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground mb-6 text-lg">Exact meetup spots are shared in the WhatsApp group the day before.</p>
            <Button
              asChild
              size="lg"
              className="rounded-full h-14 px-10 font-bold text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-lg"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Join the WhatsApp Group
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
