import { productsList } from '../data/productsData'

const AdminDashboard = () => {
  const totalProducts = productsList.length;
  console.log(totalProducts) 
  const cards = [
    { title: "Total Products", value: totalProducts },
    { title: "Categories", value: "6" },
    { title: "Active Products", value: "20" },
    { title: "Out of Stock", value: "4" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold text-green-700">
          Welcome Admin 🌱
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage products and inventory for Dinkar Seeds Pvt Ltd
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">{c.title}</p>
            <p className="text-3xl font-bold text-green-700 mt-2">
              {c.value}
            </p>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-white rounded-2xl shadow-sm p-6 text-sm text-gray-600 leading-relaxed">
        Use the sidebar to manage products, add new seeds, and update existing
        listings for <span className="font-medium">Dinkar Seeds Pvt Ltd</span>.
      </div>
    </div>
  );
};

export default AdminDashboard;
