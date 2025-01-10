import Carousel from "./Carousel";
const Category = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-14 overflow-hidden">
      <img src="/assets/banner/new.png" alt="Category" />
      <div className=" w-full text-gold text-sm font-bold py-2 ">
        <Carousel />
      </div>
      <img
        src="/assets/banner/view.png"
        alt="view"
        className="md:mt-10 mt-5 mb-5 md:mb-10 lg:px-24 px-10"
      />
    </div>
  );
};

export default Category;
