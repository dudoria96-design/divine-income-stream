import { motion } from "framer-motion";
import treeImg from "@/assets/sabedoria-tree.jpg";
import lotusImg from "@/assets/sabedoria-lotus.jpg";
import templeImg from "@/assets/sabedoria-temple.jpg";

const verses = [
  {
    title: "A Espada de Dois Gumes",
    body: "Porque a palavra de Deus é viva, e eficaz, e mais penetrante do que qualquer espada de dois gumes — penetra até à divisão da alma e do espírito.",
    ref: "Hebreus 4:12",
  },
  {
    title: "Não Entesoureis na Terra",
    body: "Não ajunteis tesouros na terra, onde a traça e a ferrugem tudo consomem. Ajuntai tesouros no céu, onde nem traça nem ferrugem corrompem.",
    ref: "Mateus 6:19-20",
  },
  {
    title: "Bem-aventurados os que Clamam por Justiça",
    body: "Bem-aventurados os que têm fome e sede de justiça, porque eles serão fartos.",
    ref: "Mateus 5:6",
  },
  {
    title: "A Batalha Não É Contra a Carne",
    body: "Porque não temos que lutar contra carne e sangue, mas contra os principados, contra as potestades — contra as ilusões espirituais que cegam o homem.",
    ref: "Efésios 6:12",
  },
  {
    title: "Quem tem Deus, tudo lhe basta",
    body: "Nada te perturbe, nada te espante. Tudo passa. Deus não muda. A paciência tudo alcança. Quem tem Deus nada lhe falta. Só Deus basta.",
    ref: "Santa Teresa de Ávila",
  },
  {
    title: "Como Apolo em Sua Carruagem",
    body: "Como Apolo conduzindo o sol pelos céus, o Deus único leva pela mão aqueles que pertencem à Luz — desde o início dos tempos, através de todas as eras.",
    ref: "Tradição Solar Universal",
  },
  {
    title: "Todos os Mensageiros são Um",
    body: "Os Messias Solares são apenas Um — o Deus Único Se manifestando através das eras, em rostos diferentes, falando a mesma Verdade eterna.",
    ref: "Sabedoria Perene",
  },
  {
    title: "A Ciência Comprova o Verbo",
    body: "A física quântica apenas comprova, em experimentos empíricos, aquilo que Jesus, Buda e Hermes ensinavam há milênios — a consciência cria a realidade, e tudo é Um.",
    ref: "João 1:1 · Dupla Fenda",
  },
  {
    title: "Aqueles que Vêem a Eternidade",
    body: "Nem eu, nem o homem mais rico de todos os tempos, podemos impressionar aqueles que enxergam a eternidade. Para quem vê a Luz, o ouro do mundo é poeira.",
    ref: "Visão Perene",
  },
];

const Sabedoria = () => {
  return (
    <section id="sabedoria" className="relative z-10 overflow-hidden">
      <div className="relative py-24 md:py-40 px-6 md:px-12 bg-background">
        <div
          className="absolute inset-0 opacity-[0.08] bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${treeImg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background pointer-events-none" />

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
                Sabedoria Eterna
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Palavras de luz
                <br />
                <span className="italic text-primary">que atravessam as eras.</span>
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Versículos, parábolas e ensinamentos dos grandes mestres — fragmentos da mesma Luz eterna, falando em línguas distintas a uma só Verdade.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {verses.map((v, i) => (
              <motion.article
                key={v.title}
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
        <img
          src={templeImg}
          loading="lazy"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-dark/80 via-stone-dark/60 to-stone-dark pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-8">
            A Morada Eterna
          </div>
          <h3 className="font-serif-display text-3xl md:text-5xl leading-tight text-balance mb-10">
            A Luz se une à Luz que tudo cria
            <br />
            <span className="italic text-primary">e a tudo pertence.</span>
          </h3>
          <p className="text-base md:text-lg leading-relaxed opacity-80 max-w-xl mx-auto mb-8">
            Da eternidade, contemplando este pequeno mundo — vê-se a Vontade Divina e o Amor Supremo sustentando cada átomo, cada respiração, cada coração que clama por justiça.
          </p>
          <div className="text-[0.65rem] uppercase tracking-widest text-primary font-bold">
            João 1:5 · A luz resplandece, e as trevas não a compreenderam
          </div>
        </motion.div>
      </div>

      <div className="relative py-20 md:py-32 px-6 md:px-12 bg-alabaster-dim overflow-hidden">
        <img
          src={lotusImg}
          loading="lazy"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alabaster-dim via-alabaster-dim/50 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <p className="font-serif-display text-2xl md:text-4xl leading-tight text-balance text-foreground mb-6">
            "Voltai-vos para a Luz."
          </p>
          <p className="text-sm uppercase tracking-widest text-primary font-bold">
            O Chamado Eterno
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sabedoria;
