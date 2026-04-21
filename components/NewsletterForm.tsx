"use client";

export default function NewsletterForm() {
  return (
    <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 sm:w-56 px-4 py-2 rounded-full bg-stone-800 border border-stone-700 text-stone-300 text-sm placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <button
        type="submit"
        className="px-5 py-2 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
