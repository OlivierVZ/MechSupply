import {Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import './App.css'
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Support from "./pages/Support.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./pages/Cart.jsx";
import Header from "./components/Header.jsx";
import Admin from './pages/Admin.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import Success from "./pages/Success.jsx";



function App() {

  return (
    <>
            <div className="main-container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/success" element={<Success/>} />
                    <Route path="/admin" element={<Admin/>} />
                    <Route path="/admin-login" element={<AdminLogin/>} />
                </Routes>
                <Footer/>
            </div>
    </>
  )
}

export default App
