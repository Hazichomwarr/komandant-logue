"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aïcha B.",
    context: "Membre de la communauté",
    quote:
      "Ses contenus m'aident à rester régulière sans me mettre la pression. J'apprécie surtout le ton simple et humain.",
  },
  {
    name: "Moussa K.",
    context: "Client recommandé",
    quote:
      "J'ai découvert une approche plus claire de mes habitudes. Les recommandations arrivent avec du contexte, pas comme une vente forcée.",
  },
  {
    name: "Fatou D.",
    context: "Abonnée fidèle",
    quote:
      "Je le suis pour sa constance et sa manière de parler de discipline avec bienveillance. On sent qu'il partage ce qu'il vit vraiment.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Testimonials() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#9b7444]"
          >
            Histoires de la communauté
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.05] tracking-tight text-stone-950 text-balance sm:text-5xl lg:text-6xl"
          >
            Ils avancent avec la communauté
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="flex min-h-[22rem] flex-col rounded-[1.5rem] border border-stone-200 bg-[#fbfaf8] p-7 shadow-xl shadow-stone-950/[0.035] transition duration-300 hover:-translate-y-1 hover:border-[#b78a54]/35 hover:bg-white hover:shadow-2xl hover:shadow-stone-950/[0.07] sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1e6d8] text-[#9b7444]">
                <Quote className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <p className="mt-8 text-lg leading-8 text-stone-800">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-auto pt-8">
                <p className="text-base font-semibold text-stone-950">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm font-medium text-stone-500">
                  {testimonial.context}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
