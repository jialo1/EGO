import { MapPin, ArrowRight, Building, Globe, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact | E-GO",
  description:
    "Retrouvez E-GO à Abidjan, Dakar, Accra, Lagos et Nairobi. Contactez-nous pour la location-vente de smartphones en Afrique.",
};

const locations = [
  {
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    city: "Abidjan",
    status: "Siège social",
    description:
      "Siège principal et centre d'opérations.",
    isHQ: true,
    active: true,
    phones: ["+225 27 21 30 58 64", "+225 27 21 30 55 33", "+225 01 40 61 55 74"],
  },
  {
    country: "Sénégal",
    flag: "🇸🇳",
    city: "Dakar",
    status: "Opérationnel",
    description:
      "Présence active à Dakar.",
    isHQ: false,
    active: true,
    phones: ["+221 33 82 18 686"],
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
    city: "Accra",
    status: "Opérationnel",
    description:
      "Présence active à Accra.",
    isHQ: false,
    active: true,
    phones: ["+233 02 005 202 65"],
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    city: "Lagos",
    status: "Opérationnel",
    description:
      "Présence active à Lagos.",
    isHQ: false,
    active: true,
    phones: ["+234 070 765 703 91"],
  },
  {
    country: "Kenya",
    flag: "🇰🇪",
    city: "Nairobi",
    status: "Opérationnel",
    description:
      "Présence active à Nairobi.",
    isHQ: false,
    active: true,
    phones: ["+254 071 077 3333"],
  },
  {
    country: "Togo",
    flag: "🇹🇬",
    city: "Lomé",
    status: "En expansion",
    description:
      "En expansion.",
    isHQ: false,
    active: false,
    phones: [] as string[],
  },
  {
    country: "Cameroun",
    flag: "🇨🇲",
    city: "Douala",
    status: "En expansion",
    description:
      "En expansion.",
    isHQ: false,
    active: false,
    phones: [] as string[],
  },
];

export default function Contact() {
  return (
    <>
      {/* MAP VISUAL - Pas de hero, contenu direct */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface-light border border-border rounded-2xl p-10 md:p-16 mb-12 shadow-sm">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              Contact & Localisations
            </h1>
            <p className="text-center text-muted max-w-lg mx-auto mb-8">
              Siège à Abidjan. Présents à Dakar, Accra, Lagos et Nairobi. Expansion vers Lomé et Douala.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
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
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {loc.description}
                </p>
                {loc.phones && loc.phones.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border space-y-2">
                    {loc.isHQ && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <Building className="w-4 h-4 shrink-0" />
                          Siège social E-GO
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <MapPin className="w-4 h-4 shrink-0" />
                          Abidjan, Côte d&apos;Ivoire
                        </div>
                      </>
                    )}
                    {loc.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4 shrink-0" />
                        {phone}
                      </a>
                    ))}
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
            Contactez-nous pour démarrer.
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
