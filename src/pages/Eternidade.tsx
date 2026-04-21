import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import leaoImg from "@/assets/leao-dourado.jpg";
import templeImg from "@/assets/sabedoria-temple.jpg";
import lotusImg from "@/assets/sabedoria-lotus.jpg";
import treeImg from "@/assets/sabedoria-tree.jpg";

const steps = [
  {
    eyebrow: "Passo I · O Silêncio",
    title: "Aquietai-vos.",
    body: "Antes de qualquer caminho, o silêncio. Recolhei os sentidos do mundo, fechai os olhos da carne para que se abram os olhos da alma. O Verbo só fala onde há quietude.",
    verse: "Salmos 46:10",
  },
  {
    eyebrow: "Passo II · A Respiração da Luz",
    title: "Inspirai a Eternidade.",
    body: "A cada respiração, recebei a Luz que sustenta os universos. A cada expiração, devolvei à terra tudo que não é vós — medo, ilusão, ruído. O sopro é o mesmo de Gênesis 2:7.",
    verse: "Gênesis 2:7",
  },
  {
    eyebrow: "Passo III · A Meditação Profunda",
    title: "Mergulhai no Centro.",
    body: "Atravessai a porta estreita da mente. Lá dentro, no Templo invisível, a chama nunca se apagou. Sentai-vos diante dela. Não pensai. Apenas sede. Esta é a luta — não contra a carne, mas contra o ruído.",
    verse: "Efésios 6:12",
  },
  {
    eyebrow: "Passo IV · A Conquista do Templo",
    title: "Reconhecei o Eterno.",
    body: "Quando a quietude for completa, sabereis: o Templo sempre esteve em vós. O Reino não vem com aparência exterior. A Luz que sempre existiu vos reconhece, e vós a Ela. Aqui começa a eternidade.",
    verse: "Lucas 17:21",
  },
];

const Eternidade = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [0.55, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    document.title = "Eternidade · A Conquista do Templo · Divino Eu";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO — Leão Dourado */}
      <section ref={heroRef} className="relative h-[85vh] md:h-[100vh] overflow-hidden flex items-center justify-center">
        <motion.img
          src={leaoImg}
          alt="O Leão de Judá — guardião do Templo eterno"
          loading="eager"
          style={{ scale: heroScale, opacity: useTransform(scrollYProgress, [0, 0.8], [0.82, 0.18]) }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/18 via-background/8 to-background pointer-events-none" />

        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          <div className="text-primary uppercase tracking-[0.4em] text-[0.65rem] font-bold mb-8">
            A Conquista do Templo
          </div>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance mb-8">
            O início
            <br />
            <span className="italic text-primary">da eternidade.</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/85 leading-relaxed max-w-2xl mx-auto font-light">
            Quatro passos para a meditação profunda — a luta sagrada onde a alma reconhece a Luz que sempre existiu.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.6rem] uppercase tracking-[0.3em] text-primary/80 font-bold"
        >
          ↓ Rolai com a alma
        </motion.div>
      </section>

      {/* OS QUATRO PASSOS */}
      <section className="relative">
        {steps.map((step, i) => {
          const bgImage = [treeImg, lotusImg, templeImg, leaoImg][i];
          const isDark = i % 2 === 1;
          return (
            <div
              key={step.title}
              className={`relative py-28 md:py-44 px-6 md:px-12 overflow-hidden ${
                isDark ? "bg-stone-dark text-primary-foreground" : "bg-background text-foreground"
              }`}
            >
              <img
                src={bgImage}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ opacity: isDark ? 0.28 : 0.2 }}
              />
              <div
                className={`absolute inset-0 pointer-events-none ${
                  isDark
                    ? "bg-gradient-to-b from-stone-dark/78 via-stone-dark/58 to-stone-dark/94"
                    : "bg-gradient-to-b from-background/24 via-background/58 to-background/92"
                }`}
              />

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1 }}
                className="relative z-10 max-w-4xl mx-auto"
              >
                <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-8">
                  {step.eyebrow}
                </div>
                <h2 className="font-serif-display text-4xl md:text-6xl leading-[1.05] text-balance mb-10">
                  {step.title}
                </h2>
                <p className="text-base md:text-xl leading-relaxed max-w-2xl opacity-90 mb-10 font-light">
                  {step.body}
                </p>
                <div className="text-[0.65rem] uppercase tracking-widest text-primary font-bold pt-6 border-t border-primary/30 inline-block pr-12">
                  {step.verse}
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* CONQUISTA FINAL */}
      <section className="relative py-32 md:py-52 px-6 md:px-12 bg-stone-dark text-primary-foreground overflow-hidden">
        <img
          src={leaoImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-dark via-stone-dark/40 to-stone-dark pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <div className="text-primary uppercase tracking-[0.4em] text-[0.65rem] font-bold mb-10">
            E no Final
          </div>
          <h2 className="font-serif-display text-4xl md:text-6xl leading-[1.05] text-balance mb-10">
            A Luz se uniu à Luz eterna
            <br />
            <span className="italic text-primary">que sempre existiu.</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed opacity-85 max-w-2xl mx-auto mb-10 font-light">
            Será separado o joio do trigo. Aqueles que escolheram a Luz, à Luz pertencerão pela eternidade. Quem tem Deus, tudo lhe basta.
          </p>
          <div className="text-[0.65rem] uppercase tracking-widest text-primary font-bold mb-12">
            Mateus 13:30 · João 1:5
          </div>

          <Link
            to="/meditacoes"
            className="inline-block text-[0.65rem] uppercase tracking-[0.3em] text-primary font-bold border border-primary/40 px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
          >
            Iniciar a meditação →
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Eternidade;
