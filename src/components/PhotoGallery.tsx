import { motion } from "framer-motion";
import { Camera, Heart, ImagePlus } from "lucide-react";

interface Photo {
  id: number;
  src?: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos?: Photo[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-20 px-4 bg-cream/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Camera className="w-10 h-10 mx-auto text-accent mb-4" />
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
          {displayPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-rose-light/50 border-2 border-dashed border-rose-medium/30 flex flex-col items-center justify-center relative">
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-6">
                    <ImagePlus className="w-12 h-12 mx-auto text-rose-medium/50 mb-3" />
                    <p className="text-rose-medium/70 font-serif text-sm">
                      Adicionar foto
                    </p>
                  </div>
                )}
                
                {/* Overlay com caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-primary-foreground">
                    <Heart className="w-5 h-5 mb-2" fill="currentColor" />
                    <p className="font-display text-lg">{photo.caption}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
