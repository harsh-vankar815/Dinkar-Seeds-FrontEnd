import { IndianRupee } from "lucide-react";
import { useState } from "react";

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
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

  const productsList = [
    // 🌾 CEREAL
    {
      productName: "Maize Seeds",
      category: "Maize",
      price: "200",
      discount: "142",
      img: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Premium Maize Hybrid",
      category: "Maize",
      price: "280",
      discount: "210",
      img: "https://images.pexels.com/photos/221016/pexels-photo-221016.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Wheat Seeds",
      category: "Wheat",
      price: "824",
      discount: "567",
      img: "https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Premium Wheat Seeds",
      category: "Wheat",
      price: "950",
      discount: "720",
      img: "https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Rice Seeds",
      category: "Paddy",
      price: "550",
      discount: "330",
      img: "https://images.pexels.com/photos/1166416/pexels-photo-1166416.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Basmati Rice Seeds",
      category: "Paddy",
      price: "780",
      discount: "590",
      img: "https://images.pexels.com/photos/7518558/pexels-photo-7518558.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Bajra Seeds",
      category: "Bajara",
      price: "180",
      discount: "135",
      img: "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Hybrid Bajra Seeds",
      category: "Bajara",
      price: "240",
      discount: "190",
      img: "https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    // 🌱 VEGETABLES
    {
      productName: "Tomato Seeds",
      category: "Tomato",
      price: "120",
      discount: "90",
      img: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Hybrid Tomato Seeds",
      category: "Tomato",
      price: "165",
      discount: "125",
      img: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Onion Seeds",
      category: "Onion",
      price: "180",
      discount: "135",
      img: "https://images.pexels.com/photos/1323646/pexels-photo-1323646.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Red Onion Seeds",
      category: "Onion",
      price: "210",
      discount: "160",
      img: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Okra Seeds",
      category: "Okra",
      price: "160",
      discount: "120",
      img: "https://images.pexels.com/photos/7129127/pexels-photo-7129127.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Premium Okra Seeds",
      category: "Okra",
      price: "195",
      discount: "145",
      img: "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Carrot Seeds",
      category: "Carrot",
      price: "140",
      discount: "105",
      img: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Red Carrot Seeds",
      category: "Carrot",
      price: "170",
      discount: "130",
      img: "https://images.pexels.com/photos/3650647/pexels-photo-3650647.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Chilli Seeds",
      category: "Chilli",
      price: "130",
      discount: "95",
      img: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Green Chilli Seeds",
      category: "Chilli",
      price: "155",
      discount: "115",
      img: "https://images.pexels.com/photos/6824533/pexels-photo-6824533.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Coriander Seeds",
      category: "Coriender",
      price: "110",
      discount: "85",
      img: "https://images.pexels.com/photos/1618896/pexels-photo-1618896.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Cucumber Seeds",
      category: "Cucumber",
      price: "125",
      discount: "95",
      img: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Radish Seeds",
      category: "Radish",
      price: "100",
      discount: "75",
      img: "https://images.pexels.com/photos/6157055/pexels-photo-6157055.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Spinach Seeds",
      category: "Palak",
      price: "115",
      discount: "88",
      img: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Bottle Gourd Seeds",
      category: "Bottle Gourd",
      price: "135",
      discount: "100",
      img: "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Dolichos Bean Seeds",
      category: "Dolichos Bean",
      price: "145",
      discount: "110",
      img: "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    // 🌶 SPICES
    {
      productName: "Cumin Seeds",
      category: "Cumin",
      price: "300",
      discount: "240",
      img: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Premium Cumin Seeds",
      category: "Cumin",
      price: "380",
      discount: "295",
      img: "https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Fenugreek Seeds",
      category: "Fenugreek",
      price: "220",
      discount: "170",
      img: "https://images.pexels.com/photos/6489419/pexels-photo-6489419.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Organic Fenugreek Seeds",
      category: "Fenugreek",
      price: "270",
      discount: "210",
      img: "https://images.pexels.com/photos/4198801/pexels-photo-4198801.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Suwa Seeds",
      category: "Suwa",
      price: "190",
      discount: "145",
      img: "https://images.pexels.com/photos/1618896/pexels-photo-1618896.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    // 🌾 PULSES
    {
      productName: "Chick Pea Seeds",
      category: "Chick Pea",
      price: "260",
      discount: "200",
      img: "https://images.pexels.com/photos/4198027/pexels-photo-4198027.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Premium Chick Pea Seeds",
      category: "Chick Pea",
      price: "310",
      discount: "245",
      img: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Green Gram Seeds",
      category: "Green Gram",
      price: "280",
      discount: "215",
      img: "https://images.pexels.com/photos/5560758/pexels-photo-5560758.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Organic Green Gram Seeds",
      category: "Green Gram",
      price: "340",
      discount: "270",
      img: "https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Black Gram Seeds",
      category: "Black Gram",
      price: "290",
      discount: "225",
      img: "https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Cow Pea Seeds",
      category: "Cow Pea",
      price: "230",
      discount: "175",
      img: "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Pigeon Pea Seeds",
      category: "Pigeon Pea",
      price: "275",
      discount: "210",
      img: "https://images.pexels.com/photos/5560758/pexels-photo-5560758.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Gum Guar Seeds",
      category: "Gum Guar",
      price: "320",
      discount: "250",
      img: "https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    // 🌻 CASH CROP & OIL SEEDS
    {
      productName: "Groundnut Seeds",
      category: "Ground Nut",
      price: "158",
      discount: "110",
      img: "https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Premium Groundnut Seeds",
      category: "Ground Nut",
      price: "210",
      discount: "165",
      img: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Mustard Seeds",
      category: "Mustard",
      price: "80",
      discount: "60",
      img: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Yellow Mustard Seeds",
      category: "Mustard",
      price: "105",
      discount: "80",
      img: "https://images.pexels.com/photos/6489419/pexels-photo-6489419.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Cotton Seeds",
      category: "Cotton",
      price: "400",
      discount: "370",
      img: "https://images.pexels.com/photos/6157055/pexels-photo-6157055.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Bt Cotton Seeds",
      category: "Cotton",
      price: "520",
      discount: "445",
      img: "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Castor Seeds",
      category: "Castor",
      price: "350",
      discount: "280",
      img: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Sesame Seeds",
      category: "Sesame",
      price: "295",
      discount: "230",
      img: "https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    // 🌿 FODDER CROPS
    {
      productName: "Jowar Fodder Seeds",
      category: "Jowar",
      price: "190",
      discount: "150",
      img: "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Premium Jowar Seeds",
      category: "Jowar",
      price: "240",
      discount: "195",
      img: "https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Fodder Bajra Seeds",
      category: "Fodder Bajra",
      price: "175",
      discount: "140",
      img: "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      productName: "Lucerne Seeds",
      category: "Lucerne",
      price: "310",
      discount: "250",
      img: "https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

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

  // filtering product
  const filteredProduct = selectedCategory
    ? productsList.filter(
        (prod) =>
          prod.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    : productsList;

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
        <h1 className="font-amatic text-5xl md:text-8xl text-center mb-3 text-green-700">
          Our Premium Seeds
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Quality seeds for a bountiful harvest. Trusted by farmers across
          India.
        </p>
      </div>
      {/* Products */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 p-5">
        {filteredProduct.map((product, i) => (
          <article
            key={i}
            className="w-full bg-white border flex flex-col items-center p-3 space-y-2 rounded-lg border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="image">
              <img
                className="w-full h-32 object-cover rounded-lg"
                src={product.img}
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
