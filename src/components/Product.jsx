import React from "react";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
    
   const {cart} = useSelector((state)=>state);
   const dispatch = useDispatch();
   
   function removeFromCart(){
    dispatch(remove(post.id));
    toast.error("Item Removed")
   }
   function addToCart(){
   dispatch(add(post));
   toast.success("Item Added")
   }

  if (!post) {
   
  
    console.warn("Product component rendered without a `post` prop");
    return (
      <div className="product-loading">
        <Loader/>
      </div>
    );
  }

 
  const {
    title = "No title",
    category = "Unknown",
    image = "",
    price = "-",
  } = post || {};

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-105 transition duration-300 ease-in gap-3 p-4 mt-8 ml-4 rounded-lg
    shadow-lg hover:shadow-2xl border border-gray-200 max-w-[280px]">
      <div>
      <p className="text-gray-800 font-semibold text-base text-left truncate w-44 mt-1">{title}</p>
      </div>
      <div>
      <p className="w-44 text-gray-500 font-normal text-xs text-left">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div>
      <p className="text-blue-500 font-medium text-xs uppercase tracking-wide">{category}</p>
      </div>
      <div className="w-full">
      {image ? (
        <div className="h-[160px] flex items-center justify-center rounded-lg bg-white">
        <img src={image} alt={title} className="max-h-[140px] max-w-full w-auto h-auto object-contain hover:opacity-90 transition-opacity"/>
        </div>
      ) : (
        <div className="h-[160px] bg-gray-100 flex items-center justify-center rounded-lg">No image</div>
      )}
      </div>
      <div className="flex justify-between items-center w-full mt-3">
      <div>
        <p className="text-green-600 font-semibold text-base">${price}</p>
      </div>
      {
        cart.some((p)=>p.id===post.id) ? (
        <button onClick={removeFromCart} 
          className="text-red-600 border border-red-600 rounded-full font-medium text-xs py-1.5 px-3 uppercase
          hover:text-white hover:bg-red-600 transition duration-300 ease-in"
        >Remove</button>
        ) : (
        <button 
          className="text-blue-600 border border-blue-600 rounded-full font-medium text-xs py-1.5 px-3 uppercase
          hover:text-white hover:bg-blue-600 transition duration-300 ease-in"
          onClick={addToCart}>Add To Cart</button>
        )
      }
      </div>
    </div>
  );
};

export default Product;
