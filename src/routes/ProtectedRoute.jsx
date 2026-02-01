import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("accessToken")

  if (!user || !token) return <Navigate to="/login" />;
  if (adminOnly && user.role !== "admin")
    return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
