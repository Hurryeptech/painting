"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState, useMemo } from "react";
import Footer from "@/src/Components/Footer";
import { getPaintings, postCheckout } from "@/src/AuthPages/auth";
import { Input, Select } from "antd";
import countryList from "react-select-country-list";
import Navbar2 from "@/src/Components/Navbar2";
import { toast } from "sonner";
import { Form } from "antd";
type FieldType = {
  _id: string;
  fullName?: string;
  email?: string;
  phoneNumber?: number;
  address?: string;
  city?: string;
  zipcode?: string;
  country?: string; 
};

const Page = () => {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  const [product, setProduct] = useState<ProductType | null>(null);

  const countryOptions = useMemo(() => countryList(), []);
  const options = countryOptions.getData().map((option) => ({
    label: option.label,
    value: option.value,
  }));
  const [reactSelectValue, setReactSelectValue] = useState<string | undefined>(
    undefined
  );

  const handleReactSelectChange = (value: string) => {
    const label = countryOptions.getLabel(value);
    // console.log(`Selected Country: ${label}`);
    setReactSelectValue(label);
  };
  const onFinish = (values: FieldType) => {
    const formValues = {
      ...values,
      country: reactSelectValue,
      product: [product],
    };

    // console.log("Success:", formValues);
    postCheckout(formValues)
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
    router.push("/");
  };
  type ProductType = {
    _id: string;
    paintingName: string;
    price: number;
  };

  useEffect(() => {
    const fetchPaintings = async () => {
      const data = await getPaintings();
      const products = data.paintings;

      const selectedProduct = products.find(
        (painting: ProductType) => painting._id === id
      );

      setProduct(selectedProduct);
      // console.log("selectedProduct", selectedProduct);
      // console.log("All Products", products);
    };

    fetchPaintings();
  }, [id]);

  return (
    <div className="h-full bg-brown">
      <Navbar2 />
      <div className="flex flex-col overflow-hidden mb-10 justify-center items-center text-center">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className="flex md:flex-row flex-col">
            <div className="md:w-1/2 w-full p-5 md:p-10 order-2 md:order-1 text-gold">
              <div className=" text-gold p-5 rounded-lg">
                <div className="text-start text-lg font-aclonica mb-6">
                  <h1>Fill out the form</h1>
                </div>
                <div className="flex gap-2 flex-col md:flex-row">
                  <Form.Item<FieldType>
                    label="Full Name"
                    name="fullName"
                    className=" w-full text-gold"
                    rules={[
                      {
                        required: true,
                        message: "Please input your full name!",
                      },
                    ]}
                  >
                    <Input className="w-full" />
                  </Form.Item>
                  <Form.Item<FieldType>
                    label="Email"
                    className=" w-full"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input className="w-full" />
                  </Form.Item>
                </div>

                <div className="flex gap-2  flex-col md:flex-row">
                  <Form.Item<FieldType>
                    label="Phone Number"
                    name="phoneNumber"
                    className=" w-full"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input className="w-full" />
                  </Form.Item>
                  <Form.Item<FieldType>
                    label="Address"
                    name="address"
                    className=" w-full"
                    rules={[
                      { required: true, message: "Please input your address!" },
                    ]}
                  >
                    <Input className="w-full" />
                  </Form.Item>
                </div>

                <div className="flex gap-2  flex-col md:flex-row">
                  <Form.Item<FieldType>
                    label="City"
                    name="city"
                    className=" w-full"
                    rules={[
                      { required: true, message: "Please input your city!" },
                    ]}
                  >
                    <Input className="w-full" />
                  </Form.Item>
                  <Form.Item<FieldType>
                    label="zipcode"
                    name="zipcode"
                    className="w-full"
                    rules={[
                      {
                        required: true,
                        message: "Please input your zip code!",
                      },
                    ]}
                  >
                    <Input className="w-full" />
                  </Form.Item>
                </div>
                <div className="react-select-country-list text-start flex gap-2 flex-col mb-4">
                  <label htmlFor="react-select">Select Country</label>
                  <Select
                    id="react-select"
                    options={options}
                    value={reactSelectValue}
                    onChange={handleReactSelectChange}
                    className="w-full bg-brown text-gold"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full p-5 md:p-10 order-1 md:order-2">
              <div className=" p-5 rounded-lg">
                <div className="text-start text-gold text-lg font-aclonica mb-6">
                  <h1>Checkout Details</h1>
                </div>
                <div className=" text-gold  rounded-lg">
                  <div>
                    <div className="flex justify-between items-center">
                      <h4 className="font-aclonica text-xl">Product</h4>
                      <h4 className="font-aclonica text-xl">Subtotal</h4>
                    </div>
                    <div className="flex justify-between text-white items-center my-4">
                      <h4 className="font-aclonica">{product?.paintingName}</h4>
                      <p className="font-aclonica">{product?.price}</p>
                    </div>
                    <div className="flex justify-between items-center my-4">
                      <h4 className="text-base font-bold">Total</h4>
                      <h4 className="font-aclonica">{product?.price}</h4>
                    </div>
                    <div className="border-t-2 text-start border-gold my-8">
                      <p className="my-4 text-white">
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our
                        privacy policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-gold  text-white font-bold py-4 px-4 rounded-full  w-[300px] "
          >
            Checkout
          </button>
        </Form>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
