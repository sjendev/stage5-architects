import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export default function ProjectsPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Our Portfolio</span>
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-white transition-colors">PROJECTS</h1>
                        <p className="text-lg text-slate-300 font-light leading-relaxed transition-colors">
                            A curated collection of our architectural work spanning residential, commercial, industrial, and heritage projects across South Africa. Each project represents our commitment to design excellence and functional innovation.
                        </p>
                    </div>
                    <div className="mt-16 w-full h-[1px] bg-slate-100 dark:bg-zinc-800"></div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 px-6 bg-surface-light dark:bg-surface-dark transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
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

            {/* Info Section */}
            <section className="py-32 px-6 bg-white dark:bg-background-dark text-center border-t border-slate-100 dark:border-zinc-800 transition-colors duration-300">
                <div className="max-w-4xl mx-auto">
                    <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Interested in Our Work?</span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-12 text-slate-900 dark:text-white transition-colors">Let&apos;s Create Something Exceptional</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
                        <a className="text-slate-900 dark:text-white text-[11px] uppercase tracking-[0.3em] font-bold flex items-center group" href="tel:0824369882">
                            Call 082 436 9882
                            <span className="material-icons ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                        <span className="text-slate-400 font-light text-sm uppercase tracking-widest">or</span>
                        <a className="text-slate-900 dark:text-white text-[11px] uppercase tracking-[0.3em] font-bold flex items-center group" href="mailto:info@stage5.co.za">
                            Email Us
                            <span className="material-icons ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
