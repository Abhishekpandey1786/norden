import React from "react";
import { Link } from "react-router-dom";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import { FaEnvelope, FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">

        {/* QUICK MENU */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-amber-400 w-fit pb-1">
            QUICK MENU
          </h3>
          <ul className="space-y-2  text-xl">
            <li><Link to="/Shop" className="hover:text-amber-400 transition-all">Shop</Link></li>
            <li><Link to="/Cart" className="hover:text-amber-400 transition-all">Cart</Link></li>
            <li><Link to="/Checkout" className="hover:text-amber-400 transition-all">Checkout</Link></li>
            <li><Link to="/Cooki" className="hover:text-amber-400 transition-all">Cookies Policy</Link></li>
            <li><Link to="/Privacy" className="hover:text-amber-400 transition-all">Privacy Policy</Link></li>
            <li><Link to="/Refund" className="hover:text-amber-400 transition-all">Refund & Returns</Link></li>
            <li><Link to="/Terms" className="hover:text-amber-400 transition-all">Terms & Conditions</Link></li>
            <li><Link to="/FAQ" className="hover:text-amber-400 transition-all">FAQ</Link></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <Link to="/Shop">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-amber-400 w-fit pb-1">
              PRODUCTS
            </h3>
          </Link>
          <ul className="space-y-4 text-2xl">
            {[img3, img4, img5, img6].map((img, index) => {
              const productTitles = [
                "Norton 360 Deluxe – 1-Year / 5-Device – Global",
                "Norton 360 Standard – 1-Year / 1-Device – Global",
                "Norton Internet Security – 2-Year / 2-PC",
                "Norton Anti Virus Plus 1 Year 1 Device"
              ];
              const prices = [
                { current: "$102.99", original: "$129.99" },
                { current: "$89.99", original: "$109.99" },
                { current: "$78.99", original: "$89.99" },
                { current: "$29.99", original: "$37.99" },
              ];

              return (
                <li key={index} className="flex items-start">
                  <img src={img} alt="" className="w-12 h-14 object-contain mr-3" />
                  <div>
                    <p className="text-sm">{productTitles[index]}</p>
                    <span className="font-bold text-xs">{prices[index].current}</span>{" "}
                    <span className="line-through text-yellow-400 text-xs">{prices[index].original}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* PAYMENTS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-amber-400 w-fit pb-1">
            SSL SECURE PAYMENTS
          </h3>
          <div className="space-y-4 mt-3">
            <img
              src="https://www.onesolutionavshop.store/wp-content/uploads/2025/04/Secure-payment-images.png"
              alt="Payment Methods"
              className="w-44 h-auto object-contain"
            />
            <img
              src="https://www.onesolutionavshop.store/wp-content/uploads/2025/04/ssl.png"
              alt="SSL Secure"
              className="w-36 h-auto object-contain"
            />
            <img
              src="https://www.onesolutionavshop.store/wp-content/uploads/2025/04/images-1-1.jpg"
              alt="Money Back"
              className="w-44 h-auto object-contain"
            />
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-amber-400 w-fit pb-1">
            CONTACT US
          </h3>
          <div className="text-sm space-y-3">
            <div className="flex items-start gap-2">
              <FaEnvelope className="text-amber-400 mt-1" />
              <div>
                <span className="text-gray-400"> contact@securesphereav.store</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FaGlobe className="text-amber-400 mt-1" />
              <span className="text-gray-400 break-all">
                https:// contact@securesphereav.store
              </span>
            </div>
            <img
              src="https://www.onesolutionavshop.store/wp-content/uploads/2025/04/bbb-business-png-logo-2-300x111-2.png"
              alt="BBB Accredited"
              className="w-44 h-auto object-contain"
            />
            <img
              src="https://www.onesolutionavshop.store/wp-content/uploads/2025/04/NORTON-LOGO.jpg"
              alt="Norton Authorized"
              className="w-36 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-gray-400 mt-6">
        © 2025 – WordPress Theme: <span className="text-amber-400">SparkleStore</span> by Sparkle Themes
      </div>
    </footer>
  );
}

export default Footer;
