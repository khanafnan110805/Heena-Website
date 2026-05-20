import type { GalleryImage } from "../../../types/gallery.types";
import { Badge } from "../../atoms/Badge";

interface GalleryCardProps {
  image: GalleryImage;
  index: number;
  onClick: (index: number) => void;
}

const categoryLabels: Record<string, string> = {
  bridal: "Bridal",
  arabic: "Arabic",
  floral: "Floral",
  indian: "Indian",
};

export function GalleryCard({ image, index, onClick }: GalleryCardProps) {
  return (
    <button
      onClick={() => onClick(index)}
      className="gallery-card group relative block w-full overflow-hidden rounded-sm
                 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold-primary"
      aria-label={`View ${image.alt}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className={`
    w-full object-cover block rounded-sm
    ${
      image.aspectRatio === "portrait"
        ? "h-[520px]"
        : image.aspectRatio === "landscape"
          ? "h-[320px]"
          : "h-[420px]"
    }
  `}
        loading={index < 6 ? "eager" : "lazy"}
      />

      {/* Hover overlay */}
      <div
        className="gallery-card-overlay absolute inset-0 flex flex-col items-center justify-center gap-2"
        style={{ background: "var(--overlay-gallery)" }}
        aria-hidden="true"
      >
        <Badge variant="gold">{categoryLabels[image.category]}</Badge>
        <span className="font-body text-xs text-text-secondary tracking-widest uppercase mt-1">
          View Design
        </span>
      </div>
    </button>
  );
}
