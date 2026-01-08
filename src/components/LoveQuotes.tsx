import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Quote, Sparkles, Star } from "lucide-react";

const LoveQuotes = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  const qualities = [
    {
      title: "Seu Jeito Único",
      description: "A forma como você vê o mundo me encanta. Seu olhar, sua essência, tudo em você é especial.",
      emoji: "✨",
    },
    {
      title: "Seu Coração",
      description: "Tão gentil e amoroso, que me acolhe em todos os momentos.",
      emoji: "💕",
    },
    {
      title: "Sua Dedicação",
      description: "Em tudo que você faz, você se entrega de corpo e alma. Isso me inspira todos os dias.",
      emoji: "🌟",
    },
    {
      title: "Seu Amor",
      description: "É o maior presente que eu poderia receber nesta vida.",
      emoji: "❤️‍🔥",
    },
  ];

  return (
    <section className="py-28 px-4 bg-background relative overflow-hidden">
      {/* Animated rotating background elements */}
      <motion.div 
        style={{ rotate: backgroundRotate }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating stars */}
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
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
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
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 text-8xl opacity-5"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ❤️
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10 text-6xl opacity-5"
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          💕
        </motion.div>
      </div>

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
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative inline-block mb-6"
          >
            <Quote className="w-14 h-14 text-accent" />
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0"
            >
              <Sparkles className="w-14 h-14 text-primary/50" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
            animate={{
              textShadow: [
                "0 0 20px hsl(346 75% 58% / 0)",
                "0 0 30px hsl(346 75% 58% / 0.2)",
                "0 0 20px hsl(346 75% 58% / 0)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Por Que Te Amo
          </motion.h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Algumas das infinitas razões que te fazem tão especial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -60 : 60, 
                rotate: index % 2 === 0 ? -8 : 8,
                scale: 0.8,
              }}
              whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group"
            >
              <motion.div 
                className="p-10 rounded-3xl bg-card border-2 border-border transition-all duration-500 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 30px 60px -15px hsl(346 75% 58% / 0.3)",
                  borderColor: "hsl(346 75% 58% / 0.6)"
                }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5"
                  initial={{ opacity: 0, scale: 1.5 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 1.5,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  animate={hoveredIndex === index ? { translateX: "200%" } : {}}
                  transition={{ duration: 0.8 }}
                />
                
                <div className="flex items-start gap-5 relative z-10">
                  <motion.div 
                    className="p-4 rounded-2xl bg-primary/10 text-primary"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    animate={hoveredIndex === index ? {
                      boxShadow: [
                        "0 0 0 0 hsl(346 75% 58% / 0)",
                        "0 0 0 10px hsl(346 75% 58% / 0.2)",
                        "0 0 0 0 hsl(346 75% 58% / 0)",
                      ]
                    } : {}}
                  >
                    <Heart className="w-7 h-7" fill="currentColor" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                        {quality.title}
                      </h3>
                      <motion.span
                        animate={hoveredIndex === index ? { 
                          scale: [1, 1.4, 1],
                          rotate: [0, 20, -20, 0]
                        } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-2xl"
                      >
                        {quality.emoji}
                      </motion.span>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed font-serif">
                      {quality.description}
                    </p>
                  </div>
                </div>

                {/* Floating sparkles on hover */}
                {hoveredIndex === index && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-3 right-3"
                    >
                      <Sparkles className="w-5 h-5 text-accent" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="absolute bottom-3 left-3"
                    >
                      <Star className="w-4 h-4 text-primary/50" fill="currentColor" />
                    </motion.div>
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveQuotes;
