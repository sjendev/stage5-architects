"use client";

import React from "react";

const PHILOSOPHIES = [
    {
        number: "01",
        title: "Design that adds value",
        description: "Our architectural interventions are designed to maximize both aesthetic appeal and commercial viability for our clients.",
        image: "/hyundai-glen.webp"
    },
    {
        number: "02",
        title: "Design that endures",
        description: "Sustainable materials and timeless aesthetics ensure that our buildings remain relevant for decades to come.",
        image: "/robertson-caine.webp"
    },
    {
        number: "03",
        title: "Design that inspires",
        description: "Space is more than just four walls; it is an experience that should uplift and energize every occupant.",
        image: "/stikland.webp"
    }
];

export default function Philosophy() {
    return (
        <section className="py-24 bg-surface-light px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PHILOSOPHIES.map((item) => (
                        <div key={item.number} className="group relative overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:-translate-y-2">
                            <div className="h-64 overflow-hidden">
                                <img
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                    src={item.image}
                                />
                            </div>
                            <div className="p-8">
                                <span className="text-primary text-[10px] font-bold tracking-[0.2em] mb-3 block">{item.number}. PHILOSOPHY</span>
                                <h3 className="text-xl font-light tracking-wide uppercase mb-4 text-slate-900 transition-colors">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-light transition-colors">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
