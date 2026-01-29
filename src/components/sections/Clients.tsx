"use client";

import React from "react";

const CLIENTS = [
    "Hyundai SA",
    "Kia SA",
    "Renault SA",
    "Motus SA",
    "Robertson and Caine International Yachts",
    "2 Oceans Marine",
    "Xquisite Yachts",
    "De Villiers Graaf Properties Cape",
    "Morgan Bay Hotel",
    "Palm Tree Clinic",
    "Redefine Properties",
    "Growthpoint Properties",
    "Tile Africa",
    "IPS / Glenfairprop Properties",
    "Inospace (Pty) Ltd",
    "Artmar",
    "SA Legion",
    "MC Thompson",
    "Aspect Waterproofing",
    "Amaro Foods",
    "Wool Trust",
    "Bloubergridge School",
    "Waldorf School (Hermanus)",
    "Cape Waste",
    "S&G Signs",
    "South African National Defense Force"
];

export default function Clients() {
    return (
        <section className="py-24 px-6 bg-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto text-center">
                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3 block">[ Our Clients ]</span>
                <h2 className="text-3xl font-light mb-16 text-slate-900 tracking-widest uppercase transition-colors">Clients we&apos;ve worked with</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
                    {CLIENTS.map((client) => (
                        <div key={client} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-semibold tracking-tighter text-slate-900">{client}</span>
                        </div>
                    ))}
                </div>
                <p className="mt-16 text-slate-400 text-[10px] uppercase tracking-[0.2em]">And many more private & corporate clients across South Africa</p>
            </div>
        </section>
    );
}
