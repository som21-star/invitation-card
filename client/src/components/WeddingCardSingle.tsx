import bengaliCouple from '@/assets/bengali-couple.png';
import weddingCoupleUploaded from '@/assets/wedding-couple-uploaded.png';
import marigoldGarland from '@/assets/marigold-garland.png';
import goldenCorner from '@/assets/golden-corner.png';
import OrnamentalDivider from './OrnamentalDivider';
import { BetelLeaf, Mukut, Topor, Dhunuchi } from './TraditionalElements';

const WeddingCardSingle = () => {
    return (
        <div className="relative w-full max-w-md mx-auto min-h-screen">
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

            {/* Traditional elements floating in background */}
            <div className="absolute top-20 left-2 w-12 h-16 animate-float opacity-60 z-5">
                <BetelLeaf className="w-full h-full" />
            </div>
            <div className="absolute top-32 right-2 w-12 h-16 animate-float opacity-60 z-5" style={{ animationDelay: '1s' }}>
                <BetelLeaf className="w-full h-full" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 flex flex-col items-center px-6 py-8 space-y-8">

                {/* Section 1: Welcome */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full -mt-2 mb-4 animate-sway">
                        <img src={marigoldGarland} alt="Marigold garland" className="w-full h-auto" />
                    </div>

                    <div className="text-center mb-4">
                        <p className="font-bengali text-wedding-gold text-base">॥ শ্রী শ্রী দুর্গা ॥</p>
                    </div>

                    <div className="relative mb-4">
                        <img
                            src={weddingCoupleUploaded}
                            alt="Wedding Couple"
                            className="w-64 h-auto mx-auto rounded-lg shadow-2xl border-4 border-wedding-gold/50 animate-float"
                        />
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                            <Mukut className="w-20 h-14" />
                        </div>
                    </div>

                    <h1 className="font-bengali-display text-wedding-gold text-4xl font-bold tracking-wide text-shadow-gold animate-shimmer mb-4">
                        শুভ বিবাহ
                    </h1>

                    <p className="font-bengali text-wedding-gold-light/80 text-sm mb-4">
                        স্বাগতম এই শুভ মিলনে
                    </p>
                </div>

                <OrnamentalDivider />

                {/* Section 2: English Invitation */}
                <div className="w-full bg-wedding-gold/10 backdrop-blur-sm rounded-xl px-6 py-6 border-2 border-wedding-gold/30 text-center">
                    <p className="text-wedding-gold-light text-xs mb-4 italic">
                        Shree Shree Prajapataye Namah
                    </p>

                    <p className="text-wedding-gold-light/90 text-sm leading-relaxed mb-4">
                        Mr. Sudarson Pathak and Mrs. Subarna Pathak cordially request
                        the pleasure of your gracious presence and blessing on the auspicious occasion of the wedding of their beloved daughter,
                    </p>

                    <div className="my-4">
                        <h2 className="text-wedding-gold text-2xl font-bold mb-2">Shatabdi</h2>
                        <p className="text-wedding-gold text-lg">weds</p>
                        <h2 className="text-wedding-gold text-2xl font-bold mt-2">Sourav</h2>
                    </div>

                    <p className="text-wedding-gold-light text-sm font-semibold mb-3">
                        Date of the Event: Friday, 06th February, 2026
                    </p>

                    <p className="text-wedding-gold-light/80 text-xs leading-relaxed mb-3">
                        Address: Kanksa Ganguly Para, Panagarh Bazar, Paschim Bardhaman, 713148
                    </p>

                    <p className="text-wedding-gold-light/70 text-xs italic">
                        Jaganath Pathak (Dada)
                    </p>
                </div>

                <OrnamentalDivider />

                {/* Section 3: Bride & Groom */}
                <div className="w-full flex flex-col items-center">
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
                    <div className="text-center w-full max-w-xs mb-3">
                        <div className="bg-wedding-gold/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-wedding-gold/30">
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
                </div>

                <OrnamentalDivider />

                {/* Section 4: Gaye Holud */}
                <div className="w-full flex flex-col items-center">
                    <div className="flex justify-center gap-6 mb-4">
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
                </div>

                <OrnamentalDivider />

                {/* Section 5: Bibaho (Wedding) */}
                <div className="w-full flex flex-col items-center">
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

                    <div className="text-center mt-4">
                        <p className="font-bengali text-wedding-gold-light text-sm mb-2">বিবাহ বাসর</p>
                        <p className="font-bengali text-wedding-gold text-base font-semibold">নিজ বাসভবন</p>
                    </div>

                    <div className="flex justify-center gap-4 mt-4">
                        <Topor className="w-10 h-16 animate-float" />
                        <Topor className="w-10 h-16 animate-float" style={{ animationDelay: '0.5s', transform: 'scaleX(-1)' }} />
                    </div>
                </div>

                <OrnamentalDivider />

                {/* Section 6: Venue & Closing */}
                <div className="w-full flex flex-col items-center">
                    <div className="relative bg-wedding-maroon-dark/50 backdrop-blur-sm rounded-xl px-6 py-5 border-2 border-wedding-gold/50 text-center max-w-xs mb-6">
                        <div className="mt-4">
                            <p className="font-bengali text-wedding-gold-light text-sm mb-2">📍 ঠিকানা 📍</p>
                            <p className="font-bengali text-wedding-gold text-lg font-bold">
                                কাঁকসা গাঙ্গুলী পাড়া
                            </p>
                            <p className="font-bengali text-wedding-gold-light text-base">
                                পানাগড় বাজার, পশ্চিম বর্ধমান
                            </p>
                            <p className="font-bengali text-wedding-gold-light/80 text-sm mt-2">
                                ৭১৩১৪৮
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mb-6">
                        <BetelLeaf className="w-8 h-12 animate-sway" />
                        <BetelLeaf className="w-8 h-12 animate-sway" style={{ animationDelay: '0.2s' }} />
                        <BetelLeaf className="w-8 h-12 animate-sway" style={{ animationDelay: '0.4s' }} />
                    </div>

                    <div className="text-center mb-6">
                        <p className="font-bengali text-wedding-gold-light/90 text-sm italic leading-relaxed px-4">
                            আপনাদের শুভ আশীর্বাদ ও সপরিবারে উপস্থিতি
                            <br />
                            আমাদের পরম কাম্য
                        </p>
                    </div>

                    <div className="text-center mb-6">
                        <p className="font-bengali text-wedding-gold text-lg animate-shimmer">॥ শুভমস্তু ॥</p>
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

export default WeddingCardSingle;
