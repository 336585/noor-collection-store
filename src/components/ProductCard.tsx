import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col gap-2"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
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
        <p className="text-sm text-zinc-500">
          {product.price.toFixed(2)} {product.currency}
        </p>
      </div>
    </Link>
  );
}
