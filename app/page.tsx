import Link from "next/link";

export default function Home() {
  const whatsappMessage =
    "Bonjour ORGA, je souhaite demander une démo ORGA pour mieux piloter mon activité.\n\nMon activité : \nMon principal besoin aujourd’hui : \nMon objectif : ";

  const whatsappUrl = `https://wa.me/221XXXXXXXXX?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const heroItems = [
    ["Tâches", "12 en cours", "4 en retard", "☷"],
    ["Dossiers", "Clients, missions et suivis regroupés", "", "▭"],
    ["Responsables", "Équipes et rôles clairement définis", "", "♟"],
    ["Priorités", "Focus sur ce qui fait avancer", "", "◎"],
  ];

  const featureCards = [
    [
      "◔",
      "Pilotage clair",
      "Suivez vos tâches, dossiers et indicateurs en temps réel.",
    ],
    [
      "◆",
      "Organisation solide",
      "Structurez vos équipes, vos rôles et vos responsabilités.",
    ],
    [
      "↗",
      "Meilleures décisions",
      "Prenez des décisions basées sur des données fiables.",
    ],
  ];

  const approachCards = [
    [
      "01",
      "Analyser",
      "Nous identifions vos forces, vos faiblesses et les pertes invisibles qui freinent votre croissance.",
    ],
    [
      "02",
      "Structurer",
      "Nous mettons en place une organisation claire, des processus simples et des priorités solides.",
    ],
    [
      "03",
      "Piloter",
      "Nous vous donnons les outils et les indicateurs pour suivre, décider et améliorer vos résultats.",
    ],
  ];

  const orgaBullets = [
    "Suivi des tâches et des priorités",
    "Gestion des dossiers et des clients",
    "Organisation des équipes et des responsabilités",
    "Tableaux de bord et rapports clairs",
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F172A]">
      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-16 pt-14 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="text-sm font-black text-[#0F766E]">
            Cabinet conseil & organisation
          </p>

          <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.08] tracking-tight text-[#0F172A] md:text-6xl">
            Reprenez le contrôle de votre activité.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-[#334155]">
            ORGA BUSINESS CONSULTING aide les dirigeants africains à organiser,
            piloter et développer leur activité avec méthode — conseil terrain,
            structuration et outil de gestion adaptés à votre réalité.
          </p>

          <p className="mt-6 text-xl font-black text-[#0F172A]">
            Moins de flou. Des décisions claires.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#0F766E] px-7 py-5 text-center text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#115E59]"
            >
              ⦿ Faire mon diagnostic gratuit
            </a>

            <Link
              href="/offres"
              className="rounded-2xl border border-[#0F766E] bg-white px-7 py-5 text-center text-sm font-black text-[#0F766E] shadow-sm transition hover:-translate-y-1 hover:bg-[#F8FFFC]"
            >
              ▷ Voir nos offres
            </Link>
          </div>

        </div>

        <div className="rounded-4xl bg-linear-to-br from-[#072F2A] via-[#0A3E36] to-[#061F1C] p-8 text-white shadow-[0_30px_90px_rgba(6,31,28,0.35)]">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black text-[#D9F4EA]">
            Outil ORGA — Tableau de bord
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-tight">
            Votre activité devient lisible.
          </h2>

          <div className="mt-8 space-y-3">
            {heroItems.map(([title, main, sub, icon]) => (
              <div
                key={title}
                className="flex items-center justify-between rounded-3xl border border-white/5 bg-white/10 p-5 shadow-inner backdrop-blur"
              >
                <div>
                  <p className="text-sm text-white/65">{title}</p>
                  <p className="mt-2 text-xl font-black">{main}</p>
                  {sub ? (
                    <p className="mt-1 text-sm text-white/75">{sub}</p>
                  ) : null}
                </div>

                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#EAF5EE] text-2xl font-black text-[#0F766E] shadow-lg">
                  {icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 CARTES */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid overflow-hidden rounded-3xl border border-[#E8DED0] bg-white/80 shadow-sm md:grid-cols-3">
          {featureCards.map(([icon, title, text], index) => (
            <div
              key={title}
              className={`flex items-center gap-7 p-8 ${
                index !== 0
                  ? "border-t border-[#E8DED0] md:border-l md:border-t-0"
                  : ""
              }`}
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#E0EEE4] text-3xl font-black text-[#0F766E]">
                {icon}
              </div>

              <div>
                <p className="font-black">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[#334155]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPROCHE */}
      <section className="mx-auto max-w-7xl px-6 pb-20 text-center">
        <p className="text-sm font-black text-[#0F766E]">Notre approche</p>

        <h2 className="mt-4 text-4xl font-black tracking-tight">
          Une méthode simple, orientée résultats.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[#475569]">
          Nous combinons conseil, organisation et outil pour transformer votre
          activité.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {approachCards.map(([step, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-[#E8DED0] bg-white/80 p-8 text-left shadow-sm"
            >
              <div className="grid h-16 w-16 place-items-center rounded-full bg-[#0F766E] text-lg font-black text-white shadow-xl">
                {step}
              </div>

              <p className="mt-7 text-xl font-black">{title}</p>
              <p className="mt-3 text-sm leading-6 text-[#334155]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POUR QUI */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="text-center">
          <p className="text-sm font-black text-[#0F766E]">Pour qui ?</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Vous reconnaissez-vous dans l'une de ces situations ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#475569]">
            Nous accompagnons des dirigeants de tous secteurs, à des étapes
            très différentes de leur activité.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "◔",
              profil: "Le dirigeant débordé",
              situation:
                "Vous gérez tout à la fois — les clients, les finances, les équipes — et vous n'avez jamais de vue d'ensemble claire sur ce qui avance vraiment.",
              tag: "Organisation & pilotage",
            },
            {
              icon: "◆",
              profil: "L'entrepreneur qui veut structurer",
              situation:
                "Votre activité tourne, mais vous sentez que sans une vraie structure, vous allez plafonner ou perdre le contrôle à la prochaine étape de croissance.",
              tag: "Structuration & processus",
            },
            {
              icon: "▣",
              profil: "Le gérant sans visibilité financière",
              situation:
                "Vous ne savez pas exactement où va l'argent, vos marges sont floues, et vous prenez vos décisions financières à l'instinct.",
              tag: "Comptabilité & DAF",
            },
            {
              icon: "↗",
              profil: "Le manager qui veut des outils",
              situation:
                "Vous dirigez une équipe mais le suivi des tâches, des dossiers et des priorités se fait encore par WhatsApp, Excel ou la mémoire.",
              tag: "Outil ORGA",
            },
          ].map(({ icon, profil, situation, tag }) => (
            <div
              key={profil}
              className="flex flex-col rounded-3xl border border-[#E8DED0] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#0F766E] hover:shadow-xl"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#EAF2E8] text-2xl font-black text-[#0F766E]">
                {icon}
              </div>
              <p className="mt-6 font-black text-[#0F172A]">{profil}</p>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#475569]">
                {situation}
              </p>
              <span className="mt-6 inline-block rounded-full bg-[#EAF2E8] px-4 py-2 text-xs font-black text-[#0F766E]">
                {tag}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#64748B]">
            Vous n'êtes pas sûr de rentrer dans une case ?{" "}
            <a
              href={`https://wa.me/221XXXXXXXXX?text=${encodeURIComponent("Bonjour ORGA, je souhaite faire un diagnostic pour comprendre ce qui bloque dans mon activité.\n\nMon activité : \nMon principal problème aujourd'hui : \nMon objectif : ")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-[#0F766E] underline hover:text-[#115E59]"
            >
              Décrivez-nous votre situation
            </a>{" "}
            — on vous oriente.
          </p>
        </div>
      </section>

      {/* ORGA */}
      <section className="mx-auto max-w-7xl px-6 pb-6">
        <div className="grid items-center gap-12 rounded-4xl bg-[#EAF2E8] p-8 shadow-sm lg:grid-cols-2 lg:p-12">
          <div className="relative pb-8">
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

          <div>
            <p className="text-sm font-black text-[#0F766E]">ORGA</p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Un outil pensé pour les dirigeants.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-[#475569]">
              Simple, puissant et adapté à toutes les entreprises. ORGA peut
              être utilisé seul ou intégré dans notre accompagnement.
            </p>

            <ul className="mt-8 space-y-4">
              {orgaBullets.map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#0F766E] text-xs text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/outil-de-gestion"
                className="rounded-2xl bg-[#0F766E] px-8 py-5 text-center text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#115E59]"
              >
                Découvrir ORGA ↗
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#0F766E] bg-white px-8 py-5 text-center text-sm font-black text-[#0F766E] transition hover:-translate-y-1 hover:bg-[#F8FFFC]"
              >
                Demander une démo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 rounded-4xl bg-[#0F172A] p-10 text-white shadow-[0_30px_90px_rgba(6,31,28,0.25)] lg:grid-cols-2 lg:p-14">
          {/* GAUCHE */}
          <div>
            <p className="text-sm font-black text-[#5EEAD4]">Contact</p>
            <h2 className="mt-4 text-4xl font-black leading-tight">
              Parlons de votre activité.
            </h2>
            <p className="mt-5 max-w-md leading-8 text-white/70">
              Un échange de 20 minutes suffit souvent à identifier ce qui
              bloque. Pas de jargon, pas d'engagement — juste une conversation
              claire sur votre situation.
            </p>

            <div className="mt-10 space-y-5">
              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-xl">
                  ✆
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/50">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/221XXXXXXXXX`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black text-white transition hover:text-[#5EEAD4]"
                  >
                    +221 XX XXX XX XX
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-xl">
                  @
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/50">
                    Email
                  </p>
                  <a
                    href="mailto:contact@teranga-business.com"
                    className="font-black text-white transition hover:text-[#5EEAD4]"
                  >
                    contact@teranga-business.com
                  </a>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-xl">
                  ◎
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/50">
                    Localisation
                  </p>
                  <p className="font-black text-white">Dakar, Sénégal</p>
                </div>
              </div>
            </div>
          </div>

          {/* DROITE */}
          <div className="flex flex-col justify-between gap-8">
            <div className="rounded-3xl bg-white/10 p-8">
              <p className="font-black text-[#5EEAD4]">Le diagnostic gratuit</p>
              <p className="mt-3 leading-7 text-white/80">
                Envoyez un message WhatsApp avec votre activité et votre
                principal problème. On vous répond rapidement avec une première
                lecture de votre situation.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {[
                  "20 minutes d'échange structuré",
                  "Identification des priorités",
                  "Recommandation claire et sans engagement",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-[#5EEAD4]/20 text-xs text-[#5EEAD4]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/221XXXXXXXXX?text=${encodeURIComponent(
                "Bonjour ORGA, je souhaite faire un diagnostic pour comprendre ce qui bloque dans mon activité.\n\nMon activité : \nMon principal problème aujourd'hui : \nMon objectif : ",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-[#0F766E] px-8 py-6 text-center text-lg font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#115E59] hover:shadow-[0_20px_50px_rgba(15,118,110,0.35)]"
            >
              ✆ Démarrer mon diagnostic gratuit
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}