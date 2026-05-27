import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — ORGA BUSINESS CONSULTING",
  description:
    "Conditions Générales d'Utilisation du site et des services de ORGA BUSINESS CONSULTING.",
};

export default function CGU() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F172A]">
      {/* HERO */}
      <section className="border-b border-[#DED6C8] bg-white py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-black text-[#0F766E]">Légal</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight">
            Conditions Générales d'Utilisation
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
              1. Objet
            </h2>
            <p>
              Les présentes Conditions Générales d'Utilisation (ci-après «&nbsp;CGU&nbsp;»)
              régissent l'accès et l'utilisation du site internet de ORGA BUSINESS CONSULTING
              BUSINESS SOLUTIONS (ci-après «&nbsp;le Site&nbsp;»), accessible à
              l'adresse{" "}
              <a
                href="/"
                className="text-[#0F766E] underline hover:text-[#115E59]"
              >
                teranga-business.fr
              </a>
              .
            </p>
            <p className="mt-3">
              En accédant au Site, vous acceptez sans réserve les présentes CGU.
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce
              Site.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              2. Éditeur du site
            </h2>
            <div className="rounded-2xl border border-[#DED6C8] bg-white p-6 text-sm space-y-1">
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

          {/* 3 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              3. Accès au site
            </h2>
            <p>
              Le Site est accessible gratuitement à tout utilisateur disposant
              d'un accès à Internet. Tous les frais liés à l'accès (matériel,
              connexion, etc.) sont à la charge exclusive de l'utilisateur.
            </p>
            <p className="mt-3">
              ORGA BUSINESS CONSULTING se réserve le droit de suspendre,
              modifier ou interrompre l'accès au Site, à tout moment et sans
              préavis, notamment pour des raisons de maintenance ou d'évolution
              technique.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              4. Propriété intellectuelle
            </h2>
            <p>
              L'ensemble des contenus du Site (textes, graphismes, logotypes,
              images, vidéos, etc.) sont la propriété exclusive de ORGA BUSINESS CONSULTING
              BUSINESS SOLUTIONS ou de ses partenaires, et sont protégés par
              les lois françaises et internationales relatives à la propriété
              intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication ou
              adaptation de tout ou partie des éléments du Site, quel que soit
              le moyen ou le procédé utilisé, est interdite sans l'autorisation
              écrite préalable de ORGA BUSINESS CONSULTING.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              5. Responsabilité
            </h2>
            <p>
              ORGA BUSINESS CONSULTING s'efforce de fournir des informations
              exactes et à jour. Cependant, la société ne saurait être tenue
              responsable des erreurs ou omissions, d'une indisponibilité du
              Site ou de dommages résultant de l'utilisation des informations
              présentes sur celui-ci.
            </p>
            <p className="mt-3">
              Les liens hypertextes présents sur le Site peuvent renvoyer vers
              des sites tiers. ORGA BUSINESS CONSULTING ne saurait être tenue
              responsable du contenu de ces sites.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              6. Données personnelles
            </h2>
            <p>
              La collecte et le traitement de données personnelles effectués via
              ce Site sont régis par notre{" "}
              <Link
                href="/politique-confidentialite"
                className="text-[#0F766E] underline hover:text-[#115E59]"
              >
                Politique de confidentialité
              </Link>
              , accessible à tout moment depuis le pied de page du Site.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              7. Cookies
            </h2>
            <p>
              Ce Site peut utiliser des cookies. Pour en savoir plus sur leur
              usage et la manière de les gérer, consultez notre{" "}
              <Link
                href="/cookies"
                className="text-[#0F766E] underline hover:text-[#115E59]"
              >
                Politique de cookies
              </Link>
              .
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              8. Droit applicable et juridiction
            </h2>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de
              litige relatif à leur interprétation ou à leur exécution, les
              parties s'engagent à rechercher une solution amiable avant tout
              recours judiciaire.
            </p>
            <p className="mt-3">
              À défaut d'accord amiable, tout litige sera soumis aux
              juridictions compétentes du ressort de [VILLE].
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              9. Modifications
            </h2>
            <p>
              ORGA BUSINESS CONSULTING se réserve le droit de modifier les
              présentes CGU à tout moment. Les modifications entrent en vigueur
              dès leur mise en ligne. Il appartient à l'utilisateur de les
              consulter régulièrement.
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
