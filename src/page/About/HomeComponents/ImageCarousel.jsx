import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ImageCarousel = () => {
  const images = [
    "/assets/about-2.png",
    "/assets/about-3.png",
    "/assets/about-4.png",
    "/assets/about-2.png",
    "/assets/about-4.png",
    "/assets/about-3.png",
    "/assets/about-4.png",
    "/assets/about-3.png",
    "/assets/about-4.png",
  ];



  return (
    <div className="w-140">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}      
        slidesPerGroup={1}     
        loop={true}            
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              className="rounded-lg shadow-md  object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
