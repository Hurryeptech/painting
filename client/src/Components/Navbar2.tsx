import Link from "next/link";
import React, { useState } from "react";

import { CloseOutlined } from "@ant-design/icons";
const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="overflow-hidden">
      <div className="bg-[#4F310D] py-2">
        {/* desktop navbar */}
        <div className=" p-2 lg:flex hidden relative  items-center justify-between gap-10 w-full">
          <div className="flex items-center justify-center w-1/3">
            <Link
              href={"/"}
              className="flex justify-center items-center"
            >
              <img
                src="/assets/logoImg.png"
                alt=""
                className="w-[15%] h-[15%]"
              />
              <span className="text-gold font-bold text-xl">Anand PKC</span>
            </Link>
          </div>
          <div className=" w-1/3">
            {" "}
            <ul className="flex items-center justify-center gap-10 text-gold text-lg font-bold">
              <Link href={"/"} className="inline">
                <li>Home</li>
              </Link>
              <li>Gallery</li>
              <li>About</li>
              <li>Blogs</li>

              <Link href={"//cart"}>
                <li>Cart</li>
              </Link>
            </ul>
          </div>
          <div className=" w-1/3  items-center justify-center">
            <button className="bg-gold text-white font-bold py-2 px-4 rounded-full">
              Shop Now
            </button>
          </div>
        </div>
        {/* tablet navbar */}
        <div className="flex lg:hidden">
          <div className="px-8 py-2 flex flex-wrap items-center justify-between gap-4 w-full">
            {/* Logo Section */}
            <div className="flex items-center justify-between w-full lg:w-1/3">
              <div className="flex items-center gap-2">
                 <Link href={"/"} className="cursor-pointer flex items-center">
             
                <img
                  src="/assets/logoImg.png"
                  alt=""
                  className="w-[10%] lg:w-[15%] h-auto"
                />
                <span className="text-gold font-bold text-lg lg:text-xl">
                  Anand PKC
                </span>
                </Link>
              </div>
              {/* Hamburger Menu for Mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-gold text-2xl font-bold"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* opacity sidebar */}
      {menuOpen && (
        <div>
          <div
            className="fixed
            lg:hidden
    right-0
    top-0
    w-full
    h-screen
    z-1
    bg-black opacity-50"
          ></div>

          <div
            className={` sm:w-[300px] w-full  lg:hidden overflow-y-auto h-full  lg:items-center lg:justify-center absolute right-0
    top-0 `}
          >
            <div className="text-gold absolute right-5 top-2">
              <CloseOutlined
                className="text-gold hover:animate-spin "
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
            <ul className="flex flex-col pt-16 lg:flex-row items-center gap-4  lg:gap-10 text-gold text-sm lg:text-lg font-bold bg-brown  shadow-md lg:shadow-none rounded-lg p-4 h-full lg:p-0">
              <Link href={"/"} className="w-[100%]">
                <li className="cursor-pointer border-b border-gold  py-4 w-full text-center rounded-sm hover:bg-gold hover:text-brown">
                  Home
                </li>
              </Link>
              <li className="cursor-pointer border-b border-gold py-4 w-full text-center rounded-sm hover:bg-gold hover:text-brown">
                Video Gallery
              </li>
              <li className="cursor-pointer border-b border-gold py-4 w-full text-center rounded-sm hover:bg-gold hover:text-brown">
                About Us
              </li>
              <li className="cursor-pointer border-b border-gold py-4 w-full text-center rounded-sm hover:bg-gold hover:text-brown">
                Blogs
              </li>
              <Link href={"/cart"} className="w-[100%]">
                <li className="cursor-pointer border-b border-gold py-4 w-full text-center rounded-sm hover:bg-gold hover:text-brown">
                  Cart
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
