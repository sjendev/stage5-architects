import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Get in Touch</span>
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-white transition-colors">CONTACT</h1>
                        <p className="text-lg text-slate-300 font-light leading-relaxed transition-colors">
                            We&apos;re here to discuss your architectural vision. Whether you&apos;re planning a new build, renovation, or commercial development, our team is ready to bring your ideas to life.
                        </p>
                    </div>
                    <div className="mt-16 w-full h-[1px] bg-slate-100 dark:bg-zinc-800"></div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 px-6 bg-white dark:bg-background-dark transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Column - Contact Details */}
                        <div className="space-y-12">
                            <div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Office Location</span>
                                <h2 className="text-3xl font-light tracking-widest uppercase mb-8 text-slate-900 dark:text-white transition-colors">Visit Our Studio</h2>
                                <div className="space-y-6 text-slate-700 dark:text-slate-400 font-light transition-colors">
                                    <div className="flex items-start space-x-4">
                                        <span className="material-icons text-primary mt-1">location_on</span>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=6+C.P.+Brand+Avenue,+Melkbosstrand,+Cape+Town,+7437,+South+Africa"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors block"
                                        >
                                            <p className="text-lg">6 C.P. Brand Avenue</p>
                                            <p className="text-lg">Melkbosstrand</p>
                                            <p className="text-lg">Cape Town, 7437</p>
                                            <p className="text-lg">South Africa</p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-12 border-t border-slate-100 dark:border-zinc-800">
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Contact Details</span>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <span className="material-icons text-primary">phone</span>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Phone</p>
                                            <a href="tel:0824369882" className="text-lg text-slate-900 dark:text-white hover:text-primary transition-colors">
                                                082 436 9882
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className="material-icons text-primary">email</span>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Email</p>
                                            <a href="mailto:info@stage5.co.za" className="text-lg text-slate-900 dark:text-white hover:text-primary transition-colors">
                                                info@stage5.co.za
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-12 border-t border-slate-100 dark:border-zinc-800">
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Office Hours</span>
                                <div className="space-y-3 text-slate-700 dark:text-slate-400 font-light">
                                    <div className="flex justify-between items-center text-slate-700 dark:text-slate-400">
                                        <span className="text-xs uppercase tracking-widest">Monday - Thursday</span>
                                        <span className="text-sm">8:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center text-slate-700 dark:text-slate-400">
                                        <span className="text-xs uppercase tracking-widest">Friday</span>
                                        <span className="text-sm">8:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center text-slate-700 dark:text-slate-400">
                                        <span className="text-xs uppercase tracking-widest">Saturday - Sunday</span>
                                        <span className="text-sm">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Map */}
                        <div className="relative h-[600px] bg-slate-100 dark:bg-zinc-900">
                            <iframe
                                src="https://www.google.com/maps?q=6+C.P.+Brand+Avenue,+Melkbosstrand,+Cape+Town,+7437,+South+Africa&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info Section */}
            <section className="py-32 px-6 bg-surface-light dark:bg-surface-dark text-center transition-colors duration-300">
                <div className="max-w-4xl mx-auto">
                    <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Professional Services</span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-8 text-slate-900 dark:text-white transition-colors">24+ Years of Architectural Excellence</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto transition-colors">
                        Stage 5 Architects specializes in residential, commercial, industrial, and heritage architecture across South Africa. We&apos;re committed to creating spaces that inspire and endure.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
