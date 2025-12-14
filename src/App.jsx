import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Register from "./pages/Register"
import Login from "./pages/Login"
import AllProducts from "./components/AllProducts"
import { useEffect, useState } from "react"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home isMobile={isMobile}/>} />
            <Route path="/about" element={<About isMobile={isMobile}/>}/>
            <Route path="/contact" element={<Contact isMobile={isMobile}/>}/>
            <Route path="/products" element={<AllProducts isMobile={isMobile}/>}/>
            <Route path="/login" element={<Login  isMobile={isMobile}/>}/>
            <Route path="/signup" element={<Register isMobile={isMobile}/>}/>
          </Routes>
        </main>
        <Footer isMobile={isMobile} />
      </div>
    </Router>
  )
}

export default App
