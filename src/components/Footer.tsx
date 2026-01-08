import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-burgundy text-primary-foreground">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-5 h-5 animate-heartbeat" fill="currentColor" />
          <span className="font-display text-xl">Feito com muito amor</span>
          <Heart className="w-5 h-5 animate-heartbeat" fill="currentColor" />
        </div>
        
        <p className="text-primary-foreground/70 font-serif">
          {currentYear} • Para você, meu amor
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
