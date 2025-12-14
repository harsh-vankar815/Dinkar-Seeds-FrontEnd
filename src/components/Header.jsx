import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";

//  Commented code is for Hamburger navbar

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onIsOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 480);
  const SideNav = () => (
    <div className="w-screen rounded-md flex flex-col bg-white absolute top-[80px]">
      <ul className="w-screen text-center border border-b-2 border-b-slate-500 shadow-md" onClick={() => {setTimeout(() => setIsOpen(false), 100)}}>
          <li className=" hover:text-green-900 hover:underline border border-slate-100 p-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-green-900 hover:underline border border-slate-100 p-3">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:text-green-900 hover:underline border border-slate-100 p-3">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="hover:text-green-900 hover:underline border border-slate-100 p-3">
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
    </div>
  )
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <header className="bg-white sticky top-0 z-10">
      <nav className="w-full h-20 flex justify-around items-center border shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
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
        {isMobile ? <FiAlignJustify size={'30px'} onClick={onIsOpen} cursor={'pointer'}/> : ''}
        {isMobile ? "" :
         <ul className="flex space-x-7">
          <li className="hover:text-green-900 hover:underline">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-green-900 hover:underline">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:text-green-900 hover:underline">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="hover:text-green-900 hover:underline">
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>}
        <div className="buttons space-x-3 text-xl">
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
      </nav>
      <>
        { isMobile && isOpen && <SideNav/> }
      </>
    </header>

  );
};

export default Header;
