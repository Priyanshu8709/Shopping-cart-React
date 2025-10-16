import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = ()=>{
   dispatch(remove(item.id));
   toast.error("Item Removed");
  }
  return (
    <div className="w-full border-b border-gray-200 p-4">
      <div className="flex items-start gap-6">
        <div className="w-[180px] h-[180px] flex items-center justify-center bg-white rounded-lg">
          <img src={item.image} alt={item.title} className="max-h-[150px] max-w-full w-auto h-auto object-contain"/>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-gray-800 truncate">{item.title}</h1>
          <h1 className="text-sm text-gray-600 line-clamp-2">{item.description}</h1>
          <div className="flex items-center justify-between mt-auto">
            <p className="text-lg font-bold text-green-600">${item.price}</p>
            <button 
              onClick={removeFromCart}
              className="flex items-center gap-2 text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-2 rounded-full transition-colors">
              <RiDeleteBin5Fill className="text-xl"/>
              <span className="text-sm font-medium">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
