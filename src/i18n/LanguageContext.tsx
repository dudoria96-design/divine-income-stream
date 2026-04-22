import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Lang, translations, LANGS } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T = unknown>(path: string) => T;
};

const LanguageContext = createContext<Ctx | undefined>(undefined);

const STORAGE_KEY = "asa-lang";

const getInitial = (): Lang => {
  if (typeof window === "undefined") return "pt";
  const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (saved && LANGS.some((l) => l.code === saved)) return saved;
  const browser = navigator.language.toLowerCase();
  if (browser.startsWith("en")) return "en";
  if (browser.startsWith("es")) return "es";
  if (browser.startsWith("zh")) return "zh";
  return "pt";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    setLangState(getInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* noop */
    }
  };

  const t = <T,>(path: string): T => {
    const parts = path.split(".");
    let cur: unknown = translations[lang];
    for (const p of parts) {
      if (cur && typeof cur === "object" && p in (cur as Record<string, unknown>)) {
        cur = (cur as Record<string, unknown>)[p];
      } else {
        return path as unknown as T;
      }
    }
    return cur as T;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useT = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
};

export { LANGS };
export type { Lang };
