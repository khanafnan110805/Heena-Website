import GalleryCard from './GalleryCard.jsx'

export default function GalleryGrid({ images, onImageClick, startIndex = 0 }) {
  return (
    <div className="masonry-grid" role="list" aria-label="Gallery images">
      {images.map((image, localIndex) => (
        <div key={image.id} className="masonry-item break-inside-avoid" role="listitem">
          <GalleryCard
            image={image}
            index={startIndex + localIndex}
            onClick={onImageClick}
          />
        </div>
      ))}
    </div>
  )
}
