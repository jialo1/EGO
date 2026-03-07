import Link from "next/link";
import type { ReactNode } from "react";

interface CtaLink {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
}

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  links: CtaLink[];
  className?: string;
}

const linkStyles = {
  primary:
    "inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all hover:scale-[1.02] shadow-md",
  secondary:
    "inline-flex items-center justify-center gap-2 bg-foreground/5 border border-border text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-foreground/10 transition-all",
};

export default function CtaSection({ title, subtitle, links, className = "" }: CtaSectionProps) {
  return (
    <section className={`py-24 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-muted max-w-md mx-auto mb-8">{subtitle}</p>}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${subtitle ? "" : "mt-8"}`}>
          {links.map((link) => {
            const isExternal = link.href.startsWith("mailto:") || link.href.startsWith("tel:");
            const style = linkStyles[link.variant ?? "primary"];

            if (isExternal) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={style}
                >
                  {link.label}
                  {link.icon}
                </a>
              );
            }

            return (
              <Link key={link.href} href={link.href} className={style}>
                {link.label}
                {link.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
