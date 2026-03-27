import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Users, Star, Award, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BENEFITS = [
  "Weekly social paddle events",
  "Equipment discounts for members",
  "Skill progression tracking",
  "Community WhatsApp group",
  "Monthly club competitions",
  "Kids & family dedicated sessions"
];

const STATS = [
  { label: "500+", sublabel: "Happy Paddlers", icon: Users },
  { label: "5★", sublabel: "Average Rating", icon: Star },
  { label: "3", sublabel: "Certified Coaches", icon: Award },
  { label: "5+", sublabel: "Years Experience", icon: Calendar },
];

export function Safety() {
  return (
    <section id="safety" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
              Safety & Community <br />
              <span className="text-primary">Our Priority</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At TSF DXB, we believe water sports should be accessible to everyone without compromising on safety. Every session begins with a mandatory safety briefing by our qualified coaches, ensuring you feel confident on the water regardless of your ability.
            </p>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-border/50">
              <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-accent rounded-full"></span>
                Exclusive Club Benefits
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {BENEFITS.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Stats & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg shadow-slate-100/50 dark:shadow-none border border-border/50 flex flex-col items-center text-center group hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-3xl font-display font-extrabold text-foreground mb-1">{stat.label}</h4>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.sublabel}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-secondary to-[#005a2d] rounded-3xl p-8 text-center text-white shadow-xl relative overflow-hidden mt-2">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                <MessageCircle className="w-48 h-48" />
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-2xl font-display font-bold mb-3">Have questions?</h3>
                <p className="text-secondary-foreground/80 mb-6 max-w-sm mx-auto">
                  Not sure which session is right for you? Our team is ready to help you plan your perfect day on the water.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-full bg-white text-secondary hover:bg-slate-10 font-bold px-8 h-14"
                >
                  <a href="https://wa.me/971544667458" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat With Us Directly
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
