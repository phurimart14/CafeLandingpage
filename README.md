<div align="center">

# ☕ Amber Brew Café

**A warm, modern café landing page built with Next.js 15 & Tailwind CSS**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Preview

> A fully responsive café landing page featuring vibrant drink photography, an interactive reservation system, and a warm amber color palette designed to evoke comfort and quality.

---

## 🗂️ Sections

| Section | Description |
|---|---|
| 🧭 **Navbar** | Sticky with scroll-aware background & mobile hamburger menu |
| 🌄 **Hero** | Full-viewport coffee photography with headline, CTA & stat counters |
| 💡 **Features** | 6 cards highlighting sourcing, roasting, baristas & sustainability |
| 🍵 **Menu Preview** | Drink photo grid with badges, categories & pricing |
| 👨‍🍳 **Chef Story** | Barista origin story with milestone timeline |
| 💬 **Testimonials** | 6 customer reviews with star ratings |
| 💰 **Pricing** | 3-tier menu & experience pricing with highlighted popular card |
| 📅 **Reservation** | Full booking form with validation and success state |
| 📍 **Location** | OpenStreetMap embed + opening hours + contact info |
| 🦶 **Footer** | Link columns, newsletter signup & legal bar |

---

## 🛠️ Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org/) (App Router)
- **Styling** — [Tailwind CSS 4](https://tailwindcss.com/)
- **Language** — [TypeScript 5](https://www.typescriptlang.org/)
- **Images** — [Unsplash](https://unsplash.com/) via `next/image`
- **Map** — [OpenStreetMap](https://www.openstreetmap.org/) (no API key required)
- **Font** — [Geist](https://vercel.com/font) via `next/font`

---

## 📁 Project Structure

```
cafe-landing/
├── app/
│   ├── globals.css          # Global styles & custom scrollbar
│   ├── layout.tsx           # Root layout & metadata
│   └── page.tsx             # Page composition
│
├── components/
│   ├── Navbar.tsx           # Sticky nav with mobile support
│   ├── HeroSection.tsx      # Full-viewport hero
│   ├── FeaturesSection.tsx  # Why-us feature cards
│   ├── MenuPreview.tsx      # Drink photo grid
│   ├── ChefStory.tsx        # Barista story & timeline
│   ├── TestimonialSection.tsx # Customer reviews
│   ├── PricingSection.tsx   # Pricing tiers
│   ├── ReservationSection.tsx # Booking form (client)
│   ├── LocationSection.tsx  # Map & hours
│   ├── NewsletterForm.tsx   # Newsletter input (client)
│   └── Footer.tsx           # Site footer
│
├── next.config.ts           # Image remote patterns
└── tailwind.config.ts       # (via @theme inline)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18+`
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/phurimart14/CafeLandingpage.git

# Navigate to the project
cd CafeLandingpage

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary | Amber 500 | `#f59e0b` |
| Accent | Amber 700 | `#b45309` |
| Background | Amber 50 | `#fffbeb` |
| Dark sections | Stone 900 | `#1c1917` |
| Text | Stone 800 | `#292524` |

---

## 📐 Design Principles

- **Semantic HTML** — `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<article>`, `<blockquote>`
- **Responsive** — Mobile-first layout, tested at all breakpoints
- **Performance** — Server Components by default; `"use client"` only where interactivity is needed
- **Accessibility** — ARIA labels, semantic roles, keyboard-navigable

---

## 📦 Deploy

The easiest way to deploy is via [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/phurimart14/CafeLandingpage)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ☕ & ❤️ by **phurimart14**

</div>
