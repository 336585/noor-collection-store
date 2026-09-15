import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative bg-black text-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 items-center gap-8 px-6 py-16">
          <div>
            <p className="uppercase tracking-widest text-red-500 text-sm mb-3">
              Noor Fashion
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif leading-tight mb-4">
              Women&apos;s Party Dresses
            </h1>
            <p className="text-zinc-300 mb-6 max-w-sm">
              Curated party, wedding and kids wear — shipped across Bahrain.
              Pay easily with BenefitPay.
            </p>
            <Link
              href="/products"
              className="inline-block bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 uppercase text-sm tracking-wide"
            >
              Order Now
            </Link>
          </div>
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop"
              alt="Featured dress"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto w-full px-6 py-12">
        <h2 className="text-2xl font-serif mb-6">Featured</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
