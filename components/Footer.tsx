import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

const footerLinks = {
  Explore: [
    { label: "Our Menu", href: "#menu" },
    { label: "Our Story", href: "#story" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reserve a Table", href: "#reservation" },
  ],
  Connect: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "LINE Official", href: "#" },
  ],
  Info: [
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Wholesale Beans", href: "#" },
    { label: "Gift Cards", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top area */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Link href="#hero" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☕</span>
              <span className="text-xl font-bold text-amber-400">Amber Brew</span>
            </Link>
            <p className="text-sm leading-relaxed text-stone-500">
              Specialty coffee roasted with love, served with warmth — in Bangkok since 2010.
            </p>
            {/* Social icons row */}
            <div className="flex gap-3 mt-5">
              {["IG", "FB", "TT", "LN"].map((s) => (
                <button
                  key={s}
                  aria-label={s}
                  className="w-9 h-9 rounded-full bg-stone-800 hover:bg-amber-600 text-stone-400 hover:text-white text-xs font-bold transition-all flex items-center justify-center"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <nav key={group} aria-label={`${group} links`}>
              <h4 className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-stone-500 hover:text-amber-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="border-t border-stone-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500">
            Get weekly brew tips and exclusive offers — no spam, ever.
          </p>
          <NewsletterForm />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} Amber Brew Café. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
