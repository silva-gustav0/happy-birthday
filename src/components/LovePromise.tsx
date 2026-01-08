import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

const LovePromise = () => {
  const promises = [
    "Te amar mais a cada dia",
    "Estar ao seu lado em todos os momentos",
    "Fazer você sorrir sempre que puder",
    "Construir nosso futuro juntos",
    "Ser seu melhor amigo e companheiro",
    "Te apoiar em todos os seus sonhos",
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-3 h-3 text-primary/30" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
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
              <Sparkles className="w-12 h-12 text-accent" />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0"
              >
                <Sparkles className="w-12 h-12 text-primary/50" />
              </motion.div>
            </div>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Minhas Promessas Para Você
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo que prometo ser e fazer por nós
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      delay: index * 0.2 
                    }}
                  >
                    <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" />
                  </motion.div>
                  <p className="font-serif text-lg text-foreground/90 group-hover:text-foreground transition-colors">
                    {promise}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 backdrop-blur-sm border border-primary/30 rounded-3xl p-8 md:p-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Heart className="w-10 h-10 text-primary" fill="currentColor" />
              </motion.div>
              <p className="font-display text-2xl md:text-3xl text-foreground mb-2">
                Meu amor por você é
              </p>
              <p className="text-gradient-romantic font-display text-4xl md:text-5xl font-bold">
                Infinito e Eterno
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LovePromise;