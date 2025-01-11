import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="md:p-10 p-5 relative overflow-hidden ">

      <img
        src="/assets/angle1.png"
        className="absolute custom-prev  top-1/2 lg:left-20 cursor-pointer md:left-10 left-5 z-10 lg:w-[30px] lg:h-[30px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
        // aria-label="Previous slide"
      />

      <img
        src="/assets/angle2.png"
        className="absolute top-1/2 custom-next lg:right-20 cursor-pointer md:right-10 right-5 z-10 lg:w-[30px] lg:h-[30px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
        // aria-label="Next slide"
      />
      {/* &#8250; */}

      {/* <FaArrowRight /> */}

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next", 
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <img
            src="/assets/newPaints/Bird.jpg "
            alt="Slide 1"
            className="hover:scale-110 h-full w-full object-cover transition-transform duration-300 ease-in-out cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/newPaints/elephant.jpg"
            alt="Slide 2"
            className="hover:scale-110 transition-transform  h-full w-full object-cover duration-300 ease-in-out cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/newPaints/tiger.jpg"
            alt="Slide 3"
            className="hover:scale-110 h-full w-full object-cover transition-transform duration-300 ease-in-out cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/newPaints/girl.jpg"
            alt="Slide 4"
            className="hover:scale-110 h-full w-full object-cover transition-transform duration-300 ease-in-out cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/newPaints/Bird.jpg "
            alt="Slide 1"
            className="hover:scale-110 h-full w-full object-cover transition-transform duration-300 ease-in-out cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/newPaints/elephant.jpg"
            alt="Slide 2"
            className="hover:scale-110 h-full w-full object-cover transition-transform duration-300 ease-in-out cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/newPaints/tiger.jpg"
            alt="Slide 3"
            className="hover:scale-110 h-full w-full object-cover transition-transform duration-300 ease-in-out cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/newPaints/girl.jpg"
            alt="Slide 4"
            className="hover:scale-110 h-full w-full object-cover transition-transform duration-300 ease-in-out cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
