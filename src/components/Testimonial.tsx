import React from "react";
import { motion } from "framer-motion";

const Testimonial = React.forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} id="testimonial" className="relative z-10 py-24 md:py-40 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 md:gap-10"
      >
        <div className="size-12 rounded-full border border-primary flex items-center justify-center">
          <span className="block size-3 bg-primary rounded-full" />
        </div>
        <blockquote className="text-2xl md:text-4xl lg:text-5xl leading-tight text-balance font-light">
          "Não façais da casa de meu Pai casa de comércio."
        </blockquote>
        <cite className="text-sm uppercase tracking-widest text-primary not-italic font-medium font-body">
          — Jesus Cristo, João 2:16
        </cite>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
          Este espaço é gratuito e dedicado à luz. Todo conhecimento aqui compartilhado pertence à humanidade — assim como os mestres sempre ensinaram.
        </p>
      </motion.div>
    </section>
  );
});

Testimonial.displayName = "Testimonial";

export default Testimonial;
