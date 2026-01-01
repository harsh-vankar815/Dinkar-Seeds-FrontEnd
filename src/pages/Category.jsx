const Category = () => {
  const productTypes = [
    { name: "Wheat Seeds", image: "/img/fertilizer.png" },
    { name: "Rice Seeds", image: "/img/seedsProduct.png" },
    { name: "Maize Seeds", image: "/img/soilCondition.png" },
    { name: "Soybean Seeds", image: "/img/pestisides.png" },
  ];

  return (
    <section className="min-h-[70vh]">
      <h1 className="font-amatic text-5xl md:text-8xl text-center text-green-700 font-bold mt-16">
        Agriculture Seeds, Fertilizer and Pesticide
      </h1>
      <div className="cards grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 flex-grow flex-wrap">
        {productTypes.map((item) => (
          <div
            key={item.name}
            className="card group rounded-3xl border overflow-hidden hover:shadow-xl transition"
          >
            <figure className="text-center p-5 space-y-5 text-gray-800">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 sm:h-64 md:h-72 object-cover border rounded-2xl transition"
              />
              <figcaption className="font-bold text-lg md:text-xl">
                {item.name}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
