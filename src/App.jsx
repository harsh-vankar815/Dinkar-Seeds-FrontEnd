import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AllProducts from "./components/AllProducts";
import { useEffect, useState } from "react";
import Gallery from "./pages/Gallery";
import SingleProduct from "./components/SingleProduct";
import NotFound from "./components/NotFound";
import Profile from "./pages/Profile";
import ChatBot from "./components/ChatBot";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import AdminProducts from "./admin/AdminProducts";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLayout from "./admin/AdminLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthSuccess from "./components/AuthSuccess";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
      const token = localStorage.getItem("accessToken");
      const storedUser = localStorage.getItem("user")
      if (token && storedUser) {
        setUser(JSON.parse(storedUser))
      } else {
        setUser(null)
      }
  }, [location.pathname]);

  // ✅ Detect admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header only for non-admin */}
      <Header currentUser={user} />

      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
           <Route path="/auth/success" element={<AuthSuccess />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* ab bina login ke profile open nahi hogi */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="edit-product/:id" element={<EditProduct />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer only for non-admin */}
      {!isAdminRoute && <Footer />}

      {/* Chatbot only for public site */}
      {!isAdminRoute && <ChatBot />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
