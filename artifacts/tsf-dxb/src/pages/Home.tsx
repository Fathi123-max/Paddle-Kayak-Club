import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Activities } from "@/components/sections/Activities";
import { Safety } from "@/components/sections/Safety";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        <Activities />
        <Safety />
        <About />
      </main>

      <Footer />
    </div>
  );
}
