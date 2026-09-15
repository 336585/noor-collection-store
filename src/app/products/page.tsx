import ProductCard from "@/components/ProductCard";
import { products, getCategories } from "@/lib/products";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const categories = getCategories();
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="max-w-6xl mx-auto w-full px-6 py-10">
      <h1 className="text-2xl font-serif mb-6">
        {category ?? "All Products"}
      </h1>
      <div className="flex flex-wrap gap-3 mb-8 text-sm">
        <a
          href="/products"
          className={`px-3 py-1 border rounded-full ${
            !category ? "bg-black text-white" : "border-zinc-300"
          }`}
        >
          All
        </a>
        {categories.map((c) => (
          <a
            key={c}
            href={`/products?category=${encodeURIComponent(c)}`}
            className={`px-3 py-1 border rounded-full ${
              category === c ? "bg-black text-white" : "border-zinc-300"
            }`}
          >
            {c}
          </a>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
