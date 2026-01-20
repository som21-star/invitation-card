import bengaliCouple from '@/assets/bengali-couple.png';
import marigoldGarland from '@/assets/marigold-garland.png';
import goldenCorner from '@/assets/golden-corner.png';
import OrnamentalDivider from './OrnamentalDivider';

const WeddingCard = () => {
  return (
    <div className="relative w-full max-w-md mx-auto min-h-screen">
      {/* Background with ornate pattern */}
      <div 
        className="absolute inset-0 bg-gradient-maroon"
        style={{
          backgroundImage: `url(${goldenCorner})`,
          backgroundSize: '200px 200px',
          backgroundPosition: 'top left, top right, bottom left, bottom right',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-repeat" style={{
        backgroundImage: `radial-gradient(circle, hsl(45, 100%, 50%) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }} />
      
      {/* Corner decorations */}
      <img 
        src={goldenCorner} 
        alt="" 
        className="absolute top-0 left-0 w-28 h-28 opacity-80"
      />
      <img 
        src={goldenCorner} 
        alt="" 
        className="absolute top-0 right-0 w-28 h-28 opacity-80 -scale-x-100"
      />
      <img 
        src={goldenCorner} 
        alt="" 
        className="absolute bottom-0 left-0 w-28 h-28 opacity-80 -scale-y-100"
      />
      <img 
        src={goldenCorner} 
        alt="" 
        className="absolute bottom-0 right-0 w-28 h-28 opacity-80 -scale-x-100 -scale-y-100"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center px-6 py-8">
        {/* Marigold Garland at top */}
        <div className="w-full -mt-2 mb-4 animate-sway">
          <img 
            src={marigoldGarland} 
            alt="Marigold garland decoration" 
            className="w-full h-auto"
          />
        </div>

        {/* Om/Auspicious Header */}
        <div className="text-center mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="font-bengali text-wedding-gold text-lg">॥ শ্রী শ্রী দুর্গা ॥</p>
        </div>

        {/* Shubho Bibaho Title */}
        <div className="text-center mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-bengali-display text-wedding-gold text-4xl font-bold tracking-wide text-shadow-gold animate-shimmer">
            শুভ বিবাহ
          </h1>
        </div>

        <OrnamentalDivider />

        {/* Couple Image */}
        <div className="relative my-4 animate-float" style={{ animationDelay: '0.4s' }}>
          <div className="absolute inset-0 bg-wedding-gold/20 rounded-full blur-2xl" />
          <img 
            src={bengaliCouple} 
            alt="Bengali Wedding Couple" 
            className="relative w-48 h-auto rounded-lg shadow-2xl border-4 border-wedding-gold/50"
          />
        </div>

        {/* Bride Section */}
        <div className="text-center mt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-wedding-gold/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-wedding-gold/30">
            <p className="font-bengali text-wedding-gold-light text-sm mb-1">পাত্রী</p>
            <h2 className="font-bengali-display text-wedding-gold text-2xl font-bold mb-2">
              শতাব্দী পাঠক
            </h2>
            <p className="font-bengali text-wedding-gold-light/80 text-sm">
              পিতা: সুদর্শন পাঠক
            </p>
            <p className="font-bengali text-wedding-gold-light/80 text-sm">
              মাতা: সুবর্ণা পাঠক
            </p>
            <p className="font-bengali text-wedding-gold-light/80 text-sm">
              ভ্রাতা: জগন্নাথ পাঠক
            </p>
          </div>
        </div>

        {/* With decoration */}
        <div className="my-4 animate-sparkle">
          <p className="font-bengali text-wedding-gold text-xl">এবং</p>
        </div>

        {/* Groom Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-wedding-gold/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-wedding-gold/30">
            <p className="font-bengali text-wedding-gold-light text-sm mb-1">পাত্র</p>
            <h2 className="font-bengali-display text-wedding-gold text-2xl font-bold mb-2">
              সৌরভ কেশ
            </h2>
            <p className="font-bengali text-wedding-gold-light/80 text-sm">
              পিতা: রাম নারায়ণ কেশ
            </p>
            <p className="font-bengali text-wedding-gold-light/80 text-sm">
              মাতা: সুজাতা কেশ
            </p>
          </div>
        </div>

        <OrnamentalDivider />

        {/* Event Details */}
        <div className="text-center mt-4 w-full animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          {/* Gaye Holud */}
          <div className="bg-wedding-gold/15 backdrop-blur-sm rounded-lg px-6 py-4 mb-4 border border-wedding-gold/40">
            <h3 className="font-bengali text-wedding-orange text-lg font-semibold mb-2">
              🌿 গায়ে হলুদ 🌿
            </h3>
            <p className="font-bengali text-wedding-gold-light text-base">
              ৬ই ফেব্রুয়ারি, ২০২৬
            </p>
            <p className="font-bengali text-wedding-gold-light/80 text-sm">
              ২৩ মাঘ (সকাল)
            </p>
          </div>

          {/* Marriage */}
          <div className="bg-wedding-gold/15 backdrop-blur-sm rounded-lg px-6 py-4 border border-wedding-gold/40">
            <h3 className="font-bengali text-wedding-gold text-lg font-semibold mb-2">
              💒 শুভ বিবাহ 💒
            </h3>
            <p className="font-bengali text-wedding-gold-light/80 text-sm mb-2">
              বিবাহ বাসর: নিজ গৃহ
            </p>
            <p className="font-bengali text-wedding-gold-light text-base font-medium">
              সময়: ৭ ঘটিকা
            </p>
          </div>
        </div>

        {/* Venue */}
        <div className="text-center mt-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-wedding-gold/10 rounded-xl blur-xl" />
            <div className="relative bg-wedding-maroon-dark/50 backdrop-blur-sm rounded-xl px-6 py-5 border-2 border-wedding-gold/50">
              <p className="font-bengali text-wedding-gold-light text-sm mb-2">📍 স্থান 📍</p>
              <p className="font-bengali text-wedding-gold text-lg font-semibold">
                কাঁকসা, পানাগড়
              </p>
              <p className="font-bengali text-wedding-gold-light text-base">
                পশ্চিম বর্ধমান
              </p>
            </div>
          </div>
        </div>

        {/* Invitation text */}
        <div className="text-center mt-8 mb-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <p className="font-bengali text-wedding-gold-light/90 text-sm italic leading-relaxed px-4">
            আপনাদের শুভ আশীর্বাদ ও সপরিবারে উপস্থিতি 
            <br />
            আমাদের পরম কাম্য
          </p>
        </div>

        {/* Auspicious footer */}
        <div className="text-center mt-4 pb-6">
          <p className="font-bengali text-wedding-gold text-base animate-shimmer">
            ॥ শুভমস্তু ॥
          </p>
        </div>

        {/* Bottom Garland */}
        <div className="w-full mt-2 rotate-180 animate-sway">
          <img 
            src={marigoldGarland} 
            alt="" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingCard;
