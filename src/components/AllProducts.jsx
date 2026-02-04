import { IndianRupee } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../services/productApi";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const server_url = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getAllProducts();
        setProducts(data.products);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  // filtering product
  const filteredProduct = selectedCategory
    ? products.filter(
        (prod) =>
          prod.category?.toLowerCase() === selectedCategory.toLowerCase(),
      )
    : products;

  // Product data me category add karo
  //   {
  //   productName: "Tomato Seeds",
  //   category: "Vegetables",
  // }
  // const productsList = [
  //   {
  //     productName: "Maize Seeds",
  //     price: "200",
  //     discount: "142",
  //     img: "/img/organicsoil.png",
  //   },
  //   {
  //     productName: "Soybean Seeds",
  //     img: "/img/humitek.png",
  //     price: "340",
  //     discount: "230",
  //   },
  //   {
  //     productName: "Cotton Seeds",
  //     img: "/img/vegitableseeds.png",
  //     price: "400",
  //     discount: "370",
  //   },
  //   {
  //     productName: "Groundnut Seeds",
  //     img: "/img/soilbooster.png",
  //     price: "158",
  //     discount: "110",
  //   },
  //   {
  //     productName: "Wheat Seeds",
  //     img: "/img/organicsoil.png",
  //     category: "Wheat",
  //     price: "824",
  //     discount: "567",
  //   },
  //   {
  //     productName: "Rice Seeds",
  //     img: "/img/humitek.png",
  //     category: "Rice",
  //     price: "550",
  //     discount: "330",
  //   },
  //   {
  //     productName: "Mustard Seeds",
  //     img: "/img/vegitableseeds.png",
  //     price: "80",
  //     discount: "60",
  //   },
  //   {
  //     productName: "Sunflower Seeds",
  //     img: "/img/soilbooster.png",
  //     price: "170",
  //     discount: "150",
  //   },
  // ];

  const categories = [
    {
      name: "Vegatables",
      items: [
        "Bottle Gourd",
        "Carrot",
        "Chilli",
        "Coriender",
        "Cucumber",
        "Okra",
        "Onion",
        "Radish",
        "Palak",
        "Tomato",
        "Dolichos Bean",
      ],
    },
    {
      name: "Spices",
      items: ["Cumin", "Fenugreek", "Suwa"],
    },
    {
      name: "Pulse Crop",
      items: [
        "Black Gram",
        "Chick Pea",
        "Cow Pea",
        "Green Gram",
        "Gum Guar",
        "Pigeon Pea",
      ],
    },
    {
      name: "Cash Crop & Oil Seed Crops",
      items: ["Castor", "Ground Nut", "Mustard", "Sesame", "Cotton"],
    },
    {
      name: "Fodder Crops",
      items: ["Fodder Bajra", "Jowar", "Lucerne"],
    },
    {
      name: "Cereal",
      items: ["Maize", "Paddy", "Bajara", "Wheat"],
    },
  ];

  return (
    <section className="min-h-screen bg-zinc-100">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 border-b bg-white px-4 py-4 md:justify-center">
        {categories.map((cat, index) => (
          <div key={cat.name} className="relative group cursor-pointer">
            {/* CATEGORY TITLE */}
            <span className="font-semibold uppercase text-sm block">
              {cat.name}
            </span>

            {/* DROPDOWN */}
            <div
              className={`
    absolute top-full mt-2
    ${index >= categories.length - 2 ? "right-0" : "left-0"}
    w-48
    bg-white border border-gray-200
    rounded-md shadow-lg
    opacity-0 invisible
    group-hover:opacity-100 group-hover:visible
    transition-all duration-200
    z-50
  `}
            >
              <ul>
                {/* SHOW ALL */}
                <li
                  onClick={() => setSelectedCategory(null)}
                  className="px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-100 border-b"
                >
                  SHOW ALL
                </li>

                {cat.items.map((item) => (
                  <li
                    key={item}
                    onClick={() => setSelectedCategory(item)}
                    className="px-4 py-2 text-sm hover:bg-green-100"
                  >
                    {item.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-200 p-3">
        <h1 className="font-amatic text-5xl md:text-8xl text-center mb-3 text-green-700 font-bold">
          Our Premium Seeds
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Quality seeds for a bountiful harvest. Trusted by farmers across
          India.
        </p>
      </div>
      {/* Products */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 p-5">
        {filteredProduct.map((product) => (
          <article
            onClick={() => navigate(`/product/${product._id}`)}
            key={product._id}
            className="w-full bg-white border flex flex-col items-center p-3 space-y-2 rounded-lg border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="image">
              <img
                className="w-full h-32 object-cover rounded-lg"
                src={`${server_url}${product.img}`}
                alt={product.productName}
              />
            </div>
            <h2 className="productname text-lg font-bold">
              {product.productName}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-green-700 font-bold flex items-center">
                <IndianRupee size={14} />
                {product.discount}
              </span>
              <span className="text-gray-500 line-through flex items-center text-sm">
                <IndianRupee size={12} />
                {product.price}
              </span>
            </div>
            <div className="relative button w-full text-center hover:bg-green-500 transition-all duration-300 bg-green-600 text-white cursor-pointer rounded-lg py-1.5">
              <button className="text-lg">Buy Now</button>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default AllProducts;
