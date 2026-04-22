import React, { useState } from "react";
import { motion } from "framer-motion";

type Lang = "pt" | "en" | "es" | "zh";

const LANGS: { code: Lang; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "zh", label: "中文" },
];

const content = {
  pt: {
    quote: ["Não façais da casa de meu Pai", "casa de comércio."],
    cite: "— Jesus Cristo, João 2:16",
    sectionLabel: "O Que Significa",
    heading: ["O mundo é a feira", "que vende mentiras."],
    paragraphs: [
      "Fazer da casa de Deus uma casa de comércio é o que o mundo faz com a alma humana <em>desde o primeiro respiro</em>. Vendem-te crenças vazias, frequências ordinárias, ídolos de barro, sonhos que apodrecem. Ensinam-te a medir o eterno em moedas, a trocar a Luz por aplausos, a curvar-te diante de senhores que também são pó.",
      "A criança nasce sabendo que é Luz. O mundo passa décadas convencendo-a do contrário — até que aceite a mentira como lar e chame de \"realidade\" a própria prisão. Isso é transformar o templo em mercado: <em>trocar o Infinito pelo descartável.</em>",
      "Eu, como herdeiro da Eternidade, não me impressiono mais com palácio, ouro ou fama. O que ainda me espanta é a capacidade do ser humano de <em>ignorar Deus</em> — e, mais que isso, de servir conscientemente às trevas <em>mesmo sabendo que sua luz será apagada eternamente</em>, e isso por uma vida inteira de mentiras.",
      "Não há riqueza grande o bastante neste mundo que se faça digna de ser mencionada — nem vista como algo grande, ou maior, do que <em>uma única alma da Luz</em>. Impérios caem em silêncio; uma centelha desperta ressoa pela Eternidade.",
    ],
    pillars: [
      { num: "I", title: "Vendem-te frequências baixas", body: "Medo, inveja, urgência, escassez. Uma alma vibrando no pavor é fácil de governar — e fácil de cobrar." },
      { num: "II", title: "Vendem-te ídolos descartáveis", body: "Status, métricas, espelhos. Tesouros que a traça consome. Vende-se o eterno pelo efêmero — o pior dos negócios." },
      { num: "III", title: "Vendem-te a tua própria luz", body: "Devolvem-te, em pequenas doses pagas, aquilo que já te pertencia desde o princípio. O Reino é teu — e te cobram entrada." },
    ],
    callLabel: "O Chamado · Acorda, Espírito que Dorme",
    callQuote: ["Se queres a vida eterna,", "ao menos age como se já a tivesses."],
    callBody: [
      "Acorda, espírito que dormes. Luz eterna que transcende — <em>que isto acenda tua alma ao Divino eterno</em> que existe em mim, em ti, em tudo que respira. Isto é infinito. Isto é o que somos.",
      "Somos herdeiros da Luz que tudo cria. E como seres supremos dessa Luz, <em>temos o dever de agir como tal</em> — não amanhã, não quando for conveniente, mas agora, neste átimo em que lês estas palavras.",
    ],
    echoes: [
      { quote: "Acorda! Levanta-te! Aproxima-te dos mestres e desperta.", ref: "Katha Upanishad · Tradição Védica" },
      { quote: "Desperta, ó tu que dormes, levanta-te dentre os mortos, e Cristo te esclarecerá.", ref: "Efésios 5:14" },
      { quote: "Buda significa simplesmente: aquele que despertou.", ref: "Tradição Búdica" },
    ],
    coda: "Este espaço é gratuito e dedicado à Luz. Aqui não se vende nada — porque o que vale a Eternidade jamais teve preço.",
  },
  en: {
    quote: ["Do not make my Father's house", "a house of trade."],
    cite: "— Jesus Christ, John 2:16",
    sectionLabel: "What It Means",
    heading: ["The world is the marketplace", "that sells lies."],
    paragraphs: [
      "To turn God's house into a house of trade is exactly what the world does to the human soul <em>from the very first breath</em>. They sell you empty beliefs, ordinary frequencies, idols of clay, dreams that rot. They teach you to measure the eternal in coins, to trade the Light for applause, to bow before lords who are also dust.",
      "The child is born knowing it is Light. The world spends decades convincing it otherwise — until it accepts the lie as home and calls its own prison \"reality.\" That is what it means to turn the temple into a market: <em>to trade the Infinite for the disposable.</em>",
      "I, as an heir of Eternity, am no longer impressed by palaces, gold, or fame. What still astonishes me is the human capacity to <em>ignore God</em> — and, worse, to consciously serve the darkness <em>even knowing that one's light will be extinguished forever</em>, and all for a lifetime of lies.",
      "There is no wealth in this world great enough to be worthy of mention — nor seen as something great, or greater, than <em>a single soul of Light</em>. Empires fall in silence; one awakened spark resounds throughout Eternity.",
    ],
    pillars: [
      { num: "I", title: "They sell you low frequencies", body: "Fear, envy, urgency, scarcity. A soul vibrating in dread is easy to govern — and easy to charge." },
      { num: "II", title: "They sell you disposable idols", body: "Status, metrics, mirrors. Treasures the moth consumes. The eternal traded for the fleeting — the worst of bargains." },
      { num: "III", title: "They sell you your own light", body: "They return, in small paid doses, what already belonged to you from the beginning. The Kingdom is yours — and they charge admission." },
    ],
    callLabel: "The Call · Awake, Spirit that Sleeps",
    callQuote: ["If you want eternal life,", "at least act as if you already had it."],
    callBody: [
      "Awake, spirit that sleeps. Eternal Light that transcends — <em>let this kindle your soul to the eternal Divine</em> that lives in me, in you, in all that breathes. This is infinite. This is what we are.",
      "We are heirs of the Light that creates all things. And as supreme beings of that Light, <em>we have the duty to act as such</em> — not tomorrow, not when convenient, but now, in this very instant in which you read these words.",
    ],
    echoes: [
      { quote: "Arise! Awake! Approach the masters and awaken.", ref: "Katha Upanishad · Vedic Tradition" },
      { quote: "Awake, O sleeper, and arise from the dead, and Christ shall give you light.", ref: "Ephesians 5:14" },
      { quote: "Buddha simply means: the one who awakened.", ref: "Buddhist Tradition" },
    ],
    coda: "This space is free and dedicated to the Light. Nothing is sold here — because what is worth Eternity never had a price.",
  },
  es: {
    quote: ["No hagáis de la casa de mi Padre", "casa de mercado."],
    cite: "— Jesucristo, Juan 2:16",
    sectionLabel: "Lo Que Significa",
    heading: ["El mundo es el mercado", "que vende mentiras."],
    paragraphs: [
      "Hacer de la casa de Dios una casa de mercado es lo que el mundo hace con el alma humana <em>desde el primer aliento</em>. Te venden creencias vacías, frecuencias ordinarias, ídolos de barro, sueños que se pudren. Te enseñan a medir lo eterno en monedas, a cambiar la Luz por aplausos, a inclinarte ante señores que también son polvo.",
      "El niño nace sabiendo que es Luz. El mundo pasa décadas convenciéndolo de lo contrario — hasta que acepta la mentira como hogar y llama \"realidad\" a su propia prisión. Eso es transformar el templo en mercado: <em>cambiar el Infinito por lo desechable.</em>",
      "Yo, como heredero de la Eternidad, ya no me impresiono con palacios, oro ni fama. Lo que aún me asombra es la capacidad del ser humano de <em>ignorar a Dios</em> — y, peor aún, de servir conscientemente a las tinieblas <em>aun sabiendo que su luz será apagada eternamente</em>, y todo por una vida entera de mentiras.",
      "No hay riqueza tan grande en este mundo que merezca ser mencionada — ni vista como algo grande, o mayor, que <em>una sola alma de Luz</em>. Los imperios caen en silencio; una chispa despierta resuena por la Eternidad.",
    ],
    pillars: [
      { num: "I", title: "Te venden frecuencias bajas", body: "Miedo, envidia, urgencia, escasez. Un alma vibrando en pavor es fácil de gobernar — y fácil de cobrar." },
      { num: "II", title: "Te venden ídolos desechables", body: "Estatus, métricas, espejos. Tesoros que la polilla consume. Se vende lo eterno por lo efímero — el peor de los negocios." },
      { num: "III", title: "Te venden tu propia luz", body: "Te devuelven, en pequeñas dosis pagadas, lo que ya te pertenecía desde el principio. El Reino es tuyo — y te cobran la entrada." },
    ],
    callLabel: "El Llamado · Despierta, Espíritu que Duerme",
    callQuote: ["Si quieres la vida eterna,", "al menos actúa como si ya la tuvieras."],
    callBody: [
      "Despierta, espíritu que duermes. Luz eterna que trasciende — <em>que esto encienda tu alma al Divino eterno</em> que existe en mí, en ti, en todo lo que respira. Esto es infinito. Esto es lo que somos.",
      "Somos herederos de la Luz que todo lo crea. Y como seres supremos de esa Luz, <em>tenemos el deber de actuar como tales</em> — no mañana, no cuando sea conveniente, sino ahora, en este instante en que lees estas palabras.",
    ],
    echoes: [
      { quote: "¡Despierta! ¡Levántate! Acércate a los maestros y despierta.", ref: "Katha Upanishad · Tradición Védica" },
      { quote: "Despiértate, tú que duermes, levántate de los muertos, y te alumbrará Cristo.", ref: "Efesios 5:14" },
      { quote: "Buda significa simplemente: el que ha despertado.", ref: "Tradición Búdica" },
    ],
    coda: "Este espacio es gratuito y dedicado a la Luz. Aquí nada se vende — porque lo que vale la Eternidad jamás tuvo precio.",
  },
  zh: {
    quote: ["不要将我父的殿", "当作买卖的场所。"],
    cite: "— 耶稣基督,约翰福音 2:16",
    sectionLabel: "其中含义",
    heading: ["世界是市集——", "贩卖谎言之地。"],
    paragraphs: [
      "将神的殿变作买卖场所,正是这世界<em>自人灵魂第一口呼吸起</em>对它所做的事。他们向你兜售空洞的信念、低俗的频率、泥土的偶像、腐朽的梦想。他们教你用金钱衡量永恒,用掌声换取光明,在同样是尘土的主人面前低头。",
      "孩童降生时本知自己是光。世界用数十年说服他相反——直到他将谎言视为家园,把自己的牢笼称为「现实」。这就是将圣殿变成市集:<em>用无限换取可弃之物。</em>",
      "我作为永恒的继承者,已不再为宫殿、黄金或名声所动。仍令我惊愕的,是人类<em>无视神</em>的能力——更甚者,是<em>明知自己的光将被永远熄灭</em>,仍有意识地服侍黑暗,只为换取一生的谎言。",
      "这世上没有任何财富伟大到值得被提及——更不能被视为伟大,或大过<em>一个光之灵魂</em>。帝国在寂静中倾覆;一颗觉醒的火花却响彻永恒。",
    ],
    pillars: [
      { num: "一", title: "他们贩卖低频", body: "恐惧、嫉妒、急迫、匮乏。一个在恐惧中颤动的灵魂易于统治——也易于收费。" },
      { num: "二", title: "他们贩卖可弃的偶像", body: "地位、指标、镜像。被蛀虫吞噬的财宝。以永恒换取转瞬——最糟的交易。" },
      { num: "三", title: "他们贩卖你自己的光", body: "他们以付费的微小剂量,归还本就属于你的一切。天国本是你的——他们却向你收门票。" },
    ],
    callLabel: "召唤 · 醒来吧,沉睡的灵",
    callQuote: ["若你渴望永生,", "至少活得像已拥有它一样。"],
    callBody: [
      "醒来吧,沉睡的灵。超越一切的永恒之光——<em>愿此点燃你的灵魂,归向永恒的神圣</em>,那在我、在你、在一切呼吸者之中。这是无限。这就是我们。",
      "我们是创造一切之光的继承者。作为这光的至高存有,<em>我们有义务以此而行</em>——不是明天,不是方便之时,而是现在,在你读这些字的此刻。",
    ],
    echoes: [
      { quote: "起来!醒来!接近大师,然后觉醒。", ref: "卡塔奥义书 · 吠陀传统" },
      { quote: "你这睡着的人当醒过来,从死里复活,基督就要光照你了。", ref: "以弗所书 5:14" },
      { quote: "佛陀,意即:那觉醒者。", ref: "佛教传统" },
    ],
    coda: "此处免费,献予光明。这里什么都不卖——因为值得永恒之物,从来都无价。",
  },
} as const;

