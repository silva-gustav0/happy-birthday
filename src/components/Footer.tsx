import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-[hsl(346,40%,6%)] to-[hsl(346,50%,4%)] text-foreground relative overflow-hidden">
      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div
          animate={{ 
            y: [0, -5, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
          </motion.div>
          
          <span className="font-display text-2xl text-foreground">Feito com muito amor</span>
          
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          >
            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-4"
        >
          <Sparkles className="w-5 h-5 text-accent" />
        </motion.div>
        
        <p className="text-muted-foreground font-serif text-lg">
          {currentYear} • Para você, meu amor
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;