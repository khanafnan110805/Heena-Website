# HENNA v2 — Premium Mehndi Artist Website

A luxury mehndi artist website built with React (JavaScript), Vite, and Tailwind CSS.

## Stack

- **React 18** — UI framework
- **JavaScript / JSX** — no TypeScript
- **Vite** — build tool
- **Tailwind CSS** — utility-first styling
- **React Router v6** — client-side routing
- **React Hook Form** — form handling
- **Lucide React** — icons
- **Vercel** — deployment target

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── assets/img/          ← Local mehndi images (a01–a05, b01–b06, f01–f04, i01–i04)
├── components/
│   ├── layout/          ← Navbar, Footer
│   ├── sections/        ← HeroSection, BookingForm
│   ├── ui/              ← Button, WhatsAppCTA, Badge, Cards, Carousel, FAQ, etc.
│   └── gallery/         ← GalleryCard, GalleryGrid, GalleryLightbox, GalleryFilterBar
├── pages/
│   ├── Home/            ← Full homepage with all sections
│   ├── Gallery/         ← Masonry gallery with filter
│   ├── Services/        ← Service detail page
│   ├── Packages/        ← Pricing packages
│   ├── Products/        ← Henna products shop
│   ├── Booking/         ← Booking form page
│   ├── Contact/         ← Contact info + FAQ
│   └── NotFound/        ← 404 page
├── data/
│   ├── siteConfig.js    ← Brand info, WhatsApp number, contact details
│   ├── galleryData.js   ← Gallery images with local asset imports
│   ├── servicesData.js  ← Service descriptions
│   ├── packagesData.js  ← Pricing packages
│   └── contentData.js   ← Testimonials, FAQ, campaigns, products
├── hooks/
│   ├── useScrollReveal.js
│   └── useLightbox.js
├── styles/
│   └── globals.css      ← Tailwind + CSS custom properties + animations
├── App.jsx
└── main.jsx
```

---

## Customisation

### Update contact info
Edit `src/data/siteConfig.js`:
```js
export const SITE_CONFIG = {
  contact: {
    whatsapp: '+91XXXXXXXXXX',   // ← change this
    instagram: '@yourhandle',
    email: 'your@email.com',
  }
}
```

### Update gallery images
Images live in `src/assets/img/`. Replace the PNG files and update descriptions in `src/data/galleryData.js`.

### Add/remove campaigns
Edit `isActive` on any campaign in `src/data/contentData.js` to show or hide it.

---

## Deployment (Vercel)

1. Push to GitHub
2. Import repo in Vercel
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

`vercel.json` is already configured for SPA routing.
