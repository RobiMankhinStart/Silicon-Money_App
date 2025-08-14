import React from "react";
import logo from "../assets/solid.svg";
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="navRow flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="w-[122px]">
              <img className="w-full" src={logo} alt="logo" />
            </div>
            <ul className="text-[16px] flex items-center justify-center gap-6">
              <li>Features</li>
              <li>Overview</li>
              <li>Store</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
