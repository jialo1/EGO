import { Shield } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import LegalPageHeader from "@/components/LegalPageHeader";
import { contactEmail } from "@/lib/locations";

export const metadata = {
  title: "Politique de confidentialité | E-GO",
  description:
    "Politique de confidentialité E-GO. Découvrez comment nous protégeons et utilisons vos données personnelles dans le cadre de nos services de location-vente.",
};

export default async function PolitiqueConfidentialite() {
  const tLegal = await getTranslations("legal");
  const tCommon = await getTranslations("common");

  return (
    <>
      <section className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <LegalPageHeader
            icon={Shield}
            title="Politique de confidentialité"
            date={tLegal("lastUpdate")}
          />

          <div className="prose prose-lg max-w-none space-y-10 text-muted">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                E-GO s&apos;engage à protéger la vie privée de ses clients et utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles dans le cadre de nos services de location-vente de smartphones en Afrique.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">2. Données collectées</h2>
              <p className="leading-relaxed mb-4">
                Nous pouvons collecter les données suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Identité :</strong> nom, prénom, pièce d&apos;identité</li>
                <li><strong className="text-foreground">Contact :</strong> numéro de téléphone, adresse e-mail, adresse postale</li>
                <li><strong className="text-foreground">Financier :</strong> informations nécessaires à l&apos;établissement du contrat et au suivi des paiements</li>
                <li><strong className="text-foreground">Navigation :</strong> données techniques (adresse IP, type de navigateur) lors de l&apos;utilisation du site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">3. Utilisation des données</h2>
              <p className="leading-relaxed mb-4">
                Vos données personnelles sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Établir et gérer votre contrat de location-vente</li>
                <li>Vérifier votre identité et votre éligibilité</li>
                <li>Assurer le suivi des paiements et des échéances</li>
                <li>Vous contacter pour les rappels et le service client</li>
                <li>Améliorer nos services et notre site web</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">4. Confidentialité et sécurité</h2>
              <p className="leading-relaxed">
                <strong className="text-foreground">Avec E-GO, vos données personnelles sont sécurisées et gardées confidentielles.</strong> Aucune divulgation de vos données personnelles à des tiers à des fins commerciales. Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, perte ou altération.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">5. Partage des données</h2>
              <p className="leading-relaxed">
                Nous ne vendons pas vos données. Nous pouvons les partager uniquement avec des prestataires techniques nécessaires au fonctionnement de nos services (hébergement, paiement), sous contrat de confidentialité, ou lorsque la loi l&apos;exige (autorités compétentes).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">6. Conservation</h2>
              <p className="leading-relaxed">
                Vos données sont conservées pendant la durée du contrat et selon les obligations légales applicables. Au-delà, elles sont supprimées ou anonymisées, sauf conservation requise par la loi.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">7. Vos droits</h2>
              <p className="leading-relaxed mb-4">
                Vous disposez du droit d&apos;accéder à vos données, de les rectifier, de demander leur suppression ou leur limitation de traitement, dans le cadre des dispositions légales en vigueur. Pour exercer ces droits, contactez-nous à{" "}
                <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                  {contactEmail}
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">8. Cookies</h2>
              <p className="leading-relaxed">
                Notre site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic. Vous pouvez configurer votre navigateur pour refuser les cookies, tout en sachant que certaines fonctionnalités pourraient en être affectées.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">9. Modifications</h2>
              <p className="leading-relaxed">
                Nous pouvons mettre à jour cette politique de confidentialité. La date de dernière mise à jour sera indiquée en tête de page. Nous vous invitons à la consulter régulièrement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">10. Contact</h2>
              <p className="leading-relaxed">
                Pour toute question relative à la protection de vos données :{" "}
                <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                  {contactEmail}
                </a>
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border text-center">
            <Link href="/" className="text-primary font-medium hover:underline">
              ← {tCommon("backToHome")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
