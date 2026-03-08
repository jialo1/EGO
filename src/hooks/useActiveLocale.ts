"use client";

import { usePathname } from "next/navigation";

/**
 * Dérive la locale active depuis l'URL (pathname).
 * Avec localePrefix: "as-needed", le français n'a pas de préfixe (/), l'anglais a /en.
 */
export function useActiveLocale(): "fr" | "en" {
  const fullPathname = usePathname() ?? "/";
  return fullPathname.startsWith("/en") ? "en" : "fr";
}
