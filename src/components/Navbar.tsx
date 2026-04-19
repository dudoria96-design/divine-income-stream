import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-8 uppercase tracking-[0.2em] text-[0.65rem] font-bold">
      <div className="hidden md:flex gap-6">
        <a href="/#messengers" className="hover:text-primary transition-colors">Mensageiros</a>
        <a href="/#quantum" className="hover:text-primary transition-colors">Quântica</a>
        <a href="/#pillars" className="hover:text-primary transition-colors">Pilares</a>
        <a href="/#sabedoria" className="hover:text-primary transition-colors">Sabedoria</a>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" className="font-serif-display text-xl tracking-widest text-primary">
          Aura Sagrada
        </Link>
      </motion.div>
      <div className="hidden md:flex gap-6">
        <Link to="/meditacoes" className="hover:text-primary transition-colors">Meditações</Link>
        <a href="/#offerings" className="hover:text-primary transition-colors">Caminhos</a>
        <a href="/#contact" className="hover:text-primary transition-colors">Contato</a>
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
          className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden z-20"
        >
          <a href="/#messengers" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Mensageiros</a>
          <a href="/#quantum" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Quântica</a>
          <a href="/#pillars" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Pilares</a>
          <a href="/#sabedoria" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Sabedoria</a>
          <Link to="/meditacoes" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Meditações</Link>
          <a href="/#offerings" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Caminhos</a>
          <a href="/#contact" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Contato</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
