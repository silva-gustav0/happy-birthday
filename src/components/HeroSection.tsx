import { motion } from "framer-motion";
import { Heart, Sparkles, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  name?: string;
}

const HeroSection = ({ name = "Meu Amor" }: HeroSectionProps) => {
  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10,
  }));

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-gradient-soft overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{ left: `${particle.x}%` }}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-6 relative"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px hsl(346 75% 58% / 0.5)",
                "0 0 60px hsl(346 75% 58% / 0.8)",
                "0 0 20px hsl(346 75% 58% / 0.5)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block rounded-full p-4"
          >
            <Heart 
              className="w-16 h-16 text-primary animate-heartbeat drop-shadow-lg" 
              fill="currentColor"
            />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="text-accent font-display text-lg md:text-xl tracking-widest uppercase mb-4"
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Sparkles className="inline w-5 h-5 mr-2" />
          </motion.span>
          Feliz Aniversário
          <motion.span
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="inline-block"
          >
            <Sparkles className="inline w-5 h-5 ml-2" />
          </motion.span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-romantic mb-6 drop-shadow-lg"
        >
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 20px hsl(346 75% 58% / 0.3)",
                "0 0 40px hsl(346 75% 58% / 0.5)",
                "0 0 20px hsl(346 75% 58% / 0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {name}
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto"
        >
          <motion.p 
            className="text-foreground/80 text-lg md:text-xl leading-relaxed font-serif italic"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            "Você é a pessoa mais especial que já entrou na minha vida. 
            Hoje celebramos você e todo o amor que compartilhamos."
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2">
            <motion.div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-primary" fill="currentColor" />
            </motion.div>
            <motion.div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
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
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground text-sm flex flex-col items-center gap-2"
        >
          <span>Role para baixo</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
