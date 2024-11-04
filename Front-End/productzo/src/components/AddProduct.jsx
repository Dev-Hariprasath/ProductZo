import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategoryChange = (category) => {
    setFormData((prevData) => ({
      ...prevData,
      productCategory: category,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/productzo/api/addProduct",
        formData
      );
      setStatusMessage("Product created successfully!");
    } catch (error) {
      console.error("Error creating product:", error);
      setStatusMessage("Failed to create product.");
    }
  };

  return (
    
    <section className="bg-gray-900 py-12 px-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-[80%] mx-auto bg-white rounded-lg shadow-xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4 lg:col-span-3">
          Add New Product
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
            required
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

        {/* Product Brand */}
        <div>
          <label
            htmlFor="productBrand"
            className="block text-gray-700 font-medium mb-1"
          >
            Product Brand
          </label>
          <input
            type="text"
            id="productBrand"
            name="productBrand"
            value={formData.productBrand}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Product Category */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Product Category
          </label>
          <div className="flex flex-wrap gap-2">
            {["Electronics", "Home Appliances", "Furniture", "Grocery"].map(
              (category) => (
                <label
                  key={category}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    name="productCategory"
                    value={category}
                    checked={formData.productCategory === category}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-1"
                  />
                  <span className="text-gray-700">{category}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Product Availability */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Product Available
          </label>
          <div className="flex gap-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="productAvailable"
                value={true}
                checked={formData.productAvailable === true}
                onChange={() =>
                  setFormData({ ...formData, productAvailable: true })
                }
                className="mr-1"
              />
              <span className="text-gray-700">Yes</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="productAvailable"
                value={false}
                checked={formData.productAvailable === false}
                onChange={() =>
                  setFormData({ ...formData, productAvailable: false })
                }
                className="mr-1"
              />
              <span className="text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Product Quantity */}
        <div>
          <label
            htmlFor="productQuantity"
            className="block text-gray-700 font-medium mb-1"
          >
            Product Quantity
          </label>
          <input
            type="number"
            id="productQuantity"
            name="productQuantity"
            value={formData.productQuantity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center lg:col-span-3 col-span-1">
          <button
            type="submit"
            className="bg-indigo-600/80 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600/90 transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </section>

  );
};

export default AddProduct;
