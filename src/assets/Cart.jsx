// src/assets/Cart.js
import React from 'react';
import { useCart } from '../contexts/CartContext'; // Adjust path if needed
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTrash, FaArrowRight } from 'react-icons/fa'; // Added icons

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // If the cart is empty, display a professional message
  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-[calc(100vh-100px)] flex flex-col items-center justify-center p-6">
        <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-lg w-full transform transition-all duration-300 hover:scale-105">
          <FaShoppingCart className="text-amber-500 text-6xl mb-6 mx-auto" />
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            Your Shopping Cart is Empty!
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            It looks like you haven't added any products yet. Browse our selection and add items to your cart to get started.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            Go to Shop <FaArrowRight className="ml-3" />
          </Link>
        </div>
      </div>
    );
  }

  // Calculate total amount
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-100px)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Your Shopping Cart
        </h2>

        {/* Cart Items List */}
        <div className="divide-y divide-gray-100 border-t border-b border-gray-100 mb-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between py-6 group hover:bg-gray-50 transition duration-150 rounded-lg -mx-4 px-4"
            >
              <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                {/* Ensure the image paths are correct and accessible */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-contain mr-6 rounded-lg shadow-sm border border-gray-100 p-2"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-base mb-1">Quantity: {item.quantity}</p>
                  <p className="text-black font-bold text-xl">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-base transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 flex items-center"
              >
                <FaTrash className="mr-2" /> Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-100">
          <p className="text-3xl font-extrabold text-gray-900 mb-6 sm:mb-0">
            Total: <span className="text-black">${totalAmount.toFixed(2)}</span>
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <button
              onClick={clearCart}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold px-8 py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
            >
              Proceed to Checkout <FaArrowRight className="ml-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;