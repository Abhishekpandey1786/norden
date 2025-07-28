import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductGrid from "./ProductGrid";

const products = [
  {
    id: 1,
    title: "Avast Anti Track Premium 1PC/1 Year",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/Norton-Internet-Security-2013-500x500-1.png",
    oldPrice: "$39.99",
    price: "$35.99",
    sale: true,
    discount: "10%",
  },
  {
    id: 2,
    title: "Avast Cleanup 10 Devices/ Years",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/Norton-Internet-Security-2013-500x500-1.png",
    oldPrice: "$41.99",
    price: "$33.99",
    sale: true,
    discount: "39%",
  },
  {
    id: 3,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/Norton-Security-500x500-1.png",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 4,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/Norton-Security-500x500-1.png",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 5,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/91J4d08nL3L-300x300.jpg",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 6,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/91SLysH7zxL._AC_-300x300.jpg",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 7,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/91SLysH7zxL._AC_-300x300.jpg",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 8,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/06/Webroot-Internet-SecureAnywhere-768x768-1-600x600.webp",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 9,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/06/Webroot-Internet-Security-Complete-with-Antivirus-Protection-for-5-Device-1-Year-Subscription-600x600.webp",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 10,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/06/Webroot-Internet-Security-Complete-with-Antivirus-Protection-for-5-Device-1-Year-Subscription-600x600.webp",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 11,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/04/avg-anti_prev_ui-600x600.jpg",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
  {
    id: 12,
    title: "Avast Internet Security 2-years / 1-pc – Global",
    image:
      "https://www.onesolutionavshop.store/wp-content/uploads/2025/06/0000369_webroot-secureanywhere-antivirus-1-year-1-device_550.webp",
    oldPrice: "$39.99",
    price: "$36.99",
    sale: true,
    discount: "",
  },
];
function ProductListPage() {
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
      {/* Top bar */}
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

export default ProductListPage;
