"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useActiveLocale } from "@/hooks/useActiveLocale";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { navLinks } from "@/lib/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const t = useTranslations("common.nav");
  const pathname = usePathname();
  const locale = useActiveLocale();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" locale={locale} className="flex items-center group hover:opacity-90 transition-opacity">
          <Image
            src="/icon.jpeg"
            alt="E-GO"
            width={150}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              locale={locale}
              className={`text-sm transition-colors ${
                isActive(link.href)
                  ? "text-foreground font-semibold"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <Link
            href="/echeanciers"
            locale={locale}
            className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
          >
            {t("start")}
          </Link>
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              locale={locale}
              onClick={() => setOpen(false)}
              className={`block transition-colors ${
                isActive(link.href)
                  ? "text-foreground font-semibold"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <Link
            href="/echeanciers"
            locale={locale}
            onClick={() => setOpen(false)}
            className="block bg-primary text-white text-center font-semibold px-5 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            {t("start")}
          </Link>
          <div className="pt-2 border-t border-border">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
