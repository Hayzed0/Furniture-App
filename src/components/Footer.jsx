import React from "react";
import c1 from "../assets/clients/c1.png";
import c2 from "../assets/clients/c2.png";
import c3 from "../assets/clients/c3.png";
import c4 from "../assets/clients/c4.png";
import c5 from "../assets/clients/c5.png";
import { IoIosSend } from "react-icons/io";
import { FaBehance, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className=" container flex flex-col mx-auto my-12 items-center space-x-24 py-24 w-4/5 md:flex-row bg-slate-100">
        <div className="flex flex-col items-center mx-auto space-y-6 lg:space-x-24 lg:flex-row">
          <img src={c1} alt="" />
          <img src={c2} alt="" />
          <img src={c3} alt="" />
          <img src={c4} alt="" />
          <img src={c5} alt="" />
        </div>
      </div>
      <div className="container flex flex-col mx-auto space-y-6 justify-evenly mt-12  md:flex-row">
        <div className="flex flex-col space-y-6 mx-6 md:mx-0">
          <h1 className="font-bold text-gray-500">Information</h1>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            About Us
          </p>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            Contact Us
          </p>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            News
          </p>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            Store
          </p>
        </div>
        <div className="flex flex-col space-y-6 mx-6 md:mx-0">
          <h1 className="font-bold text-gray-500">Collections</h1>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            Wooden Chair
          </p>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            Royal cloth sofa
          </p>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            Accent chair
          </p>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            Bed
          </p>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            Hanging Lamp
          </p>
        </div>
        <div className="flex flex-col space-y-6 mx-6 md:mx-0">
          <h1 className="font-bold text-gray-500">My Accounts</h1>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            My account
          </p>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            Wishlist
          </p>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            Community
          </p>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            Order history
          </p>
          <p className="text-sm font-semibold text-gray-500 hover:text-yellow-500 hover:translate-x-6 cursor-pointer">
            My cart
          </p>
        </div>
        <div className="flex flex-col space-y-6 mx-6 md:mx-0">
          <h1 className="font-bold text-gray-500">Newsletter</h1>
          <p className="text-sm font-semibold text-gray-500">
            Subscribe to get latest news,update and information.
          </p>
          <div className="relative block">
            <input
              placeholder="Enter Email Here..."
              className="focus:outline-none py-2 shadow-lg rounded-md pl-4 w-4/5 "
            />
            <IoIosSend className="absolute top-0 right-16 mt-2 mx-6 text-yellow-500"  size={25}/>
          </div>
        </div>
      </div>

      <div className="container flex flex-col mx-auto justify-center item-center mt-24 bg-slate-100 p-22">
        <div className="flex mx-auto space-x-6 items-center pt-24">
        <FaFacebookF className="text-gray-500 hover:text-yellow-500" />
        <FaInstagram className="text-gray-500 hover:text-yellow-500"/>
        <FaLinkedinIn className="text-gray-500 hover:text-yellow-500"/>
        <IoLogoPinterest className="text-gray-500 hover:text-yellow-500"/>
        <FaBehance className="text-gray-500 hover:text-yellow-500"/>
        </div>
       <div className="flex items-center mx-auto mt-6 pb-8">
       <p className="text-gray-500">©copyright. designed and developed by themesine</p>
       </div>
      </div>
    </>
  );
};

export default Footer;
