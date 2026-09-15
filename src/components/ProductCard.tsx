import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col gap-2"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
        {discount && (
          <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-semibold w-9 h-9 rounded-full flex items-center justify-center">
            -{discount}%
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-sm">
          {product.originalPrice && (
            <span className="text-zinc-400 line-through mr-2">
              {product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className={discount ? "text-red-600 font-medium" : "text-zinc-500"}>
            {product.price.toFixed(2)} {product.currency}
          </span>
        </p>
      </div>
    </Link>
  );
}
