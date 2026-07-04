import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/constants/contact";
import { MessageCircle, Phone } from "lucide-react";

function getWhatsappHref(message: string) {
  const phone = WHATSAPP_NUMBER.replace(/\D/g, "");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function ProductContactCTA() {
  const questionMessage =
    "Bonjour, j’ai des questions sur un produit recommandé. Pouvez-vous m’aider ?";
  const adviceMessage =
    "Bonjour, j’aimerais recevoir un conseil personnalisé pour choisir une recommandation adaptée.";

  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-8">
        <div className="grid gap-6 rounded-3xl border border-stone-200 bg-white p-8 shadow-xl shadow-stone-950/4 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-950">
              Des questions sur un produit ?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
              Je peux t’aider à comprendre ce qui correspond le mieux à tes
              objectifs, avec un échange simple et humain.
            </p>
          </div>
          <a
            href={getWhatsappHref(questionMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-stone-300 px-7 text-base font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:border-stone-950 hover:bg-stone-950 hover:text-white"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.9} />
            Discuter sur WhatsApp
          </a>
        </div>

        <div className="grid gap-8 overflow-hidden rounded-3xl border border-white/10 bg-stone-950 p-8 text-white shadow-2xl shadow-stone-950/15 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#d5ad78]">
              Conseil personnalisé
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Besoin d’un conseil personnalisé ?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
              Écris-moi directement pour parler de tes objectifs, de ta routine
              et des recommandations les plus cohérentes pour toi.
            </p>
          </div>

          <div className="grid gap-3 sm:min-w-56">
            <a
              href={getWhatsappHref(adviceMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#d5ad78] px-7 text-base font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.9} />
              WhatsApp
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-stone-950"
            >
              <Phone className="h-5 w-5" strokeWidth={1.9} />
              Appeler
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
