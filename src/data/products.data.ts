import type { Product } from "../types/products.types";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    category: "henna-cones",
    name: "Natural Henna Cones — Classic Brown",
    description:
      "Pure, chemical-free henna cones made from 100% natural henna powder. Rich, dark stain with smooth flow — the same cones used in every professional session.",
    features: [
      "100% natural ingredients",
      "Chemical & PPD free",
      "Rich dark brown stain",
      "Smooth, consistent flow",
      "Pack of 12 cones",
    ],
    price: "₹450 per pack",
    imageUrl:
      "https://i.pinimg.com/736x/92/3f/3b/923f3b3a6ded6526a509e6339c7c8f09.jpg",
    badge: "Bestseller",
    whatsappMessage:
      "Hi! I'd like to order the Natural Henna Cones (Classic Brown). Can you confirm availability and delivery?",
  },
  {
    id: "p2",
    category: "henna-cones",
    name: "Natural Henna Cones — Midnight Black",
    description:
      "Deep, rich black henna cones for bold Arabic and contemporary designs. Made with natural ingredients — no harmful chemicals, no skin irritation.",
    features: [
      "100% natural black henna",
      "Deep, opaque finish",
      "Ideal for Arabic and bold designs",
      "Long-lasting stain",
      "Pack of 12 cones",
    ],
    price: "₹550 per pack",
    imageUrl:
      "https://herhennas.com/wp-content/uploads/2025/02/1000232007-scaled-2.jpg",
    whatsappMessage:
      "Hi! I'd like to order the Natural Henna Cones (Midnight Black). Can you confirm availability?",
  },
  {
    id: "p3",
    category: "nail-cones",
    name: "Nail Art Cones — Classic Collection",
    description:
      "Professional-grade nail art cones for intricate nail mehndi designs. Fine tip for precision work, rich pigment for lasting colour.",
    features: [
      "Extra-fine application tip",
      "Rich, opaque pigment",
      "Suitable for all nail types",
      "Long-lasting colour",
      "Pack of 8 cones",
    ],
    price: "₹380 per pack",
    imageUrl:
      "https://herhennas.com/wp-content/uploads/2025/02/1000040038-scaled-2.jpg",
    badge: "New",
    whatsappMessage:
      "Hi! I'd like to order the Nail Art Cones. Can you share more details and confirm availability?",
  },
  {
    id: "p4",
    category: "kits",
    name: "Starter Henna Kit",
    description:
      "Everything you need to begin your mehndi journey at home. Curated with the same products used professionally — quality guaranteed.",
    features: [
      "6 natural henna cones",
      "2 nail art cones",
      "Design template booklet",
      "Aftercare instruction card",
      "Practice sheet included",
    ],
    price: "₹750 per kit",
    imageUrl:
      "https://herhennas.com/wp-content/uploads/2025/02/1000040048-scaled-2.jpg",
    badge: "Great Gift",
    whatsappMessage:
      "Hi! I'm interested in the Starter Henna Kit. Can you confirm availability and share delivery details?",
  },
];
