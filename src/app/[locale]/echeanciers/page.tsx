import {
  Clock,
  Calendar,
  ArrowRight,
  Check,
  Smartphone,
  Users,
  Briefcase,
  Building2,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import HeroWithImage from "@/components/HeroWithImage";
import CtaSection from "@/components/CtaSection";
import { contactEmail } from "@/lib/locations";

const icons = [Clock, Calendar, Users, Briefcase, Building2];

export async function generateMetadata() {
  const t = await getTranslations("schedules");
  return {
    title: `E-GO | ${t("title")} ${t("titleHighlight")}`,
    description: t("subtitle"),
  };
}

export default async function Echeanciers() {
  const t = await getTranslations("schedules");
  const profiles = [1, 2, 3, 4, 5].map((i) => {
    const p = t.raw(`profiles.${i}`) as { title: string; subtitle: string; target: string; targets: string[]; phones: string; duration: string; modality: string };
    return { id: i, ...p, color: i === 2 ? "accent" as const : "primary" as const };
  });

  return (
    <>
      <HeroWithImage
        badge={t("badge")}
        title={
          <>
            {t("title")} <span className="text-primary">{t("titleHighlight")}</span>
          </>
        }
        subtitle={t("subtitle")}
        imageSrc="/echeanciers-hero.png"
        imageAlt="Conseiller E-GO expliquant un échéancier à un client"
      />

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted leading-relaxed text-center mb-8">{t("intro")}</p>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
            <p className="text-foreground font-semibold">{t("downPayment")}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {profiles.map((profile, idx) => {
            const Icon = icons[idx];
            const isAccent = profile.color === "accent";

            return (
              <div
                key={profile.id}
                className={`rounded-2xl overflow-hidden border transition-all hover:shadow-lg ${
                  isAccent ? "bg-accent/5 border-accent/20" : "bg-surface-light border-border hover:border-primary/20"
                }`}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex items-start gap-4 shrink-0">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          isAccent ? "bg-accent/10" : "bg-primary/10"
                        }`}
                      >
                        <Icon
                          className={`w-7 h-7 ${
                            isAccent ? "text-accent" : "text-primary"
                          }`}
                        />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary">
                          {profile.id}. {profile.title}
                        </span>
                        {profile.subtitle && (
                          <p className="text-xs text-muted mt-0.5">{profile.subtitle}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">
                          {t("forWho")}
                        </h3>
                        <p className="text-muted">{profile.target}</p>
                        {profile.targets && profile.targets.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {profile.targets.map((target) => (
                              <span
                                key={target}
                                className="inline-flex items-center gap-1 text-xs bg-surface px-2.5 py-1 rounded-full text-muted"
                              >
                                <Check className="w-3 h-3 text-primary" />
                                {target}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <Smartphone className="w-4 h-4 text-primary" />
                            {t("phonesLabel")}
                          </h4>
                          <p className="text-sm text-muted">{profile.phones}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2">{t("durationLabel")}</h4>
                          <p className="text-sm text-muted">{profile.duration}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2">{t("modalityLabel")}</h4>
                          <p className="text-sm text-muted">{profile.modality}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">{t("conclusionTitle")}</h2>
          <p className="text-muted leading-relaxed mb-4">{t("conclusion1")}</p>
          <p className="text-muted leading-relaxed">{t("conclusion2")}</p>
        </div>
      </section>

      <CtaSection
        title={t("cta")}
        subtitle={t("ctaSubtitle")}
        links={[
          { href: `mailto:${contactEmail}`, label: t("contactAdvisor"), icon: <ArrowRight className="w-5 h-5" /> },
          { href: "/contact", label: t("contactUs"), variant: "secondary" },
        ]}
      />
    </>
  );
}
