import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}