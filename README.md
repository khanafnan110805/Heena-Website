# HENNA — Premium Mehndi Artist Website

A production-ready React + TypeScript + Tailwind CSS website for a premium mehndi artistry business. Features a luxury black & gold aesthetic, WhatsApp-first booking conversion, full gallery system with lightbox, and a modular component architecture.

---

## Tech Stack

| Layer      | Technology                             |
| ---------- | -------------------------------------- |
| Framework  | React 18 + TypeScript                  |
| Build tool | Vite 5                                 |
| Styling    | Tailwind CSS 3 + CSS custom properties |
| Routing    | React Router v6                        |
| Forms      | React Hook Form + Zod                  |
| Icons      | Lucide React                           |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── assets/              # Static assets (images, icons)
├── components/
│   ├── atoms/           # Primitive UI: Button, Badge, SectionHeader, etc.
│   ├── molecules/       # Composed UI: WhatsAppCTA, ServiceCard, PackageCard, etc.
│   ├── organisms/       # Page sections: HeroSection, GalleryGrid, BookingForm, etc.
│   └── layout/          # Navbar, Footer, PageWrapper
├── config/              # site.config.ts, routes.ts
├── data/                # gallery, services, packages, products, testimonials, faq
├── hooks/               # useScrollReveal, useGalleryFilter, useLightbox, useWhatsApp, useMediaQuery
├── pages/               # Home, Gallery, Services, Packages, Products, Booking, Contact
├── styles/              # globals.css, theme.css (CSS vars), animations.css
└── types/               # TypeScript interfaces

api/
└── booking.ts           # Reference server handler for booking form POST

public/
└── favicon.svg
```

---

## Configuration

### 1. Site Config (`src/config/site.config.ts`)

Update **all values** before deploying:

```ts
export const SITE_CONFIG = {
  brand: {
    name: "HENNA", // ← Your brand name
    artistName: "Sara", // ← Artist name
  },
  contact: {
    whatsapp: "+919876543210", // ← Real WhatsApp number (with country code)
    instagram: "@hennabyartist",
    email: "hello@hennabyartist.com",
    serviceArea: "Mumbai, Maharashtra",
  },
  // ...
};
```

### 2. Gallery Images (`src/data/gallery.data.ts`)

Replace the Unsplash placeholder URLs with actual photography:

```ts
{
  id: 'b01',
  src: '/images/gallery/bridal/bridal-01.jpg', // ← your image path
  alt: 'Descriptive alt text for SEO',
  category: 'bridal',
  featured: true,
}
```

Place images in `src/assets/images/gallery/[category]/`.

### 3. WhatsApp Messages

Each service, package, and product has a pre-written `whatsappMessage` string in its data file. Customise these to match your tone and voice.

---

## Design System

### Colours

| Token            | Value     | Usage                        |
| ---------------- | --------- | ---------------------------- |
| `bg-base`        | `#0A0A0A` | Page background              |
| `bg-elevated`    | `#141414` | Section alternate background |
| `bg-card`        | `#1C1C1C` | Card backgrounds             |
| `gold-primary`   | `#C9A84C` | Primary accent, CTAs         |
| `gold-champagne` | `#E8D5A0` | Headings, highlighted text   |
| `text-primary`   | `#F5F0E8` | Body text                    |
| `whatsapp`       | `#25D366` | WhatsApp button              |

### Typography

- **Display / Headings:** Cormorant Garamond (serif, Google Fonts)
- **Body / UI:** DM Sans (sans-serif, Google Fonts)

---

## Pages & Routes

| Route             | Component      | Description                           |
| ----------------- | -------------- | ------------------------------------- |
| `/`               | `HomePage`     | Full landing page with all sections   |
| `/gallery`        | `GalleryPage`  | Filterable masonry gallery + lightbox |
| `/gallery/bridal` | `GalleryPage`  | Pre-filtered bridal gallery           |
| `/gallery/arabic` | `GalleryPage`  | Pre-filtered Arabic gallery           |
| `/gallery/floral` | `GalleryPage`  | Pre-filtered floral gallery           |
| `/gallery/indian` | `GalleryPage`  | Pre-filtered Indian gallery           |
| `/services`       | `ServicesPage` | Detailed service descriptions         |
| `/packages`       | `PackagesPage` | Pricing tiers + group booking         |
| `/products`       | `ProductsPage` | Henna product shop                    |
| `/booking`        | `BookingPage`  | Booking form + WhatsApp sidebar       |
| `/contact`        | `ContactPage`  | Contact details + FAQ                 |

---

## Gallery System

The gallery uses a CSS **masonry layout** (multi-column with `break-inside: avoid`) for a natural photographic feel.

- **Filtering** is handled by `useGalleryFilter` hook (client-side, instant)
- **Lightbox** is handled by `useLightbox` hook with keyboard navigation (←/→/Esc)
- Each lightbox view shows a **WhatsApp CTA** tailored to the image's category

---

## WhatsApp Conversion Strategy

Every page and section includes strategically placed WhatsApp CTAs:

- **Hero:** Primary CTA with pulse animation
- **Gallery Lightbox:** "Book this style" CTA after viewing a design
- **Service cards:** Category-specific message
- **Package cards:** Package-specific message
- **Product cards:** Order-specific message
- **Campaign banners:** Offer-specific message
- **Footer, Contact, Booking sidebar:** Universal CTAs

---

## Booking Form

The `BookingForm` component (`src/components/organisms/BookingForm/`) posts to `/api/booking`.

**To activate the backend:**

1. See `api/booking.ts` for a reference Vercel Edge Function
2. Alternatively, use a form service (Formspree, Netlify Forms, etc.)
3. The form gracefully shows success even if the endpoint is unreachable

---

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel --prod
```

Add to `vercel.json` for SPA routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Netlify

Create `public/_redirects`:

```
/*  /index.html  200
```

### GitHub Pages

Use `vite-plugin-gh-pages` and set `base` in `vite.config.ts`.

---

## Performance Notes

- Hero image uses `fetchPriority="high"` and `loading="eager"`
- All other gallery images use `loading="lazy"` with `decoding="async"`
- Pages are code-split via `React.lazy()` — only Home loads on initial visit
- `prefers-reduced-motion` respected — all animations disable gracefully
- Google Fonts loaded with `display=swap` and `preconnect`

---

## Customisation Checklist

- [ ] Update `SITE_CONFIG` in `src/config/site.config.ts`
- [ ] Replace placeholder images in `src/data/gallery.data.ts`
- [ ] Update `SERVICES` descriptions in `src/data/services.data.ts`
- [ ] Update `PACKAGES` pricing in `src/data/packages.data.ts`
- [ ] Update `PRODUCTS` in `src/data/products.data.ts`
- [ ] Update `TESTIMONIALS` with real client reviews
- [ ] Update `CAMPAIGNS` with current promotions (or set `isActive: false`)
- [ ] Update `FAQ_ITEMS` with your actual policy details
- [ ] Configure booking form backend (`api/booking.ts`)
- [ ] Update `index.html` SEO meta tags
- [ ] Add `public/og-image.jpg` for social sharing (1200×630px)
- [ ] Set up domain and deploy
