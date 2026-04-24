# 🫒 Olive App — Landing Page Clone

A pixel-perfect recreation of [oliveapp.com](https://www.oliveapp.com/) built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---


## Live Demo

https://olive-app-sandy.vercel.app/


## 📁 Folder Structure

```
olive-app/
├── app/
│   ├── globals.css          # Global styles, CSS variables, animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main home page
├── components/
│   ├── HeroSection.tsx      # Hero with heading, CTAs, social proof
│   ├── Navbar.tsx           # Top navigation bar
│   ├── OliveLogo.tsx        # SVG olive logo
│   └── PhoneMockup.tsx      # Phone UI mockup with product card
├── public/                  # Static assets (empty, SVGs inlined)
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
├── postcss.config.js        # PostCSS for Tailwind
├── tailwind.config.ts       # Tailwind custom theme
├── tsconfig.json            # TypeScript config
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.17 or later
- **npm** v9+

### Installation & Running

```bash
# 1. Clone or create the project folder
mkdir olive-app && cd olive-app

# 2. Copy all files as per folder structure above

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Features
- Responsive navbar with dropdowns
- Pixel-perfect UI based on screenshot
- Mobile responsive layout
- Smooth hover interactions


## 🎨 Design Decisions

| Feature | Implementation |
|---|---|
| Background color | `#f0f0e8` — warm cream matching original |
| Primary font | Georgia serif for headings (matches original editorial feel) |
| Brand green | `#2d5016` — dark olive green |
| CTA button | Rounded pill, dark green |
| Phone mockup | Pure CSS/SVG — no external images needed |
| Animations | CSS keyframes with staggered delays |
| Layout | Max-width centered, responsive |

---

## 🛠️ Tech Stack

- **Next.js 14** — App Router
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **CSS Variables** — Theme consistency
- **SVG** — All icons and logo inline

---

## 📱 Responsive Breakpoints

- Mobile: < 768px — stacked layout, ghost cards hidden
- Tablet: 768px–1024px
- Desktop: > 1024px — full layout with ghost phone cards

---


---

## 📋 Commands Summary

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:3000
npm run build        # Create production build
npm run start        # Serve production build
npm run lint         # Run ESLint
```