import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-8 uppercase tracking-[0.2em] text-[0.65rem] font-bold">
      <div className="hidden md:flex gap-8">
        <a href="#practice" className="hover:text-primary transition-colors">Prática</a>
        <a href="#messengers" className="hover:text-primary transition-colors">Mensageiros</a>
        <a href="#quantum" className="hover:text-primary transition-colors">Quântica</a>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-serif-display text-xl tracking-widest text-primary"
      >
        Aura Sagrada
      </motion.div>
      <div className="hidden md:flex gap-8">
        <a href="#pillars" className="hover:text-primary transition-colors">Pilares</a>
        <a href="#offerings" className="hover:text-primary transition-colors">Caminhos</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
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
          <a href="#practice" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Prática</a>
          <a href="#messengers" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Mensageiros</a>
          <a href="#quantum" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Quântica</a>
          <a href="#pillars" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Pilares</a>
          <a href="#offerings" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Caminhos</a>
          <a href="#contact" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Contato</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
