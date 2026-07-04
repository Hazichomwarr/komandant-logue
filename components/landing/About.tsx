"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = ["Discipline", "Transmission", "Confiance"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="a-propos" className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          variants={fadeUp}
          className="relative mx-auto w-full max-w-[34rem] lg:mx-0"
        >
          <div className="absolute -left-5 -top-5 hidden h-32 w-32 rounded-full border border-[#b78a54]/30 sm:block" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-100 shadow-2xl shadow-stone-950/10 ring-1 ring-stone-950/10">
            <Image
              src="/images/kl-portrait.jpeg"
              alt="Portrait de Komandant Lougué"
              fill
              sizes="(max-width: 1024px) 90vw, 38vw"
              className="object-cover object-[50%_26%]"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-5 inline-flex rounded-full border border-[#b78a54]/25 bg-[#f7f4ef] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#9b7444]"
          >
            Mon parcours
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.04] tracking-tight text-stone-950 text-balance sm:text-5xl lg:text-6xl"
          >
            Une voix pour celles et ceux qui veulent avancer avec intention.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-8 space-y-6 text-lg leading-8 text-stone-700 sm:text-xl sm:leading-9"
          >
            <p>
              Komandant Lougué partage un chemin fait d&apos;expérience, de
              discipline et de proximité. Son univers rassemble les personnes
              qui veulent mieux prendre soin d&apos;elles, bâtir de meilleures
              habitudes et garder le cap dans leur vie personnelle comme
              professionnelle.
            </p>
            <p>
              Sa mission est simple : transmettre des repères concrets,
              encourager la constance et recommander uniquement ce qui soutient
              réellement une vie plus saine, plus confiante et plus libre.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-semibold text-stone-700"
              >
                {value}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-10"
          >
            <Link
              href="#a-propos"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-stone-950 px-7 text-base font-semibold text-white shadow-xl shadow-stone-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#b78a54]"
            >
              En savoir plus
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
