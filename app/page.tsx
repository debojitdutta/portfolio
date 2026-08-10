import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />

      {/* Temporary sections */}
      <section id="about" className="h-screen" />
      <section id="projects" className="h-screen" />
      <section id="experience" className="h-screen" />
      <section id="contact" className="h-screen" />
    </main>
  );
}