import { motion } from "framer-motion";
import curriculumImg from "@/assets/caminho-messias.jpg";
import consultationImg from "@/assets/caminho-quantico.jpg";
import transmissionImg from "@/assets/caminho-divino.jpg";
import { useT } from "@/i18n/LanguageContext";

const images = [curriculumImg, consultationImg, transmissionImg, curriculumImg, consultationImg, transmissionImg];

type Off = { number: string; label: string; title: string; description: string; teachings: string[]; cta: string };

const Offerings = () => {
  const { t } = useT();
  const offerings = t<Off[]>("offerings.list");

  return (
    <section id="offerings" className="relative z-10 py-24 md:py-48 px-6 md:px-12 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
          <div>
            <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-6">
              {t<string>("offerings.eyebrow")}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              {t<string>("offerings.heading1")}
              <br />
              <span className="text-primary italic">{t<string>("offerings.heading2")}</span>
            </h2>
          </div>
          <div className="text-muted-foreground text-xs uppercase tracking-widest md:text-right max-w-xs whitespace-pre-line">
            {t<string>("offerings.lede")}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {offerings.map((offering, i) => (
            <motion.div
              key={offering.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.15 }}
              className="relative min-h-[40rem] overflow-hidden group"
            >
              <img
                src={images[i] ?? curriculumImg}
                loading="lazy"
                alt={offering.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/75 to-background/95 group-hover:via-background/65 transition-colors duration-700" />
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-700 ease-in-out z-10" />

              <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                <div className="text-primary uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-6 md:mb-10">
                  {offering.number} — {offering.label}
                </div>

                <h3 className="text-2xl md:text-3xl mb-4 md:mb-5 group-hover:text-primary transition-colors duration-500 text-balance">
                  {offering.title}
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">{offering.description}</p>

                <ul className="space-y-2 mb-8 pt-4 border-t border-foreground/10">
                  {offering.teachings.map((tg, idx) => (
                    <li
                      key={idx}
                      className="text-[0.75rem] text-muted-foreground italic leading-relaxed pl-3 border-l border-primary/40"
                    >
                      {tg}
                    </li>
                  ))}
                </ul>

                <div className="text-xs uppercase tracking-widest pb-2 border-b border-foreground/20 inline-block cursor-pointer hover:text-primary hover:border-primary transition-colors w-fit">
                  {offering.cta} →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-20 md:mt-32 max-w-3xl mx-auto text-center"
        >
          <p className="font-serif-display text-2xl md:text-3xl lg:text-4xl leading-snug text-balance italic text-foreground/90 mb-6">
            {t<string>("offerings.coda")}
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-primary font-bold">
            {t<string>("offerings.codaRef")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Offerings;
