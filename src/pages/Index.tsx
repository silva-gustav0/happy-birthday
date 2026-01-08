import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveQuotes from "@/components/LoveQuotes";
import SpecialMessage from "@/components/SpecialMessage";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import InteractiveLoveNotes from "@/components/InteractiveLoveNotes";
import HeartCounter from "@/components/HeartCounter";

const Index = () => {
  // Personalize aqui o nome da sua namorada
  const girlfriendName = "Meu Amor";

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <MusicPlayer />
      <FloatingHearts />
      <HeroSection name={girlfriendName} />
      <PhotoGallery />
      <InteractiveLoveNotes />
      <LoveQuotes />
      <HeartCounter />
      <SpecialMessage name={girlfriendName} />
      <Footer />
    </main>
  );
};

export default Index;
