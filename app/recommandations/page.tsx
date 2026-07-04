import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ProductCommunityCTA } from "@/components/products/ProductCommunityCTA";
import { ProductContactCTA } from "@/components/products/ProductContactCTA";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductTrustStrip } from "@/components/products/ProductTrustStrip";
import { ProductsHero } from "@/components/products/ProductsHero";

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-stone-950">
      <Navbar variant="dark" />
      <main>
        <ProductsHero />
        <ProductTrustStrip />
        <ProductGrid />
        <ProductContactCTA />
        <ProductCommunityCTA />
      </main>
      <Footer />
    </div>
  );
}
