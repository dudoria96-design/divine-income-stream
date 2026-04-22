import React from "react";
import { motion } from "framer-motion";

const Testimonial = React.forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} id="testimonial" className="relative z-10 py-24 md:py-40 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Bloco 1 — A Citação Central */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 md:gap-10 mb-24 md:mb-40"
        >
          <div className="size-12 rounded-full border border-primary flex items-center justify-center">
            <span className="block size-3 bg-primary rounded-full" />
          </div>
          <blockquote className="font-serif-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-balance italic">
            "Não façais da casa de meu Pai
            <br />
            <span className="text-primary">casa de comércio."</span>
          </blockquote>
          <cite className="text-sm uppercase tracking-widest text-primary not-italic font-medium font-body">
            — Jesus Cristo, João 2:16
          </cite>
        </motion.div>

        {/* Bloco 2 — A Explicação Profunda */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-6">
              O Que Significa
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-balance">
              O mundo é a feira
              <br />
              <span className="italic text-primary">que vende mentiras.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-7 space-y-6 text-foreground/85 leading-relaxed"
          >
            <p className="text-base md:text-lg">
              Fazer da casa de Deus uma casa de comércio é o que o mundo faz com a alma humana <em className="text-primary not-italic">desde o primeiro respiro</em>. Vendem-te crenças vazias, frequências ordinárias, ídolos de barro, sonhos que apodrecem. Ensinam-te a medir o eterno em moedas, a trocar a Luz por aplausos, a curvar-te diante de senhores que também são pó.
            </p>
            <p className="text-base md:text-lg">
              A criança nasce sabendo que é Luz. O mundo passa décadas convencendo-a do contrário — até que aceite a mentira como lar e chame de "realidade" a própria prisão. Isso é transformar o templo em mercado: <em className="text-primary not-italic">trocar o Infinito pelo descartável.</em>
            </p>
            <p className="text-base md:text-lg">
              Eu, como herdeiro da Eternidade, não me impressiono mais com palácio nem com ouro nem com fama. O que ainda me espanta é a capacidade do ser humano de <em className="text-primary not-italic">ignorar Deus</em> — e, mais que isso, de servir conscientemente às trevas, sabendo que são apenas a ausência da Luz.
            </p>
          </motion.div>
        </div>

        {/* Bloco 3 — Os Três Pilares do Comércio Profanado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 mb-24 md:mb-32"
        >
          {[
            {
              num: "I",
              title: "Vendem-te frequências baixas",
              body: "Medo, inveja, urgência, escassez. Uma alma vibrando no pavor é fácil de governar — e fácil de cobrar.",
            },
            {
              num: "II",
              title: "Vendem-te ídolos descartáveis",
              body: "Status, métricas, espelhos. Tesouros que a traça consome. Vende-se o eterno em troca do efêmero — o pior dos negócios.",
            },
            {
              num: "III",
              title: "Vendem-te a tua própria luz",
              body: "Devolvem-te, em pequenas doses pagas, aquilo que já te pertencia desde o princípio. O Reino é teu — e te cobram entrada.",
            },
          ].map((p) => (
            <div key={p.num} className="bg-background p-8 md:p-10 group hover:bg-secondary/40 transition-colors duration-700">
              <div className="font-serif-display text-5xl md:text-6xl text-primary/80 mb-6">{p.num}</div>
              <h3 className="text-lg md:text-xl mb-4 group-hover:text-primary transition-colors duration-500 text-balance">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </motion.div>

        {/* Bloco 4 — O Chamado ao Despertar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto text-center py-16 md:py-24 px-6 md:px-12 border-t border-b border-primary/30"
        >
          <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-8">
            O Chamado · Acorda, Espírito que Dorme
          </div>
          <p className="font-serif-display text-2xl md:text-4xl lg:text-5xl leading-[1.15] text-balance mb-10">
            "Se queres a vida eterna,
            <br />
            <span className="italic text-primary">ao menos age como se já a tivesses."</span>
          </p>
          <div className="space-y-5 text-foreground/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            <p>
              Acorda, espírito que dormes. Luz eterna que transcende — <em className="text-primary not-italic">que isto acenda tua alma ao Divino eterno</em> que existe em mim, em ti, em tudo que respira. Isto é infinito. Isto é o que somos.
            </p>
            <p>
              Somos herdeiros da Luz que tudo cria. E como seres supremos dessa Luz, <em className="text-primary not-italic">temos o dever de agir como tal</em> — não amanhã, não quando for conveniente, mas agora, neste átimo em que lês estas palavras.
            </p>
          </div>
        </motion.div>

        {/* Bloco 5 — Ecos das Tradições */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              quote: "Acorda! Levanta-te! Aproxima-te dos mestres e desperta.",
              ref: "Katha Upanishad · Tradição Védica",
            },
            {
              quote: "Desperta, ó tu que dormes, levanta-te dentre os mortos, e Cristo te esclarecerá.",
              ref: "Efésios 5:14",
            },
            {
              quote: "Buda significa simplesmente: aquele que despertou.",
              ref: "Tradição Búdica",
            },
          ].map((e, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="font-serif-display italic text-lg md:text-xl leading-snug text-foreground/90 mb-4 text-balance">
                "{e.quote}"
              </p>
              <p className="text-[0.65rem] uppercase tracking-widest text-primary font-bold">
                {e.ref}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Coda Final */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-24 md:mt-32 text-center text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto"
        >
          Este espaço é gratuito e dedicado à Luz. Aqui não se vende nada — porque o que vale a Eternidade jamais teve preço.
        </motion.p>
      </div>
    </section>
  );
});

Testimonial.displayName = "Testimonial";

export default Testimonial;
