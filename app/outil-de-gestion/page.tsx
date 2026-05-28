import Link from "next/link";

export default function OutilDeGestionPage() {
  const whatsappMessage =
    "Bonjour ORGA, je souhaite voir comment ORGA peut m’aider à mieux suivre mon activité.\n\nMon activité : \nCe que je veux mieux suivre : ";

  const whatsappUrl = `https://wa.me/221XXXXXXXXX?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F172A]">
      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="font-black text-[#0F766E]">Outil de gestion ORGA</p>

          <h1 className="mt-4 text-5xl font-black leading-tight">
            Pilotez vos tâches, vos dossiers et vos priorités au même endroit.
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#475569]">
            ORGA transforme votre activité en tableau de bord clair : ce qui est
            en cours, ce qui bloque, qui fait quoi, et ce qui doit avancer en
            priorité.
          </p>

          <p className="mt-4 text-lg font-black">
            Une vision claire. Des décisions plus rapides.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={whatsappUrl}
              className="rounded-xl bg-[#0F766E] px-8 py-5 text-center font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#115E59]"
            >
              Demander une démo ORGA
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#0F766E] bg-white px-8 py-5 text-center font-black text-[#0F766E] shadow-sm transition hover:-translate-y-1 hover:bg-[#F8FFFC]"
            >
              Demander une démo
            </a>
          </div>

          <p className="mt-4 text-sm text-[#64748B]">
            Disponible seul ou intégré dans l’accompagnement ORGA BUSINESS SOLUTIONS.
          </p>
        </div>

        {/* DASHBOARD PREMIUM */}
        <div className="relative pb-10">
          <div className="rounded-4xl border-8 border-[#111827] bg-[#FDFBF7] p-5 shadow-2xl">
            <div className="flex gap-4">
              <aside className="hidden w-32 space-y-4 rounded-2xl bg-[#F4EFE7] p-4 text-xs font-bold text-[#475569] sm:block">
                <p className="font-black text-[#0F766E]">ORGA</p>
                {[
                  "Tableau de bord",
                  "Tâches",
                  "Dossiers",
                  "Clients",
                  "Équipes",
                  "Rapports",
                ].map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </aside>

              <div className="flex-1">
                <p className="font-black">Tableau de bord</p>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Tâches en cours", "12", "4 en retard"],
                    ["Dossiers actifs", "28", "3 à traiter"],
                    ["Projets", "06", "2 en retard"],
                  ].map(([label, value, detail]) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-white p-4 shadow-sm"
                    >
                      <p className="text-xs text-[#64748B]">{label}</p>
                      <p className="mt-2 text-2xl font-black">{value}</p>
                      <p className="mt-1 text-xs font-bold text-[#D65A31]">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-[1.4fr_0.8fr]">
                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-sm font-black">Activité sur 30 jours</p>

                    <div className="mt-7 flex h-28 items-end gap-3">
                      {[35, 50, 45, 65, 55, 48, 78, 58, 72, 95].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="w-full rounded-t-lg bg-[#0F766E]/30"
                            style={{ height: `${height}%` }}
                          />
                        ),
                      )}
                    </div>
                  </div>

                  <div className="grid place-items-center rounded-2xl bg-white p-5 shadow-sm">
                    <div className="grid h-24 w-24 place-items-center rounded-full border-14 border-[#0F766E]/80 text-xl font-black">
                      72%
                    </div>
                    <p className="mt-3 text-sm font-bold">
                      Avancement global
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-2 right-4 w-32 rounded-4xl border-8 border-[#111827] bg-[#FDFBF7] p-3 shadow-2xl sm:w-40">
            <p className="text-xs font-black">Tâches</p>

            <div className="mt-3 space-y-2 text-[10px]">
              {["En cours", "Terminé", "À faire", "Urgent"].map((item) => (
                <div key={item} className="rounded-xl bg-[#EAF2E8] px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONSTATS */}
      <section className="bg-white px-6 py-20 text-center">
        <p className="font-black text-[#0F766E]">Constat</p>

        <h2 className="mt-3 text-4xl font-black">
          Sans outil, tout devient flou.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-[#475569]">
          Les informations se dispersent entre WhatsApp, les notes, les fichiers
          et la mémoire du dirigeant. À force, les priorités disparaissent et
          les retards arrivent trop tard.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            ["Tâches oubliées", "Les actions se perdent dans les échanges."],
            ["Suivi manuel", "Vous relancez sans vision globale."],
            ["Décisions tardives", "Les urgences remontent trop tard."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-[#E8DED0] bg-[#F7F4EE] p-8 text-left shadow-sm"
            >
              <p className="text-xl font-black">{title}</p>
              <p className="mt-3 text-sm leading-6 text-[#475569]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-[#EFE9DD] px-6 py-20 text-center">
        <p className="font-black text-[#0F766E]">Solution</p>

        <h2 className="mt-3 text-4xl font-black">
          ORGA met de la clarté dans votre activité.
        </h2>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-4">
          {[
            "Tâches",
            "Dossiers",
            "Responsables",
            "Priorités",
            "Suivi",
            "Retards",
            "Décisions",
            "Vision globale",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white p-6 font-black shadow-sm"
            >
              <span className="text-[#0F766E]">✓</span>
              <p className="mt-3">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="bg-[#F7F4EE] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-black text-[#0F766E]">
            Fonctionnalités
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-black">
            Tout ce qu’il faut pour piloter sans courir derrière l’information.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              [
                "Suivi des tâches",
                "Visualisez les tâches en cours, terminées, en retard ou prioritaires.",
              ],
              [
                "Gestion des dossiers",
                "Regroupez clients, missions, suivis et documents au même endroit.",
              ],
              [
                "Responsabilités claires",
                "Chaque action a un propriétaire, une priorité et un état d’avancement.",
              ],
              [
                "Dashboard dirigeant",
                "Suivez les indicateurs utiles sans tableau compliqué.",
              ],
              [
                "Rapports lisibles",
                "Identifiez rapidement ce qui avance, ce qui bloque et ce qui mérite action.",
              ],
              [
                "Organisation multi-services",
                "Comptabilité, commerce, RH, juridique : chaque service garde sa logique.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-[#E8DED0] bg-white p-8 shadow-sm"
              >
                <p className="text-xl font-black">{title}</p>
                <p className="mt-3 text-sm leading-6 text-[#475569]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANT / APRÈS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-[#0F172A] p-10 text-white shadow-xl">
            <p className="font-black text-red-300">Avant ORGA</p>

            <h2 className="mt-4 text-3xl font-black">
              Vous subissez votre organisation.
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              Les tâches avancent sans visibilité, les retards arrivent trop
              tard, et le suivi dépend souvent de relances manuelles.
            </p>
          </div>

          <div className="rounded-3xl bg-[#EAF2E8] p-10 shadow-sm">
            <p className="font-black text-[#0F766E]">Avec ORGA</p>

            <h2 className="mt-4 text-3xl font-black">
              Vous pilotez avec contrôle.
            </h2>

            <p className="mt-5 leading-8 text-[#475569]">
              Vous voyez les tâches, les responsables, les priorités et les
              points de blocage au même endroit. Enfin un tableau de bord qui ne
              ressemble pas à une punition Excel.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F172A] px-6 py-24 text-center text-white">
        <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight">
          Le bon outil dépend de ce que vous voulez contrôler.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-white/70">
          Parlons de votre organisation actuelle et voyons comment ORGA peut
          clarifier votre pilotage.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={whatsappUrl}
            className="rounded-xl bg-[#0F766E] px-8 py-5 text-center text-lg font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#115E59]"
          >
            Accéder à ORGA
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 bg-white px-8 py-5 text-center text-lg font-black text-[#0F172A] shadow-xl transition hover:-translate-y-1 hover:bg-[#F7F4EE]"
          >
            Demander une démo
          </a>
        </div>

        <p className="mt-4 text-sm text-white/60">
          Échange rapide • Sans engagement
        </p>
      </section>
    </div>
  );
}
