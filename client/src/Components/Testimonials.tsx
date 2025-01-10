import React from "react";
import TestimonialSlider from "./TestimonialSlider";
const Featured = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mt-20 mt-10 overflow-hidden">
      <img src="/assets/banner/testimonial.png" alt="feature" />
      <div className=" w-full ">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Featured;
