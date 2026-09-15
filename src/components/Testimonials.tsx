import { testimonials } from "@/lib/products";

function Stars({ count }: { count: number }) {
  return (
    <div className="text-amber-400 text-sm">
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-zinc-50 py-12">
      <div className="max-w-6xl mx-auto w-full px-6">
        <h2 className="text-center text-2xl font-serif mb-8">
          Feedback From Our Customers!
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-5 border">
              <Stars count={t.rating} />
              <p className="text-sm text-zinc-600 mt-3">{t.text}</p>
              <p className="text-sm font-medium mt-4">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
