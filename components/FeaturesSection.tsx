const features = [
  {
    icon: "🌱",
    title: "Single-Origin Beans",
    description:
      "We source directly from small farms in Ethiopia, Colombia, and Guatemala — traceable from crop to cup.",
  },
  {
    icon: "🔥",
    title: "In-House Roasting",
    description:
      "Every batch is roasted fresh in our micro-roastery next door, ensuring peak flavor in every brew.",
  },
  {
    icon: "👨‍🍳",
    title: "Expert Baristas",
    description:
      "Our team holds multiple SCA certifications and competes in national barista championships.",
  },
  {
    icon: "🏠",
    title: "Cozy Atmosphere",
    description:
      "Warm lighting, reclaimed-wood tables, and curated jazz playlists make us your home away from home.",
  },
  {
    icon: "🥐",
    title: "Artisan Pastries",
    description:
      "Baked fresh daily by our in-house pastry chef — from buttery croissants to seasonal tarts.",
  },
  {
    icon: "♻️",
    title: "Sustainably Operated",
    description:
      "Compostable packaging, zero food waste policy, and carbon-offset delivery from farm to café.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-amber-50" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-14">
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-2">
            Why Amber Brew
          </p>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl font-bold text-stone-900"
          >
            Crafted with Love & Precision
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto text-base">
            We obsess over every detail so you can simply enjoy the perfect cup.
          </p>
        </header>

        {/* Feature cards grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="bg-white rounded-2xl p-7 shadow-sm border border-amber-100 hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
