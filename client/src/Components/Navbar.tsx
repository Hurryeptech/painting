import React, {  useState } from "react";
import AutoPlay from "./Autoplay";
import TopAutoplay from "./TopAutoplay";
import { SocialIcon } from "react-social-icons";
import { IoPersonSharp} from "react-icons/io5";

//import css module
import "react-languages-select/css/react-languages-select.css";


import {
  FaChevronDown,
  FaHeart,
  FaLock,
  FaPhoneAlt,
  FaQuestionCircle,
  FaSearch,
  FaShareAlt,
  FaShoppingCart,
} from "react-icons/fa";
import {  FaRegRectangleList } from "react-icons/fa6";
import LanguageSelector from "./Language";
const Navbar = () => {
  const items = [
    {
      icon: <IoPersonSharp  />,
      name: "Login",
    },
    {
      icon: <FaLock />,
      name: "My Account",
    },
    {
      icon: <FaHeart/>,
      name: "My Wishlist",
    },
    {
      icon: <FaShoppingCart/>,
      name: "Cart",
    },
    {
      icon: <FaRegRectangleList />,
      name: "My Order",
    },
    {
      icon: <FaQuestionCircle/>,
      name: "FAQ",
    },
    {
      icon: <FaPhoneAlt />,
      name: "Contact us",
    },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
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
 const name="Manoj";
  return (
    <nav className="overflow-hidden">
      <TopAutoplay />
      <img src="/assets/header.jpg" alt="" className="w-full h-full z-50" />
      <div className="bg-brown ">
        <AutoPlay />
        <div className="px-24 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative inline-block ">
              <input
                type="text"
                placeholder="Search anything..."
                className="border-2 placeholder:text-[#555] border-[#d8b472] py-1 px-2 pl-4 bg-[#d8b472] text-gray-600 text-[14px] rounded-md  focus:outline-none focus:ring-2 focus:ring-[#d8b472]"
              />
              <FaSearch
                className=" right-3 absolute top-2 text-iconBrown"
                width={20}
                height={20}
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-sandal">
                Welcome to our Art Online Store! {name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-[10px] items-center">
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
            <div>
              <button className=" buttonshare hover:bg-darkBrown text-[14px] px-8 py-2 bg-[#3593ff] text-white flex items-center justify-center gap-4">
                <span>
                  <FaShareAlt />
                </span>{" "}
                Share
              </button>
            </div>
            <div className="relative w-full max-w-xs text-sandal hover:text-brown">
              <LanguageSelector />
            </div>
            <div className="relative w-full max-w-xs text-sandal hover:text-brown">
              <select
                name="Language"
                id="Language"
                style={{ borderRadius: "5px", paddingRight: "5px" }}
                className="appearance-none text-[14px] px-8 py-2 outline-none bg-transparent border-2 border-lightSandal hover:bg-sandal hover:text-brown text-sandal flex items-center justify-center gap-4 w-full"
              >
                <option value="$-USD">
                  <img
                    src="assets/icons/united-states.png"
                    alt="value"
                    className="w-5 h-5"
                  />
                  <span>$-USD</span>
                </option>
                <option value="€-EUR">
                  <img
                    src="assets/icons/france.png"
                    alt=""
                    className="w-5 h-5"
                  />
                  €-EUR
                </option>
                <option value="£-GBP">
                  <img
                    src="assets/icons/spain.png"
                    alt=""
                    className="w-5 h-5"
                  />
                  £-GBP
                </option>
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none ">
                <FaChevronDown />
              </span>
            </div>
          </div>
        </div>
        <div className="px-24 pb-4 flex items-center justify-between gap-2">
          {items.map((items, index) => (
            <div
              key={index}
              className="bg-lightBrown text-sandal w-full  hover:bg-sandal hover:text-darkBrown px-4 py-4 cursor-pointer flex justify-center items-center gap-2"
            >
              {items.icon}
              <span className=" text-[14px]  font-bold">{items.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-darkBrown Z-[9999]">
        <div className="px-24 py-4 flex items-center justify-between gap-2">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative text-sandal w-full rounded-sm px-4 py-4 cursor-pointer flex flex-col justify-center items-center gap-2 group"
            >
              <span
                className="text-[14px] font-bold flex items-center gap-2"
                onClick={() =>
                  item.dropdown &&
                  setShowDropdown(!showDropdown)
                }
              >
                {item.name}
                {item.dropdown && <FaChevronDown className="mt-1" />}
              </span>
              {item.dropdown && showDropdown  && (
                <ul
                  className="absolute top-full left-0 bg-brown text-sandal shadow-md rounded-md z-50"
                  style={{ zIndex: 9999 }}
                >
                  {item.dropdown.map((option, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-sandal hover:text-white cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
              <img src={item.icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
