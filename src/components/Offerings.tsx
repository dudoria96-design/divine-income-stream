import { motion } from "framer-motion";
import curriculumImg from "@/assets/offering-curriculum.jpg";
import consultationImg from "@/assets/offering-consultation.jpg";
import transmissionImg from "@/assets/offering-transmission.jpg";

const offerings = [
  {
    number: "01",
    label: "Sabedoria",
    title: "Os Messias Solares",
    description:
      "Uma jornada pelos ensinamentos de Jesus, Buda, Krishna e todos os grandes mestres que trouxeram a luz divina à humanidade. O fio dourado que une todas as tradições sagradas.",
    cta: "Contemplar",
    image: curriculumImg,
  },
  {
    number: "02",
    label: "Ciência",
    title: "Física Quântica & o Divino",
    description:
      "Onde a ciência encontra o sagrado. Explore como a física quântica revela a inteligência suprema que governa cada átomo do universo e além da compreensão humana.",
    cta: "Explorar",
    image: consultationImg,
  },
  {
    number: "03",
    label: "Frequência",
    title: "O Deus Único & Universal",
    description:
      "A compreensão de uma inteligência suprema e amorosa que controla este pequeno planeta, todo o universo e dimensões que o ser humano ainda não consegue compreender.",
    cta: "Meditar",
    image: transmissionImg,
  },
];

const Offerings = () => {
  return (
    <section id="offerings" className="relative z-10 py-24 md:py-48 px-6 md:px-12 bg-background">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
        <h2 className="text-4xl md:text-5xl">
          Os Caminhos
          <br />
          <span className="text-primary italic">da Luz</span>
        </h2>
        <div className="text-muted-foreground text-xs uppercase tracking-widest md:text-right">
          Trilhas de estudo para
          <br />
          o despertar da consciência
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
        {offerings.map((offering, i) => (
          <motion.div
            key={offering.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="bg-background p-8 md:p-12 relative group hover:bg-secondary/50 transition-colors duration-700"
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-700 ease-in-out" />

            <div className="text-primary uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-8 md:mb-16">
              {offering.number} — {offering.label}
            </div>

            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-8 bg-alabaster-dim">
              <img
                src={offering.image}
                loading="lazy"
                width={800}
                height={800}
                alt={offering.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <h3 className="text-2xl md:text-3xl mb-4 md:mb-6 group-hover:text-primary transition-colors duration-500">
              {offering.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 md:mb-12">
              {offering.description}
            </p>
            <div className="text-xs uppercase tracking-widest pb-2 border-b border-foreground/20 inline-block cursor-pointer hover:text-primary hover:border-primary transition-colors">
              {offering.cta}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
