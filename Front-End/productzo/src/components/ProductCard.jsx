import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";

const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<MdOutlineStar key={i} className="text-yellow-400" />);
    }
    if (rating % 1 !== 0) {
      stars.push(<MdOutlineStarHalf key="half" className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <Link to={`/products/${product.prdId}`}>
      <div className="w-80 p-4 bg-white text-gray-700 shadow-lg rounded-lg overflow-hidden ">
        <img
          src={product.productImageUrl || "./src/assets/img/default.jpg"}
          alt={product.productName || "Product Image"}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="p-4 flex flex-col gap-3">
          <div className="flex gap-2 text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full items-center">
            <span>
              {product.productAvailable ? (
                <span className="text-green-500">In Stock</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </span>
            <span>|</span>
            <span>Official Store</span>
          </div>

          <h2
            className="font-semibold text-lg text-gray-800 truncate"
            title={product.productName || "Product"}
          >
            {product.productName || "Product"}
          </h2>
          <p
            className="font-light text-sm text-gray-800 truncate"
            title={product.productDescription || "Product Description"}
          >
            {product.productDescription || "Product Description"}
          </p>

          <div className="flex flex-col">
            <div className="flex items-center text-gray-900 text-xl font-bold">
              <BsCurrencyDollar />
              <span>
                {product.prdPrice ? product.prdPrice.toFixed(2) : "0.00"}
              </span>
            </div>
            {product.originalPrice && (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm line-through text-gray-400">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-md">
                  Save{" "}
                  {Math.round(
                    ((product.originalPrice - product.prdPrice) /
                      product.originalPrice) *
                      100
                  )}
                  %
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center mt-2">
            <span className="flex items-center">
              {renderStars(product.productRating || 0)}
            </span>
            <span className="text-xs ml-2 text-gray-500">
              {product.productRating || 0} Rating
            </span>
          </div>

          <div className="mt-4 flex gap-3">
            <button className="flex-1 bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-600 transition">
              Add to Cart
            </button>
            <button className="bg-gray-200 text-gray-600 p-2 rounded-md hover:bg-gray-300 transition">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
