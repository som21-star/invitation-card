import { useEffect, useRef, useState, useCallback } from 'react';
import bengaliCouple from '@/assets/bengali-couple.png';
import weddingCoupleUploaded from '@/assets/wedding-couple-uploaded.png';
import marigoldGarland from '@/assets/marigold-garland.png';
import goldenCorner from '@/assets/golden-corner.png';
import bengaliElements1 from '@/assets/bengali-elements-1.png';
import bengaliElements2 from '@/assets/bengali-elements-2.png';
import mangalKalash from '@/assets/mangal-kalash.png';
import goldenButterfly from '@/assets/golden-butterfly.png';
import gayeHoludDecor from '@assets/wmremove-transformed_(2)_1768968359572.png';
import OrnamentalDivider from './OrnamentalDivider';
import { BetelLeaf, Mukut, Topor, Dhunuchi } from './TraditionalElements';

const WeddingCardAutoScroll = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const slideDurations = [8000, 10000, 10000, 8000, 8000, 10000];
    const totalSlides = 6;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, slideDurations[currentSlide]);

        return () => clearTimeout(timer);
    }, [currentSlide, nextSlide]);

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-md mx-auto h-screen overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-maroon" />

            <div className="absolute inset-0 opacity-10 bg-repeat" style={{
                backgroundImage: `radial-gradient(circle, hsl(45, 100%, 50%) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
            }} />

            <img src={goldenCorner} alt="" className="absolute top-0 left-0 w-24 h-24 opacity-80 z-10" />
            <img src={goldenCorner} alt="" className="absolute top-0 right-0 w-24 h-24 opacity-80 -scale-x-100 z-10" />
            <img src={goldenCorner} alt="" className="absolute bottom-0 left-0 w-24 h-24 opacity-80 -scale-y-100 z-10" />
            <img src={goldenCorner} alt="" className="absolute bottom-0 right-0 w-24 h-24 opacity-80 -scale-x-100 -scale-y-100 z-10" />

            <div className="absolute top-16 left-4 w-16 h-16 animate-float opacity-70 z-5">
                <img src={goldenButterfly} alt="" className="w-full h-full" />
            </div>
            <div className="absolute top-24 right-4 w-16 h-16 animate-float opacity-70 z-5" style={{ animationDelay: '1s' }}>
                <img src={goldenButterfly} alt="" className="w-full h-full" />
            </div>

            <div
                className="relative z-20 flex h-full transition-transform duration-1000 ease-in-out"
                style={{ width: `${totalSlides * 100}%`, transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}
            >
                {/* Section 1: Welcome */}
                <div className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center px-6 py-8" style={{ width: `${100 / totalSlides}%` }}>
                    <div className="w-full -mt-2 mb-4 animate-sway">
                        <img src={marigoldGarland} alt="Marigold garland" className="w-full h-auto" />
                    </div>

                    <div className="text-center mb-4">
                        <p className="font-bengali text-[#FFD700] text-lg drop-shadow-lg">॥ শ্রী শ্রী দুর্গা ॥</p>
                    </div>

                    <div className="relative mb-4">
                        <img
                            src={weddingCoupleUploaded}
                            alt="Wedding Couple"
                            className="w-56 h-auto mx-auto rounded-lg shadow-2xl border-4 border-[#FFD700]/50 animate-float"
                        />
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <Mukut className="w-24 h-16" />
                        </div>
                    </div>

                    <h1 className="font-bengali-display text-[#FFD700] text-4xl font-bold tracking-wide drop-shadow-lg animate-shimmer mb-4">
                        শুভ বিবাহ
                    </h1>

                    <p className="font-bengali text-[#FFEAA7] text-base mb-4">
                        স্বাগতম এই শুভ মিলনে
                    </p>

                    <div className="flex justify-center gap-8">
                        <img src={bengaliElements2} alt="" className="w-14 h-20 opacity-80 animate-float" />
                        <img src={mangalKalash} alt="" className="w-14 h-20 opacity-80 animate-float" style={{ animationDelay: '0.5s' }} />
                    </div>
                </div>

                {/* Section 2: English Invitation */}
                <div className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center px-6 py-8" style={{ width: `${100 / totalSlides}%` }}>
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl px-6 py-6 border-2 border-[#FFD700]/40 text-center max-w-sm">
                        <p className="text-[#FFEAA7] text-sm mb-4 italic">
                            Shree Shree Prajapataye Namah
                        </p>

                        <p className="text-[#FFEAA7] text-sm leading-relaxed mb-4">
                            Mr. Sudarson Pathak and Mrs. Subarna Pathak cordially request
                            the pleasure of your gracious presence and blessing on the auspicious occasion of the wedding of their beloved daughter,
                        </p>

                        <div className="my-4">
                            <h2 className="text-[#FFD700] text-2xl font-bold mb-2">Shatabdi</h2>
                            <p className="text-[#FFD700] text-lg mb-2">weds</p>
                            <h2 className="text-[#FFD700] text-2xl font-bold">Sourav</h2>
                        </div>

                        <div className="flex justify-center gap-6 my-4">
                            <img src={goldenButterfly} alt="" className="w-10 h-10 opacity-70" />
                            <img src={goldenButterfly} alt="" className="w-10 h-10 opacity-70" />
                        </div>

                        <p className="text-[#FFD700] text-sm font-semibold mb-3">
                            Date of the Event: Friday, 06th February, 2026
                        </p>

                        <p className="text-[#FFEAA7] text-xs leading-relaxed mb-3">
                            Address: Kanksa Ganguly Para, Panagarh Bazar, Paschim Bardhaman, 713148
                        </p>

                        <p className="text-[#FFEAA7]/80 text-xs italic">
                            Jaganath Pathak (Dada)
                        </p>
                    </div>
                </div>

                {/* Section 3: Bride & Groom */}
                <div className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center px-6 py-8" style={{ width: `${100 / totalSlides}%` }}>
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <Topor className="w-12 h-20 animate-float" />
                        <Mukut className="w-16 h-12 animate-float" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-2xl" />
                        <img
                            src={bengaliCouple}
                            alt="Bengali Wedding Couple"
                            className="relative w-40 h-auto rounded-lg shadow-2xl border-4 border-[#FFD700]/50 animate-float"
                        />
                    </div>

                    <div className="text-center w-full max-w-xs mb-3">
                        <div className="bg-black/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-[#FFD700]/40">
                            <p className="font-bengali text-[#FFEAA7] text-sm mb-1">পাত্রী</p>
                            <h2 className="font-bengali-display text-[#FFD700] text-xl font-bold mb-1">শতাব্দী পাঠক</h2>
                            <p className="font-bengali text-[#FFEAA7] text-xs">পিতা: সুদর্শন পাঠক | মাতা: সুবর্ণা পাঠক</p>
                            <p className="font-bengali text-[#FFEAA7] text-xs">ভ্রাতা: জগন্নাথ পাঠক</p>
                        </div>
                    </div>

                    <p className="font-bengali text-[#FFD700] text-xl animate-sparkle my-2">এবং</p>

                    <div className="text-center w-full max-w-xs">
                        <div className="bg-black/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-[#FFD700]/40">
                            <p className="font-bengali text-[#FFEAA7] text-sm mb-1">পাত্র</p>
                            <h2 className="font-bengali-display text-[#FFD700] text-xl font-bold mb-1">সৌরভ কেশ</h2>
                            <p className="font-bengali text-[#FFEAA7] text-xs">পিতা: রাম নারায়ণ কেশ | মাতা: সুজাতা কেশ</p>
                        </div>
                    </div>
                </div>

                {/* Section 4: Gaye Holud */}
                <div className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center px-6 py-8" style={{ width: `${100 / totalSlides}%` }}>
                    <div className="mb-4 bg-[#6B1B1B] rounded-lg p-2">
                        <img 
                            src={gayeHoludDecor} 
                            alt="Gaye Holud Decor" 
                            className="w-32 h-auto mx-auto animate-float"
                            style={{ mixBlendMode: 'lighten' }}
                        />
                    </div>

                    <div className="bg-black/20 backdrop-blur-sm rounded-xl px-8 py-6 border-2 border-[#FFA500]/50 text-center max-w-sm">
                        <h3 className="font-bengali-display text-[#FFA500] text-2xl font-bold mb-4">
                            গায়ে হলুদ
                        </h3>

                        <div className="space-y-2">
                            <p className="font-bengali text-[#FFD700] text-lg font-semibold">
                                ২৩শে মাঘ, ১৪৩২ সাল
                            </p>
                            <p className="font-bengali text-[#FFEAA7] text-base">
                                ৬ই ফেব্রুয়ারি ২০২৬
                            </p>
                            <p className="font-bengali text-[#FFA500] text-base font-medium">
                                সকালবেলা
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center gap-6">
                        <Dhunuchi className="w-10 h-16 animate-float" />
                        <img src={mangalKalash} alt="" className="w-10 h-16 opacity-80 animate-float" style={{ animationDelay: '0.3s' }} />
                        <Dhunuchi className="w-10 h-16 animate-float" style={{ animationDelay: '0.5s' }} />
                    </div>
                </div>

                {/* Section 5: Bibaho (Wedding) */}
                <div className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center px-6 py-8" style={{ width: `${100 / totalSlides}%` }}>
                    <div className="flex justify-center mb-4">
                        <img src={bengaliElements1} alt="" className="w-24 h-32 opacity-80 animate-shimmer" />
                    </div>

                    <div className="bg-black/20 backdrop-blur-sm rounded-xl px-8 py-6 border-2 border-[#FFD700]/50 text-center max-w-sm">
                        <h3 className="font-bengali-display text-[#FFD700] text-2xl font-bold mb-4">
                            শুভ বিবাহ
                        </h3>

                        <div className="space-y-2">
                            <p className="font-bengali text-[#FFD700] text-lg font-semibold">
                                ২৩শে মাঘ, ১৪৩২ সাল
                            </p>
                            <p className="font-bengali text-[#FFEAA7] text-base">
                                ৬ই ফেব্রুয়ারি ২০২৬
                            </p>
                            <p className="font-bengali text-[#FFD700] text-lg font-bold mt-3">
                                সন্ধ্যা ৭ ঘটিকায়
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <p className="font-bengali text-[#FFEAA7] text-sm mb-1">বিবাহ বাসর</p>
                        <p className="font-bengali text-[#FFD700] text-base font-semibold">নিজ বাসভবন</p>
                    </div>

                    <div className="flex justify-center gap-6 mt-4">
                        <Topor className="w-10 h-16 animate-float" />
                        <img src={goldenButterfly} alt="" className="w-12 h-12 opacity-80 animate-float" style={{ animationDelay: '0.3s' }} />
                        <Topor className="w-10 h-16 animate-float" style={{ animationDelay: '0.5s', transform: 'scaleX(-1)' }} />
                    </div>
                </div>

                {/* Section 6: Venue & Closing */}
                <div className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center px-6 py-8" style={{ width: `${100 / totalSlides}%` }}>
                    <div className="relative bg-black/30 backdrop-blur-sm rounded-xl px-6 py-6 border-2 border-[#FFD700]/50 text-center max-w-sm mb-6">
                        <div>
                            <p className="font-bengali text-[#FFEAA7] text-sm mb-2">ঠিকানা</p>
                            <p className="font-bengali text-[#FFD700] text-xl font-bold mb-1">
                                কাঁকসা গাঙ্গুলী পাড়া
                            </p>
                            <p className="font-bengali text-[#FFEAA7] text-base mb-1">
                                পানাগড় বাজার, পশ্চিম বর্ধমান
                            </p>
                            <p className="font-bengali text-[#FFEAA7] text-sm">
                                ৭১৩১৪৮
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mb-4">
                        <BetelLeaf className="w-8 h-12 animate-sway" />
                        <img src={mangalKalash} alt="" className="w-8 h-14 opacity-80 animate-sway" style={{ animationDelay: '0.2s' }} />
                        <BetelLeaf className="w-8 h-12 animate-sway" style={{ animationDelay: '0.4s' }} />
                    </div>

                    <div className="text-center mb-4">
                        <p className="font-bengali text-[#FFEAA7] text-sm italic leading-relaxed px-4">
                            আপনাদের শুভ আশীর্বাদ ও সপরিবারে উপস্থিতি
                            <br />
                            আমাদের পরম কাম্য
                        </p>
                    </div>

                    <div className="flex justify-center gap-6 mb-4">
                        <img src={goldenButterfly} alt="" className="w-14 h-14 opacity-70 animate-float" />
                        <img src={goldenButterfly} alt="" className="w-14 h-14 opacity-70 animate-float" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <div className="text-center mb-4">
                        <p className="font-bengali text-[#FFD700] text-xl animate-shimmer">॥ শুভমস্তু ॥</p>
                    </div>

                    <div className="w-full rotate-180 animate-sway">
                        <img src={marigoldGarland} alt="" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {Array.from({ length: totalSlides }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === currentSlide ? 'bg-[#FFD700] w-6' : 'bg-[#FFD700]/40'
                        }`}
                        data-testid={`slide-dot-${i}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default WeddingCardAutoScroll;
