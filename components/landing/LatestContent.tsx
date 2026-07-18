"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  MessageCircle,
  Music2,
  PlayCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ContentCard = {
  platform: string;
  title: string;
  description: string;
  metric: string;
  href: string;
  Icon: LucideIcon;
};

const contentCards: ContentCard[] = [
  {
    platform: "Facebook",
    title: "Une conversation avec la communauté",
    description:
      "Un partage plus personnel pour répondre, encourager et garder le lien.",
    metric: "64K vues",
    href: "https://www.facebook.com/share/p/18wesrtBTx/",
    Icon: MessageCircle,
  },
  {
    platform: "TikTok",
    title: "Le déclic qui change une routine",
    description:
      "Une réflexion directe sur l'énergie, la santé et le passage à l'action.",
    metric: "318K vues",
    href: "https://www.tiktok.com/@abdoulayelougue0?_r=1&_t=ZT-97tmx3hsHQT",
    Icon: Music2,
  },
  // {
  //   platform: "Instagram",
  //   title: "Des habitudes simples pour rester constant",
  //   description:
  //     "Un format court pour transformer la motivation en discipline quotidienne.",
  //   metric: "245K vues",
  //   href: "#contenu",
  //   Icon: Camera,
  // },

  // {
  //   platform: "YouTube",
  //   title: "Construire sa confiance avec méthode",
  //   description:
  //     "Une vidéo plus posée pour aller au fond du parcours, des choix et des résultats.",
  //   metric: "92K vues",
  //   href: "#contenu",
  //   Icon: PlayCircle,
  // },
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

export function LatestContent() {
  return (
    <section
      id="contenu"
      className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end"
        >
          <div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#9b7444]"
            >
              Derniers contenus
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl font-semibold leading-[1.05] tracking-tight text-stone-950 text-balance sm:text-5xl lg:text-6xl"
            >
              Une présence active, des idées utiles, une communauté qui avance.
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl sm:leading-9 lg:ml-auto"
          >
            Chaque contenu prolonge la même mission : partager des repères
            clairs, inspirer la constance et créer une relation de confiance
            avant toute recommandation.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          {contentCards.map(
            ({ platform, title, description, metric, href, Icon }) => (
              <motion.article
                key={platform}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="group flex min-h-92 flex-col rounded-3xl border border-stone-200 bg-[#fbfaf8] p-7 shadow-xl shadow-stone-950/[0.035] transition duration-300 hover:-translate-y-1 hover:border-[#b78a54]/35 hover:bg-white hover:shadow-2xl hover:shadow-stone-950/[0.07] sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-800">
                    <Icon
                      className="h-4 w-4 text-[#9b7444]"
                      strokeWidth={1.8}
                    />
                    {platform}
                  </span>
                  <span className="text-sm font-semibold text-stone-500">
                    {metric}
                  </span>
                </div>

                <div className="mt-10 flex flex-1 flex-col">
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-stone-950">
                    {title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-stone-700">
                    {description}
                  </p>

                  <a
                    href={href}
                    className="mt-auto inline-flex items-center gap-2 pt-9 text-sm font-bold uppercase tracking-[0.18em] text-stone-950 transition-colors group-hover:text-[#9b7444]"
                  >
                    Voir le contenu
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </a>
                </div>
              </motion.article>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
