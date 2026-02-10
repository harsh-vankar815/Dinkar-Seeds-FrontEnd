import { IndianRupee, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../services/productApi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AdminProducts = () => {
  const server_url = import.meta.env.VITE_SERVER_URL;
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const { data } = await getAllProducts();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    toast((t) => (
      <span>
        Delete this product?
        <div className="mt-2 flex gap-2">
          <button
            onClick={async () => {
              toast.dismiss(t.id);

              try {
                await deleteProduct(id);
                setProducts((prev) => prev.filter((p) => p._id !== id));
                toast.success("Product deleted successfully!");
              } catch (err) {
                console.error(err);
                toast.error("Failed to delete product.");
              }
            }}
            className="px-3 py-1 bg-red-600 text-white rounded"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            No
          </button>
        </div>
      </span>
    ));
  };

  if (products.length === 0) return <p>No products avaliable to show</p>;

  return (
    <section className="min-h-screen bg-zinc-100 p-4 md:p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700">
          🛠️ Admin - Product List
        </h1>

        <button
          onClick={() => navigate("/admin/add-product")}
          className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm sm:text-base"
        >
          + Add New Product
        </button>
      </div>

      {/* PRODUCT GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...products].reverse().map((product) => (
          <article
            key={product._id}
            className="relative bg-white border rounded-xl p-3 space-y-2 hover:shadow-lg transition-all"
          >
            {/* IMAGE */}
            <img
              src={
                product.img.startsWith("http")
                  ? product.img
                  : `${server_url}${product.img}`
              }
              alt={product.productName}
              className="w-full h-36 object-cover rounded-lg"
            />

            {/* NAME */}
            <h2 className="font-bold text-lg">{product.productName}</h2>

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
                onClick={() => navigate(`/admin/edit-product/${product._id}`)}
                className="flex-1 flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded-lg text-sm"
              >
                <Pencil size={14} />
                Edit
              </button>

              <button
                onClick={() => handleDelete(product._id)}
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