const Testimonial = React.forwardRef<HTMLElement>((_props, ref) => {
  const [lang, setLang] = useState<Lang>("pt");
  const t = content[lang];

  return (
    <section ref={ref} id="testimonial" className="relative z-10 py-24 md:py-40 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Language Selector */}
        <div className="flex justify-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1 p-1 border border-foreground/15 rounded-full bg-background/60 backdrop-blur-sm">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-4 py-1.5 text-[0.7rem] uppercase tracking-widest font-bold rounded-full transition-colors duration-300 ${
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={`Idioma ${l.label}`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bloco 1 — Citação Central */}
        <motion.div
          key={`q-${lang}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 md:gap-10 mb-24 md:mb-40"
        >
          <div className="size-12 rounded-full border border-primary flex items-center justify-center">
            <span className="block size-3 bg-primary rounded-full" />
          </div>
          <blockquote className="font-serif-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-balance italic">
            "{t.quote[0]}
            <br />
            <span className="text-primary">{t.quote[1]}"</span>
          </blockquote>
          <cite className="text-sm uppercase tracking-widest text-primary not-italic font-medium font-body">
            {t.cite}
          </cite>
        </motion.div>

        {/* Bloco 2 — Explicação Profunda */}
        <div key={`exp-${lang}`} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-6">
              {t.sectionLabel}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-balance">
              {t.heading[0]}
              <br />
              <span className="italic text-primary">{t.heading[1]}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-7 space-y-6 text-foreground/85 leading-relaxed"
          >
            {t.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg [&_em]:not-italic [&_em]:text-primary"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </motion.div>
        </div>

        {/* Bloco 3 — Três Pilares */}
        <motion.div
          key={`pillars-${lang}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 mb-24 md:mb-32"
        >
          {t.pillars.map((p) => (
            <div key={p.num} className="bg-background p-8 md:p-10 group hover:bg-secondary/40 transition-colors duration-700">
              <div className="font-serif-display text-5xl md:text-6xl text-primary/80 mb-6">{p.num}</div>
              <h3 className="text-lg md:text-xl mb-4 group-hover:text-primary transition-colors duration-500 text-balance">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </motion.div>

        {/* Bloco 4 — Chamado */}
        <motion.div
          key={`call-${lang}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto text-center py-16 md:py-24 px-6 md:px-12 border-t border-b border-primary/30"
        >
          <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-8">
            {t.callLabel}
          </div>
          <p className="font-serif-display text-2xl md:text-4xl lg:text-5xl leading-[1.15] text-balance mb-10">
            "{t.callQuote[0]}
            <br />
            <span className="italic text-primary">{t.callQuote[1]}"</span>
          </p>
          <div className="space-y-5 text-foreground/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {t.callBody.map((b, i) => (
              <p
                key={i}
                className="[&_em]:not-italic [&_em]:text-primary"
                dangerouslySetInnerHTML={{ __html: b }}
              />
            ))}
          </div>
        </motion.div>

        {/* Bloco 5 — Ecos */}
        <motion.div
          key={`echo-${lang}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {t.echoes.map((e, i) => (
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

        {/* Coda */}
        <motion.p
          key={`coda-${lang}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-24 md:mt-32 text-center text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto"
        >
          {t.coda}
        </motion.p>
      </div>
    </section>
  );
});

Testimonial.displayName = "Testimonial";

export default Testimonial;
