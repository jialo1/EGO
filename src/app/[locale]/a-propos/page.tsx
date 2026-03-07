import {
  Check,
  Shield,
  Handshake,
  RefreshCw,
  ArrowRight,
  Smartphone,
  Users,
  Globe,
  TrendingUp,
  Zap,
  Target,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import HeroWithImage from "@/components/HeroWithImage";
import SectionHeader from "@/components/SectionHeader";
import CtaSection from "@/components/CtaSection";

export async function generateMetadata() {
  const t = await getTranslations("about");
  return {
    title: `E-GO | ${t("badge")}`,
    description: t("subtitle"),
  };
}

export default async function APropos() {
  const t = await getTranslations("about");

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
        imageSrc="/a-propos-hero.png"
        imageAlt="Conseiller E-GO en magasin présentant un smartphone à un client"
      />

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-surface-light border border-border rounded-2xl p-8 md:p-10">
                <p className="text-muted leading-relaxed">{t("parag1")}</p>
              </div>
              <p className="text-foreground font-medium">{t("roleIntro")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(t.raw("roleItems") as string[]).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 bg-surface-light border border-border rounded-xl hover:border-primary/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-semibold mb-4 leading-relaxed">{t("quote1")}</p>
                <p className="text-sm text-muted leading-relaxed">{t("quote2")}</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-light border border-border rounded-2xl p-6 md:p-8">
              <p className="text-muted leading-relaxed">{t("parag2")}</p>
            </div>
            <div className="bg-surface-light border border-border rounded-2xl p-6 md:p-8">
              <p className="text-muted leading-relaxed">{t("parag3")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
            <div>
              <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                {t("identity")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">{t("whoWeAre")}</h2>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Target className="w-7 h-7 text-primary" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-surface-light border border-border rounded-2xl p-8">
                <p className="text-muted leading-relaxed mb-4">{t("about1")}</p>
                <p className="text-muted leading-relaxed">{t("about2")}</p>
              </div>
              <div className="bg-surface-light border border-border rounded-2xl p-8">
                <p className="text-muted leading-relaxed">{t("about3")}</p>
              </div>
            </div>
            <div>
              <p className="text-foreground font-semibold mb-6">{t("guaranteeIntro")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(t.raw("guarantees") as string[]).map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-5 bg-primary/5 border border-primary/10 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow={t("pillarsEyebrow")}
            title={t("pillarsTitle")}
            subtitle={t("pillarsSubtitle")}
            className="mb-12 text-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, titleKey: "pillar1Title", descKey: "pillar1Desc", color: "primary" },
              { icon: RefreshCw, titleKey: "pillar2Title", descKey: "pillar2Desc", color: "accent" },
              { icon: Handshake, titleKey: "pillar3Title", descKey: "pillar3Desc", color: "primary" },
            ].map(({ icon: Icon, titleKey, descKey, color }) => (
              <div
                key={titleKey}
                className="bg-surface-light border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-md transition-all text-center"
              >
                <div
                  className={`w-16 h-16 ${
                    color === "accent" ? "bg-accent/10" : "bg-primary/10"
                  } rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      color === "accent" ? "text-accent" : "text-primary"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(titleKey)}</h3>
                <p className="text-muted leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl space-y-4 text-muted leading-relaxed">
            <p>{t("positioning1")}</p>
            <p className="font-medium text-foreground">{t("positioning2")}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "1 000+", labelKey: "stats1" },
              { icon: Smartphone, value: "2 500+", labelKey: "stats2" },
              { icon: Globe, value: "7", labelKey: "stats3" },
              { icon: TrendingUp, value: "98%", labelKey: "stats4" },
            ].map(({ icon: Icon, value, labelKey }) => (
              <div key={labelKey} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold">{value}</p>
                <p className="text-sm text-muted mt-1">{t(labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        className="bg-surface"
        title={t("cta")}
        links={[
          { href: "/services", label: t("discoverServices"), icon: <ArrowRight className="w-5 h-5" /> },
        ]}
      />
    </>
  );
}
