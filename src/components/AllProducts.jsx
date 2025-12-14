import { IndianRupee } from "lucide-react";

const AllProducts = ({ isMobile }) => {
  const productsList = [
    {
      productName: "Maize Seeds",
      price: "200",
      discount: "142",
      img: "/img/organicsoil.png",
    },
    {
      productName: "Soybean Seeds",
      img: "/img/humitek.png",
      price: "340",
      discount: "230",
    },
    {
      productName: "Cotton Seeds",
      img: "/img/vegitableseeds.png",
      price: "400",
      discount: "370",
    },
    {
      productName: "Groundnut Seeds",
      img: "/img/soilbooster.png",
      price: "158",
      discount: "110",
    },
    {
      productName: "Wheat Seeds",
      img: "/img/organicsoil.png",
      price: "824",
      discount: "567",
    },
    {
      productName: "Rice Seeds",
      img: "/img/humitek.png",
      price: "550",
      discount: "330",
    },
    {
      productName: "Mustard Seeds",
      img: "/img/vegitableseeds.png",
      price: "80",
      discount: "60",
    },
    {
      productName: "Sunflower Seeds",
      img: "/img/soilbooster.png",
      price: "170",
      discount: "150",
    },
  ];
  return (
    <section className="min-h-screen px-9 bg-zinc-100 py-5">
      {isMobile ? (
        <h1 className="font-amatic text-5xl text-center mb-8">Products</h1>
      ) : (
        <h1 className="font-amatic text-8xl text-center mb-8">Products</h1>
      )}
      <section className="flex flex-wrap justify-around gap-6 relative">
        {productsList.map((product, i) => (
          <article
            key={i}
            className="w-96 h-[450px] bg-white border flex flex-col justify-center items-center p-5 space-y-2 rounded-lg border-gray-300"
          >
            <div className="image">
              <img
                className="w-[15rem] h-[260px] object-cover rounded-lg inline-block"
                src={product.img}
                alt={product.productName}
              />
            </div>
            <h2 className="productname text-xl font-bold">
              {product.productName}
            </h2>
            <div className="price text-green-700 flex justify-center items-center space-x-5 ">
              <span className=" w-0">
                {" "}
                <IndianRupee size={12} width={25} />
              </span>
              <p className="font-bold">{product.discount}</p>
              <span className="w-0">
                {" "}
                <IndianRupee size={12} width={25} />
              </span>
              <div className="relative text-black flex justify-center">
                <p className="border absolute bottom-3 w-7 border-green-600"></p>
                {product.price}
              </div>
            </div>
            <div className="button w-full text-center  hover:bg-green-500 transition-all duration-300 bg-green-600 text-white cursor-pointer rounded-lg py-3">
              <button className="text-lg">Add to cart</button>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default AllProducts;
