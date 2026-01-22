import WeddingCardAutoScrollGroom from '@/components/WeddingCardAutoScrollGroom';
import FloatingPetals from '@/components/FloatingPetals';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <div className="h-screen bg-wedding-maroon-dark overflow-hidden">
      {/* Floating Petals Animation */}
      <FloatingPetals />

      {/* Main Wedding Card - Auto Scroll */}
      <WeddingCardAutoScrollGroom />

      {/* Audio Player */}
      <AudioPlayer />

      {/* Tap to play hint */}
      <div className="fixed bottom-20 right-4 z-40 animate-fade-in-up">
        <p className="text-wedding-gold/70 text-xs font-bengali bg-wedding-maroon-dark/80 px-3 py-1 rounded-full">
          🎵 ট্যাপ করুন
        </p>
      </div>
    </div>
  );
};

export default Index;
