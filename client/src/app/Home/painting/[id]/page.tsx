"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import ProductDescription from "@/src/Components/ProductDescription";
import Footer from "@/src/Components/Footer";
import PaintingForSale from "@/src/Components/PaintingForSale"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
const Page = () => {
  const params = useParams();
  const id = params.id;
 const navItems = [
   {
     icon: "/assets/icons/menuimg.png",
     name: "Home",
     route: "/Home",
   },
   {
     icon: "/assets/icons/menuimg.png",
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
     icon: "/assets/icons/menuimg.png",
     name: "Buy Print",
     
   },
   {
     icon: "/assets/icons/menuimg.png",
     name: "Video Gallery",
   },
   {
     icon: "/assets/icons/menuimg.png",
     name: "Testimony",
   },
   {
     icon: "/assets/icons/menuimg.png",
     name: "About us",
   },
   {
     icon: "/assets/icons/menuimg.png",
     name: "Blogs",
   },
 ];

   const [showDropdown, setShowDropdown] = useState(false);
   const [showMobileDropdown, setShowMobileDropdown] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-black h-full w-full">
      <nav className="overflow-hidden">
        <div className="bg-darkBrown lg:block hidden Z-[9999]">
          <div className="xl:px-40  px-2 py-5 flex items-center justify-between gap-2">
            {navItems.map((item, index) => (
              <Link key={index} href={`${item.route}`}>
                <div
                  key={index}
                  className="relative text-sandal  w-full rounded-sm px-4 py-4 cursor-pointer flex flex-col justify-center items-center gap-2 group"
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
              </Link>
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
      <ProductDescription id={id} />
      <PaintingForSale />
      <Footer />
    </div>
  );
};

export default Page;
