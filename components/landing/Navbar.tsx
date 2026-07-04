import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Contenu", href: "/#contenu" },
  { label: "Recommandations", href: "/recommandations" },
];

type NavbarProps = {
  variant?: "light" | "dark";
};

export function Navbar({ variant = "light" }: NavbarProps) {
  const isDark = variant === "dark";

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10"
      >
        <div className="flex gap-1 items-center">
          <Image
            src="/images/kl-logo.png"
            alt="logo"
            width={100}
            height={50}
            className="border border-amber-100 rounded-2xl object-contain h-auto shadow-sm"
            priority
          />
          <Link href="/" className="group inline-flex flex-col leading-none">
            <span
              className={`text-lg font-semibold tracking-tight sm:text-xl ${
                isDark ? "text-white" : "text-stone-950"
              }`}
            >
              Komandant Lougué
            </span>
            <span
              className={`mt-1 text-[0.68rem] font-medium uppercase tracking-[0.28em] transition-colors group-hover:text-[#b78a54] ${
                isDark ? "text-stone-300" : "text-stone-500"
              }`}
            >
              Influence & bien-être
            </span>
          </Link>
        </div>

        <div
          className={`hidden items-center gap-8 rounded-full px-7 py-3 text-sm font-medium shadow-sm backdrop-blur-xl lg:flex ${
            isDark
              ? "border border-white/10 bg-white/10 text-stone-200 shadow-black/10"
              : "border border-stone-200/80 bg-white/70 text-stone-700 shadow-stone-950/3"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors ${
                isDark ? "hover:text-white" : "hover:text-stone-950"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#communaute"
          className={`hidden rounded-full px-5 py-3 text-sm font-semibold shadow-lg transition duration-300 hover:-translate-y-0.5 md:inline-flex ${
            isDark
              ? "bg-[#d5ad78] text-stone-950 shadow-black/10 hover:bg-white"
              : "bg-stone-950 text-white shadow-stone-950/10 hover:bg-[#b78a54]"
          }`}
        >
          Rejoindre la communauté
        </Link>
      </nav>
    </header>
  );
}
