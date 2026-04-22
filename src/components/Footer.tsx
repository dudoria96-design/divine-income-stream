import React from "react";
import { motion } from "framer-motion";
import { useT } from "@/i18n/LanguageContext";

type Link = { label: string; href: string };

const Footer = React.forwardRef<HTMLElement>((_props, ref) => {
  const { t } = useT();
  const links = t<Link[]>("footer.links");

  return (
    <footer ref={ref} id="contact" className="relative z-10 bg-stone-dark py-16 md:py-24 px-6 md:px-12 text-primary-foreground">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mb-16"
        >
          <div>
            <h3 className="font-serif-display text-2xl text-primary mb-4">{t<string>("footer.brand")}</h3>
            <p className="text-sm leading-relaxed opacity-70 max-w-xs">{t<string>("footer.tagline")}</p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-4 font-bold">{t<string>("footer.pathsLabel")}</div>
            <ul className="space-y-3 text-sm opacity-70">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-4 font-bold">{t<string>("footer.connectionLabel")}</div>
            <ul className="space-y-3 text-sm opacity-70">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
              <li><a href="mailto:contato@aurasagrada.com" className="hover:text-primary transition-colors">contato@aurasagrada.com</a></li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <span>{t<string>("footer.copyright")}</span>
          <span className="uppercase tracking-widest">{t<string>("footer.walking")}</span>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
