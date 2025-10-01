import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Register from "./pages/Register"
import Login from "./pages/Login"
import AllProducts from "./components/AllProducts"

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/products" element={<AllProducts/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Register/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
