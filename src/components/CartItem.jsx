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
    <div className="w-full border-b border-gray-200 p-4 overflow-hidden rounded-lg">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="w-full sm:w-[180px] h-auto sm:h-[180px] flex items-center justify-center bg-white rounded-lg overflow-hidden">
          <img src={item.image} alt={item.title} className="max-h-[150px] max-w-full w-auto h-auto object-contain"/>
        </div>
        <div className="flex-1 flex flex-col gap-3 min-w-0">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 truncate break-words">{item.title}</h1>
          <p className="text-sm text-gray-600 break-words">{item.description && (item.description.length > 140 ? item.description.slice(0,140) + '...' : item.description)}</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto gap-3">
            <p className="text-lg font-bold text-green-600">${item.price}</p>
            <div className="flex-shrink-0">
              <button 
                onClick={removeFromCart}
                className="flex items-center gap-2 text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-2 rounded-full transition-colors whitespace-nowrap">
                <RiDeleteBin5Fill className="text-xl"/>
                <span className="text-sm font-medium">Remove</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
