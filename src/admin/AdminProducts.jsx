import { IndianRupee, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { productsList } from "../data/productsData";

const AdminProducts = () => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    console.log("Delete Product ID:", id);
    // 👉 later API call / Redux dispatch here
  };

  return (
    <section className="min-h-screen bg-zinc-100 p-4 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-green-700">
          🛠️ Admin – Product List
        </h1>

        <button
          onClick={() => navigate("/admin/add-product")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          + Add New Product
        </button>
      </div>

      {/* PRODUCT GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsList.map((product, i) => (
          <article
            key={i}
            className="relative bg-white border rounded-xl p-3 space-y-2 hover:shadow-lg transition-all"
          >
            {/* IMAGE */}
            <img
              src={product.img}
              alt={product.productName}
              className="w-full h-36 object-cover rounded-lg"
            />

            {/* NAME */}
            <h2 className="font-bold text-lg">
              {product.productName}
            </h2>

            {/* PRICE */}
            <div className="flex items-center gap-2">
              <span className="text-green-700 font-bold flex items-center">
                <IndianRupee size={14} />
                {product.discount}
              </span>
              <span className="text-gray-500 line-through text-sm flex items-center">
                <IndianRupee size={12} />
                {product.price}
              </span>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() =>
                  navigate(`/admin/edit-product/${product.id}`)
                }
                className="flex-1 flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded-lg text-sm"
              >
                <Pencil size={14} />
                Edit
              </button>

              <button
                onClick={() => handleDelete(product.id)}
                className="flex-1 flex items-center justify-center gap-1 bg-red-600 hover:bg-red-700 text-white py-1.5 rounded-lg text-sm"
              >
                <Trash2 size={14} />
                Delete
              </button>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default AdminProducts;
