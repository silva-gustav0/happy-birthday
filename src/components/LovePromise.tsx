import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles, Star, Crown } from "lucide-react";

const LovePromise = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const promises = [
    "Te amar mais a cada dia",
    "Estar ao seu lado em todos os momentos",
    "Fazer você sorrir sempre que puder",
    "Construir nosso futuro juntos",
    "Ser seu melhor amigo e companheiro",
    "Te apoiar em todos os seus sonhos",
  ];

  return (
    <section className="py-28 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Parallax background decorations */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-3 h-3 text-primary/30" fill="currentColor" />
          </motion.div>
        ))}
      </motion.div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 30px hsl(346 75% 58% / 0.3)",
                    "0 0 50px hsl(346 75% 58% / 0.5)",
                    "0 0 30px hsl(346 75% 58% / 0.3)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-primary/10 rounded-full p-4"
              >
                <Crown className="w-14 h-14 text-accent" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0"
              >
                <Sparkles className="w-14 h-14 text-primary/50" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
            animate={{
              textShadow: [
                "0 0 20px hsl(346 75% 58% / 0)",
                "0 0 40px hsl(346 75% 58% / 0.3)",
                "0 0 20px hsl(346 75% 58% / 0)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Minhas Promessas Para Você
          </motion.h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Tudo que prometo ser e fazer por nós
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -60 : 60,
                y: 30,
                scale: 0.9,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.12, 
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <motion.div 
                className="bg-card/60 backdrop-blur-md border-2 border-border rounded-3xl p-8 hover:border-primary/50 hover:bg-card/90 transition-all duration-400"
                whileHover={{
                  boxShadow: "0 25px 50px -12px hsl(346 75% 58% / 0.3)",
                }}
              >
                <div className="flex items-start gap-5">
                  <motion.div
                    className="bg-primary/10 rounded-2xl p-3"
                    animate={{ 
                      scale: [1, 1.15, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.2 
                    }}
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Heart className="w-7 h-7 text-primary flex-shrink-0" fill="currentColor" />
                  </motion.div>
                  <p className="font-serif text-xl text-foreground/90 group-hover:text-foreground transition-colors leading-relaxed">
                    {promise}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final message with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-20 text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.03, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block"
          >
            <motion.div 
              className="bg-gradient-to-r from-primary/20 via-accent/25 to-primary/20 backdrop-blur-md border-2 border-primary/40 rounded-[2rem] p-10 md:p-14 relative overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 30px hsl(346 75% 58% / 0.2)",
                  "0 0 60px hsl(346 75% 58% / 0.4)",
                  "0 0 30px hsl(346 75% 58% / 0.2)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Floating particles inside */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/30 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
              
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6 relative z-10"
              >
                <Heart className="w-14 h-14 text-primary" fill="currentColor" />
              </motion.div>
              <p className="font-display text-3xl md:text-4xl text-foreground mb-3 relative z-10">
                Você é o melhor presente
              </p>
              <motion.p 
                className="text-gradient-romantic font-display text-5xl md:text-6xl font-bold relative z-10"
                animate={{
                  textShadow: [
                    "0 0 20px hsl(346 75% 58% / 0.3)",
                    "0 0 40px hsl(346 75% 58% / 0.5)",
                    "0 0 20px hsl(346 75% 58% / 0.3)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Que a Vida Me Deu
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LovePromise;
