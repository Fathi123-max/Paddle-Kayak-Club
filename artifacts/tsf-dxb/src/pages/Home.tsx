import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Gatherings } from "@/components/sections/Gatherings";
import { Safety } from "@/components/sections/Safety";
import { Story } from "@/components/sections/Story";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        <Story />
        <Gatherings />
        <Location />
        <Safety />
      </main>

      <Footer />
    </div>
  );
}
