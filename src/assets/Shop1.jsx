import React from "react";
import ProductGrid from "./ProductGrid"; // path adjust करना
import { Link } from "react-router-dom";
import { useState } from "react";
const products = [
  {
    id: 13,
    title: "Avast Anti Track Premium 1PC/1 Year",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/mcafee-internet-security.webp",
    oldPrice: "$39.99",
    price: "$35.99",
    sale: true,
    discount: "10%",
  },
  {
    id: 14,
    title: "Avast Cleanup 10 Devices/ Years",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/mcafee-internet-security.webp",
    oldPrice: "$41.99",
    price: "$33.99",
    sale: true,
    discount: "39%",
  },
  {
    id: 15,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/mcafee-internet-security.webp",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 16,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/mcafee-internet-security.webp",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 17,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/Norton-360.jpg",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 18,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/Norton-360.jpg",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 19,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/Norton-360.jpg",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 20,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/N360-Standard-Subscription-500x500-1.png",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 21,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/N360-Standard-Subscription-500x500-1.png",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 23,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/N360-Standard-Subscription-500x500-1.png",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 24,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/1553175545Norton-AntiVirus-Basic-500x500-3-1-1.png",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 25,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/Norton-Internet-Security-2013-500x500-1.png",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
];

function Shop1() {
    const [sortoption, setSortOption] = useState("");
    const [product, setProduct] = useState(products);
  
    const handleSortChange = (e) => {
      const value = e.target.value;
      setSortOption(value);
  
      let sorted = [...products];
      if (value === "latest") {
        sorted.reverse(); // dummy latest (reverse order)
      } else if (value === "lowToHigh") {
        sorted.sort(
          (a, b) =>
            parseFloat(a.price.replace("$", "")) -
            parseFloat(b.price.replace("$", ""))
        );
      } else if (value === "highToLow") {
        sorted.sort(
          (a, b) =>
            parseFloat(b.price.replace("$", "")) -
            parseFloat(a.price.replace("$", ""))
        );
      }
  
      setProduct(sorted);
    };
  return (
    <div className="bg-white py-6 px-4 max-w-7xl mx-auto mt-6 rounded">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <span className="text-gray-700 text-sm mb-2 md:mb-0">
          Showing {products.length} of 38 results
        </span>
         <select
          value={sortoption}
          onChange={handleSortChange}
          className="border border-gray-300 rounded px-3 py-2 text-sm"
        >
          <option value="">Default sorting</option>
          <option value="popularity">Sort by popularity</option>
          <option value="rating">Sort by average rating</option>
          <option value="latest">Sort by latest</option>
          <option value="lowToHigh">Sort by price: low to high</option>
          <option value="highToLow">Sort by price: high to low</option>
        </select>
      </div>

      <ProductGrid products={product} />
     <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-10 px-2">
  <Link to="/Shop">
    <button className="px-3 sm:px-4 py-2 bg-amber-400 text-white rounded-md shadow-sm hover:bg-amber-700 transition duration-200 active:scale-95">
      Previous
    </button>
  </Link>
  
  <Link to="/Shop">
    <button className="px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-amber-500 hover:text-white transition duration-200 active:scale-95">
      1
    </button>
  </Link>
  
  <Link to="/Shop1">
    <button className="px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-amber-500 hover:text-white transition duration-200 active:scale-95">
      2
    </button>
  </Link>
  
  <Link to="/Shop2">
    <button className="px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-amber-500 hover:text-white transition duration-200 active:scale-95">
      3
    </button>
  </Link>
  
  <Link to="/Shop3">
    <button className="px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-amber-500 hover:text-white transition duration-200 active:scale-95">
      4
    </button>
  </Link>
  
  <Link to="#">
    <button className="px-3 sm:px-4 py-2 bg-amber-400 text-white rounded-md shadow-sm hover:bg-amber-700 transition duration-200 active:scale-95">
      Next
    </button>
  </Link>
</div>

    </div>
  );
}

export default Shop1;
