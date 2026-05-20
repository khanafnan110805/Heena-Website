# HENNA — Henna Artist Booking & Showcase Platform
## Deep Research Report · Product Architecture · Frontend Engineering Blueprint

**Document Version:** 1.0.0
**Classification:** Client Handoff · Frontend Engineering Reference
**Status:** Draft — Ready for Development Sprint Planning
**Prepared by:** Product & Engineering Team
**Date:** 2025

---

> *HENNA is a premium personal brand website for a professional henna artist — a platform that transforms the intimate, handcrafted art of mehndi into a luxury digital experience. This document serves as the authoritative product planning artifact, frontend engineering blueprint, and UI/UX reference for the complete design and development of the HENNA platform.*

---

## Table of Contents

1. Executive Summary
2. Competitive Analysis
3. Product Positioning
4. User Personas
5. Success Metrics
6. Full Sitemap
7. Detailed Page-by-Page Breakdown
8. Full Component Inventory
9. Hero Section Architecture
10. Gallery & Showcase Strategy
11. Booking Flow Breakdown
12. Service Package Strategy
13. State Management Architecture
14. Responsive Breakpoints
15. UI/UX Design System
16. Accessibility & SEO
17. Animations & Interaction Notes
18. Dark Theme System
19. Lead Generation Strategy
20. Trust Signal Strategy
21. Performance Optimization Strategy
22. Deployment Architecture
23. Future Scaling Roadmap
24. Suggested Folder Structure
25. Suggested Component Hierarchy
26. Suggested Route Structure
27. Typography System
28. Color Palette
29. Spacing System
30. Iconography Style
31. UI Inspiration References
32. Full Figma/Frontend Design Handoff Requirements
33. Timeline & Sprint Planning
34. Acceptance Criteria
35. Page Design References

---

## 1. Executive Summary

HENNA is a premium personal brand website for a professional henna artist, built to serve as the primary digital touchpoint for bridal clients, festive booking customers, and event planners seeking expert mehndi services. The platform is not a marketplace, not an ecommerce aggregator, and not a generic beauty booking tool — it is a deeply personal, visually luxurious digital home for a single artist's identity, craft, and business.

The strategic purpose of HENNA is threefold. First, it serves as a *visual portfolio and trust engine* — presenting the artist's mehndi work in a high-quality, gallery-first format that instantly communicates expertise and artistic range to first-time visitors arriving from Instagram, WhatsApp referrals, or organic search. Second, it functions as a *conversion platform* — guiding every visitor through a clear, friction-free path from visual inspiration to booking inquiry via WhatsApp CTA buttons placed at every meaningful moment of the user journey. Third, it operates as a *brand elevation tool* — creating a digital presence that matches the premium nature of the artist's work, justifying premium pricing and attracting bridal and high-value event clients who expect professionalism at every touchpoint.

The tech stack is deliberately kept lean and production-practical: React with TypeScript for the frontend, Tailwind CSS for the styling system, and Vercel for deployment. The backend footprint is minimal — a lightweight serverless function for form submissions and booking requests is sufficient for Phase 1, with no database complexity, no user accounts, and no authentication overhead. The design system is built around a luxury black and beige/gold aesthetic that directly elevates the visual identity already established through the artist's Instagram promotional materials.

The primary conversion mechanism is WhatsApp. Rather than building a complex booking engine with calendar management, slot allocation, and payment processing — which would add development overhead with minimal benefit for a solo artist — HENNA uses strategically placed WhatsApp CTA buttons to route interested clients directly to a conversation with the artist. This mirrors how high-value personal service bookings actually work in South Asian cultural contexts: through personal conversation, relationship building, and custom quote negotiation rather than anonymous online checkout flows.

This document provides the complete product, design, and engineering specification required to build, launch, and iterate on the HENNA platform. It covers every page, every component, every design decision, and every technical consideration — organized as a professional handoff package for frontend engineers and the design team.

---

## 2. Competitive Analysis

Understanding what exists in the market is essential for positioning HENNA clearly and designing an experience that outperforms available alternatives across the dimensions that matter most to the target audience.

### 2.1 Generic Salon Booking Websites (Treatwell, Vagaro, Fresha)

Platforms like Treatwell and Fresha provide booking infrastructure for beauty businesses but are fundamentally marketplace and scheduling tools. Their design language is utilitarian, neutral, and brand-agnostic by necessity — they must accommodate thousands of different businesses with minimal customization.

**UI/UX Assessment:** Clean and functional but completely devoid of personality or artistic identity. The white-background, card-grid layouts communicate efficiency, not artistry. For a mehndi artist whose work is deeply personal and culturally resonant, appearing on a Fresha listing page is equivalent to presenting a hand-painted artwork on a generic Amazon product page.

**Gallery Presentation:** Non-existent in any meaningful sense. At best, these platforms support a small photo gallery within a business profile, but the images are presented as thumbnail-sized reference photos, not as portfolio-quality showcase elements.

**Booking Flow:** Technically sophisticated (calendar, slot selection, payment) but designed for high-volume commodity services like haircuts and manicures. This flow is inappropriate for custom artistic services where pricing depends on design complexity, session duration, travel requirements, and event type.

**Mobile Responsiveness:** Generally acceptable but not optimized for the image-heavy browsing patterns of Instagram-influenced customers.

**HENNA Advantage:** HENNA presents a single artist's identity — a curated world of imagery, craft, and personality — rather than a generic service listing. The booking flow matches the actual business model: WhatsApp inquiry leading to personalized consultation.

### 2.2 Bridal Service Websites (MakeupArtists, WeddingWire vendor profiles)

Wedding vendor directories represent another adjacent category. While they target the right audience (bridal clients), they suffer from the same generic-platform problem as salon booking sites.

**Trust Signals:** These platforms rely heavily on review aggregation as trust signals. HENNA will use a more personal trust strategy: showcasing the actual work, featuring client testimonials with specific design descriptions, and presenting the artist's personality and story.

**Visual Hierarchy:** Wedding directory vendor profiles place contact information and pricing on equal footing with the work portfolio, creating a transactional feeling that conflicts with the luxury positioning.

**HENNA Advantage:** On HENNA, the work comes first, the artist comes second, and the booking mechanism comes third. This visual hierarchy communicates artistry over commodity.

### 2.3 Instagram-First Beauty Brands

The Instagram grid is the closest visual reference for how HENNA's gallery should feel — a curated, high-contrast, visually cohesive feed of mehndi work. Many local henna artists operate entirely through Instagram with no dedicated website.

**UI/UX Assessment:** Instagram is visually powerful but functionally limited as a business tool. The booking flow through Instagram (DM → negotiate → confirm) is familiar to the target audience but lacks the trust signals and professional credibility that a dedicated website provides.

**Gallery Presentation:** Excellent for inspiration browsing but the square-grid format and compressed image quality limit the presentation of intricate mehndi detail.

**Conversion:** Direct message conversion rates are difficult to track and manage. There is no persistent record of the artist's services, pricing, or portfolio that a client can reference outside the app.

**HENNA Advantage:** HENNA takes the visual language of Instagram (high-contrast imagery, design categories as visual identities, festive campaign presentation) and elevates it into a professional platform with full control over image quality, layout, and the visitor's experience. The platform also gives the artist something to link to from their Instagram bio — a destination that converts casual browser into booked client.

### 2.4 Local Appointment Booking Websites (Setmore, Calendly)

Scheduling tools like Calendly or Setmore can be embedded into any website but their UI is designed for efficiency, not aesthetics. Embedding a Calendly widget into a luxury bridal website creates jarring visual discontinuity.

**HENNA Advantage:** HENNA's booking experience is designed from scratch to match the platform's visual language. The booking section uses the same gold and black aesthetic, the same typography, and the same tone as every other section of the site. This consistency communicates premium quality.

### 2.5 Beauty Service Portfolio Platforms (Format, Squarespace Portfolio)

Platforms like Format and Squarespace offer beautiful portfolio templates that work well for photographers and visual artists. They are closer to the right aesthetic direction than salon booking tools.

**UI/UX Assessment:** Squarespace templates in particular achieve a high level of visual quality. However, they are template-constrained — every artist using the same template communicates a certain lack of unique identity. They also lack the cultural specificity needed to resonate with South Asian bridal and festive audiences.

**HENNA Advantage:** HENNA is built from scratch with cultural specificity — the color palette, typography choices, festive campaign formats, and content language all speak directly to the South Asian bridal and cultural context that defines the artist's work and audience.

### 2.6 Pinterest-Inspired Gallery Websites

Pinterest's masonry grid has become the canonical layout for inspiration browsing. It works exceptionally well for mehndi design discovery because it allows varying image heights to showcase design detail without cropping.

**UI/UX Assessment:** Pinterest-style layouts create the "endless discovery" feeling that converts a casual browser into an engaged potential client. The ability to see many designs at varying scales encourages comparison, preference formation, and ultimately the desire to book.

**HENNA Advantage:** HENNA adopts the masonry grid layout for its design gallery, but applies it within the platform's luxury visual system — dark backgrounds, gold borders, premium typography — rather than Pinterest's utility-first white layout.

### 2.7 Competitive Analysis Summary

| Dimension | Salon Booking Sites | Wedding Directories | Instagram | Portfolio Platforms | **HENNA** |
|---|---|---|---|---|---|
| Artist Identity Presentation | Poor | Poor | Good | Good | **Excellent** |
| Gallery Quality | Poor | Poor | Good | Excellent | **Excellent** |
| WhatsApp Booking Flow | None | None | Informal | None | **Native** |
| Mobile-First Design | Moderate | Moderate | Excellent | Good | **Excellent** |
| Cultural Resonance | None | Low | High | Low | **High** |
| Premium Brand Aesthetics | Low | Low | Medium | High | **High** |
| Festive Campaign Support | None | Low | High | None | **High** |
| Custom Design Showcase | Poor | Poor | Good | Good | **Excellent** |
| Trust Signal Depth | Medium | High | Medium | Low | **High** |
| Booking Conversion UX | High | Medium | Low | None | **High** |

---

## 3. Product Positioning

HENNA occupies a distinct and defensible position at the intersection of luxury personal branding and practical service conversion. It is neither a portfolio-only vanity site nor a booking-only utility tool — it holds both in creative tension, ensuring that the artist's work inspires desire while the platform's structure consistently channels that desire into booking inquiries.

The positioning statement reads: *"HENNA is the premium digital home for a professional henna artist — a space where mehndi design meets luxury presentation, where festive inspiration meets instant booking access, and where every visitor leaves either booked or deeply inspired."*

The platform communicates several key brand attributes simultaneously. Exclusivity is communicated through curated gallery presentation and high-quality photography. Expertise is communicated through design categorization (Arabic, Bridal, Floral, Indian — each with its own showcase section) and the depth of the portfolio. Cultural authenticity is communicated through design language, color choices, and campaign photography that speaks directly to South Asian festive and bridal traditions. Accessibility of contact is communicated through omnipresent WhatsApp CTA buttons that remove friction from the path to booking.

