import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import AddToCartForm from "@/components/AddToCartForm";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <div className="max-w-6xl mx-auto w-full px-6 py-10 grid sm:grid-cols-2 gap-10">
      <div className="relative aspect-[3/4] bg-zinc-100">
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
        <p className="text-xl mb-6">
          {product.price.toFixed(2)} {product.currency}
        </p>
        <p className="text-zinc-600 mb-8">{product.description}</p>
        <AddToCartForm product={product} />
      </div>
    </div>
  );
}
