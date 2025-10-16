import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const {cart} = useSelector((state)=>state);
  return (
    <div className="bg-[#0a0a29]">
      <nav className="flex justify-between items-center h-16 md:h-20 w-full max-w-7xl mx-auto px-4">
        <NavLink to="/">
          <div className="ml-2 md:ml-5">
            <img 
              src={process.env.PUBLIC_URL + "/shoppers-logo.png"}
              alt="Shoppers Logo" 
              className="h-20 md:h-28 w-auto object-contain object-[25%_50%] scale-150"
              style={{ 
                clipPath: 'inset(0 0 33% 0)', 
                transform: 'translateY(10%)'
              }}
            />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-white space-x-6 md:space-x-8">
          <NavLink to="/" className={({ isActive }) => 
            isActive ? "text-blue-400" : "hover:text-cyan-400 transition-colors duration-300"
          }>
            <p className="py-1">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <MdShoppingCart className="text-2xl md:text-3xl text-white hover:text-cyan-400 transition-colors duration-300" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
