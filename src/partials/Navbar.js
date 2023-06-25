import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import logo from "../assets/logo.svg";
import {useSelector, useDispatch} from "react-redux";
import { addItem, deleteItem} from "../actions/cartActions.js";


const CartIcon = () => {
  const state = useSelector((state) => state);
  return (
    <div className="relative">
      <ShoppingCartIcon fontSize="inherit" />
      {state.numberOfItems > 0 && (
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 bg-brightGreen text-white text-xs rounded-full">
          {state.numberOfItems}
        </span>
      )}
    </div>
  );
};

const Navbar = () => {
  const dispatch = useDispatch();
  
  const handleAddItem = () => {
    dispatch(addItem());
  }
  const handleRemoveItem = () => {
    dispatch(deleteItem());
  }

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
        <span className="" onClick={handleAddItem}>
        <CartIcon />
        </span>
        <span className="" onClick={handleRemoveItem}>
        <button className="red">Cart-</button>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
