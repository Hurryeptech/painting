import { getClassics, getPaintings } from "@/src/AuthPages/auth";
import { Rate } from "antd";
import { useEffect, useState } from "react";
import Lens from "@/src/Components/lens";
import { useRouter } from "next/navigation";

const ProductDescription = ({ id }) => {
  const [product, setProduct] = useState(null);
  const router = useRouter();

  const handleBuy = (id) => {
    router.push(`/Home/checkout/${id}`);
    // console.log(id);
  };

 useEffect(() => {
   const fetchPaintings = async () => {
     try {
      const data=await getPaintings();
      const data2=await getClassics();
       const products = data.paintings || [];
       const classics = data2.classics || [];
       const combinedList = [...products, ...classics];

       const selectedProduct = combinedList.find(
         (painting) => painting._id === id
       );

       setProduct(selectedProduct);
     } catch (error) {
       console.error("Error fetching paintings or classics:", error);
     }
   };

   fetchPaintings();
 }, [id]);


  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full text-sandal text-sm ">
        <div className=" md:px-24 px-2 py-4">
          <div className="mb-5">
            <p className="font-bold text-xl text-sandal">
              Product Description :
              <span className="text-sm font-normal text-white ms-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                accusamus sunt odit ratione eaque. Impedit corrupti eaque atque
                quas amet.
              </span>
            </p>
            <p className="font-bold mt-2 text-sandal">
              Product ID :
              <span className="text-sm font-normal text-white ms-2">{id}</span>
            </p>
          </div>
          {product ? (
            <>
              <div className="md:flex gap-4">
                <div className="md:w-1/2 w-full  flex justify-center items-center">
                  <Lens productImage={product.image} />
                </div>

                <div className="md:w-1/2 w-full lg:pt-10 md:p-5 pt-10 flex flex-col md:items-start items-center">
                  <p className="mb-4 font-bold text-2xl text-white">
                    {product.paintingName}
                  </p>
                  <p className="text-2xl text-sandal mb-4 font-semibold">
                    {product.price || "N/A"}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex gap-1 text-sandal">
                      <Rate allowHalf defaultValue={product.rating || 0} />
                    </div>
                    <div className="flex gap-1 items-center text-white">
                      <span>{product.rating || 0}</span>|
                      <span>Customer Reviews</span>
                    </div>
                  </div>
                  <p className="mb-4 text-white">{product.type || "N/A"}</p>
                  <p className="mb-4 text-white w-[80%] text-center md:text-left">
                    {product.description || "No description available."}
                  </p>
                  <button
                    onClick={() => handleBuy(id)}
                    className="bg-sandal text-brown font-bold py-2 px-4 w-[180px] rounded-full hover:bg-opacity-90"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p className="text-white text-center">Loading product details...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
