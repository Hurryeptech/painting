
import Form from "@/src/Components/Form";
import Newsletter from "@/src/Components/Newsletter";

const ContactSection = () => {
  return (
    <div className="flex h-full  md:flex-row flex-col  justify-center bg-[#301c04]  py-10 items-start gap-4 md:mt-14 mt-5 xl:px-24  px-6 overflow-hidden text-sandal">
      <div className="md:w-1/3 w-full flex  flex-col justify-center items-center font-sans">
        <img src="/assets/logoImg.png" alt="" className="w-full md:h-[250px] lg:[300px] h-[300px]" />
        <div className="flex flex-col   text-center">
          {" "}
          <h2 className="text-lg font-bold">Anand PKC</h2>
          <p className="w-full px-4 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            adipisci consectetur! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <div className="flex lg:flex-row flex-col justify-center font-bold lg:gap-4 mt-6 items-center">
            <p>+1 (978)930-1495 </p>
            <p>info@artmillionsers.com</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 w-full  md:mt-0 mt-2  ">
        <Form />
      </div>
      <div className="md:w-1/3 w-full ">
        <Newsletter/>
      </div>
    </div>
  );
};

export default ContactSection;
