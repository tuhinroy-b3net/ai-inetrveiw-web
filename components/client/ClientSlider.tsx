"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const clientData = [
    {
        img: "/images/man-image-1.png",
        name: "Kevin Knight",
        text: `When it comes to medicines, I'm quite conscious about what
    I'm taking... Pill Identifier and Drug List has made things
    easier for me by helping me know whatever I need to know
    about a drug before buying it... Great app!`,
        border: true,
    },
    {
        img: "/images/man-image-2.png",
        name: "Michelle Doe",
        text: `Nice and Innovative! Now whenever I visit a pharmacy to get
    a medicine, I search the drug on this app and show the
    barcode to the pharmacist.... and he finds the medicine
    instantly! Buying medicines is easy and fast now!`,
        border: false,
    },
];

const extendedData = [...clientData, ...clientData];

export default function ClientSlider() {
    return (
        <div className="clients-slider owl-carousel owl-theme">
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={false}
                grabCursor={true}
                allowTouchMove={true}
                simulateTouch={true}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                }}
            >
                {extendedData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={`item ${item.border ? "border-right" : ""}`}>
                            <div className="client-box">
                                <div className="iconbox-1">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={180}
                                        height={180}
                                    />
                                    <div className="stars ms-2">
                                        <h4>{item.name}</h4>
                                        <div className="stars-icon">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="textbox mt-3">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}