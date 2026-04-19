import { motion } from "framer-motion";
import quantumImg from "@/assets/quantum-verb.jpg";

const parallels = [
  {
    science: "Experimento da Dupla Fenda",
    desc: "A partícula só assume forma quando observada. A consciência participa da criação da realidade.",
    scripture: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.",
    ref: "João 1:1",
  },
  {
    science: "Entrelaçamento Quântico",
    desc: "Duas partículas permanecem conectadas instantaneamente, sem importar a distância — espaço e tempo se dissolvem.",
    scripture: "Para que todos sejam um, como tu, ó Pai, és em mim, e eu em ti.",
    ref: "João 17:21",
  },
  {
    science: "Campo Unificado",
    desc: "Toda matéria, energia e força emergem de um único campo subjacente — uma só substância vibrando em frequências distintas.",
    scripture: "Nele vivemos, nos movemos e existimos.",
    ref: "Atos 17:28",
  },
  {
    science: "Colapso da Função de Onda",
    desc: "A consciência colapsa infinitas possibilidades em uma única realidade manifesta. Pedir é alinhar.",
    scripture: "Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á.",
    ref: "Mateus 7:7",
  },
];

const Quantum = () => {
  return (
    <section id="quantum" className="relative z-10 py-24 md:py-48 px-6 md:px-12 bg-alabaster-dim overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] opacity-20 pointer-events-none">
        <img
          src={quantumImg}
          loading="lazy"
          width={1024}
          height={1024}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-6">
            Física Quântica & o Verbo
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance mb-8">
            A ciência alcança
            <br />
            <span className="italic text-primary">o que o Espírito sempre soube.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Cada descoberta da física moderna ecoa, em linguagem de equações, aquilo que os Mensageiros Solares revelaram em parábolas há milênios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {parallels.map((p, i) => (
            <motion.div
              key={p.science}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="bg-background p-8 md:p-12 group hover:bg-secondary/50 transition-colors duration-700"
            >
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <div className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground font-bold mb-3">
                    Ciência
                  </div>
                  <h3 className="text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors duration-500">
                    {p.science}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-primary/30">
                  <div className="text-[0.6rem] uppercase tracking-[0.25em] text-primary font-bold mb-3">
                    Sabedoria
                  </div>
                  <p className="font-serif-display text-lg md:text-xl leading-snug text-balance italic mb-3">
                    "{p.scripture}"
                  </p>
                  <div className="text-[0.65rem] uppercase tracking-widest text-primary font-bold">
                    {p.ref}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-center mt-16 md:mt-24 max-w-2xl mx-auto font-serif-display text-xl md:text-2xl text-balance text-muted-foreground italic"
        >
          A física quântica apenas comprova, em laboratório, aquilo que os mestres ensinavam à beira do mar.
        </motion.p>
      </div>
    </section>
  );
};

export default Quantum;
