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
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "À propos | E-GO",
  description:
    "Découvrez E-GO, entreprise spécialisée dans la location-vente d'iPhone en Afrique. Modèle de paiement structuré et accessible.",
};

export default function APropos() {
  return (
    <>
      {/* HERO - À propos de E-GO */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              À propos de E-GO
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Location-vente d&apos;iPhone{" "}
              <span className="text-primary">structurée et accessible</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              E-GO est une entreprise spécialisée dans la location-vente d&apos;iPhone, proposant un modèle de paiement structuré et accessible adapté aux réalités économiques locales.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Créée pour répondre à une forte demande en smartphones haut de gamme, E-GO développe une solution innovante permettant aux clients d&apos;accéder immédiatement à un iPhone tout en réglant le montant de manière progressive selon un échéancier défini.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              L&apos;entreprise agit comme un intermédiaire organisé entre fournisseurs partenaires et clients finaux, en assurant :
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "La sélection et la vérification des appareils",
                "La formalisation des contrats",
                "La gestion administrative et financière des paiements",
                "Le suivi rigoureux des engagements",
                "L'accompagnement personnalisé des clients",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted leading-relaxed">
              Notre modèle repose sur un cadre structuré, sécurisé et transparent, garantissant à la fois la protection des vendeurs partenaires et la sérénité des acheteurs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              E-GO s&apos;inscrit dans une dynamique de modernisation de l&apos;accès à la technologie en Afrique, en proposant une alternative fiable aux paiements informels et aux systèmes de crédit non encadrés.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              À travers une approche professionnelle et responsable, nous contribuons à faciliter l&apos;inclusion technologique tout en favorisant un commerce plus organisé et sécurisé dans le secteur des smartphones.
            </p>
          </div>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Notre identité
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            1. Qui sommes-nous ?
          </h2>
          <div className="max-w-3xl space-y-6 text-muted leading-relaxed">
            <p>
              E-GO est une entreprise innovante spécialisée dans la location-vente d&apos;iPhone en Afrique.
            </p>
            <p>
              Nous sommes nés d&apos;un constat simple : de nombreuses personnes souhaitent utiliser des iPhones récents, mais rencontrent des difficultés à effectuer un paiement comptant. E-GO apporte une solution moderne, structurée et sécurisée à cette réalité.
            </p>
            <p>
              Notre rôle ne se limite pas à fournir un téléphone. Nous mettons en place un véritable système d&apos;accompagnement financier permettant à chaque client d&apos;accéder à la technologie premium tout en respectant sa capacité de paiement.
            </p>
            <p>
              Nous sélectionnons des appareils authentiques, soigneusement testés et vérifiés afin de garantir :
            </p>
            <ul className="space-y-2">
              {["La qualité", "La performance", "La durabilité", "La sécurité d'utilisation"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3 PILIERS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              Notre fonctionnement
            </p>
            <p className="text-muted max-w-2xl">
              Notre fonctionnement repose sur trois piliers fondamentaux :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "La transparence",
                desc: "Des conditions claires, des échéanciers précis et un suivi structuré.",
                color: "primary",
              },
              {
                icon: RefreshCw,
                title: "La flexibilité",
                desc: "Des modalités de paiement adaptées aux profils variés : commerçants, indépendants, salariés et fonctionnaires.",
                color: "accent",
              },
              {
                icon: Handshake,
                title: "La confiance",
                desc: "Une relation professionnelle durable avec nos clients et nos partenaires vendeurs.",
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

          <div className="mt-12 max-w-3xl space-y-4 text-muted leading-relaxed">
            <p>
              E-GO se positionne comme un intermédiaire structuré entre fournisseurs et clients, en assurant la gestion administrative, le suivi des paiements et l&apos;accompagnement personnalisé.
            </p>
            <p className="font-medium text-foreground">
              Nous ne vendons pas simplement un téléphone : nous facilitons l&apos;accès à une expérience technologique moderne, accessible et responsable.
            </p>
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
