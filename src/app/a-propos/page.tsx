import Image from "next/image";
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
  Zap,
  Target,
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
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-surface-light border border-border rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted">À propos de E-GO</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Rendre la technologie{" "}
              <span className="text-primary">accessible</span> à tous.
            </h1>

            <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
              E-GO est une entreprise spécialisée dans la location-vente d&apos;iPhone, proposant un modèle de paiement structuré et accessible adapté aux réalités économiques locales.
            </p>

            {/* Image mobile */}
            <div className="flex lg:hidden items-center justify-center mt-10">
              <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/a-propos-hero.png"
                  alt="Conseiller E-GO en magasin présentant un smartphone à un client"
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
                  src="/a-propos-hero.png"
                  alt="Conseiller E-GO en magasin présentant un smartphone à un client"
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

      {/* À PROPOS - CONTENU PRINCIPAL */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Texte principal */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-surface-light border border-border rounded-2xl p-8 md:p-10">
                <p className="text-muted leading-relaxed">
                  Créée pour répondre à une forte demande en smartphones haut de gamme, E-GO développe une solution innovante permettant aux clients d&apos;accéder immédiatement à un iPhone tout en réglant le montant de manière progressive selon un échéancier défini.
                </p>
              </div>
              <p className="text-foreground font-medium">
                L&apos;entreprise agit comme un intermédiaire organisé entre fournisseurs partenaires et clients finaux, en assurant :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "La sélection et la vérification des appareils",
                  "La formalisation des contrats",
                  "La gestion administrative et financière des paiements",
                  "Le suivi rigoureux des engagements",
                  "L'accompagnement personnalisé des clients",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 bg-surface-light border border-border rounded-xl hover:border-primary/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Encadré citation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-semibold mb-4 leading-relaxed">
                  Notre modèle repose sur un cadre structuré, sécurisé et transparent.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  Protection des vendeurs partenaires et sérénité des acheteurs.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-light border border-border rounded-2xl p-6 md:p-8">
              <p className="text-muted leading-relaxed">
                E-GO s&apos;inscrit dans une dynamique de modernisation de l&apos;accès à la technologie en Afrique, en proposant une alternative fiable aux paiements informels et aux systèmes de crédit non encadrés.
              </p>
            </div>
            <div className="bg-surface-light border border-border rounded-2xl p-6 md:p-8">
              <p className="text-muted leading-relaxed">
                À travers une approche professionnelle et responsable, nous contribuons à faciliter l&apos;inclusion technologique tout en favorisant un commerce plus organisé et sécurisé dans le secteur des smartphones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
            <div>
              <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                Notre identité
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Qui sommes-nous ?
              </h2>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Target className="w-7 h-7 text-primary" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-surface-light border border-border rounded-2xl p-8">
                <p className="text-muted leading-relaxed mb-4">
                  E-GO est une entreprise innovante spécialisée dans la location-vente d&apos;iPhone en Afrique.
                </p>
                <p className="text-muted leading-relaxed">
                  Nous sommes nés d&apos;un constat simple : de nombreuses personnes souhaitent utiliser des iPhones récents, mais rencontrent des difficultés à effectuer un paiement comptant. E-GO apporte une solution moderne, structurée et sécurisée à cette réalité.
                </p>
              </div>
              <div className="bg-surface-light border border-border rounded-2xl p-8">
                <p className="text-muted leading-relaxed">
                  Notre rôle ne se limite pas à fournir un téléphone. Nous mettons en place un véritable système d&apos;accompagnement financier permettant à chaque client d&apos;accéder à la technologie premium tout en respectant sa capacité de paiement.
                </p>
              </div>
            </div>
            <div>
              <p className="text-foreground font-semibold mb-6">
                Nous sélectionnons des appareils authentiques, soigneusement testés et vérifiés afin de garantir :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["La qualité", "La performance", "La durabilité", "La sécurité d'utilisation"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-5 bg-primary/5 border border-primary/10 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PILIERS */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              Notre fonctionnement
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trois piliers fondamentaux
            </h2>
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
      <section className="py-24">
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
      <section className="py-24 bg-surface">
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
