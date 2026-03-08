import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import {
  Check,
  ArrowRight,
  FileText,
  Shield,
  Clock,
  Smartphone,
  Star,
  ChevronRight,
  Calendar,
  Users,
  TrendingUp,
  Lock,
  Eye,
  Handshake,
  CreditCard,
  Package,
  CheckCircle2,
  Zap,
  Building2,
} from "lucide-react";
import HeroWithImage from "@/components/HeroWithImage";
import SectionHeader from "@/components/SectionHeader";

const icons = [Zap, CreditCard, FileText, Users, Calendar, Package, CheckCircle2];

export default async function Home() {
  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");

  return (
    <>
      <HeroWithImage
        badge={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        imageSrc="/hero-store.png"
        imageAlt="Conseiller E-GO présentant un smartphone à un client"
        imageAspect="420/520"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="#comment-ca-marche"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02] shadow-md"
          >
            <Smartphone className="w-5 h-5" />
            {t("hero.howItWorks")}
          </Link>
          <Link
            href="/echeanciers"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all hover:scale-[1.02] shadow-md"
          >
            {t("hero.schedules")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-6 mt-12">
          {[
            { icon: FileText, text: t("hero.officialContract") },
            { icon: Eye, text: t("hero.realtimeTracking") },
            { icon: Calendar, text: t("hero.clearSchedule") },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-muted">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-3 h-3 text-primary" />
              </div>
              {text}
            </div>
          ))}
        </div>
      </HeroWithImage>

      <section id="comment-ca-marche" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow={t("howItWorks.eyebrow")}
            title={t("howItWorks.title")}
            subtitle={t("howItWorks.subtitle")}
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6, 7].map((step) => {
              const stepT = t.raw(`howItWorks.steps.${step}`) as { title: string; content: string; list?: string[] };
              const Icon = icons[step - 1];
              return (
                <div
                  key={step}
                  className={`rounded-2xl p-6 border transition-all hover:shadow-md ${
                    step === 7
                      ? "lg:col-span-2 bg-primary/5 border-primary/30"
                      : "bg-surface-light border-border hover:border-primary/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="relative flex shrink-0 items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                        {step}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold mb-2">{stepT.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{stepT.content}</p>
                      {stepT.list && (
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {stepT.list.map((item) => (
                            <li key={item} className="inline-flex items-center gap-1.5 text-xs text-muted bg-surface px-2.5 py-1 rounded-full">
                              <Check className="w-3 h-3 text-primary shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow={t("schedules.eyebrow")}
            title={t("schedules.title")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, titleKey: "standard", targetKey: "standardTarget", durationKey: "weeks4to24", highlight: false },
              { icon: Calendar, titleKey: "fortnight", targetKey: "fortnightTarget", durationKey: "6months", highlight: true },
              { icon: Users, titleKey: "employee", targetKey: "employeeTarget", durationKey: "3months", highlight: false },
              { icon: TrendingUp, titleKey: "professional", targetKey: "professionalTarget", durationKey: "6months", highlight: false },
              { icon: Building2, titleKey: "enterprise", targetKey: "enterpriseTarget", durationKey: "3to6months", highlight: false },
            ].map(({ icon: Icon, titleKey, targetKey, durationKey, highlight }) => (
              <div
                key={titleKey}
                className={`rounded-2xl p-8 border transition-all ${
                  highlight
                    ? "bg-primary/5 border-primary/30 scale-[1.02] shadow-md"
                    : "bg-surface-light border-border hover:border-primary/20 hover:shadow-sm"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    highlight ? "bg-primary/15" : "bg-surface"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${highlight ? "text-primary" : "text-muted"}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t(`schedules.${titleKey}`)}</h3>
                <p className="text-sm text-muted mb-1">{tCommon("profile")}: {t(`schedules.${targetKey}`)}</p>
                <p className="text-sm text-muted">{tCommon("duration")}: {t(`schedules.${durationKey}`)}</p>
                <Link
                  href="/echeanciers"
                  className={`inline-flex items-center gap-1 text-sm font-medium mt-6 ${
                    highlight ? "text-primary" : "text-muted hover:text-foreground"
                  } transition-colors`}
                >
                  {tCommon("learnMore")} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow={t("why.eyebrow")} title={t("why.title")} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, titleKey: "legal", descKey: "legalDesc" },
              { icon: Lock, titleKey: "process", descKey: "processDesc" },
              { icon: Handshake, titleKey: "trust", descKey: "trustDesc" },
              { icon: Users, titleKey: "accessible", descKey: "accessibleDesc" },
            ].map(({ icon: Icon, titleKey, descKey }) => (
              <div
                key={titleKey}
                className="bg-surface-light border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t(`why.${titleKey}`)}</h3>
                <p className="text-sm text-muted leading-relaxed">{t(`why.${descKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                {t("security.eyebrow")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {t("security.title")}
                <br />
                {t("security.title2")}
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                {t("security.desc")}
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                {tCommon("learnMore")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { icon: FileText, titleKey: "contractSign", descKey: "contractSignDesc" },
                { icon: Shield, titleKey: "docCheck", descKey: "docCheckDesc" },
                { icon: Eye, titleKey: "transparentTracking", descKey: "transparentTrackingDesc" },
                { icon: Lock, titleKey: "dataProtection", descKey: "dataProtectionDesc" },
              ].map(({ icon: Icon, titleKey, descKey }) => (
                <div
                  key={titleKey}
                  className="flex gap-4 bg-surface-light border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t(`security.${titleKey}`)}</h4>
                    <p className="text-sm text-muted">{t(`security.${descKey}`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow={t("testimonials.eyebrow")}
            title={t("testimonials.title")}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => {
              const testimonial = t.raw(`testimonials.${i}`) as { name: string; role: string; text: string };
              return (
                <div
                  key={i}
                  className="bg-surface-light border border-border rounded-2xl p-8 hover:shadow-md transition-all"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted">{testimonial.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-3xl p-12 md:p-16 shadow-sm text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("cta.title")}</h2>
            <p className="text-muted max-w-md mx-auto mb-8">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/echeanciers"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all hover:scale-[1.02] shadow-md"
              >
                {t("cta.startRequest")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-foreground/5 border border-border text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-foreground/10 transition-all"
              >
                {t("cta.viewServices")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
