import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import toast from "react-hot-toast";

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
    toast.success("Logged out successfully 👋");

    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    setTimeout(() => {
      navigate("/login");
    }, 500);
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
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-green-700 transition"
                >
                  Login
                </Link>
                <span className="text-gray-400">/</span>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-green-700 transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-green-700 transition"
                >
                  Profile
                </Link>
                {isAdmin && (
                  <>
                    <span className="text-gray-400">/</span>
                    <Link to="/admin" onClick={() => setIsOpen(false)}>
                      Admin
                    </Link>
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
      <nav className="max-w-full mx-auto h-20 flex items-center justify-between md:justify-around border shadow-[0_4px_6px_rgba(0,0,0,0.1)] px-4 md:px-2 min-[768px]:max-[886px]:px-1 min-[768px]:max-[886px]:gap-1">
        {/* Logo Section */}
        <Link to={"/"} className="flex-shrink-0">
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="favicon.ico"
              alt="Dinkar Seeds"
              className="object-cover w-12 md:w-16 h-auto"
            />
            <h1 className="text-lg md:text-xl font-bold text-green-700 whitespace-nowrap min-[768px]:max-[886px]:text-base">
              Dinkar Seeds
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:gap-3 lg:gap-8 items-center min-[768px]:max-[886px]:gap-2">
          {navbarArray.map((item) => (
            <li
              key={item.name}
              className="py-4 hover:underline hover:text-green-700 md:text-base lg:text-lg whitespace-nowrap min-[768px]:max-[886px]:text-sm"
            >
              <Link to={`${item.path}`}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Auth Section */}
        <div className="buttons hidden sm:flex items-center sm:text-base md:text-base lg:text-lg sm:gap-2 md:gap-3 flex-shrink-0 font-medium min-[768px]:max-[886px]:text-[14px] min-[768px]:max-[886px]:gap-1">
          {!auth ? (
            <>
              <Link
                to="/login"
                className="hover:text-green-700 text-xl lg:text-lg font-normal transition whitespace-nowrap"
              >
                Login
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                to="/signup"
                className="hover:text-green-700 text-xl lg:text-lg font-normal transition whitespace-nowrap"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-3 min-[768px]:max-[886px]:space-x-1">
              <Link to="/profile" className="hover:text-green-700 transition">
                Profile
              </Link>
              {isAdmin && (
                <>
                  <span className="text-gray-400">/</span>
                  <Link to="/admin" className="text-blue-600">
                    Admin
                  </Link>
                </>
              )}
              <span className="text-gray-400">/</span>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline"
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
