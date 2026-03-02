import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Tag, Calendar } from "lucide-react";
import { articles, getArticleBySlug } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
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
          <h2
            key={i}
            className="text-2xl font-bold mt-10 mb-4 text-foreground"
          >
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
  params: { slug: string };
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prev = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const next =
    currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <>
      {/* HEADER */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
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
              {article.readTime} de lecture
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {article.title}
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* IMAGE */}
      <section className="pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-2xl flex items-center justify-center py-16">
            <span className="text-8xl">{article.image}</span>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <article className="prose-custom">{renderMarkdown(article.content)}</article>
        </div>
      </section>

      {/* NAVIGATION ARTICLES */}
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
                  Article précédent
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
                  Article suivant
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

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à passer à l&apos;action ?
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            Découvrez nos échéanciers et commencez votre demande.
          </p>
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
