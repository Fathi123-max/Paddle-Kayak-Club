import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/971569431688";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <img
        src="https://pixabay.com/get/g89e648228e80f06d19ae07f7e02a3163c339dd46fe6130d8eddf99ef2044196bf4bb6c0fd9c1057fb85d48b6ec41ea3762b6d42ffc9cdb396c2d0c93077d2b06_1280.jpg"
        alt="مجدفون عند الشروق في مياه دبي"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/85" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 pt-20 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/80 text-sm font-medium mb-8 tracking-wide">
            🌊 دبي · مجاني دائماً · مفتوح للجميع
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-white leading-[1.2] tracking-tight mb-8"
        >
          عائلتك الجديدة{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-300 to-sky-400">
            بانتظارك على الشاطئ
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-xl md:text-2xl text-slate-200/90 leading-loose mb-12 max-w-2xl mx-auto font-light"
        >
          مجتمع مجاني ١٠٠٪ لمحبي التجديف. بدون رسوم، بدون قيود.
          فقط أشخاص رائعون، وصباحات باكرة في حديقة شاطئ الممزر،
          وحب مشترك للبحر.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="h-16 px-10 rounded-full font-bold text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_50px_-10px_rgba(37,211,102,0.6)] transition-all border-none"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="ms-0 me-3 w-6 h-6" />
              انضم لمجموعة الواتساب
            </a>
          </Button>

          <a
            href="#gatherings"
            className="text-white/70 hover:text-white transition-colors text-base font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white/70"
          >
            تعرف على لقاءاتنا الأسبوعية ↓
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400 font-medium"
        >
          <span className="flex items-center gap-2">☀️ تجديف كل أسبوع عند الفجر</span>
          <span className="text-slate-600 hidden sm:block">·</span>
          <span className="flex items-center gap-2">🚣 لجميع المستويات</span>
          <span className="text-slate-600 hidden sm:block">·</span>
          <span className="flex items-center gap-2">❤️ أكثر من ٥٠٠ عضو</span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
