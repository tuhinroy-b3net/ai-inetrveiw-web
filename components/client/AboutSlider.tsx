"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const sliderData = [
    { img: "/images/about-icon-1.png", text: "Blood Pressure Measurement" },
    { img: "/images/about-icon-2.png", text: "Pulse Rate Measurement" },
    { img: "/images/about-icon-3.png", text: "Cholesterol Calculator" },
    { img: "/images/about-icon-4.png", text: "Blood Sugar Measurement" },
    { img: "/images/about-icon-5.png", text: "BMI Calculator" },
    { img: "/images/about-icon-6.png", text: "Disease Search" },
    { img: "/images/about-icon-7.png", text: "Drug Index" },
    { img: "/images/about-icon-8.png", text: "Store Prescription" },
    { img: "/images/about-icon-9.png", text: "Pill Reminder" },
    { img: "/images/about-icon-10.png", text: "Imprint Search" },
    { img: "/images/about-icon-11.png", text: "Drug Search" },
    { img: "/images/about-icon-12.png", text: "My Med List" },
    { img: "/images/about-icon-13.png", text: "Pill Identifier" },
];

export default function AboutSlider() {
    return (
        <div className="owl-carousel custom-slider">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                loop={true}
                grabCursor={true}
                allowTouchMove={true}
                simulateTouch={true}
                spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
            >
                {sliderData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="item">
                            <div className="card-box">
                                <div className="icon">
                                    <Image
                                        src={item.img}
                                        alt={item.text}
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}