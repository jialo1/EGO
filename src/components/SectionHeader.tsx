import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
      {subtitle && <p className="mt-4 text-muted max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
