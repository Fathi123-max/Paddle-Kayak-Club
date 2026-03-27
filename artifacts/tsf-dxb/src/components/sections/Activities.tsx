import { motion } from "framer-motion";
import { Sun, Users, Waves, Star, MessageCircle, Wind, Droplets, Thermometer, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/971569431688";

const GATHERINGS = [
  {
    icon: Sun,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-950/40",
    tag: "كل سبت وأحد",
    time: "٦:٠٠ صباحاً",
    title: "تجديف الشروق",
    body: "نلتقط أول ضوء الفجر معاً في الممزر. هناك شيء سحري في أن تكون على الماء وهي دبي تستيقظ. نتجدف لساعة، ثم يحضر أحدهم دائماً قهوة نتشاركها على الشاطئ.",
    vibe: "هادئ، تأملي، مذهل",
    emoji: "☀️",
    note: "مثالي للمبتدئين — المياه في الممزر ساكنة وصافية عند الفجر."
  },
  {
    icon: Waves,
    iconColor: "text-primary",
    iconBg: "bg-primary/8 dark:bg-primary/15",
    tag: "كل سبت وأحد",
    time: "٦:٠٠ صباحاً",
    title: "استكشاف الكاياك",
    body: "نأخذ الكاياك على طول ساحل الممزر ونكتشف دبي من الماء. الخليج، المداخل الهادئة، أفق المدينة من البحر — هذه هي الجلسات التي يتحدث عنها الناس لأسابيع.",
    vibe: "مغامر، استكشافي، لا يُنسى",
    emoji: "🚣",
    note: "الكاياك متاح للإيجار قريباً — سنريك أين بالضبط."
  },
  {
    icon: Users,
    iconColor: "text-secondary",
    iconBg: "bg-secondary/8 dark:bg-secondary/15",
    tag: "كل سبت وأحد",
    time: "٦:٠٠ صباحاً",
    title: "التجديف الجماعي",
    body: "لا خطة، لا قواعد. الجميع يتجدف بوتيرته الخاصة. الأعضاء القدامى والوجوه الجديدة جنباً إلى جنب. خليج الممزر واسع للجميع وهادئ بما يكفي لكي يشعر الجميع بالراحة.",
    vibe: "مريح، اجتماعي، ترحيبي",
    emoji: "🌅",
    note: "المبتدئون أهلاً وسهلاً. نسير دائماً بوتيرة المجموعة."
  },
  {
    icon: Star,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50 dark:bg-orange-950/40",
    tag: "شهرياً",
    time: "صباحاً",
    title: "التجمع الكبير",
    body: "مرة في الشهر نجمع الكل — الأعضاء الدائمون، القادمون لأول مرة، والغرباء الذين سمعوا عنا من صديق. لوحات أكثر، ضحكات أكثر، ذكريات أجمل على مياه الممزر.",
    vibe: "نشيط، احتفالي، لا يُنسى",
    emoji: "🎉",
    note: "كلما كنا أكثر كان أمتع. أحضر صديقاً معك!"
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

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">إيقاعنا الأسبوعي</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mt-3 mb-6">
              لقاءاتنا
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نبقي الأمر بسيطاً. نفس الوقت، نفس المكان، كل عطلة نهاية أسبوع.
              بدون حجز. فقط تعال.
            </p>
          </motion.div>
        </div>

        {/* Schedule Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 via-teal-500/8 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-start">
            <span className="text-5xl">📅</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">موعد لقاءاتنا</p>
              <h3 className="text-2xl md:text-3xl font-display font-black text-foreground">كل سبت وأحد الساعة ٦:٠٠ صباحاً</h3>
              <p className="text-lg text-muted-foreground font-medium mt-0.5">حديقة شاطئ الممزر · دبي</p>
            </div>
          </div>
          <Button
            asChild
            className="rounded-full font-bold px-8 h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-md shrink-0"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 me-2" />
              تأكيد حضورك عبر واتساب
            </a>
          </Button>
        </motion.div>

        {/* Paddle Conditions Widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-border/50 shadow-sm mb-14 max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <div>
              <h4 className="font-display font-bold text-foreground text-lg">أحوال التجديف المعتادة</h4>
              <p className="text-sm text-muted-foreground">حديقة شاطئ الممزر · الصباح الباكر</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold border border-secondary/20">
              ✅ ممتاز للتجديف في الغالب
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2 bg-sky-50 dark:bg-sky-950/30 rounded-xl p-4 border border-sky-100 dark:border-sky-900">
              <Wind className="w-6 h-6 text-sky-500" />
              <span className="text-xl font-display font-black text-foreground">٨–١٤</span>
              <span className="text-xs text-muted-foreground font-medium text-center">كم/س رياح<br /><span className="text-sky-600 font-semibold">نسيم خفيف</span></span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-teal-50 dark:bg-teal-950/30 rounded-xl p-4 border border-teal-100 dark:border-teal-900">
              <Droplets className="w-6 h-6 text-teal-500" />
              <span className="text-xl font-display font-black text-foreground">هادئ</span>
              <span className="text-xs text-muted-foreground font-medium text-center">الماء<br /><span className="text-teal-600 font-semibold">ساكن وصافٍ</span></span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-amber-50 dark:bg-amber-950/30 rounded-xl p-4 border border-amber-100 dark:border-amber-900">
              <Thermometer className="w-6 h-6 text-amber-500" />
              <span className="text-xl font-display font-black text-foreground">٢٦–٣٢°</span>
              <span className="text-xs text-muted-foreground font-medium text-center">درجة الحرارة<br /><span className="text-amber-600 font-semibold">دافئ ومشمس</span></span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            ℹ️ هذه أحوال معتادة في الممزر عند الساعة ٦ صباحاً. نشارك تحديثات مباشرة في مجموعة الواتساب مساء اليوم السابق.
          </p>
        </motion.div>

        {/* Gathering Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
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
                  <span className="italic">الجو العام: {g.vibe}</span>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl px-5 py-4 border border-primary/10">
                  <p className="text-sm text-primary font-medium">💡 {g.note}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BBQ Special Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20 rounded-3xl p-8 md:p-10 border border-orange-200/60 dark:border-orange-900/40 shadow-sm mb-10"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center shrink-0">
              <Flame className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔥🏖️</span>
                <h3 className="text-2xl font-display font-bold text-foreground">أحياناً نستبدل المجاذيف بالشواية!</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                في مناسبات خاصة، ننظم{" "}
                <strong className="text-foreground">حفلات شواء على شاطئ الممزر</strong> — مجاذيف جانباً، وشواية في المقدمة. طعام لذيذ، رفقة أجمل، وأوقات لا تُنسى. تابع مجموعة الواتساب حتى لا تفوتك.
              </p>
              <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mt-3">
                🌊 تابعنا على الواتساب لتعلم موعد الجلسة القادمة
              </p>
            </div>
          </div>
        </motion.div>

        {/* No Board Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 border border-border/50 shadow-sm text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-4xl mb-4 block">🏄</span>
          <h3 className="text-2xl font-display font-bold text-foreground mb-3">ليس لديك لوح تجديف؟</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            لا مشكلة على الإطلاق! هناك أماكن إيجار قريبة من حديقة شاطئ الممزر وسنريك أين بالضبط. أو فقط اسأل في المجموعة — عادةً ما يكون لدى أحدهم لوح إضافي.{" "}
            <strong className="text-foreground">فقط تعال.</strong> هذا كل ما نطلبه.
          </p>
        </motion.div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground mb-6 text-lg">تُحدَّد نقطة التجمع الدقيقة في مجموعة الواتساب مساء اليوم السابق.</p>
            <Button
              asChild
              size="lg"
              className="rounded-full h-14 px-10 font-bold text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-lg"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 me-2" />
                انضم لمجموعة الواتساب
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
