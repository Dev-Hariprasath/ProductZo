import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    prdId: "",
    productName: "",
    productDescription: "",
    productRating: 0,
    productImageUrl: "",
    prdPrice: 0,
    productBrand: "",
    productCategory: "",
    productAvailable: false,
    productQuantity: 0,
  });
  const [statusMessage, setStatusMessage] = useState("");

  // Fetch product details
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/productzo/api/products/${productId}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setStatusMessage("Failed to fetch product details.");
      }
    };

    fetchProductDetails();
  }, [productId]);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Submit the form to update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/productzo/updateProduct`,
        formData
      );
      setStatusMessage("Product updated successfully!");
      navigate(`/`);
    } catch (error) {
      console.error("Error updating product:", error);
      setStatusMessage("Failed to update product.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12 px-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-[80%] mx-auto bg-white rounded-lg shadow-xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4 lg:col-span-3">
          Update Product
        </h2>
        {statusMessage && (
          <p className="text-center mb-2 text-green-600 lg:col-span-3">
            {statusMessage}
          </p>
        )}
        {/* Product ID */}
        <div>
          <label
            htmlFor="prdId"
            className="block text-gray-700 font-medium mb-1"
          >
            Product ID
          </label>
          <input
            type="number"
            id="prdId"
            name="prdId"
            value={formData.prdId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            readOnly
          />
        </div>

        {/* Product Name */}
        <div>
          <label
            htmlFor="productName"
            className="block text-gray-700 font-medium mb-1"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Product Rating */}
        <div>
          <label
            htmlFor="productRating"
            className="block text-gray-700 font-medium mb-1"
          >
            Product Rating
          </label>
          <input
            type="number"
            id="productRating"
            name="productRating"
            value={formData.productRating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Product Description */}
        <div className="lg:col-span-3">
          <label
            htmlFor="productDescription"
            className="block text-gray-700 font-medium mb-1"
          >
            Product Description
          </label>
          <textarea
            id="productDescription"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="2"
            required
          ></textarea>
        </div>

        {/* Product Image URL */}
        <div>
          <label
            htmlFor="productImageUrl"
            className="block text-gray-700 font-medium mb-1"
          >
            Product Image URL
          </label>
          <input
            type="url"
            id="productImageUrl"
            name="productImageUrl"
            value={formData.productImageUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Product Price */}
        <div>
          <label
            htmlFor="prdPrice"
            className="block text-gray-700 font-medium mb-1"
          >
            Product Price
          </label>
          <input
            type="number"
            id="prdPrice"
            name="prdPrice"
            value={formData.prdPrice}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center lg:col-span-3 col-span-1">
          <button
            type="submit"
            className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-200"
          >
            Update Product
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateProduct;
