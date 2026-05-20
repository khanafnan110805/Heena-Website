import type { Service } from "../types/services.types";
import { SITE_CONFIG } from "../config/site.config";

export const SERVICES: Service[] = [
  {
    id: "bridal",
    category: "bridal",
    title: "Bridal Mehndi",
    subtitle: "Your once-in-a-lifetime design",
    description:
      "The most intimate and elaborate expression of mehndi artistry — bridal mehndi is a sacred tradition that deserves hours of dedicated attention. Each bridal design is custom-conceived, blending traditional motifs with the bride's personal story.",
    details: [
      "Full hands and feet coverage",
      "Custom design consultation included",
      "Dedicated 3–5 hour session",
      "Groom name hidden in design (optional)",
      "Both palms, back of hands, and feet",
      "Home service standard at this tier",
    ],
    duration: "3–5 hours",
    idealFor: ["Brides", "Mehndi ceremony", "Nikkah"],
    imageUrl:
      "https://i.pinimg.com/1200x/47/6d/db/476ddbbaf91065f93ad0f6888e50e9dc.jpg",
    whatsappMessage: SITE_CONFIG.whatsapp.bridalMessage,
  },
  {
    id: "arabic",
    category: "arabic",
    title: "Arabic Mehndi",
    subtitle: "Bold, modern, and effortlessly elegant",
    description:
      "Arabic mehndi is defined by its open-space aesthetic — large floral motifs, flowing stems, and bold outlines with deliberate negative space. It photographs beautifully and suits both festive occasions and contemporary tastes.",
    details: [
      "One or both hands",
      "Customisable density — minimal to full coverage",
      "Popular for Eid, engagements, and events",
      "Shading technique available on request",
      "Quick application — ideal for events with multiple guests",
    ],
    duration: "30–60 minutes",
    idealFor: ["Eid celebrations", "Engagements", "Casual events"],
    imageUrl:
      "https://i.pinimg.com/736x/d7/1d/59/d71d59c2fa13a2a0f3859e00b87cb1cc.jpg",
    whatsappMessage: SITE_CONFIG.whatsapp.arabicMessage,
  },
  {
    id: "floral",
    category: "floral",
    title: "Floral Mehndi",
    subtitle: "Delicate, contemporary, and deeply personal",
    description:
      "Floral mehndi bridges the traditional and the modern — delicate blooms, trailing vines, and fine-line details create designs that feel both timeless and fresh. Perfect for bridesmaids, sisters of the bride, or anyone who wants something beautiful without full coverage.",
    details: [
      "Fine-line floral technique",
      "Customisable placement — wrist, forearm, hand",
      "Bohemian and minimalist styles available",
      "Pairs beautifully with contemporary bridal looks",
      "Ideal for pre-wedding events and celebrations",
    ],
    duration: "30–75 minutes",
    idealFor: ["Bridesmaids", "Pre-wedding events", "Casual elegance"],
    imageUrl:
      "https://i.pinimg.com/1200x/8b/1d/d1/8b1dd1a6082df033c5708dbb3b273d48.jpg",
    whatsappMessage: SITE_CONFIG.whatsapp.floralMessage,
  },
  {
    id: "indian",
    category: "indian",
    title: "Indian Mehndi",
    subtitle: "Rich tradition, intricate storytelling",
    description:
      "Indian mehndi is the most intricate of all styles — dense, fine-line patterns that fill every inch with meaning. Peacocks, paisleys, mandalas, and floral grids are woven together in a visual language that has been perfected over centuries.",
    details: [
      "Dense, fine-line traditional patterns",
      "Peacock, paisley, and mandala motifs",
      "Full hand and arm coverage options",
      "Best suited for bridal and semi-bridal occasions",
      "Requires longer application time for full detail",
    ],
    duration: "60–120 minutes",
    idealFor: [
      "Traditional weddings",
      "Pujas & ceremonies",
      "Festive occasions",
    ],
    imageUrl:
      "https://i.pinimg.com/736x/24/59/e4/2459e46ab9c4a021b2797ae077730e15.jpg",
    whatsappMessage: SITE_CONFIG.whatsapp.indianMessage,
  },
];
