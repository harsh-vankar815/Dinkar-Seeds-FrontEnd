import { NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiPlus, FiBox, FiLogOut } from "react-icons/fi";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate()
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
     ${
       isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-green-50"
     }`;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-18 left-0 
          h-[calc(100vh-4rem)] w-64
          bg-white border-r z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <nav className="p-4 space-y-2">
          <NavLink
            to="/admin"
            end
            onClick={() => setIsOpen(false)}
            className={linkClass}
          >
            <FiHome /> Dashboard
          </NavLink>

          <NavLink
            to="/admin/add-product"
            onClick={() => setIsOpen(false)}
            className={linkClass}
          >
            <FiPlus /> Add Product
          </NavLink>

          <NavLink
            to="/admin/products"
            onClick={() => setIsOpen(false)}
            className={linkClass}
          >
            <FiBox /> All Products
          </NavLink>

          <NavLink
            to="/admin/gallery"
            onClick={() => setIsOpen(false)}
            className={linkClass}
          >
            <FiBox /> Gallery
          </NavLink>

          <button
            onClick={() => {
              setIsOpen(false);
              localStorage.removeItem("accessToken");
              localStorage.removeItem("user");
              navigate("/login");
              window.location.reload();
            }}
            className="flex md:hidden items-center gap-3 px-4 py-3 rounded-lg text-sm text-red-600 hover:bg-red-50 w-full transition"
          >
            <FiLogOut /> Logout
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
