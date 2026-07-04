import { Award } from "lucide-react";
import Image from "next/image";

export function ProductsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-stone-950 px-5 pb-20 pt-32 text-white sm:px-8 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_22%,rgba(213,173,120,0.22),transparent_30%),linear-gradient(120deg,#0c0a09,#17130f_52%,#070606)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[88px_88px] opacity-20" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#d5ad78]">
            Mes recommandations
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Les produits que j{"’"}utilise et recommande
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl sm:leading-9">
            Je sélectionne uniquement des produits de qualité pour accompagner
            un mode de vie plus sain et équilibré.
          </p>

          <div className="mt-10 inline-flex max-w-xl items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-5 text-sm font-semibold leading-6 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
            <Award
              className="h-6 w-6 shrink-0 text-[#d5ad78]"
              strokeWidth={1.8}
            />
            Produits testés • Approuvés • Recommandés personnellement
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-4xl bg-[#d5ad78]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/8 p-3 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-stone-900 sm:aspect-16/13 lg:aspect-5/4">
              <Image
                src="/images/kl-portrait-hat.jpeg"
                alt="Komandant Lougué dans un moment lifestyle"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/65 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
