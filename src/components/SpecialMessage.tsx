import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Stars, Flower2 } from "lucide-react";

interface SpecialMessageProps {
  name?: string;
}

const SpecialMessage = ({ name = "Meu Amor" }: SpecialMessageProps) => {
  const [showLoveAnimation, setShowLoveAnimation] = useState(false);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-[hsl(346,30%,8%)] to-[hsl(346,40%,6%)] text-foreground relative overflow-hidden">
      {/* Animated starfield background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%]"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Heart className="w-32 h-32 text-primary" fill="currentColor" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-[10%]"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -15, 15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <Heart className="w-24 h-24 text-accent" fill="currentColor" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-[5%]"
          animate={{ 
            rotate: 360,
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Flower2 className="w-20 h-20 text-primary/50" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-[5%]"
          animate={{ 
            rotate: -360,
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Stars className="w-16 h-16 text-accent/50" />
        </motion.div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-10 h-10 text-accent" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gradient-romantic">Minha Mensagem Para Você</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 30px hsl(346 75% 58% / 0.15)",
                  "0 0 60px hsl(346 75% 58% / 0.25)",
                  "0 0 30px hsl(346 75% 58% / 0.15)",
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-br from-card/40 via-card/30 to-primary/10 backdrop-blur-md border border-primary/30 rounded-3xl p-8 md:p-10"
            >
              <p className="text-foreground/95 text-lg md:text-xl leading-relaxed font-serif text-center">
                {name}, você é o amor que Deus escolheu para mim. Cada dia ao seu lado é uma bênção que agradeço do fundo do meu coração. Neste dia especial, quero que você saiba o quanto é amada, valorizada e admirada — você merece todo o amor do mundo. Que este novo ano de vida seja repleto de alegrias, conquistas e muito amor. Estarei sempre ao seu lado, te amando a cada dia mais, porque você é a maior prova de que Deus ouve as orações do meu coração.
              </p>
              
              {/* Decorative corners */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 left-4"
              >
                <Heart className="w-4 h-4 text-primary/50" fill="currentColor" />
              </motion.div>
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute top-4 right-4"
              >
                <Heart className="w-4 h-4 text-primary/50" fill="currentColor" />
              </motion.div>
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 left-4"
              >
                <Heart className="w-4 h-4 text-primary/50" fill="currentColor" />
              </motion.div>
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-4 right-4"
              >
                <Heart className="w-4 h-4 text-primary/50" fill="currentColor" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-14"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLoveAnimation(true)}
              className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 backdrop-blur-sm border border-primary/40 rounded-full px-8 py-4 cursor-pointer hover:border-primary/60 transition-colors"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              </motion.div>
              <span className="font-display text-xl md:text-2xl italic text-foreground">
                Com todo meu amor, para sempre
              </span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Love Animation Modal */}
      <AnimatePresence>
        {showLoveAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLoveAnimation(false)}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center cursor-pointer"
          >
            {/* Massive heart explosion background */}
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  scale: 0,
                  opacity: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{ 
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 0.6],
                  x: (Math.random() - 0.5) * window.innerWidth * 0.8,
                  y: (Math.random() - 0.5) * window.innerHeight * 0.8,
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 0.8,
                  ease: "easeOut",
                }}
              >
                <Heart 
                  className="text-primary" 
                  fill="currentColor"
                  style={{
                    width: `${20 + Math.random() * 40}px`,
                    height: `${20 + Math.random() * 40}px`,
                    filter: `blur(${Math.random() * 2}px)`,
                  }}
                />
              </motion.div>
            ))}

            {/* Sparkle particles */}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-2 h-2 bg-accent rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: (Math.random() - 0.5) * window.innerWidth,
                  y: (Math.random() - 0.5) * window.innerHeight,
                }}
                transition={{
                  duration: 2.5,
                  delay: 0.5 + Math.random() * 1.5,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Main content */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                type: "spring",
                damping: 15,
              }}
              className="text-center z-10 relative"
            >
              {/* Giant pulsing heart */}
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="mb-8"
              >
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 30px hsl(346 75% 58% / 0.5))",
                      "drop-shadow(0 0 60px hsl(346 75% 58% / 0.8))",
                      "drop-shadow(0 0 30px hsl(346 75% 58% / 0.5))",
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-32 h-32 md:w-48 md:h-48 text-primary mx-auto" fill="currentColor" />
                </motion.div>
              </motion.div>

              {/* Text animation */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.h2
                  animate={{
                    textShadow: [
                      "0 0 20px hsl(346 75% 58% / 0.3)",
                      "0 0 40px hsl(346 75% 58% / 0.6)",
                      "0 0 20px hsl(346 75% 58% / 0.3)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
                >
                  Com todo meu amor,
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="font-display text-3xl md:text-5xl text-primary italic mb-8"
                >
                  para sempre
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="mt-8"
              >
                <motion.span
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-romantic"
                >
                  Eu te amo ❤️
                </motion.span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 2.5 }}
                className="mt-12 text-muted-foreground text-sm"
              >
                Toque em qualquer lugar para fechar
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SpecialMessage;