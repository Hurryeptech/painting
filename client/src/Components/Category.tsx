

const Category = () => {
 
 
  return (
    <div className="flex flex-col justify-center items-center mt-14 p-5 overflow-hidden">
      <img src="/assets/banner/category.png" alt="Painting" />
      <div className=" w-full text-gold text-sm  py-2">
        <div className="p-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-24 px-4 py-5">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/assets/category/c1.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/assets/category/c2.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/assets/category/c3.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/assets/category/c4.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/assets/category/c5.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/assets/category/c6.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <img
        src="/assets/banner/more.png"
        alt="more"
        className="md:mt-10 mt-5 lg:px-24 px-10"
      />
    </div>
  );
};

export default Category;
