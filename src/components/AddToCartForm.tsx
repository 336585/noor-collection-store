"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function AddToCartForm({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes?.[0]);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  function handleAdd() {
    addItem(product, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex flex-col gap-4">
      {product.sizes && (
        <div>
          <p className="text-sm font-medium mb-2">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-3 py-1.5 border text-sm ${
                  size === s
                    ? "bg-black text-white border-black"
                    : "border-zinc-300"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="flex gap-3">
        <button
          onClick={handleAdd}
          className="flex-1 bg-black text-white py-3 uppercase text-sm tracking-wide hover:bg-zinc-800 transition-colors"
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
        <button
          onClick={() => {
            addItem(product, size);
            router.push("/cart");
          }}
          className="flex-1 bg-red-600 text-white py-3 uppercase text-sm tracking-wide hover:bg-red-700 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
