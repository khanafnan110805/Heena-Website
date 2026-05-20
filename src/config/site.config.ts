export const SITE_CONFIG = {
  brand: {
    name: "HENNA",
    tagline: "Premium Mehndi Art · Bridal · Festive · Events",
    artistName: "Sara",
    artistBio:
      "With over a decade of experience in mehndi artistry, Sara blends traditional South Asian techniques with contemporary design sensibilities. Every design is crafted with intention — a personal story told in henna.",
  },
  contact: {
    whatsapp: "+918779350329",
    instagram: "@mehndiby_.sara8",
    instagramUrl:
      "https://www.instagram.com/mehndiby_.sara8?igsh=azh4YnRneXl5NXRq",
    email: "shaikhsara17488@gmail.com",
    serviceArea: "Mumbai, Maharashtra",
    serviceHours: "Mon–Sat: 10am–8pm · Sun: 11am–6pm",
  },
  whatsapp: {
    defaultMessage:
      "Hi! I visited your website and I'm interested in booking a mehndi appointment.",
    bridalMessage:
      "Hi! I saw your bridal designs and I'd love to discuss a booking for my wedding mehndi.",
    arabicMessage:
      "Hi! I love your Arabic mehndi designs. I'd like to book an appointment.",
    floralMessage:
      "Hi! I'm interested in your floral mehndi designs. Can we discuss a booking?",
    indianMessage:
      "Hi! I'm interested in your Indian mehndi designs. Would love to book a session.",
    eidMessage:
      "Hi! I'm interested in your Eid Special package. Can you share availability?",
    groupMessage:
      "Hi! I'm looking for mehndi for a group event. Can we discuss options and pricing?",
    essentialsMessage:
      "Hi! I'm interested in your Essentials mehndi package. Can you share more details?",
    premiumMessage:
      "Hi! I'm interested in your Premium mehndi package. Could we discuss availability?",
    signatureBridalMessage:
      "Hi! I'm interested in your Signature Bridal package for my wedding. I'd love to discuss details.",
  },
  social: {
    instagram: "https://instagram.com/hennabyartist",
    facebook: "https://facebook.com/hennabyartist",
  },
  seo: {
    defaultTitle: "HENNA — Premium Mehndi Art · Bridal · Festive · Events",
    defaultDescription:
      "Premium henna and mehndi artist in Mumbai. Specialising in bridal mehndi, Arabic designs, floral patterns, and Indian mehndi. Book via WhatsApp.",
    siteUrl: "https://hennabyartist.com",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;

// WhatsApp URL builder helper
export const buildWhatsAppUrl = (
  message: string,
  phone: string = SITE_CONFIG.contact.whatsapp,
): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodedMessage}`;
};
