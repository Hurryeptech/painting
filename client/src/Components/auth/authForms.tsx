
import { Form, Input } from "antd";
import Image from "next/image";
import OTPInput from "../otpInput";
import { signIn } from "next-auth/react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export const EmailForm = ({
  onFinish,
  onFinishFailed,
  validateMessages,
  form,
}:any) => {
  return (
    <>
      <div className="flex w-[480px] mx-auto flex-col p-5 justify-center items-center">
        <div className=" text-center">
          <h2 className="text-center text-[28px] font-bold tracking-tight text-brown">
            Sign In to your account
          </h2>
          <p className="mt-4 text-[16px] text-brown">
            Welcome! Please enter your details
          </p>
        </div>

        <div className="mt-[32px] w-full md:px-0 px-4">
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={validateMessages}
            form={form}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-[16px] font-medium text-brown"
              >
                Enter Email
              </label>
              <div className="mt-2">
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      // message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="flex px-2 w-full rounded-md border border-brown py-1.5 text-brown shadow-sm hover:ring-brown  placeholder:text-brown sm:text-sm/6  focus-visible:outline-offset-2 hover:text-brown hover:border-brown focus-visible:outline-brown focus-visible:text-brown"
                  />
                </Form.Item>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-brown px-3 py-1.5 text-[16px] font-semibold text-white shadow-sm hover:bg-brown  "
              >
                Continue
              </button>
            </div>
          </Form>
          <div className="my-5">
            <button
              onClick={() => signIn("google", { callbackUrl: "/Home" })}
              className="border text-lg flex items-center justify-center border-gray-300 font-light  w-full py-1 rounded  hover:bg-gray-50"
            >
              <Image
                alt=""
                src="/assets/google.png"
                width={10}
                height={10}
                className="w-[20px] h-[20px] mr-4"
              />
              <span className="text-[16px] text-black">
                Continue with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export const LoginForm = ({
  otp,
  setOtp,
  onLoginFinish,
  onFinishFailed,
  validateMessages,
  form,
  onFinish,
}:any) => {
  return (
    <div className="flex w-[480px] mx-auto flex-col p-5 justify-center items-center">
      <div className="text-center">
        <h2 className="text-center text-[28px] font-bold tracking-tight text-brown">
          Sign In to your account
        </h2>
      </div>
      <div className="mt-[32px] w-full md:px-0 px-4">
        <Form
          onFinish={onLoginFinish}
          onFinishFailed={onFinishFailed}
          validateMessages={validateMessages}
          form={form}
          className="space-y-6"
          initialValues={{ password: "", otp: "" }}
          action="#"
          method="POST"
        >
          {" "}
          <div className="">
            <label
              htmlFor="password"
              className="block text-[16px] font-medium text-brown"
            >
              Enter Password
            </label>

            <div className="mt-2 ">
              <Form.Item
                name="password"
                rules={[
                  {
                    type: "string",
                    //   required: true,
                    // message: "Please input your username!",
                  },
                ]}
              >
                <Input.Password
                  id="password"
                  name="password"
                  iconRender={(visible) =>
                    visible ? (
                      <EyeTwoTone className="text-brown" />
                    ) : (
                      <EyeInvisibleOutlined className="text-brown" />
                    )
                  }
                  type="password"
                  placeholder="Enter password"
                  className="flex px-2 w-full rounded-md border border-brown py-1.5 text-brown shadow-sm hover:ring-brown  placeholder:text-brown sm:text-sm/6  focus-visible:outline-offset-2 hover:text-brown hover:border-brown focus-visible:outline-brown focus-visible:text-brown"
                />
              </Form.Item>
            </div>

            <div className="text-sm text-center">
              <span className="text-gray-400">Or</span>
            </div>
          </div>
          <div className="">
            <label
              htmlFor="number"
              className="block text-[16px] font-medium text-brown"
            >
              Enter OTP
            </label>
            <div className="mt-2">
              <OTPInput value={otp} onChange={setOtp} length={6} />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-brown px-3 py-1.5 text-[16px] font-semibold text-white shadow-sm hover:bg-brown  "
            >
              Sign in
            </button>
          </div>
          <p className="mt-10 text-center text-sm/6 text-brown">
            Didn&#39;t receive code?
            <a
              href="#"
              onClick={onFinish}
              className="font-semibold ms-2 text-gold hover:text-gold"
            >
              Resend Code
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
};
export const VerifyForm = ({
  otp,
  setOtp,
  onVerifyFinish,
  onFinishFailed,
  validateMessages,
  form,
}:any) => {
  return (
    <div className="flex w-[480px] mx-auto flex-col p-5 justify-center items-center">
      <div className="text-center">
        <h2 className="text-center text-[28px] font-bold tracking-tight text-brown">
          Create your account
        </h2>
      </div>
      <div className="mt-[32px] w-full md:px-0 px-4">
        <Form
          onFinish={onVerifyFinish}
          onFinishFailed={onFinishFailed}
          validateMessages={validateMessages}
          form={form}
          className="space-y-6"
          initialValues={{ otp: "" }}
          action="#"
          method="POST"
        >
          <div className="">
            <label
              htmlFor="number"
              className="block text-[16px] font-medium text-brown"
            >
              Enter OTP
            </label>
            <div className="mt-2">
              <OTPInput value={otp} onChange={setOtp} length={6} />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-brown px-3 py-1.5 text-[16px] font-semibold text-white shadow-sm hover:bg-brown  "
            >
              Verify
            </button>
          </div>
          <p className="mt-10 text-center text-sm/6 text-brown">
            Didn&#39;t receive code?
            <a
              href="#"
              className="font-semibold text-gold ms-2 hover:text-gold"
            >
              Resend Code
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
};
export const ProfileForm = ({
  onProfileFinish,
  validateConfirmPassword,
  onFinishFailed,
  validateMessages,
  form,
}:any) => {
  return (
    <div className="flex w-[480px] mx-auto flex-col p-5 justify-center items-center">
      <div className="text-center">
        <h2 className="text-center text-[28px] font-bold tracking-tight text-brown">
          Create your account
        </h2>
        <p className="mt-4 text-[16px] text-brown">
          Add details to setup your account
        </p>
      </div>
      <div className="mt-[32px] w-full md:px-0 px-4">
        <Form
          onFinish={onProfileFinish}
          onFinishFailed={onFinishFailed}
          validateMessages={validateMessages}
          form={form}
          className="space-y-6"
          initialValues={{ password: "" }}
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="userName"
              className="block text-[16px] font-medium text-brown"
            >
              Enter Username
            </label>
            <div className="mt-2">
              <Form.Item
                name="userName"
                rules={[
                  {
                    type: "string",
                    required: true,
                    // message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  id="userName"
                  name="userName"
                  type="text"
                  placeholder="Enter user name"
                  className="flex px-2 w-full rounded-md border border-brown py-1.5 text-brown shadow-sm hover:ring-brown  placeholder:text-brown sm:text-sm/6  focus-visible:outline-offset-2 hover:text-brown hover:border-brown focus-visible:outline-brown focus-visible:text-brown"
                />
              </Form.Item>
            </div>
          </div>{" "}
          <div className="">
            <label
              htmlFor="password"
              className="block text-[16px] font-medium text-black"
            >
              Enter Password
            </label>

            <div className="mt-2 ">
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters.",
                  },
                  {
                    max: 16,
                    message: "Password cannot be more than 16 characters.",
                  },
                  {
                    pattern: /[A-Z]/,
                    message:
                      "Password must contain at least one uppercase letter.",
                  },
                  {
                    pattern: /[a-z]/,
                    message:
                      "Password must contain at least one lowercase letter.",
                  },
                  {
                    pattern: /\d/,
                    message: "Password must contain at least one digit.",
                  },
                  {
                    pattern: /[!@#$%^&*(),.?":{}|<>]/,
                    message:
                      "Password must contain at least one special character.",
                  },
                  {
                    pattern: /^\S*$/,
                    message: "Password must not contain spaces.",
                  },
                ]}
              >
                <Input.Password
                  id="password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className="flex px-2 w-full rounded-md border border-brown py-1.5 text-brown shadow-sm hover:ring-brown  placeholder:text-brown sm:text-sm/6  focus-visible:outline-offset-2 hover:text-brown hover:border-brown focus-visible:outline-brown focus-visible:text-brown"
                />
              </Form.Item>
            </div>
          </div>
          <div className="">
            <label
              htmlFor="password"
              className="block text-[16px] font-medium text-black"
            >
              Enter Confirm Password
            </label>

            <div className="mt-2 ">
              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  {
                    type: "string",
                    required: true,
                    // message: "Please input your username!",
                  },
                  {
                    validator: validateConfirmPassword,
                  },
                ]}
              >
                <Input.Password
                  id="password"
                  name="password"
                  placeholder="Enter Confirm password"
                  type="password"
                  iconRender={(visible) =>
                    visible ? (
                      <EyeTwoTone className="text-brown" />
                    ) : (
                      <EyeInvisibleOutlined className="text-brown" />
                    )
                  }
                  className="flex px-2 w-full rounded-md border border-brown py-1.5 text-brown shadow-sm hover:ring-brown  placeholder:text-brown sm:text-sm/6  focus-visible:outline-offset-2 hover:text-brown hover:border-brown focus-visible:outline-brown focus-visible:text-brown"
                />
              </Form.Item>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-brown px-3 py-1.5 text-[16px] font-semibold text-white shadow-sm hover:bg-brown  "
            >
              Confirm
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};
