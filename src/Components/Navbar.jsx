import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/pro.png"

const Navbar = () => {
  return (
    <>
    <nav className="bg-gray-100 h-16 w-full">
      <div className="flex justify-between w-[98%] items-center h-full">
        {/* logo */}
        <div className="mx-5"><img src={logo} className="h-12 w-12 rounded-full" alt="logo" /></div>
        {/* navlinks */}
        <div className="space-x-6">
          <Link style={{fontFamily:'sans-serif'}} className="font-medium hover:text-red-500" to="/home">Home</Link>
          <Link style={{fontFamily:'sans-serif'}} className="font-medium hover:text-red-500" to="/home">Product</Link>
          <Link style={{fontFamily:'sans-serif'}} className="font-medium hover:text-red-500" to="/home">Services</Link>
          <Link style={{fontFamily:'sans-serif'}} className="font-medium hover:text-red-500" to="/home">Features</Link>
          <Link style={{fontFamily:'sans-serif'}} className="font-medium hover:text-red-500" to="/home">About Us</Link>
          <Link style={{fontFamily:'sans-serif'}} className="font-medium hover:text-red-500" to="/home">Contact Us</Link>
        </div>
        {/* buttons */}
        <div>
          <button style={{fontFamily:'sans-serif'}} className="bg-red-700 shadow-sm shadow-red-900 hover:bg-white hover:text-red-500 duration-300 ease-in-out font-medium text-white mx-2 px-4 py-2 rounded-md">SignIn</button>
          <button style={{fontFamily:'sans-serif'}} className="bg-red-700 shadow-sm shadow-red-900 hover:bg-white hover:text-red-500 duration-300 ease-in-out font-medium text-white mx-2 px-4 py-2 rounded-md">SignUp</button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
