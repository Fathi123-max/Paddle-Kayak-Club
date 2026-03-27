import { motion } from "framer-motion";

const PILLARS = [
  {
    emoji: "🌊",
    title: "Community",
    desc: "A welcoming tribe of water lovers"
  },
  {
    emoji: "🛡️",
    title: "Safety",
    desc: "Your safety is our top priority"
  },
  {
    emoji: "🌟",
    title: "Excellence",
    desc: "Expert coaching for all levels"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <img 
            src={`${import.meta.env.BASE_URL}tsf-dxb-logo.png`} 
            alt="TSF DXB Logo" 
            className="h-24 w-auto mx-auto mb-8 drop-shadow-sm"
          />
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6">
            About TSF DXB
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We are Dubai's passionate community of stand-up paddlers and kayakers. 
            Founded with a mission to make water sports accessible, safe, and fun for everyone, 
            <strong className="text-foreground font-semibold"> TSF DXB (Team Supboard Forever) </strong> 
            has grown into one of the UAE's most active paddling clubs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 flex flex-col items-center hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">{pillar.emoji}</div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground font-medium">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
