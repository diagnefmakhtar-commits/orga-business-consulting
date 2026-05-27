import type { Metadata } from "next";
import {
  BarChart3,
  CheckCircle2,
  LayoutDashboard,
  Layers,
  Settings,
  ShieldCheck,
  TrendingUp,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Offres & tarifs — ORGA BUSINESS CONSULTING",
  description:
    "Diagnostic, organisation, comptabilité, DAF externalisé ou outil ORGA : choisissez le niveau d'accompagnement adapté à votre activité.",
};

export default function OffresPage() {
  const whatsappMessage =
    "Bonjour ORGA, je souhaite obtenir un diagnostic pour comprendre quelle offre est adaptée à mon activité.";

  const whatsappUrl = `https://wa.me/221XXXXXXXXX?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  // Offres ordonnées par prix croissant : 75k → 120k → 150k → 250k
  const offers = [
    {
      icon: BarChart3,
      title: "Diagnostic & Conseil",
      badge: "Par où commencer",
      badgeStyle: "light",
      price: "75 000 FCFA",
      frequency: "one-shot",
      text: "Pour identifier rapidement les pertes, les blocages et les priorités de votre activité.",
      missions: [
        "Audit organisationnel complet",
        "Diagnostic entreprise & chiffres",
        "Identification des blocages prioritaires",
        "Optimisation des process existants",
        "Plan d'action concret et chiffré",
        "Cartographie des process internes",
      ],
      result: "Vous savez exactement quoi corriger et par où commencer.",
      cta: "Démarrer par un diagnostic",
    },
    {
      icon: LayoutDashboard,
      title: "Comptabilité & Pilotage Financier",
      badge: "Mensuel",
      badgeStyle: "light",
      price: "120 000 FCFA",
      frequency: "/ mois · ORGA inclus",
      text: "Pour piloter votre entreprise avec des indicateurs financiers fiables et une comptabilité claire.",
      missions: [
        "Comptabilité courante & bilans",
        "Déclarations fiscales & liasse",
        "Tableaux de bord & KPI personnalisés",
        "Budget, trésorerie & prévisionnels",
        "Reporting mensuel & analyse rentabilité",
        "Contrôle de gestion & aide à la décision",
        "Accès plateforme ORGA inclus",
      ],
      result: "Vous suivez sans courir derrière tout le monde.",
      cta: "Mettre en place le pilotage",
    },
    {
      icon: Settings,
      title: "Organisation & Gestion",
      badge: "Recommandé",
      badgeStyle: "highlight",
      price: "150 000 FCFA",
      frequency: "/ mois · ORGA inclus",
      text: "Pour structurer votre administration, votre comptabilité et vos process internes.",
      missions: [
        "Organisation administrative complète",
        "Gestion documentaire & classement numérique",
        "Facturation & suivi clients / fournisseurs",
        "Pré-comptabilité & rapprochement bancaire",
        "Procédures internes & workflows opérationnels",
        "Externalisation administrative",
        "Accès plateforme ORGA inclus",
      ],
      result: "Votre activité devient lisible, structurée et maîtrisée.",
      cta: "Structurer mon activité",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#111827]">
      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-14 pb-20 md:grid-cols-2">
        <div>
          <p className="font-bold text-[#0F766E]">Offres & tarifs</p>

          <h1 className="mt-2 text-5xl font-black leading-[1.1] text-[#0F172A]">
            Des offres claires pour reprendre le contrôle de votre activité.
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#475569]">
            Vous choisissez le niveau adapté : diagnostic, organisation,
            pilotage financier ou DAF externalisé.
          </p>

          <div className="mt-6 rounded-2xl border border-[#DED6C8] bg-white p-5 shadow-sm">
            <p className="font-black text-[#0F172A]">
              Pas sûr par où commencer ?
            </p>
            <p className="mt-2 text-[#475569]">
              Le diagnostic décide pour vous : 20 minutes pour identifier ce
              qui bloque et l'offre la plus adaptée à votre situation.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              className="rounded-xl bg-[#0F766E] px-8 py-5 text-center font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#115E59] hover:shadow-xl"
            >
              Obtenir mon diagnostic gratuit
            </a>

            <a
              href="#offres"
              className="rounded-xl border border-[#CBD5E1] px-8 py-5 text-center font-bold transition hover:border-[#0F766E] hover:text-[#0F766E]"
            >
              Voir les offres
            </a>
          </div>

          <p className="mt-3 text-sm text-[#64748B]">
            Réponse rapide • Sans engagement
          </p>
        </div>

        <div className="rounded-4xl bg-linear-to-br from-[#0F172A] to-[#1E293B] p-10 text-white shadow-[0_25px_80px_rgba(0,0,0,0.4)]">
          <p className="font-bold text-[#5EEAD4]">
            Ce que vous achetez vraiment
          </p>

          <h2 className="mt-4 text-3xl font-black">
            Pas du conseil abstrait. Du contrôle concret.
          </h2>

          <div className="mt-8 space-y-4">
            {[
              "Savoir où va l'argent",
              "Clarifier les responsabilités",
              "Suivre les actions importantes",
              "Décider avec des données",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-5 transition hover:bg-white/20"
              >
                <CheckCircle2 className="h-5 w-5 text-[#5EEAD4]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANCRAGE */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-6 rounded-3xl border border-[#DED6C8] bg-white p-8 shadow-sm md:grid-cols-3">
          <div>
            <TrendingUp className="h-7 w-7 text-[#0F766E]" />
            <p className="mt-3 font-black text-[#0F172A]">
              Une mauvaise organisation coûte cher.
            </p>
            <p className="mt-2 text-sm text-[#475569]">
              Retards, pertes, doublons, décisions floues.
            </p>
          </div>

          <div>
            <ShieldCheck className="h-7 w-7 text-[#0F766E]" />
            <p className="mt-3 font-black text-[#0F172A]">
              Une bonne structure protège votre marge.
            </p>
            <p className="mt-2 text-sm text-[#475569]">
              Vous savez quoi faire, quand, par qui et pourquoi.
            </p>
          </div>

          <div>
            <CheckCircle2 className="h-7 w-7 text-[#0F766E]" />
            <p className="mt-3 font-black text-[#0F172A]">
              Le diagnostic réduit le risque.
            </p>
            <p className="mt-2 text-sm text-[#475569]">
              On commence petit, puis on construit proprement.
            </p>
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section id="offres" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 text-center">
          <p className="font-bold text-[#0F766E]">Comparatif simple</p>
          <h2 className="mt-3 text-4xl font-black text-[#0F172A]">
            Choisissez votre niveau de pilotage.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[#475569]">
            Les offres sont ordonnées par budget croissant. Si vous hésitez,
            commencez par le diagnostic — il oriente vers la bonne option.
          </p>
        </div>

        {/* 3 cartes principales — prix croissant */}
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {offers.map((offer) => {
            const Icon = offer.icon;
            const isHighlight = offer.badgeStyle === "highlight";
            return (
              <div
                key={offer.title}
                className={`relative flex h-full flex-col rounded-3xl p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  isHighlight
                    ? "border-2 border-[#0F766E] bg-white"
                    : "border border-[#DED6C8] bg-white hover:border-[#0F766E]"
                }`}
              >
                <span
                  className={`absolute -top-4 left-8 rounded-full px-4 py-2 text-xs font-bold shadow-md ${
                    isHighlight
                      ? "bg-[#0F766E] text-white"
                      : "bg-[#E6F3F1] text-[#0F766E]"
                  }`}
                >
                  {offer.badge}
                </span>

                <div className="mt-3 flex items-center gap-3">
                  <Icon
                    className={`h-6 w-6 shrink-0 ${
                      isHighlight ? "text-[#0F766E]" : "text-[#0F766E]"
                    }`}
                  />
                  <h3 className="font-black">{offer.title}</h3>
                </div>

                <div className="mt-5">
                  <p className="text-3xl font-black text-[#0F172A]">
                    {offer.price}
                  </p>
                  <p className="text-sm text-[#64748B]">{offer.frequency}</p>
                </div>

                <p className="mt-5 text-sm leading-6 text-[#475569]">
                  {offer.text}
                </p>

                <div className="mt-4">
                  <p className="mb-3 text-xs font-black uppercase tracking-wider text-[#0F766E]">
                    Ce qui est inclus
                  </p>
                  <ul className="space-y-2 text-sm">
                    {offer.missions.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0F766E]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`mt-6 rounded-2xl p-4 text-sm font-bold text-[#0F172A] ${
                    isHighlight ? "bg-[#EAF2E8]" : "bg-[#F7F4EE]"
                  }`}
                >
                  {offer.result}
                </div>

                <a
                  href={whatsappUrl}
                  className={`mt-auto pt-6 block rounded-xl px-5 py-4 text-center font-bold text-white shadow-lg transition hover:shadow-xl ${
                    isHighlight
                      ? "bg-[#0F766E] hover:bg-[#115E59]"
                      : "bg-[#0F172A] hover:bg-[#1E293B]"
                  }`}
                >
                  {offer.cta}
                </a>

                <p className="mt-3 text-center text-xs text-[#64748B]">
                  Réponse rapide • Sans engagement
                </p>
              </div>
            );
          })}
        </div>

        {/* Ligne 2 : DAF + ORGA */}
        <div className="mt-6 grid items-stretch gap-6 md:grid-cols-2">

          {/* DAF Externalisé */}
          <div className="relative flex h-full flex-col rounded-3xl border border-[#DED6C8] bg-linear-to-br from-[#0F172A] to-[#1E293B] p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <span className="absolute -top-4 left-8 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white shadow-md border border-white/20">
              Pilotage stratégique
            </span>

            <div className="mt-3 flex items-center gap-3">
              <Layers className="h-6 w-6 shrink-0 text-[#5EEAD4]" />
              <h3 className="font-black">DAF Externalisé</h3>
            </div>

            <div className="mt-5">
              <p className="text-3xl font-black text-[#5EEAD4]">250 000 FCFA</p>
              <p className="text-sm text-white/70">/ mois · ORGA inclus</p>
            </div>

            <p className="mt-5 text-sm leading-6 text-white/80">
              Pour déléguer votre direction financière et avoir un pilotage
              stratégique de haut niveau.
            </p>

            <div className="mt-4">
              <p className="mb-3 text-xs font-black uppercase tracking-wider text-[#5EEAD4]">
                Ce qui est inclus
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "Direction financière externalisée",
                  "Réunions de pilotage régulières",
                  "Stratégie financière & structuration",
                  "Suivi des objectifs & indicateurs",
                  "Organisation interne & conduite du changement",
                  "Accompagnement dirigeant",
                  "Accès plateforme ORGA inclus",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5EEAD4]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm font-bold text-[#5EEAD4]">
              Vous avez une vraie direction opérationnelle et financière.
            </div>

            <a
              href={whatsappUrl}
              className="mt-auto pt-6 block rounded-xl bg-[#0F766E] px-5 py-4 text-center font-bold text-white shadow-lg transition hover:bg-[#115E59] hover:shadow-xl"
            >
              Discuter de cette offre
            </a>

            <p className="mt-3 text-center text-xs text-white/60">
              Réponse rapide • Sans engagement
            </p>
          </div>

          {/* Solution ORGA — Accès anticipé */}
          <div className="relative flex h-full flex-col rounded-3xl border border-dashed border-[#0F766E] bg-white p-8 shadow-sm">
            <span className="absolute -top-4 left-8 rounded-full bg-[#EAF2E8] px-4 py-2 text-xs font-bold text-[#0F766E] shadow-md">
              Accès anticipé
            </span>

            <div className="mt-3 flex items-center gap-3">
              <Smartphone className="h-6 w-6 shrink-0 text-[#0F766E]" />
              <h3 className="font-black">Solution ORGA</h3>
            </div>

            <div className="mt-5">
              <p className="text-3xl font-black text-[#0F172A]">15 000 FCFA</p>
              <p className="text-sm text-[#64748B]">/ mois · 1 service inclus</p>
              <span className="mt-2 inline-block rounded-full border border-[#DED6C8] bg-[#F7F4EE] px-3 py-1 text-xs font-bold text-[#475569]">
                +10 000 FCFA / service supplémentaire
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-[#475569]">
              Notre plateforme de gestion est en cours de déploiement. Inscrivez-vous
              maintenant pour être parmi les premiers à y accéder et bénéficier
              du tarif de lancement.
            </p>

            <div className="mt-4">
              <p className="mb-3 text-xs font-black uppercase tracking-wider text-[#0F766E]">
                Ce qui sera inclus
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm text-[#475569]">
                {[
                  "Gestion des tâches & dossiers",
                  "Suivi clients & missions",
                  "Workflows & automatisations",
                  "Centralisation documentaire",
                  "Tableaux de bord par service",
                  "Outils collaboratifs",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0F766E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-[#EAF2E8] p-4 text-sm font-bold text-[#0F172A]">
              Votre équipe travaille ensemble, organisée et connectée.
            </div>

            <a
              href={whatsappUrl}
              className="mt-auto pt-6 block rounded-xl bg-[#0F172A] px-5 py-4 text-center font-bold text-white shadow-lg transition hover:bg-[#1E293B] hover:shadow-xl"
            >
              M'inscrire en accès anticipé
            </a>

            <p className="mt-3 text-center text-xs text-[#64748B]">
              Tarif de lancement garanti
            </p>
          </div>
        </div>

        {/* BLOC DIAGNOSTIC — remplace l'upsell "prenez tout" */}
        <div className="mt-16 rounded-3xl border border-[#0F766E] bg-[#EAF2E8] p-10 shadow-sm">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
                Pas sûr de quelle offre vous avez besoin ?
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#0F172A]">
                Le diagnostic répond à cette question pour vous.
              </h2>
              <p className="mt-4 max-w-2xl text-[#475569]">
                En 20 minutes, on identifie ensemble vos priorités, vos blocages
                et l'offre qui correspond vraiment à votre situation — sans vous
                engager sur quelque chose de trop grand ou de trop petit.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Gratuit • 20 min",
                  "Sans engagement",
                  "Recommandation claire",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0F766E] shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={whatsappUrl}
              className="shrink-0 rounded-2xl bg-[#0F766E] px-8 py-5 text-center font-bold text-white shadow-lg transition hover:bg-[#115E59] hover:shadow-xl"
            >
              Démarrer le diagnostic
            </a>
          </div>
        </div>

        {/* AVANT / APRÈS */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-[#E7E1D6] shadow-xl">
          <div className="grid divide-[#E7E1D6] md:grid-cols-2 md:divide-x">
            <div className="bg-linear-to-br from-[#1F2A37] to-[#0F172A] p-14 text-white">
              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                Avant
              </span>
              <h3 className="mt-4 text-2xl font-black">Une entreprise subie</h3>
              <p className="mt-4 text-white/70">
                Organisation floue, pertes financières, décisions prises à
                l'intuition.
              </p>
            </div>
            <div className="bg-white p-14">
              <span className="inline-block rounded-full bg-[#E8F3F0] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0F766E]">
                Après
              </span>
              <h3 className="mt-4 text-2xl font-black text-[#0F172A]">
                Une entreprise pilotée
              </h3>
              <p className="mt-4 text-[#475569]">
                Vision claire, contrôle des coûts, décisions basées sur des
                données fiables.
              </p>
            </div>
          </div>
          <div className="bg-[#EFEAE2] p-8 text-center">
            <p className="text-lg font-bold text-[#0F172A]">
              Résultat : moins de pertes, plus de contrôle et une activité plus
              rentable.
            </p>
          </div>
        </div>

        {/* PARCOURS */}
        <div className="mt-16 rounded-3xl border border-[#DED6C8] bg-white p-10 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-bold text-[#0F766E]">Parcours client</p>
              <h2 className="mt-3 text-3xl font-black text-[#0F172A]">
                Une méthode claire, du diagnostic au pilotage.
              </h2>
              <p className="mt-4 max-w-3xl text-[#475569]">
                Chaque étape a un objectif précis : comprendre ce qui bloque,
                structurer ce qui manque, puis suivre les résultats dans la durée.
              </p>
            </div>
            <div className="rounded-2xl bg-[#E6F3F1] px-5 py-4 text-sm font-bold text-[#0F766E]">
              Durée estimée : 2 à 4 semaines selon le besoin
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "Étape 1",
                title: "Diagnostic",
                duration: "20 à 45 min",
                text: "On analyse vos chiffres, votre organisation et vos points de perte.",
                items: ["Problèmes prioritaires", "Pertes visibles / invisibles", "Plan d'action rapide"],
                result: "Vous savez quoi corriger en premier.",
              },
              {
                step: "Étape 2",
                title: "Organisation",
                duration: "1 à 2 semaines",
                text: "On met de l'ordre dans vos tâches, responsabilités, process et suivis.",
                items: ["Process simplifiés", "Rôles clarifiés", "Suivi opérationnel"],
                result: "Votre activité devient plus lisible.",
              },
              {
                step: "Étape 3",
                title: "Pilotage",
                duration: "Mensuel",
                text: "On suit les résultats, les priorités et les décisions avec des données claires.",
                items: ["Tableaux de bord", "Suivi des actions", "Décisions maîtrisées"],
                result: "Vous pilotez avec contrôle.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="relative rounded-3xl border border-[#E7E1D6] bg-[#F7F4EE] p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#0F766E] hover:shadow-xl"
              >
                <div className="absolute -top-5 left-7 flex h-10 w-10 items-center justify-center rounded-full bg-[#0F172A] text-sm font-black text-white shadow-lg">
                  {index + 1}
                </div>
                <div className="mt-4">
                  <p className="text-sm font-bold text-[#0F766E]">{item.step}</p>
                  <h3 className="mt-2 text-2xl font-black text-[#0F172A]">{item.title}</h3>
                  <p className="mt-2 inline-block rounded-full bg-white px-3 py-1 text-xs font-bold text-[#64748B]">
                    {item.duration}
                  </p>
                  <p className="mt-5 text-sm leading-6 text-[#475569]">{item.text}</p>
                  <ul className="mt-5 space-y-2 text-sm text-[#0F172A]">
                    {item.items.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="font-black text-[#0F766E]">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl bg-white p-4 text-sm font-bold text-[#0F172A] shadow-sm">
                    Résultat : {item.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-linear-to-br from-[#0F172A] to-[#1E293B] p-8 text-center text-white">
            <p className="text-sm font-bold text-[#5EEAD4]">
              Le but n'est pas d'ajouter de la complexité.
            </p>
            <h3 className="mt-3 text-2xl font-black">
              Le but est de rendre votre activité plus simple à gérer.
            </h3>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="font-bold text-[#0F766E]">Questions fréquentes</p>
            <h2 className="mt-3 text-4xl font-black text-[#0F172A]">
              Ce que les dirigeants nous demandent souvent.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                q: "Est-ce que je suis trop petit pour vous faire appel ?",
                a: "Non. Nous travaillons avec des TPE, des PME et des indépendants. La taille n'est pas un critère — l'envie de s'organiser, si. Le diagnostic permet justement de voir si et comment on peut vous aider.",
              },
              {
                q: "Par où on commence concrètement ?",
                a: "Toujours par un diagnostic. Un échange de 20 minutes pour comprendre votre situation, identifier les blocages prioritaires et vous proposer une recommandation claire. C'est gratuit et sans engagement.",
              },
              {
                q: "Combien de temps dure un accompagnement ?",
                a: "Ça dépend de l'offre. Le diagnostic est un one-shot. Les offres mensuelles commencent généralement par 3 mois pour installer les bases, puis s'adaptent à vos besoins.",
              },
              {
                q: "Puis-je arrêter à tout moment ?",
                a: "Oui. Nos offres mensuelles ne comportent pas d'engagement annuel obligatoire. Vous restez libre. Notre objectif est que vous voyez des résultats — pas de vous retenir.",
              },
              {
                q: "Qu'est-ce que la plateforme ORGA ?",
                a: "ORGA est notre outil de gestion développé pour les dirigeants. Il centralise les tâches, dossiers, responsabilités et indicateurs en un tableau de bord. Il est en cours de déploiement — inscrivez-vous en accès anticipé.",
              },
              {
                q: "Est-ce que vous travaillez à distance ?",
                a: "Oui. L'essentiel de notre travail peut se faire à distance via WhatsApp, email et visioconférence. Nous intervenons également en présentiel sur Dakar selon les besoins.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-3xl border border-[#E8DED0] bg-white p-8 shadow-sm"
              >
                <p className="font-black text-[#0F172A]">{q}</p>
                <p className="mt-4 text-sm leading-7 text-[#475569]">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-20 rounded-3xl bg-linear-to-br from-[#0F172A] to-[#1E293B] p-10 text-center text-white shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          <p className="font-bold text-[#5EEAD4]">
            Diagnostic offert • 20 min • Sans engagement
          </p>

          <h2 className="mt-4 text-3xl font-black">
            Vous ne savez pas quelle offre choisir ?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Envoyez un message WhatsApp. On clarifie votre situation et on vous
            oriente vers la solution la plus adaptée.
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-block rounded-xl bg-[#0F766E] px-8 py-5 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#115E59] hover:shadow-xl"
          >
            Obtenir mon diagnostic gratuit
          </a>

          <p className="mt-3 text-sm text-white/60">
            Réponse rapide • Sans engagement
          </p>
        </div>
      </section>
    </main>
  );
}
