import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 uppercase text-white font-bold">
      <div className="w-10  h-10 mr-6">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center space-x-4 text-white">
      <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/blog">Blog</a>
        <span className="">
          <SearchIcon fontSize="inherit" />
        </span>
        <span className="">
          <PersonOutlineOutlinedIcon fontSize="inherit" />
        </span>
        <span className="">
          <ShoppingCartIcon fontSize="inherit" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
