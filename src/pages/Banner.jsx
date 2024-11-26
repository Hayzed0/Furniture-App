import React from "react";
import { useDispatch } from "react-redux";

import Slider from "react-slick";
import slider1 from "../assets/slider/slider1.png";
import slider2 from "../assets/slider/slider2.png";
import slider3 from "../assets/slider/slider3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addToCart } from "../redux/features/cart/cartSlice";

const data = [
  {
    id: 11,
    title: "Great design Collection",
    name: "Mapple wood Accent Chair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    newPrice: 199.9,
    oldPrice: 399.9,
    coverImage: slider1,
  },
  {
    id: 12,
    title: "Great design Collection",
    name: "Mapple wood Accent Chair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    newPrice: 199.9,
    oldPrice: 399.9,
    coverImage: slider2,
  },
  {
    id: 13,
    title: "Great design Collection",
    name: "Mapple wood Accent Chair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    newPrice: 199.9,
    oldPrice: 399.9,
    coverImage: slider3,
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Added autoplay for demonstration
  autoplaySpeed: 3000, // 2 seconds interval
  cssEase: "ease-in",
  fade: true,
};

const Banner = () => {
  return (
    <div className="carousel-container bg-slate-50 space-y-6 overflow-hidden ">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className="container flex flex-col justify-evenly items-center mx-auto md:flex-row "
          >
            <div className="flex flex-col md:flex-row items-center lg:mx-24 justify-between space-y-6 md:space-y-0 px-6 md:px-12 py-8">
              {/* Left Side Content */}
              <div className="flex flex-col space-y-4 md:w-1/2">
                <h3 className="my-2 text-xl font-semibold text-gray-600">
                  {item.title}
                </h3>
                <h1 className=" my-2 text-3xl font-bold text-gray-800">
                  {item.name}
                </h1>
                <p className="text-gray-500">{item.description}</p>
                <p className=" my-6  text-lg font-semibold text-gray-900">
                  ${item.newPrice}
                  <span className="line-through mx-4 text-gray-600">
                    ${item.oldPrice}
                  </span>
                </p>
                <div className="flex">
                  <button
                    className="px-6 py-4 mx-6 bg-yellow-500 text-white font-bold hover:border-2
                   hover:border-yellow-500 hover:text-yellow-500 hover:bg-slate-50 "
                  >
                    Add to cart
                  </button>
                  <button className="text-yellow-500 px-6 py-4 mx-6 hover:border-2 hover:border-yellow-500 font-bold">
                    More info
                  </button>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="flex mx-auto justify-center md:w-1/2">
                <img
                  src={item.coverImage}
                  alt={item.name}
                  className=" h-auto rounded-lg shadow-none"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
