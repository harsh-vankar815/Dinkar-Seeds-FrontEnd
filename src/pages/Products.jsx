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
    { name: "Sesame Seeds", image: "/img/organicsoil.png" },
    { name: "Barley Seeds", image: "/img/humitek.png" },
    { name: "Chickpea Seeds", image: "/img/vegitableseeds.png" },
    { name: "Lentil Seeds", image: "/img/soilbooster.png" },
    { name: "Pea Seeds", image: "/img/organicsoil.png" },
    { name: "Sorghum Seeds", image: "/img/humitek.png" },
    { name: "Oat Seeds", image: "/img/vegitableseeds.png" },
    { name: "Canola Seeds", image: "/img/soilbooster.png" },
    { name: "Flax Seeds", image: "/img/organicsoil.png" },
    { name: "Cumin Seeds", image: "/img/humitek.png" },
    { name: "Fenugreek Seeds", image: "/img/vegitableseeds.png" },
    { name: "Carrot Seeds", image: "/img/soilbooster.png" },
  ];


  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.querySelector(".card").offsetWidth + 24; // 24 = space-x-6
      const scrollAmount =
        direction === "left"
          ? scrollRef.current.scrollLeft - cardWidth
          : scrollRef.current.scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[60vh] relative">
      <h1 className="font-amatic text-7xl text-center mt-16">Products</h1>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
      >
        <ChevronRight size={28} />
      </button>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="cards flex space-x-6 mx-8 mt-8 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
      >
        {seedProducts.map((item, i) => (
          <div key={i} className="card flex-shrink-0 snap-center">
            <figure className="text-center space-y-5 text-gray-800">
              <img
                src={item.image}
                alt={item.name}
                className="w-[15rem] h-[250px] object-cover border rounded-lg inline-block"
              />
              <figcaption className="font-bold text-lg">
                {item.name}
              </figcaption>
            </figure>
            <button onClick={() => {
              navigate('/products')
            }} className="bg-green-600 text-white px-3 mt-2 border rounded-lg hover:text-gray-200">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
