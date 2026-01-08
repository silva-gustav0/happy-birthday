import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Camera, Heart, X, ZoomIn, Sparkles } from "lucide-react";
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
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const photos: Photo[] = [
    { id: 1, src: foto1, caption: "Foi essa foto que me fez perder o fôlego. Naquele momento eu senti algo diferente — e soube que tinha me apaixonado por você." },
    { id: 2, src: foto2, caption: "Sonho em viver cada aventura ao seu lado — cada viagem, cada risada, cada silêncio confortável. Meu lugar é onde você estiver." },
    { id: 3, src: foto3, caption: "Você é minha pessoa. Quero envelhecer ao seu lado, celebrar cada conquista, cada Natal, cada momento que a vida nos der." },
    { id: 4, src: foto4, caption: "A cada dia você me faz transbordar de felicidade. Minha maior vontade é te ver sorrindo assim, sempre." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.85, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <>
      <section className="py-24 px-4 bg-secondary/30 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              <Heart className="w-4 h-4 text-primary/20" fill="currentColor" />
            </motion.div>
          ))}
        </motion.div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative inline-block mb-6"
            >
              <Camera className="w-12 h-12 text-accent" />
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0"
              >
                <Sparkles className="w-12 h-12 text-primary/50" />
              </motion.div>
            </motion.div>
            
            <motion.h2 
              className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px hsl(346 75% 58% / 0)",
                    "0 0 30px hsl(346 75% 58% / 0.3)",
                    "0 0 20px hsl(346 75% 58% / 0)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Nossos Momentos
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Cada foto guarda uma memória especial do nosso amor
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: "easeOut" } 
                }}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative cursor-pointer perspective-1000"
              >
                <motion.div 
                  className="aspect-[4/5] rounded-3xl overflow-hidden bg-card border-2 border-border shadow-2xl shadow-primary/10 relative"
                  whileHover={{ 
                    boxShadow: "0 30px 60px -15px hsl(346 75% 58% / 0.5)",
                    borderColor: "hsl(346 75% 58% / 0.6)",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Image shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 -translate-x-full"
                    whileHover={{ translateX: "200%" }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Zoom icon with animation */}
                  <motion.div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.div 
                      className="bg-background/90 backdrop-blur-md rounded-full p-3 border border-primary/30"
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 hsl(346 75% 58% / 0)",
                          "0 0 0 8px hsl(346 75% 58% / 0.2)",
                          "0 0 0 0 hsl(346 75% 58% / 0)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ZoomIn className="w-5 h-5 text-primary" />
                    </motion.div>
                  </motion.div>

                  {/* Photo number badge */}
                  <motion.div
                    className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center border border-white/20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    <span className="text-white font-bold">{index + 1}</span>
                  </motion.div>
                  
                  {/* Caption sempre visível (sem atraso), com animação sutil */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/55 to-transparent opacity-100 flex items-end p-8"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <motion.div className="text-foreground">
                      <motion.div
                        animate={{ scale: [1, 1.12, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Heart className="w-6 h-6 mb-4 text-primary" fill="currentColor" />
                      </motion.div>
                      <p className="font-serif text-base md:text-lg leading-relaxed">{photo.caption}</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal com animações melhoradas */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-lg flex items-center justify-center p-4"
          >
            {/* Animated background particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            <motion.button
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="absolute top-6 right-6 p-3 bg-card rounded-full border border-border hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-6 h-6 text-foreground" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotateY: 30 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl max-h-[85vh] relative flex flex-col items-center"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 30px hsl(346 75% 58% / 0.3)",
                    "0 0 50px hsl(346 75% 58% / 0.5)",
                    "0 0 30px hsl(346 75% 58% / 0.3)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="rounded-3xl overflow-hidden"
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                  className="max-w-full max-h-[65vh] object-contain"
                />
              </motion.div>
              
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8 text-center max-w-xl"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-8 h-8 mx-auto mb-4 text-primary" fill="currentColor" />
                </motion.div>
                <p className="font-serif text-xl text-foreground/90 leading-relaxed">
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
