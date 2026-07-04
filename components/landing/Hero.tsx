// components/landing/Hero.tsx
import Image from "next/image";
import Link from "next/link";

const proofItems = [
  { value: "128K+", label: "abonnés engagés" },
  { value: "500+", label: "contenus publiés" },
  { value: "30+", label: "pays touchés" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f4ef] pt-28 text-stone-950 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(183,138,84,0.22),transparent_30%),linear-gradient(120deg,#ffffff_0%,#f7f4ef_48%,#e9e1d4_100%)]" />

      <div className="mx-auto grid min-h-[calc(100svh-2rem)] w-full max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pb-20">
        <div className="max-w-3xl pt-12 sm:pt-16 lg:pt-10">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.32em] text-[#9b7444]">
            Créateur de contenu • Entrepreneur • Bien-être
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Construire une vie plus saine, plus libre, plus alignée.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl sm:leading-9">
            Je partage mon parcours, mes habitudes et mes idées pour aider une
            communauté ambitieuse à avancer avec discipline, clarté et
            confiance.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#a-propos"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-stone-950 px-7 text-base font-semibold text-white shadow-xl shadow-stone-950/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#b78a54]"
            >
              Découvrir mon univers
            </Link>
            <Link
              href="#recommandations"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-stone-300 bg-white/45 px-7 text-base font-semibold text-stone-950 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-stone-950 hover:bg-white"
            >
              Voir mes recommandations
            </Link>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-y border-stone-950/10 py-6 sm:gap-6">
            {proofItems.map((item) => (
              <div key={item.label}>
                <dt className="text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
                  {item.value}
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-stone-500">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-136 lg:mr-0">
          <div className="absolute -left-6 top-12 z-10 hidden rounded-3xl border border-white/60 bg-white/75 px-5 py-4 shadow-2xl shadow-stone-950/10 backdrop-blur-xl sm:block">
            <p className="text-sm font-semibold text-stone-950">
              Discipline quotidienne
            </p>
            <p className="mt-1 max-w-44 text-sm leading-6 text-stone-600">
              Des choix simples, répétés avec intention.
            </p>
          </div>

          <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-stone-200 shadow-2xl shadow-stone-950/20 ring-1 ring-stone-950/10">
            <Image
              src="/images/kl-portrait-white-tux.jpeg"
              alt="Portrait de Komandant Lougué"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 38vw"
              className="object-cover object-[54%_50%]"
            />
            {/* <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-stone-950/65 via-stone-950/10 to-transparent p-6 text-white sm:p-8">
              <p className="max-w-xs text-xl font-semibold leading-7">
                La personne est la marque. Les recommandations suivent la
                confiance.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
