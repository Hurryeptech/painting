import React from "react";
import type { FormProps } from "antd";
import { Form } from "antd";
import { toast } from "sonner";
import { FaAsterisk } from "react-icons/fa";
import ReactFlagsSelect from "react-flags-select";
type FieldType = {
  fullname?: string;
  email?: string;
  message?: string;
  country?:string
};

 
const App: React.FC = () => {


 const [selectedCountry, setSelectedCountry] = React.useState("");

 const handleSelect = (countryCode:any) => {
  //  console.log("Selected Country:", countryCode);
   setSelectedCountry(countryCode);
 };
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const formValues = {
      ...values,
      country: selectedCountry,
    };
  toast.success("Form Submitted Successfully!")
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
      className="text-sandal bg-brown font-sans rounded-md p-4 w-full h-full "
      initialValues={{ remember: true }}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1 className="font-bold my-4 text-[20px] text-center">CONTACT US</h1>
      <label htmlFor="fullname" className="flex gap-1 mt-6">
        Enter Full Name
        <FaAsterisk size={8} />
      </label>
      <input
        name="fullname"
        className="mt-2 bg-transparent  text-lightSandal "
        // rules={[{ required: true, message: "Please input your full name!" }]}
      />
      <label htmlFor="email" className="flex gap-1 mt-6">
        Enter Email <FaAsterisk size={8} />
      </label>
      <input
        name="email"
        className="mt-2 bg-transparent  text-lightSandal w-full "
        // rules={[{ required: true, message: "Please enter your email!" }]}
      />

      <div className="react-select-country-list flex gap-2 flex-col mb-6">
        <label htmlFor="react-select " className="flex gap-1 mt-6">
          Select Country
          <FaAsterisk size={8} />
        </label>
        <ReactFlagsSelect
          placeholder="Select Country"
          selected={selectedCountry}
          onSelect={handleSelect}
          showSelectedLabel={true}
          showOptionLabel={true}
          showSecondarySelectedLabel={true}
          className="custom-flag-select"
        />
      </div>

      <label htmlFor="message" className="flex gap-1">
        Message
        <FaAsterisk size={8} />
      </label>

      <textarea
        rows={4}
        className="w-full mt-2 mb-5 bg-transparent  text-lightSandal "
      />

      <Form.Item label={null}>
        <button
          type="submit"
          className="bg-[#301c04] xl:text-[20px] text-[14px] border-none  rounded-full  xl:py-3 py-2 w-full font-bold text-sandal"
        >
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default App;
