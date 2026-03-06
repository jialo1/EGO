import Image from "next/image";
import {
  Clock,
  Calendar,
  TrendingUp,
  ArrowRight,
  Check,
  Smartphone,
  Users,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Échéanciers | E-GO",
  description:
    "Découvrez nos profils d'échéanciers de paiement : Standard, Quinzaine, Salarié et Professionnel. Un mode adapté à chaque situation.",
};

const profiles = [
  {
    id: 1,
    icon: Clock,
    title: "Profil Standard",
    subtitle: "Paiement hebdomadaire",
    target: "Clients sans revenu mensuel fixe",
    targets: ["Commerçants", "Entrepreneurs", "Travailleurs indépendants", "Étudiants", "Particuliers"],
    phones: "iPhone XR jusqu'à la dernière sortie Apple",
    duration: "4 à 24 semaines (1 à 6 mois)",
    modality: "Paiement chaque semaine selon l'échéancier du contrat",
    color: "primary" as const,
  },
  {
    id: 2,
    icon: Calendar,
    title: "Paiement par quinzaine",
    subtitle: "Option du profil standard",
    target: "Certains modèles",
    targets: [],
    phones: "iPhone 11 jusqu'à la dernière sortie Apple",
    duration: "6 mois",
    modality: "12 échéances, un paiement toutes les deux semaines",
    color: "accent" as const,
  },
  {
    id: 3,
    icon: Users,
    title: "Profil Salarié Standard",
    subtitle: "Paiement mensuel",
    target: "Clients avec salaire mensuel stable",
    targets: [],
    phones: "iPhone 12 Pro jusqu'à la dernière sortie Apple",
    duration: "3 mois",
    modality: "3 échéances mensuelles, plus l'acompte initial",
    color: "primary" as const,
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Profil Professionnel Fonctionnaire",
    subtitle: "Accès haut de gamme",
    target: "Fonctionnaires et professionnels à forte stabilité salariale",
    targets: [],
    phones: "iPhone 15 Pro jusqu'à la dernière sortie Apple",
    duration: "6 mois",
    modality: "6 échéances mensuelles, plus l'acompte initial",
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
              <span className="text-sm text-muted">E-GO</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Les échéanciers{" "}
              <span className="text-primary">de paiement</span>
            </h1>

            <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
              Plusieurs profils adaptés à vos capacités financières. Chaque profil est défini selon votre statut et le modèle d&apos;iPhone choisi.
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

      {/* INTRO & ACOMPTE */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted leading-relaxed text-center mb-8">
            Afin de s&apos;adapter aux différentes catégories de clients et à leurs capacités financières, E-GO propose plusieurs profils d&apos;échéanciers de paiement. Chaque profil est défini selon le statut du client ainsi que le modèle d&apos;iPhone choisi.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
            <p className="text-foreground font-semibold">
              Les paiements se font toujours après un acompte minimum de 40 % du prix du téléphone.
            </p>
          </div>
        </div>
      </section>

      {/* PROFILS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {profiles.map((profile) => {
            const Icon = profile.icon;
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
                          Pour qui ?
                        </h3>
                        <p className="text-muted">{profile.target}</p>
                        {profile.targets.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {profile.targets.map((t) => (
                              <span
                                key={t}
                                className="inline-flex items-center gap-1 text-xs bg-surface px-2.5 py-1 rounded-full text-muted"
                              >
                                <Check className="w-3 h-3 text-primary" />
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <Smartphone className="w-4 h-4 text-primary" />
                            Téléphones concernés
                          </h4>
                          <p className="text-sm text-muted">{profile.phones}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Durée de paiement</h4>
                          <p className="text-sm text-muted">{profile.duration}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Modalité de paiement</h4>
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

      {/* CONCLUSION */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
          <p className="text-muted leading-relaxed mb-4">
            Grâce à ses différents profils d&apos;échéanciers, E-GO offre une solution flexible et accessible permettant à chaque client d&apos;acquérir un iPhone tout en choisissant un mode de paiement adapté à sa situation financière.
          </p>
          <p className="text-muted leading-relaxed">
            L&apos;objectif de E-GO est de faciliter l&apos;accès aux smartphones haut de gamme tout en maintenant un système de paiement structuré et sécurisé.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
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
