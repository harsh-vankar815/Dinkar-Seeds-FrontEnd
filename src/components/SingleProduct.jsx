import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getSingleProduct } from "../services/productApi";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("details");
  const { id } = useParams();
  const navigate = useNavigate();
  const server_url = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await getSingleProduct(id);
        setProduct(data.product);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);

  // Product not found safety
  if (!product) {
    return (
      <div className="min-h-[50vh] bg-zinc-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate("/products")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/products")}
        className="flex items-center gap-2 text-green-700 hover:text-green-800 mb-6"
      >
        <ArrowLeft size={20} />
        Back to Products
      </button>

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-md p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={`${server_url}${product.img}`}
            alt={product.productName}
            className="w-full max-w-sm object-contain rounded-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
            {product.productName}
          </h1>

          <div className="flex items-center gap-4 mb-5">
            <span className="text-2xl font-bold text-green-700">
              ₹ {product.discount}
            </span>
            <span className="text-gray-500 line-through">
              ₹ {product.price}
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Category: <span className="font-semibold">{product.category}</span>
          </p>

          {/* Tabs */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setActiveTab("details")}
              className={`px-4 py-2 rounded-md text-sm font-semibold ${
                activeTab === "details" ? "bg-yellow-400 text-white" : "border"
              }`}
            >
              Details
            </button>

            <button
              onClick={() => setActiveTab("specifications")}
              className={`px-4 py-2 rounded-md text-sm font-semibold ${
                activeTab === "specifications"
                  ? "bg-yellow-400 text-white"
                  : "border"
              }`}
            >
              Specifications
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-lg p-4">
            {activeTab === "details" && (
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Sowing Time:</strong> {product.details.sowingTime}
                </li>
                <li>
                  <strong>Seed Rate/Ha:</strong> {product.details.seedRate}
                </li>
                <li>
                  <strong>Maturity Days:</strong> {product.details.maturity}
                </li>
                <li>
                  <strong>Yield/Ha:</strong> {product.details.yield}
                </li>
              </ul>
            )}

            {activeTab === "specifications" && (
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Crop Type:</strong> {product.specifications.cropType}
                </li>
                <li>
                  <strong>Variety:</strong> {product.specifications.variety}
                </li>
                <li>
                  <strong>Climate:</strong> {product.specifications.climate}
                </li>
                <li>
                  <strong>Irrigation:</strong>{" "}
                  {product.specifications.irrigation}
                </li>
              </ul>
            )}
          </div>
          <div className="flex gap-4 mb-6">
            <button
              //   onClick={() => navigate("/checkout")}
              onClick={() => alert(`Buying ${product.productName}`)}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 mt-5 rounded-lg font-semibold transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
