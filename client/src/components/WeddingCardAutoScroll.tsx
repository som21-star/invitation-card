import { useEffect, useRef, useState } from 'react';
import bengaliCouple from '@/assets/bengali-couple.png';
import weddingCoupleUploaded from '@/assets/wedding-couple-uploaded.png';
import marigoldGarland from '@/assets/marigold-garland.png';
import goldenCorner from '@/assets/golden-corner.png';
import bengaliElements1 from '@/assets/bengali-elements-1.png';
import bengaliElements2 from '@/assets/bengali-elements-2.png';
import mangalKalash from '@/assets/mangal-kalash.png';
import goldenButterfly from '@/assets/golden-butterfly.png';
import OrnamentalDivider from './OrnamentalDivider';
import { BetelLeaf, Mukut, Topor, Dhunuchi } from './TraditionalElements';

const WeddingCardAutoScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Start animation after a short delay
        const startDelay = setTimeout(() => {
            setIsAnimating(true);
        }, 1000);

        return () => clearTimeout(startDelay);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-md mx-auto h-screen overflow-hidden"
        >
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

            {/* Floating Bengali elements */}
            <div className="absolute top-16 left-4 w-16 h-16 animate-float opacity-70 z-5">
                <img src={goldenButterfly} alt="" className="w-full h-full" />
            </div>
            <div className="absolute top-24 right-4 w-16 h-16 animate-float opacity-70 z-5" style={{ animationDelay: '1s' }}>
                <img src={goldenButterfly} alt="" className="w-full h-full" />
            </div>
            <div className="absolute bottom-32 left-2 w-12 h-16 animate-float opacity-60 z-5">
                <BetelLeaf className="w-full h-full" />
            </div>
            <div className="absolute bottom-40 right-2 w-12 h-16 animate-float opacity-60 z-5" style={{ animationDelay: '0.5s' }}>
                <BetelLeaf className="w-full h-full" />
            </div>

            {/* Auto-scrolling content container */}
            <div
                className={`relative z-20 flex flex-col items-center px-6 py-8 space-y-8 transition-transform duration-[75000ms] ease-linear ${isAnimating ? '-translate-y-[calc(100%-100vh)]' : 'translate-y-0'
                    }`}
                style={{ minHeight: 'max-content' }}
            >

                {/* Section 1: Welcome */}
                <div className="w-full flex flex-col items-center min-h-screen justify-center">
                    <div className="w-full -mt-2 mb-6 animate-sway">
                        <img src={marigoldGarland} alt="Marigold garland" className="w-full h-auto" />
                    </div>

                    <div className="text-center mb-6">
                        <p className="font-bengali text-wedding-gold text-lg">॥ শ্রী শ্রী দুর্গা ॥</p>
                    </div>

                    <div className="relative mb-6">
                        <img
                            src={weddingCoupleUploaded}
                            alt="Wedding Couple"
                            className="w-72 h-auto mx-auto rounded-lg shadow-2xl border-4 border-wedding-gold/50 animate-float"
                        />
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <Mukut className="w-24 h-16" />
                        </div>
                    </div>

                    <h1 className="font-bengali-display text-wedding-gold text-5xl font-bold tracking-wide text-shadow-gold animate-shimmer mb-6">
                        শুভ বিবাহ
                    </h1>

                    <p className="font-bengali text-wedding-gold-light/80 text-base mb-6">
                        স্বাগতম এই শুভ মিলনে
                    </p>

                    {/* Bengali decorative elements */}
                    <div className="flex justify-center gap-8 mt-4">
                        <img src={bengaliElements2} alt="" className="w-16 h-24 opacity-80 animate-float" />
                        <img src={mangalKalash} alt="" className="w-16 h-24 opacity-80 animate-float" style={{ animationDelay: '0.5s' }} />
                    </div>
                </div>

                <OrnamentalDivider />

                {/* Section 2: English Invitation */}
                <div className="w-full min-h-screen flex flex-col justify-center">
                    <div className="bg-wedding-gold/10 backdrop-blur-sm rounded-xl px-8 py-8 border-2 border-wedding-gold/30 text-center">
                        <p className="text-wedding-gold-light text-sm mb-6 italic">
                            Shree Shree Prajapataye Namah
                        </p>

                        <p className="text-wedding-gold-light/90 text-base leading-relaxed mb-6">
                            Mr. Sudarson Pathak and Mrs. Subarna Pathak cordially request
                            the pleasure of your gracious presence and blessing on the auspicious occasion of the wedding of their beloved daughter,
                        </p>

                        <div className="my-6">
                            <h2 className="text-wedding-gold text-3xl font-bold mb-3">Shatabdi</h2>
                            <p className="text-wedding-gold text-xl mb-3">weds</p>
                            <h2 className="text-wedding-gold text-3xl font-bold">Sourav</h2>
                        </div>

                        <div className="flex justify-center gap-6 my-6">
                            <img src={goldenButterfly} alt="" className="w-12 h-12 opacity-70" />
                            <img src={goldenButterfly} alt="" className="w-12 h-12 opacity-70" />
                        </div>

                        <p className="text-wedding-gold-light text-base font-semibold mb-4">
                            Date of the Event: Friday, 06th February, 2026
                        </p>

                        <p className="text-wedding-gold-light/80 text-sm leading-relaxed mb-4">
                            Address: Kanksa Ganguly Para, Panagarh Bazar, Paschim Bardhaman, 713148
                        </p>

                        <p className="text-wedding-gold-light/70 text-sm italic">
                            Jaganath Pathak (Dada)
                        </p>
                    </div>
                </div>

                <OrnamentalDivider />

                {/* Section 3: Bride & Groom */}
                <div className="w-full min-h-screen flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center gap-6 mb-6">
                        <Topor className="w-14 h-24 animate-float" />
                        <img src={bengaliElements1} alt="" className="w-20 h-32 opacity-80 animate-float" style={{ animationDelay: '0.3s' }} />
                        <Mukut className="w-18 h-14 animate-float" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-wedding-gold/20 rounded-full blur-2xl" />
                        <img
                            src={bengaliCouple}
                            alt="Bengali Wedding Couple"
                            className="relative w-52 h-auto rounded-lg shadow-2xl border-4 border-wedding-gold/50 animate-float"
                        />
                    </div>

                    {/* Bride */}
                    <div className="text-center w-full max-w-xs mb-4">
                        <div className="bg-wedding-gold/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-wedding-gold/30">
                            <p className="font-bengali text-wedding-gold-light text-base mb-2">পাত্রী</p>
                            <h2 className="font-bengali-display text-wedding-gold text-2xl font-bold mb-2">শতাব্দী পাঠক</h2>
                            <p className="font-bengali text-wedding-gold-light/80 text-sm">পিতা: সুদর্শন পাঠক | মাতা: সুবর্ণা পাঠক</p>
                            <p className="font-bengali text-wedding-gold-light/80 text-sm">ভ্রাতা: জগন্নাথ পাঠক</p>
                        </div>
                    </div>

                    <p className="font-bengali text-wedding-gold text-2xl animate-sparkle my-4">❤️ এবং ❤️</p>

                    {/* Groom */}
                    <div className="text-center w-full max-w-xs">
                        <div className="bg-wedding-gold/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-wedding-gold/30">
                            <p className="font-bengali text-wedding-gold-light text-base mb-2">পাত্র</p>
                            <h2 className="font-bengali-display text-wedding-gold text-2xl font-bold mb-2">সৌরভ কেশ</h2>
                            <p className="font-bengali text-wedding-gold-light/80 text-sm">পিতা: রাম নারায়ণ কেশ | মাতা: সুজাতা কেশ</p>
                        </div>
                    </div>
                </div>

                <OrnamentalDivider />

                {/* Section 4: Gaye Holud */}
                <div className="w-full min-h-screen flex flex-col items-center justify-center">
                    <div className="flex justify-center gap-8 mb-6">
                        <BetelLeaf className="w-12 h-16 animate-sway" />
                        <BetelLeaf className="w-12 h-16 animate-sway" style={{ animationDelay: '0.3s' }} />
                        <BetelLeaf className="w-12 h-16 animate-sway" style={{ animationDelay: '0.6s' }} />
                    </div>

                    <div className="bg-wedding-gold/15 backdrop-blur-sm rounded-xl px-10 py-8 border-2 border-wedding-orange/50 text-center max-w-sm">
                        <h3 className="font-bengali-display text-wedding-orange text-3xl font-bold mb-6">
                            🌿 গায়ে হলুদ 🌿
                        </h3>

                        <div className="space-y-3">
                            <p className="font-bengali text-wedding-gold text-xl font-semibold">
                                ২৩শে মাঘ, ১৪৩২ সাল
                            </p>
                            <p className="font-bengali text-wedding-gold-light text-lg">
                                ৬ই ফেব্রুয়ারি ২০২৬
                            </p>
                            <p className="font-bengali text-wedding-orange text-lg font-medium">
                                সকালবেলা
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center gap-6">
                        <Dhunuchi className="w-12 h-20 animate-float" />
                        <img src={mangalKalash} alt="" className="w-12 h-20 opacity-80 animate-float" style={{ animationDelay: '0.3s' }} />
                        <Dhunuchi className="w-12 h-20 animate-float" style={{ animationDelay: '0.5s' }} />
                    </div>
                </div>

                <OrnamentalDivider />

                {/* Section 5: Bibaho (Wedding) */}
                <div className="w-full min-h-screen flex flex-col items-center justify-center">
                    <div className="flex justify-center mb-6">
                        <img src={bengaliElements1} alt="" className="w-28 h-36 opacity-80 animate-shimmer" />
                    </div>

                    <div className="bg-wedding-gold/15 backdrop-blur-sm rounded-xl px-10 py-8 border-2 border-wedding-gold/50 text-center max-w-sm">
                        <h3 className="font-bengali-display text-wedding-gold text-3xl font-bold mb-6">
                            💒 শুভ বিবাহ 💒
                        </h3>

                        <div className="space-y-3">
                            <p className="font-bengali text-wedding-gold text-xl font-semibold">
                                ২৩শে মাঘ, ১৪৩২ সাল
                            </p>
                            <p className="font-bengali text-wedding-gold-light text-lg">
                                ৬ই ফেব্রুয়ারি ২০২৬
                            </p>
                            <p className="font-bengali text-wedding-gold text-xl font-bold mt-4">
                                সন্ধ্যা ৭ ঘটিকায়
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <p className="font-bengali text-wedding-gold-light text-base mb-2">বিবাহ বাসর</p>
                        <p className="font-bengali text-wedding-gold text-lg font-semibold">নিজ বাসভবন</p>
                    </div>

                    <div className="flex justify-center gap-6 mt-6">
                        <Topor className="w-12 h-20 animate-float" />
                        <img src={goldenButterfly} alt="" className="w-14 h-14 opacity-80 animate-float" style={{ animationDelay: '0.3s' }} />
                        <Topor className="w-12 h-20 animate-float" style={{ animationDelay: '0.5s', transform: 'scaleX(-1)' }} />
                    </div>
                </div>

                <OrnamentalDivider />

                {/* Section 6: Venue & Closing */}
                <div className="w-full min-h-screen flex flex-col items-center justify-center pb-16">
                    <div className="relative bg-wedding-maroon-dark/50 backdrop-blur-sm rounded-xl px-8 py-8 border-2 border-wedding-gold/50 text-center max-w-sm mb-8">
                        <div className="mt-4">
                            <p className="font-bengali text-wedding-gold-light text-base mb-3">📍 ঠিকানা 📍</p>
                            <p className="font-bengali text-wedding-gold text-2xl font-bold mb-2">
                                কাঁকসা গাঙ্গুলী পাড়া
                            </p>
                            <p className="font-bengali text-wedding-gold-light text-lg mb-2">
                                পানাগড় বাজার, পশ্চিম বর্ধমান
                            </p>
                            <p className="font-bengali text-wedding-gold-light/80 text-base">
                                ৭১৩১৪৮
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mb-8">
                        <BetelLeaf className="w-10 h-14 animate-sway" />
                        <img src={mangalKalash} alt="" className="w-10 h-16 opacity-80 animate-sway" style={{ animationDelay: '0.2s' }} />
                        <BetelLeaf className="w-10 h-14 animate-sway" style={{ animationDelay: '0.4s' }} />
                    </div>

                    <div className="text-center mb-8">
                        <p className="font-bengali text-wedding-gold-light/90 text-base italic leading-relaxed px-6">
                            আপনাদের শুভ আশীর্বাদ ও সপরিবারে উপস্থিতি
                            <br />
                            আমাদের পরম কাম্য
                        </p>
                    </div>

                    <div className="flex justify-center gap-8 mb-8">
                        <img src={goldenButterfly} alt="" className="w-16 h-16 opacity-70 animate-float" />
                        <img src={goldenButterfly} alt="" className="w-16 h-16 opacity-70 animate-float" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <div className="text-center mb-8">
                        <p className="font-bengali text-wedding-gold text-2xl animate-shimmer">॥ শুভমস্তু ॥</p>
                    </div>

                    <div className="w-full rotate-180 animate-sway">
                        <img src={marigoldGarland} alt="" className="w-full h-auto" />
                    </div>
                </div>

                {/* Bottom corner decorations */}
                <img src={goldenCorner} alt="" className="absolute bottom-0 left-0 w-24 h-24 opacity-80 -scale-y-100 z-10" />
                <img src={goldenCorner} alt="" className="absolute bottom-0 right-0 w-24 h-24 opacity-80 -scale-x-100 -scale-y-100 z-10" />
            </div>
        </div>
    );
};

export default WeddingCardAutoScroll;
