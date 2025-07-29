import React, { useState } from "react";
import img1 from "./images/l2.png";
import { FaSearch, FaShoppingCart, FaPhoneAlt, FaHome, FaStore, FaInfoCircle, FaQuestionCircle, FaFileAlt, FaUndo, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext.jsx";

function Navbar() {
  const { cartItemCount } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value) navigate(value);
  };

  return (
    <div className="bg-blue-50 shadow-md sticky top-0 z-50">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={img1}
              alt="Company Logo"
              className="h-10 w-auto object-contain drop-shadow-lg"
              style={{ maxWidth: 140 }}
            />
          </Link>
        </div>

        {/* Search */}
        <div className="w-full md:max-w-2xl flex bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="I'm searching for..."
            className="flex-grow px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-amber-400"
          />
          <select
            onChange={handleCategoryChange}
            className="bg-gray-100 px-3 py-2 text-gray-600 border-l border-gray-300 outline-none"
          >
            <option value="">All Categories</option>
            <option value="avast">Avast</option>
            <option value="avg">Avg Antivirus</option>
            <option value="mcafee">McAfee</option>
            <option value="norton">Norton</option>
            <option value="trendmicro">Trend Micro</option>
          </select>
          <button className="bg-amber-400 text-white px-4 py-2 hover:bg-amber-500 transition-all">
            <FaSearch />
          </button>
        </div>

        {/* Cart */}
        <div className="relative">
          <Link to="/Cart">
            <FaShoppingCart className="text-amber-400 text-3xl hover:scale-110 transition-transform duration-200 active:scale-90" />
          </Link>
          <span className="absolute -top-2 -right-2 bg-amber-400 text-white text-xs font-bold rounded-full px-1.5 py-0.5 shadow">
            {cartItemCount}
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-gradient-to-r from-amber-400 to-yellow-300 py-4">
        <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-white font-medium px-4">
          <Link to="/">
            <li className="transition duration-200  hover:text-blue-100 cursor-pointer flex items-center gap-1 hover:active:scale-75">
              <FaHome /> Home
            </li>
          </Link>
          <Link to="/Shop">
            <li className="transition duration-200  hover:text-blue-100 cursor-pointer flex items-center gap-1 hover:active:scale-75">
              <FaStore /> Shop
            </li>
          </Link>
          <Link to="/About">
            <li className="transition duration-200  hover:text-blue-100 cursor-pointer flex items-center gap-1 hover:active:scale-75">
              <FaInfoCircle /> About Us
            </li>
          </Link>
          <Link to="/FAQ">
            <li className="transition duration-200  hover:text-blue-100 cursor-pointer flex items-center gap-1 hover:active:scale-75">
              <FaQuestionCircle /> FAQ
            </li>
          </Link>
          <Link to="/Disclaimer">
            <li className="transition duration-200  hover:text-blue-100 cursor-pointer flex items-center gap-1 hover:active:scale-75">
              <FaFileAlt /> Disclaimer
            </li>
          </Link>
          <Link to="/Refund">
            <li className="transition duration-200  hover:text-blue-100 cursor-pointer flex items-center gap-1 hover:active:scale-75">
              <FaUndo /> Refund & Returns
            </li>
          </Link>
          <Link to="/Privacy">
            <li className="transition duration-200  hover:text-blue-100 cursor-pointer flex items-center gap-1 hover:active:scale-75">
              <FaLock /> Privacy Policy
            </li>
          </Link>
          <Link to="/Call">
            <li className="transition duration-200  hover:text-blue-100 cursor-pointer whitespace-nowrap flex items-center gap-1 hover:active:scale-75">
              <FaPhoneAlt /> Call Now: +1 (833) 950-5496
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
