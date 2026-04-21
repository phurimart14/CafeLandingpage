"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00",
  "16:00", "17:00", "18:00", "19:00",
];

export default function ReservationSection() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", date: "", time: "", guests: "2", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* Simulate form submission — replace with real API call in production */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-stone-800 text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition";

  return (
    <section
      id="reservation"
      className="py-20 bg-stone-900"
      aria-labelledby="reservation-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-12">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-2">
            Reservations
          </p>
          <h2
            id="reservation-heading"
            className="text-3xl sm:text-4xl font-bold text-amber-50"
          >
            Reserve Your Spot
          </h2>
          <p className="text-stone-400 mt-4 text-base">
            Book a table and we&apos;ll have your favourite ready — no waiting, just warmth.
          </p>
        </header>

        {submitted ? (
          /* Success state */
          <div className="bg-amber-600/20 border border-amber-500/40 rounded-3xl p-12 text-center">
            <div className="text-5xl mb-4">☕</div>
            <h3 className="text-amber-300 text-2xl font-bold mb-2">Reservation Confirmed!</h3>
            <p className="text-stone-400 text-sm">
              We&apos;ve sent a confirmation to <strong className="text-amber-300">{form.email}</strong>.
              We can&apos;t wait to welcome you, <strong className="text-amber-300">{form.name}</strong>!
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", notes: "" }); }}
              className="mt-6 px-6 py-2 rounded-full border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-stone-900 text-sm font-semibold transition"
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-stone-800/70 backdrop-blur-sm rounded-3xl p-8 border border-stone-700 space-y-5"
            noValidate
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-amber-300 text-sm font-medium mb-1.5">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Somchai Rattana"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-amber-300 text-sm font-medium mb-1.5">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Phone & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-amber-300 text-sm font-medium mb-1.5">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="06X-XXX-XXXX"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="guests" className="block text-amber-300 text-sm font-medium mb-1.5">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={form.guests}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="date" className="block text-amber-300 text-sm font-medium mb-1.5">
                  Date *
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={form.date}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-amber-300 text-sm font-medium mb-1.5">
                  Time Slot *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special requests */}
            <div>
              <label htmlFor="notes" className="block text-amber-300 text-sm font-medium mb-1.5">
                Special Requests
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Allergies, birthday celebration, high chair needed..."
                value={form.notes}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-stone-900 font-bold text-base transition-all"
            >
              {loading ? "Confirming..." : "Confirm Reservation ☕"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
