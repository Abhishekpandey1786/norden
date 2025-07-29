import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Navbar";
import First from "./assets/First";
import Footer from "./assets/Footer";
import About from "./assets/About";
import Shop from "./assets/Shop";
import Shop1 from "./assets/Shop1";
import Shop2 from "./assets/Shop2";
import Shop3 from "./assets/Shop3";
import FAQ from "./assets/FAQ";
import Disclaimer from "./assets/Disclaimer";
import Refund from "./assets/Refund";
import Privacy from "./assets/Privacy";
import Terms from "./assets/Terms";
import Cooki from "./assets/Cooki";
import Checkout from "./assets/Checkout";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./assets/Cart";

function App() {
  return (
    <Router>
       <CartProvider>
              <Navbar />
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/about" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shop1" element={<Shop1 />} />
        <Route path="/Shop2" element={<Shop2 />} />
        <Route path="/Shop3" element={<Shop3 />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Cooki" element={<Cooki />} />
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
      </CartProvider>

    </Router>
  );
}

export default App;
