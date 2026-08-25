import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CommandPalette from "@/components/command-palette";
import ScrollProgress from "@/components/scroll-progress";
import Certificates from "@/components/certificates";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      
      <Navbar />

      <Hero />

      <About />

      <TechStack />

      <Projects />

      <Experience />

      <Certificates />

      <Contact />

      <Footer />

      <CommandPalette />

    </main>
  );
}