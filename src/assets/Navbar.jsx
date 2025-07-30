import React, { useState } from "react";
import img1 from "./images/l2.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext.jsx";

function Navbar() {
  const { cartItemCount } = useCart();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm.trim()}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="bg-blue-50 shadow-sm">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={img1}
              alt="Company Logo"
              className="h-10 w-auto object-contain"
              style={{ maxWidth: 140 }}
            />
          </Link>
        </div>

        {/* Search */}
        <div className="w-full md:max-w-2xl flex bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="I'm searching for..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 text-gray-700 outline-none"
          />
          <select
            className="bg-gray-100 px-3 py-2 text-gray-600 border-l border-gray-300 outline-none"
          >
            <option value="">All Categories</option>
            <option value="avast">Avast</option>
            <option value="avg">Avg Antivirus</option>
            <option value="mcafee">McAfee</option>
            <option value="norton">Norton</option>
            <option value="trendmicro">Trend Micro</option>
          </select>
          <button
            className="bg-amber-400 text-white px-4 py-2 hover:bg-amber-700 transition"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>

        {/* Cart */}
        <div className="relative">
          <Link to="/Cart">
            <FaShoppingCart className="text-amber-400 text-2xl md:text-3xl active:scale-75" />
          </Link>
          <span className="absolute -top-2 -right-2 bg-white text-amber-700 text-xs rounded-full px-1.5 py-0.5">
            {cartItemCount}
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-amber-400 py-4">
        <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-white font-medium px-4">
          <Link to="/"><li className="hover:text-blue-100">Home</li></Link>
          <Link to="/Shop"><li className="hover:text-blue-100">Shop</li></Link>
          <Link to="/About"><li className="hover:text-blue-100">About Us</li></Link>
          <Link to="/FAQ"><li className="hover:text-blue-100">FAQ</li></Link>
          <Link to="/Disclaimer"><li className="hover:text-blue-100">Disclaimer</li></Link>
          <Link to="/Refund"><li className="hover:text-blue-100">Refund & Returns Policy</li></Link>
          <Link to="/Privacy"><li className="hover:text-blue-100">Privacy Policy</li></Link>
          <li className="hover:text-blue-100 whitespace-nowrap">
            <a href="tel:+18339505496" className="text-lg sm:text-xl font-bold text-white">
              Call Now: +1 (833) 950-5496
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
