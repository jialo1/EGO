import Link from "next/link";
import Image from "next/image";
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
} from "lucide-react";
import ProductCatalog from "@/components/ProductCatalog";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-surface-light border border-border rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted">Location-vente sécurisée en Afrique</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Accédez à votre iPhone{" "}
              <span className="text-primary">maintenant.</span>
              <br />
              Payez{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                progressivement.
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
              Contrat, suivi, échéancier. La technologie accessible.
            </p>

            {/* Image mobile : affichée après titre et sous-titre */}
            <div className="flex lg:hidden items-center justify-center mt-8">
              <div className="relative w-full max-w-[320px] aspect-[420/520] rounded-3xl overflow-hidden">
                <Image
                  src="/hero-store.png"
                  alt="Conseiller E-GO présentant un smartphone à un client"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="#comment-ca-marche"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02] shadow-md"
              >
                <Smartphone className="w-5 h-5" />
                Notre mode de fonctionnement
              </Link>
              <Link
                href="/echeanciers"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all hover:scale-[1.02] shadow-md"
              >
                Nos échéanciers
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-12">
              {[
                { icon: FileText, text: "Contrat officiel" },
                { icon: Eye, text: "Suivi en temps réel" },
                { icon: Calendar, text: "Échéancier clair" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-muted">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-3 h-3 text-primary" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="relative w-[420px] h-[520px] rounded-3xl overflow-hidden">
                <Image
                  src="/hero-store.png"
                  alt="Conseiller E-GO présentant un smartphone à un client"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CATALOGUE PRODUITS */}
      <ProductCatalog />

      {/* MODE DE FONCTIONNEMENT */}
      <section id="comment-ca-marche" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">E-GO</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Mode de fonctionnement</h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              De l&apos;acompte à la propriété : 7 étapes simples et transparentes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                step: 1,
                icon: Zap,
                title: "Principe du service",
                content: "E-GO propose un système innovant de location-vente d'iPhone permettant aux clients d'acquérir un smartphone haut de gamme sans payer la totalité du prix immédiatement. Notre modèle repose sur un paiement initial suivi de paiements échelonnés sur une période déterminée.",
                list: null,
              },
              {
                step: 2,
                icon: CreditCard,
                title: "L'acompte",
                content: "Pour accéder au service, le client doit verser un acompte minimum de 40 % du prix du téléphone choisi.",
                list: ["Sécuriser la transaction", "Confirmer l'engagement du client", "Réduire le montant restant à payer"],
              },
              {
                step: 3,
                icon: FileText,
                title: "Signature du contrat",
                content: "Après le paiement de l'acompte, un contrat officiel est établi entre E-GO et le client.",
                list: ["Modèle d'iPhone choisi", "Montant total du téléphone", "Acompte payé", "Solde restant", "Durée et modalités de paiement"],
              },
              {
                step: 4,
                icon: Users,
                title: "Étude du statut",
                content: "Avant de fixer l'échéancier, E-GO analyse le statut du client afin de proposer un plan de paiement adapté.",
                list: ["Salarié", "Commerçant", "Entrepreneur", "Étudiant", "Travailleur indépendant"],
              },
              {
                step: 5,
                icon: Calendar,
                title: "Mise en place de l'échéancier",
                content: "Après validation du contrat, un échéancier personnalisé est établi. Les paiements peuvent être hebdomadaires, bi-hebdomadaires ou mensuels. La durée peut aller jusqu'à 1 mois ou plus selon l'accord établi.",
                list: null,
              },
              {
                step: 6,
                icon: Package,
                title: "Remise du téléphone",
                content: "Une fois l'acompte versé et le contrat signé, le client reçoit immédiatement son iPhone et peut l'utiliser tout en continuant de payer le reste selon l'échéancier défini.",
                list: null,
              },
              {
                step: 7,
                icon: CheckCircle2,
                title: "Fin du contrat",
                content: "Lorsque le client a payé la totalité du montant, le téléphone devient sa propriété définitive. Le contrat est alors considéré comme entièrement exécuté et clôturé.",
                list: null,
                highlight: true,
              },
            ].map(({ step, icon: Icon, title, content, list, highlight }) => (
              <div
                key={step}
                className={`rounded-2xl p-6 border transition-all hover:shadow-md ${
                  highlight
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
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{content}</p>
                    {list && (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {list.map((item) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* ÉCHÉANCIERS APERÇU */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              Flexibilité
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Un échéancier adapté à votre rythme
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Hebdomadaire",
                target: "Commerçants, indépendants",
                duration: "4 à 8 semaines",
                highlight: false,
              },
              {
                icon: Calendar,
                title: "Quinzaine",
                target: "Travailleurs réguliers",
                duration: "6 mois payable chaque deux semaines",
                highlight: true,
              },
              {
                icon: TrendingUp,
                title: "Mensuel",
                target: "Salariés & fonctionnaires",
                duration: "3 à 6 mois",
                highlight: false,
              },
            ].map(({ icon: Icon, title, target, duration, highlight }) => (
              <div
                key={title}
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
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted mb-1">Profil : {target}</p>
                <p className="text-sm text-muted">Durée : {duration}</p>
                <Link
                  href="/echeanciers"
                  className={`inline-flex items-center gap-1 text-sm font-medium mt-6 ${
                    highlight ? "text-primary" : "text-muted hover:text-foreground"
                  } transition-colors`}
                >
                  En savoir plus <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI E-GO */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              Avantages
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Pourquoi E-GO ?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Sécurité juridique",
                desc: "Contrat officiel, cadre légal.",
              },
              {
                icon: Lock,
                title: "Process structuré",
                desc: "Vérification documents, suivi rigoureux.",
              },
              {
                icon: Handshake,
                title: "Confiance",
                desc: "Transparence, pas de frais cachés.",
              },
              {
                icon: Users,
                title: "Accessible à tous",
                desc: "Un plan pour chaque profil.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-surface-light border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SÉCURITÉ & CONTRAT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                Sécurité & Contrat
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Cadre professionnel,
                <br />
                pas du crédit informel.
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Contrat officiel, vérification des documents, échéancier clair.
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                En savoir plus <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: FileText,
                  title: "Signature de contrat",
                  desc: "Contrat officiel avant toute livraison.",
                },
                {
                  icon: Shield,
                  title: "Vérification documents",
                  desc: "CNI, bulletins, attestation employeur.",
                },
                {
                  icon: Eye,
                  title: "Suivi transparent",
                  desc: "Échéancier, rappels, historique.",
                },
                {
                  icon: Lock,
                  title: "Protection des données",
                  desc: "Informations sécurisées et confidentielles.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 bg-surface-light border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{title}</h4>
                    <p className="text-sm text-muted">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              Témoignages
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ils nous font confiance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aminata K.",
                role: "Commerçante, Abidjan",
                text: "Mon iPhone en payant chaque semaine. Process clair et pro.",
              },
              {
                name: "Moussa D.",
                role: "Fonctionnaire, Dakar",
                text: "Le paiement mensuel correspond à mon salaire. Le contrat m'a rassuré.",
              },
              {
                name: "Fatou S.",
                role: "Entrepreneuse, Abidjan",
                text: "Transparence, pas de frais cachés. Je recommande !",
              },
            ].map(({ name, role, text }) => (
              <div
                key={name}
                className="bg-surface-light border border-border rounded-2xl p-8 hover:shadow-md transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  &ldquo;{text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm">{name}</p>
                  <p className="text-xs text-muted">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-3xl p-12 md:p-16 shadow-sm">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à commencer ?
            </h2>
            <p className="text-muted max-w-md mx-auto mb-8">
              Choisissez votre modèle et démarrez votre demande.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/echeanciers"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all hover:scale-[1.02] shadow-md"
              >
                Commencer ma demande
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-foreground/5 border border-border text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-foreground/10 transition-all"
              >
                Voir les services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
