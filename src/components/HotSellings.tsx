"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/lib/products";

const PAGE_SIZE = 5;

export default function HotSellings({ products }: { products: Product[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = products.slice(0, visible);
  const percent = Math.min(100, (shown.length / products.length) * 100);

  return (
    <section className="max-w-6xl mx-auto w-full px-6 py-12">
      <h2 className="text-center text-2xl font-serif mb-2">Hot Sellings</h2>
      <p className="text-center text-zinc-500 text-sm mb-8">
        Top view in this week
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
        {shown.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {visible < products.length && (
        <div className="flex flex-col items-center gap-3 mt-8">
          <p className="text-sm text-zinc-500">
            You&apos;ve viewed {shown.length} of {products.length} products
          </p>
          <div className="w-64 h-1 bg-zinc-200">
            <div
              className="h-1 bg-red-600 transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="border px-5 py-2 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
          >
            Load More ↓
          </button>
        </div>
      )}
    </section>
  );
}
