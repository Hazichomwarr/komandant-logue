import { About } from "@/components/landing/About";
import { Hero } from "@/components/landing/Hero";
import { Impact } from "@/components/landing/Impact";
import { LatestContent } from "@/components/landing/LatestContent";
import { Navbar } from "@/components/landing/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f4ef]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <LatestContent />
      </main>
    </div>
  );
}
