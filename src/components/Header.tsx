"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-serif tracking-wide">
          NOOR COLLECTION
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm uppercase tracking-wide">
          <Link href="/products" className="hover:text-red-500 transition-colors">
            All Products
          </Link>
          <Link href="/products?category=Party+Dresses" className="hover:text-red-500 transition-colors">
            Party
          </Link>
          <Link href="/products?category=Wedding" className="hover:text-red-500 transition-colors">
            Wedding
          </Link>
          <Link href="/products?category=Kids" className="hover:text-red-500 transition-colors">
            Kids
          </Link>
          <Link href="/products?category=Perfumes" className="hover:text-red-500 transition-colors">
            Perfumes
          </Link>
          <Link href="/products?category=Kaftan" className="hover:text-red-500 transition-colors">
            Kaftan
          </Link>
        </nav>
        <Link href="/cart" className="relative flex items-center gap-1">
          <span aria-hidden>🛍️</span>
          <span className="text-sm">Cart</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
