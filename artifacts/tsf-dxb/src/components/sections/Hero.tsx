import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/971544667458";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlays */}
      <img
        src="https://pixabay.com/get/g89e648228e80f06d19ae07f7e02a3163c339dd46fe6130d8eddf99ef2044196bf4bb6c0fd9c1057fb85d48b6ec41ea3762b6d42ffc9cdb396c2d0c93077d2b06_1280.jpg"
        alt="Paddle boarder at sunset"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-primary/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Dubai's Free Community Watersports Club
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Stand-Up Paddle &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-300">
              Kayak Club
            </span> in Dubai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-200 leading-relaxed mb-4 max-w-2xl font-light"
          >
            Join Dubai's most vibrant water sports community. Completely free, open to everyone — beginners to pros. No memberships, no fees. Just a love for the water.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-white text-sm font-bold mb-8"
          >
            <Heart className="w-4 h-4 fill-white" />
            100% Free · Always & Forever
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="h-14 px-8 rounded-full font-bold text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] transition-all"
            >
              <a href="#activities">
                Paddle with Us — Free!
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 rounded-full font-bold text-lg bg-white/5 hover:bg-white/10 text-white border-white/20 backdrop-blur-sm transition-all"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5 text-[#25D366]" />
                Join the Community
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center gap-6 text-sm text-slate-300 font-medium"
          >
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-primary/80 flex items-center justify-center text-xs text-white">JD</div>
              <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-accent/80 flex items-center justify-center text-xs text-white">MK</div>
              <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-secondary/80 flex items-center justify-center text-xs text-white">AL</div>
              <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs text-white">+</div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold">500+ Paddlers & Growing</span>
              <span>All Levels Welcome · No Cost · Just Show Up</span>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
