"use client";

import { useEffect, useRef, useState } from "react";

const carouselData = [
  { img: "/images/mobile-apps-1.png" },
  { img: "/images/mobile-apps-2.png" },
  { img: "/images/mobile-apps-3.png" },
  { img: "/images/mobile-apps-4.png" },
  { img: "/images/mobile-apps-5.png" },
  { img: "/images/mobile-apps-6.png" },
  { img: "/images/mobile-apps-7.png" },
  { img: "/images/mobile-apps-8.png" },
];

export default function Mobile3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canControlSlider, setCanControlSlider] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const wasActiveRef = useRef(false);
  const lastScrollYRef = useRef(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let ticking = false;
  
    const checkSliderActivation = () => {
      if (!sectionRef.current) {
        setCanControlSlider(false);
        return;
      }
  
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
  
      const coversFullScreenHeight = sectionHeight >= viewportHeight;
  
      // more forgiving than exact 0 / viewportHeight match
      const ACTIVATION_OFFSET = 120;
  
      const fullyCoveringViewport =
        rect.top <= ACTIVATION_OFFSET &&
        rect.bottom >= viewportHeight - ACTIVATION_OFFSET;
  
      const shouldActivate =
        coversFullScreenHeight && fullyCoveringViewport;
  
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollYRef.current;
      const scrollingUp = currentScrollY < lastScrollYRef.current;
  
      if (shouldActivate && !wasActiveRef.current) {
        if (scrollingDown) {
          setCurrentIndex(0);
        } else if (scrollingUp) {
          setCurrentIndex(carouselData.length - 1);
        }
  
        document.body.style.overflow = "hidden";
      }
  
      if (!shouldActivate && wasActiveRef.current) {
        document.body.style.overflow = "auto";
      }
  
      wasActiveRef.current = shouldActivate;
      lastScrollYRef.current = currentScrollY;
      setCanControlSlider(shouldActivate);
    };
  
    const handleScroll = () => {
      if (ticking) return;
  
      ticking = true;
  
      requestAnimationFrame(() => {
        checkSliderActivation();
        ticking = false;
      });
    };
  
    checkSliderActivation();
  
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkSliderActivation);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkSliderActivation);
      document.body.style.overflow = "auto";
  
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!canControlSlider) return;

      const SCROLL_THRESHOLD = 30;
      if (Math.abs(e.deltaY) < SCROLL_THRESHOLD) return;

      e.preventDefault();

      if (isLocked) return;
      setIsLocked(true);

      if (e.deltaY > 0) {
        if (currentIndex < carouselData.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          document.body.style.overflow = "auto";
          wasActiveRef.current = false;

          window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        } else {
          document.body.style.overflow = "auto";
          wasActiveRef.current = false;

          window.scrollBy({
            top: -window.innerHeight,
            behavior: "smooth",
          });
        }
      }

      timeoutRef.current = setTimeout(() => {
        setIsLocked(false);
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [canControlSlider, currentIndex, isLocked]);

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
      translateX = 200;
      translateZ = 200;
      rotateY = 0;
      scale = 1;
      zIndex = 30;
    } else if (isLeft) {
      translateX = -340;
      translateZ = -100;
      rotateY = -25; 
    }
    
    else if (isRight) {
      translateX = 340;
      translateZ = -100;
      rotateY = 25; 
    }
    
    else if (isFarLeft) {
      translateX = -620;
      translateZ = -300;
      rotateY = -35; 
    }
    
    else if (isFarRight) {
      translateX = 620;
      translateZ = -300;
      rotateY = 35; 
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      transition: "",
    };
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden px-4 mobile-slider"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center">
        <div
          className="relative mx-auto w-full max-w-7xl"
          style={{ perspective: "1200px" }}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-40 h-[700px] w-[300px] -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-[90%] w-full p-5">
              <div
                className="phone-mockup absolute inset-0 shadow-2xl"
                style={{
                  backgroundImage: "url('/images/Phone-Mockup.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute left-1/2 top-5 z-10 h-3 w-12 -translate-x-1/2 rounded-full " />

                <div className="absolute inset-[10px] overflow-hidden rounded-[40px] ">
                  <img
                    src={carouselData[currentIndex].img}
                    alt="Mobile app screen"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative flex h-[650px] items-center justify-center"
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
                      className="relative h-[560px] w-[280px] overflow-hidden rounded-[35px]"
                      style={{
                        // backgroundImage: "url('/images/Phone-Mockup.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                       
                      }}
                      
                    >
                      {/* <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-xl" /> */}
                      <img
                        src={item.img}
                        alt={`App screen ${index + 1}`}
                        className="h-full w-full pt-10 opacity-50"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 mt-8 text-center">
          <h2 className="mb-3 text-3xl font-bold uppercase tracking-wider text-white md:text-4xl">
            Choose Your Search
          </h2>
          <p className="mb-1 text-lg font-normal text-white/80">
            Multiple Ways to Find Your Pill
          </p>
          <p className="text-base text-gray-400">
            Pill Identifier & Drug List - Patient Care Edition
          </p>
        </div>
      </div>
    </section>
  );
}