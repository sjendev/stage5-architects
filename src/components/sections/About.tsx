"use client";

import React from "react";

export default function About() {
    return (
        <section className="py-24 px-6 bg-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Founder & Principal</span>
                        <h2 className="text-4xl font-light mb-8 text-slate-900 tracking-tight transition-colors">Simon Pfotenhauer</h2>
                        <div className="space-y-6 text-slate-600 font-light leading-relaxed transition-colors">
                            <p>For over 24 years, Stage 5 Architects, led by founder and principal Simon Pfotenhauer, have been delivering innovative architectural solutions across residential, commercial, and hospitality sectors.</p>
                            <p>We believe in design with a purpose — sustainable, creative, unique, and enduring. Our practice specialises in bespoke new designs, renovations, historically sensitive architecture, commercial and office buildings.</p>
                        </div>
                        <div className="mt-10 grid grid-cols-2 gap-8 pt-10 border-t border-slate-100 transition-colors">
                            <div>
                                <span className="text-[10px] text-primary font-bold uppercase tracking-widest block mb-1">[ Associate ]</span>
                                <p className="text-sm font-medium text-slate-950 transition-colors">Deon Deetlefs</p>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">B Arch (Pret)/ Pr Arch/ MSACAP</p>
                            </div>
                            <div>
                                <span className="text-[10px] text-primary font-bold uppercase tracking-widest block mb-1">[ Staff ]</span>
                                <p className="text-sm font-medium text-slate-950 transition-colors">Jene Cacchione</p>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Design Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative group">
                        <div className="absolute -inset-4 border border-slate-100 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                        <img
                            alt="Simon Pfotenhauer"
                            className="w-full h-[500px] object-cover"
                            src="/simon.webp"
                        />
                        <div className="absolute bottom-0 left-0 bg-primary text-white p-4 md:p-6 translate-x-4 -translate-y-4">
                            <div className="flex items-center space-x-8">
                                <div className="text-center">
                                    <p className="text-2xl font-light">24+</p>
                                    <p className="text-[8px] uppercase tracking-widest opacity-80 mt-1 whitespace-nowrap">Years Experience</p>
                                </div>
                                <div className="w-[1px] h-8 bg-white/20"></div>
                                <div className="text-center">
                                    <p className="text-2xl font-light">150+</p>
                                    <p className="text-[8px] uppercase tracking-widest opacity-80 mt-1 whitespace-nowrap">Projects Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
