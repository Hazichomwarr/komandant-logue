import { About } from "@/components/landing/About";
import { CommunityCTA } from "@/components/landing/CommunityCTA";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Impact } from "@/components/landing/Impact";
import { LatestContent } from "@/components/landing/LatestContent";
import { Navbar } from "@/components/landing/Navbar";
import { RecommendationsPreview } from "@/components/landing/RecommendationsPreview";
import { Testimonials } from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f4ef]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <LatestContent />
        <RecommendationsPreview />
        <Testimonials />
        <CommunityCTA />
      </main>
      <Footer />
    </div>
  );
}
