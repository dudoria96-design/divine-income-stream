import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-8 uppercase tracking-[0.2em] text-[0.65rem] font-bold">
      <div className="hidden md:flex gap-12">
        <a href="#practice" className="hover:text-primary transition-colors">A Prática</a>
        <a href="#offerings" className="hover:text-primary transition-colors">Ofertas</a>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-serif-display text-xl tracking-widest text-primary"
      >
        Aura Sagrada
      </motion.div>
      <div className="hidden md:flex gap-12">
        <a href="#testimonial" className="hover:text-primary transition-colors">Sabedoria</a>
        <a href="#contact" className="hover:text-primary transition-colors">Entrar</a>
      </div>
      <button
        className="md:hidden text-foreground"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#practice" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>A Prática</a>
          <a href="#offerings" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Ofertas</a>
          <a href="#testimonial" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Sabedoria</a>
          <a href="#contact" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Entrar</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
