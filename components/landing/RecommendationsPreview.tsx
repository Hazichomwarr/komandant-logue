"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type FeaturedRecommendation = {
  name: string;
  image: string;
  recommendation: string;
  benefits: string[];
};

const featuredRecommendation: FeaturedRecommendation = {
  name: "Forever Aloe Vera Gel",
  image: "/products/kl-p-aloe-vera-gel.jpeg",
  recommendation:
    "Le produit que j'utilise chaque matin pour bien commencer ma journée.",
  benefits: [
    "Hydratation quotidienne",
    "Soutien digestif",
    "Source naturelle d'aloe vera",
  ],
};

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

export function RecommendationsPreview() {
  return (
    <section
      id="recommandations"
      className="bg-[#f7f4ef] px-5 py-24 sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mb-5 inline-flex rounded-full border border-[#b78a54]/25 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#9b7444]"
            >
              Recommandations personnelles
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl font-semibold leading-[1.05] tracking-tight text-stone-950 text-balance sm:text-5xl lg:text-6xl"
            >
              Mes essentiels
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl lg:ml-auto"
          >
            <p className="text-lg leading-8 text-stone-700 sm:text-xl sm:leading-9">
              Les produits que j&apos;utilise et recommande personnellement pour
              accompagner un mode de vie plus sain.
            </p>
            <blockquote className="mt-7 border-l-2 border-[#b78a54] pl-5 text-xl font-medium leading-8 text-stone-950">
              &quot;Je ne recommande que les produits que j&apos;utilise
              réellement.&quot;
            </blockquote>
          </motion.div>
        </motion.div>

        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
          className="mt-14 overflow-hidden rounded-4xl border border-stone-200/80 bg-white shadow-2xl shadow-stone-950/6] lg:grid lg:grid-cols-[1.08fr_0.92fr]"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative min-h-96xl bg-stone-100 sm:min-h-136 lg:min-h-168"
          >
            <Image
              src={featuredRecommendation.image}
              alt={featuredRecommendation.name}
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-stone-950/15 via-transparent to-white/15" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col justify-center p-7 sm:p-10 lg:p-14"
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9b7444]">
              Recommandation mise en avant
            </p>
            <h3 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-tight text-stone-950 text-balance sm:text-5xl">
              {featuredRecommendation.name}
            </h3>
            <p className="mt-7 max-w-xl text-xl leading-8 text-stone-700 sm:text-2xl sm:leading-9">
              {featuredRecommendation.recommendation}
            </p>

            <ul className="mt-10 space-y-4">
              {featuredRecommendation.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-4 text-base font-semibold text-stone-800 sm:text-lg"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1e6d8] text-[#9b7444]">
                    <Check className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* <a
              href="#recommandations"
              className="mt-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-stone-950 transition-colors hover:text-[#9b7444]"
            >
              Découvrir pourquoi je le recommande
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a> */}
            <Link
              href="/recommandations"
              className="mt-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-stone-950 transition-colors hover:text-[#9b7444]"
            >
              Voir toutes mes recommandations
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}
