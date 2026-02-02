import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const storedUser = localStorage.getItem("user");
  const token = localStorage.getItem("accessToken")

  let user = null;
  try {
    user = storedUser ? JSON.parse(storedUser): null;
  } catch (err) {
    console.error("Invalid user data in localStorage", err);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" replace />;
  }

  if (!user || !token) return <Navigate to="/login" />;
  if (adminOnly && user.role !== "admin")
    return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
