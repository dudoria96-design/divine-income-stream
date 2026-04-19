import { motion } from "framer-motion";
import pillarsImg from "@/assets/pillars-scripture.jpg";

const pillars = [
  {
    n: "I",
    title: "A Luz do Mundo",
    verse: "Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida.",
    ref: "João 8:12",
  },
  {
    n: "II",
    title: "A Luz Resplandece",
    verse: "A luz resplandece nas trevas, e as trevas não prevaleceram contra ela.",
    ref: "João 1:5",
  },
  {
    n: "III",
    title: "Tesouros no Céu",
    verse: "Ajuntai tesouros no céu, onde nem a traça nem a ferrugem consomem.",
    ref: "Mateus 6:20",
  },
  {
    n: "IV",
    title: "Fome de Justiça",
    verse: "Bem-aventurados os que têm fome e sede de justiça, porque eles serão fartos.",
    ref: "Mateus 5:6",
  },
  {
    n: "V",
    title: "A Quietude",
    verse: "Aquietai-vos e sabei que Eu sou Deus.",
    ref: "Salmos 46:10",
  },
  {
    n: "VI",
    title: "O Caminho",
    verse: "Eu sou o caminho, a verdade e a vida.",
    ref: "João 14:6",
  },
  {
    n: "VII",
    title: "Sede a Luz",
    verse: "Sede vós mesmos a vossa luz. Buscai refúgio em vós mesmos.",
    ref: "Buda · Mahaparinibbana",
  },
];

const Pillars = () => {
  return (
    <section id="pillars" className="relative z-10 py-24 md:py-48 px-6 md:px-12 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24 items-end"
        >
          <div className="md:col-span-8">
            <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-6">
              Os Sete Pilares da Luz
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Palavras que sustentam
              <br />
              <span className="italic text-primary">o templo interior.</span>
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sete versículos para meditar — colunas vivas que sustentam a arquitetura sagrada de quem caminha na luz.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-4 md:sticky md:top-24"
          >
            <div className="relative aspect-[3/4] w-full bg-alabaster-dim overflow-hidden p-2 shadow-[inset_0_0_0_1px_hsl(var(--border))]">
              <div className="absolute top-0 left-6 w-px h-full bg-primary/30" />
              <img
                src={pillarsImg}
                loading="lazy"
                width={1024}
                height={1024}
                alt="Sete pilares dourados sustentando o templo da luz"
                className="w-full h-full object-cover grayscale-[20%] mix-blend-multiply opacity-90"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
            </div>
          </motion.div>

          <div className="md:col-span-8 space-y-px bg-foreground/10 border border-foreground/10">
            {pillars.map((p, i) => (
              <motion.article
                key={p.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-background p-6 md:p-10 group hover:bg-secondary/50 transition-colors duration-500 grid grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="col-span-2 md:col-span-1">
                  <div className="font-serif-display text-3xl md:text-4xl text-primary leading-none">
                    {p.n}
                  </div>
                </div>
                <div className="col-span-10 md:col-span-11">
                  <div className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground font-bold mb-2">
                    {p.title}
                  </div>
                  <p className="font-serif-display text-lg md:text-xl leading-snug text-balance mb-3 group-hover:text-primary transition-colors duration-500">
                    "{p.verse}"
                  </p>
                  <div className="text-[0.65rem] uppercase tracking-widest text-primary font-bold">
                    {p.ref}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
