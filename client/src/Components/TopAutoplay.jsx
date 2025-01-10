// components/Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function AutoPlay() {
 const settings = {
   dots: false,
   infinite: true,
   slidesToShow: 1,
   autoplay: true,
   speed: 9000,
   autoplaySpeed: 500,
   cssEase: "linear",
 };
  return (
    <div className="slider-container bg-black text-sandal text-[16px]  py-2 overflow-hidden">
      <Slider {...settings}>
        <div className="text-center">
          <h3 className="flex items-center justify-center text-[16px] ">
            Free Shipping on All Orders | World Class Oil Paintings
          </h3>
        </div>
        <div className="text-center">
          <h3 className="flex items-center justify-center text-[16px] ">
            Free Shipping on All Orders | World Class Oil Paintings
          </h3>
        </div>
        <div className="text-center">
          <h3 className="flex items-center justify-center text-[16px] ">
            Free Shipping on All Orders | World Class Oil Paintings
          </h3>
        </div>
        <div className="text-center">
          <h3 className="flex items-center justify-center text-[16px]">
            Free Shipping on All Orders | World Class Oil Paintings
          </h3>
        </div>
        <div className="text-center">
          <h3 className="flex items-center justify-center text-[16px] ">
            Free Shipping on All Orders | World Class Oil Paintings
          </h3>
        </div>
        <div className="text-center">
          <h3 className="flex items-center justify-center text-[16px] ">
            Free Shipping on All Orders | World Class Oil Paintings
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlay;
