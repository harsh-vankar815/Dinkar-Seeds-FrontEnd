import { useState, useEffect } from "react";
import { getProfile, logoutUser, updateProfile } from "../services/userApi";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  // temporary editing state
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        setUser(res.data.user);
        setEditData(res.data.user);
      } catch (err) {
        navigate("/login");
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEditData({ ...editData, image: file });
  };

  const handleSave = async () => {
    if (
      !editData.firstName.trim() ||
      !editData.lastName.trim() ||
      !editData.bio.trim()
    ) {
      setError("Firstname, Lastname and Bio cannot be empty");
      return;
    }
    try {
      let uploadedImage = null;
      console.log("uploaded image null", uploadedImage)
      if (editData.image instanceof File) {
        uploadedImage = editData.image;
        console.log("uploaded image ifelse", uploadedImage)
      }
      const res = await updateProfile({
        firstName: editData.firstName,
        lastName: editData.lastName,
        bio: editData.bio,
        image: uploadedImage
      });

      setUser(res.data.user);
      setEditData(res.data.user);
      setIsEditing(false);
      setError("");
    } catch (err) {
      setError("Profile updated failed");
    }
  };

  const handleLogOut = async () => {
    await logoutUser();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleCancel = () => {
    setEditData(user);
    setIsEditing(false);
    setError("");
  };

  const purchasedProducts = [
    {
      id: 1,
      productName: "Rice Seeds",
      category: "Paddy",
      price: "₹330",
      purchaseDate: "12 Dec 2025",
      status: "Delivered",
      img: "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      productName: "Wheat Seeds",
      category: "Cereal",
      price: "₹567",
      purchaseDate: "05 Jan 2026",
      status: "In Transit",
      img: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section className="min-h-screen bg-zinc-100 px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-green-600">
            <img
              src={editData.image instanceof File ? URL.createObjectURL(editData.image): editData.image}
              alt="profile"
              className="w-full h-full object-cover"
            />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute bottom-0 left-0 opacity-0 w-full h-full cursor-pointer"
              />
            )}
          </div>

          {/* User Info */}
          <div className="text-center md:text-left">
            {isEditing ? (
              <>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="firstName"
                    value={editData.firstName}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 mb-3"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={editData.lastName}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 mb-3"
                  />
                </div>
                <textarea
                  name="bio"
                  value={editData.bio}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border rounded-lg px-4 py-2"
                />
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
              </>
            ) : (
              <>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {`${editData.firstName} ${editData.lastName}`}
                </h1>
                <p className="text-gray-600 mt-2 max-w-xl">{user.bio}</p>
              </>
            )}

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                  >
                    Save Profile
                  </button>

                  <button
                    onClick={handleCancel}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setEditData(user);
                    setIsEditing(true);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                >
                  Edit Profile
                </button>
              )}

              {!isEditing && (
                <button
                  onClick={handleLogOut}
                  className="border border-green-600 text-green-700 hover:bg-green-50 px-6 py-2 rounded-lg font-semibold transition"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>

        {/* PURCHASED PRODUCTS */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-6">
            Purchased Products
          </h2>

          {purchasedProducts.length === 0 ? (
            <p className="text-gray-500">No purchases yet.</p>
          ) : (
            <div className="space-y-5">
              {purchasedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row gap-5 border rounded-xl p-4 hover:shadow-md transition"
                >
                  {/* Product Image */}
                  <img
                    src={product.img}
                    alt={product.productName}
                    className="w-full md:w-32 h-32 object-cover rounded-lg"
                  />

                  {/* Product Info */}
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.productName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Category: {product.category}
                    </p>
                    <p className="text-sm text-gray-500">
                      Purchased on: {product.purchaseDate}
                    </p>
                    <p className="font-semibold text-green-700">
                      Price Paid: {product.price}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        product.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
