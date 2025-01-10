import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css"; // Import the necessary styles

const CarouselComponent = () => {
  const options = {
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
  };

  return (
    <div>
      <h2>React Owl Carousel</h2>
      <OwlCarousel options={options}>
        <div className="item">
          <h4>Item 1</h4>
        </div>
        <div className="item">
          <h4>Item 2</h4>
        </div>
        <div className="item">
          <h4>Item 3</h4>
        </div>
        <div className="item">
          <h4>Item 4</h4>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default CarouselComponent;
