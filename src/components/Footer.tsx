"use client";

import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white py-20 px-6 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                        {/* Brand Column */}
                        <div>
                            <img
                                src="/logo.png"
                                alt="Stage 5 Architects"
                                className="h-12 md:h-14 w-auto mb-6"
                            />
                            <p className="text-zinc-500 text-[10px] leading-relaxed max-w-xs uppercase tracking-[0.2em]">
                                Creating timeless architecture across Africa since 2000.
                            </p>
                        </div>

                        {/* Contact Column */}
                        <div>
                            <span className="text-[10px] text-primary font-bold tracking-[0.3em] uppercase mb-8 block">Contact</span>
                            <div className="space-y-4 text-xs font-light text-zinc-400 tracking-wider">
                                <p className="flex items-center space-x-3">
                                    <span className="material-icons text-base text-zinc-600">phone</span>
                                    <span>082 436 9882</span>
                                </p>
                                <p className="flex items-center space-x-3">
                                    <span className="material-icons text-base text-zinc-600">email</span>
                                    <span>info@stage5.co.za</span>
                                </p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=6+C.P.+Brand+Avenue,+Melkbosstrand,+Cape+Town,+7437,+South+Africa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start space-x-3 hover:text-primary transition-colors group"
                                >
                                    <span className="material-icons text-base text-zinc-600 group-hover:text-primary transition-colors">location_on</span>
                                    <span>6 C.P. Brand Ave, Melkbosstrand, Cape Town, 7437</span>
                                </a>
                            </div>
                        </div>

                        {/* Navigation Column */}
                        <div>
                            <span className="text-[10px] text-primary font-bold tracking-[0.3em] uppercase mb-8 block">Navigation</span>
                            <div className="space-y-4 text-xs font-light text-zinc-400 tracking-wider uppercase">
                                <a className="block hover:text-primary transition-colors" href="/">Home</a>
                                <a className="block hover:text-primary transition-colors" href="/projects">Projects</a>
                                <a className="block hover:text-primary transition-colors" href="/services">Services</a>
                                <a className="block hover:text-primary transition-colors" href="/contact">Contact</a>
                            </div>
                        </div>

                        {/* Socials Column */}
                        <div>
                            <span className="text-[10px] text-primary font-bold tracking-[0.3em] uppercase mb-8 block">Socials</span>
                            <div className="flex space-x-4">
                                {[
                                    { name: "Facebook", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
                                    { name: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                                    { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791-4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }
                                ].map((social) => (
                                    <a key={social.name} className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group" href="#">
                                        <svg className="w-4 h-4 fill-current group-hover:text-white" viewBox="0 0 24 24">
                                            <path d={social.path}></path>
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} Stage 5 Architects. All Rights Reserved.</p>
                    <p className="mt-4 md:mt-0">Design & Excellence in Architecture</p>
                </div>
            </footer>

            {/* Marquee Section */}
            <div className="bg-zinc-950 overflow-hidden py-10 select-none pointer-events-none transition-colors duration-300">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center space-x-20 px-10">
                            <span className="text-6xl font-extralight tracking-[0.2em] uppercase text-white transition-colors">Architects</span>
                            <span className="text-6xl font-light tracking-[0.2em] uppercase text-white transition-colors">Stage 5</span>
                            <span className="text-6xl font-extralight tracking-[0.2em] uppercase text-white transition-colors">Architects</span>
                            <span className="text-6xl font-light tracking-[0.2em] uppercase text-white transition-colors">Stage 5</span>
                            <span className="text-6xl font-extralight tracking-[0.2em] uppercase text-white transition-colors">Architects</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
