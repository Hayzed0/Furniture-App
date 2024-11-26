import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // < RxHamburgerMenu size={22} onClick={() => setIsOpen(!isOpen)} />
    <div className="relative lg:hidden ">
      {isOpen ? (
        <>
          <div className="border border-yellow-500 p-2 rounded-md cursor-pointer">
            <IoClose size={22} onClick={() => setIsOpen((prev) => !prev)} />
          </div>
          <div className=" absolute block w-[300px] bg-slate-50">
            <div className=" rounded-lg text-gray-500 border border-gray-300 ">
              <ul className="cursor-pointer my-6  mx-24 font-bold space-y-6 ">
                <li className="  hover:text-yellow-500 hover:border-gray-300 active:text-yellow-500 focus:outline-none focus:text-yellow-500">
                  Home
                </li>
                <li className="  hover:text-yellow-500 active:text-yellow-500 focus:outline-none focus:text-yellow-500">
                  New Arrival
                </li>
                <li className="  hover:text-yellow-500 active:text-yellow-500 focus:outline-none focus:text-yellow-500">
                  Features
                </li>
                <li className="  hover:text-yellow-500 active:text-yellow-500 focus:outline-none focus:text-yellow-500">
                  Blog
                </li>
                <li className=" hover:text-yellow-500 active:text-yellow-500 focus:outline-none focus:text-yellow-500">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="border border-yellow-500 p-2 rounded-md cursor-pointer">
          <RxHamburgerMenu size={22} onClick={() => setIsOpen(!isOpen)} />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
