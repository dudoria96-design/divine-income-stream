import { motion } from "framer-motion";
import treeImg from "@/assets/sabedoria-tree.jpg";
import lotusImg from "@/assets/sabedoria-lotus.jpg";
import templeImg from "@/assets/sabedoria-temple.jpg";
import { useT } from "@/i18n/LanguageContext";

type V = { title: string; body: string; ref: string };

const Sabedoria = () => {
  const { t } = useT();
  const verses = t<V[]>("sabedoria.list");

  return (
    <section id="sabedoria" className="relative z-10 overflow-hidden">
      <div className="relative py-24 md:py-40 px-6 md:px-12 bg-background">
        <img src={treeImg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-[0.18]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/55 to-background pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24 items-end"
          >
            <div className="md:col-span-8">
              <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-6">
                {t<string>("sabedoria.eyebrow")}
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                {t<string>("sabedoria.heading1")}
                <br />
                <span className="italic text-primary">{t<string>("sabedoria.heading2")}</span>
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="text-muted-foreground text-sm leading-relaxed">{t<string>("sabedoria.lede")}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {verses.map((v, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="bg-background/95 p-8 md:p-10 group hover:bg-secondary/50 transition-colors duration-700 backdrop-blur-sm"
              >
                <div className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground font-bold mb-4">
                  {v.title}
                </div>
                <p className="font-serif-display text-lg md:text-xl leading-snug text-balance mb-6 group-hover:text-primary transition-colors duration-500">
                  "{v.body}"
                </p>
                <div className="text-[0.65rem] uppercase tracking-widest text-primary font-bold pt-4 border-t border-foreground/10">
                  {v.ref}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <div className="relative py-24 md:py-40 px-6 md:px-12 bg-stone-dark text-primary-foreground overflow-hidden">
        <img src={templeImg} loading="lazy" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-dark/80 via-stone-dark/60 to-stone-dark pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-8">
            {t<string>("sabedoria.moradaEyebrow")}
          </div>
          <h3 className="font-serif-display text-3xl md:text-5xl leading-tight text-balance mb-10">
            {t<string>("sabedoria.moradaTitle1")}
            <br />
            <span className="italic text-primary">{t<string>("sabedoria.moradaTitle2")}</span>
          </h3>
          <p className="text-base md:text-lg leading-relaxed opacity-80 max-w-xl mx-auto mb-8">
            {t<string>("sabedoria.moradaBody")}
          </p>
          <div className="text-[0.65rem] uppercase tracking-widest text-primary font-bold">
            {t<string>("sabedoria.moradaRef")}
          </div>
        </motion.div>
      </div>

      <div className="relative py-20 md:py-32 px-6 md:px-12 bg-alabaster-dim overflow-hidden">
        <img src={lotusImg} loading="lazy" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-alabaster-dim via-alabaster-dim/50 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <p className="font-serif-display text-2xl md:text-4xl leading-tight text-balance text-foreground mb-6">
            "{t<string>("sabedoria.callQuote")}"
          </p>
          <p className="text-sm uppercase tracking-widest text-primary font-bold">
            {t<string>("sabedoria.callRef")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sabedoria;
