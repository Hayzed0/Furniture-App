import React, { forwardRef } from "react";
import products from "../products.json";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiBracketsSquareThin } from "react-icons/pi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid'
import { addToCart } from "../redux/features/cart/cartSlice";

import { useOutletContext } from "react-router-dom";


const Products = () => {
  const [cartItem, setCartItem] = useState([])
  const dispatch = useDispatch()

  const handleAddCartItem = (product) => {
    dispatch(addToCart(product))
  
  }

  return (
    <>
      <div className=" container mx-auto flex flex-col items-center">
        <h1 className="text-3xl text-gray-500 font-bold mb-6 mt-12">
          Latest Arrival
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-center justify-center  gap-4 md:w-4/5 lg:grid-cols-4">
        {products.products.map((product) => (
          <div key={product?.id} className="flex flex-col mx-2 items-center py-6">
            <div className="flex flex-col relative items-center bg-slate-50 p-2 h-[300px] w-[250px] justify-center hover:bg-slate-100 ">
              <img
                src={product?.images}
                alt={product?.title}
                className="px-6  transition ease-in-out hover:translate-y-1 hover:scale-125 duration-300 "
              />
              {product.sales.isSale && product.sales.discount === 20 ? (
                <span className="absolute top-0 right-0 mt-4 bg-yellow-600 text-l px-4 text-white font-semibold">
                  sale
                </span>
              ) : product.sales.isSale && product.sales.discount === 50 ? (
                <span className="absolute top-0 right-0 mt-4 bg-green-600 text-l px-4 text-white font-semibold">
                  sale
                </span>
              ) : null}

              <div className=" flex bg-gray-800 items-center w-full absolute bottom-0 justify-between">
                <div className="flex items-center">
                  <IoCartOutline className="text-white text-sm my-2 mx-2" />
                  <p className="text-white text-sm my-2 mx-2 cursor-pointer" onClick={() => handleAddCartItem(product)}>Add to cart</p>
                </div>
                <div className="flex">
                  <IoMdHeartEmpty className="text-white text-sm my-2 mx-2" />
                  <PiBracketsSquareThin className="text-white text-sm my-2 mx-2" />
                </div>
              </div>
            </div>
            <h2 className="font-semibold text-gray-500 my-6">
              {product?.title}
            </h2>
            <p className="font-semibold text-gray-500">${product?.price}.00</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default forwardRef (Products);
