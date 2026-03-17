"use client";

import { usePathname } from "@/i18n/routing";
import { useActiveLocale } from "@/hooks/useActiveLocale";

export default function LanguageSwitcher() {
  const locale = useActiveLocale();
  const pathname = usePathname() || "/";

  const switchLocale = (next: "fr" | "en") => {
    if (next === locale) return;
    // Définir le cookie pour que le middleware respecte le choix (évite redirection inverse)
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; SameSite=Lax`;
    const url = next === "en" ? (pathname === "/" ? "/en" : `/en${pathname}`) : pathname || "/";
    window.location.href = url;
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
