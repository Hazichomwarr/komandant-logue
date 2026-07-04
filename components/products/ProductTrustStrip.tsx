import { Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react";

const trustItems = [
  {
    title: "Qualité premium",
    text: "Une sélection attentive, choisie pour accompagner de meilleures habitudes.",
    Icon: Leaf,
  },
  {
    title: "Recommandations sincères",
    text: "Chaque produit reste expliqué avec nuance, jamais imposé.",
    Icon: ShieldCheck,
  },
  {
    title: "Expérience personnelle",
    text: "Des essentiels liés à une routine réelle et à un mode de vie équilibré.",
    Icon: Sparkles,
  },
  {
    title: "Communauté",
    text: "Des conseils construits autour de la confiance et du dialogue.",
    Icon: Heart,
  },
];

export function ProductTrustStrip() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-3xl border border-stone-200 bg-white/85 p-5 shadow-xl shadow-stone-950/4 backdrop-blur sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
        {trustItems.map(({ title, text, Icon }) => (
          <article key={title} className="flex gap-4 p-3">
            <Icon
              className="mt-1 h-7 w-7 shrink-0 text-[#9b7444]"
              strokeWidth={1.7}
            />
            <div>
              <h2 className="text-base font-semibold text-stone-950">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
