import { Link } from "react-router-dom";
import { FEATURED_GALLERY, GALLERY_IMAGES } from "../../../data/gallery.data";
import { GalleryGrid } from "../../../components/organisms/GalleryGrid";
import { GalleryLightbox } from "../../../components/organisms/GalleryLightbox";
import { SectionHeader } from "../../../components/atoms/SectionHeader";
import { ScrollReveal } from "../../../components/atoms/ScrollReveal";
import { useLightbox } from "../../../hooks/useLightbox";
import { ROUTES } from "../../../config/routes";

export function GalleryPreview() {
  const { isOpen, selectedIndex, selectedImage, open, close, next, prev } =
    useLightbox(GALLERY_IMAGES);

  return (
    <section id="gallery-preview" className="section-padding bg-bg-base">
      <div className="container-width">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured Designs"
            subtitle="A curated selection of recent work — each design crafted for a unique occasion."
            className="mb-12"
          />
        </ScrollReveal>

        <GalleryGrid images={FEATURED_GALLERY} onImageClick={open} />

        <ScrollReveal className="text-center mt-10">
          <Link
            to={ROUTES.GALLERY}
            className="
              inline-flex items-center gap-2
              font-body text-sm text-gold-primary hover:text-gold-champagne
              border border-gold-muted hover:border-gold-primary
              px-6 py-3 rounded-sm tracking-wide
              transition-all duration-200
            "
          >
            View Full Gallery
          </Link>
        </ScrollReveal>
      </div>

      <GalleryLightbox
        isOpen={isOpen}
        image={selectedImage}
        onClose={close}
        onNext={next}
        onPrev={prev}
        currentIndex={selectedIndex ?? 0}
        totalCount={GALLERY_IMAGES.length}
      />
    </section>
  );
}
