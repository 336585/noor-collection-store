export type Product = {
  id: string;
  name: string;
  category: "Party Dresses" | "Wedding" | "Kids" | "Perfumes" | "Kaftan";
  price: number;
  currency: "BHD";
  image: string;
  description: string;
  sizes?: string[];
};

export const products: Product[] = [
  {
    id: "party-emerald-gown",
    name: "Emerald Sequin Gown",
    category: "Party Dresses",
    price: 45,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    description: "Floor-length sequin gown with a fitted silhouette, perfect for evening parties.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "party-red-mermaid",
    name: "Red Mermaid Dress",
    category: "Party Dresses",
    price: 52,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop",
    description: "Elegant mermaid-cut dress with a flowing train, designed to turn heads.",
    sizes: ["S", "M", "L"],
  },
  {
    id: "wedding-ivory-lace",
    name: "Ivory Lace Wedding Gown",
    category: "Wedding",
    price: 180,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=800&fit=crop",
    description: "Classic ivory lace gown with a cathedral train and hand-embroidered detailing.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "kids-pink-tutu",
    name: "Pink Tulle Party Dress",
    category: "Kids",
    price: 18,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop",
    description: "Soft tulle party dress for kids, comfortable and festive.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
  },
  {
    id: "perfume-oud-noir",
    name: "Oud Noir Eau de Parfum",
    category: "Perfumes",
    price: 22,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=800&fit=crop",
    description: "Rich, long-lasting oud fragrance with amber and musk undertones.",
  },
  {
    id: "kaftan-golden-embroidered",
    name: "Golden Embroidered Kaftan",
    category: "Kaftan",
    price: 38,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&h=800&fit=crop",
    description: "Flowing kaftan with gold-thread embroidery, ideal for gatherings.",
    sizes: ["Free Size"],
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getCategories() {
  return Array.from(new Set(products.map((p) => p.category)));
}
