import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true);
        audioRef.current.volume = 0.4;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/wedding-music.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-wedding-gold shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-glow"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-wedding-maroon-dark" />
        ) : (
          <VolumeX className="w-6 h-6 text-wedding-maroon-dark" />
        )}
      </button>
    </>
  );
};

export default AudioPlayer;
