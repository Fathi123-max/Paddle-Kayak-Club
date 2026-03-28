import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const WHATSAPP_URL = "https://wa.me/971569431688";

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = ['story', 'gatherings', 'safety', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  const NAV_LINKS = [
    { name: t.nav_home, href: '#', sectionId: '' },
    { name: t.nav_story, href: '#story', sectionId: 'story' },
    { name: t.nav_gatherings, href: '#gatherings', sectionId: 'gatherings' },
    { name: t.nav_rules, href: '#safety', sectionId: 'safety' },
    { name: t.nav_findUs, href: '#contact', sectionId: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    if (targetId === '') {
      // Home - scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Update hash without scrolling
    window.history.pushState(null, '', href);
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3 dark:bg-slate-900/90"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-3 z-50 group"
              aria-label="TSF DXB Home"
            >
              <img
                src={`${import.meta.env.BASE_URL}tsf-dxb-logo.png`}
                alt="TSF DXB Logo"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className={`font-display font-bold text-xl hidden sm:block transition-colors duration-300 ${
                  isScrolled
                    ? "text-slate-900 dark:text-white"
                    : "text-white"
                }`}
              >
                TSF DXB
              </span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-5" role="menubar">
                {NAV_LINKS.map((link) => (
                  <li key={link.name} role="none">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      role="menuitem"
                      className={`text-sm font-semibold transition-all duration-300 hover:text-primary focus:outline-none focus:underline focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                        activeSection === link.sectionId
                          ? 'text-primary font-bold'
                          : isScrolled
                          ? 'text-slate-700 dark:text-slate-200'
                          : 'text-white/90'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={toggleLang}
                className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
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
                className="rounded-full font-bold px-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join us on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 me-2" />
                  {t.nav_joinFree}
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleLang}
                className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isScrolled
                    ? "text-slate-700 border-slate-200 dark:text-white dark:border-slate-700"
                    : "text-white/80 border-white/20"
                }`}
                aria-label="Switch language"
              >
                <Globe className="w-3 h-3" />
                {t.lang_switch}
              </button>
              <button
                className={`z-50 p-2 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isScrolled
                    ? "text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
                    : "text-white hover:bg-white/20"
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
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
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <ul className="flex flex-col gap-6 text-center mt-8" role="menu">
              {NAV_LINKS.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  role="none"
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                    }}
                    role="menuitem"
                    className={`text-2xl font-display font-bold block w-full py-2 focus:outline-none focus:underline focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      activeSection === link.sectionId
                        ? 'text-primary'
                        : 'text-slate-900 dark:text-white'
                    }`}
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
                className="w-full rounded-2xl font-bold text-lg h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join us on WhatsApp"
                >
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
