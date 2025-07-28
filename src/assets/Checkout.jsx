// src/assets/Checkout.js
import React, { useState } from "react"; // Import useState for form inputs
import { useCart } from "../contexts/CartContext"; // Adjust path if needed
import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaCreditCard, FaLock } from "react-icons/fa"; // Added icons

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  // State for placeholder form inputs
  const [fullName, setFullName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");

  // Redirect if cart is empty, or show a message
  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-100 min-h-[calc(100vh-100px)] flex flex-col items-center justify-center p-6">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            Your Cart is Empty!
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            It looks like you haven't added any items to your cart yet. Please
            browse our products to start your order.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = 5.0; // Example fixed shipping cost
  const taxRate = 0.08; // Example 8% tax rate
  const tax = subtotal * taxRate;
  const total = subtotal + shippingCost + tax;

  const handlePlaceOrder = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic form validation
    if (!fullName || !addressLine1 || !city || !zipCode || !email) {
      alert("Please fill in all shipping and contact details.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }
    // In a real application, you'd integrate with a payment gateway here
    // and send the form data, cart items, etc., to your backend.

    alert(
      "There are no payment methods available. This may be an error on our side. Please contact us if you need any help placing your order."
    );
    clearCart();
    navigate("/shop");
  };

  return (
    <div className="bg-gray-100 min-h-[calc(100vh-100px)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Secure Checkout
        </h2>

        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {/* Shipping & Payment Section */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaCreditCard className="mr-3 text-amber-500" />
              Shipping & Payment Details
            </h3>

            {/* Shipping Address */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-700 mb-4">
                Shipping Address
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john.doe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="addressLine1"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    id="addressLine1"
                    placeholder="123 Main St"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="New York"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    placeholder="10001"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Placeholder */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                <FaShieldAlt className="mr-2 text-green-600" />
                Payment Method
              </h4>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-blue-800 mb-3 flex items-center">
                  <FaLock className="mr-2" />
                  All transactions are secure and encrypted.
                </p>

                <div className="bg-white p-4 border border-gray-200 rounded-md">
                  <p className="text-gray-700 mb-4">
                    There are no payment methods available. This may be an error
                    on our side. Please contact us if you need any help placing
                    your order.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-fit sticky top-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Order Summary
            </h3>
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-3"
                >
                  <span className="text-lg text-gray-700">
                    {item.name} (x{item.quantity})
                  </span>
                  <span className="text-lg font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 mt-4 space-y-3 text-lg">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping:</span>
                <span className="font-semibold">
                  ${shippingCost.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax ({taxRate * 100}%):</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-5 mt-5 flex justify-between font-bold text-3xl text-gray-900">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              type="submit" // Changed to type="submit" to trigger form submission
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-lg mt-8 text-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 flex items-center justify-center"
            >
              <FaCreditCard className="mr-3" />
              Place Order
            </button>

            <p className="text-sm text-center text-gray-500 mt-4 flex items-center justify-center">
              <FaShieldAlt className="mr-1 text-green-500" />
              Your information is safe and secure.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
