import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    /* Full-viewport hero with parallax-style overlay */
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background photo — rich espresso pour */}
      <Image
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80"
        alt="Rich espresso pour creating beautiful crema"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Warm gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-amber-900/60 to-stone-900/70" />

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
          Specialty Coffee Since 2010
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-50 leading-tight mb-6">
          Where Every Sip
          <br />
          <span className="text-amber-400">Tells a Story</span>
        </h1>

        <p className="text-amber-100/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Hand-roasted single-origin beans, crafted with passion by our expert
          baristas. Come for the coffee, stay for the warmth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#menu"
            className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-base transition-all hover:scale-105 shadow-lg shadow-amber-900/40"
          >
            Explore Our Menu
          </Link>
          <Link
            href="#reservation"
            className="px-8 py-3.5 rounded-full border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-stone-900 font-bold text-base transition-all"
          >
            Book a Table
          </Link>
        </div>

        {/* Quick stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16">
          {[
            { value: "15+", label: "Years of craft" },
            { value: "40+", label: "Coffee origins" },
            { value: "98%", label: "Happy guests" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-amber-200 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
