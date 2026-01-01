const NotFound = () => {
  return (
    <div className="min-h-[50vh] bg-zinc-100 flex items-center justify-center">
      <div className="text-center">
        <div className="text-center flex flex-col gap-5">
          <h2 className="text-7xl text-green-700 ">404</h2>
          <h2 className="text-7xl font-bold text-green-700 font-amatic mb-4">
            Page Not Found
          </h2>
        </div>
        <button
          onClick={() => navigate("/products")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
