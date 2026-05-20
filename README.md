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

Project Architecture
henna-website/
├── Root config files
├── api/
├── public/
└── src/
├── App.tsx + main.tsx
├── components/
│ ├── atoms/
│ ├── molecules/
│ ├── organisms/
│ └── layout/
├── config/
├── data/
├── hooks/
├── pages/
├── styles/
└── types/

Root Level — Configuration & Entry FileRole

index.html
The single HTML shell. Loads Google Fonts (Cormorant Garamond, DM Sans), sets viewport meta, and mounts the React app via <div id="root">. The only .html file in the project.

package.json
Declares all dependencies (React 18, React Router, React Hook Form, Zod, Lucide React) and devDependencies (Vite, TypeScript, Tailwind, Autoprefixer). Defines dev, build, preview, and lint scripts.

vite.config.ts
Vite build config. Sets the @/ path alias pointing to src/, and defines manual chunk splitting — React vendor, form vendor, and page chunks are separated for optimal caching.

tailwind.config.ts
The complete design token system. Defines the full custom colour palette (bg-base, gold-primary, text-primary, etc.), custom font families (display → Cormorant Garamond, body → DM Sans), custom font sizes, animations (fade-up, pulse-ring, shimmer), keyframes, and extended spacing. Every design decision lives here.

tsconfig.json
TypeScript compiler config for the app. Enables strict mode, sets jsx: react-jsx, configures the @/ path alias.

tsconfig.node.json
TypeScript config scoped only to Vite and Tailwind config files (the build tooling layer).

postcss.config.js
PostCSS pipeline — runs Tailwind CSS then Autoprefixer for cross-browser CSS output.

vercel.json
Deployment config for Vercel. Rewrites all URLs to /index.html (required for client-side routing with React Router), and sets cache headers for hashed assets.

.env.example
Template showing all environment variables the project accepts — WhatsApp number, Instagram URL, contact email, site URL. Copy to .env.local to use.

.gitignore
Excludes node_modules, dist, .env.local, editor files, and TypeScript build info files from version control.

README.md
Full setup guide — quick start, project structure overview, design system token reference, all routes, gallery system explanation, WhatsApp strategy, deployment instructions, and a pre-launch customisation checklist.

api/
api/booking.ts
Reference implementation for a server-side booking endpoint. The frontend BookingForm POSTs to /api/booking. This file shows how to handle it as a Vercel Edge Function — validate the payload, send an email notification, return a JSON response. Not active by default; the form degrades gracefully if it's unreachable.

