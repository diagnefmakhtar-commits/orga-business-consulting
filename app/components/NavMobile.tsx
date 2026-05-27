"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Offres", href: "/offres" },
  { label: "Pourquoi ORGA", href: "/pourquoi-orga" },
  { label: "Outil de gestion", href: "/outil-de-gestion" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/#contact" },
];

const whatsappMessage =
  "Bonjour ORGA, je souhaite faire un diagnostic pour comprendre ce qui bloque dans mon activité.\n\nMon activité : \nMon principal problème aujourd'hui : \nMon objectif : ";

const whatsappUrl = `https://wa.me/221XXXXXXXXX?text=${encodeURIComponent(whatsappMessage)}`;

export default function NavMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Ferme le menu à chaque changement de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloque le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* BOUTON HAMBURGER */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#DED6C8] bg-white shadow-sm transition hover:border-[#0F766E]"
      >
        <span
          className={`block h-0.5 w-5 bg-[#0F172A] transition-all duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-[#0F172A] transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-[#0F172A] transition-all duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* PANNEAU */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-80 max-w-[90vw] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* EN-TÊTE DU PANNEAU */}
        <div className="flex items-center justify-between border-b border-[#DED6C8] px-6 py-5">
          <div>
            <p className="text-sm font-black text-[#0F172A]">
              ORGA BUSINESS CONSULTING
            </p>
            <p className="text-xs text-[#64748B]">
              Conseil • Pilotage financier • Organisation
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="grid h-9 w-9 place-items-center rounded-xl border border-[#DED6C8] text-[#475569] hover:border-[#0F766E] hover:text-[#0F766E] transition"
          >
            ✕
          </button>
        </div>

        {/* LIENS */}
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="space-y-1">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-black transition ${
                    pathname === href
                      ? "bg-[#EAF2E8] text-[#0F766E]"
                      : "text-[#0F172A] hover:bg-[#F7F4EE] hover:text-[#0F766E]"
                  }`}
                >
                  {label}
                  <span className="text-[#CBD5E1]">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA EN BAS */}
        <div className="border-t border-[#DED6C8] p-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl bg-[#0F766E] px-6 py-4 text-center text-sm font-black text-white shadow-lg transition hover:bg-[#115E59]"
          >
            ✆ Diagnostic gratuit WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-[#94A3B8]">
            Réponse rapide • Sans engagement
          </p>
        </div>
      </div>
    </div>
  );
}
