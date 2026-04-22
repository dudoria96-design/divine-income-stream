import { motion } from "framer-motion";
import curriculumImg from "@/assets/caminho-messias.jpg";
import consultationImg from "@/assets/caminho-quantico.jpg";
import transmissionImg from "@/assets/caminho-divino.jpg";

const offerings = [
  {
    number: "01",
    label: "Visão · Os Messias Solares",
    title: "Tu És Luz que Tudo Cria",
    description:
      "Jesus, Buda, Krishna, Hermes, Zoroastro, Apolo — todos foram raios do mesmo Sol Divino. O fio dourado que une todas as tradições aponta para uma só Verdade: tu não és pó passageiro, és centelha do Eterno. A Grande Explosão foi Deus se manifestando através das eras, e tu és parte dessa luz que tudo criou.",
    teachings: [
      "“Eu sou a luz do mundo” — e quem segue a Luz, torna-se Luz (João 8:12)",
      "“Sede vós mesmos a vossa luz” — Buda, Mahaparinibbana Sutta",
      "“Tat tvam asi — Tu és Aquilo” — Upanishads, a unidade com o Divino",
    ],
    cta: "Contemplar a Unidade",
    image: curriculumImg,
  },
  {
    number: "02",
    label: "Ciência · Física Quântica & o Verbo",
    title: "A Ciência Comprova o Eterno",
    description:
      "O experimento da Dupla Fenda revelou: a partícula só toma forma quando observada. A consciência cria a realidade. O Entrelaçamento Quântico mostra que duas partículas permanecem unidas além do espaço e do tempo — “para que todos sejam um”. O Campo Unificado é a substância única vibrando em frequências distintas. Aquilo que Jesus, Hermes e os místicos ensinavam à beira do mar, agora se confirma em laboratório.",
    teachings: [
      "Dupla Fenda — a consciência colapsa o possível em real",
      "Entrelaçamento — “nele vivemos, nos movemos e existimos” (Atos 17:28)",
      "Campo Unificado — “No princípio era o Verbo” (João 1:1)",
    ],
    cta: "Explorar a Verdade",
    image: consultationImg,
  },
  {
    number: "03",
    label: "Batalha · A Ilusão & o Pecado Imperdoável",
    title: "A Real Batalha Não É de Carne",
    description:
      "A verdadeira guerra não é contra carne e sangue, mas contra os principados das trevas — as ilusões que cegam a alma e a fazem aceitar a mentira (Efésios 6:12). O mundo oferece tesouros que a traça consome. O perigo real é perder a vida eterna por se perder na ilusão a tal ponto de ignorar a Deus. Há um só pecado imperdoável: blasfemar contra o Espírito Santo — apagar conscientemente em si a centelha da Luz (Marcos 3:29). Nada neste mundo vale ser lembrado pela eternidade por ter aceitado uma mentira.",
    teachings: [
      "“Não ajunteis tesouros na terra” (Mateus 6:19)",
      "“As trevas são apenas a ausência da Luz” — Sabedoria Perene",
      "“Maya é o véu que oculta o Real” — Vedanta",
    ],
    cta: "Despertar do Sono",
    image: transmissionImg,
  },
  {
    number: "04",
    label: "Justiça · Bem-aventurados",
    title: "Os que Clamam por Justiça",
    description:
      "“Bem-aventurados os que têm fome e sede de justiça, porque eles serão satisfeitos” (Mateus 5:6). Deus é Amor Eterno pela Luz e Destruidor das trevas — não por ódio, mas porque a Luz dissolve a sombra naturalmente. O Tao ensina: a água mole vence a pedra dura. A justiça divina não falha; ela apenas opera no tempo do Eterno. O que foi semeado em silêncio será colhido em glória.",
    teachings: [
      "“A justiça exalta as nações” (Provérbios 14:34)",
      "“Bons pensamentos, boas palavras, boas ações” — Zoroastro",
      "“Karma — toda ação retorna” — tradição védica",
    ],
    cta: "Clamar pela Luz",
    image: curriculumImg,
  },
  {
    number: "05",
    label: "Coragem · O Vale da Sombra",
    title: "Não Temas — Eu Sou Contigo",
    description:
      "“Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo” (Salmo 23:4). A Luz está em constante evolução, emanando amor ao mundo e a todos — mesmo aos rebeldes, mesmo aos inconscientes. O sol brilha sobre justos e injustos. Krishna disse a Arjuna: “Levanta-te, ó guerreiro, e cumpre teu dharma”. O medo é ilusão; a Presença é real. Em cada respiração, o Divino te sustenta.",
    teachings: [
      "Salmo 23 — “O Senhor é meu pastor”",
      "Bhagavad Gita — “A alma é eterna, não nasce nem morre”",
      "“Nada te perturbe, Deus não muda” — Santa Teresa de Ávila",
    ],
    cta: "Atravessar o Vale",
    image: consultationImg,
  },
  {
    number: "06",
    label: "Eternidade · O Retorno à Luz",
    title: "A Luz Voltará à Luz",
    description:
      "No fim de todas as eras, a Luz voltará à Luz, e as trevas voltarão às trevas — porém saiba: as trevas são apenas a ausência da Luz, jamais uma força em si. O Deus único, supremo, vivo, iniciante e onipresente, sustenta cada átomo. Tu és imortal n'Ele, criador de todas as coisas. A dualidade é o jogo temporário; a Unidade é a Realidade eterna. Voltai-vos para a Luz — esse é o único chamado que importa.",
    teachings: [
      "“A luz resplandece nas trevas” (João 1:5)",
      "“Tudo é Brahman” — Upanishads",
      "“Como em cima, assim embaixo” — Hermes Trismegisto",
    ],
    cta: "Voltar-se à Luz",
    image: transmissionImg,
  },
];

const Offerings = () => {
  return (
    <section id="offerings" className="relative z-10 py-24 md:py-48 px-6 md:px-12 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
          <div>
            <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-6">
              Visões & Ensinamentos
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Os Caminhos
              <br />
              <span className="text-primary italic">da Luz</span>
            </h2>
          </div>
          <div className="text-muted-foreground text-xs uppercase tracking-widest md:text-right max-w-xs">
            Seis trilhas que conduzem a alma
            <br />
            ao encontro com o Divino Eu —
            <br />
            imortal, criador, eterno.
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
                src={offering.image}
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
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  {offering.description}
                </p>

                <ul className="space-y-2 mb-8 pt-4 border-t border-foreground/10">
                  {offering.teachings.map((t, idx) => (
                    <li
                      key={idx}
                      className="text-[0.75rem] text-muted-foreground italic leading-relaxed pl-3 border-l border-primary/40"
                    >
                      {t}
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
            "No fim, a Luz voltará à Luz, e as trevas às trevas — porém as trevas são apenas a ausência da Luz. Voltai-vos para Aquele que tudo criou."
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-primary font-bold">
            O Chamado Eterno · Divino Eu
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Offerings;
