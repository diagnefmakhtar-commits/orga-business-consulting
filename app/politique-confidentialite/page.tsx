import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — ORGA BUSINESS CONSULTING",
  description:
    "Politique de confidentialité et protection des données personnelles de ORGA BUSINESS CONSULTING.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F172A]">
      {/* HERO */}
      <section className="border-b border-[#DED6C8] bg-white py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-black text-[#0F766E]">Légal</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight">
            Politique de confidentialité
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
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données personnelles collectées
              sur ce site est :
            </p>
            <div className="mt-4 rounded-2xl border border-[#DED6C8] bg-white p-6 text-sm space-y-1">
              <p><strong>Société :</strong> [NOM/SOCIÉTÉ]</p>
              <p><strong>SIRET :</strong> [SIRET]</p>
              <p><strong>Adresse :</strong> [ADRESSE], [VILLE]</p>
              <p><strong>Email :</strong>{" "}
                <a
                  href="mailto:[EMAIL]"
                  className="text-[#0F766E] underline hover:text-[#115E59]"
                >
                  [EMAIL]
                </a>
              </p>
            </div>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              2. Données collectées
            </h2>
            <p>
              Dans le cadre de l'utilisation du site et de nos services, nous
              pouvons collecter les données suivantes :
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Nom, prénom, adresse e-mail (formulaires de contact)</li>
              <li>Données de navigation (pages visitées, durée de session)</li>
              <li>Adresse IP et type de navigateur</li>
              <li>
                Toute information que vous nous transmettez volontairement via
                WhatsApp ou e-mail
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              3. Finalités du traitement
            </h2>
            <p>
              Les données collectées sont utilisées pour :
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Répondre à vos demandes de contact ou de diagnostic</li>
              <li>Améliorer nos services et l'expérience utilisateur</li>
              <li>Respecter nos obligations légales</li>
              <li>
                Vous envoyer des informations relatives à nos offres, sous
                réserve de votre consentement
              </li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              4. Base légale des traitements
            </h2>
            <p>
              Les traitements reposent sur les bases légales suivantes au sens
              du RGPD (Règlement UE 2016/679) :
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Votre consentement (art. 6.1.a)</li>
              <li>L'exécution d'un contrat ou de mesures précontractuelles (art. 6.1.b)</li>
              <li>Notre intérêt légitime à développer notre activité (art. 6.1.f)</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              5. Durée de conservation
            </h2>
            <p>
              Vos données sont conservées pour la durée strictement nécessaire
              à la réalisation des finalités pour lesquelles elles ont été
              collectées, et au maximum 3 ans à compter du dernier contact.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              6. Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur vos
              données personnelles :
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Droit d'accès (art. 15)</li>
              <li>Droit de rectification (art. 16)</li>
              <li>Droit à l'effacement (art. 17)</li>
              <li>Droit à la limitation du traitement (art. 18)</li>
              <li>Droit à la portabilité (art. 20)</li>
              <li>Droit d'opposition (art. 21)</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a
                href="mailto:[EMAIL]"
                className="text-[#0F766E] underline hover:text-[#115E59]"
              >
                [EMAIL]
              </a>
              . Vous avez également le droit d'introduire une réclamation
              auprès de la CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F766E] underline hover:text-[#115E59]"
              >
                www.cnil.fr
              </a>
              ).
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              7. Transfert de données
            </h2>
            <p>
              Vos données ne sont pas transmises à des tiers à des fins
              commerciales. Elles peuvent être partagées avec nos prestataires
              techniques (hébergement, outils analytiques) dans le strict
              respect du RGPD et sous contrat de sous-traitance.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              8. Cookies
            </h2>
            <p>
              Ce site utilise des cookies. Pour en savoir plus, consultez notre{" "}
              <Link
                href="/cookies"
                className="text-[#0F766E] underline hover:text-[#115E59]"
              >
                Politique de cookies
              </Link>
              .
            </p>
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
