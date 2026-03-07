import { FileText } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import LegalPageHeader from "@/components/LegalPageHeader";
import { contactEmail } from "@/lib/locations";

export const metadata = {
  title: "Conditions générales | E-GO",
  description:
    "Conditions générales d'utilisation et de location-vente E-GO. Lisez les termes qui régissent nos services de location-vente de smartphones en Afrique.",
};

export default async function ConditionsGenerales() {
  const tLegal = await getTranslations("legal");
  const tCommon = await getTranslations("common");

  return (
    <>
      <section className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <LegalPageHeader
            icon={FileText}
            title="Conditions générales"
            date={tLegal("lastUpdate")}
          />

          <div className="prose prose-lg max-w-none space-y-10 text-muted">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">1. Objet</h2>
              <p className="leading-relaxed">
                Les présentes conditions générales régissent l&apos;utilisation des services proposés par E-GO, entreprise spécialisée dans la location-vente de smartphones en Afrique. En accédant à nos services ou en signant un contrat E-GO, vous acceptez sans réserve ces conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">2. Services proposés</h2>
              <p className="leading-relaxed mb-4">
                E-GO propose des contrats de location-vente permettant l&apos;acquisition d&apos;iPhone par paiements échelonnés. Les services incluent :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Location-vente de smartphones (iPhone)</li>
                <li>Échéanciers de paiement adaptés (hebdomadaire, quinzaine, mensuel)</li>
                <li>Suivi en temps réel des paiements</li>
                <li>Contrat officiel pour chaque transaction</li>
                <li>Service de troc et échange dans les conditions prévues au contrat</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">3. Éligibilité</h2>
              <p className="leading-relaxed">
                Pour souscrire à un contrat E-GO, vous devez être majeur, résider dans une zone couverte (Abidjan, Dakar, Accra, Lagos, Nairobi ou villes en expansion), fournir les documents demandés (pièce d&apos;identité, justificatif de domicile, etc.) et accepter les conditions du contrat proposé.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">4. Contrat et engagement</h2>
              <p className="leading-relaxed mb-4">
                Chaque transaction est encadrée par un contrat officiel qui détaille :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>L&apos;identité des parties</li>
                <li>Le modèle de smartphone et ses caractéristiques</li>
                <li>L&apos;échéancier complet (dates et montants)</li>
                <li>Les conditions en cas de retard ou de difficulté</li>
                <li>Les modalités de transfert de propriété</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Le client s&apos;engage à respecter l&apos;échéancier convenu. Tout retard peut entraîner des pénalités et, en cas de non-paiement prolongé, la suspension ou la résiliation du contrat selon les clauses prévues.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">5. Acompte et paiements</h2>
              <p className="leading-relaxed">
                Un acompte initial est requis avant la livraison. Les paiements suivants sont effectués selon l&apos;échéancier choisi (hebdomadaire, par quinzaine ou mensuel). Les moyens de paiement acceptés sont ceux indiqués au moment de la souscription.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">6. Propriété et livraison</h2>
              <p className="leading-relaxed">
                Le smartphone reste la propriété d&apos;E-GO jusqu&apos;au paiement intégral de toutes les échéances. Le transfert de propriété intervient à la clôture du contrat. La livraison ou la remise en main propre est effectuée dans les points de contact E-GO des villes couvertes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">7. Garantie et SAV</h2>
              <p className="leading-relaxed">
                Les appareils vendus bénéficient des garanties légales et constructeur en vigueur. E-GO peut proposer un accompagnement pour les démarches SAV dans le cadre défini au contrat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">8. Modification et résiliation</h2>
              <p className="leading-relaxed">
                E-GO se réserve le droit de modifier ces conditions générales. Les clients seront informés des changements. En cas de résiliation anticipée ou de non-respect des engagements, les clauses du contrat individuel s&apos;appliquent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">9. Droit applicable et litiges</h2>
              <p className="leading-relaxed">
                Les présentes conditions sont régies par le droit applicable dans le pays du siège social d&apos;E-GO (Côte d&apos;Ivoire). En cas de litige, les parties s&apos;efforceront de trouver une solution amiable avant toute procédure judiciaire.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">10. Contact</h2>
              <p className="leading-relaxed">
                Pour toute question relative aux conditions générales :{" "}
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
