import React from "react";
import Navbar from "../partials/Navbar";
import mainImage from "../assets/main_image.png";

const Header = () => {
  return (
    <>
      <header
        className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      <Navbar />
      </header>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-white uppercase">Lorem ipsum dolor sit amet consectetur. Volutpat.</h1>
        <span>
            <button className="bg-green text-black px-4 py-2 rounded-full  mt-4 hover:bg-gray-200">Lorem Ipsum</button>
        </span>
      </div>
    </>
  );
};

export default Header;
