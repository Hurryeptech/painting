"use client";

import Category from "@/src/Components/Category";
import TopAutoplay from "@/src/Components/TopAutoplay";
import React, { useState } from "react";
import NewPainting from "@/src/Components/NewPainting";
import Slider from "@/src/Components/Slider";
import Featured from "@/src/Components/Featured";
import Testimonials from "@/src/Components/Testimonials";
import ClassicRealism from "@/src/Components/ClassicRealism";
import ProgressBar from "@/src/Components/ProgressBar";
import PaintingForSale from "@/src/Components/PaintingForSale";
import TestimonialSlider from "@/src/Components/TestimonialSlider";
import Youtube from "@/src/Components/Youtube";
import Footer from "@/src/Components/Footer";
import ContactSection from "@/src/Components/ContactSection";
import { CloseOutlined } from "@ant-design/icons";

import { SocialIcon } from "react-social-icons";
import { IoPersonSharp } from "react-icons/io5";

import "react-languages-select/css/react-languages-select.css";

import {
  FaChevronDown,
  FaChevronUp,
  FaHeart,
  FaLock,
  FaPhoneAlt,
  FaQuestionCircle,
  FaSearch,
  FaShareAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";
import Link from "next/link";
// // import { useRouter } from "next/navigation";
// import { signOut } from "next-auth/react";
// import { deleteCookie } from "../../../utils/decryptSession";
import ReactFlagsSelect from "react-flags-select";
import { fontSize } from "@mui/system";
// import { loginUser } from "@/src/redux/action/auth";
// import { toast } from "sonner";
const PaintHome = () => {
  // const Logout = async () => {
  //   try {
  //     await deleteCookie({ name: "session", path: "/" });
  //     await signOut({ callbackUrl: "/" });
  //   } catch (error) {
  //     console.error("Error signing out:", error);
  //   }
  //   // router.push("/");
  // };
  const items = [
    {
      icon: <IoPersonSharp />,
      name: "Login",
      // onClick: () => {
      //   Logout();
      // },
    },
    {
      icon: <FaLock />,
      name: "Account",
    },
    {
      icon: <FaHeart />,
      name: "Wishlist",
    },
    {
      icon: <FaShoppingCart />,
      name: "Cart",
    },
    {
      icon: <FaRegRectangleList />,
      name: "Orders",
    },
    {
      icon: <FaQuestionCircle />,
      name: "FAQ",
    },
    {
      icon: <FaPhoneAlt />,
      name: "Contact",
    },
  ];
  const [selected, setSelected] = useState("US");

  const customLabels = {
    US: "English",
    FR: "French",
    ES: "Spanish",
  };
  //  const { data: session, status } = useSession();
  //  const router = useRouter();

  const navItems = [
    {
      icon: "assets/icons/menuimg.png",
      name: "Home",
    },
    {
      icon: "assets/icons/menuimg.png",
      name: "Categories",
      dropdown: [
        "Wild Life",
        "Humans",
        "Stylish Luxury",
        "Architectural",
        "Nature",
      ],
    },
    {
      icon: "assets/icons/menuimg.png",
      name: "Buy Print",
    },
    {
      icon: "assets/icons/menuimg.png",
      name: "Video Gallery",
    },
    {
      icon: "assets/icons/menuimg.png",
      name: "Testimony",
    },
    {
      icon: "assets/icons/menuimg.png",
      name: "About us",
    },
    {
      icon: "assets/icons/menuimg.png",
      name: "Blogs",
    },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  //  useEffect(() => {
  //    const checkUser = async () => {
  //      const sessionDetails = await getSession();

  //      if(sessionDetails){
  //       return null
  //      }
  //      else if (status === "authenticated") {
  //        const { email, name, type } = session?.user;
  //        const data = {
  //          userName: name,
  //          email: email,
  //          loginType: type || "google",
  //        };

  //        const login = async () => {
  //          try {
  //            const response = await loginUser(data);

  //            if (response) {
  //              toast.success(response.message);
  //            }
  //          } catch (error) {
  //            console.error("Error in signIn callback:", error);
  //            toast.error("Login failed");
  //            return false;
  //          }
  //        };

  //        if (!sessionDetails) login();
  //      } else if (status === "unauthenticated" && !sessionDetails) {
  //        router.push("/");
  //      }
  //    };
  //    checkUser();
  //  }, [status]);

  // useEffect(()=>{
  //    Cookies.set(
  //      "session",
  //      "eyJhbGciOiJIUzI1NiJ9.eyJlbmNyeXB0ZWREYXRhIjoiVTJGc2RHVmtYMThlWCsyWlhsc2RYOXZWejY3VEZYVWJ4cWpsWE96cVhSL2JqUVZKNGlFaXh1VDVUM1lwU3JJeURkWW5uWGdNWll2b0ltQWMvc1Zjek9zcVpyRWo3MWpNUDlLSlBsM1gva2Z6b3RUSVcwbEJXTU91eHZTTlN5VTh3N1pJSjE5eEtJb04vTXFDQnpYZFpaS05VaWRkOTllbzRhSmx5TmQ3R2pET1M4TTQvaUxYZFJaK3BuVmlENjVucFhrME1SNXhIV2wwTm52WFFrTWdBWDhSMWxjMVpEZW9YYnB5VjdqSUU1OC95cjVPTGp0dnNpMlowRWNTM0xYdGwxT1hkSWFLMzZRQkwrZHA0UnBPaGpZY0t4eENaWHNWUVkydmd3SnFDS2N3dURacFVmR2VlVkkxNTNUaU5JRnRWMEVnYU93NFBUOWptcjZUTUpZQm5vY1FCdDl0STRweXEydkxsQ201VVlGSVBoNW1nRTdGSE02UUJMdGZBaW5JIiwiZXhwaXJlcyI6IjIwMjQtMTItMTdUMTM6MzA6MzIuOTE2WiIsImlhdCI6MTczNDM1NTgzMywiZXhwIjoxNzM0NDQyMjMzfQ.y4jIXdS6nBgPi7HIeZvAe1moyKRUhzjNwhCzfobs6bs",
  //      {
  //        path: options.path || "/",
  //       //  secure: options.secure || false,
  //       //  sameSite: options.sameSite || "Lax",
  //      }
  //    );
  // })
  return (
    <>
      <div className="bg-black h-full w-full">
        <nav className="overflow-hidden">
          <TopAutoplay />
          <img src="/assets/header.jpg" alt="" className="w-full h-full z-50" />
          <div className="bg-brown ">
            <div className="slider-container  text-sandal text-lg  py-2 border-2 border-t border-b border-sandal overflow-hidden">
              <div className="text-center">
                <h3>Work with your own art advisor / Rebecca Wilson</h3>
              </div>
            </div>
            <div className="xl:px-40 px-10 py-4 flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col md:flex-row items-center xl:gap-4 gap-2 w-full">
                <div className="relative inline-block w-full md:w-1/3 focus:text-sandal text-brown hover:text-sandal ">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border-2 placeholder:text-brown placeholder:overflow-hidden xl:placeholder:text-[14px] placeholder:text-[12px] border-[#d8b472]  xl:px-2 xl:pl-4 bg-sandal  text-sandal text-[14px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d8b472] w-full"
                  />
                  <FaSearch
                    className="right-3 absolute top-2 text-brown focus:text-sandal  hover:text-sandal "
                    width={20}
                    height={20}
                  />
                </div>

                <div className="flex-1 md:w-1/3">
                  <h3 className="font-bold text-[14px] text-sandal">
                    Welcome to our Art Online Store!
                  </h3>
                </div>
              </div>

              <div className="flex items-center flex-col md:flex-row xl:gap-4 md:gap-2 gap-6 w-full">
                <div className="flex xl:gap-[8px] sm:gap-[2px] gap-[8px] items-center mt-4 md:mt-0 md:mb-0 mb-2 flex-1">
                  <SocialIcon
                    url="https://youtube.com"
                    className="hover:scale-110 transition-transform duration-300 ease-in-out"
                    style={{ width: "25px", height: "25px" }}
                  />
                  <SocialIcon
                    url="https://facebook.com"
                    className="hover:scale-110 transition-transform duration-300 ease-in-out"
                    style={{ width: "25px", height: "25px" }}
                  />
                  <SocialIcon
                    url="https://instagram.com"
                    className="hover:scale-110 transition-transform duration-300 ease-in-out"
                    style={{ width: "25px", height: "25px" }}
                  />
                  <SocialIcon
                    url="https://pinterest.com"
                    className="hover:scale-110 transition-transform duration-300 ease-in-out"
                    style={{ width: "25px", height: "25px" }}
                  />
                  <SocialIcon
                    url="https://x.com"
                    className="hover:scale-110 transition-transform duration-300 ease-in-out"
                    style={{ width: "25px", height: "25px" }}
                  />
                </div>

                <div className="flex-1 md:w-1/4 w-full">
                  <button className="buttonshare hover:bg-darkBrown text-[14px] md:mb-0 mb-2 xl:px-8 md:px-4 px-8 py-2 bg-[#3593ff] text-white flex items-center justify-center xl:gap-4 gap-2 w-full">
                    <span>
                      <FaShareAlt />
                    </span>
                    Share
                  </button>
                </div>

                <div className="relative w-full md:w-1/4">
                  <div className="language-selector w-full">
                    <ReactFlagsSelect
                      placeholder="English"
                      countries={["US", "FR", "ES"]}
                      customLabels={customLabels}
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                      showSelectedLabel={true}
                      showOptionLabel={true}
                      style={{ fontSize: "12px" }}
                      className="text-gold w-full navflag !text-[12px]"
                    />
                  </div>
                </div>

                <div className="relative md:w-[150px] w-full text-lightSandal">
                  <select
                    name="Language"
                    id="Language"
                    className="appearance-none text-[12px] text-lightSandal px-4 py-1.5 outline-none bg-transparent border-2 border-[#bd923b] rounded-md w-full"
                  >
                    <option
                      value="$-USD"
                      className="bg-brown hover:bg-sandal hover:text-brown"
                    >
                      $-USD
                    </option>
                    <option
                      value="€-EUR"
                      className="bg-brown hover:bg-sandal hover:text-brown"
                    >
                      €-EUR
                    </option>
                    <option
                      value="£-GBP"
                      className="bg-brown hover:bg-sandal hover:text-brown"
                    >
                      £-GBP
                    </option>
                  </select>
                  <span className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center pointer-events-none">
                    <FaChevronDown size={10} />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap xl:px-40 px-10 gap-2 pb-4 justify-center w-full">
              {items.map((item, index) => (
                <div
                  key={index}
                  onClick={item.onClick}
                  className="bg-lightBrown text-sandal lg:text-[14px] md:text-[10px] text-[10px] 
      hover:text-darkBrown hover:bg-sandal px-2  py-3 cursor-pointer 
      flex justify-center items-center lg:gap-2 gap-1 flex-grow basis-0 w-full lg:w-1/2"
                >
                  {item.icon}
                  <span className=" lg:text-[14px] md:text-[8px] text-[10px] font-bold">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-darkBrown lg:block hidden Z-[9999]">
            <div className="xl:px-40  px-2 py-2 flex items-center justify-between gap-2">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative text-sandal  w-full rounded-sm px-4 py-2 cursor-pointer flex flex-col justify-center items-center gap-2 group"
                >
                  <span
                    className="text-[14px] font-bold flex items-center gap-2"
                    onMouseEnter={() =>
                      item.dropdown && setShowDropdown(!showDropdown)
                    }
                  >
                    {item.name}
                    {item.dropdown &&
                      (showDropdown ? (
                        <FaChevronUp className="mt-1" />
                      ) : (
                        <FaChevronDown className="mt-1" />
                      ))}
                  </span>

                  <img src={item.icon} alt="" className="w-1/2 h-1/2" />
                </div>
              ))}
            </div>
            {showDropdown && (
              <ul
                onMouseLeave={() => setShowDropdown(!showDropdown)}
                className="absolute  left-80 py-4 w-[230px] bg-sandal text-darkBrown font-bold shadow-md  z-50"
                style={{ zIndex: 9999 }}
              >
                <li className="px-12 py-2 hover:text-lightBrown cursor-pointer ">
                  Featured Art
                </li>
                <li className="px-12 py-2 hover:text-lightBrown cursor-pointer">
                  Animals
                </li>
                <li className="px-12 py-2 hover:text-lightBrown cursor-pointer">
                  Birds
                </li>
                <li className="px-12 py-2 hover:text-lightBrown cursor-pointer">
                  Humans
                </li>
                <li className="px-12 py-2 hover:text-lightBrown cursor-pointer">
                  Nude
                </li>
                <li className="px-12 py-2 hover:text-lightBrown cursor-pointer">
                  Architectural
                </li>
                <li className="px-12 py-2 hover:text-lightBrown cursor-pointer">
                  Modern
                </li>
              </ul>
            )}
          </div>
          <div className="flex bg-darkBrown lg:hidden">
            <div className="px-8 py-2 flex flex-wrap items-center justify-between gap-4 w-full">
              <div className="flex items-center justify-end w-full lg:w-1/3">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden text-lightSandal text-2xl font-bold"
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        </nav>

        {menuOpen && (
          <div>
            <div
              className="fixed
            lg:hidden
    right-0
    top-0
    w-full
    h-full
    z-1
    bg-black opacity-50"
            ></div>

            <div
              className={` sm:w-[300px] w-[80%] lg:hidden overflow-y-auto h-full lg:items-center lg:justify-center absolute right-0
    top-0 `}
            >
              <div className="text-lightSandal absolute right-5 top-2">
                <CloseOutlined
                  className="text-lightSandal hover:animate-spin "
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              </div>
              <ul className="flex flex-col pt-16 lg:flex-row items-center gap-4  lg:gap-10 text-lightSandal text-sm lg:text-lg font-bold bg-darkBrown  shadow-md lg:shadow-none rounded-lg p-4 h-full lg:p-0">
                <Link href={"/paintHome"} className="w-[100%]">
                  <li className="cursor-pointer   py-4 w-full text-center rounded-sm hover:bg-lightSandal hover:text-darkBrown">
                    Home
                  </li>
                </Link>
                <li
                  className="cursor-pointer py-4 w-full flex items-end justify-center gap-2 text-center rounded-sm hover:bg-lightSandal hover:text-darkBrown"
                  onClick={() => setShowMobileDropdown(!showMobileDropdown)}
                >
                  {" "}
                  Gallery
                  {showMobileDropdown ? (
                    <FaChevronUp size={10} className="mb-1" />
                  ) : (
                    <FaChevronDown size={10} className="mb-1" />
                  )}
                </li>
                {showMobileDropdown && (
                  <ul
                    onMouseLeave={() =>
                      setShowMobileDropdown(!showMobileDropdown)
                    }
                    className=" text-center animate-fade-in bg-lightBrown w-full"
                  >
                    <li className="cursor-pointer   py-4 w-full  rounded-sm hover:bg-lightSandal hover:text-darkBrown">
                      Featured Art
                    </li>
                    <li className="cursor-pointer   py-4 w-full  rounded-sm hover:bg-lightSandal hover:text-darkBrown">
                      Animals
                    </li>
                    <li className="cursor-pointer   py-4 w-full  rounded-sm hover:bg-lightSandal hover:text-darkBrown">
                      Birds
                    </li>
                    <li className="cursor-pointer   py-4 w-full  rounded-sm hover:bg-lightSandal hover:text-darkBrown">
                      Humans
                    </li>
                    <li className="cursor-pointer   py-4 w-full  rounded-sm hover:bg-lightSandal hover:text-darkBrown">
                      Nude
                    </li>
                    <li className="cursor-pointer   py-4 w-full  rounded-sm hover:bg-lightSandal hover:text-darkBrown">
                      Architectural
                    </li>
                    <li className="cursor-pointer   py-4 w-full  rounded-sm hover:bg-lightSandal hover:text-darkBrown">
                      Modern
                    </li>
                  </ul>
                )}
                <li className="cursor-pointer  py-4 w-full text-center rounded-sm hover:bg-lightSandal hover:text-darkBrown">
                  About
                </li>
                <li className="cursor-pointer  py-4 w-full text-center rounded-sm hover:bg-lightSandal hover:text-darkBrown">
                  Blogs
                </li>

                <Link href={"/paintHome/cart"} className="w-[100%]">
                  <li className="cursor-pointer   py-4 w-full text-center rounded-sm hover:bg-lightSandal hover:text-darkBrown">
                    Cart
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}

        <Slider />
        <Featured />
        <NewPainting />
        <TestimonialSlider />
        <Category />
        <PaintingForSale />
        <TestimonialSlider />
        <Youtube />
        <img
          src="/assets/banner/view.png"
          alt="view"
          className="mt-20 mb-10 lg:px-24 px-10"
        />
        <ClassicRealism />
        <Testimonials />
        <Youtube />
        <ContactSection />
        <div className="flex items-center justify-center text-center">
          <img
            src="https://demo.maduraidigitalmarketing.com/art-website/assest/image/comming-soon.gif"
            alt=""
            className="w-[550px] h-[237px]"
          />
        </div>
        <Footer />
        <div>
          <ProgressBar />
        </div>
      </div>
    </>
  );
};

export default PaintHome;
