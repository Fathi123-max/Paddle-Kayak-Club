// src/components/layout/Footer.tsx
import { MapPin, Instagram, Heart, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/971569431688';

export function Footer() {
  const { t, isAR } = useLanguage();

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-24 pb-12 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* CTA Section */}
        <div
          className="rounded-[2rem] p-14 md:p-20 text-center mb-24 relative overflow-hidden border border-white/5"
          style={{ background: 'linear-gradient(135deg, hsl(217 91% 18%) 0%, hsl(217 91% 28%) 50%, hsl(38 92% 58% / 0.2) 100%)' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="text-6xl block mb-8">🌊</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-snug max-w-4xl mx-auto">{t.footer_cta_title}</h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-4 leading-relaxed">{t.footer_cta_sub}</p>
            <p className="text-slate-400 text-base mb-10">{t.footer_cta_schedule}</p>
            <Button asChild size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_50px_-10px_rgba(37,211,102,0.6)] hover:shadow-[0_0_60px_-5px_rgba(37,211,102,0.8)] hover:-translate-y-1 transition-all duration-300 border-none">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 me-2" />
                {t.footer_cta_btn}
              </a>
            </Button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-2xl">
                <img src={`${import.meta.env.BASE_URL}tsf-dxb-logo.png`} alt="TSF DXB" className="h-16 w-auto object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">TSF DXB</h3>
                <p className="text-primary font-medium text-xs tracking-widest uppercase">Team Supboard Forever</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">{t.footer_brand_desc}</p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-white font-display font-bold text-xl mb-6">{t.footer_explore}</h4>
            <ul className="flex flex-col gap-4">
              {[
                { href: '#story', label: t.footer_link_story },
                { href: '#gatherings', label: t.footer_link_gatherings },
                { href: '#location', label: t.footer_link_location },
                { href: '#safety', label: t.footer_link_rules },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="group flex items-center gap-3 text-slate-400 hover:text-primary transition-colors duration-300">
                    <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                    <span className="relative">
                      {label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300 ease-out" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-xl mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {[
                { href: '#', label: 'Home' },
                { href: '#story', label: 'About Us' },
                { href: '#gatherings', label: 'Events' },
                { href: '#safety', label: 'Community Guidelines' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="group flex items-center gap-3 text-slate-400 hover:text-primary transition-colors duration-300">
                    <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                    <span className="relative">
                      {label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300 ease-out" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-display font-bold text-xl mb-6">{t.footer_findus}</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-slate-400 hover:text-primary transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-primary" />
                  </div>
                  <span>{t.footer_whatsapp}</span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>{t.footer_location}</span>
              </li>
              <li>
                <a href="https://instagram.com/tsf_dxb" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-slate-400 hover:text-primary transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-5 h-5 text-primary group-hover:text-primary" />
                  </div>
                  <span>{t.footer_instagram}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2 flex-wrap">
            {t.footer_built} <Heart className="w-4 h-4 fill-red-500 text-red-500 mx-1" /> {t.footer_in}
            <span className="text-slate-600 mx-2">·</span>
            © {new Date().getFullYear()} {t.footer_copy}
          </p>
        </div>
      </div>
    </footer>
  );
}
