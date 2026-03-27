import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_URL = "https://wa.me/971569431688";

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_LINKS = [
    { name: t.nav_home, href: "#" },
    { name: t.nav_story, href: "#story" },
    { name: t.nav_gatherings, href: "#gatherings" },
    { name: t.nav_rules, href: "#safety" },
    { name: t.nav_findUs, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3 dark:bg-slate-900/90"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 z-50 group">
              <img
                src={`${import.meta.env.BASE_URL}tsf-dxb-logo.png`}
                alt="TSF DXB"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className={`font-display font-bold text-xl hidden sm:block transition-colors duration-300 ${isScrolled ? "text-slate-900 dark:text-white" : "text-white"}`}>
                TSF DXB
              </span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-5">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`text-sm font-semibold transition-all duration-300 hover:text-primary ${
                        isScrolled ? "text-slate-700 dark:text-slate-200" : "text-white/90"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={toggleLang}
                className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  isScrolled
                    ? "text-slate-700 border-slate-200 hover:border-primary/50 hover:text-primary dark:text-slate-200 dark:border-slate-700"
                    : "text-white/80 border-white/20 hover:border-white/60 hover:text-white"
                }`}
                aria-label="Switch language"
              >
                <Globe className="w-3.5 h-3.5" />
                {t.lang_switch}
              </button>

              <Button
                asChild
                className="rounded-full font-bold px-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 me-2" />
                  {t.nav_joinFree}
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleLang}
                className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border transition-all duration-300 ${
                  isScrolled
                    ? "text-slate-700 border-slate-200 dark:text-white dark:border-slate-700"
                    : "text-white/80 border-white/20"
                }`}
              >
                <Globe className="w-3 h-3" />
                {t.lang_switch}
              </button>
              <button
                className={`z-50 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                  isScrolled ? "text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800" : "text-white hover:bg-white/20"
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-900 pt-24 px-6 pb-6 flex flex-col"
          >
            <ul className="flex flex-col gap-6 text-center mt-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-display font-bold text-slate-900 dark:text-white block w-full py-2"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pb-8">
              <Button
                asChild
                size="lg"
                className="w-full rounded-2xl font-bold text-lg h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 me-2" />
                  {t.hero_cta}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
