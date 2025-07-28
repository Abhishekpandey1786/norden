import React from "react";
import { useCart } from '../contexts/CartContext.jsx';

function ProductGrid({ products }) {
   const { addToCart } = useCart();
    const handleAddToCart = (product) => {
    // When adding to cart, make sure the price is a number, not a string with '$'
    const numericPrice = parseFloat(product.price.replace('$', ''));
    addToCart({ ...product, price: numericPrice }); // Pass product with numeric price
    alert(`${product.title} has been added to your cart!`);
  };
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4   px-20">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full max-w-xs mx-auto bg-white/80 border border-gray-200 rounded-2xl shadow-lg backdrop-blur-md hover:shadow-2xl transition-all duration-300 p-4 relative flex flex-col justify-between h-[2x40px] group"
        >
          {/* SALE Badge */}
          {product.sale && (
            <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
              SALE
            </span>
          )}

          {/* Discount Badge */}
          {product.discount && (
            <span className="absolute top-3 right-3 bg-yellow-100 text-yellow-700 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow">
              -{product.discount}
            </span>
          )}

          {/* Product Image */}
          <div className="flex justify-center items-center h-48 mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Title */}
          <div className="text-center text-sm font-semibold text-gray-800 mb-1 px-1 leading-tight line-clamp-2">
            {product.title}
          </div>

          {/* Price Section */}
          <div className="text-center mb-4">
            <span className="text-black font-bold text-lg mr-2">
              {product.price}
            </span>
            <span className="line-through text-gray-400 text-sm">
              {product.oldPrice}
            </span>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-auto text-center">
            <button  onClick={() => handleAddToCart(product)}
              className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300 hover:active:scale-75">
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
