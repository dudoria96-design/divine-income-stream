import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Meditacoes from "./pages/Meditacoes.tsx";
import Eternidade from "./pages/Eternidade.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <main className="pt-20 md:pt-24">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/meditacoes" element={<Meditacoes />} />
              <Route path="/eternidade" element={<Eternidade />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
