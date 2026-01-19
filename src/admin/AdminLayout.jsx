import Sidebar from './Sidebar';
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f7f2]">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Right Side Wrapper */}
      <div className="lg:ml-64 min-h-screen flex flex-col">
        
        {/* Top Bar */}
        <header className="bg-white shadow-sm px-4 py-3 flex items-center gap-4 sticky top-0 z-30">
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-2xl"
          >
            <FiMenu />
          </button>

          <h1 className="text-lg font-semibold text-green-700">
            Admin Dashboard
          </h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout