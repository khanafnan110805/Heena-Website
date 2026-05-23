# HENNA v2 — File Architecture

## Root Config Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies: React, Vite, Tailwind, React Router, React Hook Form, Lucide React |
| `vite.config.js` | Vite build config with React plugin |
| `tailwind.config.js` | Custom design tokens — gold palette, dark bg colors, fonts, animations, spacing |
| `postcss.config.js` | Runs Tailwind and Autoprefixer |
| `index.html` | HTML entry point — loads Google Fonts, mounts `#root` |
| `vercel.json` | SPA rewrite rule so all routes serve `index.html` |
| `.gitignore` | Ignores node_modules, dist, .env |
| `README.md` | Setup instructions, structure overview, customisation guide |

---

## src/

### `main.jsx`
App entry point. Mounts React into `#root`, wraps everything in `BrowserRouter`, imports global CSS.

### `App.jsx`
Defines all routes via React Router. Lazy-loads every page except `HomePage` for code splitting. Contains `ScrollToTop` (resets scroll on route change) and `PageLoader` (spinner shown during lazy load). Renders `Navbar` and `Footer` around all routes.

---

## src/styles/

### `globals.css`
Single stylesheet for the entire project.
- Imports Google Fonts
- Declares all CSS custom properties (`--color-*`, `--transition-*`)
- Tailwind base/components/utilities layers
- `.masonry-grid` responsive column layout (1→2→3 cols)
- Hero entry animations (`heroWordmark`, `heroDescriptor`, `heroCTA`)
- Scroll reveal system (`.reveal` / `.revealed` classes)
- WhatsApp pulse ring animation
- Gallery card hover transitions
- Lightbox open animation
- Skeleton shimmer
- `prefers-reduced-motion` override block

---

## src/data/

### `siteConfig.js`
Single source of truth for all brand/contact info.
- `SITE_CONFIG` — brand name, artist bio, WhatsApp number, Instagram, email, service area, hours
- All pre-written WhatsApp message strings per service/package
- `buildWhatsAppUrl()` — converts a message + phone into a `wa.me` deeplink
- `NAV_LINKS` — array used by Navbar and Footer

### `galleryData.js`
Imports all 19 local PNG images from `src/assets/img/`. Exports `GALLERY_IMAGES` array — each entry has `id`, `src`, `alt`, `category` (bridal/arabic/floral/indian), `featured` flag, and `aspectRatio` (portrait/landscape/square) for masonry rhythm. Also exports `FEATURED_GALLERY` (featured=true items, max 8) used on the homepage.

### `servicesData.js`
Array of 4 service objects (Bridal, Arabic, Floral, Indian). Each has title, subtitle, description, details list, duration, idealFor, imageUrl (Pinterest), and a pre-written `whatsappMessage`.

### `packagesData.js`
Three package objects (Essentials, Premium, Signature Bridal) with tier, price, priceNote, duration, includes list, imageUrl, optional `featured` flag, and `whatsappMessage`. Also exports `GROUP_PACKAGE` object for the group/event offering.

### `contentData.js`
Four exports in one file:
- `TESTIMONIALS` — 5 client review objects with name, occasion, date, rating, quote, designDescription
- `FAQ_ITEMS` — 10 FAQ entries each with a `group` label for grouped rendering on the full FAQ page
- `CAMPAIGNS` — 2 campaign banners (Eid Special, Bridal Season) with `isActive` flag; `ACTIVE_CAMPAIGNS` filters to active only
- `PRODUCTS` — 4 product objects (henna cones, nail cones, starter kit) with name, description, features, price, imageUrl, badge, whatsappMessage

---

## src/hooks/

### `useScrollReveal.js`
Returns a `ref`. On mount, attaches an `IntersectionObserver` to the element. When it enters the viewport, adds the `.revealed` CSS class (triggers the fade-up transition defined in globals.css). Disconnects observer after first reveal.

### `useLightbox.js`
Manages lightbox state for a given images array. Exposes `activeIndex`, `isOpen`, `open(index)`, `close()`, `prev()`, `next()`. Side effect: locks body scroll and registers keyboard listeners (Escape / ArrowLeft / ArrowRight) when open.

---

## src/components/layout/

### `Navbar.jsx`
Fixed header. Becomes opaque with backdrop blur after 40px scroll. Desktop: wordmark left, nav links center, WhatsApp CTA right. Mobile: hamburger toggle opens a full-screen overlay menu with large display-font nav links and a pulsing WhatsApp CTA. Closes on route change. Locks body scroll when open.

### `Footer.jsx`
Four-column grid (brand + bio, nav links, contact details). Renders WhatsApp CTA, Instagram link, email, service area, hours. Bottom bar shows copyright year.

---

## src/components/sections/

### `HeroSection.jsx`
Full-viewport section with a background image + multi-layer gradient overlay. Decorative SVG paisley on desktop. Staggered CSS entry animations for wordmark, descriptor, statement, and CTA. Two CTAs: WhatsApp Book button and a "Explore Designs" link to `/gallery`. Scroll indicator at bottom.

