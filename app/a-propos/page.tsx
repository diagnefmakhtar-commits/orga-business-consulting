import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — ORGA BUSINESS CONSULTING",
  description:
    "Découvrez qui est derrière ORGA BUSINESS CONSULTING, notre vision et notre approche du conseil aux dirigeants.",
};

export default function APropos() {
  const whatsappUrl = `https://wa.me/221XXXXXXXXX?text=${encodeURIComponent(
    "Bonjour ORGA, j'ai lu votre présentation et j'aimerais en savoir plus sur votre accompagnement.",
  )}`;

  const valeurs = [
    {
      icon: "◎",
      title: "Clarté avant tout",
      text: "Nous ne livrons pas des rapports épais. Nous livrons des décisions claires et des priorités actionnables.",
    },
    {
      icon: "◆",
      title: "Proximité avec le terrain",
      text: "Nous parlons la langue des dirigeants : concret, direct, orienté résultats — pas de jargon inutile.",
    },
    {
      icon: "↗",
      title: "Accompagnement durable",
      text: "Notre objectif n'est pas de créer une dépendance. C'est de vous rendre autonome avec les bons outils.",
    },
    {
      icon: "▣",
      title: "Structure adaptée à chaque contexte",
      text: "Chaque entreprise est différente. Nous adaptons notre méthode à votre réalité, pas l'inverse.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F172A]">

      {/* HERO */}
      <section className="border-b border-[#DED6C8] bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black text-[#0F766E]">À propos</p>
              <h1 className="mt-4 text-5xl font-black leading-[1.08] tracking-tight">
                Un cabinet construit pour les dirigeants qui veulent reprendre le contrôle.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#475569]">
                ORGA BUSINESS CONSULTING est né d'un constat simple : trop
                d'entreprises africaines ont du potentiel mais manquent de
                structure pour le transformer en résultats durables.
              </p>
            </div>

            {/* CARTE FONDATEUR */}
            <div className="rounded-3xl border border-[#DED6C8] bg-[#F7F4EE] p-10 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-[#0F766E] text-3xl font-black text-white shadow-lg">
                  [P]
                </div>
                <div>
                  <p className="text-xl font-black">[Prénom NOM]</p>
                  <p className="mt-1 text-sm text-[#0F766E] font-bold">
                    Fondateur — ORGA BUSINESS CONSULTING
                  </p>
                </div>
              </div>
              <p className="mt-6 leading-8 text-[#475569]">
                "[Une phrase clé du fondateur sur sa vision ou sa conviction — à personnaliser]"
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "[Formation / diplôme]",
                  "[Expérience terrain]",
                  "[Spécialité]",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#DED6C8] bg-white px-4 py-2 text-xs font-bold text-[#475569]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-black text-[#0F766E]">Notre histoire</p>
            <h2 className="mt-4 text-4xl font-black leading-tight">
              Pourquoi ORGA existe.
            </h2>
          </div>

          <div className="space-y-5 text-[#475569] leading-8">
            <p>
              Sur les marchés africains, et particulièrement au Sénégal, les
              entrepreneurs avancent avec de l'énergie, du courage et des
              opportunités réelles. Mais très souvent, la gestion reste floue :
              les chiffres sont mal suivis, les responsabilités mal définies,
              les décisions prises dans l'urgence.
            </p>
            <p>
              L'activité tourne, mais le dirigeant manque de visibilité. Il
              travaille beaucoup, mais ne sait pas toujours où part l'argent,
              où se créent les pertes, ni quelles actions doivent passer en
              priorité.
            </p>
            <p className="font-black text-[#0F172A]">
              ORGA BUSINESS CONSULTING est né pour changer ça. Pas avec des méthodes complexes
              importées sans adaptation, mais avec une approche claire, ancrée
              dans la réalité du terrain africain.
            </p>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black text-[#0F766E]">Nos valeurs</p>
            <h2 className="mt-4 text-4xl font-black">
              Ce qui guide notre façon de travailler.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valeurs.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-[#E8DED0] bg-[#F7F4EE] p-8 shadow-sm"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0F766E] text-2xl font-black text-white shadow-lg">
                  {v.icon}
                </div>
                <p className="mt-6 font-black text-[#0F172A]">{v.title}</p>
                <p className="mt-3 text-sm leading-6 text-[#475569]">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="bg-[#EAF2E8] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black text-[#0F766E]">Notre approche</p>
              <h2 className="mt-4 text-4xl font-black leading-tight">
                Simple, concret, orienté résultats.
              </h2>
              <p className="mt-5 leading-8 text-[#475569]">
                Nous commençons toujours par comprendre votre réalité avant de
                proposer quoi que ce soit. Un diagnostic honnête vaut mieux
                qu'une solution générique.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  ["01", "On écoute", "Comprendre votre activité, vos contraintes et vos priorités réelles."],
                  ["02", "On structure", "Identifier les blocages, clarifier les priorités, poser les bases."],
                  ["03", "On pilote ensemble", "Mettre en place les outils et le suivi pour que ça dure."],
                ].map(([num, title, text]) => (
                  <div key={title} className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0F766E] text-sm font-black text-white">
                      {num}
                    </div>
                    <div>
                      <p className="font-black text-[#0F172A]">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#475569]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6">
              <div className="rounded-3xl bg-[#0F172A] p-10 text-white shadow-xl">
                <p className="font-black text-[#5EEAD4]">Notre conviction</p>
                <p className="mt-5 text-2xl font-black leading-snug">
                  Une entreprise mieux organisée est une entreprise plus
                  rentable, plus sereine et plus durable.
                </p>
                <p className="mt-5 leading-7 text-white/70">
                  Ce n'est pas une question de taille ou de secteur. C'est une
                  question de méthode et de rigueur dans le suivi.
                </p>
              </div>

              <div className="rounded-3xl border border-[#DED6C8] bg-white p-8 shadow-sm">
                <p className="font-black text-[#0F172A]">Pour qui ?</p>
                <ul className="mt-4 space-y-3 text-sm text-[#475569]">
                  {[
                    "Dirigeants de TPE/PME qui pilotent à l'instinct",
                    "Entrepreneurs qui sentent que quelque chose bloque",
                    "Chefs d'entreprise qui veulent structurer leur croissance",
                    "Managers qui ont besoin d'outils simples et efficaces",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0F766E] text-xs text-white">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F172A] px-6 py-24 text-center text-white">
        <p className="text-sm font-black text-[#5EEAD4]">
          Prêt à en parler ?
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-black leading-tight">
          Le premier échange ne coûte rien. Et il peut tout changer.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
          20 minutes pour comprendre où vous en êtes et ce qui peut vraiment
          changer dans votre activité.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#0F766E] px-8 py-5 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#115E59]"
          >
            ✆ Faire mon diagnostic gratuit
          </a>
          <Link
            href="/offres"
            className="rounded-2xl border border-white/20 px-8 py-5 font-black text-white transition hover:border-[#5EEAD4] hover:text-[#5EEAD4]"
          >
            Voir les offres
          </Link>
        </div>
      </section>
    </div>
  );
}
