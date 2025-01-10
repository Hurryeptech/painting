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

const TypedSlider = Slider as unknown as React.ComponentType<any>;
  return (
    <div className="slider-container  text-sandal text-lg  py-2 border-2 border-t border-b border-sandal overflow-hidden">
      <TypedSlider {...settings}>
        <div className="text-center">
          <h3>Work with your own art advisor / Rebecca Wilson</h3>
        </div>
        <div className="text-center">
          <h3>Work with your own art advisor / Rebecca Wilson</h3>
        </div>
        <div className="text-center">
          <h3>Work with your own art advisor / Rebecca Wilson</h3>
        </div>
        <div className="text-center">
          <h3>Work with your own art advisor / Rebecca Wilson</h3>
        </div>
        <div className="text-center">
          <h3>Work with your own art advisor / Rebecca Wilson</h3>
        </div>
        <div className="text-center">
          <h3>Work with your own art advisor / Rebecca Wilson</h3>
        </div>
      </TypedSlider>
    </div>
  );
};

export default AutoPlay;
