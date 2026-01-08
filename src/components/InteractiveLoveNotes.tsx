import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift, Star, Sparkles, Crown } from "lucide-react";

const InteractiveLoveNotes = () => {
  const [revealedNotes, setRevealedNotes] = useState<number[]>([]);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const loveNotes = [
    { icon: Heart, message: "Você é a pessoa que eu escolhi para dividir a vida. Minha melhor escolha.", color: "from-rose-500 to-pink-600" },
    { icon: Star, message: "Cada momento ao seu lado se torna uma memória que guardo para sempre.", color: "from-amber-500 to-orange-500" },
    { icon: Gift, message: "Você transforma dias comuns em histórias que eu quero contar para sempre.", color: "from-violet-500 to-purple-600" },
    { icon: Sparkles, message: "Com você aprendi o que é amar de verdade. Obrigado por existir na minha vida.", color: "from-cyan-500 to-blue-500" },
  ];

  const handleReveal = (index: number) => {
    if (!revealedNotes.includes(index)) {
      const newRevealed = [...revealedNotes, index];
      setRevealedNotes(newRevealed);
      
      if (newRevealed.length === loveNotes.length) {
        setTimeout(() => setShowFinalMessage(true), 500);
      }
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-primary/10"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-12 h-12" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <Gift className="w-14 h-14 text-accent" />
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0"
              >
                <Sparkles className="w-14 h-14 text-primary/50" />
              </motion.div>
            </div>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recadinhos Para Você
          </h2>
          <p className="text-muted-foreground text-lg">
            Toque em cada envelope e descubra o que guardei para você 💌
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {loveNotes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              onClick={() => handleReveal(index)}
              className="cursor-pointer perspective-1000"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.08, 
                  rotateY: revealedNotes.includes(index) ? 0 : 15,
                  y: -8,
                }}
                whileTap={{ scale: 0.95 }}
                className="relative aspect-square"
              >
                <AnimatePresence mode="wait">
                  {!revealedNotes.includes(index) ? (
                    <motion.div
                      key="envelope"
                      initial={{ rotateY: 0 }}
                      exit={{ 
                        rotateY: 180, 
                        scale: 0.8,
                        opacity: 0,
                        transition: { duration: 0.4 }
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-card via-card to-secondary/50 border-2 border-primary/30 rounded-3xl flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/60 transition-all duration-300"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      
                      <motion.div
                        animate={{ 
                          y: [0, -5, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.3 
                        }}
                      >
                        <note.icon className="w-12 h-12 text-primary mb-3" />
                      </motion.div>
                      <span className="text-sm text-muted-foreground font-medium">Toque aqui</span>
                      
                      {/* Sparkle decoration */}
                      <motion.div
                        animate={{ 
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1, 0.8],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        className="absolute top-3 right-3"
                      >
                        <Sparkles className="w-4 h-4 text-accent" />
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="message"
                      initial={{ 
                        rotateY: -180, 
                        scale: 0.8,
                        opacity: 0 
                      }}
                      animate={{ 
                        rotateY: 0, 
                        scale: 1,
                        opacity: 1 
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={`absolute inset-0 bg-gradient-to-br ${note.color} rounded-3xl flex items-center justify-center p-5 shadow-2xl`}
                    >
                      {/* Inner glow */}
                      <div className="absolute inset-0 rounded-3xl bg-white/10" />
                      
                      <p className="text-white text-center font-serif text-sm md:text-base leading-relaxed relative z-10">
                        {note.message}
                      </p>
                      
                      {/* Corner heart */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute bottom-3 right-3"
                      >
                        <Heart className="w-4 h-4 text-white/70" fill="currentColor" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final reveal message */}
        <AnimatePresence>
          {showFinalMessage && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-16"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px hsl(346 75% 58% / 0.2)",
                    "0 0 40px hsl(346 75% 58% / 0.4)",
                    "0 0 20px hsl(346 75% 58% / 0.2)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 backdrop-blur-sm border border-primary/40 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
              >
                {/* Animated background */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                >
                  <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-accent rounded-full blur-3xl" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="relative z-10"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block mb-6"
                  >
                    <Crown className="w-12 h-12 text-accent mx-auto" />
                  </motion.div>
                  
                  <p className="font-display text-2xl md:text-3xl text-foreground mb-3">
                    Você é meu mundo inteiro
                  </p>
                  <p className="text-gradient-romantic font-display text-3xl md:text-4xl font-bold">
                    E Eu Te Amo Demais! 💕
                  </p>
                </motion.div>

                {/* Floating hearts celebration */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-primary/40"
                    style={{
                      left: `${5 + Math.random() * 90}%`,
                      bottom: "0",
                    }}
                    animate={{
                      y: [0, -200],
                      opacity: [1, 0],
                      rotate: [0, Math.random() * 360],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    <Heart className="w-5 h-5" fill="currentColor" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveLoveNotes;