import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/home-page/logo.png"
// import './Main.css';

const Navbar = () => {
  return (
    <div className="nav-div w-[100%] shadow-sm fixed z-50  bg-[#e3e6f3] px-[80px] py-[22px]">
      <nav className=" w-[100%] home-nav flex flex-nowrap justify-between items-center">
        <img src={logo} />
        <div className="text-black list nav-item flex gap-[40px] text-[20px] font-bold backdrop-blur-2xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Shop">Shop</NavLink>
          <NavLink to="/Blog">Blog</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          {/* <NavLink to="/Card">Card</NavLink> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
