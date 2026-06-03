export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  // Sports Glasses
  {
    id: "g-001",
    name: "Velocity Pro Shield",
    price: 320,
    description: "Aerodynamic cycling sports glasses with a sleek, futuristic design and mirrored lenses.",
    image: "/velocity_pro_shield_1780479575696.png",
    category: "Sports"
  },
  {
    id: "g-002",
    name: "Endurance Tracker",
    price: 280,
    description: "Lightweight running sunglasses with polarized bright tinted lenses and a neon accent frame.",
    image: "/endurance_tracker_1780479590009.png",
    category: "Sports"
  },
  {
    id: "g-003",
    name: "Alpine Summit",
    price: 350,
    description: "High-performance snow sports goggles with a large frameless mirror finish lens.",
    image: "/alpine_summit_1780479603067.png",
    category: "Sports"
  },
  {
    id: "g-004",
    name: "Aqua Sprint",
    price: 260,
    description: "Water sports polarized sunglasses with a matte navy blue frame and deep blue lenses.",
    image: "/aqua_sprint_1780479615905.png",
    category: "Sports"
  },
  {
    id: "g-005",
    name: "Court Master",
    price: 310,
    description: "Ultra-lightweight court sports glasses with an ergonomic titanium frame and clear amber lenses.",
    image: "/court_master_1780479631215.png",
    category: "Sports"
  },

  // Sun Glasses
  {
    id: "g-006",
    name: "Riviera Classic",
    price: 450,
    description: "Timeless luxury tortoise shell sunglasses with dark green lenses.",
    image: "/riviera_classic_1780479656897.png",
    category: "Sun"
  },
  {
    id: "g-007",
    name: "Aviator Elite",
    price: 520,
    description: "Gold-rimmed classic aviator sunglasses with gradient brown lenses. Sleek and sophisticated.",
    image: "/aviator_elite_1780479669263.png",
    category: "Sun"
  },
  {
    id: "g-008",
    name: "Midnight Geometric",
    price: 480,
    description: "Thick black frame angular geometric sunglasses with completely opaque black lenses.",
    image: "/midnight_geometric_1780479681819.png",
    category: "Sun"
  },
  {
    id: "g-009",
    name: "Sunset Gradient",
    price: 490,
    description: "Oversized round sunglasses with a delicate rose gold frame and warm sunset gradient lenses.",
    image: "/sunset_gradient_1780479695581.png",
    category: "Sun"
  },
  {
    id: "g-010",
    name: "Urban Wayfarer",
    price: 380,
    description: "Modern matte gray wayfarer sunglasses with subtle silver accents and dark grey lenses.",
    image: "/urban_wayfarer_1780479709018.png",
    category: "Sun"
  },

  // Power Glasses
  {
    id: "g-011",
    name: "Executive Titanium",
    price: 550,
    description: "Minimalist rimless prescription eyeglasses with ultra-thin silver titanium temples.",
    image: "/executive_titanium_1780479728282.png",
    category: "Power"
  },
  {
    id: "g-012",
    name: "Academic Tortoise",
    price: 390,
    description: "Classic round tortoise shell optical glasses with clear prescription lenses.",
    image: "/academic_tortoise_1780479741322.png",
    category: "Power"
  },
  {
    id: "g-013",
    name: "Architect Square",
    price: 420,
    description: "Bold, thick square black acetate frame optical glasses with clear lenses.",
    image: "/architect_square_1780479754849.png",
    category: "Power"
  },
  {
    id: "g-014",
    name: "Creative Clear",
    price: 370,
    description: "Transparent crystal clear acetate frame prescription glasses. Contemporary and airy.",
    image: "/creative_clear_1780479766609.png",
    category: "Power"
  },
  {
    id: "g-015",
    name: "Vintage Browline",
    price: 460,
    description: "Retro clubmaster-style browline optical glasses with black upper frames and gold lower rims.",
    image: "/vintage_browline_1780479778495.png",
    category: "Power"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
