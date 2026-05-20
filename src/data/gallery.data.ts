import type { GalleryImage } from "../types/gallery.types";
import a01 from "../assets/img/a01.png";
import a02 from "../assets/img/a02.png";
import a03 from "../assets/img/a03.png";
import a04 from "../assets/img/a04.png";
import a05 from "../assets/img/a05.png";

import b01 from "../assets/img/b01.png";
import b02 from "../assets/img/b02.png";
import b03 from "../assets/img/b03.png";
import b04 from "../assets/img/b04.png";
import b05 from "../assets/img/b05.png";
import b06 from "../assets/img/b06.png";

import f01 from "../assets/img/f01.png";
import f02 from "../assets/img/f02.png";
import f03 from "../assets/img/f03.png";
import f04 from "../assets/img/f04.png";

import i01 from "../assets/img/i01.png";
import i02 from "../assets/img/i02.png";
import i03 from "../assets/img/i03.png";
import i04 from "../assets/img/i04.png";
// Using high-quality placeholder images — replace with actual mehndi photography
// Aspect ratios create natural masonry rhythm: portrait for full-arm/back designs,
// landscape for hand close-ups, square for detail shots

export const GALLERY_IMAGES: GalleryImage[] = [
  // Bridal
  {
    id: "b01",
    src: b01,
    alt: "Full hand bridal mehndi with intricate Indian floral patterns and wrist details",
    category: "bridal",
    featured: true,
    aspectRatio: "portrait",
  },
  {
    id: "b02",
    src: b02,
    alt: "Traditional bridal mehndi covering hands and forearms with dense detailing",
    category: "bridal",
    featured: true,
    aspectRatio: "portrait",
  },
  {
    id: "b03",
    src: b03,
    alt: "Traditional Indian bridal mehndi full hands with groom name hidden in design",
    category: "bridal",
    aspectRatio: "portrait",
  },
  {
    id: "b04",
    src: b04,
    alt: "Bridal mehndi on feet with ankle floral and toe motifs",
    category: "bridal",
    aspectRatio: "landscape",
  },
  {
    id: "b05",
    src: b05,
    alt: "Close-up bridal henna showing mandala center and floral wrist detailing",
    category: "bridal",
    aspectRatio: "square",
  },
  {
    id: "b06",
    src: b06,
    alt: "Bridal mehndi close-up showing mandala centre palm design",
    category: "bridal",
    aspectRatio: "square",
  },

  // Arabic
  {
    id: "a01",
    src: a01,
    alt: "Arabic mehndi design with bold floral stems and geometric fills on hand",
    category: "arabic",
    featured: true,
    aspectRatio: "portrait",
  },
  {
    id: "a02",
    src: a02,
    alt: "Modern Arabic mehndi with large rose motifs and shading technique",
    category: "arabic",
    featured: true,
    aspectRatio: "portrait",
  },
  {
    id: "a03",
    src: a03,
    alt: "Arabic floral mehndi on back of hand with finger details",
    category: "arabic",
    aspectRatio: "landscape",
  },
  {
    id: "a04",
    src: a04,
    alt: "Bold Arabic mehndi design with leaf clusters and negative space",
    category: "arabic",
    aspectRatio: "portrait",
  },
  {
    id: "a05",
    src: a05,
    alt: "Simple elegant Arabic mehndi for Eid — single stem floral with shading",
    category: "arabic",
    aspectRatio: "square",
  },

  // Floral
  {
    id: "f01",
    src: f01,
    alt: "Delicate floral mehndi with fine vine details wrapping the wrist",
    category: "floral",
    featured: true,
    aspectRatio: "portrait",
  },
  {
    id: "f02",
    src: f02,
    alt: "Contemporary floral henna with lotus and trailing petals on forearm",
    category: "floral",
    aspectRatio: "portrait",
  },
  {
    id: "f03",
    src: f03,
    alt: "Minimalist floral mehndi design — single bloom with fine leaf details",
    category: "floral",
    aspectRatio: "landscape",
  },
  {
    id: "f04",
    src: f04,
    alt: "Bohemian floral henna with wildflower clusters on hand and wrist",
    category: "floral",
    aspectRatio: "square",
  },

  // Indian
  {
    id: "i01",
    src: i01,
    alt: "Traditional Indian mehndi with peacock motif and intricate filling on both hands",
    category: "indian",
    featured: true,
    aspectRatio: "portrait",
  },
  {
    id: "i02",
    src: i02,
    alt: "Full Indian bridal mehndi with fine line work and dense floral patterns",
    category: "indian",
    aspectRatio: "portrait",
  },
  {
    id: "i03",
    src: i03,
    alt: "Indian mehndi with traditional kalash and mango motifs on palm",
    category: "indian",
    aspectRatio: "landscape",
  },
  {
    id: "i04",
    src: i04,
    alt: "Rajasthani-inspired Indian mehndi with elephant and floral border motifs",
    category: "indian",
    aspectRatio: "portrait",
  },
];

export const FEATURED_GALLERY = GALLERY_IMAGES.filter(
  (img) => img.featured,
).slice(0, 8);
