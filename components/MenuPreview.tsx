import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    name: "Signature Latte",
    category: "Hot Drinks",
    description: "Velvety microfoam over a double ristretto with a hint of Madagascar vanilla.",
    price: "฿120",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&q=80",
    badge: "Best Seller",
  },
  {
    name: "Cold Brew Tower",
    category: "Cold Drinks",
    description: "Slow-steeped 18 hours, served over large ice crystals with oat milk foam.",
    price: "฿145",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    badge: "Summer Pick",
  },
  {
    name: "Flat White",
    category: "Hot Drinks",
    description: "Ristretto-based with silky whole milk — intensity meets elegance.",
    price: "฿110",
    image: "https://images.unsplash.com/photo-1572286258217-215cf8e2ae33?w=600&q=80",
    badge: null,
  },
  {
    name: "Matcha Oat Latte",
    category: "Specialty",
    description: "Ceremonial-grade matcha whisked smooth with house-made oat milk.",
    price: "฿130",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80",
    badge: "New",
  },
  {
    name: "Espresso Tonic",
    category: "Cold Drinks",
    description: "Double espresso over sparkling tonic with a citrus zest garnish.",
    price: "฿135",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    badge: null,
  },
  {
    name: "Butter Croissant",
    category: "Pastries",
    description: "Laminated with French AOP butter, baked golden and flaky every morning.",
    price: "฿85",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    badge: "Chef's Fav",
  },
];

export default function MenuPreview() {
  return (
    <section id="menu" className="py-20 bg-stone-900" aria-labelledby="menu-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-14">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-2">
            Menu Highlights
          </p>
          <h2
            id="menu-heading"
            className="text-3xl sm:text-4xl font-bold text-amber-50"
          >
            Drinks That Delight
          </h2>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-base">
            A curated selection of our most beloved offerings — from classic espresso to
            creative specialty drinks.
          </p>
        </header>

        {/* Menu card grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="bg-stone-800 rounded-2xl overflow-hidden group hover:ring-2 hover:ring-amber-500 transition-all"
            >
              {/* Drink photo */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-stone-900/70 text-amber-300 text-xs px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-amber-100 font-bold text-base">{item.name}</h3>
                  <span className="text-amber-400 font-bold text-base shrink-0">{item.price}</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-10">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-stone-900 font-semibold transition-all"
          >
            View Full Menu & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
