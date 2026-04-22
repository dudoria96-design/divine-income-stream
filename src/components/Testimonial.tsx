import React from "react";
import { motion } from "framer-motion";
import { useT } from "@/i18n/LanguageContext";

type Pillar = { num: string; title: string; body: string };
type Echo = { quote: string; ref: string };

const Testimonial = React.forwardRef<HTMLElement>((_props, ref) => {
  const { t } = useT();
  const quote = t<string[]>("testimonial.quote");
  const heading = t<string[]>("testimonial.heading");
  const paragraphs = t<string[]>("testimonial.paragraphs");
  const pillars = t<Pillar[]>("testimonial.pillars");
  const callQuote = t<string[]>("testimonial.callQuote");
  const callBody = t<string[]>("testimonial.callBody");
  const echoes = t<Echo[]>("testimonial.echoes");

  return (
    <section ref={ref} id="testimonial" className="relative z-10 py-24 md:py-40 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 md:gap-10 mb-24 md:mb-40"
        >
          <div className="size-12 rounded-full border border-primary flex items-center justify-center">
            <span className="block size-3 bg-primary rounded-full" />
          </div>
          <blockquote className="font-serif-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-balance italic">
            "{quote[0]}
            <br />
            <span className="text-primary">{quote[1]}"</span>
          </blockquote>
          <cite className="text-sm uppercase tracking-widest text-primary not-italic font-medium font-body">
            {t<string>("testimonial.cite")}
          </cite>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-6">
              {t<string>("testimonial.sectionLabel")}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-balance">
              {heading[0]}
              <br />
              <span className="italic text-primary">{heading[1]}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-7 space-y-6 text-foreground/85 leading-relaxed"
          >
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg [&_em]:not-italic [&_em]:text-primary"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 mb-24 md:mb-32"
        >
          {pillars.map((p) => (
            <div key={p.num} className="bg-background p-8 md:p-10 group hover:bg-secondary/40 transition-colors duration-700">
              <div className="font-serif-display text-5xl md:text-6xl text-primary/80 mb-6">{p.num}</div>
              <h3 className="text-lg md:text-xl mb-4 group-hover:text-primary transition-colors duration-500 text-balance">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto text-center py-16 md:py-24 px-6 md:px-12 border-t border-b border-primary/30"
        >
          <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-8">
            {t<string>("testimonial.callLabel")}
          </div>
          <p className="font-serif-display text-2xl md:text-4xl lg:text-5xl leading-[1.15] text-balance mb-10">
            "{callQuote[0]}
            <br />
            <span className="italic text-primary">{callQuote[1]}"</span>
          </p>
          <div className="space-y-5 text-foreground/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {callBody.map((b, i) => (
              <p
                key={i}
                className="[&_em]:not-italic [&_em]:text-primary"
                dangerouslySetInnerHTML={{ __html: b }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {echoes.map((e, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="font-serif-display italic text-lg md:text-xl leading-snug text-foreground/90 mb-4 text-balance">
                "{e.quote}"
              </p>
              <p className="text-[0.65rem] uppercase tracking-widest text-primary font-bold">{e.ref}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-24 md:mt-32 text-center text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto"
        >
          {t<string>("testimonial.coda")}
        </motion.p>
      </div>
    </section>
  );
});

Testimonial.displayName = "Testimonial";

export default Testimonial;
