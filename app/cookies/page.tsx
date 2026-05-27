import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de cookies — ORGA BUSINESS CONSULTING",
  description:
    "Politique de cookies de ORGA BUSINESS CONSULTING — comment nous utilisons les cookies et comment les gérer.",
};

export default function Cookies() {
  const cookieTypes = [
    {
      name: "Cookies strictement nécessaires",
      purpose:
        "Indispensables au fonctionnement du site (navigation, sécurité). Ils ne peuvent pas être désactivés.",
      duration: "Session",
      consent: "Non requis",
    },
    {
      name: "Cookies analytiques",
      purpose:
        "Nous aident à comprendre comment les visiteurs interagissent avec le site (pages visitées, durée, sources de trafic).",
      duration: "13 mois",
      consent: "Requis",
    },
    {
      name: "Cookies de préférences",
      purpose:
        "Mémorisent vos préférences d'affichage et de langue pour améliorer votre expérience.",
      duration: "12 mois",
      consent: "Requis",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F172A]">
      {/* HERO */}
      <section className="border-b border-[#DED6C8] bg-white py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-black text-[#0F766E]">Légal</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight">
            Politique de cookies
          </h1>
          <p className="mt-3 text-[#475569]">
            Dernière mise à jour : mai 2025
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-10 text-[#334155] leading-8">

          {/* 1 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              1. Qu'est-ce qu'un cookie ?
            </h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal
              (ordinateur, smartphone, tablette) lors de la visite d'un site
              internet. Il permet au site de mémoriser des informations sur
              votre visite, comme votre langue préférée et d'autres paramètres.
            </p>
            <p className="mt-3">
              Les cookies ne permettent pas d'identifier personnellement
              l'utilisateur. Ils enregistrent uniquement des informations
              relatives à sa navigation.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              2. Les cookies que nous utilisons
            </h2>
            <p className="mb-6">
              Le site de ORGA BUSINESS CONSULTING peut utiliser les catégories
              de cookies suivantes :
            </p>
            <div className="space-y-4">
              {cookieTypes.map((cookie) => (
                <div
                  key={cookie.name}
                  className="rounded-2xl border border-[#DED6C8] bg-white p-6"
                >
                  <p className="font-black text-[#0F172A]">{cookie.name}</p>
                  <p className="mt-2 text-sm">{cookie.purpose}</p>
                  <div className="mt-4 flex gap-6 text-xs text-[#64748B]">
                    <span>
                      <strong className="text-[#0F172A]">Durée :</strong>{" "}
                      {cookie.duration}
                    </span>
                    <span>
                      <strong className="text-[#0F172A]">Consentement :</strong>{" "}
                      <span
                        className={
                          cookie.consent === "Requis"
                            ? "text-[#D65A31] font-bold"
                            : "text-[#0F766E] font-bold"
                        }
                      >
                        {cookie.consent}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              3. Votre consentement
            </h2>
            <p>
              Conformément aux recommandations de la CNIL et à la directive
              ePrivacy, les cookies nécessitant votre consentement ne sont
              déposés qu'après votre accord explicite via le bandeau de gestion
              des cookies présent sur le site.
            </p>
            <p className="mt-3">
              Vous pouvez retirer votre consentement à tout moment en cliquant
              sur le lien «&nbsp;Gérer mes cookies&nbsp;» en bas de chaque page.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              4. Comment refuser les cookies ?
            </h2>
            <p>
              Vous pouvez configurer votre navigateur pour refuser tout ou
              partie des cookies. Les paramètres de gestion des cookies se
              trouvent généralement dans le menu «&nbsp;Paramètres&nbsp;» ou
              «&nbsp;Préférences&nbsp;» de votre navigateur.
            </p>
            <div className="mt-4 rounded-2xl border border-[#DED6C8] bg-white p-6 text-sm space-y-2">
              <p>
                <strong>Chrome :</strong>{" "}
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F766E] underline hover:text-[#115E59]"
                >
                  Paramètres → Confidentialité et sécurité → Cookies
                </a>
              </p>
              <p>
                <strong>Firefox :</strong>{" "}
                <a
                  href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F766E] underline hover:text-[#115E59]"
                >
                  Options → Vie privée et sécurité
                </a>
              </p>
              <p>
                <strong>Safari :</strong>{" "}
                <a
                  href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F766E] underline hover:text-[#115E59]"
                >
                  Préférences → Confidentialité
                </a>
              </p>
            </div>
            <p className="mt-4">
              Attention : le refus des cookies peut affecter certaines
              fonctionnalités du site.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              5. Durée de conservation
            </h2>
            <p>
              Votre choix en matière de cookies est conservé pendant 13 mois.
              Au-delà de cette période, votre consentement vous sera à nouveau
              demandé.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              6. Contact
            </h2>
            <p>
              Pour toute question relative à notre politique de cookies, vous
              pouvez nous contacter à :{" "}
              <a
                href="mailto:[EMAIL]"
                className="text-[#0F766E] underline hover:text-[#115E59]"
              >
                [EMAIL]
              </a>
            </p>
          </div>

          {/* LIENS CROISÉS */}
          <div className="rounded-2xl bg-[#EAF2E8] p-6">
            <p className="font-black text-[#0F172A]">Voir aussi</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <Link
                href="/politique-confidentialite"
                className="text-[#0F766E] underline hover:text-[#115E59]"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/mentions-legales"
                className="text-[#0F766E] underline hover:text-[#115E59]"
              >
                Mentions légales
              </Link>
              <Link
                href="/cgu"
                className="text-[#0F766E] underline hover:text-[#115E59]"
              >
                CGU
              </Link>
            </div>
          </div>
        </div>

        {/* RETOUR */}
        <div className="mt-14 pt-8 border-t border-[#DED6C8]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-black text-[#0F766E] hover:text-[#115E59] transition"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </section>
    </div>
  );
}
