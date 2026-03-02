import { MapPin, ArrowRight, Building, Globe, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Localisations | E-GO",
  description:
    "Retrouvez E-GO à Abidjan, Dakar, Accra, Lagos et Nairobi. Location-vente de smartphones en Afrique.",
};

const locations = [
  {
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    city: "Abidjan",
    status: "Siège social",
    description:
      "Notre siège principal et centre d'opérations. Toute l'équipe E-GO est basée ici.",
    isHQ: true,
    active: true,
  },
  {
    country: "Sénégal",
    flag: "🇸🇳",
    city: "Dakar",
    status: "Opérationnel",
    description:
      "Présence active à Dakar pour accompagner la communauté sénégalaise.",
    isHQ: false,
    active: true,
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
    city: "Accra",
    status: "En expansion",
    description:
      "Développement en cours pour couvrir le marché ghanéen.",
    isHQ: false,
    active: false,
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    city: "Lagos",
    status: "En expansion",
    description:
      "Préparation de l'entrée sur le plus grand marché africain.",
    isHQ: false,
    active: false,
  },
  {
    country: "Kenya",
    flag: "🇰🇪",
    city: "Nairobi",
    status: "En expansion",
    description:
      "Extension vers l'Afrique de l'Est prévue prochainement.",
    isHQ: false,
    active: false,
  },
];

export default function Localisations() {
  return (
    <>
      {/* HERO */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Localisations
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Présents là où{" "}
              <span className="text-primary">vous êtes.</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              E-GO est basé à Abidjan et s&apos;étend progressivement à travers
              l&apos;Afrique. Notre ambition : rapprocher la technologie de chaque
              communauté.
            </p>
          </div>
        </div>
      </section>

      {/* MAP VISUAL */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface-light border border-border rounded-2xl p-10 md:p-16 mb-12 shadow-sm">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">
              Afrique de l&apos;Ouest & au-delà
            </h2>
            <p className="text-center text-muted max-w-lg mx-auto">
              Siège à Abidjan, opérationnel à Dakar, et en expansion vers Accra,
              Lagos et Nairobi.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
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
                      Siège
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* LOCATION CARDS */}
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
                <p className="text-sm text-muted leading-relaxed">
                  {loc.description}
                </p>
                {loc.isHQ && (
                  <div className="mt-6 pt-6 border-t border-border space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Building className="w-4 h-4" />
                      Siège social E-GO
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <MapPin className="w-4 h-4" />
                      Abidjan, Côte d&apos;Ivoire
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Phone className="w-4 h-4" />
                      +225 00 00 000 000
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Vous êtes dans l&apos;une de ces villes ?
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            Contactez-nous pour démarrer votre demande de location-vente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@e-go.africa"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all hover:scale-[1.02] shadow-md"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/echeanciers"
              className="inline-flex items-center justify-center gap-2 bg-foreground/5 border border-border text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-foreground/10 transition-all"
            >
              Voir les échéanciers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
