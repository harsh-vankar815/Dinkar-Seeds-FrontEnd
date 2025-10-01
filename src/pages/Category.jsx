import React from 'react'

const Category = () => {
    const productTypes = [
        { name: "Wheat Seeds", image: "/img/fertilizer.png" },
        { name: "Rice Seeds", image: "/img/seedsProduct.png" },
        { name: "Maize Seeds", image: "/img/soilCondition.png" },
        { name: "Soybean Seeds", image: "/img/pestisides.png" },
    ];
    return (
        <section className="min-h-[75vh]">
            <h1 className="font-amatic text-8xl text-center mt-16">
                Agriculture Seeds, Fertilizer and Pesticide
            </h1>
            <div className="cards flex items-center justify-around mt-8 flex-grow flex-wrap">
                {productTypes.map((item, i) => (
                    <div key={i} className="card">
                        <figure className="text-center space-y-5 text-gray-800">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-[21rem] h-[310px] object-cover border rounded-3xl inline-block"
                            />
                            <figcaption className="font-bold text-xl">{item.name}</figcaption>
                        </figure>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Category
