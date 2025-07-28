import React from "react";
import img2 from "./images/img2.png";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import { Link } from "react-router-dom";
import { useCart } from '../contexts/CartContext.jsx';
import { FaPhoneAlt } from 'react-icons/fa';

function First() {
   const { addToCart } = useCart();
      const handleAddToCart = (product) => {
      // When adding to cart, make sure the price is a number, not a string with '$'
      const numericPrice = parseFloat(product.price.replace('$', ''));
      addToCart({ ...product, price: numericPrice }); // Pass product with numeric price
      alert(`${product.title} has been added to your cart!`);
    };
  const products = [
    {
      id: 1,
      title: "Norton 360 Standard – 1-Year / 2-Device – Global",
      image: img3,
      oldPrice: "$109.99",
      price: "$99.99",
    },
    {
      id: 2,
      title: "Norton 360 Deluxe – 1-Year / 3-Device – Global",
      image: img3,
      oldPrice: "$129.99",
      price: "$109.99",
    },
    {
      id: 3,
      title: "Norton 360 Deluxe – 1-Year / 3-Device – Global",
      image: img3,
      oldPrice: "$129.99",
      price: "$109.99",
    },
    {
      id: 4,
      title: "Norton 360 Deluxe – 1-Year / 3-Device – Global",
      image: img4,
      oldPrice: "$129.99",
      price: "$109.99",
    },
    {
      id: 5,
      title: "Norton 360 Deluxe – 1-Year / 3-Device – Global",
      image: img4,
      oldPrice: "$129.99",
      price: "$109.99",
    },
    {
      id: 6,
      title: "Norton 360 Premium – 1-Year / 10-Device – Global",
      image: img4,
      oldPrice: "$159.99",
      price: "$129.99",
    },
    {
      id: 7,
      title: "Norton 360 Advanced – 1-Year / 5-Device – Global",
      image: img5,
      oldPrice: "$139.99",
      price: "$119.99",
    },
    {
      id: 8,
      title: "Norton 360 Deluxe – 1-Year / 3-Device – Global",
      image: img5,
      oldPrice: "$129.99",
      price: "$109.99",
    },
    {
      id: 9,
      title: "Norton 360 Deluxe – 1-Year / 3-Device – Global",
      image: img5,
      oldPrice: "$129.99",
      price: "$109.99",
    },
    {
      id: 10,
      title: "Norton 360 Deluxe – 1-Year / 3-Device – Global",
      image: img6,
      oldPrice: "$129.99",
      price: "$109.99",
    },
    {
      id: 11,
      title: "Norton 360 Deluxe – 1-Year / 3-Device – Global",
      image: img6,
      oldPrice: "$129.99",
      price: "$109.99",
    },
    {
      id: 12,
      title: "Norton 360 Deluxe – 1-Year / 3-Device – Global",
      image: img6,
      oldPrice: "$129.99",
      price: "$109.99",
    },
  ];

  return (
   <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen space-y-10">
  {/* Banner Section */}
  <div className="w-full flex justify-center">
    <img
      src={img2}
      alt="Banner"
      className="w-full max-w-6xl h-auto object-cover rounded-xl shadow-lg"
    />
  </div>

  {/* Product Grid */}
  <div className="px-2 sm:px-4 md:px-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 sm:p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-40 sm:h-48 w-full object-contain mb-3 sm:mb-4 rounded-lg"
          />
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
            {product.title}
          </h3>
          <div className="text-sm sm:text-md mb-3">
            <span className="line-through text-gray-400 mr-2">
              {product.oldPrice}
            </span>
            <span className="text-black font-bold text-lg sm:text-xl">
              {product.price}
            </span>
          </div>
          <button onClick={() => handleAddToCart(product)}
           className="w-full bg-amber-400 hover:bg-amber-700 text-white py-2 rounded-lg transition duration-200 active:scale-75">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>

  {/* Pagination */}
  <div className="flex flex-wrap justify-center items-center gap-4 mt-6 sm:mt-10 px-4">
    <Link to="/">
      <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-amber-500 hover:text-white transition duration-200 active:scale-75">
        1
      </button>
    </Link>
    <Link to="/Shop3">
      <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-amber-500 hover:text-white transition duration-200 active:scale-75">
        2
      </button>
    </Link>
    <Link to="/">
      <button className="px-4 py-2 bg-amber-400 text-white rounded-md shadow-sm hover:bg-amber-700 transition duration-200 active:scale-75">
        Next
      </button>
    </Link>
  </div>
  {/* Floating Call Now Button */}
      <a
        href="tel:+18339505496" // Direct call link
        className="fixed b-20 right-6 md:bottom-10 md:right-4 bg-yellow-400 text-white p-4 rounded-full shadow-lg hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-700 z-40 animate-spin" 
        aria-label="Call Customer Support"
      >
        <FaPhoneAlt className="text-2xl" />
      </a>

</div>

  );
}

export default First;
