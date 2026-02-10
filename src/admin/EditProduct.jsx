import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct, updateProduct } from "../services/productApi";
import toast from "react-hot-toast";

const EditProduct = () => {
  const server_url = import.meta.env.VITE_SERVER_URL;
  const initialState = {
    productName: "",
    category: "",
    price: "",
    discount: "",
    img: "",
    details: {
      sowingTime: "",
      seedRate: "",
      maturity: "",
      yield: "",
    },
    specifications: {
      cropType: "",
      variety: "",
      climate: "",
      irrigation: "",
    },
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState({});

  const fileRef = useRef();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getSingleProduct(id);

        if (!res.data.product) {
          alert("Product not found");
          navigate("/admin/products");
          return;
        }

        setFormData(res.data.product);
        setPreview(res.data.product.img);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    if (name === "img" && value.trim() !== "") {
      if (fileRef.current) fileRef.current.value = "";
      setPreview(value); // Live preview update
    }
  };

  const handleNestedChange = (section, key, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [key]: value,
      },
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setErrors({ ...errors, image: "" });
    setFormData({ ...formData, img: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.productName?.toString().trim())
      newErrors.productName = "Product name is required";

    if (!formData.price?.toString().trim())
      newErrors.price = "Price is required";

    if (!formData.img && !preview)
      newErrors.image = "Product image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const formDataObj = new FormData();

      // basic fields
      formDataObj.append("productName", formData.productName);
      formDataObj.append("category", formData.category);
      formDataObj.append("price", Number(formData.price));
      formDataObj.append("discount", Number(formData.discount));

      // nested objects → stringify
      formDataObj.append("details", JSON.stringify(formData.details));
      formDataObj.append(
        "specifications",
        JSON.stringify(formData.specifications),
      );

      // image (OPTIONAL in update)
      if (fileRef.current && fileRef.current.files[0]) {
        formDataObj.append("img", fileRef.current.files[0]);
      } else if (formData.img && formData.img.trim() !== "") {
        formDataObj.append("img", formData.img);
      }

      await updateProduct(id, formDataObj);

      setPreview("");
      setErrors({});
      if (fileRef.current) fileRef.current.value = "";
      toast.success("Product updated successfully ✏️");
      navigate("/admin/products");
    } catch (err) {
      console.error("Update Error:", err);
      toast.error("Update failed. Please try again.");
    }
  };

  const previewImage = preview
    ? preview
    : formData.img
      ? `${server_url}${formData.img}`
      : "https://via.placeholder.com/400x250?text=Product+Image";

  if (!formData) return <p className="p-6">Loading...</p>;

  return (
    <div className="bg-[#f4f7f2] min-h-screen py-6 sm:py-10 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {/* LEFT – FORM */}
        <form
          onSubmit={handleUpdate}
          className="bg-white rounded-2xl shadow-md p-4 sm:p-6 space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-green-700">
            ✏️ Edit Product
          </h2>

          {/* Basic Info */}
          <div className="space-y-3">
            <div>
              <input
                name="productName"
                placeholder="Product Name *"
                className={`input w-full ${
                  errors.productName ? "border-red-500" : ""
                }`}
                value={formData.productName}
                onChange={handleChange}
              />
              {errors.productName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.productName}
                </p>
              )}
            </div>

            <input
              name="category"
              placeholder="Category"
              className="input w-full"
              value={formData.category}
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  name="price"
                  placeholder="Price *"
                  className={`input w-full ${
                    errors.price ? "border-red-500" : ""
                  }`}
                  value={formData.price}
                  onChange={handleChange}
                />
                {errors.price && (
                  <p className="text-red-500 text-xs mt-1">{errors.price}</p>
                )}
              </div>
              <input
                name="discount"
                placeholder="Discount Price"
                className="input w-full"
                value={formData.discount}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Image */}
          <div className="space-y-3">
            <h3 className="font-semibold text-green-700">Product Image</h3>

            <input
              name="img"
              placeholder="Paste Image URL"
              className={`input w-full ${errors.image ? "border-red-500" : ""}`}
              value={`${formData.img}`}
              onChange={handleChange}
            />

            <div className="text-center text-sm text-gray-400">OR</div>

            <input
              type="file"
              ref={fileRef}
              accept="image/*"
              className="w-full text-sm"
              onChange={handleImageUpload}
            />

            {errors.image && (
              <p className="text-red-500 text-xs">{errors.image}</p>
            )}
          </div>

          {/* Details */}
          <div>
            <h3 className="section-title">Crop Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.keys(formData.details).map((key) => (
                <input
                  key={key}
                  placeholder={key}
                  className="input w-full"
                  value={formData.details[key]}
                  onChange={(e) =>
                    handleNestedChange("details", key, e.target.value)
                  }
                />
              ))}
            </div>
          </div>

          {/* Specs */}
          <div>
            <h3 className="section-title">Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.keys(formData.specifications).map((key) => (
                <input
                  key={key}
                  placeholder={key}
                  className="input w-full"
                  value={formData.specifications[key]}
                  onChange={(e) =>
                    handleNestedChange("specifications", key, e.target.value)
                  }
                />
              ))}
            </div>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold">
            Update Product
          </button>
        </form>

        {/* RIGHT – LIVE PREVIEW */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-5 max-h-[85vh] overflow-y-auto">
          <h3 className="text-lg font-semibold text-green-700 mb-4">
            Live Product Preview
          </h3>

          <div className="border rounded-xl overflow-hidden">
            <img
              src={previewImage}
              alt="preview"
              className="h-44 sm:h-48 w-full object-contain"
            />

            <div className="p-4 space-y-2">
              <h4 className="font-bold text-base sm:text-lg">
                {formData.productName || "Product Name"}
              </h4>

              <p className="text-xs sm:text-sm text-gray-500">
                Category: {formData.category || "—"}
              </p>

              <div className="flex gap-3 items-center">
                <span className="text-green-700 font-bold text-base">
                  ₹{formData.discount || formData.price || "0"}
                </span>
                {formData.discount && (
                  <span className="line-through text-gray-400 text-sm">
                    ₹{formData.price}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-4 text-xs">
              {/* Details */}
              <div>
                <h5 className="font-semibold text-green-700 mb-2">
                  🌱 Crop Details
                </h5>
                <div className="space-y-2">
                  {Object.entries(formData.details).map(
                    ([key, value]) =>
                      value && (
                        <div
                          key={key}
                          className="flex justify-between bg-gray-50 px-3 py-2 rounded-md"
                        >
                          <span className="capitalize text-gray-600">
                            {key.replace(/([A-Z])/g, " $1")}
                          </span>
                          <span className="font-medium text-right">
                            {value}
                          </span>
                        </div>
                      ),
                  )}
                </div>
              </div>

              {/* Specs */}
              <div>
                <h5 className="font-semibold text-green-700 mb-2">
                  📌 Specifications
                </h5>
                <div className="grid gap-2">
                  {Object.entries(formData.specifications).map(
                    ([key, value]) =>
                      value && (
                        <div
                          key={key}
                          className="flex justify-between bg-gray-50 px-3 py-2 rounded-md"
                        >
                          <span className="capitalize text-gray-600">
                            {key.replace(/([A-Z])/g, " $1")}
                          </span>
                          <span className="font-medium text-right">
                            {value}
                          </span>
                        </div>
                      ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
