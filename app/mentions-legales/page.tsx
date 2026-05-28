import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — ORGA BUSINESS SOLUTIONS",
  description: "Mentions légales de ORGA BUSINESS SOLUTIONS.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F172A]">
      {/* HERO */}
      <section className="border-b border-[#DED6C8] bg-white py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-black text-[#0F766E]">Légal</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight">
            Mentions légales
          </h1>
          <p className="mt-3 text-[#475569]">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
            pour la confiance en l'économie numérique (LCEN).
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-10 text-[#334155] leading-8">

          {/* 1 – Éditeur */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              1. Éditeur du site
            </h2>
            <div className="rounded-2xl border border-[#DED6C8] bg-white p-6 text-sm space-y-2">
              <p><strong>Raison sociale :</strong> [NOM/SOCIÉTÉ]</p>
              <p><strong>Forme juridique :</strong> [Forme juridique]</p>
              <p><strong>Capital social :</strong> [Capital social]</p>
              <p><strong>SIRET :</strong> [SIRET]</p>
              <p><strong>Siège social :</strong> [ADRESSE], [VILLE]</p>
              <p>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:[EMAIL]"
                  className="text-[#0F766E] underline hover:text-[#115E59]"
                >
                  [EMAIL]
                </a>
              </p>
              <p><strong>Directeur de publication :</strong> [NOM/SOCIÉTÉ]</p>
            </div>
          </div>

          {/* 2 – Hébergement */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              2. Hébergement
            </h2>
            <div className="rounded-2xl border border-[#DED6C8] bg-white p-6 text-sm space-y-2">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p>
                <strong>Site :</strong>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F766E] underline hover:text-[#115E59]"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </div>

          {/* 3 – Propriété intellectuelle */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              3. Propriété intellectuelle
            </h2>
            <p>
              L'ensemble des éléments constituant ce site (textes, graphismes,
              logiciels, photographies, images, sons, plans, noms, logos,
              marques, etc.) est la propriété exclusive de [NOM/SOCIÉTÉ] ou de
              ses partenaires.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, utilisation ou adaptation,
              sous quelque forme que ce soit, de tout ou partie de ces éléments,
              y compris les applications informatiques, sans l'accord préalable
              et écrit de [NOM/SOCIÉTÉ], est strictement interdite.
            </p>
          </div>

          {/* 4 – Responsabilité */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              4. Limitation de responsabilité
            </h2>
            <p>
              [NOM/SOCIÉTÉ] s'efforce d'assurer l'exactitude et la mise à jour
              des informations diffusées sur ce site. Toutefois, elle ne peut
              garantir l'exactitude, la précision ou l'exhaustivité des
              informations mises à disposition.
            </p>
            <p className="mt-3">
              [NOM/SOCIÉTÉ] décline toute responsabilité pour toute imprécision,
              inexactitude ou omission portant sur des informations disponibles
              sur ce site, ainsi que pour tout dommage résultant d'une intrusion
              frauduleuse d'un tiers.
            </p>
          </div>

          {/* 5 – Données personnelles */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              5. Données personnelles
            </h2>
            <p>
              Les informations recueillies sur ce site font l'objet d'un
              traitement informatique destiné à [NOM/SOCIÉTÉ]. Conformément à la
              loi «&nbsp;Informatique et Libertés&nbsp;» et au RGPD, vous disposez
              d'un droit d'accès, de rectification et de suppression des données
              vous concernant.
            </p>
            <p className="mt-3">
              Pour en savoir plus, consultez notre{" "}
              <Link
                href="/politique-confidentialite"
                className="text-[#0F766E] underline hover:text-[#115E59]"
              >
                Politique de confidentialité
              </Link>
              .
            </p>
          </div>

          {/* 6 – Cookies */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              6. Cookies
            </h2>
            <p>
              Ce site est susceptible d'utiliser des cookies. Pour plus
              d'informations, consultez notre{" "}
              <Link
                href="/cookies"
                className="text-[#0F766E] underline hover:text-[#115E59]"
              >
                Politique de cookies
              </Link>
              .
            </p>
          </div>

          {/* 7 – Droit applicable */}
          <div>
            <h2 className="text-xl font-black text-[#0F172A] mb-3">
              7. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, les juridictions françaises seront seules
              compétentes.
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
