import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home.hero");
  return {
    title: "E-GO | Location-vente de smartphones en Afrique",
    description: `${t("title")} ${t("subtitle")}`,
  };
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
