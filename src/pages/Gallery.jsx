import { useEffect, useState } from "react";
import { getGalleryImages } from "../services/galleryApi";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([])
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [activeImageId, setActiveImageId] = useState(null);
  const server_url = import.meta.env.VITE_SERVER_URL;

  const fetchGallery = async () => {
    try {
      const { data } = await getGalleryImages();
      setGalleryImages(data.images)
    } catch (err) {
      console.error(err)
      setGalleryImages([])
    }
  }

  useEffect(() => {
    fetchGallery()
  }, [])

  const openLightbox = (id) => {
    setActiveImageId(id);
    setIsLightBoxOpen(true);
  };

  const changeImage = (direction) => {
    const currentIndex = galleryImages.findIndex(
      (img) => img._id === activeImageId
    );

    if (currentIndex  === -1 ) return;

    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % galleryImages.length
        : (currentIndex - 1 + galleryImages.length) % galleryImages.length;

    setActiveImageId(galleryImages[nextIndex]._id);
  };

  const handleKeyDown = (e) => {
    if (!isLightBoxOpen) return;
    if (e.key === "ArrowRight") changeImage("next");
    if (e.key === "ArrowLeft") changeImage("prev");
    if (e.key === "Escape") setIsLightBoxOpen(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = isLightBoxOpen ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isLightBoxOpen, activeImageId]);

  const activeImage = galleryImages.find(
    (img) => img._id === activeImageId
  );

  return (
    <div>
      
      <h1 className="text-4xl md:text-7xl text-center my-8 font-bold text-green-700 font-amatic">
        Gallery
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-4 my-4">
        {galleryImages.map((image) => (
          <div
            key={image._id}
            className="overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              onClick={() => openLightbox(image._id)}
              src={`${server_url}${image.src}`}
              alt={image.alt}
              className="w-full h-40 sm:h-48 lg:h-56 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightBoxOpen && activeImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">

          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white text-4xl md:text-5xl"
            onClick={() => setIsLightBoxOpen(false)}
          >
            &times;
          </button>

          {/* Prev */}
          <button
            onClick={() => changeImage("prev")}
            className="absolute left-2 md:left-6 text-white text-4xl md:text-6xl px-3 py-2"
          >
            &#8592;
          </button>

          {/* Image */}
          <img
            src={`${activeImage.src}`}
            alt={activeImage.alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg transition"
          />

          {/* Next */}
          <button
            onClick={() => changeImage("next")}
            className="absolute right-2 md:right-6 text-white text-4xl md:text-6xl px-3 py-2"
          >
            &#8594;
          </button>

          {/* Hint */}
          <p className="absolute bottom-6 text-gray-300 text-sm text-center">
            Swipe / ← → keys • Esc to close
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
