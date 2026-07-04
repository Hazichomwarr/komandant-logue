import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Komandant Lougué | Créateur de contenu • Entrepreneur • Coach Bien-être",

  description:
    "Découvrez des conseils bien-être, des contenus inspirants, des recommandations de produits et rejoignez une communauté engagée vers une vie plus saine et plus épanouie.",

  keywords: [
    "créateur de contenu",
    "influenceur",
    "bien-être",
    "entrepreneur",
    "lifestyle",
    "santé",
    "communauté",
    "développement personnel",
    "produits recommandés",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
