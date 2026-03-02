"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { products, categories, type Product } from "@/lib/products";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-surface-light border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all flex flex-col">
      {/* Image */}
      <div className="relative bg-gradient-to-b from-background to-surface flex items-center justify-center p-4 h-72">
        {product.popular && (
          <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 text-[10px] font-bold bg-accent/10 text-accent px-2.5 py-1 rounded-full uppercase tracking-wider">
            <Star className="w-3 h-3 fill-accent" />
            Populaire
          </span>
        )}
        <div className="relative w-48 h-60">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 250px"
          />
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-muted mb-1">{product.tagline}</p>
        <h3 className="font-bold text-lg mb-3">{product.name}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.specs.map((spec) => (
            <span
              key={spec}
              className="text-[11px] bg-surface border border-border text-muted px-2 py-0.5 rounded-md"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <p className="text-xs text-muted">À partir de</p>
              <p className="text-lg font-bold text-primary">
                {product.priceWeekly} <span className="text-sm font-normal">F/sem</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted">ou</p>
              <p className="text-sm font-semibold">
                {product.priceMonthly} <span className="text-xs font-normal text-muted">F/mois</span>
              </p>
            </div>
          </div>
          <Link
            href="/echeanciers"
            className="block w-full text-center bg-primary text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Commencer ma demande
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogue" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              Catalogue
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Nos articles disponibles
            </h2>
            <p className="mt-3 text-muted max-w-lg">
              iPhone, iPad, Apple Watch. Contrat et échéancier inclus.
            </p>
          </div>

          {/* Filtres */}
          <div className="flex gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-light border-border text-muted hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Info contrat */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">
              Contrat officiel pour chaque article
            </h3>
            <p className="text-sm text-muted">
              Signature, vérification documents, échéancier. Pas de frais caché.
            </p>
          </div>
          <Link
            href="/echeanciers"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all shrink-0 shadow-md"
          >
            Voir les échéanciers
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
