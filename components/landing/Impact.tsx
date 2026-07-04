"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "120K+", label: "Abonnés" },
  { value: "500+", label: "Témoignages" },
  { value: "10M+", label: "Vues" },
  { value: "8", label: "Pays touchés" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function Impact() {
  return (
    <section className="relative isolate overflow-hidden bg-stone-950 px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <Image
        src="/images/kl-drapo.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[50%_32%]"
      />
      <div className="absolute inset-0 -z-10 bg-stone-950/30" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(183,138,84,0.32),transparent_32%),linear-gradient(90deg,rgba(12,10,9,0.92),rgba(12,10,9,0.58)_48%,rgba(12,10,9,0.84))]" />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={card}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#9b7444]">
            Impact
          </p>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl">
            Une communauté qui grandit autour de la confiance et du passage à
            l&apos;action.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={card}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="rounded-[1.5rem] border border-white/15 bg-white/[0.09] p-7 shadow-2xl shadow-stone-950/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#b78a54]/45 hover:bg-white/[0.13] sm:p-8"
            >
              <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-stone-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
