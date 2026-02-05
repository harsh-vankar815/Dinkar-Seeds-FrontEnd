import { useEffect, useState } from "react";
import { Trash2, Upload } from "lucide-react";
import API from "../api/axios";
import {
  deleteGalleryImage,
  getGalleryImages,
  uploadGalleryImage,
} from "../services/galleryApi";

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const server_url = import.meta.env.VITE_SERVER_URL;

  const fetchGallery = async () => {
    try {
      const { data } = await getGalleryImages();
      console.log(data.images);
      setImages(data.images);
    } catch (err) {
      console.error(err);
      setImages([]);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select an image");
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("src", file);

      await uploadGalleryImage(formData);

      setFile(null);
      fetchGallery();
      alert("image uploaded successfully");
    } catch (err) {
      console.error(err);
      alert("image upload filed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("delete this image?");
    if (!confirm) return;

    await deleteGalleryImage(id);
    fetchGallery();
  };

  return (
    <section className="min-h-screen bg-zinc-100 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        🖼️ Admin Gallery
      </h1>

      {/* //upload box */}
      <form
        onSubmit={handleUpload}
        className="bg-white p-4 rounded-lg shadow mb-8 flex flex-col md:flex-row gap-4"
      >
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 rounded w-full"
        />

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          <Upload size={18} />
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {/* Gallery Grid */}
      {images?.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...images].reverse().map((img) => (
            <div key={img._id} className="relative bg-white rounded-lg shadow">
              <img
                src={`${server_url}${img.src}`}
                alt={img.alt}
                className="w-full h-40 object-cover rounded-lg"
              />
              <button
                onClick={() => handleDelete(img._id)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No images found</p>
      )}
    </section>
  );
};

export default AdminGallery;
