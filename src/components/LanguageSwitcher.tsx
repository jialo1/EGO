"use client";

import { useRouter, usePathname } from "@/i18n/routing";
import { useActiveLocale } from "@/hooks/useActiveLocale";

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
