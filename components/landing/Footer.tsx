import Link from "next/link";

const navigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Contenu", href: "/#contenu" },
  { label: "Recommandations", href: "/recommandations" },
  { label: "Communauté", href: "/#communaute" },
];

const socialLinks = [
  // { label: "Instagram", href: "#" },
  // { label: "YouTube", href: "#" },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@abdoulayelougue0?_r=1&_t=ZT-97tmx3hsHQT",
  },
  { label: "Facebook", href: "https://www.facebook.com/share/p/18wesrtBTx/" },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-stone-950"
          >
            Komandant Lougué
          </Link>
          <p className="mt-4 max-w-md text-base leading-7 text-stone-600">
            Inspirer une communauté francophone à avancer avec discipline,
            confiance et des choix plus alignés.
          </p>
        </div>

        <nav aria-label="Navigation du pied de page">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-400">
            Navigation
          </p>
          <div className="mt-4 grid gap-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-950"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <nav aria-label="Liens sociaux">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-400">
            Réseaux
          </p>
          <div className="mt-4 grid gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-3 border-t border-stone-200 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Komandant Lougué. Tous droits réservés.</p>
        <p>Créé pour une marque personnelle humaine et engagée.</p>
      </div>
    </footer>
  );
}
