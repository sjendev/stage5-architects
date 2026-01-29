"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                {/* Logo - Left */}
                <Link href="/" className="flex-shrink-0 h-full py-2.5">
                    <img
                        src="/logo.png"
                        alt="Stage 5 Architects"
                        className="h-full w-auto transition-all block"
                    />
                </Link>

                {/* Navigation - Center */}
                <nav className="hidden lg:flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium text-white">
                    <Link href="/" className={`hover:text-primary transition-colors ${pathname === "/" ? "text-primary" : ""}`}>
                        Home
                    </Link>
                    <Link href="/projects" className={`hover:text-primary transition-colors ${pathname === "/projects" ? "text-primary" : ""}`}>
                        Projects
                    </Link>
                    <Link href="/services" className={`hover:text-primary transition-colors ${pathname === "/services" ? "text-primary" : ""}`}>
                        Services
                    </Link>
                    <Link href="/contact" className={`hover:text-primary transition-colors ${pathname === "/contact" ? "text-primary" : ""}`}>
                        Contact
                    </Link>
                </nav>

                {/* Phone - Right */}
                <div className="flex items-center space-x-8">
                    <div className="hidden lg:flex flex-col items-end text-[10px] uppercase tracking-[0.2em] font-medium text-slate-500">
                        <span>Phone Us</span>
                        <span className="text-white transition-colors">082 436 9882</span>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <button className="lg:hidden text-white focus:outline-none relative z-[70]" onClick={toggleMenu}>
                        <span className="material-icons text-3xl">{isMenuOpen ? "close" : "menu"}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 h-screen w-screen z-[60] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} lg:hidden`}>
                <nav className="flex flex-col space-y-12 text-center">
                    <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-3xl uppercase tracking-[0.3em] font-extralight transition-colors ${pathname === "/" ? "text-primary" : "text-white hover:text-primary"}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-3xl uppercase tracking-[0.3em] font-extralight transition-colors ${pathname === "/projects" ? "text-primary" : "text-white hover:text-primary"}`}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-3xl uppercase tracking-[0.3em] font-extralight transition-colors ${pathname === "/services" ? "text-primary" : "text-white hover:text-primary"}`}
                    >
                        Services
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-3xl uppercase tracking-[0.3em] font-extralight transition-colors ${pathname === "/contact" ? "text-primary" : "text-white hover:text-primary"}`}
                    >
                        Contact
                    </Link>
                </nav>

                <div className="mt-16 text-center">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-4">Inquiries</p>
                    <a href="tel:0824369882" className="text-xl text-white font-light tracking-widest hover:text-primary transition-colors">082 436 9882</a>
                    <div className="mt-4">
                        <a href="mailto:info@stage5.co.za" className="text-[10px] uppercase tracking-[0.2em] text-primary hover:underline">info@stage5.co.za</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
