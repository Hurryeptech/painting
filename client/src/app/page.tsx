/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Form } from "antd";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import {
  loginUser,
  RegisterUser,
  verifyEmail,
  verifyOtp,
} from "@/src/redux/action/auth";
import {
  EmailForm,
  LoginForm,
  ProfileForm,
  VerifyForm,
} from "@/src/Components/auth/authForms";
import { useRouter } from "next/navigation";
// import withAuth from "./../../hoc/Authentication";
const Home = () => {
  const [role, setRole] = useState("");
  
  const router = useRouter();
  const [otp, setOtp] = useState("");
useEffect(()=>{
    console.log("login page");
   router.push("/Home");
},[]);
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    let details;
    if (values.type === undefined) {
      sessionStorage.setItem("email", values.email);
      details = values;
    } else {
      details = {
        email: sessionStorage.getItem("email"),
      };
    }
    // console.log(details);

    verifyEmail(details)
      .then((data) => {
        const details = data?.data;
        toast.success(details.message);
        if (details.new === true) {
          setRole("newUser");
        } else {
          setRole("exUser");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data, "Response data");
          console.log(err.response.status, "Response status");
        }
      });
  };

  const onVerifyFinish = async (values: any) => {
    values.Otp = otp;
    verifyOtp(values)
      .then((data) => {
        const details = data?.data;
        toast.success(details.message);
        if (details.status === true) {
          setRole("regUser");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data, "Response data");
          console.log(err.response.status, "Response status");
        }
      });
  };
  const onLoginFinish = async (values: any) => {
    values.Otp = otp;
    values.email = sessionStorage.getItem("email");
    loginUser(values)
      .then((data) => {
        if (data.status === true) {
          router.push("/Home");
          toast.success(data.message);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data, "Response data");
          console.log(err.response.status, "Response status");
        }
      });
  };
  const onProfileFinish = async (values: any) => {
    values.email = sessionStorage.getItem("email");
    RegisterUser(values)
      .then((data) => {
        const details = data?.data;
        toast.success(details.message);
        if (details.status === true) {
          router.push("/Home");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data, "Response data");
          console.log(err.response.status, "Response status");
        }
      });
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is Invalid!",
      password: "${label} is Invalid!",
    },
  };
  const validateConfirmPassword = async (_: any, value: any) => {
    const password = form.getFieldValue("password");
    if (password && value !== password) {
      throw new Error("Passwords doesn't match");
    }
  };
useEffect(() => {
  const preventZoom = (e: KeyboardEvent) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === "+" || e.key === "-" || e.key === "=")
    ) {
      e.preventDefault();
    }
  };

  const preventWheelZoom = (e: WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
    }
  };

  window.addEventListener("keydown", preventZoom);
  window.addEventListener("wheel", preventWheelZoom);

  return () => {
    window.removeEventListener("keydown", preventZoom);
    window.removeEventListener("wheel", preventWheelZoom);
  };
}, []);
  return (
    <div>
      <div className="w-full flex  h-screen md:justify-normal justify-center ">
        <div className="w-[960px] hidden md:block bg-brown">
          <img
            src="/assets/logo5.svg"
            alt=""
            className="w-[100%] h-full bg-cover"
          />
        </div>
        <Toaster
          position="top-right"
          expand={false}
          duration={3000}
          visibleToasts={1}
          richColors
        />
        {role === "" ? (
          <EmailForm
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={validateMessages}
            form={form}
          />
        ) : role === "exUser" ? (
          <LoginForm
            otp={otp}
            setOtp={setOtp}
            onLoginFinish={onLoginFinish}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={validateMessages}
            form={form}
          />
        ) : role === "newUser" ? (
          <VerifyForm
            otp={otp}
            setOtp={setOtp}
            onVerifyFinish={onVerifyFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={validateMessages}
            form={form}
          />
        ) : (
          role === "regUser" && (
            <ProfileForm
              onProfileFinish={onProfileFinish}
              validateConfirmPassword={validateConfirmPassword}
              onFinishFailed={onFinishFailed}
              validateMessages={validateMessages}
              form={form}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
