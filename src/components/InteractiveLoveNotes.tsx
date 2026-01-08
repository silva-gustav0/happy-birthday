import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift, Star, Sparkles } from "lucide-react";

const InteractiveLoveNotes = () => {
  const [revealedNotes, setRevealedNotes] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const loveNotes = [
    { icon: Heart, message: "Você é minha pessoa favorita no mundo inteiro! 💕", color: "from-pink-500 to-rose-500" },
    { icon: Star, message: "Seu sorriso ilumina todos os meus dias! ✨", color: "from-amber-500 to-orange-500" },
    { icon: Gift, message: "Cada momento com você é um presente! 🎁", color: "from-purple-500 to-pink-500" },
    { icon: Sparkles, message: "Você me faz querer ser melhor a cada dia! 💫", color: "from-cyan-500 to-blue-500" },
  ];

  const handleReveal = (index: number) => {
    if (!revealedNotes.includes(index)) {
      setRevealedNotes([...revealedNotes, index]);
      
      if (revealedNotes.length === loveNotes.length - 1) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Confetti effect */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  rotate: 0,
                  opacity: 1
                }}
                animate={{ 
                  y: window.innerHeight + 20,
                  rotate: Math.random() * 360,
                  opacity: 0
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 0.5
                }}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: ['#ec4899', '#f59e0b', '#8b5cf6', '#06b6d4'][Math.floor(Math.random() * 4)]
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Gift className="w-10 h-10 mx-auto text-accent mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recadinhos Secretos
          </h2>
          <p className="text-muted-foreground text-lg">
            Clique em cada envelope para revelar uma surpresa 💌
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {loveNotes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleReveal(index)}
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                className="relative aspect-square"
              >
                <AnimatePresence mode="wait">
                  {!revealedNotes.includes(index) ? (
                    <motion.div
                      key="envelope"
                      initial={{ rotateY: 0 }}
                      exit={{ rotateY: 90, opacity: 0 }}
                      className="absolute inset-0 bg-card border-2 border-primary/20 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:border-primary/40 transition-all"
                    >
                      <note.icon className="w-10 h-10 text-primary mb-2" />
                      <span className="text-xs text-muted-foreground">Clique aqui</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="message"
                      initial={{ rotateY: -90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      className={`absolute inset-0 bg-gradient-to-br ${note.color} rounded-2xl flex items-center justify-center p-4 shadow-xl`}
                    >
                      <p className="text-white text-center font-serif text-sm leading-relaxed">
                        {note.message}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {revealedNotes.length === loveNotes.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <p className="text-2xl font-display text-primary">
              Você descobriu todos os recadinhos! 🎉💕
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InteractiveLoveNotes;
