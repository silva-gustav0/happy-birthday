import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Infinity as InfinityIcon } from "lucide-react";

const HeartCounter = () => {
  const [hearts, setHearts] = useState(0);
  const [explosions, setExplosions] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: React.MouseEvent) => {
    setHearts(prev => prev + 1);
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newExplosion = { id: Date.now(), x, y };
    setExplosions(prev => [...prev, newExplosion]);
    
    setTimeout(() => {
      setExplosions(prev => prev.filter(exp => exp.id !== newExplosion.id));
    }, 1000);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quanto Te Amo?
          </h2>
          <p className="text-muted-foreground text-lg">
            Clique no coração para contar! (Spoiler: é infinito 💕)
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={handleClick}
          className="relative inline-block cursor-pointer select-none"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="relative"
          >
            <Heart 
              className="w-40 h-40 text-primary drop-shadow-2xl" 
              fill="currentColor"
            />
            
            {/* Heart explosions */}
            {explosions.map(exp => (
              <motion.div
                key={exp.id}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                className="absolute pointer-events-none"
                style={{ left: exp.x - 12, top: exp.y - 12 }}
              >
                <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          key={hearts}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="font-display text-6xl md:text-8xl font-bold text-gradient-romantic">
              {hearts}
            </span>
            <span className="text-4xl text-muted-foreground">+</span>
            <InfinityIcon className="w-16 h-16 text-primary" />
          </div>
          <p className="text-muted-foreground mt-4 font-serif italic">
            {hearts === 0 && "Clique no coração!"}
            {hearts > 0 && hearts < 10 && "Continue clicando..."}
            {hearts >= 10 && hearts < 50 && "Isso mesmo, meu amor!"}
            {hearts >= 50 && hearts < 100 && "Você é demais! 💕"}
            {hearts >= 100 && "Te amo infinitamente! ❤️‍🔥"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeartCounter;
