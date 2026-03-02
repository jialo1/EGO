import {
  Eye,
  Target,
  Shield,
  Handshake,
  RefreshCw,
  ArrowRight,
  Smartphone,
  Users,
  Globe,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "À propos | E-GO",
  description:
    "Découvrez la mission, la vision et les valeurs d'E-GO. Location-vente sécurisée de smartphones en Afrique.",
};

export default function APropos() {
  return (
    <>
      {/* HERO */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              À propos
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Rendre la technologie{" "}
              <span className="text-primary">accessible</span> à tous.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              En Afrique, accéder à un smartphone de qualité sans tout payer d&apos;avance.
              E-GO propose une location-vente structurée et accessible.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-light border border-border rounded-2xl p-10 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Notre Mission</h2>
              <p className="text-muted leading-relaxed">
                Rendre le smartphone accessible à tous via une location-vente
                sécurisée et adaptée à chaque rythme de paiement.
              </p>
            </div>

            <div className="bg-surface-light border border-border rounded-2xl p-10 shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Notre Vision</h2>
              <p className="text-muted leading-relaxed">
                Leader de la location-vente en Afrique de l&apos;Ouest.
                Rapprocher la technologie des populations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PILIERS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              Nos valeurs
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Trois piliers fondamentaux
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Transparence",
                desc: "Chaque étape documentée. Pas de frais cachés.",
                color: "primary",
              },
              {
                icon: RefreshCw,
                title: "Flexibilité",
                desc: "Hebdo, quinzaine ou mensuel. On s&apos;adapte à vous.",
                color: "accent",
              },
              {
                icon: Handshake,
                title: "Confiance",
                desc: "Contrat officiel, suivi rigoureux.",
                color: "primary",
              },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
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
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "1 000+", label: "Clients accompagnés" },
              { icon: Smartphone, value: "2 500+", label: "Smartphones livrés" },
              { icon: Globe, value: "5", label: "Pays couverts" },
              { icon: TrendingUp, value: "98%", label: "Taux de satisfaction" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold">{value}</p>
                <p className="text-sm text-muted mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Prêt à nous rejoindre ?
          </h2>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all hover:scale-[1.02] shadow-md"
          >
            Découvrir nos services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
