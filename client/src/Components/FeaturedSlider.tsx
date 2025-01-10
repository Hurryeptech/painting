import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function FeaturedSlider() {
 const settings = {
   dots: false,
   arrows: false,
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   autoplay: true,
   speed: 5000,
   autoplaySpeed: 3000,
   cssEase: "linear",
   responsive: [
     {
       breakpoint: 1024, 
       settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
       },
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
       },
     },
     {
       breakpoint: 480, 
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
 };
 
const TypedSlider = Slider as unknown as React.ComponentType<any>;
  return (
    <div className="slider-container  md:py-20 py-10 overflow-hidden lg:px-24 px-5">
      <TypedSlider
        {...settings}
        className="feature flex items-center justify-center"
      >
        <div className="text-center  xl:w-[500px] xl:h-[380px] md:w-[200px] md:h-[200px] rounded-lg w-[90%] h-[300px] md:me-6 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
          <img
            src="/assets/featured/f1.png"
            alt=""
            className="xl:w-[500px] xl:h-[380px] md:w-[200px] md:h-[200px]  w-[90%] h-[300px] bg-white rounded-lg"
          />
        </div>
        <div className="text-center xl:w-[500px] md:w-[200px] md:h-[200px] xl:h-[380px] rounded-lg  w-[90%]  h-[300px] md:me-6 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
          <img
            src="/assets/featured/f2.jpg"
            alt=""
            className="xl:w-[500px] xl:h-[380px]  md:w-[200px] md:h-[200px] w-[90%]  h-[300px] bg-white rounded-lg"
          />
        </div>
        <div className="text-center xl:w-[500px] xl:h-[380px] md:w-[200px] md:h-[200px] rounded-lg  w-[90%]  h-[300px] md:me-6 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
          <img
            src="/assets/featured/f3.png"
            alt=""
            className="xl:w-[500px] xl:h-[380px] md:w-[200px] md:h-[200px]  w-[90%]  h-[300px] bg-white rounded-lg"
          />
        </div>
        <div className="text-center xl:w-[500px] xl:h-[380px] md:w-[200px] md:h-[200px] rounded-lg w-[90%] h-[300px]  md:me-6 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
          <img
            src="/assets/featured/f1.png"
            alt=""
            className="xl:w-[500px] xl:h-[380px] md:w-[200px] md:h-[200px]  w-[90%] h-[300px] bg-white rounded-lg"
          />
        </div>
        <div className="text-center xl:w-[500px] xl:h-[380px] md:w-[200px] md:h-[200px] rounded-lg  w-[90%] h-[300px] md:me-6 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
          <img
            src="/assets/featured/f2.jpg"
            alt=""
            className="xl:w-[500px] xl:h-[380px]  md:w-[200px] md:h-[200px]  w-[90%] h-[300px] bg-white rounded-lg"
          />
        </div>
        <div className="text-center xl:w-[500px] xl:h-[380px] md:w-[200px] md:h-[200px] rounded-lg w-[90%] h-[300px] md:me-6 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
          <img
            src="/assets/featured/f3.png"
            alt=""
            className="xl:w-[500px] xl:h-[380px] md:w-[200px] md:h-[200px]  w-[90%] h-[300px] bg-white rounded-lg"
          />
        </div>
      </TypedSlider>
    </div>
  );
}

export default FeaturedSlider;
