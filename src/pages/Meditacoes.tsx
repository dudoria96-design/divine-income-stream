import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgImg from "@/assets/meditacoes-bg.jpg";

interface Meditation {
  id: string;
  title: string;
  description: string | null;
  youtube_id: string;
  category: string;
  duration: string | null;
}

const PAGE_SIZE = 9;

const Meditacoes = () => {
  const [meditations, setMeditations] = useState<Meditation[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<Meditation | null>(null);
  const [filter, setFilter] = useState<string>("Todas");
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = "Meditações · Aura Sagrada";
    (async () => {
      const { data } = await supabase
        .from("meditations")
        .select("*")
        .order("created_at", { ascending: false });
      setMeditations(data || []);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  const categories = useMemo(() => {
    const set = new Set(meditations.map((m) => m.category));
    return ["Todas", ...Array.from(set)];
  }, [meditations]);

  const filtered = filter === "Todas" ? meditations : meditations.filter((m) => m.category === filter);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const goToPage = (p: number) => {
    setPage(p);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <header className="relative px-6 md:px-12 py-20 md:py-32 overflow-hidden">
        <img src={bgImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <div className="text-primary uppercase tracking-[0.3em] text-[0.65rem] font-bold mb-6">Quietude</div>
          <h1 className="text-4xl md:text-6xl leading-[1.05] text-balance mb-6">
            Meditações
            <br />
            <span className="italic text-primary">para a alma desperta.</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            "Aquietai-vos e sabei que Eu sou Deus." — Salmos 46:10
          </p>
        </motion.div>
      </header>

      <section className="px-6 md:px-12 pb-24 md:pb-40">
        <div className="max-w-[1440px] mx-auto">
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`text-[0.65rem] uppercase tracking-widest px-4 py-2 border transition-colors ${
                    filter === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-primary hover:border-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <p className="text-center text-muted-foreground">Carregando…</p>
          ) : visible.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif-display text-2xl mb-4">O santuário aguarda suas primeiras meditações.</p>
              <p className="text-sm text-muted-foreground mb-8">Em breve, palavras de luz em vídeo serão publicadas aqui.</p>
              <Link to="/auth" className="text-xs uppercase tracking-widest text-primary hover:underline">
                Acesso do guardião →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
              {visible.map((m, i) => (
                <motion.button
                  key={m.id}
                  type="button"
                  onClick={() => setActive(m)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="bg-background text-left group hover:bg-secondary/50 transition-colors duration-500"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${m.youtube_id}/hqdefault.jpg`}
                      alt={m.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors" />
                    <div className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                      <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[0.6rem] uppercase tracking-[0.25em] text-primary font-bold">{m.category}</div>
                      {m.duration && <div className="text-[0.6rem] uppercase tracking-widest text-muted-foreground">{m.duration}</div>}
                    </div>
                    <h3 className="font-serif-display text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">{m.title}</h3>
                    {m.description && <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{m.description}</p>}
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setActive(null)}
        >
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${active.youtube_id}?autoplay=1`}
                title={active.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="bg-background p-6">
              <div className="text-[0.6rem] uppercase tracking-widest text-primary font-bold mb-2">{active.category}</div>
              <h3 className="font-serif-display text-2xl mb-2">{active.title}</h3>
              {active.description && <p className="text-sm text-muted-foreground">{active.description}</p>}
              <button
                onClick={() => setActive(null)}
                className="mt-4 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Meditacoes;
