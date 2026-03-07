import {
  Smartphone,
  CreditCard,
  RefreshCw,
  FileText,
  ArrowRight,
  Check,
  Clock,
  Calendar,
  TrendingUp,
  Shield,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import HeroWithImage from "@/components/HeroWithImage";
import CtaSection from "@/components/CtaSection";

export async function generateMetadata() {
  const t = await getTranslations("services");
  return {
    title: `E-GO | ${t("badge")}`,
    description: t("subtitle"),
  };
}

export default async function Services() {
  const t = await getTranslations("services");
  const flexibleOptions = t.raw("flexibleOptions") as { title: string; desc: string }[];

  return (
    <>
      <HeroWithImage
        badge={t("badge")}
        title={
          <>
            {t("title")} <span className="text-primary">{t("titleHighlight")}</span> {t("titleSuffix")}
          </>
        }
        subtitle={t("subtitle")}
        imageSrc="/services-hero.png"
        imageAlt="Conseiller E-GO présentant un smartphone à un client"
      />

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-light border border-border rounded-2xl p-10 md:col-span-2 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Smartphone className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{t("rentalTitle")}</h2>
                  <p className="text-muted leading-relaxed mb-6">{t("rentalDesc")}</p>
                  <ul className="space-y-3">
                    {(t.raw("rentalItems") as string[]).map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-64 h-80 bg-gradient-to-b from-primary/5 to-transparent border border-border rounded-3xl flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                      <p className="text-sm text-muted">iPhone 15 Pro</p>
                      <p className="text-2xl font-bold text-primary mt-2">1 à 6 mois</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-light border border-border rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{t("flexibleTitle")}</h2>
              <p className="text-muted leading-relaxed mb-6">{t("flexibleDesc")}</p>
              <div className="space-y-4">
                {flexibleOptions.map((opt, i) => {
                  const icons = [Clock, Calendar, TrendingUp];
                  const Icon = icons[i];
                  return (
                    <div
                      key={opt.title}
                      className="flex items-start gap-3 p-4 bg-surface rounded-xl border border-border"
                    >
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{opt.title}</p>
                        <p className="text-xs text-muted mt-0.5">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-surface-light border border-border rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <RefreshCw className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{t("tradeTitle")}</h2>
              <p className="text-muted leading-relaxed mb-6">{t("tradeDesc")}</p>
              <ul className="space-y-3">
                {(t.raw("tradeItems") as string[]).map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-light border border-border rounded-2xl p-10 md:col-span-2 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <FileText className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{t("trackingTitle")}</h2>
                  <p className="text-muted leading-relaxed mb-6">{t("trackingDesc")}</p>
                </div>
                <div className="space-y-3">
                  {(t.raw("trackingItems") as string[]).map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-4 bg-surface rounded-xl border border-border"
                    >
                      <Shield className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title={t("cta")}
        links={[
          { href: "/echeanciers", label: t("viewSchedules"), icon: <ArrowRight className="w-5 h-5" /> },
        ]}
      />
    </>
  );
}
