import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles, ChevronDown, Star } from "lucide-react";

interface HeroSectionProps {
  name?: string;
}

const HeroSection = ({ name = "Meu Amor" }: HeroSectionProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10,
    size: 1 + Math.random() * 2,
  }));

  // Star decorations
  const stars = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
    size: 8 + Math.random() * 12,
  }));

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-gradient-soft overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={`star-${star.id}`}
            className="absolute text-primary/20"
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Star className="w-3 h-3" style={{ width: star.size, height: star.size }} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-primary/40 rounded-full"
            style={{ 
              left: `${particle.x}%`,
              width: particle.size,
              height: particle.size,
            }}
            initial={{ y: "110vh", opacity: 0 }}
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

      {/* Multiple glowing orbs with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      <motion.div
        style={{ y, opacity, scale }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-8 relative"
        >
          {/* Pulsing rings around heart */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
              style={{ 
                margin: -ring * 12,
                padding: ring * 12,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                delay: ring * 0.3,
                repeat: Infinity,
              }}
            />
          ))}
          
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 30px hsl(346 75% 58% / 0.5)",
                "0 0 80px hsl(346 75% 58% / 0.8)",
                "0 0 30px hsl(346 75% 58% / 0.5)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block rounded-full p-6 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.15, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart 
                className="w-20 h-20 text-primary drop-shadow-2xl" 
                fill="currentColor"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="text-accent font-display text-xl md:text-2xl tracking-widest uppercase mb-6"
        >
          <motion.span
            animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Sparkles className="inline w-6 h-6 mr-3" />
          </motion.span>
          Feliz Aniversário
          <motion.span
            animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="inline-block"
          >
            <Sparkles className="inline w-6 h-6 ml-3" />
          </motion.span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-gradient-romantic mb-8 drop-shadow-lg"
        >
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 30px hsl(346 75% 58% / 0.3)",
                "0 0 60px hsl(346 75% 58% / 0.6)",
                "0 0 30px hsl(346 75% 58% / 0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {name}
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            className="bg-card/30 backdrop-blur-md rounded-3xl p-8 border border-primary/20"
            animate={{ 
              boxShadow: [
                "0 0 20px hsl(346 75% 58% / 0.1)",
                "0 0 40px hsl(346 75% 58% / 0.2)",
                "0 0 20px hsl(346 75% 58% / 0.1)",
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.p 
              className="text-foreground/90 text-xl md:text-2xl leading-relaxed font-serif italic"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              "Você é a pessoa mais especial que já entrou na minha vida. 
              Hoje celebramos você e todo o amor que compartilhamos."
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-14"
        >
          <div className="flex items-center justify-center gap-4">
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              animate={{ 
                scale: [1, 1.4, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-6 h-6 text-primary" fill="currentColor" />
            </motion.div>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
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
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-foreground text-sm flex flex-col items-center gap-3"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Role para baixo
          </motion.span>
          <motion.div
            className="bg-primary/20 rounded-full p-2"
            animate={{
              boxShadow: [
                "0 0 0 0 hsl(346 75% 58% / 0.4)",
                "0 0 0 15px hsl(346 75% 58% / 0)",
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
