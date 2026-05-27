import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F7F4EE] px-6 text-center text-[#0F172A]">
      {/* Logo mark */}
      <div className="grid h-20 w-20 place-items-center rounded-3xl bg-[#0F766E] text-3xl font-black text-white shadow-xl">
        O
      </div>

      {/* 404 */}
      <p className="mt-8 text-sm font-black uppercase tracking-widest text-[#0F766E]">
        Erreur 404
      </p>

      <h1 className="mt-4 text-5xl font-black leading-tight">
        Cette page n'existe pas.
      </h1>

      <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-[#475569]">
        La page que vous cherchez a peut-être été déplacée, supprimée ou
        n'a jamais existé.
      </p>

      {/* Actions */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-2xl bg-[#0F766E] px-8 py-5 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#115E59]"
        >
          ← Retour à l'accueil
        </Link>

        <Link
          href="/offres"
          className="rounded-2xl border border-[#0F766E] bg-white px-8 py-5 font-black text-[#0F766E] shadow-sm transition hover:-translate-y-1 hover:bg-[#F8FFFC]"
        >
          Voir les offres
        </Link>
      </div>

      {/* Liens utiles */}
      <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-[#64748B]">
        {[
          ["Pourquoi ORGA", "/pourquoi-orga"],
          ["Outil de gestion", "/outil-de-gestion"],
          ["À propos", "/a-propos"],
          ["Contact", "/#contact"],
        ].map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="font-semibold transition hover:text-[#0F766E]"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
