"use client";

import { Link } from "@/i18n/routing";
import { useActiveLocale } from "@/hooks/useActiveLocale";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { navLinks } from "@/lib/navigation";
import { locations, hqAddress } from "@/lib/locations";

export default function Footer() {
  const t = useTranslations("common.footer");
  const tNav = useTranslations("common.nav");
  const locale = useActiveLocale();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" locale={locale} className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="E-GO"
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">{t("navigation")}</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  locale={locale}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {tNav(link.labelKey)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">{t("services")}</h4>
            <div className="space-y-3">
              {(t.raw("servicesList") as string[]).map((service) => (
                <p key={service} className="text-sm text-white/60">
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">{t("contact")}</h4>
            <div className="space-y-3">
              {locations
                .filter((loc) => loc.active)
                .map((loc) => (
                  <div key={loc.city} className="space-y-1">
                    <p className="text-xs text-white/50 font-medium">{loc.city}</p>
                    {loc.emails && (
                      <>
                        <a
                          href={`mailto:${loc.emails.infos}`}
                          className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                        >
                          <Mail className="w-4 h-4 shrink-0" />
                          {loc.emails.infos}
                        </a>
                        <a
                          href={`mailto:${loc.emails.svap}`}
                          className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                        >
                          <Mail className="w-4 h-4 shrink-0" />
                          {loc.emails.svap}
                        </a>
                      </>
                    )}
                    {loc.phones.length > 0 && (
                      <a
                        href={`tel:${loc.phones[0].replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                      >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span>{loc.city} : {loc.phones[0]}</span>
                      </a>
                    )}
                  </div>
                ))}
              <p className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 shrink-0" />
                {hqAddress}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} E-GO. {t("rights")}
          </p>
          <div className="flex gap-6">
            <Link href="/conditions-generales" locale={locale} className="text-xs text-white/40 hover:text-white transition-colors">
              {t("terms")}
            </Link>
            <Link href="/politique-confidentialite" locale={locale} className="text-xs text-white/40 hover:text-white transition-colors">
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
