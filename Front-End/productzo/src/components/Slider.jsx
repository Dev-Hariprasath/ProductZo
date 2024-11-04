import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay, Keyboard } from 'swiper';
import Typewriter from "typewriter-effect";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import image1 from '../assets/img/diwali.jpg';
import image3 from '../assets/img/light.jpg';
import image5 from '../assets/img/image1.png';
import image6 from '../assets/img/image2.jpg';
import image7 from '../assets/img/image3.jpg';
import image8 from '../assets/img/image4.png';
import image9 from '../assets/img/three.jpg';
import image10 from '../assets/img/four.jpg';

const slide = [
  { img: image1, caption: '' },
  { img: image3, caption: '' },
  { img: image5, caption: '' },
  { img: image6, caption: '' },
  { img: image7, caption: '' },
  { img: image8, caption: '' },
  { img: image9, caption: '' },
  { img: image10, caption: '' },
];

const Slider = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="container mx-auto py-16 px-4">
        <header className="py-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Welcome To{' '}
            <span className="text-indigo-400 inline-block">
              <Typewriter
                options={{
                  strings: ["ProductZo"],
                  autoStart: true,
                  loop: false,
                  delay:75,
                  wrapperClassName: "inline",
                  cursor: '',     
      deleteSpeed: Infinity, 
                }}
              />
            </span>
          </h1>
        </header>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={20}
          slidesPerView="auto"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          keyboard={{ enabled: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay, Keyboard]}
          className="swiper-container w-full max-w-6xl mt-10 custom-swiper-nav"
        >
          {slide.map((sld, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <div className="w-full p-6 bg-white rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                <img
                  src={sld.img}
                  alt={`${sld.caption} slides`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-xl text-center font-semibold text-gray-800 mt-4">
                  {sld.caption}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/*  CSS for Swiper navigation buttons */}
      <style jsx>{`
        .custom-swiper-nav .swiper-button-next,
        .custom-swiper-nav .swiper-button-prev {
          color: #4F46E5; /* Custom color for navigation buttons (indigo) */
        }
        .custom-swiper-nav .swiper-button-next:hover,
        .custom-swiper-nav .swiper-button-prev:hover {
          color: #3B82F6; /* Lighter blue on hover */
        }
      `}</style>
    </div>
  );
};

export default Slider;
