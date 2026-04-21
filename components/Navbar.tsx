"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /* Add shadow + background when user scrolls past hero */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-amber-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <span className="text-2xl">☕</span>
          <span className="text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
            Amber Brew
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-amber-200 hover:text-amber-400 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Link
          href="#reservation"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold text-sm transition-colors"
        >
          Reserve a Table
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-amber-200 p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-amber-900/97 backdrop-blur-sm border-t border-amber-700">
          <ul className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-amber-200 hover:text-amber-400 font-medium"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#reservation"
                className="inline-flex items-center px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold text-sm"
                onClick={() => setIsMobileOpen(false)}
              >
                Reserve a Table
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