The pricing positioning is premium but not unapproachable. The packages section presents service tiers clearly, establishing value anchors that help clients self-select into the appropriate service category without requiring a price negotiation before they have even seen the work.

---

## 4. User Personas

### 4.1 Persona: The Bridal Client — "Zara"

Zara is a 26-year-old bride-to-be whose wedding is six weeks away. She is planning a Pakistani-style wedding with traditional mehndi ceremony and needs a henna artist who can handle both the bride's full-hand and full-foot design and provide a team capable of doing simpler designs for the family members attending the mehndi night. She discovered the artist through a friend's Instagram story.

Her primary concerns are reliability (will the artist show up?), portfolio quality (can they do the intricate bridal designs she has saved on Pinterest?), and pricing transparency (can they accommodate the full ceremony within her budget?). She will visit the website on her phone at 11pm while scrolling through Instagram and make her decision within the first 30 seconds of the gallery experience.

HENNA serves Zara by opening with a full-viewport bridal hero image that immediately establishes artistic quality, presenting a clearly labeled "Bridal Mehndi" category in the gallery, and placing a prominent WhatsApp CTA that invites her to send her ceremony details for a custom quote. The testimonials section includes a specific bridal testimonial with ceremony date, design complexity, and family size details.

### 4.2 Persona: The Eid/Festive Customer — "Ayesha"

Ayesha is a 22-year-old university student who wants a beautiful Arabic mehndi design for Eid. She does not have a large budget and is primarily looking for value — a quality design at a reasonable price, with easy home service booking. She found the artist through an Instagram festive campaign post.

Her primary concern is simplicity of booking (she wants to send a WhatsApp message and get a confirmation quickly) and visual inspiration (she wants to see designs similar to what she wants before committing). She will browse the gallery for 2–3 minutes, send a WhatsApp message with a screenshot of her favorite design, and expect a response within a few hours.

HENNA serves Ayesha through the festive campaign banner section (which speaks directly to her Eid context), the Arabic mehndi gallery category (which helps her find and save her preferred style), and the clearly visible "Book via WhatsApp" button that makes the inquiry step feel as casual as messaging a friend.

### 4.3 Persona: The Event Organizer — "Fatima"

Fatima is a 35-year-old mother organizing her daughter's engagement party and wants to arrange group mehndi for 15–20 guests as an activity during the event. She is experienced with event planning and wants professional service — a confirmed booking, clear pricing for group sessions, and guaranteed arrival time.

HENNA serves Fatima through the packages section which includes a clearly described group/event service tier, and through the booking form which allows specification of guest count, event date, and location — giving her the professional booking confirmation she needs for event planning.

### 4.4 Persona: The Home Service Customer — "Nadia"

Nadia is a 30-year-old professional who wants a simple floral mehndi for her sister's wedding. She prefers home service over traveling to a salon and wants to know the travel/additional charges before committing. She found the artist through a Google search for "mehndi home service [city]."

HENNA serves Nadia through the services section's clear explanation of home service availability and travel pricing tiers, and through an FAQ entry specifically addressing home service logistics and travel charges.

### 4.5 Persona: The Instagram Browser — "Sara"

Sara is a 20-year-old who follows the artist on Instagram, saves mehndi design posts regularly, and eventually decides she wants to book for a casual occasion. The link in bio brings her to the HENNA website. She is not in a purchase-ready mindset — she is browsing for inspiration.

HENNA serves Sara through the gallery's visual richness and the non-pushy but ever-present WhatsApp CTA that turns an inspiration session into a booking conversation whenever the moment feels right. The website's Instagram-friendly visual language makes the transition from Instagram to the website feel seamless.

---

## 5. Success Metrics

Success for HENNA is measured across conversion, engagement, and platform performance dimensions. Unlike a SaaS product, the primary success metric is not MAU or session duration — it is the number of WhatsApp booking inquiries generated per week.

**Primary Conversion Metric:** Weekly WhatsApp inquiry count, tracked by monitoring the artist's WhatsApp messages with the referral source link embedded in the WhatsApp CTA URL (using UTM parameters on the `wa.me` link). A baseline target of 10+ qualified inquiries per week within 60 days of launch is the primary success criterion.

**Gallery Engagement:** Time spent on the gallery page (target: >90 seconds average), number of gallery filter interactions per session, and the gallery page's position in the site's top visited pages (target: gallery = 2nd most visited page after home).

**Bounce Rate on Hero:** The landing page's bounce rate should be below 45%, indicating that the hero section is compelling enough to encourage further exploration. A high bounce rate signals that the hero imagery or CTA is not immediately resonating with visitors.

**Mobile Performance:** Given that the primary audience arrives from Instagram and WhatsApp (both mobile-first channels), mobile sessions should account for 75%+ of total traffic. Mobile bounce rate should be lower than desktop bounce rate, as mobile visitors are more likely to be in active inquiry mode.

**Page Speed:** The gallery page must achieve a Lighthouse performance score above 85 on mobile, despite its image-heavy nature. This requires aggressive image optimization and lazy loading implementation. A slow gallery page directly reduces conversion by frustrating mobile visitors on slower connections.

**Seasonal Peaks:** Inquiry volume should spike measurably during Eid season, wedding season (October–March in South Asian calendars), and any active promotional campaigns run by the artist. These spikes validate that the festive campaign sections are driving real booking behavior.

---

## 6. Full Sitemap

The HENNA sitemap is intentionally simple. A single-page application approach where all sections are accessible via smooth scroll from the home page is appropriate for the scale of this platform, with individual sub-pages only where separate URL indexing genuinely serves SEO or deep-linking purposes.

The primary scrollable home page contains all major sections in narrative order — hero, services overview, gallery preview, packages, testimonials, and contact. Individual section pages exist as separate routes primarily to enable direct deep linking (sharing the gallery URL with a client), clean URL structure, and independent SEO targeting.

```
/                          → Home (Full Scrollable Experience)
  ├── #hero                → Premium Hero Section
  ├── #services            → Service Categories Overview
  ├── #gallery-preview     → Featured Gallery Preview (6–8 images)
  ├── #campaigns           → Active Festive Campaign Banners
  ├── #packages            → Service Packages & Pricing
  ├── #products            → Henna Products Showcase
  ├── #testimonials        → Client Testimonials
  ├── #faq                 → Frequently Asked Questions
  └── #contact             → Contact & Booking CTA

/gallery                   → Full Design Gallery (All Categories)
  ├── /gallery/bridal      → Bridal Mehndi Showcase
  ├── /gallery/arabic      → Arabic Mehndi Showcase
  ├── /gallery/floral      → Floral Mehndi Showcase
  └── /gallery/indian      → Indian Mehndi Showcase

/services                  → Full Services Detail Page
/packages                  → Full Packages & Pricing Detail
/products                  → Henna & Nail Cone Products
/booking                   → Booking Request Form (Standalone Page)
/contact                   → Contact Information & Map

/404                       → Not Found Page
```

---

## 7. Detailed Page-by-Page Breakdown

### 7.1 Home Page (`/`)

The home page is the complete narrative experience of the HENNA brand. It is designed to be consumed from top to bottom like a visual story — each section building on the previous to take a visitor from first impression to booking intent. Every section transitions smoothly into the next, with visual continuity maintained through the consistent dark luxury aesthetic.

**Hero Section:** The opening viewport is the most critical 3 seconds of the user experience. A full-screen hero section displays a high-quality bridal mehndi photograph as the background, with a centered content overlay featuring the HENNA wordmark in an elegant serif font, a one-line brand description ("Premium Mehndi & Henna Art · Bridal · Events · Festive"), and two CTA buttons: "Explore Designs" (scrolls to gallery preview) and "Book via WhatsApp" (opens WhatsApp conversation). The background image uses a dark overlay to ensure text legibility while preserving the photograph's impact. On mobile, the hero is full viewport height with the CTAs vertically stacked.

**Services Overview Section:** Immediately below the hero, a horizontal card row presents the four primary service categories — Bridal Mehndi, Arabic Mehndi, Floral Mehndi, and Indian Mehndi — each with a small representative image, a category name in gold text, and a brief description. This section functions as a navigation aid (clicking a category scrolls to or links to the relevant gallery filter) and as a visual content map that tells the visitor "this artist does all of this."

**Gallery Preview Section:** A curated selection of 6–8 of the strongest portfolio photographs presented in a Pinterest-inspired masonry grid. Each image card displays with a subtle hover effect revealing the design category label and a "View More" link. The section header reads "Featured Designs" in the platform's display typeface. A "View Full Gallery" button at the bottom links to the full `/gallery` page.

**Festive Campaign Banner Section:** One or two full-width banner cards showcasing active festive campaigns (Eid special pricing, bridal season packages, etc.). These banners use the artist's existing promotional poster visual language — bold campaign typography over rich photography — making them feel like a direct continuation of the Instagram promotion aesthetic. Each banner includes a "Book This Offer" WhatsApp CTA.

**Packages Overview Section:** Three pricing tier cards presented in a horizontal row (stacked vertically on mobile) showing the primary service packages. Each card shows the package name, key inclusions summary, starting price, and a "Book Now" button. A "View Full Packages" link leads to the dedicated `/packages` page.

**Products Section (Preview):** A small horizontal scroll section showcasing the artist's henna products (cones, nail cones, kits) with product images, names, and a "Buy / Enquire via WhatsApp" CTA. This section is intentionally compact on the home page — it serves as a discovery point that directs interested visitors to the full `/products` page.

**Testimonials Section:** Three to five client testimonials presented as elegant cards with quote text, client name (first name only, for privacy), occasion type (Bridal, Eid, Event), and a 5-star rating indicator. Each testimonial card uses a soft decorative border treatment in the gold palette. Where clients have consented, a small representative photo of their mehndi design accompanies the testimonial.

**FAQ Preview Section:** The five most common questions presented in an accordion component. Full FAQ on the dedicated `/faq` section. This section primarily serves users who are on the edge of booking and have a specific concern (home service availability, pricing for groups, travel charges) that, if answered, would convert them.

**Contact & Final CTA Section:** The page closes with a strong final conversion section featuring the artist's contact information, a decorative background, and the most prominent WhatsApp button on the page — larger, more centered, and accompanied by a direct personal invitation ("Let's plan your perfect mehndi — send me a message").

### 7.2 Services Page (`/services`)

The services page provides full detail on each service category with dedicated descriptions, key applications (bridal, event, casual), session duration expectations, and what to expect during a session. This page serves clients who are further along in their research and want to understand the specifics before booking. Each service category section includes a mini-gallery of 4–6 representative designs, a description of the style's characteristics and origins, and a dedicated WhatsApp CTA for that specific service.

### 7.3 Gallery / Designs Page (`/gallery`)

The gallery page is the heart of HENNA as a portfolio platform. It presents the complete design portfolio in a filterable, searchable masonry grid. The top of the page features a category filter bar with tabs for All, Bridal, Arabic, Floral, and Indian. The filter selection triggers a smooth animation that reorganizes the visible images without a page reload.

