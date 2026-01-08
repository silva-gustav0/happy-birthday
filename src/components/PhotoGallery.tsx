import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Heart, X, ZoomIn } from "lucide-react";
import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpg";
import foto4 from "@/assets/foto4.jpg";

interface Photo {
  id: number;
  src: string;
  caption: string;
}

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  
  const photos: Photo[] = [
    { id: 1, src: foto1, caption: "A foto que me fez apaixonar por você... Esse olhar, esse sorriso, tudo em você me encantou desde o primeiro momento." },
    { id: 2, src: foto2, caption: "Quero viver cada pôr do sol ao seu lado, cada aventura, cada momento. Meu lugar favorito no mundo é onde você está." },
    { id: 3, src: foto3, caption: "Você é a pessoa mais especial da minha vida. Quero passar o resto dos meus dias com você, comemorando cada Natal, cada data especial, sempre juntos." },
    { id: 4, src: foto4, caption: "Você me faz mais feliz a cada dia que passa. Meu amor por você só cresce, e não existe nada que eu queira mais do que te fazer feliz também." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <>
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Camera className="w-10 h-10 mx-auto text-accent mb-4" />
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Momentos
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Cada foto guarda uma memória especial do nosso amor
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative cursor-pointer"
              >
                <motion.div 
                  className="aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border shadow-lg shadow-primary/10 relative"
                  whileHover={{ 
                    boxShadow: "0 20px 40px -15px hsl(346 75% 58% / 0.4)",
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/80 backdrop-blur-sm rounded-full p-2">
                      <ZoomIn className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                  
                  {/* Overlay com caption */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                  >
                    <div className="text-foreground">
                      <Heart className="w-5 h-5 mb-3 text-primary" fill="currentColor" />
                      <p className="font-serif text-sm md:text-base leading-relaxed">{photo.caption}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-6 right-6 p-2 bg-card rounded-full border border-border hover:bg-primary/20 transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-6 h-6 text-foreground" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl max-h-[85vh] relative flex flex-col items-center"
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="max-w-full max-h-[65vh] object-contain rounded-2xl shadow-2xl"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center max-w-xl"
              >
                <Heart className="w-6 h-6 mx-auto mb-3 text-primary" fill="currentColor" />
                <p className="font-serif text-lg text-foreground/90 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;
