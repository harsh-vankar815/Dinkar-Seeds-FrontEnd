Here is the Dinkar Seeds Limited company's frontend code
Live url: https://dinkar-seeds-frontend-n5x2.onrender.com/

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";

const Header = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const auth = !!currentUser;
  const isAdmin = auth && currentUser?.role === "admin";

  const navbarArray = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  const DropNav = () => (
    <div className="absolute top-20 left-0 w-full bg-white shadow-xl md:hidden z-40">
      <ul className="flex flex-col divide-y">
        {navbarArray.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block py-4 text-center font-medium hover:bg-green-50 hover:text-green-700 transition"
            >
              {item.name}
            </Link>
          </li>
        ))}

        <li className="py-4">
          <div className="flex items-center justify-center gap-3 text-lg font-medium">
            {!auth ? (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-green-700 transition">Login</Link>
                <span className="text-gray-400">/</span>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="hover:text-green-700 transition">Register</Link>
              </>
            ) : (
              <>
                <Link to={"/profile"} onClick={() => setIsOpen(false)} className="hover:text-green-700 transition">Profile</Link>
                {isAdmin && (
                  <>
                    <span className="text-gray-400">/</span>
                    <Link to={"/admin"} onClick={() => setIsOpen(false)}>Dashboard</Link>
                  </>
                )}
                <span className="text-gray-400">/</span>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        </li>
      </ul>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="max-w-full mx-auto h-20 flex items-center justify-between md:justify-around border shadow-[0_4px_6px_rgba(0,0,0,0.1)] px-4 md:px-2">
        
        {/* Logo Section */}
        <Link to={"/"} className="flex-shrink-0">
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="favicon.ico"
              alt="Dinkar Seeds"
              className="object-cover w-12 md:w-16 h-auto"
            />
            <h1 className="text-lg md:text-xl font-bold text-green-700 whitespace-nowrap">
              Dinkar Seeds
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation - Space adjusted for middle screens */}
        <ul className="hidden md:flex md:gap-3 lg:gap-8 items-center">
          {navbarArray.map((item) => (
            <li
              key={item.name}
              className="py-4 hover:underline hover:text-green-700 md:text-base lg:text-lg whitespace-nowrap"
            >
              <Link to={`${item.path}`}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Auth Section - Fixed size for 640px to 1024px */}
        <div className="buttons hidden sm:flex items-center sm:text-base md:text-base lg:text-lg sm:gap-2 md:gap-3 flex-shrink-0 font-medium">
          {!auth ? (
            <>
              <Link to="/login" className="hover:text-green-700 transition whitespace-nowrap">
                Login
              </Link>
              <span className="text-gray-400">/</span>
              <Link to="/signup" className="hover:text-green-700 transition whitespace-nowrap">
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2 lg:gap-3">
              <Link to={"/profile"} className="hover:text-green-700 transition whitespace-nowrap">
                Profile
              </Link>
              {isAdmin && (
                <>
                  <span className="text-gray-400">/</span>
                  <Link to={"/admin"} className="hover:text-green-700 transition whitespace-nowrap">
                    Admin
                  </Link>
                </>
              )}
              <span className="text-gray-400">/</span>
              <button
                onClick={handleLogout}
                className="text-black hover:text-green-700 whitespace-nowrap"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX />
          ) : (
            <FiAlignJustify size={28} className="cursor-pointer" />
          )}
        </button>
      </nav>
      {isOpen && <DropNav />}
    </header>
  );
};

export default Header;
