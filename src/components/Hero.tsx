import { motion } from "framer-motion";
import heroImage from "@/assets/hero-sacred.jpg";

const Hero = () => {
  return (
    <header id="practice" className="relative z-10 px-6 md:px-12 pt-12 md:pt-24 pb-24 md:pb-48 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-end">
      <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-background/60 blur-[120px] pointer-events-none mix-blend-overlay" />
      <div className="absolute top-[40%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-gold-light/20 blur-[140px] pointer-events-none" />

      <div className="md:col-span-7 lg:col-span-8 md:pr-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-[7.5rem] leading-[0.9] text-balance mb-8 md:mb-12"
        >
          A sagrada{" "}
          <br />
          <span className="italic text-muted-foreground">arquitetura</span>
          <br />
          de si mesmo.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-start gap-6 md:gap-8 max-w-md"
        >
          <div className="w-12 h-px bg-primary shrink-0 mt-3" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Desenterre a sabedoria atemporal codificada no seu ser. Um santuário de conhecimento unindo os ensinamentos de todos os Messias Solares, física quântica e a luz do Deus único.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex items-center gap-6"
        >
          <a
            href="#offerings"
            className="group flex items-center gap-4 text-sm uppercase tracking-widest hover:text-primary transition-colors font-medium"
          >
            <span>Iniciar a jornada</span>
            <div className="w-8 h-px bg-foreground group-hover:bg-primary transition-colors" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="md:col-span-5 lg:col-span-4 relative"
      >
        <div className="relative aspect-[3/4] w-full bg-alabaster-dim overflow-hidden p-2 shadow-[inset_0_0_0_1px_hsl(var(--border))]">
          <div className="absolute top-0 left-6 w-px h-full bg-primary/30" />
          <img
            src={heroImage}
            width={800}
            height={1024}
            alt="Arquitetura sagrada com luz divina dourada"
            className="w-full h-full object-cover grayscale-[30%] mix-blend-multiply opacity-80"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
