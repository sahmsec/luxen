export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "g-001",
    name: "AERO-X1 Silver",
    price: 450,
    description: "Sleek silver titanium frame with gradient blue lenses. Engineered for extreme lightweight comfort and aerodynamic precision.",
    image: "/glass_01_1779621806544.png",
    category: "Performance"
  },
  {
    id: "g-002",
    name: "AERO-X1 Obsidian",
    price: 450,
    description: "Dark titanium frame with deep black lenses. Stealthy, light, and perfectly balanced.",
    image: "/glass_01_1779621806544.png",
    category: "Performance"
  },
  {
    id: "g-003",
    name: "BLOCK-M Matte",
    price: 520,
    description: "Thick matte black acetate frame in a bold geometric shape. A statement piece that redefines face architecture.",
    image: "/glass_02_1779621838780.png",
    category: "Statement"
  },
  {
    id: "g-004",
    name: "BLOCK-M Gloss",
    price: 520,
    description: "High-gloss black acetate with striking structural angles. For those who command the room.",
    image: "/glass_02_1779621838780.png",
    category: "Statement"
  },
  {
    id: "g-005",
    name: "RIMLESS EDGE Chrome",
    price: 680,
    description: "Ultra-minimalist rimless design with chrome details and sharp orange tinted lenses. Retro-futurism at its finest.",
    image: "/glass_03_1779622002752.png",
    category: "Avant-Garde"
  },
  {
    id: "g-006",
    name: "RIMLESS EDGE Gold",
    price: 720,
    description: "24k gold-plated accents on a rimless chassis, featuring warm amber lenses.",
    image: "/glass_03_1779622002752.png",
    category: "Avant-Garde"
  },
  {
    id: "g-007",
    name: "CRYSTAL VISION",
    price: 390,
    description: "Translucent crystal frame paired with reflective silver lenses. A pure, unobstructed aesthetic.",
    image: "/glass_04_1779622422718.png",
    category: "Minimalist"
  },
  {
    id: "g-008",
    name: "CRYSTAL ICE",
    price: 390,
    description: "Frosted white acetate frame with icy blue polarized lenses.",
    image: "/glass_04_1779622422718.png",
    category: "Minimalist"
  },
  {
    id: "g-009",
    name: "NEON SHIELD",
    price: 850,
    description: "Oversized shield style wrapping the face, accented with neon green details and impenetrable dark lenses.",
    image: "/glass_05_1779622488480.png",
    category: "Limited Edition"
  },
  {
    id: "g-010",
    name: "NEON SHIELD Ghost",
    price: 850,
    description: "The oversized shield reimagined with white accents and silver mirror wrap-around lenses.",
    image: "/glass_05_1779622488480.png",
    category: "Limited Edition"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
