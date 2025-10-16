import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const {cart} = useSelector((state)=>state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div className="max-w-[1200px] mx-auto py-6 px-4 min-h-[80vh]">
    {
      cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <div className="bg-white rounded-lg shadow-md">
              {
                cart.map((item,index) => (
                  <CartItem key={item.id} item={item} itemIndex={index}/>
                ))
              }
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="lg:w-[380px] bg-white rounded-lg shadow-md h-fit p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Order Summary</h3>
              <div className="h-[1px] w-full bg-gray-200 mb-4"></div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Total Items:</p>
                <p className="font-semibold">{cart.length}</p>
              </div>
              <div className="flex justify-between mb-6">
                <p className="text-gray-600">Total Amount:</p>
                <p className="font-bold text-xl text-green-600">${totalAmount.toFixed(2)}</p>
              </div>
            </div>
            <button 
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold
                hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-6 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          </div>
          <NavLink to="/">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold
              hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Continue Shopping
            </button>
          </NavLink>
        </div>
      )
    }
    </div>
  );
};

export default Cart;
