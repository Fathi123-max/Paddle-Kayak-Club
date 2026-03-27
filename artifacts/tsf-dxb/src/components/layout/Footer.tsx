import { MapPin, Instagram, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/971569431688";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        {/* Top CTA */}
        <div className="rounded-3xl p-10 md:p-14 text-center mb-20 relative overflow-hidden border border-white/5"
          style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(20,184,166,0.08) 100%)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <div className="relative z-10">
            <span className="text-5xl block mb-6">🌊</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-snug">
              مستعد للتجديف معنا<br />هذا الأسبوع؟
            </h2>
            <p className="text-slate-300 text-lg max-w-md mx-auto mb-2 leading-relaxed">
              لا نماذج تسجيل. لا رسوم. فقط أرسل لنا رسالة وانضم إلى الفريق. الماء في انتظارك.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              📍 حديقة شاطئ الممزر · كل سبت وأحد · الساعة ٦:٠٠ صباحاً
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-14 text-lg font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20 border-none"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 me-2" />
                انضم لمجموعة الواتساب
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-2.5 rounded-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}tsf-dxb-logo.png`}
                  alt="TSF DXB"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">TSF DXB</h3>
                <p className="text-primary/80 font-medium text-xs tracking-widest uppercase">Team Supboard Forever</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              مجتمع التجديف الحر في دبي. أناس حقيقيون. مياه هادئة. أجواء رائعة.
              بدون رسوم. بدون غرور. بدون أجندات.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">استكشف</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#story" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40" /> قصتنا</a></li>
              <li><a href="#gatherings" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40" /> لقاءاتنا</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40" /> الموقع والخريطة</a></li>
              <li><a href="#safety" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40" /> قواعد الماء</a></li>
            </ul>
          </div>

          {/* Find Us */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">ابحث عنا</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  واتساب · ‎+971 56 943 1688
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                حديقة شاطئ الممزر، دبي
              </li>
              <li>
                <a href="https://instagram.com/tsf_dxb" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4 text-primary" />
                  </div>
                  @tsf_dxb
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1.5 flex-wrap">
            صُنع بـ <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 mx-0.5" /> في دبي.
            مجاني دائماً. ترحيبي دائماً.
            <span className="text-slate-600 mx-1">·</span>
            © {new Date().getFullYear()} TSF DXB — Team Supboard Forever
          </p>
        </div>
      </div>
    </footer>
  );
}
