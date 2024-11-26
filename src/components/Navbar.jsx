import React, {useRef} from "react";
import {
  IoCartOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  
  const cartItems = useSelector((state) => state.cart.cartItems)

  // console.log(cartItems.length)
  return (
    <div className="container mx-auto py-8  ">
      <nav className=" container flex items-center mx-auto fixed py-4 justify-evenly z-10 top-0 w-full shadow-md bg-slate-50 md:flex-wrap">
        <HamburgerMenu />
        <div className="font-medium text-2xl text-gray-500 cursor-pointer">
          <Link to = "/">
            Az<span className="text-yellow-500">Mkt</span>.
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-6 font-bold text-gray-500 gap-6 cursor-pointer">
            <Link
              to="/"
              className="hover:text-yellow-500 active:text-yellow-500 focus:outline-none focus:text-yellow-500"
            >
              Home
            </Link>
            <button className="hover:text-yellow-500 active:text-yellow-500">
              New Arrival
            </button>
            <li className="hover:text-yellow-500 active:text-yellow-500">
              Features
            </li>
            <li className="hover:text-yellow-500 active:text-yellow-500">
              Blog
            </li>
            <li className="hover:text-yellow-500 active:text-yellow-500">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex gap-2 md:gap-8 md:p-4">
          <IoSearchOutline
            size={22}
            className="text-gray-500 hover:text-yellow-500"
          />
          <IoSettingsOutline
            size={22}
            className="text-gray-500 hover:text-yellow-500"
          />
          <div className="relative">
            <Link to="/cart">
              <IoCartOutline
                size={22}
                className="text-gray-500 hover:text-yellow-500"
              />
              <span className="absolute -right-4 -top-4 bg-yellow-500 text-white text-xs font-semibold rounded-full py-1 px-2">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
