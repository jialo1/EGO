export type Product = {
  id: string;
  name: string;
  category: "iphone" | "ipad" | "watch";
  tagline: string;
  priceWeekly: string;
  priceMonthly: string;
  image: string;
  specs: string[];
  popular?: boolean;
};

export const products: Product[] = [
  {
    id: "iphone-xr",
    name: "iPhone XR",
    category: "iphone",
    tagline: "Le rapport qualité-prix",
    priceWeekly: "15 000",
    priceMonthly: "50 000",
    image: "/products/iphone-xr.png",
    specs: ["Écran 6.1\"", "64 / 128 Go", "Face ID"],
  },
  {
    id: "iphone-11",
    name: "iPhone 11",
    category: "iphone",
    tagline: "Performant et accessible",
    priceWeekly: "18 000",
    priceMonthly: "60 000",
    image: "/products/iphone-11.png",
    specs: ["Écran 6.1\"", "Double caméra", "64 / 128 Go"],
  },
  {
    id: "iphone-12",
    name: "iPhone 12",
    category: "iphone",
    tagline: "Design emblématique",
    priceWeekly: "20 000",
    priceMonthly: "70 000",
    image: "/products/iphone-12.png",
    specs: ["Écran 6.1\" OLED", "5G", "64 / 128 / 256 Go"],
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    category: "iphone",
    tagline: "Puissance et autonomie",
    priceWeekly: "22 000",
    priceMonthly: "80 000",
    image: "/products/iphone-13.png",
    specs: ["Écran 6.1\" OLED", "A15 Bionic", "128 / 256 / 512 Go"],
    popular: true,
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    category: "iphone",
    tagline: "L'essentiel, en mieux",
    priceWeekly: "25 000",
    priceMonthly: "90 000",
    image: "/products/iphone-14.png",
    specs: ["Écran 6.1\" OLED", "A15 Bionic", "128 / 256 / 512 Go"],
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    category: "iphone",
    tagline: "Pro dans tous les sens",
    priceWeekly: "30 000",
    priceMonthly: "110 000",
    image: "/products/iphone-14-pro.png",
    specs: ["Écran 6.1\" ProMotion", "A16 Bionic", "Dynamic Island"],
    popular: true,
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    category: "iphone",
    tagline: "Nouvelle génération",
    priceWeekly: "28 000",
    priceMonthly: "100 000",
    image: "/products/iphone-15.png",
    specs: ["Écran 6.1\" OLED", "A16 Bionic", "USB-C", "Dynamic Island"],
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    category: "iphone",
    tagline: "Titane. Puissant. Pro.",
    priceWeekly: "35 000",
    priceMonthly: "130 000",
    image: "/products/iphone-15-pro.png",
    specs: ["Titane", "A17 Pro", "USB-C", "48 MP"],
    popular: true,
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    category: "iphone",
    tagline: "Conçu pour Apple Intelligence",
    priceWeekly: "35 000",
    priceMonthly: "130 000",
    image: "/products/iphone-16.png",
    specs: ["Écran 6.1\" OLED", "A18", "Bouton Caméra", "USB-C"],
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    category: "iphone",
    tagline: "Le summum de l'iPhone",
    priceWeekly: "40 000",
    priceMonthly: "150 000",
    image: "/products/iphone-16-pro.png",
    specs: ["Titane", "A18 Pro", "Contrôle Caméra", "48 MP"],
    popular: true,
  },
  {
    id: "ipad-10",
    name: "iPad (10e gén.)",
    category: "ipad",
    tagline: "L'iPad pour tous",
    priceWeekly: "20 000",
    priceMonthly: "75 000",
    image: "/products/ipad-10.png",
    specs: ["Écran 10.9\"", "A14 Bionic", "USB-C", "64 / 256 Go"],
  },
  {
    id: "ipad-air",
    name: "iPad Air",
    category: "ipad",
    tagline: "Puissance et légèreté",
    priceWeekly: "30 000",
    priceMonthly: "110 000",
    image: "/products/ipad-air.png",
    specs: ["Écran 10.9\"", "Puce M1", "USB-C", "Touch ID"],
    popular: true,
  },
  {
    id: "ipad-pro",
    name: "iPad Pro",
    category: "ipad",
    tagline: "La puissance d'un Mac",
    priceWeekly: "40 000",
    priceMonthly: "150 000",
    image: "/products/ipad-pro.png",
    specs: ["Écran 11\" / 12.9\"", "Puce M2", "Face ID", "Thunderbolt"],
  },
  {
    id: "apple-watch-se",
    name: "Apple Watch SE",
    category: "watch",
    tagline: "L'essentiel au poignet",
    priceWeekly: "15 000",
    priceMonthly: "50 000",
    image: "/products/watch-se.png",
    specs: ["Écran Retina", "GPS", "Suivi santé"],
  },
  {
    id: "apple-watch-series-9",
    name: "Apple Watch Series 9",
    category: "watch",
    tagline: "Plus intelligente que jamais",
    priceWeekly: "22 000",
    priceMonthly: "80 000",
    image: "/products/watch-series.png",
    specs: ["Écran Always-On", "Double Tap", "S9 SiP"],
    popular: true,
  },
  {
    id: "apple-watch-ultra",
    name: "Apple Watch Ultra 2",
    category: "watch",
    tagline: "L'aventure au poignet",
    priceWeekly: "35 000",
    priceMonthly: "130 000",
    image: "/products/watch-ultra.png",
    specs: ["Titane", "GPS + Cellular", "Bouton Action", "100m"],
  },
];

export const categories = [
  { id: "all", label: "Tout voir" },
  { id: "iphone", label: "iPhone" },
  { id: "ipad", label: "iPad" },
  { id: "watch", label: "Apple Watch" },
];

export function getProductsByCategory(cat: string): Product[] {
  if (cat === "all") return products;
  return products.filter((p) => p.category === cat);
}
