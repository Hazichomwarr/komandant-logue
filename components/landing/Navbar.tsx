import Link from "next/link";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contenu", href: "#contenu" },
  { label: "Recommandations", href: "#recommandations" },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10"
      >
        <Link href="/" className="group inline-flex flex-col leading-none">
          <span className="text-lg font-semibold tracking-tight text-stone-950 sm:text-xl">
            Komandant Lougué
          </span>
          <span className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-stone-500 transition-colors group-hover:text-[#b78a54]">
            Influence & bien-être
          </span>
        </Link>

        <div className="hidden items-center gap-8 rounded-full border border-stone-200/80 bg-white/70 px-7 py-3 text-sm font-medium text-stone-700 shadow-sm shadow-stone-950/[0.03] backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-stone-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#communaute"
          className="hidden rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-stone-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#b78a54] md:inline-flex"
        >
          Rejoindre la communauté
        </Link>
      </nav>
    </header>
  );
}
