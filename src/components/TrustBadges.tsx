const badges = [
  {
    icon: "🚚",
    title: "Shipping",
    text: "We deliver within 2-4 days across Bahrain",
  },
  {
    icon: "💬",
    title: "Support 24/7",
    text: "Ask your queries anytime, we are here to help",
  },
  {
    icon: "🔒",
    title: "100% Payment Secure",
    text: "Pay safely with BenefitPay",
  },
];

export default function TrustBadges() {
  return (
    <section className="max-w-6xl mx-auto w-full px-6 py-10 grid sm:grid-cols-3 gap-8 text-center border-t">
      {badges.map((b) => (
        <div key={b.title} className="flex flex-col items-center gap-2">
          <span className="text-2xl">{b.icon}</span>
          <p className="font-medium uppercase text-sm tracking-wide">
            {b.title}
          </p>
          <p className="text-sm text-zinc-500 max-w-[220px]">{b.text}</p>
        </div>
      ))}
    </section>
  );
}
