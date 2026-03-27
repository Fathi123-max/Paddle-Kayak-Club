import { MapPin, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/971544667458";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Area */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border border-primary/20">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Ready to hit the water?</h2>
            <p className="text-slate-300 max-w-md text-lg">Join the TSF DXB community today. Sessions available daily for all skill levels.</p>
          </div>
          <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20 border-none">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp Us Now
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-xl">
                <img 
                  src={`${import.meta.env.BASE_URL}tsf-dxb-logo.png`} 
                  alt="TSF DXB Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">TSF DXB</h3>
                <p className="text-primary font-medium text-sm tracking-widest uppercase">Team Supboard Forever</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Dubai's most vibrant water sports community. Stand-up paddle boarding and kayaking experiences designed for fun, safety, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-xl mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#activities" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Sessions & Pricing</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> About The Club</a></li>
              <li><a href="#safety" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Safety Guidelines</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-bold text-xl mb-6">Connect With Us</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary">
                    <Phone className="w-4 h-4" />
                  </div>
                  +971 54 466 7458
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                Dubai, United Arab Emirates
              </li>
              <li>
                <a href="https://instagram.com/tsf_dxb" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary">
                    <Instagram className="w-4 h-4" />
                  </div>
                  @tsf_dxb
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} TSF DXB — Team Supboard Forever. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-not-allowed">Privacy Policy</span>
            <span className="cursor-not-allowed">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
