const openingHours = [
  { day: "Monday – Friday", hours: "07:00 – 20:00" },
  { day: "Saturday", hours: "08:00 – 21:00" },
  { day: "Sunday", hours: "09:00 – 18:00" },
  { day: "Public Holidays", hours: "09:00 – 17:00" },
];

const contactInfo = [
  { icon: "📍", label: "Address", value: "42 Sukhumvit Soi 11, Khlong Toei, Bangkok 10110" },
  { icon: "📞", label: "Phone", value: "+66 2 123 4567" },
  { icon: "✉️", label: "Email", value: "hello@amberbrew.co" },
  { icon: "🚇", label: "BTS", value: "Nana Station, Exit 3 (5 min walk)" },
];

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-amber-50" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-14">
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-2">
            Find Us
          </p>
          <h2
            id="location-heading"
            className="text-3xl sm:text-4xl font-bold text-stone-900"
          >
            Come Visit Us
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto text-base">
            Nestled in the heart of Bangkok&apos;s most vibrant neighbourhood — easy to find, hard to leave.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* OpenStreetMap embed — no API key required */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-amber-200 h-96 lg:h-full min-h-80">
            <iframe
              title="Amber Brew Café location on OpenStreetMap"
              src="https://www.openstreetmap.org/export/embed.html?bbox=100.8543%2C13.7363%2C100.8643%2C13.7433&layer=mapnik&marker=13.7398%2C100.8593"
              width="100%"
              height="100%"
              className="w-full h-full"
              loading="lazy"
              style={{ minHeight: "320px" }}
            />
          </div>

          {/* Info panel */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-amber-100">
              <h3 className="text-stone-800 font-bold text-lg mb-5">Contact & Getting Here</h3>
              <ul className="space-y-4">
                {contactInfo.map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <span className="text-xl shrink-0 mt-0.5">{c.icon}</span>
                    <div>
                      <p className="text-xs text-stone-400 uppercase font-semibold tracking-wide">
                        {c.label}
                      </p>
                      <p className="text-stone-700 text-sm mt-0.5">{c.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening hours */}
            <div className="bg-amber-700 rounded-2xl p-7 text-white shadow-lg">
              <h3 className="font-bold text-lg mb-5 text-amber-100">Opening Hours</h3>
              <ul className="space-y-3">
                {openingHours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm">
                    <span className="text-amber-200">{h.day}</span>
                    <span className="text-amber-50 font-semibold">{h.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-amber-300 text-xs">
                Last order 30 minutes before closing. Kitchen closes 1 hour before closing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
