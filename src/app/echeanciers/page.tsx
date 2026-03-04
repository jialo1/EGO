import Image from "next/image";
import {
  Clock,
  Calendar,
  TrendingUp,
  FileText,
  CreditCard,
  ArrowRight,
  Check,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Échéanciers | E-GO",
  description:
    "Découvrez nos échéanciers de paiement : hebdomadaire, quinzaine et mensuel. Trouvez le mode adapté à votre profil.",
};

const plans = [
  {
    icon: Clock,
    title: "Hebdomadaire",
    badge: "Populaire",
    target: "Commerçants, indépendants",
    duration: "4 à 8 semaines",
    example: "À partir de 25 000 FCFA / semaine",
    advantages: [
      "Paiements légers et fréquents",
      "Revenus quotidiens",
      "Propriété rapide",
    ],
    documents: [
      "Pièce d'identité (CNI ou passeport)",
      "Photo d'identité",
      "Justificatif d'activité (carte de commerçant, registre...)",
      "Caution ou garant",
    ],
    color: "primary" as const,
  },
  {
    icon: Calendar,
    title: "Quinzaine",
    badge: "Équilibré",
    target: "Travailleurs réguliers",
    duration: "6 mois payable chaque deux semaines",
    example: "À partir de 45 000 FCFA / quinzaine",
    advantages: [
      "Compromis fréquence / montant",
      "Revenus bi-mensuels",
      "Suivi régulier",
    ],
    documents: [
      "Pièce d'identité (CNI ou passeport)",
      "Photo d'identité",
      "Justificatif de revenu ou attestation",
      "Caution ou garant",
    ],
    color: "accent" as const,
  },
  {
    icon: TrendingUp,
    title: "Mensuel",
    badge: "Salariés",
    target: "Salariés, fonctionnaires",
    duration: "3 à 6 mois",
    example: "À partir de 75 000 FCFA / mois",
    advantages: [
      "Aligné sur les dates de paie",
      "Montants prévisibles",
      "Budgets mensuels",
    ],
    documents: [
      "Pièce d'identité (CNI ou passeport)",
      "Bulletin de paie (3 derniers mois)",
      "Attestation employeur",
      "Photo d'identité",
    ],
    color: "primary" as const,
  },
];

export default function Echeanciers() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-surface-light border border-border rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted">Nos échéanciers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Payez à{" "}
              <span className="text-primary">votre rythme.</span>
            </h1>

            <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
              Trois modes : hebdomadaire, quinzaine et mensuel. Contrat officiel, suivi structuré.
            </p>

            {/* Image mobile */}
            <div className="flex lg:hidden items-center justify-center mt-10">
              <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/echeanciers-hero.png"
                  alt="Conseiller E-GO expliquant un échéancier à un client"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="relative w-[480px] h-[360px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/echeanciers-hero.png"
                  alt="Conseiller E-GO expliquant un échéancier à un client"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isAccent = plan.color === "accent";

            return (
              <div
                key={plan.title}
                className="bg-surface-light border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Left - Info */}
                  <div className="p-8 lg:p-10 lg:col-span-1 border-b lg:border-b-0 lg:border-r border-border">
                    <div className="flex items-start justify-between mb-6">
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
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          isAccent
                            ? "bg-accent/10 text-accent"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
                    <p className="text-sm text-muted mb-4">{plan.target}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted" />
                        <span>Durée : <strong>{plan.duration}</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CreditCard className="w-4 h-4 text-muted" />
                        <span className="text-primary font-semibold">
                          {plan.example}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle - Advantages */}
                  <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border">
                    <h3 className="text-sm font-semibold mb-4 text-muted uppercase tracking-wider">
                      Avantages
                    </h3>
                    <ul className="space-y-3">
                      {plan.advantages.map((adv) => (
                        <li key={adv} className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isAccent ? "bg-accent/10" : "bg-primary/10"
                            }`}
                          >
                            <Check
                              className={`w-3 h-3 ${
                                isAccent ? "text-accent" : "text-primary"
                              }`}
                            />
                          </div>
                          <span className="text-sm text-muted">{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right - Documents */}
                  <div className="p-8 lg:p-10">
                    <h3 className="text-sm font-semibold mb-4 text-muted uppercase tracking-wider">
                      Documents requis
                    </h3>
                    <ul className="space-y-3">
                      {plan.documents.map((doc) => (
                        <li key={doc} className="flex items-start gap-3">
                          <FileText className="w-4 h-4 text-muted shrink-0 mt-0.5" />
                          <span className="text-sm text-muted">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* NOTE */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 flex gap-4">
            <AlertCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-2">Important</h3>
              <p className="text-sm text-muted leading-relaxed">
                Montants indicatifs. L&apos;échéancier exact dépend du modèle et de votre profil.
                Un conseiller vous accompagnera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Prêt à démarrer ?
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            Contactez-nous pour votre échéancier personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@e-go.africa"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all hover:scale-[1.02] shadow-md"
            >
              Contacter un conseiller
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground/5 border border-border text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-foreground/10 transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
