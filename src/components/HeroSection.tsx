import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface HeroSectionProps {
  name?: string;
}

const HeroSection = ({ name = "Meu Amor" }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-gradient-soft">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <Heart 
            className="w-16 h-16 mx-auto text-primary animate-heartbeat" 
            fill="currentColor"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-accent font-display text-lg md:text-xl tracking-widest uppercase mb-4"
        >
          <Sparkles className="inline w-4 h-4 mr-2" />
          Feliz Aniversário
          <Sparkles className="inline w-4 h-4 ml-2" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-romantic mb-6"
        >
          {name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-foreground/80 text-lg md:text-xl leading-relaxed font-serif italic">
            "Você é a pessoa mais especial que já entrou na minha vida. 
            Hoje celebramos você e todo o amor que compartilhamos."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <Heart className="w-4 h-4 text-primary" fill="currentColor" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground text-sm"
        >
          Role para baixo
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
