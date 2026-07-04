import { About } from "@/components/landing/About";
import { Hero } from "@/components/landing/Hero";
import { Impact } from "@/components/landing/Impact";
import { Navbar } from "@/components/landing/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f4ef]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
      </main>
    </div>
  );
}
