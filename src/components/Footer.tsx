import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="E-GO"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Location-vente smartphones en Afrique. Payez progressivement.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Navigation</h4>
            <div className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/a-propos", label: "À propos" },
                { href: "/services", label: "Services" },
                { href: "/echeanciers", label: "Échéanciers" },
                { href: "/articles", label: "Articles" },
                { href: "/localisations", label: "Localisations" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Services</h4>
            <div className="space-y-3">
              {[
                "Location-vente",
                "Paiement flexible",
                "Troc & échange",
                "Suivi & documents",
              ].map((service) => (
                <p key={service} className="text-sm text-white/60">
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@e-go.africa"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@e-go.africa
              </a>
              <a
                href="tel:+2250000000000"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +225 00 00 000 000
              </a>
              <p className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 shrink-0" />
                Abidjan, Côte d&apos;Ivoire
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} E-GO. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors">
              Conditions générales
            </Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
