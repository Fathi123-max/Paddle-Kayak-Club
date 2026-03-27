import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Gatherings } from "@/components/sections/Gatherings";
import { Rules } from "@/components/sections/Rules";
import { Story } from "@/components/sections/Story";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <Navbar />

      <main id="main-content">
        <Hero />
        <Story />
        <Gatherings />
        <Location />
        <Rules />
      </main>

      <Footer />
    </div>
  );
}
