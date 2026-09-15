import Link from "next/link";
import Image from "next/image";
import { collectionTiles } from "@/lib/products";

export default function CollectionsGrid() {
  return (
    <section className="max-w-6xl mx-auto w-full px-6 py-12">
      <h2 className="text-center text-2xl font-serif mb-8">
        <span className="inline-block border-t border-zinc-300 w-8 align-middle mr-4" />
        Our Collections
        <span className="inline-block border-t border-zinc-300 w-8 align-middle ml-4" />
      </h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[520px] sm:h-[640px]">
        {collectionTiles.map((tile, i) => (
          <Link
            key={tile.category}
            href={`/products?category=${encodeURIComponent(tile.category)}`}
            className={`relative overflow-hidden group ${
              i === 1 ? "row-span-2" : ""
            }`}
          >
            <Image
              src={tile.image}
              alt={tile.label}
              fill
              sizes="(max-width: 640px) 33vw, 20vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25" />
            <span className="absolute bottom-4 left-0 right-0 text-center text-white font-serif text-lg">
              {tile.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
