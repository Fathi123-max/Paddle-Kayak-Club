import { motion } from "framer-motion";
import { Clock, MapPin, Signal, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WHATSAPP_URL = "https://wa.me/971544667458";

const SESSIONS = [
  { 
    title: "Beginner SUP Lesson", 
    price: "150 AED", 
    duration: "60 mins", 
    level: "Beginner", 
    location: "JBR Beach, Dubai", 
    inclusions: ["SUP Board & Paddle", "Life Vest", "Certified Coach", "Safety Briefing"], 
    emoji: "🏄",
    popular: true
  },
  { 
    title: "Intermediate SUP Session", 
    price: "120 AED", 
    duration: "90 mins", 
    level: "Intermediate", 
    location: "Dubai Marina", 
    inclusions: ["SUP Board & Paddle", "Life Vest", "Group Session", "Technique Tips"], 
    emoji: "🌊" 
  },
  { 
    title: "Kayak Touring", 
    price: "130 AED", 
    duration: "2 hours", 
    level: "All Levels", 
    location: "Dubai Creek", 
    inclusions: ["Kayak & Paddle", "Life Vest", "Guided Tour", "Scenic Route"], 
    emoji: "🚣",
    popular: true
  },
  { 
    title: "SUP Yoga Class", 
    price: "180 AED", 
    duration: "75 mins", 
    level: "Beginner-Friendly", 
    location: "JBR Beach, Dubai", 
    inclusions: ["SUP Board", "Yoga Mat", "Certified Instructor", "Mindfulness Session"], 
    emoji: "🧘" 
  },
  { 
    title: "Advanced SUP Racing", 
    price: "200 AED", 
    duration: "2 hours", 
    level: "Advanced", 
    location: "Dubai Marina", 
    inclusions: ["Race Board & Paddle", "Life Vest", "Coaching", "Performance Analysis"], 
    emoji: "🏆" 
  },
  { 
    title: "Equipment Rental", 
    price: "80 AED/hr", 
    duration: "Flexible", 
    level: "All Levels", 
    location: "JBR Beach, Dubai", 
    inclusions: ["SUP or Kayak", "Paddle", "Life Vest", "Safety Briefing"], 
    emoji: "🎿" 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export function Activities() {
  return (
    <section id="activities" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Sessions</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6">
              Choose Your Adventure
            </h3>
            <p className="text-lg text-muted-foreground">
              From first-timers to advanced athletes, we have the perfect water experience waiting for you.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SESSIONS.map((session, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col overflow-hidden border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-card relative">
                
                {session.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-accent text-white hover:bg-accent border-none font-bold shadow-md">
                      Popular
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 font-bold text-sm px-3 py-1 shadow-sm">
                    {session.price}
                  </Badge>
                </div>

                <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/50 dark:to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent group-hover:scale-150 transition-transform duration-700" />
                  <span className="text-6xl drop-shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {session.emoji}
                  </span>
                </div>

                <CardHeader className="pb-2 pt-6">
                  <h4 className="text-xl font-display font-bold text-foreground line-clamp-1">{session.title}</h4>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-y-3 text-sm text-muted-foreground font-medium mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{session.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Signal className="w-4 h-4 text-primary" />
                      <span>{session.level}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{session.location}</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 flex-grow border border-slate-100 dark:border-slate-800">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Includes</h5>
                    <ul className="flex flex-col gap-2">
                      {session.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="pt-2 pb-6">
                  <Button 
                    asChild 
                    className="w-full h-12 rounded-xl font-bold bg-slate-900 hover:bg-slate-800 dark:bg-primary dark:hover:bg-primary/90 text-white"
                  >
                    <a href={`${WHATSAPP_URL}?text=Hi! I'm interested in booking the ${encodeURIComponent(session.title)}.`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book on WhatsApp
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
