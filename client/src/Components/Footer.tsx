import React from 'react'
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  return (
    <footer className="text-lightSandal w-full flex flex-col items-center justify-center">
      <img src="/assets/logoImg.png" alt="" className="w-[500px] h-[333px]" />
      <div className="flex flex-col items-center justify-center mb-6">
        <h2 className="text-lg font-bold mb-6">Follow Us</h2>
        <div className="flex gap-4">
          <SocialIcon
            url="www.youtube.com"
            style={{ height: 25, width: 25 }}
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <SocialIcon
            url="www.facebook.com"
            style={{ height: 25, width: 25 }}
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <SocialIcon
            url="www.instagram.com"
            style={{ height: 25, width: 25 }}
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <SocialIcon
            url="www.pinterest.com"
            style={{ height: 25, width: 25 }}
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <SocialIcon
            url="www.x.com"
            style={{ height: 25, width: 25 }}
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
      <div className="container py-4 md:px-4 text-lightSandal">
        <div className="md:flex xl:mx-10 mx-5 text-lg md:text-[14px] lg:text-lg justify-between items-start mb-6 text-lightSandal">
          <div className="w-full md:w-1/4 mb-6">
            <h5 className="font-bold text-lg md:text-[14px] lg:text-lg mb-4">
              Categories
            </h5>
            <ul className="space-y-2 lg:ps-6 md:ps-0 ps-6 list-disc">
              <li>
                <a href="#">Wild Life</a>
              </li>
              <li>
                <a href="#">Humans</a>
              </li>
              <li>
                <a href="#">Stylish Luxury</a>
              </li>
              <li>
                <a href="#">Architectural</a>
              </li>
              <li>
                <a href="#">Nature</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6">
            <h5 className="font-bold text-lg md:text-[14px] lg:text-lg mb-4">
              Company Information
            </h5>
            <ul className="space-y-2 lg:ps-6 md:ps-0 ps-6 list-disc">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Support Center</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6">
            <h5 className="font-bold text-lg md:text-[14px] lg:text-lg mb-4">
              Customer Services
            </h5>
            <ul className="space-y-2 lg:ps-6 md:ps-0 ps-6 list-disc">
              <li>
                <a href="#">Warranty & Return</a>
              </li>
              <li>
                <a href="#">Payment Methods</a>
              </li>
              <li>
                <a href="#">Shipping & Handling</a>
              </li>
              <li>
                <a href="#">Legal Window</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6">
            <h5 className="font-bold text-lg md:text-[14px] lg:text-lg mb-4">
              Other Services
            </h5>
            <ul className="space-y-2 lg:ps-6 md:ps-0 ps-6 list-disc">
              <li>
                <a href="#">Drop Shipping Program</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
              <li>
                <a href="#">Buyers Show</a>
              </li>
              <li>
                <a href="#">Fashion Bloggers</a>
              </li>
              <li>
                <a href="#">Customer Fashion Show</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full text-center bg-[#50340c]  lg:text-lg md:text-[12px] text-lg xl:px-24 text-sandal px-4">
        <ul className="sm:flex items-center md:justify-between justify-center my-4 ">
          <li className="md:mt-0 mt-2">
            © 2024 Art Millionaire - All Rights Reserved!
          </li>
          <li className="md:mt-0 mt-2">Terms & Conditions</li>
          <li className="md:mt-0 mt-2">Privacy Policy</li>
          <li className="md:mt-0 mt-2">Refund Policy</li>
          <li className="flex justify-center items-center md:mt-0 mt-4 gap-2">
            <img
              src="/assets/payment/1.png"
              alt=""
              className="lg:w-[40px] lg:h-[30px] w-[30px] h-[20px] rounded-sm"
            />
            <img
              src="/assets/payment/2.png"
              alt=""
              className="lg:w-[40px] lg:h-[30px] w-[30px] h-[20px]  rounded-sm"
            />
            <img
              src="/assets/payment/3.png"
              alt=""
              className="lg:w-[40px] lg:h-[30px] w-[30px] h-[20px]  rounded-sm"
            />
            <img
              src="/assets/payment/4.png"
              alt=""
              className="lg:w-[40px] lg:h-[30px] w-[30px] h-[20px]  rounded-sm"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;