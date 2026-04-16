import { motion } from "framer-motion";

const Foundation = () => {
  return (
    <section className="relative z-10 bg-stone-dark py-24 md:py-40 px-6 md:px-12 text-primary-foreground">
      <div className="absolute top-0 left-6 md:left-12 w-px h-full bg-primary opacity-20" />
      <div className="absolute top-0 right-6 md:right-12 w-px h-full bg-primary opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-8 md:mb-12">
          A Fundação
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl leading-tight text-balance mb-8 md:mb-12">
          Você não está construindo algo novo. Está removendo a poeira de um monumento que sempre existiu.
        </h2>
        <a
          href="#offerings"
          className="group inline-flex items-center gap-4 text-sm uppercase tracking-widest hover:text-primary transition-colors"
        >
          <span>Iniciar a escavação</span>
          <div className="w-8 h-px bg-primary-foreground group-hover:bg-primary transition-colors" />
        </a>
      </motion.div>
    </section>
  );
};

export default Foundation;