public/
public/favicon.svg
SVG browser tab icon. A minimal paisley/leaf motif in gold (#C9A84C) on dark background (#0A0A0A), consistent with the brand palette.

src/ — Application Source
Entry Points
src/main.tsx
React app bootstrap. Mounts <App> inside <StrictMode> and <BrowserRouter>, imports global styles. The single entry point that Vite compiles from.

src/App.tsx
Root router. Defines all <Route> entries, wraps lazy-loaded pages in <Suspense> with a spinner fallback, renders <Navbar> and <Footer> around all routes, and includes a ScrollToTop component that resets scroll position on every route change. HomePage is eagerly imported (critical path); all other pages are React.lazy() code-split.

src/config/
site.config.ts
The single source of truth for all site-wide constants. Contains brand name, artist name, bio, WhatsApp number, Instagram handle, email, service area, hours, all pre-written WhatsApp deeplink messages (one per service/package/product), social URLs, and SEO defaults. Also exports buildWhatsAppUrl() — a utility that constructs a wa.me deeplink from a message string and phone number. This is the first file to edit before deploying.

routes.ts
All URL path constants as a typed ROUTES object (e.g. ROUTES.GALLERY = '/gallery'). Also exports NAV_LINKS — the array used by Navbar and Footer to render navigation. Centralised so changing a URL path propagates everywhere automatically.

src/types/
gallery.types.ts
TypeScript interfaces for the gallery system. Defines GalleryCategory ('bridal' | 'arabic' | 'floral' | 'indian'), GalleryFilter (adds 'all'), GalleryImage (id, src, alt, category, featured flag, aspect ratio), and GallerySection.

services.types.ts
Interfaces for Service (id, title, description, details list, duration, idealFor, imageUrl, whatsappMessage) and Package (tier, pricing, includes list, featured flag).

booking.types.ts
Types for the booking form — BookingFormData (all form fields), ServiceType and OccasionType enums, and BookingSubmissionResponse.

products.types.ts
Product interface (id, category, name, description, features list, price, imageUrl, badge, whatsappMessage) and ProductCategory union type.

index.ts
Barrel re-export of all types from the four type files above. Lets other files import from @/types rather than individual paths.

src/data/
All data files are pure TypeScript — no API calls, no async. They export typed arrays of content objects. Swapping out content (real photos, real pricing, real testimonials) only requires editing these files.

gallery.data.ts
Array of 19 GalleryImage objects across all four categories (bridal, arabic, floral, indian). Each has an id, src (currently Unsplash placeholder URLs), alt text (SEO-friendly descriptions), category, featured flag, and aspectRatio hint for masonry rhythm. Also exports FEATURED_GALLERY — the 8 featured images used on the Home page preview.

services.data.ts
Array of 4 Service objects — Bridal, Arabic, Floral, Indian. Each contains full description copy, a details bullet list, duration range, idealFor occasions, image URL, and the pre-written WhatsApp message specific to that service.

packages.data.ts
Array of 3 Package objects (Essentials, Premium, Signature Bridal) plus a separate GROUP_PACKAGE object for events. Each package has tier, tagline, pricing string, price note, duration, includes list, and WhatsApp message. The Premium package has featured: true which triggers the highlighted card style.

testimonials.data.ts
Array of 5 Testimonial objects with name, occasion, date, star rating, quote, and design description. Used by TestimonialCarousel on the Home page.

faq.data.ts
Array of 10 FAQItem objects grouped into categories (About the Artist, Pricing, Home Service, Bridal Mehndi, Booking & Cancellation). Used by FAQAccordion — shown in full on the Contact page, and in a 5-item preview on the Home page. Also exports FAQ_HOME_PREVIEW.

products.data.ts
Array of 4 Product objects across categories (henna-cones, nail-cones, kits). Each has a description, feature bullet list, price string, image URL, optional badge label, and order-specific WhatsApp message.

campaigns.data.ts
Array of Campaign objects for seasonal promotions (Eid Special, Bridal Season 2025). Each has title, subtitle, description, CTA label, image URL, badge text, WhatsApp message, and an isActive boolean flag. Only active campaigns render. Also exports ACTIVE_CAMPAIGNS as a filtered array.

src/hooks/

useScrollReveal.ts
Uses IntersectionObserver to add a revealed CSS class when an element enters the viewport. Exports two hooks: useScrollReveal (single element) and useStaggerReveal (auto-staggers children). Works with the .reveal / .revealed classes defined in animations.css.

useGalleryFilter.ts
Manages gallery filter state. Takes the full image array, tracks activeFilter, and returns filteredImages as a memoised derived value via useMemo. Used by GalleryPage.

useLightbox.ts
Manages lightbox open/close/navigation state. Tracks selectedIndex, exposes open(index), close(), next(), prev() handlers, and toggles document.body.style.overflow to prevent background scrolling when lightbox is open.

useMediaQuery.ts
Subscribes to a CSS media query using window.matchMedia and returns a boolean that updates reactively. Also exports three convenience hooks: useIsMobile, useIsTablet, useIsDesktop.

useWhatsApp.ts
Wraps buildWhatsAppUrl from site.config.ts. Provides openWhatsApp(message?) (opens WhatsApp in a new tab) and getWhatsAppUrl(message?) (returns the URL string). Falls back to the default message if none is provided.

src/styles/

globals.cssMain stylesheet entry point. Imports theme.css and animations.css first (required order), then declares @tailwind base/components/utilities. Adds @layer base resets (box-sizing, scroll-behaviour, font smoothing, selection colour, custom scrollbar styling), @layer components utility classes (.section-padding, .container-width, .masonry-grid, .masonry-item), and @layer utilities helpers (.bg-hero-overlay, .scroll-lock).

theme.css
Defines all CSS custom properties (--color-_, --space-_, --transition-_, --overlay-_) on :root. These mirror the Tailwind config tokens and are used directly in CSS where Tailwind classes aren't practical (e.g. inline background values, var() in SVGs).

animations.css
All keyframe animations and their trigger classes. Includes: hero entry animations (.hero-wordmark, .hero-descriptor, .hero-cta) with staggered delays, .reveal / .revealed scroll animation system, WhatsApp pulse ring (.wa-pulse), gallery card hover transitions, lightbox entry, shimmer skeleton, and a @media (prefers-reduced-motion: reduce) block that disables every animation for accessibility.

src/components/atoms/
Primitive, stateless UI building blocks. No business logic. Each lives in its own folder with a component file and index.ts barrel export.

Button/Button.tsx
Polymorphic button. Accepts variant (primary, secondary, ghost, whatsapp), size (sm, md, lg), fullWidth, and can render as either a <button> or <a> tag via the as prop. All variant and size styles are defined as lookup objects for clean separation.

Badge/Badge.tsx
Small label chip. Variants: gold (gold border on dark), dark (subtle dark), success (green tint). Used for category labels in gallery cards, package tiers, and product badges.

SectionHeader/SectionHeader.tsx
Consistent section heading block with optional eyebrow (small gold uppercase label), title (display font h2), gold divider line, and optional subtitle paragraph. Accepts align prop (center or left). Used at the top of every section.

StarRating/StarRating.tsx
Renders N filled/unfilled star icons using Lucide's Star. Accepts rating, max, and size props. Has a screen-reader aria-label. Used in TestimonialCard.DecorativeRule/DecorativeRule.tsxTwo decorative elements. DecorativeRule — a horizontal line-dot-line divider with a gold diamond SVG centre, used between content sections. DecorativeCorner — absolute-positioned corner bracket ornaments (top-left and bottom-right), used on featured PackageCard and the contact CTA box.

ScrollReveal/ScrollReveal.tsx
Wrapper <div> that applies the .reveal class and uses IntersectionObserver to add .revealed when the element scrolls into view. Accepts a delay prop (in ms) for staggered sequences. All page sections wrap their content in this.

atoms/index.ts
Barrel re-export of all six atoms.

src/components/molecules/
Composed components that combine atoms with some local logic or data-awareness.

WhatsAppCTA/WhatsAppCTA.tsx
The most-used component in the entire project. Renders an <a> tag pointing to a wa.me deeplink. Accepts message, label, size (sm/md/lg/xl), variant (filled green or outlined), fullWidth, and pulse (adds the wa-pulse animation class). Used on every page and every card.

ServiceCard/ServiceCard.tsx
Displays a single service. Has two modes: compact (image thumbnail with title, subtitle, and "View designs" link — used in the home grid) and full (detailed card with description, duration, and details list — used on the Services page).

PackageCard/PackageCard.tsx
Pricing tier card. Shows tier label, package name, price, price note, duration, includes checklist with tick icons, and a WhatsApp CTA. If featured: true, renders with a gold border glow, a "Most Popular" badge, and DecorativeCorner ornaments.

TestimonialCard/TestimonialCard.tsx
Client review card. Shows star rating, quote with a decorative large quotation mark, client name, occasion, date, and design description. Used inside TestimonialCarousel.

ProductCard/ProductCard.tsx
Product display card. Shows product image with optional badge (e.g. "Bestseller"), name, description excerpt, top 3 feature bullets, price, and a small WhatsApp order CTA.

GalleryCard/GalleryCard.tsx
Masonry gallery image tile. Renders the image with a hover overlay that fades in showing the category badge and "View Design" label. Keyboard-accessible (<button> element). Triggers the lightbox onClick.

GalleryFilter/GalleryFilter.tsx
The filter tab bar above the gallery (All Designs · Bridal · Arabic · Floral · Indian). Active tab gets gold fill, inactive tabs have dark border. Horizontally scrollable on mobile. Exports GalleryFilterBar.

AccordionItem/AccordionItem.tsx
A single FAQ row. Manages its own open/closed state. Uses max-height CSS transition for smooth expand/collapse. Chevron rotates 180° when open.

CampaignBanner/CampaignBanner.tsx
Full-width promotional banner. Full-bleed background image with a left-side gradient overlay, badge, eyebrow label, title, description, and a pulsing WhatsApp CTA. Used for Eid and bridal season promotions.

molecules/index.ts
Barrel re-export of all nine molecules.

src/components/organisms/
Large, self-contained sections that own significant UI logic and compose multiple molecules.

HeroSection/HeroSection.tsx
Full-viewport hero. Full-bleed background image with multi-layer overlay. Contains the brand wordmark (with CSS entry animation), service area eyebrow, tagline, gold divider, brand statement, and two CTAs (WhatsApp primary + "Explore Designs" secondary link). Includes a decorative SVG paisley watermark on desktop and a scroll indicator arrow.

GalleryGrid/GalleryGrid.tsx
Renders a masonry grid of GalleryCard components. Accepts an images array, onImageClick callback, and an optional startIndex offset (so lightbox index is correct when a filtered subset is shown).

GalleryLightbox/GalleryLightbox.tsx
Full-screen image viewer rendered via createPortal into document.body. Shows the current image at max viewport size, prev/next navigation buttons, a counter (3 / 19), category badge, keyboard navigation (←/→/Esc), a backdrop click-to-close, and a WhatsApp CTA pre-loaded with a message specific to the image's category.

BookingForm/BookingForm.tsx
Complete booking form with React Hook Form + Zod validation. Fields: name, WhatsApp number, email (optional), service type, occasion type, preferred date, preferred time, home service checkbox, conditional address field (shown only when home service is checked), guest count, design vision textarea, special requests textarea. On submit, POSTs to /api/booking. On success shows a confirmation state with a follow-up WhatsApp CTA. Gracefully shows success even if the API is unreachable.

TestimonialCarousel/TestimonialCarousel.tsx
Responsive testimonial display. On desktop (lg+) renders all 5 testimonials in a 3-column grid. On mobile/tablet renders a swipeable carousel with touch event handling (50px swipe threshold), dot indicators, and prev/next buttons.

FAQAccordion/FAQAccordion.tsx
Renders FAQ items from faq.data.ts. In flat mode (when limit prop is passed) renders items as a simple list. In full mode groups items by their group field with gold category labels. Used in both Home (5-item preview) and Contact (full grouped list).

organisms/index.ts
Barrel re-export of all six organisms.

src/components/layout/
Persistent UI that wraps every page.

Navbar/Navbar.tsx
Fixed top navigation bar. Transparent on scroll position 0, switches to bg-bg-base/95 with backdrop blur after 40px scroll. Desktop: wordmark left, nav links centre, "Book Now" WhatsApp CTA right. Mobile: wordmark left, hamburger right. Mobile menu is a full-screen overlay with large display-font nav links, a full-width WhatsApp CTA, and social links. Body scroll is locked while the menu is open.

Footer/Footer.tsx
Full-width site footer. 4-column grid (brand + bio + CTA, navigation links, contact details). Contains all contact info icons (Instagram, email, location, hours), a DecorativeRule divider, and copyright.

PageWrapper/PageWrapper.tsx
Minimal wrapper <main> with pt-20 top padding (to clear the fixed Navbar) and min-h-screen. Wraps every page except Home (which manages its own full-viewport Hero section).layout/index.tsBarrel re-export of Navbar, Footer, PageWrapper.

src/pages/
Page-level components. Each is a full route view that composes layout and organism components.

Home/HomePage.tsx
Home page assembly. Imports and sequences all 9 home sections in order: Hero → Services → Gallery Preview → Campaigns → Packages → Products → Testimonials → FAQ → Contact CTA. No logic of its own — purely compositional.

Home/sections/HeroSectionWrapper.tsx
Thin wrapper that renders <HeroSection>. Exists to keep HomePage.tsx a clean import list.

Home/sections/ServicesOverview.tsx
"Mehndi Services" section. 4-column compact ServiceCard grid with a "View full service details" link.

Home/sections/GalleryPreview.tsx
"Featured Designs" section. Renders FEATURED_GALLERY (8 images) in a masonry grid, includes a "View Full Gallery" link, and wires up the lightbox.

Home/sections/CampaignSection.tsx
Conditional campaign section. Renders ACTIVE_CAMPAIGNS as CampaignBanner components. Renders nothing if no campaigns are active.

Home/sections/PackagesOverview.tsx
"Service Packages" section. 3-column PackageCard grid with a link to the full Packages page.

Home/sections/ProductsPreview.tsx
"Henna Products" section. 4-column ProductCard grid (first 4 products) with a link to the full Products page.

Home/sections/TestimonialsSection.tsx
"What Clients Say" section. Renders TestimonialCarousel with a WhatsApp CTA below.Home/sections/FAQSection.tsx"Common Questions" section. Renders FAQAccordion with limit={5}, plus an "Ask on WhatsApp" CTA and a link to all FAQs.

Home/sections/ContactCTA.tsx
Final home page section. Ornamental card with decorative SVG background, brand statement, large WhatsApp CTA, and all contact detail links (Instagram, email, location).

Gallery/GalleryPage.tsx
Full gallery page. Accepts an optional category prop for pre-filtered category routes (/gallery/bridal etc.). Syncs filter state with URL search params (?category=arabic) so URLs are shareable. Renders GalleryFilterBar, GalleryGrid, and GalleryLightbox.

Services/ServicesPage.tsx
Services detail page. Alternating left/right image + content layout for each of the 4 services. Each service shows full description, duration and idealFor info boxes, details bullet list, a WhatsApp booking CTA, and a link to that service's gallery.

Packages/PackagesPage.tsx
Packages pricing page. 3-column PackageCard grid, a separate group booking panel with Users icon, and a 3-step "How Pricing Works" explainer.

Products/ProductsPage.tsx
Products page. Groups products by category with section headers, trust indicator bar ("100% Natural", "Chemical Free", etc.), and a WhatsApp ordering instructions block.

Booking/BookingPage.tsx
Booking page. 3/5 + 2/5 grid layout: left has the BookingForm in a card, right sidebar has a "Book directly on WhatsApp" shortcut, 4 benefit tiles (WhatsApp First, Home Service, Flexible Timing, Custom Designs), and a service hours info block.

Contact/ContactPage.tsx
Contact page. Left column: all contact methods as styled link cards (WhatsApp, Instagram, email, location, hours) plus a large WhatsApp CTA. Right column: artist photo and a framed artist quote. Full FAQAccordion below in a separate section.

NotFound/NotFoundPage.tsx
404 page. Large 404 in display font, heading, message, and two CTAs (Back to Home + WhatsApp). No Navbar/Footer padding — standalone centered layout.

How the Layers Connect
main.tsx
└── App.tsx (Router + Navbar + Footer)
└── Pages (route views, orchestrate sections)
└── Organisms (self-contained complex UI)
└── Molecules (composed interactive cards/CTAs)
└── Atoms (Button, Badge, etc.)

site.config.ts ──→ WhatsAppCTA ──→ Every booking touchpoint
data/\*.data.ts ──→ Pages + Organisms
hooks/ ──→ Gallery, Lightbox, Scroll animations
styles/ ──→ Tailwind tokens → every component
types/ ──→ Enforced across data, hooks, and components

Every WhatsApp CTA in the project traces back to a single message string — either in site.config.ts (for generic CTAs) or in the relevant data/\*.data.ts file (per service/package/product). Changing a phone number in site.config.ts updates every single link across the entire site automatically.

**Languages**
TypeScript, CSS

**Runtime & Framework**
React 18, React DOM

**Build Tool**
Vite

**Routing**
React Router v6

**Styling**
Tailwind CSS, PostCSS, Autoprefixer

**Forms & Validation**
React Hook Form, Zod, @hookform/resolvers

**Icons**
Lucide React

**Fonts**
Google Fonts (Cormorant Garamond, DM Sans)

**Deployment**
Vercel
