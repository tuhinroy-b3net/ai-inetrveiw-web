"use client";

import { useState, useEffect, useCallback } from "react";

const carouselData = [
    { img: "/images/mobile-apps-1.png" },
    { img: "/images/mobile-apps-7.png" },
    { img: "/images/mobile-apps-8.png" },
    { img: "/images/mobile-apps-9.png" },
    { img: "/images/pill-identifier.jpg" },
];

export default function Mobile3DCarousel() {
    const [currentIndex, setCurrentIndex] = useState(2);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // 🔥 FIX: no stale closure
    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // 🔥 FIXED AUTOPLAY (reliable loop)
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const getSlideStyle = (index: number) => {
        const diff = index - currentIndex;
        const totalSlides = carouselData.length;

        let normalizedDiff = diff;
        if (diff > totalSlides / 2) normalizedDiff = diff - totalSlides;
        if (diff < -totalSlides / 2) normalizedDiff = diff + totalSlides;

        const isActive = normalizedDiff === 0;
        const isLeft = normalizedDiff === -1;
        const isRight = normalizedDiff === 1;
        const isFarLeft = normalizedDiff === -2;
        const isFarRight = normalizedDiff === 2;

        let translateX = 0;
        let translateZ = 0;
        let rotateY = 0;
        let scale = 1;
        let opacity = 1;
        let zIndex = 10;

        if (isActive) {
            translateX = 0;
            translateZ = 200;
            rotateY = 0;
            scale = 1;
            zIndex = 30;
        } else if (isLeft) {
            translateX = -340;
            translateZ = -100;
            rotateY = 25;
            scale = 0.88;
            opacity = 0.95;
            zIndex = 20;
        } else if (isRight) {
            translateX = 340;
            translateZ = -100;
            rotateY = -25;
            scale = 0.88;
            opacity = 0.95;
            zIndex = 20;
        } else if (isFarLeft) {
            translateX = -620;
            translateZ = -300;
            rotateY = 35;
            scale = 0.75;
            opacity = 0.7;
            zIndex = 10;
        } else if (isFarRight) {
            translateX = 620;
            translateZ = -300;
            rotateY = -35;
            scale = 0.75;
            opacity = 0.7;
            zIndex = 10;
        } else {
            opacity = 0;
            scale = 0.5;
            zIndex = 0;
        }

        return {
            transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
            opacity,
            zIndex,
            transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        };
    };

    return (
        <section
            className="min-h-screen w-full flex flex-col items-center justify-center py-16 px-4 overflow-hidden relative mobile-slider"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="absolute inset-0 opacity-10">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative w-full max-w-7xl mx-auto" style={{ perspective: "1200px" }}>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] z-40 pointer-events-none">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 rounded-[50px] border border-gray-700 shadow-2xl">
                            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-10" />

                            <div className="absolute inset-[10px] rounded-[40px] overflow-hidden p-1 bg-white">
                                <img
                                    src={carouselData[currentIndex].img}
                                    alt="Mobile app screen"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="relative h-[650px] flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {carouselData.map((item, index) => {
                        const diff = index - currentIndex;
                        const totalSlides = carouselData.length;
                        let normalizedDiff = diff;
                        if (diff > totalSlides / 2) normalizedDiff = diff - totalSlides;
                        if (diff < -totalSlides / 2) normalizedDiff = diff + totalSlides;
                        const isCenter = normalizedDiff === 0;

                        return (
                            <div
                                key={index}
                                className="absolute cursor-pointer"
                                style={getSlideStyle(index)}
                                onClick={() => goToSlide(index)}
                            >
                                {!isCenter && (
                                    <div
                                        className="relative w-[280px] h-[560px] rounded-[35px] overflow-hidden shadow-2xl bg-white"
                                        style={{
                                            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)",
                                        }}
                                    >
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20" />
                                        <img
                                            src={item.img}
                                            alt={`App screen ${index + 1}`}
                                            className="w-full h-full pt-10"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="text-center mt-8 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wider uppercase">
                    Choose Your Search
                </h2>
                <p className="text-lg text-white/80 mb-1 font-normal">
                    Multiple Ways to Find Your Pill
                </p>
                <p className="text-gray-400 text-base">
                    Pill Identifier & Drug List - Patient Care Edition
                </p>
            </div>
        </section>
    );
}