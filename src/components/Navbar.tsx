import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", to: "/", type: "route" as const },
  { label: "Caminhos", to: "/#offerings", type: "hash" as const },
  { label: "Meditações", to: "/meditacoes", type: "route" as const },
  { label: "Eternidade", to: "/eternidade", type: "route" as const },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const renderLink = (link: (typeof navLinks)[number], onClick?: () => void) => {
    const baseClass =
      "text-foreground/80 hover:text-primary transition-colors duration-300 text-[0.7rem] uppercase tracking-[0.22em] font-medium";
    if (link.type === "hash") {
      return (
        <a key={link.label} href={link.to} className={baseClass} onClick={onClick}>
          {link.label}
        </a>
      );
    }
    return (
      <Link key={link.label} to={link.to} className={baseClass} onClick={onClick}>
        {link.label}
      </Link>
    );
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-primary/15 shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.25)]"
          : "backdrop-blur-md bg-background/40 border-b border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <Link
          to="/"
          className="font-serif-display text-xl md:text-2xl tracking-[0.18em] text-primary relative group"
          style={{ textShadow: "0 0 24px hsl(var(--primary) / 0.35)" }}
        >
          A sagrada Arquitetura
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => renderLink(link))}
          <Link
            to="/auth"
            className="ml-2 border border-primary/70 text-primary px-5 py-2 rounded-full text-[0.7rem] uppercase tracking-[0.22em] font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_24px_hsl(var(--primary)/0.45)]"
          >
            Portal
          </Link>
        </div>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-primary/15 bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {navLinks.map((link) => renderLink(link, () => setMenuOpen(false)))}
              <Link
                to="/auth"
                onClick={() => setMenuOpen(false)}
                className="border border-primary/70 text-primary px-5 py-2.5 rounded-full text-[0.7rem] uppercase tracking-[0.22em] font-medium text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Portal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
