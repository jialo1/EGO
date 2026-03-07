import { MapPin, ArrowRight, Building, Globe, Phone, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { locations, contactEmail, hqAddress } from "@/lib/locations";
import CtaSection from "@/components/CtaSection";

export async function generateMetadata() {
  const t = await getTranslations("contact");
  return {
    title: `E-GO | ${t("title")}`,
    description: t("subtitle"),
  };
}

export default async function Contact() {
  const t = await getTranslations("contact");

  return (
    <>
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface-light border border-border rounded-2xl p-10 md:p-16 mb-12 shadow-sm">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">{t("title")}</h1>
            <p className="text-center text-muted max-w-lg mx-auto mb-8">{t("subtitle")}</p>

            <div className="flex flex-wrap justify-center gap-4">
              {locations.map((loc) => (
                <div
                  key={loc.city}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium ${
                    loc.isHQ
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : loc.active
                      ? "bg-surface border-border text-foreground"
                      : "bg-surface border-border text-muted"
                  }`}
                >
                  <span className="text-lg">{loc.flag}</span>
                  {loc.city}
                  {loc.isHQ && (
                    <span className="text-xs bg-primary/15 px-2 py-0.5 rounded-full">
                      {t("headquarters")}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className={`bg-surface-light border rounded-2xl p-8 transition-all hover:shadow-md ${
                  loc.isHQ
                    ? "border-primary/30 ring-1 ring-primary/10"
                    : "border-border hover:border-primary/20"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{loc.flag}</span>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      loc.isHQ
                        ? "bg-primary/10 text-primary"
                        : loc.active
                        ? "bg-accent/10 text-accent"
                        : "bg-foreground/5 text-muted"
                    }`}
                  >
                    {loc.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{loc.city}</h3>
                <p className="text-sm text-muted mb-4">{loc.country}</p>
                <p className="text-sm text-muted leading-relaxed mb-4">{loc.description}</p>
                {(loc.phones?.length > 0 || loc.emails) && (
                  <div className="mt-4 pt-4 border-t border-border space-y-2">
                    {loc.isHQ && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <Building className="w-4 h-4 shrink-0" />
                          {t("hqLabel")}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <MapPin className="w-4 h-4 shrink-0" />
                          {hqAddress}
                        </div>
                      </>
                    )}
                    {loc.emails && (
                      <>
                        <a
                          href={`mailto:${loc.emails.infos}`}
                          className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4 shrink-0" />
                          {loc.emails.infos}
                        </a>
                        <a
                          href={`mailto:${loc.emails.svap}`}
                          className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4 shrink-0" />
                          {loc.emails.svap}
                        </a>
                      </>
                    )}
                    {loc.phones?.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4 shrink-0" />
                        {phone}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        className="bg-surface"
        title={t("cta")}
        subtitle={t("ctaSubtitle")}
        links={[
          { href: `mailto:${contactEmail}`, label: t("contactUs"), icon: <ArrowRight className="w-5 h-5" /> },
          { href: "/echeanciers", label: t("viewSchedules"), variant: "secondary" },
        ]}
      />
    </>
  );
}