Each image in the gallery is displayed at full quality (optimized for web, but high resolution enough to appreciate intricate detail) with a hover overlay showing the design category. Clicking an image opens a lightbox view with a larger display, the design category label, and a "Book This Style" WhatsApp CTA that pre-fills the WhatsApp message with the design reference. This WhatsApp deep-link approach (using `wa.me` with a pre-written message text parameter) is a high-conversion pattern because it removes the mental effort of composing the inquiry message.

The masonry layout uses varying image heights — tall images for full-arm or full-back designs, standard heights for hand and foot designs — creating visual rhythm that encourages browsing and prevents the gallery from feeling repetitive.

### 7.4 Packages & Pricing Page (`/packages`)

The packages page presents the full service menu with transparent pricing. Given the custom nature of mehndi work, prices are presented as "starting from" ranges with clear explanations of what affects the final price (design complexity, session duration, travel distance, number of hands/persons). This transparency builds trust without locking the artist into rigid pricing.

The page is organized into three service tiers: Essentials (individual casual mehndi, small designs, Eid special), Premium (elaborate individual designs, bridal preparation sessions), and Signature (full bridal service, family packages, event group sessions). Each tier card includes a design sample image, included services, approximate session duration, starting price, and a "Book This Package" WhatsApp CTA.

A "Custom Request" section at the bottom handles enquiries outside the standard packages (large event groups, destination bookings, custom design commissions).

### 7.5 Products Page (`/products`)

The products page showcases the artist's range of henna-related products: henna cones in various shades, nail cones for nail art, henna kits for home use, and any other retail items offered. Each product has a prominent product photograph, product name, key features or shade description, pricing, and a "Buy / Order via WhatsApp" CTA.

The layout uses a clean product card grid — 3 columns on desktop, 2 on tablet, 1 on mobile — with a consistent card structure. The section header communicates that these are professional-grade products used by the artist herself, adding a quality trust signal.

### 7.6 Booking Page (`/booking`)

The booking page features a streamlined booking request form for clients who prefer a structured form submission over initiating a WhatsApp conversation. The form collects the client's name, contact number (WhatsApp number by default), preferred service type (dropdown), occasion type (dropdown: Bridal, Eid, Event, Casual, Other), preferred date, time, location (home service or client's address), special requests, and a short "Tell me about your design vision" text field.

Form submissions are handled by a serverless Vercel function that sends an email notification to the artist and a WhatsApp-formatted confirmation message back to the client. The booking form is presented as an alternative to WhatsApp, not a replacement — the WhatsApp CTA is equally prominent on this page.

### 7.7 Testimonials Section (Embedded on Home, Standalone on `/testimonials`)

A dedicated testimonials page for clients who want to read more social proof before booking. Each testimonial is presented with the client's name, occasion, date of service, and a detailed description of their experience. Where available, a photo of the design accompanies the testimonial. A Google Reviews embed or screenshot is optionally featured as an external validation signal.

### 7.8 FAQ Page (`/faq` or Section at `/#faq`)

The FAQ section addresses the most common pre-booking concerns organized into thematic groups: About the Artist, Service Questions, Pricing & Packages, Home Service & Travel, Bridal Mehndi, Products, and Booking & Cancellation Policy. Each question uses an accordion component for clean mobile display. The FAQ is a significant trust-building and conversion tool — unanswered concerns are the primary reason a visitor leaves without booking.

### 7.9 Contact Page (`/contact`)

A simple, elegant contact page with the artist's WhatsApp number (large, tap-to-message format), Instagram handle with a direct link, general contact email, operating area/city information, and service hours. A brief personal note from the artist adds a human touch. A small Google Maps embed (or styled address display) covers the service area. The page is intentionally simple — its job is to provide contact information clearly, not to add visual complexity.

---

## 8. Full Component Inventory

The component architecture follows a practical organization that groups components by feature area within the atomic design framework, keeping related components co-located for maintainability.

**Layout Components** control the page shell and navigation. `Navbar` provides the top navigation with the HENNA wordmark, navigation links, and the persistent "Book Now" WhatsApp button that appears in the top right on every page. `MobileMenu` is the full-screen slide-in menu for mobile devices with large touch-friendly navigation links. `Footer` contains the artist's social links, copyright, and a compact contact section. `PageWrapper` applies consistent page padding, max-width constraints, and scroll behavior.

**Hero Components** handle the landing section. `HeroSection` is the full-viewport hero with background image, overlay, content, and CTAs. `HeroCTA` is the paired button component (primary WhatsApp button + secondary gallery explore button). `HeroCaption` handles the animated text entry of the brand tagline.

**Gallery Components** power the design showcase. `GalleryGrid` is the masonry grid container that manages column distribution and image placement. `GalleryCard` is the individual image card with hover overlay, category label, and lightbox trigger. `GalleryFilter` is the category tab bar with animated active state indicator. `GalleryLightbox` is the full-screen image viewer with WhatsApp CTA overlay. `GallerySection` wraps the full gallery page experience.

**Service Components** handle service presentation. `ServiceCard` is the category card used in the services overview grid. `ServiceDetail` is the expanded service description used on the `/services` page. `ServiceIcon` is the custom decorative icon/illustration for each service category.

**Package Components** handle pricing presentation. `PackageCard` is the pricing tier card with inclusions list, price, and CTA. `PackageTable` is an optional tabular comparison view for the packages page. `PricingNote` is the styled disclaimer component explaining custom pricing factors.

**Campaign Components** handle festive promotions. `CampaignBanner` is the full-width promotional banner with campaign imagery, headline, offer details, and WhatsApp CTA. `CampaignBadge` is the small "Active Offer" indicator used throughout the site to signal live promotions.

**Booking Components** handle the booking flow. `BookingForm` is the complete form component with field validation and submission handling. `BookingField` is the styled form field component used throughout the booking form. `BookingSuccess` is the post-submission confirmation display. `WhatsAppCTA` is the reusable WhatsApp button component used throughout the site in various sizes and styles.

**Testimonial Components** handle social proof. `TestimonialCard` is the individual review card. `TestimonialCarousel` handles the mobile swipe-through carousel format for testimonials. `StarRating` is the 5-star visual rating component.

**Product Components** handle the products showcase. `ProductCard` is the individual product display card. `ProductGrid` is the responsive product card grid.

**UI Primitive Components** are the foundational elements. `Button` (variants: primary gold, secondary outlined, ghost), `SectionHeader` (decorative section title with optional ornamental divider), `DecorativeRule` (the gold horizontal rule used between sections), `Badge` (category/style label badge), `Accordion` (FAQ expand/collapse), `Overlay` (dark gradient overlay for image backgrounds), and `ScrollReveal` (wrapper component applying entry animations on scroll).

---

## 9. Hero Section Architecture

The hero section is the platform's most architecturally significant component because it makes the first impression, establishes the brand aesthetic, delivers the primary CTA, and sets the visual tone for the entire experience. Every design decision in the hero has a strategic rationale.

**Visual Architecture:** The hero uses a CSS background-image approach (not an `<img>` tag) to enable the overlay gradient while maintaining full viewport coverage. The background image is a high-quality bridal mehndi photograph — full arms or hands showing intricate design detail — that immediately communicates the artist's skill level. A dark gradient overlay (bottom-to-top, 60% opacity) ensures text contrast without completely obscuring the image. On mobile, the image is repositioned using `background-position` to keep the most visually impactful area of the photograph (typically the hands/wrists) in the center of the viewport.

**Content Hierarchy:** The hero content stack follows a strict visual hierarchy. The HENNA wordmark sits at the top in the largest display size. Beneath it, a single-line descriptor ("Premium Henna Art · Bridal · Festive · Events") uses the secondary typeface at medium weight with letter-spacing. A brief 2-line personal brand statement follows in body text. The dual CTA buttons anchor the bottom of the content stack. This hierarchy ensures that a visitor scanning from top to bottom receives the brand name, the service description, and the conversion options in the correct sequence.

**WhatsApp CTA Engineering:** The primary WhatsApp CTA button uses the `wa.me/{phone_number}` URL format with a URL-encoded default message parameter that pre-fills the conversation opener. The default message is crafted to feel natural rather than robotic: "Hi! I visited your website and I'm interested in booking a mehndi appointment." This message text is configurable via a site constants file so the artist can update it seasonally (e.g., "Hi! I'm interested in your Eid special" during Eid campaign periods).

**Animation Sequence:** On page load, the hero content animates in using a staggered fade-and-slide-up sequence: the wordmark appears first (0ms delay), then the descriptor (150ms), then the brand statement (300ms), then the CTAs (450ms). This sequence creates a cinematic reveal effect that commands attention and signals premium production value. All animations respect `prefers-reduced-motion`.

**Mobile Optimization:** On mobile, the hero is the full device viewport height (using CSS `100dvh` to account for mobile browser chrome). The background image is served in a smaller, mobile-optimized format (WebP, maximum 1200px wide) to minimize load time. The CTAs stack vertically with the WhatsApp button first (prioritizing the primary conversion action on mobile where users have immediate access to WhatsApp).

---

## 10. Gallery & Showcase Strategy

The gallery is where branding becomes business. The visual quality and organization of the gallery section directly determines whether a visitor becomes a booked client. The following strategy maximizes both visual impact and booking conversion.

**Masonry Grid Architecture:** The masonry layout is implemented using CSS columns (3-column on desktop, 2-column on tablet, 1-column on mobile) rather than JavaScript masonry libraries, keeping the implementation lightweight and eliminating layout calculation JavaScript. Images break naturally across columns with consistent horizontal gap (16px) and vertical spacing achieved through each item's bottom margin. On larger screens, the left column displays tall portrait images (full-arm designs), the center column alternates standard and tall images, and the right column uses shorter landscape images (hand close-ups, detail shots), creating a varied rhythm that prevents visual monotony.

**Category Filter Implementation:** The filter bar uses a controlled `activeFilter` state in the parent `GallerySection` component. Each `GalleryCard` receives a `category` prop. When the filter state changes, cards with non-matching categories are smoothly hidden using CSS `opacity: 0` and `scale: 0.95` transitions with a 200ms duration, while matching cards maintain full visibility. This creates a smooth filter animation without needing an animation library. The filter state is also reflected in the URL query parameter (`/gallery?category=bridal`) enabling direct deep linking to filtered gallery views.

**Image Optimization Pipeline:** Gallery images represent the heaviest page performance burden on HENNA. The optimization strategy uses multiple layers: original high-resolution photographs are stored at their full quality in the assets directory, Vite's image optimization plugin generates WebP versions at three sizes (thumbnail: 400px wide, standard: 800px wide, full: 1600px wide), the gallery grid uses the `srcset` attribute with the standard size as default, and the lightbox viewer uses the full-size version loaded on-demand. All gallery images are `loading="lazy"` with the first 6 images on the page using `loading="eager"` to ensure above-the-fold images appear immediately.

