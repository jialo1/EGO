import type { ReactNode } from "react";

interface PageHeroProps {
  badge?: string;
  title: ReactNode;
  subtitle: string;
}

export default function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-surface-light border border-border rounded-full px-4 py-2 mb-6 shadow-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted">{badge}</span>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
