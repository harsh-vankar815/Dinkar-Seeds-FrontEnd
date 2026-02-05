import { useEffect, useState } from "react";
import { getGalleryImages } from "../services/galleryApi";

const Gallery = () => {
  // const galleryImages = [
  //   { id: 1, src: "/gallery/gallery-1.png", alt: "Gallery Image 1" },
  //   { id: 2, src: "/gallery/gallery-2.png", alt: "Gallery Image 2" },
  //   { id: 3, src: "/gallery/gallery-3.png", alt: "Gallery Image 3" },
  //   { id: 4, src: "/gallery/gallery-4.png", alt: "Gallery Image 4" },
  //   { id: 5, src: "/gallery/gallery-5.png", alt: "Gallery Image 5" },
  //   { id: 6, src: "/gallery/gallery-6.png", alt: "Gallery Image 6" },
  //   { id: 7, src: "/gallery/gallery-7.png", alt: "Gallery Image 7" },
  //   { id: 8, src: "/gallery/gallery-8.png", alt: "Gallery Image 8" },
  //   { id: 9, src: "/gallery/gallery-9.png", alt: "Gallery Image 9" },
  //   { id: 10, src: "/gallery/gallery-10.png", alt: "Gallery Image 10" },
  //   { id: 11, src: "/gallery/gallery-11.png", alt: "Gallery Image 11" },
  //   { id: 12, src: "/gallery/gallery-12.png", alt: "Gallery Image 12" },
  //   { id: 13, src: "/gallery/gallery-13.png", alt: "Gallery Image 13" },
  //   { id: 14, src: "/gallery/gallery-14.jpg", alt: "Gallery Image 14" },
  //   { id: 15, src: "/gallery/gallery-15.jpg", alt: "Gallery Image 15" },
  //   { id: 16, src: "/gallery/gallery-16.jpg", alt: "Gallery Image 16" },
  //   { id: 17, src: "/gallery/gallery-17.jpg", alt: "Gallery Image 17" },
  //   { id: 18, src: "/gallery/gallery-18.jpg", alt: "Gallery Image 18" },
  //   { id: 19, src: "/gallery/gallery-19.jpg", alt: "Gallery Image 19" },
  //   { id: 20, src: "/gallery/gallery-20.png", alt: "Gallery Image 20" },
  //   { id: 21, src: "/gallery/gallery-21.jpg", alt: "Gallery Image 21" },
  //   { id: 22, src: "/gallery/gallery-22.jpg", alt: "Gallery Image 22" },
  //   { id: 23, src: "/gallery/gallery-23.jpg", alt: "Gallery Image 23" },
  //   { id: 24, src: "/gallery/gallery-24.jpg", alt: "Gallery Image 24" },
  // ];

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
            src={`${server_url}${activeImage.src}`}
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
