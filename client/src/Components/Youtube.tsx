const Youtube = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-14 overflow-hidden w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:px-24 lg:p-10 p-5 md:py-5 w-full">
        <div className="w-full">
          <div className="relative pb-[56.25%] w-full h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/X-pEUiJoeVM?si=W-LYP5dZk_2Ur1uU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <div className="w-full">
          <div className="relative pb-[56.25%] w-full h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/CIDhbnt3GeI?si=g9daXuv502-moYIf"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
