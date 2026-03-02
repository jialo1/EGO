"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Smartphone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/echeanciers", label: "Échéanciers" },
  { href: "/articles", label: "Articles" },
  { href: "/localisations", label: "Localisations" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <Smartphone className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            E-<span className="text-primary">GO</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/echeanciers"
            className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Commencer
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/echeanciers"
            onClick={() => setOpen(false)}
            className="block bg-primary text-white text-center font-semibold px-5 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Commencer
          </Link>
        </div>
      )}
    </nav>
  );
}
