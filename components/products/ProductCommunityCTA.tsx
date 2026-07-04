import { CONTACT_EMAIL } from "@/lib/constants/contact";
import { Mail } from "lucide-react";

export function ProductCommunityCTA() {
  const subject = "Rejoindre la communauté";
  const body =
    "Bonjour, j'aimerais rejoindre la communauté et recevoir vos conseils, contenus et recommandations.";
  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
      <div className="mx-auto rounded-3xl border border-stone-200 bg-white p-8 shadow-xl shadow-stone-950/4 sm:p-10 lg:max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#9b7444]">
              Communauté
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-4xl">
              Rejoindre la communauté
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
              Envoie-moi un message pour recevoir mes conseils, contenus et
              recommandations.
            </p>
          </div>

          <a
            href={href}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-stone-950 px-7 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b78a54]"
          >
            <Mail className="h-5 w-5" strokeWidth={1.9} />
            Envoyer un email
          </a>
        </div>
      </div>
    </section>
  );
}
