import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { articles, getAllCategories } from "@/lib/articles";

export const metadata = {
  title: "Articles | E-GO",
  description:
    "Guides, conseils et actualités sur la location-vente de smartphones en Afrique. Restez informé avec E-GO.",
};

export default function Articles() {
  const categories = getAllCategories();
  const featured = articles[0];
  const rest = articles.slice(1);

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
              <span className="text-sm text-muted">Blog</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Guides, conseils &{" "}
              <span className="text-primary">actualités.</span>
            </h1>

            <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
              Guides, conseils et actualités sur la location-vente de smartphones en Afrique. Restez informé avec E-GO.
            </p>

            {/* Image mobile */}
            <div className="flex lg:hidden items-center justify-center mt-10">
              <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/articles-hero.png"
                  alt="Conseiller E-GO présentant un smartphone à un client"
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
                  src="/articles-hero.png"
                  alt="Conseiller E-GO présentant un smartphone à un client"
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

      {/* CATEGORIES */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-primary/10 text-primary px-4 py-2 rounded-full">
              Tous
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1.5 text-sm font-medium bg-surface-light border border-border text-muted px-4 py-2 rounded-full hover:border-primary/30 hover:text-foreground transition-all cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE EN VEDETTE */}
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
                <p className="text-muted leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">{featured.date}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Lire l&apos;article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* GRILLE D'ARTICLES */}
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
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">{article.date}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                      Lire <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Vous avez des questions ?
          </h2>
          <Link
            href="/echeanciers"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all hover:scale-[1.02] shadow-md"
          >
            Commencer ma demande
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
