import { LANGS, useT } from "@/i18n/LanguageContext";

const LanguageSwitcher = ({ compact = false }: { compact?: boolean }) => {
  const { lang, setLang } = useT();

  return (
    <div
      className={`inline-flex items-center gap-0.5 p-0.5 border border-foreground/15 rounded-full bg-background/60 backdrop-blur-sm ${
        compact ? "" : ""
      }`}
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-2.5 py-1 text-[0.6rem] uppercase tracking-widest font-bold rounded-full transition-colors duration-300 ${
            lang === l.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={`Idioma ${l.label}`}
          aria-pressed={lang === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
