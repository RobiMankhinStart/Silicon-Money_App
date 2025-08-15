import React from "react";
import logo from "../assets/solid.svg";
import { IoIosArrowDown } from "react-icons/io";
import { LuUser } from "react-icons/lu";
const Navbar = () => {
  return (
    <header className="py-4">
      <div className="container">
        <div className="navRow flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="w-[122px]">
              <img className="w-full" src={logo} alt="logo" />
            </div>
            <ul className="text-[16px] font-semibold text-[#3E4265] font-manrope flex items-center justify-center gap-6">
              <li>Features</li>
              <li>Overview</li>
              <li className="flex items-center gap-1">
                Store
                <IoIosArrowDown />
              </li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <p>Light</p>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="group peer ring-0  bg-[#6366f1] rounded-full outline-none transi duration-300 w-[46px] h-[24px] shadow-md peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-white after:outline-none after:h-[20px] after:w-[20px] after:top-[2px] after:left-[2px] peer-checked:after:translate-x-[22px] peer-checked:bg-[#your-right-color]"></div>
              </label>
              <p>Dark</p>
            </div>
            <button className="flex text-white items-center gap-[10px] py-[9px] px-5 rounded-[4px] bg-[#6366f1]">
              <LuUser className="text-[18px]" />
              <p className="font-semibold text-[14px] font-manrope ">
                Sign in/up
              </p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
