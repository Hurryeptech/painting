import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default styles

const DemoCarousel = () => {
  return (
    <div className="md:py-10 py-5 overflow-hidden  lg:px-24 w-full md:px-8 px-4">
      {" "}
      {/* Set fixed width */}
      <Carousel
        showArrows={false}
        infiniteLoop
        autoPlay
        dynamicHeight={false}
        showIndicators={false}
        showThumbs={true}
        showStatus={false}
      >
        <div>
          <img src="assets/slider/s2.png" alt="Slide 2" />
        </div>
        <div>
          <img src="assets/slider/s3.png" alt="Slide 3" />
        </div>
        <div>
          <img src="assets/slider/s4.png" alt="Slide 4" />
        </div>
        <div>
          <img src="assets/slider/s5.png" alt="Slide 5" />
        </div>
        <div>
          <img src="assets/slider/s6.png" alt="Slide 6" />
        </div>
        <div>
          <img src="assets/slider/s7.png" alt="Slide 7" />
        </div>
        <div>
          <img src="assets/slider/s8.png" alt="Slide 8" />
        </div>
        <div>
          <img src="assets/slider/s9.png" alt="Slide 9" />
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
