"use client";

import React from "react";

const PROJECTS = [
    {
        category: "Hotel",
        title: "01. Morgan Bay Hotel",
        image: "/morgan-bay.gif"
    },
    {
        category: "Commercial",
        title: "02. Tile Africa",
        image: "/tile-africa.jpg"
    },
    {
        category: "Dealership",
        title: "03. Motus Centurion",
        image: "/motus-centurion.webp"
    },
    {
        category: "Dealership",
        title: "04. Renault / Kia Stikland",
        image: "/stikland.webp"
    },
    {
        category: "Dealership",
        title: "05. Hyundai The Glen Gauteng",
        image: "/hyundai-glen.webp"
    },
    {
        category: "Commercial",
        title: "06. Robertson & Caine",
        image: "/robertson-caine.webp"
    }
];

export default function Projects() {
    return (
        <section className="py-24 bg-surface-light px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3 block">[ Collection of Works ]</span>
                    <h2 className="text-4xl font-light text-slate-900 tracking-widest uppercase transition-colors">Projects</h2>
                    <div className="w-12 h-0.5 bg-primary mx-auto mt-6"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                    {PROJECTS.map((project) => (
                        <div key={project.title} className="group relative overflow-hidden aspect-[4/3] bg-black">
                            <img
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                src={project.image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h4 className="text-white text-lg font-light tracking-widest uppercase">{project.title}</h4>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
