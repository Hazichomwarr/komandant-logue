import {
  Award,
  Check,
  Heart,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data/products";

const trustItems = [
  {
    title: "Qualité premium",
    text: "Une sélection attentive, choisie pour accompagner de meilleures habitudes.",
    Icon: Leaf,
  },
  {
    title: "Recommandations sincères",
    text: "Chaque produit garde sa place : utile, expliqué, jamais imposé.",
    Icon: ShieldCheck,
  },
  {
    title: "Accompagnement",
    text: "Un conseil direct pour comprendre ce qui correspond à votre routine.",
    Icon: Truck,
  },
  {
    title: "Communauté",
    text: "Des recommandations construites autour de la confiance.",
    Icon: Heart,
  },
];

const heroProducts = products.slice(0, 4);

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

function getWhatsappHref(message: string) {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-stone-950">
      <header className="border-b border-white/10 bg-stone-950 text-white">
        <nav
          aria-label="Navigation principale"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10"
        >
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-semibold tracking-tight text-[#d5ad78]">
              KL
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Komandant Lougué
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-stone-200 lg:flex">
            <Link href="/" className="transition-colors hover:text-white">
              Accueil
            </Link>
            <Link href="/#a-propos" className="transition-colors hover:text-white">
              À propos
            </Link>
            <Link href="/#contenu" className="transition-colors hover:text-white">
              Contenus
            </Link>
            <Link href="/recommandations" className="text-[#d5ad78]">
              Recommandations
            </Link>
            <Link
              href="/#communaute"
              className="rounded-full bg-[#d5ad78] px-5 py-3 font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Rejoindre la communauté
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-stone-950 px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(213,173,120,0.24),transparent_28%),linear-gradient(120deg,#0c0a09,#15120e_48%,#080706)]" />
          <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#d5ad78]">
                Mes recommandations
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Les produits que j&apos;utilise et recommande
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl sm:leading-9">
                Je sélectionne des produits qui soutiennent une routine plus
                saine, avec une explication claire et un conseil humain avant
                toute décision.
              </p>

              <div className="mt-10 inline-flex max-w-xl items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-5 text-sm font-semibold text-white backdrop-blur-xl">
                <Award className="h-6 w-6 shrink-0 text-[#d5ad78]" strokeWidth={1.8} />
                Produits testés, expliqués et recommandés personnellement.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {heroProducts.map((product, index) => (
                <div
                  key={product.slug}
                  className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/20 backdrop-blur ${
                    index % 2 === 1 ? "translate-y-8" : ""
                  }`}
                >
                  <div className="relative aspect-square overflow-hidden rounded-[1rem] bg-white/90">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 1024px) 42vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-10 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-4 rounded-[1.5rem] border border-stone-200 bg-white/85 p-5 shadow-xl shadow-stone-950/[0.04] backdrop-blur sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
            {trustItems.map(({ title, text, Icon }) => (
              <article key={title} className="flex gap-4 p-3">
                <Icon className="mt-1 h-7 w-7 shrink-0 text-[#9b7444]" strokeWidth={1.7} />
                <div>
                  <h2 className="text-base font-semibold text-stone-950">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

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
                  Cliquez sur WhatsApp pour demander un conseil ou comprendre
                  pourquoi un produit peut être adapté à votre routine.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-700">
                <Sparkles className="h-4 w-4 text-[#9b7444]" strokeWidth={1.8} />
                Produits Forever Living
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.slug}
                  className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-xl shadow-stone-950/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#b78a54]/35 hover:shadow-2xl hover:shadow-stone-950/[0.08]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 44vw, 22vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 inline-flex w-fit rounded-full bg-[#f7f4ef] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#9b7444]">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-semibold leading-tight tracking-tight text-stone-950">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-stone-600">
                      {product.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {product.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-3 text-sm font-medium text-stone-700"
                        >
                          <Check className="h-4 w-4 shrink-0 text-[#9b7444]" strokeWidth={2} />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-400">
                        Prix indicatif
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-stone-950">
                        {formatPrice(product.price)}
                      </p>
                      <a
                        href={getWhatsappHref(product.whatsappMessage)}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b78a54]"
                      >
                        <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
                        Demander sur WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[1.5rem] border border-stone-200 bg-white p-8 shadow-xl shadow-stone-950/[0.04] lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-stone-950">
                Des questions sur un produit ?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
                Je peux vous aider à choisir ce qui correspond le mieux à vos
                objectifs, sans pression et sans parcours d&apos;achat automatisé.
              </p>
            </div>
            <a
              href={getWhatsappHref(
                "Bonjour, j'aimerais discuter avec vous pour choisir une recommandation adaptée."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-stone-300 px-7 text-base font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:border-stone-950 hover:bg-stone-950 hover:text-white"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.9} />
              Discuter sur WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
