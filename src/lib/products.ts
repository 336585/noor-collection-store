export type Product = {
  id: string;
  name: string;
  category: "Party Dresses" | "Wedding" | "Kids" | "Perfumes" | "Kaftan";
  price: number;
  originalPrice?: number;
  currency: "BHD";
  image: string;
  description: string;
  sizes?: string[];
  rating?: number;
};

export const products: Product[] = [
  {
    id: "party-pure-black",
    name: "Pure Black Gown",
    category: "Party Dresses",
    price: 16,
    originalPrice: 33,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    description: "Beautiful pure black dress with a sparkly, glittery texture and sheer flowing sleeves.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5,
  },
  {
    id: "party-deep-olive",
    name: "Deep Olive Green Dress",
    category: "Party Dresses",
    price: 16,
    originalPrice: 30,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop",
    description: "Elegant olive green dress with a thigh-high slit and flowing silhouette.",
    sizes: ["S", "M", "L"],
    rating: 5,
  },
  {
    id: "party-primarily-blue",
    name: "Primarily Blue Gown",
    category: "Party Dresses",
    price: 17,
    originalPrice: 28,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&sat=-20",
    description: "Sparkling blue evening gown with a fitted bodice and flowing train.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4,
  },
  {
    id: "party-purple-color",
    name: "Purple Color Party Dress",
    category: "Party Dresses",
    price: 17,
    originalPrice: 35,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop&sat=-10",
    description: "Rich purple gown with a mermaid cut, perfect for evening parties.",
    sizes: ["S", "M", "L"],
    rating: 5,
  },
  {
    id: "party-blush-pink",
    name: "Blush Pink Party Dress",
    category: "Party Dresses",
    price: 16,
    originalPrice: 22,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop&sat=-30",
    description: "Soft blush pink dress with delicate detailing, ideal for daytime events.",
    sizes: ["S", "M", "L"],
    rating: 4,
  },
  {
    id: "wedding-ivory-lace",
    name: "Ivory Lace Wedding Gown",
    category: "Wedding",
    price: 55,
    originalPrice: 60,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=800&fit=crop",
    description: "Classic ivory lace gown with a cathedral train and hand-embroidered detailing.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5,
  },
  {
    id: "wedding-blush-tulle",
    name: "Blush Tulle Wedding Gown",
    category: "Wedding",
    price: 50,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=800&fit=crop&sat=-15",
    description: "Soft blush tulle gown with a sweetheart neckline and full skirt.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5,
  },
  {
    id: "wedding-mermaid-lace",
    name: "Mermaid Lace Wedding Gown",
    category: "Wedding",
    price: 60,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=800&fit=crop&sat=-30",
    description: "Fitted mermaid silhouette with intricate lace appliqué and a chapel train.",
    sizes: ["S", "M", "L"],
    rating: 4,
  },
  {
    id: "wedding-classic-ballgown",
    name: "Classic Ballgown",
    category: "Wedding",
    price: 60,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=800&fit=crop&sat=10",
    description: "Timeless ballgown silhouette with off-shoulder sleeves and a full tulle skirt.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5,
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
    rating: 5,
  },
  {
    id: "perfume-oud-noir",
    name: "Oud Noir Eau de Parfum",
    category: "Perfumes",
    price: 22,
    currency: "BHD",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=800&fit=crop",
    description: "Rich, long-lasting oud fragrance with amber and musk undertones.",
    rating: 5,
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
    rating: 5,
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getCategories() {
  return Array.from(new Set(products.map((p) => p.category)));
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export const collectionTiles: {
  category: Product["category"];
  label: string;
  image: string;
}[] = [
  {
    category: "Party Dresses",
    label: "Party Dresses",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=600&fit=crop",
  },
  {
    category: "Perfumes",
    label: "Perfumes",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=1200&fit=crop",
  },
  {
    category: "Kaftan",
    label: "Kaftan Dress",
    image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=500&h=600&fit=crop",
  },
  {
    category: "Wedding",
    label: "Wedding Dresses",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=500&h=600&fit=crop",
  },
  {
    category: "Kids",
    label: "Kids Dresses",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&h=600&fit=crop",
  },
];

export const testimonials = [
  {
    name: "Fatima A.",
    text: "I love this online store. They have a unique range of items, and I appreciate the quality they offer. Shipping is always fast.",
    rating: 5,
  },
  {
    name: "Sara M.",
    text: "The user-friendly website made my shopping experience enjoyable. I found exactly what I was looking for and received my order promptly.",
    rating: 5,
  },
  {
    name: "Noor H.",
    text: "This online store is a hidden gem! The products are trendy, and the prices are competitive. I received personalized assistance from their support team.",
    rating: 5,
  },
  {
    name: "John D.",
    text: "The checkout process was smooth, and the gift wrapping option added a nice touch. I'm a happy repeat customer.",
    rating: 5,
  },
];
