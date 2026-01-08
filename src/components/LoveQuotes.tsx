import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Quote, Sparkles } from "lucide-react";

const LoveQuotes = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
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
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 text-6xl opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ❤️
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10 text-4xl opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          💕
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Quote className="w-10 h-10 mx-auto text-accent mb-4" />
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Te Amo
          </h2>
          <p className="text-muted-foreground text-lg">
            Algumas das infinitas razões que te fazem tão especial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, rotate: index % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group"
            >
              <motion.div 
                className="p-8 rounded-2xl bg-card border border-border transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -15px hsl(346 75% 58% / 0.25)",
                  borderColor: "hsl(346 75% 58% / 0.5)"
                }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div 
                    className="p-3 rounded-full bg-primary/10 text-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Heart className="w-5 h-5" fill="currentColor" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        {quality.title}
                      </h3>
                      <motion.span
                        animate={hoveredIndex === index ? { 
                          scale: [1, 1.3, 1],
                          rotate: [0, 15, -15, 0]
                        } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-xl"
                      >
                        {quality.emoji}
                      </motion.span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-serif">
                      {quality.description}
                    </p>
                  </div>
                </div>

                {/* Floating sparkles on hover */}
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-2 right-2"
                  >
                    <Sparkles className="w-4 h-4 text-accent animate-sparkle" />
                  </motion.div>
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
