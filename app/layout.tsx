import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavMobile from "./components/NavMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ORGA BUSINESS SOLUTIONS",
    template: "%s — ORGA BUSINESS SOLUTIONS",
  },
  description:
    "Cabinet de conseil en organisation, pilotage financier et gestion d'entreprise basé à Dakar. Diagnostic gratuit pour reprendre le contrôle de votre activité.",
  metadataBase: new URL("https://teranga-business.com"),
  keywords: [
    "conseil entreprise Dakar",
    "pilotage financier Sénégal",
    "organisation entreprise Afrique",
    "DAF externalisé Sénégal",
    "gestion PME Dakar",
    "diagnostic entreprise gratuit",
    "ORGA outil gestion",
  ],
  authors: [{ name: "ORGA BUSINESS SOLUTIONS" }],
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: "https://teranga-business.com",
    siteName: "ORGA BUSINESS SOLUTIONS",
    title: "ORGA BUSINESS SOLUTIONS — Conseil • Pilotage financier • Organisation",
    description:
      "Cabinet de conseil en organisation et pilotage financier basé à Dakar. Diagnostic gratuit pour les dirigeants qui veulent reprendre le contrôle.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ORGA BUSINESS SOLUTIONS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ORGA BUSINESS SOLUTIONS",
    description:
      "Cabinet de conseil en organisation et pilotage financier basé à Dakar.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const whatsappMessage =
    "Bonjour ORGA, je souhaite faire un diagnostic pour comprendre ce qui bloque dans mon activité.\n\nMon activité : \nMon principal problème aujourd’hui : \nMon objectif : ";

  const whatsappUrl = `https://wa.me/221XXXXXXXXX?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const navLinkClass =
    "relative transition hover:text-[#0F766E] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-[#0F766E] after:transition-all hover:after:w-full";

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F7F4EE] text-[#111827]">
        {/* HEADER GLOBAL */}
        <header className="sticky top-0 z-50 border-b border-[#DED6C8] bg-[#F7F4EE] shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            {/* LOGO */}
            <div>
              <Link
                href="/"
                className="block text-xl font-black tracking-tight text-[#0F172A] transition hover:text-[#0F766E]"
              >
                ORGA BUSINESS SOLUTIONS
              </Link>

              <p className="mt-1 text-sm text-[#334155]">
                Conseil • Pilotage financier • Organisation
              </p>
            </div>

            {/* NAVIGATION */}
            <nav className="hidden items-center gap-10 text-sm font-bold text-[#0F172A] md:flex">
              <Link href="/offres" className={navLinkClass}>
                Offres
              </Link>

              <Link href="/pourquoi-orga" className={navLinkClass}>
                Pourquoi ORGA
              </Link>

              <Link href="/outil-de-gestion" className={navLinkClass}>
                Outil de gestion
              </Link>

              <Link href="/a-propos" className={navLinkClass}>
                À propos
              </Link>

              <Link href="/#contact" className={navLinkClass}>
                Contact
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#0F766E] px-6 py-3.5 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#115E59] hover:shadow-xl"
              >
                Diagnostic gratuit
              </a>
            </nav>

            {/* MENU MOBILE */}
            <NavMobile />
          </div>
        </header>

        {/* CONTENU */}
        <main>{children}</main>

        {/* BOUTON WHATSAPP FLOTTANT */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#0F766E] px-5 py-4 font-black text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#115E59] hover:shadow-[0_20px_50px_rgba(15,118,110,0.35)]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-[#0F766E]">
            ✆
          </span>

          <span className="hidden sm:inline">Diagnostic WhatsApp</span>
        </a>

        {/* FOOTER */}
        <footer className="border-t border-[#DED6C8] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid gap-10 md:grid-cols-[1fr_auto_auto]">
              {/* MARQUE */}
              <div>
                <Link
                  href="/"
                  className="text-sm font-black text-[#0F172A] hover:text-[#0F766E] transition"
                >
                  ORGA BUSINESS SOLUTIONS
                </Link>
                <p className="mt-1 text-xs text-[#64748B]">
                  Conseil • Pilotage financier • Organisation
                </p>
                <p className="mt-4 text-xs text-[#94A3B8]">
                  © {new Date().getFullYear()} ORGA BUSINESS SOLUTIONS.
                  Tous droits réservés.
                </p>
              </div>

              {/* NAVIGATION */}
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#0F172A]">
                  Navigation
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[#475569]">
                  {[
                    ["Offres", "/offres"],
                    ["Pourquoi ORGA", "/pourquoi-orga"],
                    ["Outil de gestion", "/outil-de-gestion"],
                    ["À propos", "/a-propos"],
                    ["Contact", "/#contact"],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="hover:text-[#0F766E] transition"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LÉGAL */}
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#0F172A]">
                  Légal
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[#475569]">
                  {[
                    ["Mentions légales", "/mentions-legales"],
                    ["Politique de confidentialité", "/politique-confidentialite"],
                    ["CGU", "/cgu"],
                    ["Politique de cookies", "/cookies"],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="hover:text-[#0F766E] transition"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}