import { FaAward } from "react-icons/fa";
import Products from "./Products";
import About from "../components/About";
import Category from "./Category";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-[url('/img/DinkarMain.png')] bg-cover bg-center flex items-center justify-end">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center m-8 flex flex-col justify-center items-center space-y-3">
          <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30 hover:bg-green-500/30 transition-all duration-300">
            <FaAward className="text-green-300 mr-3 " />
            <span className="text-green-100 font-medium text-lg">
              Trusted Since 2002
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg font-amatic">
            Dinkar Seeds Pvt. Ltd.
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-2xl leading-relaxed flex-wrap">
            Dinkar Seeds Limited - Empowering farmers across Gujarat with
            premium quality seeds for maximum yield and sustainable farming.
          </p>
          <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition">
            <Link to={"/products"}>Explore Products</Link>
          </button>
        </div>
      </section>

      <div className="m-[50px]">
        {/* Categories Section */}
        <Category />
        {/* Products Section */}
        <Products />

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <Contact />
      </div>
    </main>
  );
};

export default Home;
