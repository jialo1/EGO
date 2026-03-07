import { Link } from "@/i18n/routing";
import { ArrowRight, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { articles } from "@/lib/articles";
import HeroWithImage from "@/components/HeroWithImage";
import CtaSection from "@/components/CtaSection";

export async function generateMetadata() {
  const t = await getTranslations("articles");
  return {
    title: `E-GO | ${t("badge")}`,
    description: t("subtitle"),
  };
}

export default async function Articles() {
  const t = await getTranslations("articles");
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <HeroWithImage
        badge={t("badge")}
        title={
          <>
            {t("title")} <span className="text-primary">{t("titleHighlight")}</span>
          </>
        }
        subtitle={t("subtitle")}
        imageSrc="/articles-hero.png"
        imageAlt="Conseiller E-GO présentant un smartphone à un client"
      />

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href={`/articles/${featured.slug}`}
            className="group block bg-surface-light border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-16">
                <span className="text-8xl">{featured.image}</span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-xs text-muted flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">{featured.date}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    {t("readArticle")} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-surface-light border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center py-12">
                  <span className="text-6xl">{article.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">{article.date}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                      {t("read")} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        className="bg-surface"
        title={t("cta")}
        links={[
          { href: "/echeanciers", label: t("startRequest"), icon: <ArrowRight className="w-5 h-5" /> },
        ]}
      />
    </>
  );
}
