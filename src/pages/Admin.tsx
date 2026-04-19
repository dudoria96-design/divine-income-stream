import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Trash2, LogOut } from "lucide-react";

interface Meditation {
  id: string;
  title: string;
  description: string | null;
  youtube_id: string;
  category: string;
  duration: string | null;
  created_at: string;
}

const CATEGORIES = ["Meditação Guiada", "Palavras de Luz", "Ensinamentos", "Sabedoria Universal"];

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

const Admin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [meditations, setMeditations] = useState<Meditation[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [duration, setDuration] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Santuário · Admin";

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth", { replace: true });
      }
    });

    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth", { replace: true });
        return;
      }
      setUserEmail(session.user.email ?? "");

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id);
      const admin = !!roles?.some((r) => r.role === "admin");
      setIsAdmin(admin);

      await loadMeditations();
      setLoading(false);
    })();

    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const loadMeditations = async () => {
    const { data, error } = await supabase
      .from("meditations")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    else setMeditations(data || []);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const ytId = extractYouTubeId(youtubeUrl.trim());
    if (!ytId) {
      toast.error("URL do YouTube inválida");
      return;
    }
    setSubmitting(true);
    const { data: { session } } = await supabase.auth.getSession();
    const { error } = await supabase.from("meditations").insert({
      title: title.trim(),
      description: description.trim() || null,
      youtube_id: ytId,
      category,
      duration: duration.trim() || null,
      created_by: session?.user.id,
    });
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Meditação publicada na Luz");
      setTitle(""); setDescription(""); setYoutubeUrl(""); setDuration("");
      loadMeditations();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Remover esta meditação?")) return;
    const { error } = await supabase.from("meditations").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Removida"); loadMeditations(); }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/", { replace: true });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Carregando…</div>;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center gap-4">
        <h1 className="font-serif-display text-3xl">Acesso restrito</h1>
        <p className="text-muted-foreground max-w-md">
          Esta área é reservada ao guardião do santuário. {userEmail} não possui o selo de admin.
        </p>
        <Button variant="outline" onClick={handleLogout}>Sair</Button>
        <Link to="/" className="text-xs uppercase tracking-widest text-primary mt-4">← Voltar à luz pública</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 md:px-12 py-6 flex items-center justify-between">
        <Link to="/" className="font-serif-display text-xl text-primary tracking-widest">Aura Sagrada</Link>
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground hidden md:inline">{userEmail}</span>
          <Link to="/meditacoes" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary">Ver público</Link>
          <Button variant="ghost" size="sm" onClick={handleLogout}><LogOut className="w-4 h-4" /></Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="text-[0.6rem] uppercase tracking-[0.3em] text-primary font-bold mb-3">Santuário do Guardião</div>
        <h1 className="font-serif-display text-4xl md:text-5xl mb-12">Publicar Meditações</h1>

        <form onSubmit={handleAdd} className="bg-alabaster-dim p-6 md:p-10 border border-border space-y-5 mb-16">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="title">Título</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required maxLength={150} />
            </div>
            <div>
              <Label htmlFor="yt">URL do YouTube</Label>
              <Input id="yt" value={youtubeUrl} onChange={(e) => setYoutubeUrl(e.target.value)} required placeholder="https://youtube.com/watch?v=..." />
            </div>
          </div>
          <div>
            <Label htmlFor="desc">Descrição</Label>
            <Textarea id="desc" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} maxLength={500} />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="cat">Categoria</Label>
              <select
                id="cat"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-10 px-3 bg-background border border-input rounded-md text-sm"
              >
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="dur">Duração (opcional)</Label>
              <Input id="dur" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="ex: 12 min" maxLength={20} />
            </div>
          </div>
          <Button type="submit" disabled={submitting} className="w-full md:w-auto">
            {submitting ? "Publicando…" : "Publicar na Luz"}
          </Button>
        </form>

        <h2 className="font-serif-display text-2xl mb-6">Meditações publicadas ({meditations.length})</h2>
        <div className="space-y-3">
          {meditations.length === 0 && (
            <p className="text-muted-foreground text-sm">Nenhuma meditação ainda. Publique a primeira acima.</p>
          )}
          {meditations.map((m) => (
            <div key={m.id} className="flex items-start gap-4 p-4 border border-border bg-background">
              <img
                src={`https://img.youtube.com/vi/${m.youtube_id}/mqdefault.jpg`}
                alt=""
                className="w-32 aspect-video object-cover hidden sm:block"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <div className="text-[0.6rem] uppercase tracking-widest text-primary font-bold mb-1">{m.category}</div>
                <h3 className="font-serif-display text-lg truncate">{m.title}</h3>
                {m.description && <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{m.description}</p>}
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleDelete(m.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Admin;
