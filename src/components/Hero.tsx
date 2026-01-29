"use client";

import React, { useState, useEffect } from "react";

const HERO_IMAGES = [
    "/hero-1.webp",
    "/hero-2.webp"
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Images Slider */}
            <div className="absolute inset-0 z-0">
                {HERO_IMAGES.map((image, index) => (
                    <div
                        key={image}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            alt={`Modern architecture visualization ${index + 1}`}
                            className="w-full h-full object-cover brightness-[0.4] dark:brightness-[0.3]"
                            src={image}
                        />
                    </div>
                ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl">
                <span className="text-primary text-xs uppercase tracking-[0.4em] font-semibold mb-6 block animate-pulse">
                    Established Excellence
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-8">
                    MULTI-DISCIPLINARY <br />
                    <span className="font-extralight italic">APPROACH</span>
                </h1>
                <p className="text-slate-300 text-sm md:text-base tracking-[0.3em] uppercase max-w-2xl mx-auto font-light leading-relaxed">
                    Creating efficient and innovative architectural solutions for over 24 years
                </p>

                {/* Decorative Lines / Indicators */}
                <div className="mt-12 flex justify-center items-center space-x-1">
                    {HERO_IMAGES.map((_, index) => (
                        <div
                            key={index}
                            className={`h-[1px] transition-all duration-500 ${index === currentImageIndex ? "w-12 bg-primary" : "w-4 bg-white/30"
                                }`}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
                <span className="material-icons text-3xl">expand_more</span>
            </div>
        </section>
    );
}
