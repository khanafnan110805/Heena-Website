import type { GalleryImage } from "../../../types/gallery.types";
import { GalleryCard } from "../../molecules/GalleryCard";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  startIndex?: number;
}

export function GalleryGrid({
  images,
  onImageClick,
  startIndex = 0,
}: GalleryGridProps) {
  return (
    <div className="masonry-grid" role="list" aria-label="Gallery images">
      {images.map((image, localIndex) => (
        <div
          key={image.id}
          className="masonry-item mb-6 break-inside-avoid"
          role="listitem"
        >
          <GalleryCard
            image={image}
            index={startIndex + localIndex}
            onClick={onImageClick}
          />
        </div>
      ))}
    </div>
  );
}
