import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; 
import { IoArrowBack } from "react-icons/io5";

const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        productName: '',
        prdPrice: 0,
        productDescription: '',
        productImageUrl: '',
        productAvailable: false,
        productRating: 0
    });
    const [loading, setLoading] = useState(true);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/productzo/api/products/${productId}`);
                setProduct(response.data);
                setAverageRating(response.data.productRating || 0);
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/productzo/api/delete/${productId}`);
            navigate("/");
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleUpdate = () => {
        navigate(`/products/update/${productId}`);
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating);

        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} className="text-yellow-400" />
                ))}
                {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
                ))}
            </>
        );
    };

    if (loading) return <div className="text-center text-lg text-white">Loading product details...</div>;
    if (!product) return <div className="text-center text-lg text-white">Product not found.</div>;

    return (
        <div className="container mx-auto py-12 px-6 bg-gray-900 min-h-screen ">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-lg shadow-md transition duration-150"
            >
                <IoArrowBack />
            </button>
            <div className="max-w-[85%] flex flex-col md:flex-row mx-4 md:mx-28 items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full md:w-1/2 p-4">
                    <img
                        src={product.productImageUrl || 'https://via.placeholder.com/400'}
                        alt={product.productName}
                        className="w-full h-96 object-cover object-center rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-between bg-gray-100">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">{product.productName}</h2>
                        <p className="text-green-600 text-2xl font-semibold mb-4">
                            ${product.prdPrice ? product.prdPrice.toFixed(2) : 'N/A'}
                        </p>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">{product.productDescription}</p>
                        <p className={`text-sm mb-4 ${product.productAvailable ? "text-green-500" : "text-red-500"}`}>
                            {product.productAvailable ? "Available" : "Out of Stock"}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Average Rating</h3>
                        <div className="flex items-center mb-4">
                            {renderStars(averageRating)}
                            <span className="text-sm ml-2 text-gray-600">{averageRating.toFixed(1)} Rating</span>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <button
                                onClick={handleUpdate}
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-200"
                            >
                                Update
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
