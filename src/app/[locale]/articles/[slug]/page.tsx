import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Tag, Calendar } from "lucide-react";
import { articles, getArticleBySlug } from "@/lib/articles";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article introuvable | E-GO" };
  return {
    title: `${article.title} | E-GO`,
    description: article.excerpt,
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: { type: string; content: string }[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("## ")) {
      elements.push({ type: "h2", content: trimmed.slice(3) });
    } else if (trimmed.startsWith("- **")) {
      const match = trimmed.match(/^- \*\*(.+?)\*\*\s*:\s*(.+)$/);
      if (match) {
        elements.push({ type: "bold-list", content: `${match[1]}|${match[2]}` });
      } else {
        elements.push({ type: "list", content: trimmed.slice(2) });
      }
    } else if (trimmed.startsWith("- ")) {
      elements.push({ type: "list", content: trimmed.slice(2) });
    } else {
      elements.push({ type: "p", content: trimmed });
    }
  }

  return elements.map((el, i) => {
    switch (el.type) {
      case "h2":
        return (
          <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-foreground">
            {el.content}
          </h2>
        );
      case "list":
        return (
          <li key={i} className="text-muted leading-relaxed ml-4 list-disc">
            {el.content}
          </li>
        );
      case "bold-list": {
        const [bold, rest] = el.content.split("|");
        return (
          <li key={i} className="text-muted leading-relaxed ml-4 list-disc">
            <strong className="text-foreground">{bold}</strong> : {rest}
          </li>
        );
      }
      default:
        return (
          <p key={i} className="text-muted leading-relaxed mb-4">
            {el.content}
          </p>
        );
    }
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const t = await getTranslations("articles");

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prev = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const next =
    currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <>
      <PageHero
        badge={article.category}
        title={article.title}
        subtitle={article.excerpt}
      />

      <section className="pb-8">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToArticles")}
          </Link>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <Clock className="w-3 h-3" />
              {article.readTime} {t("readTimeSuffix")}
            </span>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-2xl flex items-center justify-center py-16">
            <span className="text-8xl">{article.image}</span>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <article className="prose-custom">{renderMarkdown(article.content)}</article>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border-t border-border pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prev && (
              <Link
                href={`/articles/${prev.slug}`}
                className="group bg-surface-light border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <span className="text-xs text-muted flex items-center gap-1 mb-2">
                  <ArrowLeft className="w-3 h-3" />
                  {t("prevArticle")}
                </span>
                <p className="font-semibold text-sm group-hover:text-primary transition-colors leading-snug">
                  {prev.title}
                </p>
              </Link>
            )}
            {next && (
              <Link
                href={`/articles/${next.slug}`}
                className="group bg-surface-light border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-all sm:text-right"
              >
                <span className="text-xs text-muted flex items-center gap-1 mb-2 sm:justify-end">
                  {t("nextArticle")}
                  <ArrowRight className="w-3 h-3" />
                </span>
                <p className="font-semibold text-sm group-hover:text-primary transition-colors leading-snug">
                  {next.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>

      <CtaSection
        className="bg-surface"
        title={t("ctaAction")}
        subtitle={t("ctaActionSubtitle")}
        links={[
          {
            href: "/echeanciers",
            label: t("startRequest"),
            icon: <ArrowRight className="w-5 h-5" />,
          },
        ]}
      />
    </>
  );
}
