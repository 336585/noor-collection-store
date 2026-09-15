"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { storeConfig } from "@/lib/store-config";

type Step = "details" | "pay";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<Step>("details");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    address: "",
  });

  if (items.length === 0 && step === "details") {
    return (
      <div className="max-w-xl mx-auto w-full px-6 py-16 text-center">
        <h1 className="text-2xl font-serif mb-4">Your cart is empty</h1>
        <Link href="/products" className="text-red-600 underline">
          Browse products
        </Link>
      </div>
    );
  }

  const orderText = encodeURIComponent(
    [
      `New order — ${storeConfig.storeName}`,
      "",
      ...items.map(
        (i) =>
          `- ${i.name}${i.size ? ` (${i.size})` : ""} x${i.quantity} — ${(
            i.price * i.quantity
          ).toFixed(2)} BHD`
      ),
      "",
      `Total: ${total.toFixed(2)} BHD`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Area: ${form.area}`,
      `Address: ${form.address}`,
      "",
      "I have paid via BenefitPay, here is my screenshot:",
    ].join("\n")
  );

  const whatsappLink = `https://wa.me/${storeConfig.whatsappNumber}?text=${orderText}`;

  function handleDetailsSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep("pay");
  }

  function handleOrderSent() {
    clearCart();
    router.push("/");
  }

  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h1 className="text-2xl font-serif mb-6">Checkout</h1>

      {step === "details" && (
        <form onSubmit={handleDetailsSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium block mb-1">Full name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border px-3 py-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">
              Phone number
            </label>
            <input
              required
              type="tel"
              placeholder="+973 ..."
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border px-3 py-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">
              Area / City
            </label>
            <input
              required
              placeholder="e.g. Manama, Riffa, Muharraq..."
              value={form.area}
              onChange={(e) => setForm({ ...form, area: e.target.value })}
              className="w-full border px-3 py-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">
              Address details
            </label>
            <textarea
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full border px-3 py-2"
              rows={3}
            />
          </div>

          <div className="flex justify-between items-center mt-2 pt-4 border-t">
            <p className="font-medium">Total</p>
            <p className="font-medium">{total.toFixed(2)} BHD</p>
          </div>

          <button
            type="submit"
            className="mt-2 bg-black text-white py-3 uppercase text-sm tracking-wide hover:bg-zinc-800 transition-colors"
          >
            Continue to Payment
          </button>
        </form>
      )}

      {step === "pay" && (
        <div className="flex flex-col gap-6">
          <div className="border p-5">
            <h2 className="font-medium mb-2">Pay with BenefitPay</h2>
            <p className="text-sm text-zinc-600 mb-4">
              Open your BenefitPay app and send{" "}
              <strong>{total.toFixed(2)} BHD</strong> to:
            </p>
            <p className="text-lg font-mono bg-zinc-100 px-3 py-2 inline-block">
              {storeConfig.benefitPayNumber}
            </p>
            <p className="text-sm text-zinc-600 mt-4">
              After sending payment, take a screenshot and send it to us on
              WhatsApp along with your order — we&apos;ll confirm and start
              preparing your order.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOrderSent}
            className="text-center bg-green-600 text-white py-3 uppercase text-sm tracking-wide hover:bg-green-700 transition-colors"
          >
            Send Order on WhatsApp
          </a>

          <button
            onClick={() => setStep("details")}
            className="text-sm text-zinc-500 underline"
          >
            Back to details
          </button>
        </div>
      )}
    </div>
  );
}
