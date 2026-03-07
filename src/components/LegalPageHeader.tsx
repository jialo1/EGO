import type { LucideIcon } from "lucide-react";

interface LegalPageHeaderProps {
  icon: LucideIcon;
  title: string;
  date?: string;
}

export default function LegalPageHeader({ icon: Icon, title, date }: LegalPageHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">{title}</h1>
      {date && <p className="text-center text-muted mb-12">{date}</p>}
    </>
  );
}
