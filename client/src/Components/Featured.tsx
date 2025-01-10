import React from 'react'
import FeaturedSlider from "@/src/Components/FeaturedSlider";
const Featured = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-14 overflow-hidden">
      <img src="/assets/banner/feature.png" alt="feature" />
      <div className=" w-full text-gold text-sm font-bold py-2 ">
        <FeaturedSlider />
      </div>
    </div>
  );
}

export default Featured