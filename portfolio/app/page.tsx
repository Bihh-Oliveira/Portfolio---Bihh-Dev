import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Technologies from "@/components/sections/technologies";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />

      <Footer />
    </main>
  );
}