### `BookingForm.jsx`
Multi-field booking form using `react-hook-form`. Fields: name, phone, email, service type, occasion, preferred date/time, home service checkbox (conditionally shows address field), guest count, design vision, special requests. On submit POSTs to `/api/booking`; falls back gracefully to success state if API is absent. Shows a success screen with WhatsApp follow-up CTA after submission. No Zod — all validation via `react-hook-form` rules directly.

---

## src/components/gallery/

### `GalleryCard.jsx`
Single image tile. Renders image in its natural aspect ratio (portrait/landscape/square via CSS aspect-ratio). Hover overlay shows a ZoomIn icon and "View" label. Calls `onClick(index)` to open lightbox.

### `GalleryGrid.jsx`
Renders a list of `GalleryCard` components inside a `.masonry-grid` container (CSS columns). Accepts `startIndex` offset for correct lightbox indexing when filtered.

### `GalleryFilterBar.jsx`
Five filter buttons (All / Bridal / Arabic / Floral / Indian). Active filter gets gold background. Calls `onChange(value)` on click.

### `GalleryLightbox.jsx`
Fixed full-screen overlay. Shows active image centered, alt text as caption, and a counter. Prev/Next arrow buttons and a close button. Clicking the backdrop also closes. Keyboard nav is handled by `useLightbox` hook. Entry animation via `.lightbox-content` CSS class.

---

## src/components/ui/

| Component | What it does |
|-----------|-------------|
| `Button.jsx` | Base button with `variant` (primary/secondary/ghost) and `size` (sm/md/lg) props |
| `WhatsAppCTA.jsx` | Anchor tag styled as a button linking to `wa.me` deeplink. Props: `message`, `label`, `size`, `variant` (filled/outlined), `fullWidth`, `pulse` |
| `Badge.jsx` | Small label pill — variants: gold, dark, success |
| `SectionHeader.jsx` | Eyebrow + title + subtitle + gold divider block with scroll reveal built in |
| `StarRating.jsx` | Row of 5 star icons filled to the given `rating` value |
| `AccordionItem.jsx` | Single expand/collapse FAQ row with chevron rotation animation |
| `FAQAccordion.jsx` | Renders `AccordionItem` list. In `limit` mode shows flat list; without limit renders grouped by `group` label |
| `TestimonialCard.jsx` | Quote card with star rating, quote text, name, occasion, date, design description |
| `TestimonialCarousel.jsx` | Desktop: 3-column grid of all testimonials. Mobile: swipeable carousel with dot indicators and arrow buttons |
| `ServiceCard.jsx` | Two modes: `compact` (image thumbnail + title + arrow link to gallery route) and full (image + description + details list) |
| `PackageCard.jsx` | Pricing tier card with image, price, includes checklist, WhatsApp CTA. Featured packages get gold border glow |
| `ProductCard.jsx` | Product image with badge, name, description snippet, feature bullets, price, and order CTA |
| `CampaignBanner.jsx` | Full-width image banner with gradient overlay, badge, title, description, and pulsing WhatsApp CTA |

---

## src/pages/

### `Home/HomePage.jsx`
Assembles all homepage sections in order: Hero → Services (4 compact cards) → Gallery Preview (featured images, masonry) → Active Campaigns → Packages (3 cards) → Products (4 cards) → Testimonials → FAQ (5 items) → Contact CTA panel. Manages lightbox state for the gallery preview. Uses a local `RevealDiv` wrapper for scroll reveal on each section.

### `Gallery/GalleryPage.jsx`
Full gallery page. Accepts optional `category` prop from the route (e.g. `/gallery/bridal`). Manages `activeFilter` state synced to the URL prop. Filters `GALLERY_IMAGES` by active category. Renders `GalleryFilterBar` + `GalleryGrid` + `GalleryLightbox`.

### `Services/ServicesPage.jsx`
Renders all 4 services as full `ServiceCard` components (non-compact). Each card gets its own WhatsApp CTA below it. Bottom "Not sure?" CTA panel links to WhatsApp.

### `Packages/PackagesPage.jsx`
3-column grid of `PackageCard` components. Below that, the `GROUP_PACKAGE` detail panel with checklist and WhatsApp CTA. Closing note on pricing transparency.

### `Products/ProductsPage.jsx`
4-column grid of `ProductCard` components. "How to Order" info panel explaining WhatsApp-based ordering flow.

### `Booking/BookingPage.jsx`
Two-column layout: `BookingForm` on the left (2/3 width), sidebar on the right with a direct WhatsApp CTA, contact info, and a booking policy note.

### `Contact/ContactPage.jsx`
Left column: 5 contact detail cards (WhatsApp, Instagram, Email, Service Area, Hours). Right column: a "Ready to Book?" CTA panel. Below both: full grouped `FAQAccordion` with all 10 FAQ items.

### `NotFound/NotFoundPage.jsx`
404 page. Large faded "404" background text, short message, two CTAs: Back to Home link and WhatsApp CTA.

---

## src/assets/img/

19 local PNG files used as the gallery. Imported directly in `galleryData.js` so Vite fingerprints and optimises them at build time.

| Prefix | Category | Count |
|--------|----------|-------|
| `a01–a05` | Arabic | 5 |
| `b01–b06` | Bridal | 6 |
| `f01–f04` | Floral | 4 |
| `i01–i04` | Indian | 4 |