**Lightbox Behavior:** Opening a gallery image in the lightbox locks the page scroll, displays the full-resolution image with a dark background overlay, shows the design category as a gold label, and presents the WhatsApp CTA button as an overlay element. The lightbox supports keyboard navigation (arrow keys for previous/next, escape to close), swipe gestures on mobile, and a close button. The pre-filled WhatsApp message for lightbox CTA buttons includes a reference to the specific image category: "Hi! I'd love a [Bridal/Arabic/Floral/Indian] mehndi design like the one I saw in your gallery."

**Gallery Content Organization:** The full gallery is organized into four primary category pages, each functioning as a standalone portfolio section. The `/gallery/bridal` section presents the most elaborate and visually impressive designs first (sorted by design complexity and photograph quality, not by date). The `/gallery/arabic` section showcases the clean, geometric Arabic style designs that are most popular for Eid and casual events. The `/gallery/floral` section presents the delicate floral patterns popular for contemporary clients. The `/gallery/indian` section showcases traditional intricate Indian bridal patterns.

---

## 11. Booking Flow Breakdown

The HENNA booking flow is designed around a core insight: for personal service businesses in South Asian cultural contexts, booking happens through conversation, not through automated checkout. The platform's role is to generate the initial inquiry — the conversation itself (and the confirmation) happens on WhatsApp.

**Primary Flow — WhatsApp Initiated:** A visitor lands on any page → sees the "Book via WhatsApp" CTA → taps it → WhatsApp opens with a pre-filled message → the artist receives the inquiry and responds → the booking is confirmed through WhatsApp conversation. This flow has the lowest friction of any path and will account for the majority of bookings. The pre-filled message content varies based on where on the site the user clicked the WhatsApp button, providing useful context to the artist. A button in the hero section pre-fills a general inquiry. A button in the bridal gallery section pre-fills a bridal-specific inquiry. A button next to a specific package pre-fills a message naming that package.

**Secondary Flow — Form Initiated:** A visitor who prefers structured communication uses the `/booking` page form → fills in service type, date, location, and design preferences → submits the form → receives an automated acknowledgment by email → the artist follows up via WhatsApp or email within a few hours. This flow serves clients who are more comfortable with forms (often older clients or corporate event organizers) and provides the artist with structured intake data.

**Contextual WhatsApp CTAs:** Every major section of the website contains a WhatsApp CTA button, but each one carries context-specific messaging. The gallery lightbox CTA references the design style being viewed. The package cards CTA references the specific package tier. The festive campaign banner CTA references the specific offer ("I'm interested in your Eid Special package"). This context enrichment makes the artist's WhatsApp inbox much more informative — she knows immediately why each client is contacting her, enabling faster and more relevant responses.

**UTM Tracking in WhatsApp Links:** All WhatsApp CTA links include UTM parameters that allow the website analytics to track which section of the site drives the most booking inquiries. This data enables ongoing optimization of CTA placement and messaging. While UTM parameters are not natively tracked by WhatsApp, they are captured in the website analytics as outbound click events before the WhatsApp redirection.

---

## 12. Service Package Strategy

The package strategy balances transparency (giving clients enough pricing information to self-qualify) with flexibility (not locking the artist into rigid pricing for custom work).

**Package Tier 1 — Essentials:** Designed for individual casual mehndi, Eid designs, and simple event guests. Covers one person, small to medium design complexity, 20–45 minute session, single-hand or both-hand options. Price range presented as "Starting from ₹X" with a clear explanation that complexity and design size affect final pricing. This tier is the highest-volume entry point and serves Eid customers, casual event guests, and first-time clients.

**Package Tier 2 — Premium:** Designed for elaborate individual designs, pre-bridal events, and clients who want full arms or legs. Covers one person, high-complexity designs, 60–90 minute session, includes design consultation. Price range presented with the same "starting from" approach plus an explanation of what increases the price (back-of-hand extension, feet addition, full-arm coverage). This tier serves regular clients, bridesmaids, and pre-wedding events.

**Package Tier 3 — Signature Bridal:** The flagship service designed for the bride. Full bridal mehndi for both hands and feet, custom design consultation, seated session of 3–5 hours, the artist's full attention dedicated to one client. Priced at the premium end with an explicit quality justification ("Your bridal mehndi is a once-in-a-lifetime experience — this package ensures it's perfect"). Home service is standard at this tier. This tier is the primary revenue driver and portfolio content generator.

**Group & Event Add-On:** Any of the above tiers can be extended to cover multiple guests at group event pricing (discounted per-person rate for 5+ guests). Group bookings require a confirmed booking form submission (not just a WhatsApp inquiry) to manage logistics.

**Custom Package Enquiry:** A clear "None of these fit? Let's talk" section at the bottom of the packages page routes unusual requests (destination weddings, large corporate events, product photoshoot mehndi) to a WhatsApp conversation.

---

## 13. State Management Architecture

HENNA's state management needs are deliberately minimal, reflecting its nature as a personal brand website rather than a data-intensive application. Over-engineering the state management for a site of this type would add complexity without benefit.

**Local Component State** handles the vast majority of UI interactions. The gallery's `activeFilter` state lives in `GallerySection`. The mobile menu's `isOpen` state lives in `Navbar`. The FAQ's `openQuestion` state lives in `FAQAccordion`. The lightbox's `selectedImage` and `isOpen` state lives in `GalleryLightbox`. The booking form's field values and validation state live in `BookingForm`. All of this is managed with `useState` and, for the booking form, `useReducer`. No global state library is needed for any of these.

**React Context** is used for two genuinely cross-cutting concerns. A `ThemeContext` (even though the site is dark-mode-only, this is useful for future light mode addition or theme customization features) provides the active theme tokens to all components. A `NotificationContext` provides the global toast notification system used to show the booking form submission success message.

**Form State Management:** The booking form uses `react-hook-form` for field registration, validation, and submission handling. This is lighter-weight than building custom form state management and provides excellent integration with TypeScript for typed form values.

**No External State Library:** Redux, Zustand, Jotai, and similar libraries are explicitly not needed for this project. Adding any of them would introduce unnecessary complexity and bundle weight for a use case that React's built-in primitives handle completely.

---

## 14. Responsive Breakpoints

HENNA is built mobile-first, meaning all base styles are written for mobile viewports and media queries progressively enhance the layout for larger screens. This is not just a development principle — it reflects the actual usage pattern where the majority of visitors arrive from mobile via Instagram or WhatsApp.

The breakpoint system uses Tailwind CSS's default scale with specific layout behaviors at each breakpoint. The `sm` breakpoint at 640px covers larger phones in landscape and small tablets, where the single-column layout begins to allow two-column arrangements for service cards. The `md` breakpoint at 768px covers tablets in portrait and is the primary breakpoint where the gallery transitions from 1-column to 2-column masonry. The `lg` breakpoint at 1024px covers tablets in landscape and small laptops, where the full 3-column masonry gallery appears and the desktop navigation replaces the mobile hamburger menu. The `xl` breakpoint at 1280px covers standard desktops with the full layout at maximum design fidelity. The `2xl` breakpoint at 1536px applies maximum content width constraints (max-w-7xl) to prevent content from stretching too wide on large monitors.

**Critical Mobile Behaviors:** The hero section uses `100dvh` (dynamic viewport height) to ensure full-screen display on iOS Safari without the URL bar causing a content overflow issue. All WhatsApp CTA buttons are minimum 48px tall on mobile to meet touch target accessibility requirements. The gallery filter bar on mobile becomes a horizontally scrollable row so all category filters are accessible without wrapping to multiple lines. The booking form fields use `font-size: 16px` minimum to prevent iOS from auto-zooming on input focus.

---

## 15. UI/UX Design System

The HENNA design system is built around a single unified aesthetic principle: *luxury in restraint*. Every visual decision reinforces the idea that premium service is characterized by what you don't show as much as by what you do. Negative space, precise typography, and a controlled color palette communicate quality more effectively than ornate complexity.

**Component Philosophy:** All components are built to be reusable but not over-abstracted. A `PackageCard` used on the home page and on the `/packages` page is the same component with the same props interface — it does not need to be split into separate variants. Components receive their visual character from the design system tokens (colors, spacing, typography) rather than from inline style overrides, ensuring that a global palette change propagates correctly to all components.

**Visual Language:** The platform's visual language uses three primary tools: high-quality photography (the artist's mehndi work as the primary visual content), typographic hierarchy (elegant serif display fonts over clean sans-serif body text), and gold accent elements (borders, dividers, CTA button backgrounds, section headers) that create a consistent luxury signal without becoming heavy-handed.

**Spatial Design:** Generous whitespace (even within the dark background palette) is a key luxury signal. Section padding is deliberately large. Card content has breathing room. The gallery images are not packed edge-to-edge — they have gaps that allow each design to be appreciated individually. This spatial generosity communicates confidence and premium positioning.

---

## 16. Accessibility & SEO

