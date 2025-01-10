import { useEffect, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

const ProductZoom = ({ productImage }) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    // console.log(productImage, "Product Image");
    console.log(image, "zoom Image");

    setImage(productImage);
  }, [productImage]);

  return (
    <div>
      <InnerImageZoom
        src={productImage}
        className="w-[100%] h-[100%]"
        hasSpacer={true}
        zoomSrc={productImage}
        zoomType="hover"
        zoomPreload={true}
        fullscreenOnMobile={true}
      />
    </div>
  );
};

export default ProductZoom;
