import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f4ef]">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
