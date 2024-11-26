import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removecart } from "../redux/features/cart/cartSlice";
import { IoTrashOutline } from "react-icons/io5";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch()

  const handleDelete = (product) => {
    dispatch(removecart(product))
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)

  return (
    <>
      <div className="container mx-auto items-center my-12 flex flex-col">
        {cartItems && cartItems.length > 0 ? (
          <div className="flex flex-col items-center justify-between space-x-6 w-full ">
            {cartItems.map((item) => (
              <div key={item.id} className="flex space-y-6 justify-between w-3/4">
                <div className="flex items-center my-12">
                  <img src={item.images} alt={item.title}  width={150} />
                  <h2 className="mx-12 text-gray-500 font-semibold">{item.title}</h2>
                </div>
                <div className="flex items-center">
                <p className="text-gray-500 font-bold">${item.price}.00</p>
                <IoTrashOutline  
                onClick={()=> handleDelete(item)}
                className="text-red-500 mx-12 cursor-pointer"
                />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No Items in cart</div>
        )}
        <div className="flex justify-between mx-auto w-3/4 items-center border-t-2 border-gray-500">
            <div className="flex mx-6 my-6">
                <h1 className="font-bold text-l text-gray-500">Total price</h1>
            </div>
            <div className="flex mx-6 my-6">
                <h1 className="font-bold text-xl space-x-3 text-yellow-500">Total Price:    ${totalPrice}</h1>
            </div>

        </div>
      </div>
    </>
  );
};

export default Cart;
