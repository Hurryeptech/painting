import React from "react";
import type { FormProps } from "antd";
import {  Form } from "antd";
import { toast } from "sonner";
import { FaAsterisk } from "react-icons/fa";
type FieldType = {
  fullname2?: string;
  email2?: string;
};

const App: React.FC = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const formValues = {
      ...values,
    };
    toast.success("Form Submitted Successfully!");
    console.log("Success:", formValues);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      className="text-sandal bg-brown font-sans rounded-md p-4 w-full h-[100%] "
      initialValues={{ remember: true }}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1 className="font-bold my-4 text-[20px] text-center">
        UNLOCK NEW ART ACCESS!
      </h1>
      <p className="my-8">
        Get notified about the latest Art Premieres & Exclusive Offers at Art
        Millionaires before they Sell Out !
      </p>
      <p className="text-center font-bold">Join Our Newsletter</p>
      <label htmlFor="fullname2" className="flex gap-1 xl:mt-20 lg:mt-16 md:mt-12 mt-20">
        Enter Full Name
        <FaAsterisk size={8} />
      </label>
      <input
        name="fullname2"
        className="mt-2 bg-transparent  text-lightSandal "
        // rules={[{ required: true, message: "Please input your full name!" }]}
      />
      <label htmlFor="email2" className="flex gap-1 mt-6">
        Enter Email <FaAsterisk size={8} />
      </label>
      <input
        name="email2"
        className="mt-2 bg-transparent  text-lightSandal w-full "
        // rules={[{ required: true, message: "Please enter your email!" }]}
      />

      <Form.Item label={null}>
        <button
          type="submit"
          className="bg-[#301c04] border-none  rounded-full xl:text-[20px] text-[14px] lg:mt-20  md:mt-10 mt-20 xl:py-3 py-2 w-full font-bold text-sandal"
        >
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default App;
