"use client";

import React from "react";

const VALUES = [
    {
        title: "Ethics",
        description: "Our approach is based on transparency, equitability, humility and integrity. These values are intrinsic to our business and form the foundation of establishing long term relationships."
    },
    {
        title: "Drive",
        description: "We are driven by the challenge of creating spaces that perfectly balance form and function, pushing the boundaries of what is possible within every budget and site constraint."
    },
    {
        title: "Innovation",
        description: "By integrating the latest architectural technologies and sustainable practices, we deliver forward-thinking solutions that are both modern and respectful of context."
    }
];

export default function Values() {
    return (
        <section className="py-24 bg-surface-light px-6 border-t border-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3 block">[ Our Values ]</span>
                    <h2 className="text-3xl font-light text-slate-900 tracking-widest uppercase max-w-2xl mx-auto leading-tight transition-colors">
                        Architectural design that is purpose driven and value aligned
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {VALUES.map((value) => (
                        <div key={value.title} className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                            <h3 className="text-xl font-light uppercase tracking-widest mb-6 text-slate-900 transition-colors">{value.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-light transition-colors">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
