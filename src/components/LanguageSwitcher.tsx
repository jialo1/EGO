"use client";

import { usePathname as useNextPathname } from "next/navigation";
import { useRouter, usePathname } from "@/i18n/routing";

/**
 * Dérive la locale active depuis l'URL (pathname).
 * Avec localePrefix: "as-needed", le français n'a pas de préfixe (/), l'anglais a /en.
 * On ne peut pas utiliser useLocale() car le layout racine ne se ré-exécute pas
 * lors de la navigation client, donc le NextIntlClientProvider garde une locale obsolète.
 */
function useActiveLocale(): "fr" | "en" {
  const fullPathname = useNextPathname() ?? "/";
  return fullPathname.startsWith("/en") ? "en" : "fr";
}

export default function LanguageSwitcher() {
  const locale = useActiveLocale();
  const router = useRouter();
  const pathname = usePathname() || "/";

  const switchLocale = (next: "fr" | "en") => {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      className="inline-flex items-center p-1 bg-surface-light border border-border rounded-full shadow-sm"
      role="group"
      aria-label={locale === "fr" ? "Changer de langue" : "Change language"}
    >
      {(["fr", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => switchLocale(lang)}
          disabled={locale === lang}
          aria-pressed={locale === lang}
          aria-label={lang === "fr" ? "Français" : "English"}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            locale === lang
              ? "bg-primary text-white shadow-sm cursor-default"
              : "text-muted hover:text-foreground hover:bg-surface cursor-pointer"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
