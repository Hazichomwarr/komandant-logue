import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
