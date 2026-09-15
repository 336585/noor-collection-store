"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto w-full px-6 py-16 text-center">
        <h1 className="text-2xl font-serif mb-4">Your cart is empty</h1>
        <Link href="/products" className="text-red-600 underline">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto w-full px-6 py-10">
      <h1 className="text-2xl font-serif mb-6">Your Cart</h1>
      <div className="flex flex-col divide-y">
        {items.map((item) => (
          <div
            key={`${item.productId}-${item.size ?? ""}`}
            className="flex gap-4 py-4"
          >
            <div className="relative w-20 h-24 bg-zinc-100 shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              {item.size && (
                <p className="text-sm text-zinc-500">Size: {item.size}</p>
              )}
              <p className="text-sm text-zinc-500">
                {item.price.toFixed(2)} BHD
              </p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() =>
                    updateQuantity(item.productId, item.size, item.quantity - 1)
                  }
                  className="w-7 h-7 border flex items-center justify-center"
                >
                  −
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.productId, item.size, item.quantity + 1)
                  }
                  className="w-7 h-7 border flex items-center justify-center"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.productId, item.size)}
                  className="ml-4 text-sm text-red-600 underline"
                >
                  Remove
                </button>
              </div>
            </div>
            <p className="font-medium">
              {(item.price * item.quantity).toFixed(2)} BHD
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8 pt-6 border-t">
        <p className="text-lg font-medium">Total</p>
        <p className="text-lg font-medium">{total.toFixed(2)} BHD</p>
      </div>
      <Link
        href="/checkout"
        className="mt-6 block text-center bg-black text-white py-3 uppercase text-sm tracking-wide hover:bg-zinc-800 transition-colors"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}
