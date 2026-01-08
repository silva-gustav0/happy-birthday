import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";

const LoveQuotes = () => {
  const qualities = [
    {
      title: "Seu Sorriso",
      description: "Ilumina meus dias mais escuros e me faz querer ser uma pessoa melhor.",
    },
    {
      title: "Seu Coração",
      description: "Tão gentil e amoroso, que me acolhe em todos os momentos.",
    },
    {
      title: "Sua Força",
      description: "Me inspira a nunca desistir e a enfrentar qualquer desafio ao seu lado.",
    },
    {
      title: "Seu Amor",
      description: "É o maior presente que eu poderia receber nesta vida.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Quote className="w-10 h-10 mx-auto text-accent mb-4" />
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
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-rose-light text-primary group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-5 h-5" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      {quality.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-serif">
                      {quality.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveQuotes;
