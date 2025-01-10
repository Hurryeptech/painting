import { addToCart, getClassics } from "@/src/AuthPages/auth";
import { Rate, Tooltip } from "antd";
import Link from "next/link";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { toast } from "sonner";
 
 type Painting = {
   _id: string;
   paintingName: string;
   price: number;
   image:string;
   description:string;
   rating:string;
   type:string;
 };
const ClassicRealism = () => {
const [paintingList, setPaintingList] = useState<Painting[]>([]);

  const [show, setShow] = useState<string | null>(null);
  useEffect(() => {
    const fetchPaintings = async () => {
      const data = await getClassics();
      const selectedProduct = data.classics;
      setPaintingList(selectedProduct);
      // console.log("classics", data);
    };

    fetchPaintings();
  }, []);
    const handleCart = (painting:any) => {
      addToCart(painting)
        .then((data) => {
          if (data.status === true) {
            toast.success(data.message);
          }
        })
        .catch((err) => {
          if (err.response) {
            toast.error(err.response.data);
            console.log(err.response.status, "Response status");
          }
        });
    };

  return (
    <div className="flex flex-col justify-center items-center mt-5 md:mt-14 md:p-5 p-2 overflow-hidden">
      <img src="/assets/banner/classic.png" alt="classic" />
      <div className="w-full text-gold text-sm py-2 xl:px-24 lg:px-10 md:px-5 px-4">
        <div className="md:p-5">
          <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-5 py-10">
            {paintingList.length > 0 ? (
              paintingList.map((painting, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setShow(painting._id)}
                  onMouseLeave={() => setShow(null)}
                  className="relative mb-5 break-inside-avoid-column"
                >
                  <Link key={index} href={`/Home/painting/${painting._id}`}>
                    <div className="flex flex-col items-start justify-center p-[2px] bg-cardBg text-cardText rounded-xl border border-lightBrown">
                      <img
                        src={painting.image}
                        alt={painting.paintingName}
                        className="w-full h-auto object-cover rounded-t-xl"
                      />
                      <div className="py-4 w-full text-center font-rubik">
                        <h1 className="text-xl font-bold mt-2 mb-2 font-rubik">
                          {painting.paintingName}
                        </h1>
                        <p className="font-rubik">{painting.type}</p>
                        <div className="flex items-center justify-center gap-1 mt-2">
                          <Rate
                            allowHalf
                            defaultValue={Number(painting.rating)}
                            className="text-[10px]"
                          />
                        </div>
                        <h1 className="text-2xl font-bold mt-2 font-rubik">
                          {painting.price}
                        </h1>
                        <p className="mb-4 mt-2 font-rubik">
                          {painting.description}
                        </p>
                       
                      </div>
                    </div>
                  </Link>
                  {show === painting._id && (
                    <div>
                      <div className="absolute top-0 left-0 flex items-center justify-center animate-slideDown">
                        <div className="text-lg bg-iconBrown py-4 rounded-b-3xl rounded-tl-xl font-bold flex-col text-center px-2 flex gap-2">
                          <Tooltip title="Add to Cart ">
                            <span
                              onClick={() => handleCart(painting)}
                              className="rounded-full border-dashed border w-8 h-8 flex items-center justify-center border-sandal"
                            >
                              <FaCartShopping className="text-sandal cursor-pointer my-2" />
                            </span>
                          </Tooltip>
                          <Tooltip title="Add to Wishlist">
                            <span className="rounded-full border-dashed border w-8 h-8 flex items-center justify-center border-sandal">
                              <FaHeart className="text-red-500 cursor-pointer " />
                            </span>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-lg font-bold">
                No paintings available
              </div>
            )}
          </div>
        </div>
      </div>

      <img
        src="/assets/banner/view.png"
        alt="view"
        className="mt-10 lg:px-24 px-10"
      />
    </div>
  );
};

export default ClassicRealism;
