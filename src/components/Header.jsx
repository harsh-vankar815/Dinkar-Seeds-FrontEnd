import { Link } from "react-router-dom";
import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";

//  Commented code is for Hamburger navbar

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarArray = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
  ];

  const onIsOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const SideNav = () => (
    <div className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden">
      <ul
        className="flex flex-col text-center"
        onClick={() => setIsOpen(false)}
      >
        {navbarArray.map((item, index) => (
          <li
            key={index}
            className="py-4 hover:bg-green-50 hover:text-green-700"
          >
            <Link to={`${item.path}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/55 backdrop-blur shadow">
      <nav className="max-w-full mx-auto px-4 h-20 flex items-center justify-around border shadow-[0_4px_6px_rgba(0,0,0,0.1)] ">
        <Link to={"/"}>
          <div className="flex items-center space-x-4 cursor-pointer">
            <img
              src="img/Logo.png"
              width={"60"}
              height={"60"}
              alt="Dinkar Seeds"
              className="object-cover w-16 h-auto "
            />
            <h1 className="text-xl font-bold text-green-700 ">Dinkar Seeds</h1>
          </div>
        </Link>

        <ul className=" hidden md:flex space-x-7">
          {navbarArray.map((item) => (
            <li
              key={item.name}
              className="py-4 hover:underline hover:text-green-700 "
            >
              <Link to={`${item.path}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="buttons hidden sm:flex text-sm md:text-base space-x-3">
          <Link to={"/login"}>
            <button className="text-black hover:text-green-700">Login</button>
          </Link>
          <span>/</span>
          <Link to={"/signup"}>
            <button className="text-black hover:text-green-700">
              Register
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX />
          ) : (
            <FiAlignJustify
              size={28}
              onClick={onIsOpen}
              className="cursor-pointer md:hidden"
            />
          )}
        </button>
      </nav>
      {isOpen && <SideNav />}
    </header>
  );
};

export default Header;
