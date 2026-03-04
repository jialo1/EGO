import Image from "next/image";
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
import Link from "next/link";

export const metadata = {
  title: "Services | E-GO",
  description:
    "Location-vente, paiement flexible, troc et suivi. Découvrez les services E-GO pour accéder à votre smartphone.",
};

export default function Services() {
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
              <span className="text-sm text-muted">Nos services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Des solutions{" "}
              <span className="text-primary">sur mesure</span> pour accéder à
              votre smartphone.
            </h1>

            <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
              Location-vente, paiement flexible, troc et suivi. Un service adapté à chaque profil.
            </p>

            {/* Image mobile */}
            <div className="flex lg:hidden items-center justify-center mt-10">
              <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/services-hero.png"
                  alt="Conseiller E-GO présentant un smartphone à un client"
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
                  src="/services-hero.png"
                  alt="Conseiller E-GO présentant un smartphone à un client"
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

      {/* SERVICES PRINCIPAUX */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location-vente */}
            <div className="bg-surface-light border border-border rounded-2xl p-10 md:col-span-2 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Smartphone className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Location-vente</h2>
                  <p className="text-muted leading-relaxed mb-6">
                    iPhone immédiatement. Paiement sur 1 à 6 mois. Contrat officiel.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "1 à 6 mois",
                      "Contrat signé",
                      "Livraison immédiate",
                      "Suivi en temps réel",
                    ].map((item) => (
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
                      <p className="text-2xl font-bold text-primary mt-2">
                        1 à 6 mois
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paiement flexible */}
            <div className="bg-surface-light border border-border rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Paiement flexible</h2>
              <p className="text-muted leading-relaxed mb-6">
                Un rythme adapté à vos revenus.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Clock,
                    title: "Hebdomadaire",
                    desc: "Commerçants, indépendants",
                  },
                  {
                    icon: Calendar,
                    title: "Quinzaine",
                    desc: "Travailleurs réguliers",
                  },
                  {
                    icon: TrendingUp,
                    title: "Mensuel",
                    desc: "Salariés, fonctionnaires",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 p-4 bg-surface rounded-xl border border-border"
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{title}</p>
                      <p className="text-xs text-muted mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Troc / échange */}
            <div className="bg-surface-light border border-border rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <RefreshCw className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Troc & échange</h2>
              <p className="text-muted leading-relaxed mb-6">
                Ancien smartphone ? Échangez-le. Valeur déduite de l&apos;échéancier.
              </p>
              <ul className="space-y-3">
                {[
                  "Évaluation gratuite",
                  "Réduction sur échéancier",
                  "Large gamme acceptée",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suivi & documents */}
            <div className="bg-surface-light border border-border rounded-2xl p-10 md:col-span-2 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <FileText className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">
                    Suivi & documents officiels
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    Contrat, échéancier, reçus, attestations. Tout est traçable.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    "Contrat de location-vente",
                    "Échéancier de paiement détaillé",
                    "Reçus de paiement à chaque échéance",
                    "Attestation de propriété à la fin",
                  ].map((item) => (
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

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Trouvez l&apos;offre qui vous correspond
          </h2>
          <Link
            href="/echeanciers"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all hover:scale-[1.02] shadow-md"
          >
            Voir les échéanciers
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