**Accessibility Standards:** HENNA targets WCAG 2.1 AA compliance. The dark background with beige/gold text combination requires careful contrast checking — the primary concern is ensuring that the gold accent color (#C9A84C or similar) achieves the minimum 4.5:1 contrast ratio against the dark background when used for body text, while it may be used more liberally for large display headings where the 3:1 ratio applies. All interactive elements (buttons, filter tabs, gallery cards, accordion toggles) have visible focus states styled with a gold outline that matches the brand palette. All gallery images include descriptive `alt` text describing the design style and type (e.g., "Full hand bridal mehndi with intricate Indian floral patterns and wrist details").

The mobile navigation menu is properly managed for keyboard and screen reader users with `aria-expanded`, `aria-controls`, and focus management on open/close. The lightbox traps focus within it when open and returns focus to the triggering gallery card on close. The FAQ accordion uses the correct button/region ARIA pattern.

**SEO Strategy:** The HENNA platform targets a specific set of local and category SEO terms. The homepage targets broad terms like "professional mehndi artist [city]" and "henna artist near me." The gallery category pages target specific style terms like "Arabic mehndi designs," "bridal mehndi ideas," and "floral henna patterns." The packages page targets commercial intent queries like "bridal mehndi price [city]" and "henna artist booking [city]."

Each page has a unique `<title>`, `<meta description>`, and Open Graph tags. Gallery category pages have unique `h1` headings describing the design category. The website URL structure (`/gallery/bridal`, `/gallery/arabic`) creates clean, crawlable paths for each design category. The artist's name and location are included in the homepage metadata and footer, supporting local SEO signals.

Image SEO uses descriptive filenames (`bridal-mehndi-full-hands-indian-style.webp` rather than `IMG_4821.jpg`) and proper `alt` text. A `sitemap.xml` is generated on deployment and submitted to Google Search Console.

---

## 17. Animations & Interaction Notes

Animations in HENNA serve the premium brand feeling — they should feel deliberate, graceful, and in harmony with the hand-crafted nature of the subject matter. No animation should feel mechanical, abrupt, or gimmicky.

**Scroll Reveal Animations:** Sections enter the viewport with a subtle fade-up animation (opacity: 0 to 1, translateY: 20px to 0) over 600ms with ease-out timing. This gives the site a flowing, cinematic quality as the visitor scrolls through the narrative. The `ScrollReveal` wrapper component uses the Intersection Observer API to trigger these animations without a large animation library dependency. Staggered delays are applied to sibling elements (service cards, gallery images, testimonial cards) so they appear in sequence rather than all at once.

**Gallery Card Hover Effect:** Gallery cards scale very subtly (1.02× transform) with a smooth 250ms transition while a semi-transparent dark overlay fades in over the image with a centered category label and "View Design" indicator. This hover state is clean and non-distracting — it reveals information rather than creating visual noise.

**WhatsApp Button Pulse:** The primary WhatsApp CTA buttons on mobile use a subtle pulsing animation (a gentle ring expansion effect, similar to a ripple) to draw attention to the most important conversion action. This animation runs continuously but at low intensity (2-second cycle, very subtle opacity change) so it attracts attention without being annoying.

**Lightbox Entry Animation:** The lightbox enters with a scale-in effect (from 0.95 to 1.0) combined with a background overlay fade, creating a smooth, intentional expansion rather than an abrupt appearance.

**Filter Transition:** When gallery filter tabs change, items fade out with a slight scale-down (0.95×) before the new filtered set fades in with scale-up (0.95× to 1.0). The transition timing is 200ms, fast enough to feel responsive but slow enough to be perceived as intentional.

**Mobile Touch Behaviors:** Swipe gestures are supported on the testimonial carousel (left/right swipe changes testimonial) and in the lightbox (left/right swipe navigates between gallery images). Touch feedback uses `active:` state styles to provide immediate visual response to touch actions.

---

## 18. Dark Theme System

HENNA's dark theme is not a mode — it is the brand. The dark luxury aesthetic is the site's primary and only visual identity. However, the implementation uses the CSS custom properties system properly, because this approach also enables future theming flexibility and ensures consistent token usage across all components.

**CSS Variable Architecture:** All color values are defined as CSS custom properties on the `:root` element in `globals.css`. Component styles reference these variables rather than hardcoded hex values. This means the site's entire color system can be adjusted by changing the root variable values — useful for seasonal theming (a lighter, more festive palette for Eid campaigns, for example, could be applied by swapping the variable values).

**Background Hierarchy:** The dark palette uses three distinct background levels to create depth without relying on shadows. The base background (`--color-bg-base: #0A0A0A`) is used for the full page background. The elevated surface (`--color-bg-elevated: #141414`) is used for card backgrounds and section differentiation. The raised card (`--color-bg-card: #1C1C1C`) is used for components that need to stand above the elevated surface. This three-level system creates a subtle depth that makes the layout feel structured without heavy shadow use.

**Gold Accent System:** The gold palette has three values — a warm gold (`--color-gold-primary: #C9A84C`) for primary accents and CTA backgrounds, a lighter champagne gold (`--color-gold-light: #E8D5A0`) for text on dark backgrounds requiring high contrast, and a subtle gold tint (`--color-gold-muted: #7A6028`) for decorative borders and dividers. Using these three values consistently across the site creates a cohesive gold system rather than a patchwork of slightly different yellows.

**Text System:** Primary text uses a near-white (`--color-text-primary: #F5F0E8`) with a warm tint that harmonizes with the gold accents. Secondary text uses a warm gray (`--color-text-secondary: #A39B8A`) for supporting content. Muted text (`--color-text-muted: #6B6258`) for timestamps, labels, and less critical information.

---

## 19. Lead Generation Strategy

Lead generation on HENNA is synonymous with WhatsApp inquiry generation. Every strategic and design decision is evaluated through the lens of whether it increases the probability of a visitor sending that first WhatsApp message.

**Ubiquitous CTA Presence:** The "Book via WhatsApp" CTA appears in the site header (top-right on desktop, sticky at the bottom on mobile), in the hero section, at the end of each gallery section, within each package card, in the festive campaign banners, in the testimonials section ("Inspired? Book yours."), in the FAQ section ("Still have questions? Ask me on WhatsApp"), and as the final closing CTA on every page. This ubiquity ensures that whenever a visitor is ready to act, the CTA is within immediate reach.

**Pre-filled Message Strategy:** Different CTAs across the site use different pre-filled WhatsApp message texts, providing the artist with immediate context and removing the "blank page" barrier for the client. A visitor who clicks "Book via WhatsApp" from the bridal gallery pre-fills "Hi! I saw your bridal designs and I'd love to discuss a booking for my wedding mehndi." This removes the client's mental effort of composing an opening message and increases the likelihood of the WhatsApp session opening actually resulting in a sent message.

**Social Proof as Lead Warming:** The testimonials section is positioned strategically between the packages section and the contact/booking section. This placement means that visitors who have seen pricing (and may have a brief moment of price hesitation) encounter the most compelling social proof immediately before reaching the final booking CTA. This sequence is designed to resolve the "but is she really that good?" objection before the booking ask.

**Festive Campaign Urgency:** Campaign banners use mild urgency language ("Limited Eid booking slots — enquire now") to motivate timely action from visitors who might otherwise delay their decision. The urgency is genuine (the artist does have limited availability during peak festive seasons) and therefore honest.

**Instagram Link Consistency:** The website's Instagram link in the footer and contact section deepens the visitor relationship with the artist's ongoing content rather than serving as an exit path. Visitors who follow the artist on Instagram from the website become a long-term warm audience for future campaign promotions.

---

## 20. Trust Signal Strategy

Trust is the prerequisite for booking. For a personal service business, trust signals are as important as any product feature. HENNA builds trust through multiple complementary layers.

**Portfolio Quality as Primary Trust:** The highest-impact trust signal is simply the quality and volume of the gallery. A visitor who sees 60+ high-quality photographs of mehndi work across multiple style categories naturally concludes that this is an experienced, skilled professional. Portfolio presentation quality is a trust proxy — if the artist cares enough to photograph and present her work this carefully, she is likely to care just as much about the work itself.

**Testimonials with Specificity:** Generic 5-star reviews ("Amazing work! Highly recommend!") provide minimal trust signal. HENNA's testimonials are curated for specificity: client name, occasion type, design description, and at least one specific detail about the experience ("She arrived 15 minutes early for my bridal mehndi and spent 4 hours making sure every detail was perfect"). Specific testimonials are more credible because they are harder to fabricate and demonstrate that real transactions occurred.

**Artist Story and Persona:** The about/intro section (within the home page) presents the artist as a person with a specific background, training, and artistic philosophy. A brief artist bio, a personal photograph (ideally of the artist at work), and a statement about her approach to mehndi creates a human connection that generic service listings completely lack. Clients book henna artists not just for their skill but for their energy and trustworthiness — the artist bio begins building that connection digitally.

**Service Clarity as Trust:** Clear, specific service descriptions with honest "starting from" pricing communicate professionalism and fairness. Hidden or vague pricing creates anxiety. A clear FAQ that honestly addresses cancellation policy, home service charges, and what to do if a client is unhappy demonstrates that the artist operates with professional standards.

**Media & Social Proof Badges:** If applicable, Instagram follower count (a large following is a trust signal for creative professionals), press mentions, or recognition in local community events provide external validation badges that can be displayed as small social proof elements near the booking section.

---

## 21. Performance Optimization Strategy

Performance is the invisible design element. A gallery-heavy site on mobile networks must be relentlessly optimized to ensure that image loading time does not frustrate visitors before the work can make its impression.

**Image Optimization as the Primary Lever:** All photographic content is converted to WebP format, which provides superior compression with equivalent visual quality compared to JPEG. Vite's build process handles this automatically with the `vite-plugin-imagemin` configuration. Each image is served at the minimum size required for its display context — gallery thumbnails at 400px wide, lightbox images at 1600px wide — using `srcset` and `sizes` attributes to let the browser select the most appropriate resolution.

**Lazy Loading Architecture:** Gallery images below the initial viewport use `loading="lazy"` with `decoding="async"` for truly non-blocking rendering. The first 6 gallery images are `loading="eager"` and are preloaded with `<link rel="preload">` tags in the document head to ensure immediate display. The hero background image is also preloaded as a high-priority resource.

**Code Splitting:** React.lazy() and Suspense are used to code-split the gallery, booking form, and lightbox components. These are all loaded on-demand — the initial page bundle only contains the above-the-fold hero and navigation components. This reduces Time to Interactive on the landing page by deferring heavy components until they are actually needed.

**Font Loading:** Google Fonts (or self-hosted equivalents) are preconnected using `<link rel="preconnect">` in the document head. The display font is loaded with `font-display: swap` to prevent invisible text during font loading. Only the weights and subsets actually used on the site are loaded (no full font family downloads).

**Asset Serving from CDN:** Vercel's global CDN automatically handles asset distribution. All static assets (images, fonts, JavaScript bundles) are served from edge locations closest to the visitor, dramatically reducing asset transfer latency compared to a single-server origin.

---

## 22. Deployment Architecture

HENNA deploys on Vercel, which provides an optimal deployment environment for React applications with zero configuration overhead, automatic HTTPS, global CDN, and serverless function support for the lightweight backend needs.

The deployment pipeline is straightforward: the source repository is connected to Vercel, which triggers an automatic build and deployment on every push to the `main` branch. Preview deployments are created for every pull request, enabling review of design changes before merging to production. Environment variables (WhatsApp phone number, form submission email address, any API keys for future integrations) are stored in Vercel's encrypted environment variable system.

The booking form submissions are handled by a single Vercel serverless function at `/api/booking`. This function validates the form data, sends an email notification to the artist using a transactional email service (Resend or SendGrid), and returns a success/error response to the client. No database is required — the artist manages bookings through email and WhatsApp conversation threads.

The Instagram integration is purely client-side — a simple link to the artist's Instagram profile, not an API-based feed embed. This avoids the complexity and rate-limiting issues of the Instagram Graph API and keeps the site dependency-free from third-party data APIs.

---

## 23. Future Scaling Roadmap

**Phase 1 — Core Launch (Months 1–2):** Premium landing page with all hero sections, gallery with masonry grid and lightbox, filter by category, packages section, booking form, WhatsApp CTAs throughout, testimonials, FAQ, mobile-optimized responsive design, Vercel deployment.

**Phase 2 — Gallery Enhancement (Months 3–4):** Expanded gallery with 60+ designs organized into subcategories, Instagram feed integration showing the artist's most recent posts, video showcase section for time-lapse mehndi application videos, client before/after showcase format.

**Phase 3 — Booking Intelligence (Months 5–8):** Availability calendar showing the artist's confirmed booking dates to help clients self-qualify before inquiring, a more structured booking request form that captures all required information for a custom quote, automated WhatsApp message templates for common inquiry types.

**Phase 4 — E-Commerce (Year 2):** Product store for online ordering of henna cones and kits with integrated payment (Razorpay for Indian market), order tracking via WhatsApp notification, subscription box for regular customers who want fresh henna supplies.

**Phase 5 — Brand Expansion (Year 2–3):** Team management features if the artist expands to a team of artists, multiple service area pages for different cities/regions, a blog or tutorial section for organic content SEO, a dedicated bridal planning guide content section.

---

## 24. Suggested Folder Structure

```
henna-website/
├── public/                         # Static public assets
│   ├── favicon.ico
│   ├── og-image.jpg                # Open Graph preview image
│   ├── manifest.json               # PWA manifest (future)
│   └── fonts/                      # Self-hosted font files
│
├── src/
│   ├── components/                 # Reusable UI Components
│   │   ├── atoms/                  # Primitive UI elements
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Badge/
│   │   │   ├── SectionHeader/
│   │   │   ├── DecorativeRule/
│   │   │   ├── StarRating/
│   │   │   ├── Overlay/
│   │   │   └── ScrollReveal/
│   │   ├── molecules/              # Composed UI components
│   │   │   ├── WhatsAppCTA/
│   │   │   ├── ServiceCard/
│   │   │   ├── PackageCard/
│   │   │   ├── TestimonialCard/
│   │   │   ├── ProductCard/
│   │   │   ├── CampaignBanner/
│   │   │   ├── GalleryCard/
│   │   │   ├── GalleryFilter/
│   │   │   └── AccordionItem/
│   │   ├── organisms/              # Feature-level components
│   │   │   ├── HeroSection/
│   │   │   ├── GalleryGrid/
│   │   │   ├── GalleryLightbox/
│   │   │   ├── BookingForm/
│   │   │   ├── TestimonialCarousel/
│   │   │   ├── PackagesSection/
│   │   │   ├── ServicesSection/
│   │   │   ├── ProductsShowcase/
│   │   │   ├── FAQAccordion/
│   │   │   └── ContactSection/
│   │   └── layout/                 # Page layout components
│   │       ├── Navbar/
│   │       ├── MobileMenu/
│   │       ├── Footer/
│   │       └── PageWrapper/
│   │
│   ├── pages/                      # Route-level page components
│   │   ├── Home/
│   │   │   ├── HomePage.tsx
│   │   │   └── sections/
│   │   │       ├── HeroSectionWrapper.tsx
│   │   │       ├── ServicesOverview.tsx
│   │   │       ├── GalleryPreview.tsx
│   │   │       ├── CampaignSection.tsx
│   │   │       ├── PackagesOverview.tsx
│   │   │       ├── ProductsPreview.tsx
│   │   │       ├── TestimonialsSection.tsx
│   │   │       ├── FAQSection.tsx
│   │   │       └── ContactCTA.tsx
│   │   ├── Gallery/
│   │   │   ├── GalleryPage.tsx
│   │   │   ├── BridalGallery.tsx
│   │   │   ├── ArabicGallery.tsx
│   │   │   ├── FloralGallery.tsx
│   │   │   └── IndianGallery.tsx
│   │   ├── Services/
│   │   │   └── ServicesPage.tsx
│   │   ├── Packages/
│   │   │   └── PackagesPage.tsx
│   │   ├── Products/
│   │   │   └── ProductsPage.tsx
│   │   ├── Booking/
│   │   │   └── BookingPage.tsx
│   │   └── Contact/
│   │       └── ContactPage.tsx
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── useGalleryFilter.ts     # Gallery filter state management
│   │   ├── useScrollReveal.ts      # Intersection Observer animation hook
│   │   ├── useLightbox.ts          # Lightbox open/close/navigation
│   │   ├── useWhatsApp.ts          # WhatsApp URL construction helpers
│   │   ├── useScrollLock.ts        # Body scroll lock for modal/lightbox
│   │   └── useMediaQuery.ts        # Responsive breakpoint detection
│   │
│   ├── services/                   # External service integrations
│   │   └── booking/
│   │       ├── bookingApi.ts       # Booking form submission handler
│   │       └── types.ts            # Booking form TypeScript types
│   │
│   ├── contexts/                   # React Context providers
│   │   ├── ThemeContext.tsx
│   │   └── NotificationContext.tsx
│   │
│   ├── types/                      # TypeScript type definitions
│   │   ├── gallery.types.ts        # Gallery image and category types
│   │   ├── services.types.ts       # Service and package types
│   │   ├── booking.types.ts        # Booking form types
│   │   └── products.types.ts       # Product types
│   │
│   ├── utils/                      # Utility functions
│   │   ├── whatsapp.utils.ts       # WhatsApp URL builder
│   │   ├── image.utils.ts          # Image optimization helpers
│   │   ├── animation.utils.ts      # Animation timing helpers
│   │   └── seo.utils.ts            # SEO meta tag helpers
│   │
│   ├── data/                       # Static content data files
│   │   ├── gallery.data.ts         # Gallery image manifest
│   │   ├── services.data.ts        # Service descriptions
│   │   ├── packages.data.ts        # Package definitions and pricing
│   │   ├── products.data.ts        # Product information
│   │   ├── testimonials.data.ts    # Testimonial content
│   │   ├── faq.data.ts             # FAQ questions and answers
│   │   └── campaigns.data.ts       # Active campaign content
│   │
│   ├── styles/                     # Global styles
│   │   ├── globals.css             # Tailwind base + CSS variables
│   │   ├── theme.css               # Dark theme CSS variable definitions
│   │   └── animations.css          # Keyframe animation definitions
│   │
│   ├── assets/                     # Design assets
│   │   ├── images/
│   │   │   ├── gallery/            # Portfolio photographs (organized by category)
│   │   │   │   ├── bridal/
│   │   │   │   ├── arabic/
│   │   │   │   ├── floral/
│   │   │   │   └── indian/
│   │   │   ├── campaigns/          # Festive campaign poster images
│   │   │   ├── products/           # Product photographs
│   │   │   ├── hero/               # Hero section background images
│   │   │   └── artist/             # Artist portrait and workspace images
│   │   └── icons/                  # Custom SVG icons and decorative elements
│   │
│   ├── config/                     # Application configuration
│   │   ├── site.config.ts          # Site-wide constants (phone, socials, brand)
│   │   └── seo.config.ts           # SEO defaults
│   │
│   ├── App.tsx                     # Root component and router
│   └── main.tsx                    # Application entry point
│
├── api/                            # Vercel Serverless Functions
│   └── booking.ts                  # Booking form submission handler
│
├── design-references/              # UI/UX design reference images
│   ├── 01 Home Page/
│   ├── 02 Services Page/
│   ├── 03 Gallery Page/
│   ├── 04 Packages Page/
│   ├── 05 Products Page/
│   ├── 06 Booking Page/
│   └── 07 Contact Page/
│
├── docs/                           # Project documentation
│   ├── brand-guide.md              # Color, typography, visual identity
│   ├── content-guide.md            # Content writing guidelines
│   └── deployment.md               # Deployment instructions
│
├── .env.example                    # Environment variable template
├── .gitignore
├── index.html
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 25. Suggested Component Hierarchy

```
App
├── Router
│   ├── Navbar
│   │   ├── Logo (HENNA wordmark)
│   │   ├── NavLinks (desktop)
│   │   ├── WhatsAppCTA (header persistent button)
│   │   └── MobileMenuToggle → MobileMenu
│   │       └── NavLinks (mobile fullscreen)
│   │
│   ├── HomePage
│   │   ├── HeroSection
│   │   │   ├── HeroBackground (image + overlay)
│   │   │   ├── HeroBrandmark
│   │   │   ├── HeroTagline
│   │   │   └── HeroCTA
│   │   │       ├── WhatsAppCTA (primary)
│   │   │       └── Button (explore gallery)
│   │   ├── ServicesOverview
│   │   │   └── ServiceCard ×4 (Bridal, Arabic, Floral, Indian)
│   │   ├── GalleryPreview
│   │   │   ├── SectionHeader
│   │   │   ├── GalleryGrid (preview, 6 images)
│   │   │   │   └── GalleryCard ×6
│   │   │   └── Button (View Full Gallery)
│   │   ├── CampaignSection
│   │   │   └── CampaignBanner ×1-2
│   │   ├── PackagesOverview
│   │   │   ├── SectionHeader
│   │   │   ├── PackageCard ×3 (Essentials, Premium, Signature)
│   │   │   └── Button (View All Packages)
│   │   ├── ProductsPreview
│   │   │   ├── SectionHeader
│   │   │   └── ProductCard ×3-4
│   │   ├── TestimonialsSection
│   │   │   ├── SectionHeader
│   │   │   └── TestimonialCarousel
│   │   │       └── TestimonialCard ×N
│   │   ├── FAQSection
│   │   │   ├── SectionHeader
│   │   │   └── FAQAccordion
│   │   │       └── AccordionItem ×5 (preview)
│   │   └── ContactCTA
│   │       └── WhatsAppCTA (final, large)
│   │
│   ├── GalleryPage (/gallery)
│   │   ├── GalleryFilter (All, Bridal, Arabic, Floral, Indian)
│   │   ├── GalleryGrid (full, masonry)
│   │   │   └── GalleryCard ×N
│   │   └── GalleryLightbox (portal, conditional render)
│   │       ├── LightboxImage
│   │       ├── LightboxNav (prev/next)
│   │       ├── CategoryBadge
│   │       └── WhatsAppCTA (book this style)
│   │
│   ├── ServicesPage (/services)
│   │   └── ServiceDetail ×4
│   │       ├── ServiceImageGallery
│   │       ├── ServiceDescription
│   │       └── WhatsAppCTA
│   │
│   ├── PackagesPage (/packages)
│   │   ├── PackageCard ×3 (full detail)
│   │   ├── GroupPackageSection
│   │   └── CustomEnquirySection
│   │       └── WhatsAppCTA
│   │
│   ├── ProductsPage (/products)
│   │   └── ProductGrid
│   │       └── ProductCard ×N
│   │
│   ├── BookingPage (/booking)
│   │   ├── BookingForm
│   │   │   ├── BookingField ×N
│   │   │   └── BookingSubmitButton
│   │   ├── BookingSuccess (conditional)
│   │   └── WhatsAppCTA (alternative)
│   │
│   └── ContactPage (/contact)
│       ├── ContactInfo
│       └── WhatsAppCTA (large)
│
└── Footer
    ├── FooterBrand
    ├── FooterNav
    ├── SocialLinks
    └── FooterCopyright
```

---

## 26. Suggested Route Structure

```typescript
// src/config/site.config.ts

export const SITE_CONFIG = {
  brand: {
    name: 'HENNA',
    tagline: 'Premium Mehndi Art · Bridal · Festive · Events',
    artistName: 'Sara', // Update with actual artist name
  },
  contact: {
    whatsapp: '+91XXXXXXXXXX',        // Artist's WhatsApp number
    instagram: '@hennabyartistname',   // Instagram handle
    email: 'hello@hennaartist.com',    // Contact email
    serviceArea: 'Mumbai, Maharashtra',
  },
  whatsapp: {
    defaultMessage: "Hi! I visited your website and I'm interested in booking a mehndi appointment.",
    bridalMessage: "Hi! I saw your bridal designs and would love to discuss a booking for my wedding mehndi.",
    eidMessage: "Hi! I'm interested in your Eid Special package. Can you share availability?",
    arabicMessage: "Hi! I love your Arabic mehndi designs. I'd like to book an appointment.",
    groupMessage: "Hi! I'm looking for mehndi for a group event. Can we discuss options?",
  },
} as const;

// src/config/routes.ts

export const ROUTES = {
  HOME: '/',
  GALLERY: '/gallery',
  GALLERY_BRIDAL: '/gallery/bridal',
  GALLERY_ARABIC: '/gallery/arabic',
  GALLERY_FLORAL: '/gallery/floral',
  GALLERY_INDIAN: '/gallery/indian',
  SERVICES: '/services',
  PACKAGES: '/packages',
  PRODUCTS: '/products',
  BOOKING: '/booking',
  CONTACT: '/contact',
  NOT_FOUND: '/404',
} as const;

// React Router v6 configuration
export const routeConfig = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.GALLERY, element: <GalleryPage /> },
  { path: ROUTES.GALLERY_BRIDAL, element: <GalleryPage category="bridal" /> },
  { path: ROUTES.GALLERY_ARABIC, element: <GalleryPage category="arabic" /> },
  { path: ROUTES.GALLERY_FLORAL, element: <GalleryPage category="floral" /> },
  { path: ROUTES.GALLERY_INDIAN, element: <GalleryPage category="indian" /> },
  { path: ROUTES.SERVICES, element: <ServicesPage /> },
  { path: ROUTES.PACKAGES, element: <PackagesPage /> },
  { path: ROUTES.PRODUCTS, element: <ProductsPage /> },
  { path: ROUTES.BOOKING, element: <BookingPage /> },
  { path: ROUTES.CONTACT, element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
];
```

---

## 27. Typography System

HENNA's typography system uses a two-typeface pairing chosen specifically for its ability to communicate luxury, cultural resonance, and artistic identity simultaneously.

**Display Typeface — Cormorant Garamond:** Cormorant Garamond is a modern revival of the classic Garamond typeface in a refined, high-contrast design that radiates elegance and historical depth. Its thin hairline strokes and pronounced thick-to-thin contrast give it a calligraphic quality that resonates with the hand-drawn, artistic nature of mehndi work. It is used for the HENNA wordmark, section headings, and decorative display text. At large sizes, its refined serifs and elegant proportions communicate the premium brand positioning without trying too hard.

**Body Typeface — DM Sans:** DM Sans is a clean, modern geometric sans-serif with excellent readability at small sizes. It contrasts beautifully with Cormorant Garamond's classical elegance while maintaining the overall sophisticated tone. It is used for all body copy, package descriptions, service details, FAQ answers, navigation links, and form labels. Its Regular and Medium weights handle the majority of text use cases.

**Type Scale:** The scale uses a major third ratio from a 16px base. The size tokens are: 12px (xs — micro labels, copyright, fine print), 14px (sm — secondary labels, form helper text), 16px (base — body text), 18px (lg — lead paragraphs, card descriptions), 22px (xl — minor headings, package names), 28px (2xl — section sub-headings), 36px (3xl — section headings), 48px (4xl — major page titles in Cormorant Garamond), 64px (5xl — hero wordmark), and 80px (6xl — oversized decorative display text used sparingly on the landing page).

**Letter Spacing:** Cormorant Garamond headings benefit from slightly increased letter spacing (0.02em to 0.05em) at smaller display sizes to maximize legibility of the thin strokes. The HENNA wordmark uses generous letter spacing (0.15em to 0.20em) for a luxury monogram aesthetic. DM Sans body text uses standard letter spacing.

**Font Loading:** Both typefaces are loaded from Google Fonts with `display: swap`. Critical weights — Cormorant Garamond 300, 400, 600 and DM Sans 400, 500 — are preloaded for optimal first-paint typography.

---

## 28. Color Palette

The HENNA color palette is built on the tension between deep darkness and warm gold — a combination with deep roots in South Asian luxury aesthetics, from gilded manuscripts to embroidered bridal wear.

**Base Dark Palette:**
- Deep Black `#0A0A0A` — Primary page background, the darkest surface
- Rich Dark `#141414` — Section background differentiation, elevated surfaces
- Charcoal `#1C1C1C` — Card backgrounds, raised surface elements
- Dark Gray `#2A2A2A` — Border and separator lines
- Mid Gray `#4A4A4A` — Disabled states, secondary borders

