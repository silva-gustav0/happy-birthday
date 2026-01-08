import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Heart, ImagePlus, X, ZoomIn } from "lucide-react";

interface Photo {
  id: number;
  src?: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos?: Photo[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  
  // Placeholder photos - substituir pelas fotos reais
  const defaultPhotos: Photo[] = [
    { id: 1, caption: "Nosso primeiro encontro" },
    { id: 2, caption: "Momentos especiais" },
    { id: 3, caption: "Juntos sempre" },
    { id: 4, caption: "Meu sorriso favorito" },
    { id: 5, caption: "Amor da minha vida" },
    { id: 6, caption: "Para sempre" },
  ];

  const displayPhotos = photos || defaultPhotos;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <>
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  rotate: index % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.3 } 
                }}
                onClick={() => photo.src && setSelectedPhoto(photo)}
                className="group relative cursor-pointer"
              >
                <motion.div 
                  className="aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border shadow-lg shadow-primary/5 flex flex-col items-center justify-center relative"
                  whileHover={{ 
                    boxShadow: "0 20px 40px -15px hsl(346 75% 58% / 0.3)",
                  }}
                >
                  {photo.src ? (
                    <>
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-6 h-6 text-white drop-shadow-lg" />
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-6">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ImagePlus className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
                      </motion.div>
                      <p className="text-muted-foreground/70 font-serif text-sm">
                        Adicionar foto
                      </p>
                    </div>
                  )}
                  
                  {/* Overlay com caption */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                    initial={false}
                  >
                    <div className="text-foreground">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Heart className="w-5 h-5 mb-2 text-primary" fill="currentColor" />
                        <p className="font-display text-lg">{photo.caption}</p>
                      </motion.div>
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
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-6 right-6 p-2 bg-card rounded-full border border-border"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-6 h-6 text-foreground" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[80vh] relative"
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mt-4 font-display text-xl text-foreground"
              >
                {selectedPhoto.caption}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;
