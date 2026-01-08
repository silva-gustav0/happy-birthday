import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setShowPrompt(false);
  };

  const handleMute = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.currentTime = 26;
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <>
      {/* Audio element com arquivo local */}
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music/alianca.mp3`}
        loop
        preload="auto"
      />

      {/* Prompt to start music */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="text-center p-8"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="mb-8"
              >
                <Music className="w-24 h-24 mx-auto text-primary" />
              </motion.div>
              
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Um Pedacinho do Que Sinto
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                Isso é só uma migalha de tudo que transborda em mim quando penso em você. Aperta o play e sente comigo 🎵
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlay}
                className="px-8 py-4 bg-gradient-romantic text-primary-foreground rounded-full font-display text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              >
                Começar ❤️
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating music control */}
      {!showPrompt && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={isPlaying ? handleMute : handlePlay}
          className="fixed bottom-6 right-6 z-40 p-4 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-primary" />
          ) : (
            <VolumeX className="w-6 h-6 text-muted-foreground" />
          )}
        </motion.button>
      )}
    </>
  );
};

export default MusicPlayer;
