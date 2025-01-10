import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container md:py-20 py-10 overflow-hidden lg:px-24 px-4">
      <Slider {...settings} className="py-4 ">
        <div>
          <img
            src="/assets/testimonials/t1.png"
            alt="Testimonial 1"
            className="rounded-sm "
          />
        </div>
        <div>
          <img
            src="/assets/testimonials/t1.png"
            alt="Testimonial 1"
            className=" rounded-sm "
          />
        </div>
        <div>
          <img
            src="/assets/testimonials/t1.png"
            alt="Testimonial 1"
            className=" rounded-sm"
          />
        </div>{" "}
        <div>
          <img
            src="/assets/testimonials/t1.png"
            alt="Testimonial 1"
            className=" rounded-sm "
          />
        </div>
        <div>
          <img
            src="/assets/testimonials/t1.png"
            alt="Testimonial 1"
            className=" rounded-sm "
          />
        </div>
        <div>
          <img
            src="/assets/testimonials/t1.png"
            alt="Testimonial 1"
            className=" rounded-sm "
          />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
