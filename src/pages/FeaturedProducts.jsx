import React from "react";
import featuredProducts from "../featuredProducts.json";
import { FaRegStar } from "react-icons/fa";

const FeaturedProducts = () => {
  return (
    <>
      <div className=" container mx-auto flex flex-col items-center">
        <h1 className="text-3xl text-gray-500 font-bold mb-6 mt-12">
          Featured Products
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-center justify-center  gap-4 md:w-4/5 md:grid-cols-4">
        {featuredProducts.featuredProducts.map((product, index) => (
          <div key={index} className="flex flex-col mx-2 items-center">
            <div className="flex flex-col relative items-center bg-slate-50 h-[300px] w-[250px] justify-center ">
              <img
                src={product.images}
                alt={product.title}
                className=" w-full "
              />
            </div>
           <div className="flex space-x-2 mt-6 items-center">
           <FaRegStar  className=""/>
           <FaRegStar />
           <FaRegStar />
           <FaRegStar />
           <FaRegStar />
            <span className="font-semibold text-sm text-gray-500">({product.ratings.review} review)</span>
           </div>
            <h2 className="font-semibold text-gray-500 my-6">
              {product.title}
            </h2>
            <p className="font-semibold text-gray-500">${product.price}.00</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
