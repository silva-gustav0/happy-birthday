import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface SpecialMessageProps {
  name?: string;
}

const SpecialMessage = ({ name = "Meu Amor" }: SpecialMessageProps) => {
  return (
    <section className="py-24 px-4 bg-gradient-romantic text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10">
          <Heart className="w-40 h-40" fill="currentColor" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <Heart className="w-32 h-32" fill="currentColor" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Sparkles className="w-8 h-8 mx-auto mb-6 animate-sparkle" />
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Minha Mensagem Para Você
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed font-serif">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {name}, você é o amor da minha vida. Cada dia ao seu lado é uma 
              bênção que agradeço do fundo do meu coração.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Neste dia especial, quero que você saiba o quanto você é amada, 
              valorizada e admirada. Você merece todo o amor do mundo.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Que este novo ano de vida seja repleto de alegrias, conquistas 
              e muito amor. Estarei sempre ao seu lado, te amando a cada dia mais.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <Heart className="w-6 h-6 animate-heartbeat" fill="currentColor" />
            <span className="font-display text-2xl italic">
              Com todo meu amor, para sempre
            </span>
            <Heart className="w-6 h-6 animate-heartbeat" fill="currentColor" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialMessage;
