const plans = [
  {
    name: "Espresso Bar",
    tagline: "Classic favourites",
    price: "฿80 – ฿130",
    highlight: false,
    items: [
      "Espresso / Double",
      "Americano",
      "Flat White",
      "Cappuccino",
      "Macchiato",
      "Cortado",
    ],
    cta: "Order At Counter",
  },
  {
    name: "Signature Series",
    tagline: "House creations",
    price: "฿120 – ฿165",
    highlight: true, // best-value card
    items: [
      "Amber Latte (signature)",
      "Cold Brew Tower",
      "Espresso Tonic",
      "Brown Butter Latte",
      "Seasonal Special",
      "Reserve Single-Origin Pour",
    ],
    cta: "Reserve a Table",
  },
  {
    name: "Tasting Experience",
    tagline: "Deep-dive sessions",
    price: "฿350 / person",
    highlight: false,
    items: [
      "Guided cupping of 4 origins",
      "Brewing method comparison",
      "Roast profile explanation",
      "Paired pastry flight",
      "Take-home 50 g sample",
      "Certificate of attendance",
    ],
    cta: "Book a Session",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-amber-50" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-14">
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-2">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-bold text-stone-900"
          >
            Menu & Experiences
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto text-base">
            Transparent pricing, no hidden fees. All drinks include complimentary still water.
          </p>
        </header>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all ${
                plan.highlight
                  ? "bg-amber-700 text-white shadow-2xl shadow-amber-700/40 scale-105"
                  : "bg-white border border-amber-100 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Popular badge — only on highlighted card */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-stone-900 font-bold text-xs px-4 py-1.5 rounded-full shadow">
                  Most Popular
                </div>
              )}

              <header className="mb-6">
                <h3
                  className={`text-xl font-bold mb-1 ${
                    plan.highlight ? "text-amber-50" : "text-stone-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlight ? "text-amber-200" : "text-stone-400"
                  }`}
                >
                  {plan.tagline}
                </p>
                <p
                  className={`text-2xl font-bold mt-4 ${
                    plan.highlight ? "text-amber-300" : "text-amber-700"
                  }`}
                >
                  {plan.price}
                </p>
              </header>

              {/* Item list */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 shrink-0 ${
                        plan.highlight ? "text-amber-300" : "text-amber-500"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-amber-100" : "text-stone-600"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#reservation"
                className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-amber-400 text-stone-900 hover:bg-amber-300"
                    : "border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