**Gold Accent Palette:**
- Primary Gold `#C9A84C` — Main accent color: CTA buttons, active states, section highlights
- Champagne Gold `#E8D5A0` — Text on dark backgrounds requiring warmth, secondary headings
- Rich Amber `#A67C35` — Hover state for gold buttons, pressed states
- Pale Gold `#F5EDD6` — Very light gold tint for background washes, highlight areas
- Muted Gold `#7A6028` — Decorative borders, subtle dividers, inactive states

**Text Palette:**
- Warm White `#F5F0E8` — Primary text color, body text on dark backgrounds
- Warm Cream `#D4CBB8` — Secondary text, descriptions, supporting copy
- Warm Gray `#A39B8A` — Tertiary text, timestamps, fine print
- Muted `#6B6258` — Placeholder text, disabled content

**Semantic Colors:**
- Success `#4CAF7C` — Form submission success, availability indicators
- Error `#E85C4A` — Form validation errors, unavailability indicators
- WhatsApp Green `#25D366` — Used exclusively on WhatsApp CTA buttons and icons to leverage the brand recognition of WhatsApp's signature color

**Photography Overlay Colors:** Gallery card hover overlays use `rgba(10, 10, 10, 0.72)`. Hero background overlay uses a gradient from `rgba(10, 10, 10, 0.85)` at the bottom to `rgba(10, 10, 10, 0.40)` at the top, prioritizing text legibility at the bottom while preserving image visibility at the top.

