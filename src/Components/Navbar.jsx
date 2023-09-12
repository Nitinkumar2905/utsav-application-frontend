import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/pro.png";

const Navbar = () => {
  return (
    <>
      <nav className="z-10 sticky top-0 bg-gradient-to-tl from-blue-100 to-red-100 h-24 w-full">
        <div className="flex justify-between w-[95%] mx-auto items-center h-full">
          {/* logo */}
          <div className="mx-2">
            <Link to="/">
              <img src={logo} className="h-12 w-12 rounded-full" alt="logo" />
            </Link>
          </div>
          {/* navlinks */}
          <div className="h-10 flex items-end space-x-6">
            <Link
              style={{ fontFamily: "sans-serif" }}
              className="font-medium text-xl hover:text-red-600"
              to="/"
            >
              Home
            </Link>
            <Link
              style={{ fontFamily: "sans-serif" }}
              className="font-medium text-xl hover:text-red-600"
              to="/products"
            >
              Product
            </Link>
            <Link
              style={{ fontFamily: "sans-serif" }}
              className="font-medium text-xl hover:text-red-600"
              to="/services"
            >
              Services
            </Link>
            <Link
              style={{ fontFamily: "sans-serif" }}
              className="font-medium text-xl hover:text-red-600"
              to="/features"
            >
              Features
            </Link>
            <Link
              style={{ fontFamily: "sans-serif" }}
              className="font-medium text-xl hover:text-red-600"
              to="/about"
            >
              About Us
            </Link>
            <Link
              style={{ fontFamily: "sans-serif" }}
              className="font-medium text-xl hover:text-red-600"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
          {/* buttons */}
          <div>
            <button
              style={{ fontFamily: "sans-serif" }}
              className="bg-red-700 shadow-sm shadow-red-900 hover:bg-white hover:text-red-600 duration-300 ease-in-out font-medium text-white mx-2 px-4 py-2 rounded-md"
            >
              <Link to="/signIn">SignIn</Link>
            </button>
            <button
              style={{ fontFamily: "sans-serif" }}
              className="bg-red-700 shadow-sm shadow-red-900 hover:bg-white hover:text-red-600 duration-300 ease-in-out font-medium text-white mx-2 px-4 py-2 rounded-md"
            >
              <Link to="/signUp">SignUp</Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
