import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="relative z-10 bg-stone-dark py-16 md:py-24 px-6 md:px-12 text-primary-foreground">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mb-16"
        >
          <div>
            <h3 className="font-serif-display text-2xl text-primary mb-4">Aura Sagrada</h3>
            <p className="text-sm leading-relaxed opacity-70 max-w-xs">
              Um espaço gratuito de sabedoria universal. Unindo os ensinamentos dos grandes mestres, ciência e a luz do Deus único.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-4 font-bold">Caminhos</div>
            <ul className="space-y-3 text-sm opacity-70">
              <li><a href="#offerings" className="hover:text-primary transition-colors">Os Messias Solares</a></li>
              <li><a href="#offerings" className="hover:text-primary transition-colors">Física Quântica & o Divino</a></li>
              <li><a href="#offerings" className="hover:text-primary transition-colors">O Deus Único & Universal</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-4 font-bold">Conexão</div>
            <ul className="space-y-3 text-sm opacity-70">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
              <li><a href="mailto:contato@aurasagrada.com" className="hover:text-primary transition-colors">contato@aurasagrada.com</a></li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <span>© 2026 Aura Sagrada. Todo conhecimento é livre.</span>
          <span className="uppercase tracking-widest">Caminhando na luz divina</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
