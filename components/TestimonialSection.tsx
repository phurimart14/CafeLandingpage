const testimonials = [
  {
    name: "Priya Nakamura",
    role: "Food Blogger @ BangkokBites",
    avatar: "PN",
    review:
      "Amber Brew's cold brew is genuinely the best I've had outside of Tokyo. The oat-milk foam is next-level — creamy, airy, and perfectly sweetened. This place has become my non-negotiable morning stop.",
    rating: 5,
  },
  {
    name: "James Hollowell",
    role: "Remote Software Engineer",
    avatar: "JH",
    review:
      "I've worked from dozens of cafés across Bangkok and nothing comes close. The WiFi is solid, the vibe is warm, and the espresso keeps me sharp. My colleagues abroad are jealous of my 'office'.",
    rating: 5,
  },
  {
    name: "Nattaya Boonmee",
    role: "Pastry Chef",
    avatar: "NB",
    review:
      "As a pastry chef myself I'm harsh on croissants. Amber Brew's is perfectly laminated — shatteringly crisp shell, honeyed butter interior. They clearly respect the craft. Bravo.",
    rating: 5,
  },
  {
    name: "David Okonkwo",
    role: "Travel Photographer",
    avatar: "DO",
    review:
      "I photograph cafés on every continent. Amber Brew has that rare combination: photogenic drinks, genuine warmth from staff, and coffee that actually matches the aesthetics. Rare and wonderful.",
    rating: 5,
  },
  {
    name: "Somchai Rattana",
    role: "University Lecturer",
    avatar: "SR",
    review:
      "I bring my thesis students here for their end-of-semester celebration. The space feels celebratory without being loud. Kamon always remembers our regulars' orders — that personal touch is everything.",
    rating: 5,
  },
  {
    name: "Emma Laurent",
    role: "Interior Designer",
    avatar: "EL",
    review:
      "The design of this space is intentional and warm — exposed brick, amber lighting, handmade ceramics. Every element tells the same story as the coffee: care, craft, and character.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-amber-900 via-stone-900 to-amber-950"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-14">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-2">
            Guest Reviews
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-amber-50"
          >
            Loved by the Community
          </h2>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-base">
            Over 4,000 five-star reviews and counting. Here&apos;s what our regulars say.
          </p>
        </header>

        {/* Testimonial cards — 3-column grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="bg-stone-800/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-800/30 hover:border-amber-500/50 transition-all"
            >
              <StarRating count={t.rating} />
              <blockquote className="mt-4 text-stone-300 text-sm leading-relaxed">
                &ldquo;{t.review}&rdquo;
              </blockquote>
              <footer className="mt-5 flex items-center gap-3">
                {/* Avatar initials circle */}
                <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-amber-200 font-semibold text-sm">{t.name}</p>
                  <p className="text-stone-500 text-xs">{t.role}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
