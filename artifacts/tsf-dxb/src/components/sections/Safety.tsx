import { motion } from "framer-motion";
import { Waves, Users, Leaf } from "lucide-react";

const RULES = [
  {
    icon: Leaf,
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    number: "٠١",
    title: "احترم البحر",
    body: "البحر يمنحنا الكثير. نترك كل شاطئ أنظف مما وجدناه. لا قمامة، لا ضوضاء. لا نأخذ إلا الذكريات ولا نترك إلا بصمة الأقدام. المحيط ليس ملعبنا — بل هو بيتنا."
  },
  {
    icon: Users,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    number: "٠٢",
    title: "انتبه لبعضكم البعض",
    body: "لا أحد يتجدف وحيداً في مجتمعنا. نراقب الجميع، نتفقد بعضنا، وننتظر المتجدف الأبطأ — لأن هذا ما تفعله العائلة. الماء قد يكون غير متوقع. رفيقك في التجديف هو شبكة أمانك."
  },
  {
    icon: Waves,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-950/30",
    number: "٠٣",
    title: "الأجواء الإيجابية فقط",
    body: "اترك غرورك على الرمال. لا منافسة، لا عروض، لا أحكام. سواء وقعت عن لوحك عشر مرات أو انزلقت كالمحترف، فأنت تنتمي إلى هنا بالقدر ذاته. نحتفل بالحضور، لا بالبهرجة."
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
          <span className="text-primary font-bold tracking-widest uppercase text-sm">كيف نسير</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mt-3 mb-6">
            قواعد الماء
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            نحن مرنون في كل شيء تقريباً. لكن هذه الثلاثة؟
            لا تهاون فيها. هي ما يجعل TSF DXB آمناً، مميزاً، وحقيقياً.
          </p>
        </motion.div>

        <div className="space-y-6">
          {RULES.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 24 }}
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
            "الماء لا يهتم بمسماك الوظيفي. ونحن كذلك."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
