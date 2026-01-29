import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/sections/Philosophy";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Clients from "@/components/sections/Clients";
import Values from "@/components/sections/Values";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <About />
      <Projects />
      <Clients />
      <Values />
      <Footer />
    </main>
  );
}
