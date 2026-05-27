import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pourquoi ORGA — ORGA BUSINESS CONSULTING",
  description:
    "Découvrez pourquoi ORGA BUSINESS CONSULTING existe et comment nous aidons les dirigeants africains à reprendre le contrôle de leur activité.",
};

export default function PourquoiOrgaPage() {
  const whatsappMessage =
    "Bonjour ORGA, j’ai lu votre vision et je souhaite faire un diagnostic pour mieux organiser mon activité.";

  const whatsappUrl = `https://wa.me/221XXXXXXXXX?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#0F172A]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-4xl">
          <p className="font-black text-[#0F766E]">Pourquoi ORGA</p>

          <h1 className="mt-4 text-5xl font-black leading-tight">
            Trop d’entreprises perdent de l’argent, non pas par manque
            d’activité, mais par manque d’organisation.
          </h1>

          <p className="mt-8 text-lg leading-8 text-[#475569]">
            Sur beaucoup de marchés africains, et particulièrement au Sénégal,
            les entrepreneurs avancent avec de l’énergie, du courage et des
            opportunités réelles. Mais très souvent, la gestion reste floue :
            les chiffres sont mal suivis, les responsabilités mal définies, les
            décisions prises dans l’urgence.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#475569]">
            Résultat : l’activité tourne, mais le dirigeant manque de visibilité.
            Il travaille beaucoup, mais ne sait pas toujours où part l’argent,
            où se créent les pertes, ni quelles actions doivent passer en
            priorité.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            [
              "Le problème",
              "Beaucoup d’entreprises fonctionnent sans vrai système de pilotage.",
            ],
            [
              "Le risque",
              "Sans organisation claire, les pertes deviennent invisibles.",
            ],
            [
              "Notre rôle",
              "Transformer le flou en décisions simples, suivies et mesurables.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-[#DED6C8] bg-white p-8 shadow-sm"
            >
              <p className="font-black text-[#0F766E]">{title}</p>
              <p className="mt-4 text-sm leading-6 text-[#475569]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="font-black text-[#0F766E]">Le constat</p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Le marché n’a pas seulement besoin de conseil. Il a besoin de
              structure.
            </h2>
          </div>

          <div className="space-y-5 text-[#475569]">
            <p>
              Beaucoup d’entrepreneurs savent vendre, produire, convaincre et
              créer de la valeur. Mais sans outils simples de suivi, sans
              organisation claire et sans lecture régulière des chiffres, ils
              pilotent souvent à l’instinct.
            </p>

            <p>
              ORGA BUSINESS CONSULTING est né de cette réalité : aider les
              dirigeants à reprendre le contrôle sans complexifier leur
              activité.
            </p>

            <p className="font-black text-[#0F172A]">
              Notre conviction est simple : une entreprise mieux organisée est
              une entreprise plus rentable, plus sereine et plus durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EFE9DD] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black text-[#0F766E]">Notre mission</p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Rendre le pilotage accessible aux entreprises qui veulent grandir
              proprement.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              "Clarifier les chiffres",
              "Organiser les tâches",
              "Structurer les responsabilités",
              "Suivre les décisions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-7 font-black shadow-sm"
              >
                <span className="text-[#0F766E]">✓</span>
                <p className="mt-4">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] px-6 py-24 text-center text-white">
        <p className="font-black text-[#5EEAD4]">
          Vous vous reconnaissez dans cette situation ?
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight">
          Le premier pas, ce n’est pas de tout changer. C’est de voir clairement
          ce qui bloque.
        </h2>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            className="rounded-xl bg-[#0F766E] px-8 py-5 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#115E59]"
          >
            Faire mon diagnostic gratuit
          </a>

          <Link
            href="/offres"
            className="rounded-xl border border-white/20 px-8 py-5 font-black text-white transition hover:border-[#5EEAD4] hover:text-[#5EEAD4]"
          >
            Voir les offres
          </Link>
        </div>
      </section>
    </main>
  );
}