---

## 29. Spacing System

The spacing system uses an 8px base grid that provides consistent visual rhythm across all components and layouts.

The scale in practical terms: `4px` is used for the tightest internal element gaps (icon-to-text, badge internal padding). `8px` is the standard internal padding for compact elements (tag padding, tight button sizing). `12px` is the compact component padding for smaller cards and input fields. `16px` is the standard component padding — used in most card interiors, button vertical padding, and grid gaps. `24px` is medium spacing used between related elements within a section and for generous card padding. `32px` is used for component-to-component gaps within a section. `48px` is the standard section padding and the gap between major content blocks within a page. `64px` is the standard section vertical padding (top and bottom) for desktop layouts. `96px` handles hero section padding, major page section separation, and above-the-fold vertical centering. `128px` is used for the hero top padding and large cinematic spacing on the landing page.

**Mobile Spacing Adjustment:** All spacing values above 48px are scaled down by approximately 60% on mobile to prevent excessive vertical space consumption. A section with 96px vertical padding on desktop uses 64px on tablet and 48px on mobile. This scaling is handled through Tailwind's responsive prefix system (`py-12 md:py-16 lg:py-24`).

---

## 30. Iconography Style

HENNA uses a two-layer icon system: functional icons for UI interactions and decorative elements for brand expression.

**Functional Icons — Lucide React:** Navigation icons, close buttons, social media icons (Instagram, WhatsApp), form field indicators, accordion arrows, and gallery controls use Lucide React for consistent 2px stroke-width, rounded cap, 24×24px icons. The functional icon set uses `currentColor` to inherit the text color of their parent context, automatically adapting to gold or white as needed.

**Decorative Brand Elements — Custom SVG:** HENNA's brand identity uses custom SVG decorative elements that evoke mehndi's visual vocabulary without being directly representational. These include a delicate floral corner ornament used in section headers, a thin horizontal rule with a diamond center motif used as a section divider, a subtle paisley silhouette used as a background watermark in the hero section, and leaf/vine motifs used as section dividers. These elements are created as React SVG components with appropriate `viewBox` and CSS variable color references. They should be used sparingly — as accent points of visual richness rather than wallpaper — to maintain the luxury-in-restraint aesthetic.

**WhatsApp Icon Treatment:** The WhatsApp icon on CTA buttons uses the official WhatsApp brand color (`#25D366`) as the icon background with a white phone icon inside, maintaining brand recognition. On primary CTA buttons where the button background is gold, the WhatsApp icon uses a white fill against the gold background.

---

## 31. UI Inspiration References

The HENNA visual direction synthesizes inspiration from several distinct design contexts that represent different aspects of the platform's desired aesthetic.

**Sabyasachi Digital (sabyasachi.com):** The legendary Indian bridal couture brand's website demonstrates how to present handcrafted luxury at digital scale. The dark backgrounds, generous typography in serif fonts, large-format photography, and absence of aggressive CTAs create an atmosphere of quiet luxury that does not pressure — it invites. HENNA should achieve the same quality of atmospheric presence.

**Faraz Manan (farazmanan.com):** Pakistan's leading couture designer's website shows how a personal artist brand can communicate prestige through visual restraint. The full-viewport fashion photography, the minimal navigation, and the editorial layout quality all translate directly to the HENNA context.

**Pinterest Masonry Gallery:** Pinterest's content discovery grid is the direct reference for HENNA's gallery layout. The varying image heights, the absence of hard grid constraints, and the browsing rhythm created by mixed image proportions is exactly what the design gallery should achieve. The dark, luxury-branded version of this layout replaces Pinterest's white utility aesthetic with HENNA's signature palette.

**Boucheron (boucheron.com):** The French luxury jeweler's website demonstrates the use of high-contrast gold accents on deep black backgrounds in a digital context. Their micro-animation quality, the weight of their typography choices, and the considered use of negative space all serve as technical references for how HENNA should execute its dark luxury aesthetic.

**Instagram Festive Promotional Aesthetics:** The artist's own Instagram promotional materials — the Eid booking posters, the festive campaign announcements — are the most culturally specific reference for HENNA. The platform should feel like those promotions, but as an immersive website experience rather than a static image. The bold campaign typography, the festive color overlays, the direct promotional language should all feel like natural extensions of the existing Instagram brand identity.

---

## 32. Full Figma/Frontend Design Handoff Requirements

The design handoff package for HENNA must include comprehensive Figma deliverables organized to enable confident frontend implementation without requiring designer involvement during development.

**Figma File Organization:** The file is organized into five pages. The *Foundations* page contains the complete design token library (colors as Figma variables, typography styles, spacing tokens, shadow styles), icon library, and decorative SVG element library. The *Components* page contains every UI component in all its states (default, hover, active, disabled, loading) and variants (size, color, context), organized in the Atomic Design structure matching the component hierarchy. The *Pages — Mobile* page contains all page designs at 390px viewport width in both the default state and the scrolled state (showing sticky header behavior). The *Pages — Desktop* page contains all page designs at 1440px viewport width. The *Prototype* page contains linked flows for the three primary user journeys: Instagram visitor to booking inquiry, bridal client exploring gallery to WhatsApp contact, and new visitor exploring packages to booking form submission.

