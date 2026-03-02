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
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Des solutions{" "}
              <span className="text-primary">sur mesure</span> pour accéder à
              votre smartphone.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              Que vous soyez commerçant, salarié ou fonctionnaire, E-GO propose
              un service adapté à votre profil et à votre rythme de paiement.
            </p>
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
                    Recevez votre iPhone immédiatement et payez sur une période de
                    1 à 6 mois. Un contrat officiel encadre chaque transaction
                    pour votre sécurité et la nôtre.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Durée de 1 à 6 mois",
                      "Contrat officiel signé",
                      "Livraison immédiate après validation",
                      "Suivi des paiements en temps réel",
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
                Choisissez le rythme de paiement qui correspond à vos revenus.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Clock,
                    title: "Hebdomadaire",
                    desc: "Idéal pour les commerçants et indépendants",
                  },
                  {
                    icon: Calendar,
                    title: "Quinzaine",
                    desc: "Pour les travailleurs à revenu régulier",
                  },
                  {
                    icon: TrendingUp,
                    title: "Mensuel",
                    desc: "Adapté aux salariés et fonctionnaires",
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
                Vous avez un ancien smartphone ? Échangez-le contre un modèle
                plus récent. La valeur de reprise est déduite de votre échéancier.
              </p>
              <ul className="space-y-3">
                {[
                  "Évaluation gratuite de votre ancien appareil",
                  "Réduction immédiate sur votre échéancier",
                  "Large gamme de modèles acceptés",
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
                    Chaque dossier est accompagné de documents officiels : contrat
                    de location-vente, échéancier de paiement, reçus et
                    attestations. Tout est traçable et transparent.
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trouvez l&apos;offre qui vous correspond
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            Consultez nos échéanciers détaillés et commencez votre demande.
          </p>
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
