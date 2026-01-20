import { useState, useEffect, useCallback } from 'react';
import bengaliCouple from '@/assets/bengali-couple.png';
import marigoldGarland from '@/assets/marigold-garland.png';
import goldenCorner from '@/assets/golden-corner.png';
import OrnamentalDivider from './OrnamentalDivider';
import { GreenDoor, BetelLeaf, Mukut, Topor, Dhunuchi } from './TraditionalElements';
import { ChevronDown, ChevronUp } from 'lucide-react';

const WeddingSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = 5;

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide || index < 0 || index >= totalSlides) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, currentSlide]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % totalSlides);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  }, [currentSlide, goToSlide]);

  // Touch/swipe handling
  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].screenY;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const SlideWrapper = ({ children, index }: { children: React.ReactNode; index: number }) => (
    <div 
      className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-700 ease-in-out ${
        index === currentSlide 
          ? 'opacity-100 translate-y-0 scale-100' 
          : index < currentSlide 
            ? 'opacity-0 -translate-y-full scale-95' 
            : 'opacity-0 translate-y-full scale-95'
      }`}
    >
      {children}
    </div>
  );

  return (
    <div className="relative w-full max-w-md mx-auto h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-maroon" />
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-repeat" style={{
        backgroundImage: `radial-gradient(circle, hsl(45, 100%, 50%) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }} />

      {/* Corner decorations */}
      <img src={goldenCorner} alt="" className="absolute top-0 left-0 w-24 h-24 opacity-80 z-10" />
      <img src={goldenCorner} alt="" className="absolute top-0 right-0 w-24 h-24 opacity-80 -scale-x-100 z-10" />
      <img src={goldenCorner} alt="" className="absolute bottom-0 left-0 w-24 h-24 opacity-80 -scale-y-100 z-10" />
      <img src={goldenCorner} alt="" className="absolute bottom-0 right-0 w-24 h-24 opacity-80 -scale-x-100 -scale-y-100 z-10" />

      {/* Traditional elements floating in background */}
      <div className="absolute top-20 left-2 w-12 h-16 animate-float opacity-60 z-5">
        <BetelLeaf className="w-full h-full" />
      </div>
      <div className="absolute top-32 right-2 w-12 h-16 animate-float opacity-60 z-5" style={{ animationDelay: '1s' }}>
        <BetelLeaf className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 left-4 w-10 h-16 animate-sway opacity-50 z-5">
        <Dhunuchi className="w-full h-full" />
      </div>
      <div className="absolute bottom-40 right-4 w-10 h-16 animate-sway opacity-50 z-5" style={{ animationDelay: '0.5s' }}>
        <Dhunuchi className="w-full h-full" />
      </div>

      {/* Slides Container */}
      <div className="relative z-20 h-full">
        
        {/* Slide 0: Welcome with Green Door */}
        <SlideWrapper index={0}>
          <div className="w-full -mt-8 mb-2 animate-sway">
            <img src={marigoldGarland} alt="Marigold garland" className="w-full h-auto" />
          </div>
          
          <div className="text-center mb-4">
            <p className="font-bengali text-wedding-gold text-base">॥ শ্রী শ্রী দুর্গা ॥</p>
          </div>
          
          <div className="relative mb-4">
            <GreenDoor className="w-36 h-52 mx-auto animate-pulse-glow" />
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <Mukut className="w-20 h-14" />
            </div>
          </div>
          
          <h1 className="font-bengali-display text-wedding-gold text-4xl font-bold tracking-wide text-shadow-gold animate-shimmer mb-4">
            শুভ বিবাহ
          </h1>
          
          <p className="font-bengali text-wedding-gold-light/80 text-sm mb-8">
            স্বাগতম এই শুভ মিলনে
          </p>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-wedding-gold/70" />
            <p className="font-bengali text-wedding-gold/60 text-xs">সোয়াইপ করুন</p>
          </div>
        </SlideWrapper>

        {/* Slide 1: Bride & Groom */}
        <SlideWrapper index={1}>
          <div className="flex justify-center items-center gap-4 mb-4">
            <Topor className="w-12 h-20 animate-float" />
            <Mukut className="w-16 h-12 animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-wedding-gold/20 rounded-full blur-2xl" />
            <img 
              src={bengaliCouple} 
              alt="Bengali Wedding Couple" 
              className="relative w-44 h-auto rounded-lg shadow-2xl border-4 border-wedding-gold/50 animate-float"
            />
          </div>

          {/* Bride */}
          <div className="text-center w-full max-w-xs">
            <div className="bg-wedding-gold/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-wedding-gold/30 mb-3">
              <p className="font-bengali text-wedding-gold-light text-sm mb-1">পাত্রী</p>
              <h2 className="font-bengali-display text-wedding-gold text-xl font-bold mb-1">শতাব্দী পাঠক</h2>
              <p className="font-bengali text-wedding-gold-light/80 text-xs">পিতা: সুদর্শন পাঠক | মাতা: সুবর্ণা পাঠক</p>
              <p className="font-bengali text-wedding-gold-light/80 text-xs">ভ্রাতা: জগন্নাথ পাঠক</p>
            </div>
          </div>

          <p className="font-bengali text-wedding-gold text-lg animate-sparkle my-2">❤️ এবং ❤️</p>

          {/* Groom */}
          <div className="text-center w-full max-w-xs">
            <div className="bg-wedding-gold/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-wedding-gold/30">
              <p className="font-bengali text-wedding-gold-light text-sm mb-1">পাত্র</p>
              <h2 className="font-bengali-display text-wedding-gold text-xl font-bold mb-1">সৌরভ কেশ</h2>
              <p className="font-bengali text-wedding-gold-light/80 text-xs">পিতা: রাম নারায়ণ কেশ | মাতা: সুজাতা কেশ</p>
            </div>
          </div>
        </SlideWrapper>

        {/* Slide 2: Gaye Holud */}
        <SlideWrapper index={2}>
          <OrnamentalDivider />
          
          <div className="flex justify-center gap-6 my-4">
            <BetelLeaf className="w-10 h-14 animate-sway" />
            <BetelLeaf className="w-10 h-14 animate-sway" style={{ animationDelay: '0.3s' }} />
            <BetelLeaf className="w-10 h-14 animate-sway" style={{ animationDelay: '0.6s' }} />
          </div>

          <div className="bg-wedding-gold/15 backdrop-blur-sm rounded-xl px-8 py-6 border-2 border-wedding-orange/50 text-center max-w-xs">
            <h3 className="font-bengali-display text-wedding-orange text-2xl font-bold mb-4">
              🌿 গায়ে হলুদ 🌿
            </h3>
            
            <div className="space-y-2">
              <p className="font-bengali text-wedding-gold text-lg font-semibold">
                ২৩শে মাঘ, ১৪৩২ সাল
              </p>
              <p className="font-bengali text-wedding-gold-light text-base">
                ৬ই ফেব্রুয়ারি ২০২৬
              </p>
              <p className="font-bengali text-wedding-orange text-base font-medium">
                সকালবেলা
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center gap-4">
            <Dhunuchi className="w-10 h-16 animate-float" />
            <Dhunuchi className="w-10 h-16 animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
        </SlideWrapper>

        {/* Slide 3: Bibaho (Wedding) */}
        <SlideWrapper index={3}>
          <div className="flex justify-center mb-4">
            <Mukut className="w-24 h-16 animate-shimmer" />
          </div>
          
          <div className="bg-wedding-gold/15 backdrop-blur-sm rounded-xl px-8 py-6 border-2 border-wedding-gold/50 text-center max-w-xs">
            <h3 className="font-bengali-display text-wedding-gold text-2xl font-bold mb-4">
              💒 শুভ বিবাহ 💒
            </h3>
            
            <div className="space-y-2">
              <p className="font-bengali text-wedding-gold text-lg font-semibold">
                ২৩শে মাঘ, ১৪৩২ সাল
              </p>
              <p className="font-bengali text-wedding-gold-light text-base">
                ৬ই ফেব্রুয়ারি ২০২৬
              </p>
              <p className="font-bengali text-wedding-gold text-lg font-bold mt-3">
                সন্ধ্যা ৭ ঘটিকায়
              </p>
            </div>
          </div>

          <OrnamentalDivider />
          
          <div className="text-center mt-2">
            <p className="font-bengali text-wedding-gold-light text-sm mb-2">বিবাহ বাসর</p>
            <p className="font-bengali text-wedding-gold text-base font-semibold">নিজ বাসভবন</p>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <Topor className="w-10 h-16 animate-float" />
            <GreenDoor className="w-12 h-18 animate-pulse-glow" />
            <Topor className="w-10 h-16 animate-float" style={{ animationDelay: '0.5s', transform: 'scaleX(-1)' }} />
          </div>
        </SlideWrapper>

        {/* Slide 4: Venue & Closing */}
        <SlideWrapper index={4}>
          <div className="w-full mb-4 animate-sway">
            <img src={marigoldGarland} alt="" className="w-full h-auto" />
          </div>

          <div className="relative bg-wedding-maroon-dark/50 backdrop-blur-sm rounded-xl px-6 py-5 border-2 border-wedding-gold/50 text-center max-w-xs">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <GreenDoor className="w-16 h-24" />
            </div>
            
            <div className="mt-12">
              <p className="font-bengali text-wedding-gold-light text-sm mb-2">📍 ঠিকানা 📍</p>
              <p className="font-bengali text-wedding-gold text-lg font-bold">
                কাঁকসা গাঙ্গুলী পাড়া
              </p>
              <p className="font-bengali text-wedding-gold-light text-base">
                পানাগড়, পশ্চিম বর্ধমান
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 my-6">
            <BetelLeaf className="w-8 h-12 animate-sway" />
            <BetelLeaf className="w-8 h-12 animate-sway" style={{ animationDelay: '0.2s' }} />
            <BetelLeaf className="w-8 h-12 animate-sway" style={{ animationDelay: '0.4s' }} />
          </div>

          <div className="text-center">
            <p className="font-bengali text-wedding-gold-light/90 text-sm italic leading-relaxed px-4">
              আপনাদের শুভ আশীর্বাদ ও সপরিবারে উপস্থিতি
              <br />
              আমাদের পরম কাম্য
            </p>
          </div>

          <div className="text-center mt-6">
            <p className="font-bengali text-wedding-gold text-lg animate-shimmer">॥ শুভমস্তু ॥</p>
          </div>

          <div className="w-full mt-4 rotate-180 animate-sway">
            <img src={marigoldGarland} alt="" className="w-full h-auto" />
          </div>
        </SlideWrapper>
      </div>

      {/* Navigation dots */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentSlide 
                ? 'bg-wedding-gold w-2 h-4' 
                : 'bg-wedding-gold/40 hover:bg-wedding-gold/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      {currentSlide > 0 && (
        <button 
          onClick={prevSlide}
          className="absolute top-4 left-1/2 -translate-x-1/2 z-30 text-wedding-gold/70 hover:text-wedding-gold transition-colors"
          aria-label="Previous slide"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
      {currentSlide < totalSlides - 1 && (
        <button 
          onClick={nextSlide}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-wedding-gold/70 hover:text-wedding-gold transition-colors animate-bounce"
          aria-label="Next slide"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default WeddingSlides;
