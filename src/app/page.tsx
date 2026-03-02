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
              Un process structuré, un contrat officiel, un suivi en temps réel.
              E-GO rend la technologie accessible en toute sécurité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="#catalogue"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-dark transition-all hover:scale-[1.02] shadow-md"
              >
                <Smartphone className="w-5 h-5" />
                Voir les articles
              </Link>
              <Link
                href="/echeanciers"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all hover:scale-[1.02] shadow-md"
              >
                Commencer ma demande
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
              <div className="w-72 h-[520px] bg-gradient-to-b from-surface-light to-surface rounded-[3rem] border border-border flex flex-col items-center justify-center p-8 shadow-xl">
                <div className="relative w-36 h-48 mb-4">
                  <Image
                    src="/products/iphone-15-pro.png"
                    alt="iPhone 15 Pro"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-lg font-semibold text-center">iPhone 15 Pro</p>
                <p className="text-sm text-muted mt-2 text-center">À partir de</p>
                <p className="text-3xl font-bold text-primary mt-1">35 000 F</p>
                <p className="text-xs text-muted">/semaine</p>
                <div className="mt-6 w-full space-y-3">
                  {["Titane", "A17 Pro", "Contrat inclus"].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm text-muted">
                      <Check className="w-4 h-4 text-primary" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CATALOGUE PRODUITS */}
      <ProductCatalog />

      {/* COMMENT ÇA MARCHE */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Comment ça marche ?</h2>
            <p className="mt-4 text-muted max-w-lg mx-auto">
              Un processus simple, transparent et sécurisé en trois étapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Smartphone,
                title: "Choisissez votre modèle",
                desc: "Sélectionnez l'iPhone qui vous convient et le mode de paiement adapté à votre rythme.",
              },
              {
                step: "02",
                icon: FileText,
                title: "Fournissez vos documents",
                desc: "Pièce d'identité, justificatif de revenu. Nous vérifions et préparons votre contrat.",
              },
              {
                step: "03",
                icon: Check,
                title: "Recevez & payez",
                desc: "Recevez votre iPhone immédiatement. Suivez vos paiements via votre échéancier personnalisé.",
              },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div
                key={step}
                className="relative group bg-surface-light border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-5xl font-bold text-foreground/5 absolute top-4 right-6">
                  {step}
                </span>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉCHÉANCIERS APERÇU */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              Flexibilité
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Un échéancier adapté à votre rythme
            </h2>
            <p className="mt-4 text-muted max-w-lg mx-auto">
              Choisissez le mode de paiement qui correspond à votre situation.
            </p>
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
                duration: "2 à 4 mois",
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
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              Avantages
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Pourquoi choisir E-GO ?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Sécurité juridique",
                desc: "Contrat officiel signé, cadre légal clair et respecté.",
              },
              {
                icon: Lock,
                title: "Process structuré",
                desc: "Vérification des documents, suivi rigoureux de chaque dossier.",
              },
              {
                icon: Handshake,
                title: "Confiance mutuelle",
                desc: "Relation transparente, pas de frais cachés ni de surprises.",
              },
              {
                icon: Users,
                title: "Accessible à tous",
                desc: "Commerçants, salariés, fonctionnaires : un plan pour chacun.",
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
                Un cadre professionnel,
                <br />
                pas du crédit informel.
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Chez E-GO, chaque transaction est encadrée par un contrat officiel.
                Nous vérifions vos documents, établissons un échéancier clair et
                assurons un suivi rigoureux. Votre sécurité est notre priorité.
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                En savoir plus sur notre approche <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: FileText,
                  title: "Signature de contrat",
                  desc: "Chaque client signe un contrat officiel avant toute livraison.",
                },
                {
                  icon: Shield,
                  title: "Vérification des documents",
                  desc: "CNI, bulletins de paie, attestation employeur — tout est vérifié.",
                },
                {
                  icon: Eye,
                  title: "Suivi transparent",
                  desc: "Échéancier détaillé, rappels de paiement, historique accessible.",
                },
                {
                  icon: Lock,
                  title: "Protection des données",
                  desc: "Vos informations personnelles sont sécurisées et confidentielles.",
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
                text: "Grâce à E-GO, j'ai pu avoir mon iPhone en payant chaque semaine. Le processus était clair et professionnel.",
              },
              {
                name: "Moussa D.",
                role: "Fonctionnaire, Dakar",
                text: "Le paiement mensuel correspond parfaitement à mon salaire. Le contrat m'a rassuré dès le départ.",
              },
              {
                name: "Fatou S.",
                role: "Entrepreneuse, Abidjan",
                text: "J'apprécie la transparence d'E-GO. Pas de frais cachés, un suivi en temps réel. Je recommande !",
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
              Choisissez votre iPhone, sélectionnez votre échéancier et démarrez
              votre demande en quelques minutes.
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
