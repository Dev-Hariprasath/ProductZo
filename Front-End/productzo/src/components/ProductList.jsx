import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import ProductCard from "./ProductCard";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const groupByCategory = (products) => {
  return products.reduce((acc, product) => {
    const category = product.productCategory || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
};

const ProductList = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/productzo/api/products"
        );
        setProducts(groupByCategory(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="min-h-screen bg-gray-900 py-5 px-5">
      <div className="product-list">
        {Object.keys(products).map((category) => (
          <section
            key={category}
            id={category.toLowerCase().replace(" ", "-")} // category name
            className="category-section mb-10"
          >
            <h2 className="text-2xl text-center font-bold text-white mb-4">
              {category.toUpperCase()}
            </h2>
            <Swiper
              spaceBetween={10} //  space between for smallest screens
              slidesPerView={1.2}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              modules={[Autoplay]}
              breakpoints={{
                680: {
                  slidesPerView: 2,
                  spaceBetween: 10, //  for small screens (>= 640px)
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20, // for medium screens (>= 768px)
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 25, //  for large screens (>= 1024px)
                },
              }}
            >
              {products[category].map((product) => (
                <SwiperSlide key={product.prdId}>
                  {/* passing the product object to product card page  */}
                  <ProductCard product={product} /> 
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
