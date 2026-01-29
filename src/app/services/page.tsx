import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">What We Do</span>
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-white transition-colors">SERVICES</h1>
                        <p className="text-lg text-slate-300 font-light leading-relaxed transition-colors">
                            With over 24 years of experience, we provide a full spectrum of architectural services across South Africa. Our approach combines technical precision with creative vision to deliver spaces that add value to every client.
                        </p>
                    </div>
                    <div className="mt-16 w-full h-[1px] bg-slate-100 dark:bg-zinc-800"></div>
                </div>
            </section>

            {/* Residential */}
            <section className="py-20 px-6 bg-white dark:bg-background-dark overflow-hidden transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">01 / Portfolio</span>
                            <h2 className="text-4xl font-light tracking-widest uppercase mb-10 text-slate-900 dark:text-white transition-colors">Residential</h2>
                            <div className="space-y-8 text-slate-600 dark:text-slate-400 font-light transition-colors">
                                <p className="text-lg leading-relaxed">We specialize in bespoke high-end residential architecture that responds to its natural context while providing ultimate comfort and efficiency.</p>
                                <ul className="space-y-4 pt-6 border-t border-slate-100 dark:border-zinc-800">
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300">Luxury Custom Homes</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300">Multi-Unit Developments</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300">Sustainable Off-Grid Living</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300">Interior Spatial Planning</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <img
                                alt="Luxury Residential Architecture"
                                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                src="/morgan-bay.gif"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Commercial */}
            <section className="py-20 px-6 bg-surface-light dark:bg-surface-dark transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img
                                alt="Commercial Office Building"
                                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                src="/robertson-caine.webp"
                            />
                        </div>
                        <div>
                            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">02 / Portfolio</span>
                            <h2 className="text-4xl font-light tracking-widest uppercase mb-10 text-slate-900 dark:text-white transition-colors">Commercial</h2>
                            <div className="space-y-8 text-slate-600 dark:text-slate-400 font-light transition-colors">
                                <p className="text-lg leading-relaxed">Developing environments that foster productivity and represent brand excellence. Our commercial work includes retail showrooms, office complexes, and hospitality venues.</p>
                                <ul className="space-y-4 pt-6 border-t border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-300">
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest">Corporate Headquarters</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest">Retail & Showroom Design</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest">Hospitality & Hotels</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest">Mixed-Use Urban Hubs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industrial */}
            <section className="py-20 px-6 bg-white dark:bg-background-dark transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">03 / Portfolio</span>
                            <h2 className="text-4xl font-light tracking-widest uppercase mb-10 text-slate-900 dark:text-white transition-colors">Industrial</h2>
                            <div className="space-y-8 text-slate-600 dark:text-slate-400 font-light transition-colors">
                                <p className="text-lg leading-relaxed">Large-scale functional architecture designed for operational efficiency. We have a proven track record in automotive dealerships and distribution centers.</p>
                                <ul className="space-y-4 pt-6 border-t border-slate-100 dark:border-zinc-800 text-slate-700 dark:text-slate-300">
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest">Automotive Dealerships</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest">Warehousing & Logistics</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest">Manufacturing Facilities</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest">Service Centers</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <img
                                alt="Industrial Dealership Architecture"
                                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                src="/motus-centurion.webp"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Renovations */}
            <section className="py-20 px-6 bg-surface-light dark:bg-surface-dark transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <img
                                alt="Building Renovation Detail"
                                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                src="/tile-africa.jpg"
                            />
                        </div>
                        <div>
                            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">04 / Portfolio</span>
                            <h2 className="text-4xl font-light tracking-widest uppercase mb-10 text-slate-900 dark:text-white transition-colors">Renovations</h2>
                            <div className="space-y-8 text-slate-600 dark:text-slate-400 font-light transition-colors">
                                <p className="text-lg leading-relaxed">Preserving the soul of a structure while adapting it for modern use. We specialize in historically sensitive restorations and contemporary additions.</p>
                                <ul className="space-y-4 pt-6 border-t border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-300">
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest">Heritage Site Restoration</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest">Adaptive Reuse Projects</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest">Structural Remodelling</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest">Facade Upgrades</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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