**Component Documentation Requirements:** Each component must include all interactive states with labeled callouts. Spacing must be annotated using Figma's measurement tools. Typography must use named styles (not manually specified font sizes). Color fills must use named Figma variables, not hex values. Motion behavior must be documented with timing and easing specifications in a component notes sidebar.

**Design Token Export:** Figma variables should be configured to export as a JSON file following the Style Dictionary format, structured to map directly to the Tailwind configuration's `theme.extend` object and the CSS custom properties defined in `theme.css`.

**Photography Art Direction Brief:** The handoff must include a photography brief documenting the composition, lighting, and styling requirements for new mehndi photography intended for the website. This brief covers: preferred background styles (neutral, dark marble, natural fabric textures), lighting direction (warm, soft side lighting that enhances mehndi color depth), composition preferences (full hands vs. close detail shots, portrait vs. landscape orientation ratios), and post-processing guidelines (warm color grading consistent with the gold-black palette).

---

## 33. Timeline & Sprint Planning

The development schedule is organized into 2-week sprints over an 8-week delivery timeline for the Phase 1 launch.

**Sprint 1 (Weeks 1–2): Foundation & Design System** — Repository setup, Vite + React + TypeScript + Tailwind configuration, CSS variable system implementation, typography system setup, component library scaffolding (atoms layer: Button, Badge, SectionHeader, DecorativeRule), Navbar and Footer layout components, mobile navigation, routing configuration.

**Sprint 2 (Weeks 3–4): Hero & Home Page Core** — HeroSection component with background image and overlay, hero CTA buttons with WhatsApp link logic, ScrollReveal animation wrapper, ServicesOverview section with ServiceCard components, CampaignBanner components, home page scroll narrative assembly.

**Sprint 3 (Weeks 5–6): Gallery System** — GalleryCard component with hover effects, GalleryGrid masonry layout (CSS columns approach), GalleryFilter tab component with animation, GalleryLightbox with keyboard navigation, mobile swipe support, gallery page with category routing, WhatsApp CTA integration in lightbox.

**Sprint 4 (Weeks 7–8): Packages, Booking & Launch** — PackageCard components, PackagesSection assembly, BookingForm with react-hook-form validation, Vercel serverless function for form submission, TestimonialCarousel with mobile swipe, FAQAccordion, ProductsShowcase, ContactSection, full page assembly and responsive polish, performance optimization (image optimization, code splitting), Lighthouse audit and remediation, SEO meta tags, production deployment.

---

## 34. Acceptance Criteria

**Hero Section:** The hero renders at full viewport height on all devices including iOS Safari (tested with `100dvh`). The background image loads within 2 seconds on a 4G connection (image is under 200KB at mobile size). The WhatsApp CTA button opens WhatsApp on mobile with the correct pre-filled message. Text is legible (minimum 4.5:1 contrast ratio verified) against the overlay background. The hero content animation sequence completes gracefully on devices with `prefers-reduced-motion` enabled (no animation, instant appearance).

**Gallery:** The masonry grid displays correctly across all breakpoints (1-column mobile, 2-column tablet, 3-column desktop). Gallery filter transitions complete within 300ms without layout shift or image repainting. The lightbox opens on image tap/click, displays the full-resolution image, and closes correctly on escape key press, overlay click, and mobile swipe-down. The lightbox's WhatsApp CTA pre-fills the category-specific message correctly. All gallery images have descriptive alt text. Images below the fold use lazy loading (verified in Network tab as deferred loading).

**WhatsApp CTA:** Every WhatsApp CTA button on the site opens the correct WhatsApp number with an appropriate pre-filled message. On desktop, the button opens `web.whatsapp.com`. On mobile, the button opens the WhatsApp app directly. The WhatsApp number is configurable in a single location (`site.config.ts`) and propagates correctly to all button instances.

**Booking Form:** The form validates all required fields before submission. The submission triggers the Vercel serverless function successfully (tested with valid and invalid data). The artist receives an email notification with all form data on submission. The user sees the success confirmation screen after successful submission. The form is fully keyboard-navigable and screen-reader accessible.

**Responsive Behavior:** The site renders correctly (no horizontal scroll, no overlapping elements, no broken layouts) at 375px, 768px, and 1440px viewport widths. The mobile navigation menu opens and closes correctly. Touch targets are minimum 48px for all interactive elements on mobile. The gallery filter bar scrolls horizontally on mobile without wrapping.

**Performance:** Lighthouse performance score ≥ 85 on mobile (tested in Chrome DevTools with mobile simulation). Time to Interactive < 3 seconds on simulated 4G connection. No Cumulative Layout Shift (CLS) from image loading (achieved through explicit image dimensions in all `<img>` elements). WebP images are served to supporting browsers. All images have explicit `width` and `height` attributes.

---

## 35. Page Design References

The following section provides the complete image reference placeholder system organized by page. All reference images are stored in the `design-references/` directory at the repository root and follow the naming convention established here.

### Home Page

![Hero Section](design-references/01%20Home%20Page/00%20Hero%20Section.png)

![Services Overview Section](design-references/01%20Home%20Page/01%20Services%20Overview%20Section.png)

![Gallery Preview Section](design-references/01%20Home%20Page/02%20Gallery%20Preview%20Section.png)

![Festive Campaign Banner](design-references/01%20Home%20Page/03%20Festive%20Campaign%20Banner.png)

![Packages Overview Section](design-references/01%20Home%20Page/04%20Packages%20Overview%20Section.png)

![Products Preview Section](design-references/01%20Home%20Page/05%20Products%20Preview%20Section.png)

![Testimonials Section](design-references/01%20Home%20Page/06%20Testimonials%20Section.png)

![FAQ Section](design-references/01%20Home%20Page/07%20FAQ%20Section.png)

![Contact CTA Section](design-references/01%20Home%20Page/08%20Contact%20CTA%20Section.png)

![Home Page Mobile View](design-references/01%20Home%20Page/09%20Home%20Page%20Mobile%20View.png)

---

### Services Page

![Services Page Hero](design-references/02%20Services%20Page/00%20Services%20Page%20Hero.png)

![Bridal Mehndi Service Detail](design-references/02%20Services%20Page/01%20Bridal%20Mehndi%20Service%20Detail.png)

![Arabic Mehndi Service Detail](design-references/02%20Services%20Page/02%20Arabic%20Mehndi%20Service%20Detail.png)

![Floral Mehndi Service Detail](design-references/02%20Services%20Page/03%20Floral%20Mehndi%20Service%20Detail.png)

![Indian Mehndi Service Detail](design-references/02%20Services%20Page/04%20Indian%20Mehndi%20Service%20Detail.png)

![Home Service Information Section](design-references/02%20Services%20Page/05%20Home%20Service%20Information%20Section.png)

---

### Gallery Page

![Gallery Page Header and Filter Bar](design-references/03%20Gallery%20Page/00%20Gallery%20Page%20Header%20Filter%20Bar.png)

![Bridal Gallery Category View](design-references/03%20Gallery%20Page/01%20Bridal%20Gallery%20Category%20View.png)

![Arabic Gallery Category View](design-references/03%20Gallery%20Page/02%20Arabic%20Gallery%20Category%20View.png)

![Gallery Masonry Grid Full View](design-references/03%20Gallery%20Page/03%20Gallery%20Masonry%20Grid%20Full%20View.png)

![Gallery Lightbox View](design-references/03%20Gallery%20Page/04%20Gallery%20Lightbox%20View.png)

![Gallery Lightbox WhatsApp CTA](design-references/03%20Gallery%20Page/05%20Gallery%20Lightbox%20WhatsApp%20CTA.png)

![Gallery Mobile View](design-references/03%20Gallery%20Page/06%20Gallery%20Mobile%20View.png)

---

### Packages Page

![Packages Page Header](design-references/04%20Packages%20Page/00%20Packages%20Page%20Header.png)

![Essentials Package Card](design-references/04%20Packages%20Page/01%20Essentials%20Package%20Card.png)

![Premium Package Card](design-references/04%20Packages%20Page/02%20Premium%20Package%20Card.png)

![Signature Bridal Package Card](design-references/04%20Packages%20Page/03%20Signature%20Bridal%20Package%20Card.png)

![Group and Event Packages Section](design-references/04%20Packages%20Page/04%20Group%20Event%20Packages%20Section.png)

![Custom Request Section](design-references/04%20Packages%20Page/05%20Custom%20Request%20Section.png)

---

### Products Page

![Products Page Header](design-references/05%20Products%20Page/00%20Products%20Page%20Header.png)

![Henna Cones Product Grid](design-references/05%20Products%20Page/01%20Henna%20Cones%20Product%20Grid.png)

![Nail Cones Product Section](design-references/05%20Products%20Page/02%20Nail%20Cones%20Product%20Section.png)

![Product Card Detail View](design-references/05%20Products%20Page/03%20Product%20Card%20Detail%20View.png)

![Product Enquiry WhatsApp CTA](design-references/05%20Products%20Page/04%20Product%20Enquiry%20WhatsApp%20CTA.png)

---

### Booking Page

![Booking Page Hero and Intro](design-references/06%20Booking%20Page/00%20Booking%20Page%20Hero%20Intro.png)

![Booking Form Full View](design-references/06%20Booking%20Page/01%20Booking%20Form%20Full%20View.png)

![Booking Form Service Selection](design-references/06%20Booking%20Page/02%20Booking%20Form%20Service%20Selection.png)

![Booking Form Date and Location](design-references/06%20Booking%20Page/03%20Booking%20Form%20Date%20Location.png)

![Booking Success Confirmation Screen](design-references/06%20Booking%20Page/04%20Booking%20Success%20Confirmation%20Screen.png)

![Booking WhatsApp Alternative CTA](design-references/06%20Booking%20Page/05%20Booking%20WhatsApp%20Alternative%20CTA.png)

![Booking Form Mobile View](design-references/06%20Booking%20Page/06%20Booking%20Form%20Mobile%20View.png)

---

### Contact Page

![Contact Page Full View](design-references/07%20Contact%20Page/00%20Contact%20Page%20Full%20View.png)

![Contact WhatsApp Primary CTA](design-references/07%20Contact%20Page/01%20Contact%20WhatsApp%20Primary%20CTA.png)

![Contact Social Links and Info](design-references/07%20Contact%20Page/02%20Contact%20Social%20Links%20Info.png)

![Contact Page Mobile View](design-references/07%20Contact%20Page/03%20Contact%20Page%20Mobile%20View.png)

---

*End of HENNA Deep Research Report v1.0.0*

*This document represents the complete frontend engineering blueprint and product planning reference for the HENNA platform. It should be reviewed with the artist/client prior to development commencement to confirm visual direction, content priorities, and feature scope. Update this document at the conclusion of each sprint to reflect decisions made during implementation.*
