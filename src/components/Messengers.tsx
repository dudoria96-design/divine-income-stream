import { motion } from "framer-motion";
import sunImg from "@/assets/messengers-sun.jpg";

const messengers = [
  {
    symbol: "☧",
    name: "Jesus Cristo",
    era: "Judeia · I d.C.",
    teaching: "Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida.",
    source: "João 8:12",
  },
  {
    symbol: "☉",
    name: "Apolo",
    era: "Hélade · Antiguidade",
    teaching: "O cocheiro do sol, conduzindo a luz pelos céus — guia dos que buscam harmonia, música e profecia.",
    source: "Tradição Helênica",
  },
  {
    symbol: "𓂀",
    name: "Hórus",
    era: "Egito · Antiguidade",
    teaching: "O sol nascente, o olho que tudo vê. A luz que vence as sombras a cada amanhecer.",
    source: "Tradição Egípcia",
  },
  {
    symbol: "✺",
    name: "Mitra",
    era: "Pérsia · Antiguidade",
    teaching: "Sol Invictus — o sol invencível. Mediador entre o divino e a humanidade, guardião da verdade.",
    source: "Tradição Mitraica",
  },
  {
    symbol: "𐬀",
    name: "Zoroastro",
    era: "Pérsia · ~VI a.C.",
    teaching: "Bons pensamentos, boas palavras, boas ações. A luz de Ahura Mazda habita em cada alma desperta.",
    source: "Avesta",
  },
  {
    symbol: "☸",
    name: "Buda",
    era: "Índia · ~V a.C.",
    teaching: "Sede vós mesmos a vossa luz. Buscai refúgio em vós mesmos — não busqueis refúgio fora.",
    source: "Mahaparinibbana Sutta",
  },
  {
    symbol: "☿",
    name: "Hermes Trismegisto",
    era: "Egito-Grécia · Antiguidade",
    teaching: "O que está em cima é como o que está embaixo. A luz divina permeia todos os planos da existência.",
    source: "Tábua de Esmeralda",
  },
];

const Messengers = () => {
  return (
    <section id="messengers" className="relative z-10 py-24 md:py-48 px-6 md:px-12 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24 items-end"
        >
          <div className="md:col-span-7">
            <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-6">
              Os Mensageiros Solares
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              A mesma luz,
              <br />
              <span className="italic text-primary">muitos rostos.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Atravessando eras, continentes e línguas, os grandes mestres trouxeram a mesma chama. Não são rivais — são raios do mesmo Sol. Todos apontam para o Deus único, supremo e amoroso que sustenta o universo.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {messengers.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/50 transition-colors duration-700 relative"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-700 ease-in-out" />
              <div className="flex items-start justify-between mb-8">
                <div
                  className="font-serif-display text-5xl text-primary leading-none"
                  aria-hidden="true"
                >
                  {m.symbol}
                </div>
                <div className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground text-right pt-2">
                  {m.era}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors duration-500">
                {m.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{m.teaching}"
              </p>
              <div className="text-[0.65rem] uppercase tracking-widest text-primary font-bold pt-4 border-t border-foreground/10">
                {m.source}
              </div>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="bg-stone-dark p-8 md:p-10 flex flex-col justify-between text-primary-foreground relative overflow-hidden"
          >
            <img
              src={sunImg}
              loading="lazy"
              width={1024}
              height={1024}
              alt="Sol sagrado de sete raios"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
            />
            <div className="relative z-10">
              <div className="text-primary uppercase tracking-[0.3em] text-[0.6rem] font-bold mb-6">
                Unidade
              </div>
              <p className="font-serif-display text-2xl md:text-3xl leading-snug text-balance">
                Todos são apenas Um — o Deus único Se manifestando através das eras, desde o início dos tempos.
              </p>
            </div>
            <div className="relative z-10 text-[0.65rem] uppercase tracking-widest opacity-60 pt-8">
              Aura Sagrada
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Messengers;
