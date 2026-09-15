import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById, getRelatedProducts } from "@/lib/products";
import AddToCartForm from "@/components/AddToCartForm";
import ProductCard from "@/components/ProductCard";
import CountdownTimer from "@/components/CountdownTimer";
import TrustBadges from "@/components/TrustBadges";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;
  const related = getRelatedProducts(product);

  return (
    <div className="flex flex-col">
      <div className="max-w-6xl mx-auto w-full px-6 pt-6">
        <nav className="text-xs text-zinc-500">
          <Link href="/" className="hover:text-black">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link
            href={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-black"
          >
            {product.category}
          </Link>{" "}
          &gt; <span className="text-black">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 py-6 grid sm:grid-cols-2 gap-10">
        <div className="relative aspect-[3/4] bg-zinc-100">
          {discount && (
            <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-semibold w-10 h-10 rounded-full flex items-center justify-center">
              -{discount}%
            </span>
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="uppercase tracking-widest text-red-600 text-xs mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl font-serif mb-3">{product.name}</h1>
          <p className="text-xl mb-1">
            {product.originalPrice && (
              <span className="text-zinc-400 line-through mr-3">
                {product.originalPrice.toFixed(2)} {product.currency}
              </span>
            )}
            <span className={discount ? "text-red-600 font-medium" : ""}>
              {product.price.toFixed(2)} {product.currency}
            </span>
          </p>
          <p className="text-xs text-zinc-400 mb-6">
            Shipping calculated at checkout.
          </p>

          {discount && (
            <div className="mb-6 p-4 bg-zinc-50 border">
              <p className="text-xs uppercase text-zinc-500 mb-2">
                Offer ends in
              </p>
              <CountdownTimer />
            </div>
          )}

          <p className="text-zinc-600 mb-8">{product.description}</p>
          <AddToCartForm product={product} />
        </div>
      </div>

      <TrustBadges />

      {related.length > 0 && (
        <section className="max-w-6xl mx-auto w-full px-6 py-12 border-t">
          <h2 className="text-2xl font-serif mb-6">You may also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
