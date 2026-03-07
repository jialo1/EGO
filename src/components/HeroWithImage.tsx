import Image from "next/image";
import type { ReactNode } from "react";

interface HeroWithImageProps {
  badge?: string;
  title: ReactNode;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  imageAspect?: "420/520" | "4/3";
  children?: ReactNode;
}

export default function HeroWithImage({
  badge,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageAspect = "4/3",
  children,
}: HeroWithImageProps) {
  const aspectClass = imageAspect === "420/520" ? "aspect-[420/520]" : "aspect-[4/3]";
  const maxWidthClass = imageAspect === "420/520" ? "max-w-[320px]" : "max-w-[340px]";
  const desktopSize = imageAspect === "420/520" ? "w-[420px] h-[520px]" : "w-[480px] h-[360px]";

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {badge && (
            <div className="inline-flex items-center gap-2 bg-surface-light border border-border rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted">{badge}</span>
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {title}
          </h1>

          <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
            {subtitle}
          </p>

          <div className={`flex lg:hidden items-center justify-center ${imageAspect === "420/520" ? "mt-8" : "mt-10"}`}>
            <div className={`relative w-full ${maxWidthClass} ${aspectClass} overflow-hidden ${imageAspect === "4/3" ? "rounded-2xl shadow-xl" : "rounded-3xl"}`}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes={imageAspect === "420/520" ? "(max-width: 1024px) 320px, 0px" : "(max-width: 1024px) 340px, 0px"}
                className={`object-cover ${imageAspect === "420/520" ? "object-top" : ""}`}
              />
            </div>
          </div>

          {children}
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className={`relative ${desktopSize} rounded-3xl overflow-hidden ${imageAspect === "4/3" ? "rounded-2xl shadow-xl" : ""}`}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes={imageAspect === "420/520" ? "(min-width: 1024px) 420px, 0px" : "(min-width: 1024px) 480px, 0px"}
                className={`object-cover ${imageAspect === "420/520" ? "object-top" : ""}`}
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
