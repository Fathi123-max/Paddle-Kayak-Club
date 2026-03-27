import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Activities", href: "#activities" },
  { name: "About", href: "#about" },
  { name: "Safety", href: "#safety" },
  { name: "Contact", href: "#contact" },
];

const WHATSAPP_URL = "https://wa.me/971544667458";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3 dark:bg-slate-900/90"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 z-50 group">
              <img 
                src={`${import.meta.env.BASE_URL}tsf-dxb-logo.png`} 
                alt="TSF DXB Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className={`font-display font-bold text-xl hidden sm:block transition-colors duration-300 ${isScrolled ? "text-slate-900 dark:text-white" : "text-white"}`}>
                TSF DXB
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                        isScrolled ? "text-slate-700 dark:text-slate-200" : "text-white/90"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild 
                className="rounded-full font-bold px-6 shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: 'hsl(199 89% 48%)', color: 'white' }}
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden z-50 p-2 rounded-full backdrop-blur-sm transition-colors ${
                isScrolled ? "text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800" : "text-white hover:bg-white/20"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
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
              {NAV_LINKS.map((link) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
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
                className="w-full rounded-2xl font-bold text-lg h-14"
                style={{ backgroundColor: 'hsl(199 89% 48%)', color: 'white' }}
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
