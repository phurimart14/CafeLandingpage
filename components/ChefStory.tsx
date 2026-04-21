import Image from "next/image";

const milestones = [
  { year: "2010", event: "Founded Amber Brew in a small corner shop with a single espresso machine." },
  { year: "2015", event: "Won regional barista championship & opened our in-house micro-roastery." },
  { year: "2020", event: "Launched direct-trade partnerships with 12 farms across 3 continents." },
  { year: "2024", event: "Expanded to our flagship location with a full coffee tasting experience." },
];

export default function ChefStory() {
  return (
    <section id="story" className="py-20 bg-amber-50" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Photo side */}
          <div className="relative">
            <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
                alt="Chef Kamon, Head Barista and founder of Amber Brew Café"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Warm gradient on bottom for caption */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-stone-900/80 to-transparent" />
              <p className="absolute bottom-5 left-6 text-amber-300 font-semibold text-sm">
                Kamon Srisuk — Head Barista & Founder
              </p>
            </div>

            {/* Floating award badge */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-stone-900 rounded-2xl px-5 py-4 shadow-xl text-center">
              <div className="text-2xl font-bold">🏆</div>
              <div className="text-xs font-bold mt-1 leading-tight">
                National<br />Champion<br />2015
              </div>
            </div>
          </div>

          {/* Story text side */}
          <div>
            <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6"
            >
              From a Small Dream to
              <br />
              <span className="text-amber-600">a Big Cup of Love</span>
            </h2>

            <p className="text-stone-600 text-base leading-relaxed mb-5">
              Kamon Srisuk started Amber Brew with one simple belief: that a great cup of
              coffee has the power to start conversations, spark ideas, and create community.
            </p>
            <p className="text-stone-600 text-base leading-relaxed mb-10">
              After training under master roasters in Chiang Mai, Melbourne, and Copenhagen,
              Kamon returned home with a suitcase full of knowledge and a heart full of
              passion — and turned a tiny corner shop into a beloved institution.
            </p>

            {/* Timeline milestones */}
            <ol className="space-y-5">
              {milestones.map((m) => (
                <li key={m.year} className="flex gap-5">
                  <span className="shrink-0 w-14 h-14 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-amber-700 font-bold text-sm">
                    {m.year}
                  </span>
                  <p className="text-stone-600 text-sm leading-relaxed self-center">
                    {m.event}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
