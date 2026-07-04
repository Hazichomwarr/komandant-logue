"use client";

import { motion } from "framer-motion";
import { Camera, Mail, MessageCircle } from "lucide-react";

const channels = [
  { label: "WhatsApp", Icon: MessageCircle },
  { label: "Newsletter", Icon: Mail },
  { label: "Instagram", Icon: Camera },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function CommunityCTA() {
  return (
    <section
      id="communaute"
      className="bg-[#f7f4ef] px-5 py-24 sm:px-8 lg:px-10 lg:py-36"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-stone-200/80 bg-stone-950 px-6 py-14 text-white shadow-2xl shadow-stone-950/15 sm:px-10 sm:py-18 lg:px-16 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#d5ad78]"
            >
              Rejoindre le mouvement
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl font-semibold leading-[1.04] tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              Rejoins une communauté qui avance avec intention.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-7 max-w-3xl text-lg leading-8 text-stone-300 sm:text-xl sm:leading-9"
            >
              Reçois mes conseils, mes contenus et mes recommandations
              directement, sans dépendre uniquement des réseaux sociaux.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:justify-self-end"
          >
            <div className="flex flex-wrap gap-3">
              {channels.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-stone-200"
                >
                  <Icon className="h-4 w-4 text-[#d5ad78]" strokeWidth={1.8} />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href="#communaute"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-base font-semibold text-stone-950 shadow-xl shadow-black/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d5ad78]"
              >
                Rejoindre la communauté
              </a>
              <a
                href="mailto:contact@example.com"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-7 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#d5ad78] hover:text-[#d5ad78]"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
