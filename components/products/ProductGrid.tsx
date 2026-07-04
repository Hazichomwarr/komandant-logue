import { products } from "@/lib/data/products";
import { Sparkles } from "lucide-react";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#9b7444]">
              Sélection personnelle
            </p>
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-stone-950 sm:text-5xl">
              Mes essentiels du quotidien
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-700">
              Des produits que je recommande pour mieux comprendre, comparer et
              choisir avec confiance.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-700">
            <Sparkles className="h-4 w-4 text-[#9b7444]" strokeWidth={1.8} />
            Produits Forever Living
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
