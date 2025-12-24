import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const seedProducts = [
    { name: "Maize Seeds", image: "/img/organicsoil.png" },
    { name: "Soybean Seeds", image: "/img/humitek.png" },
    { name: "Cotton Seeds", image: "/img/vegitableseeds.png" },
    { name: "Groundnut Seeds", image: "/img/soilbooster.png" },
    { name: "Wheat Seeds", image: "/img/organicsoil.png" },
    { name: "Rice Seeds", image: "/img/humitek.png" },
    { name: "Mustard Seeds", image: "/img/vegitableseeds.png" },
    { name: "Sunflower Seeds", image: "/img/soilbooster.png" },
  ];

  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth =
      scrollRef.current.querySelector(".card").offsetWidth + 24;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-[50vh] relative px-4 md:px-8">
      
      {/* Heading */}
      <h1 className="font-amatic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mt-16">
        Products
      </h1>

      {/* Desktop arrows */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
      >
        <ChevronRight size={28} />
      </button>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="
          mt-10 flex gap-4 sm:gap-6
          overflow-x-auto no-scrollbar
          snap-x snap-mandatory
          pb-4 px-2 sm:px-0
          touch-pan-x
        "
      >
        {seedProducts.map((item, i) => (
          <div
            key={i}
            className="
              card flex-shrink-0 snap-center
              bg-white rounded-xl shadow-md
              hover:shadow-xl transition
              p-3 sm:p-4
            "
          >
            <img
              src={item.image}
              alt={item.name}
              className="
                w-[180px] sm:w-[220px] md:w-[260px]
                h-[160px] sm:h-[200px] md:h-[260px]
                object-cover rounded-lg
              "
            />

            <h3 className="mt-3 text-sm sm:text-base font-semibold text-center">
              {item.name}
            </h3>

            <button
              onClick={() => navigate("/products")}
              className="
                mt-3 w-full bg-green-600
                text-white py-1.5 sm:py-2
                rounded-lg text-sm sm:text-base
                hover:bg-green-700 transition
              "
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
