import { motion } from "framer-motion";
import { Heart, Sparkles, Stars, Flower2 } from "lucide-react";

interface SpecialMessageProps {
  name?: string;
}

const SpecialMessage = ({ name = "Meu Amor" }: SpecialMessageProps) => {
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

          <div className="space-y-8 text-lg md:text-xl leading-relaxed font-serif">
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
                    "0 0 20px hsl(346 75% 58% / 0.1)",
                    "0 0 40px hsl(346 75% 58% / 0.2)",
                    "0 0 20px hsl(346 75% 58% / 0.1)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6"
              >
                <p className="text-foreground/90">
                  {name}, você é o amor da minha vida. Cada dia ao seu lado é uma 
                  bênção que agradeço do fundo do meu coração.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px hsl(346 75% 58% / 0.1)",
                    "0 0 40px hsl(346 75% 58% / 0.2)",
                    "0 0 20px hsl(346 75% 58% / 0.1)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="bg-card/30 backdrop-blur-sm border border-accent/20 rounded-2xl p-6"
              >
                <p className="text-foreground/90">
                  Neste dia especial, quero que você saiba o quanto você é amada, 
                  valorizada e admirada. Você merece todo o amor do mundo.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px hsl(346 75% 58% / 0.1)",
                    "0 0 40px hsl(346 75% 58% / 0.2)",
                    "0 0 20px hsl(346 75% 58% / 0.1)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6"
              >
                <p className="text-foreground/90">
                  Que este novo ano de vida seja repleto de alegrias, conquistas 
                  e muito amor. Estarei sempre ao seu lado, te amando a cada dia mais.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-14"
          >
            <motion.div
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-8 py-4"
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialMessage;