import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Lang, type T } from "@/lib/translations";

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
  isAR: boolean;
}

const LanguageContext = createContext<LanguageCtx | null>(null);

function detectInitialLang(): Lang {
  const saved = localStorage.getItem("tsf-lang") as Lang | null;
  if (saved === "en" || saved === "ar") return saved;
  const browser = navigator.language.toLowerCase();
  return browser.startsWith("ar") ? "ar" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("tsf-lang", l);
  };

  useEffect(() => {
    const t = translations[lang];
    const html = document.documentElement;
    html.lang = lang;
    html.dir = t.dir;
    html.style.setProperty("--font-sans", t.fontSans);
    html.style.setProperty("--font-display", t.fontDisplay);
  }, [lang]);

  const t = translations[lang] as T;
  const isAR = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isAR }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
