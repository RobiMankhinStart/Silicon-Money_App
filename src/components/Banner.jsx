import React from "react";
import bannerimg from "../assets/image.png";
import appStore from "../assets/appstore.png";
import googlePlay from "../assets/googleplay.png";
import { MdKeyboardArrowDown } from "react-icons/md";
const Banner = () => {
  return (
    <section className="pt-[112px] bg-[#f9f3fe]">
      <div className="container">
        <div className="bannerRow flex items-center justify-between">
          <div className="flex items-start flex-col gap-[216px]">
            <div className="w-[526px] flex flex-col">
              <h2 className="text-[56px] font-bold font-manrope text-[#131022]">
                Manage All Your Money in One App
              </h2>
              <p className="mt-6 mb-12 text-[18px] font-manrope text-[#585C7B]">
                We offer you a new generation of the mobile banking. Save, spend
                & manage money in your pocket.
              </p>
              <div className="flex gap-6 items-center">
                <button className="w-[180px]">
                  <img className="w-full" src={appStore} alt="AppStore" />
                </button>{" "}
                <button className="w-[180px]">
                  <img className="w-full" src={googlePlay} alt="googlePlay" />
                </button>
              </div>
            </div>
            <button className="text-[#585C7B] flex gap-4 items-center text-[14px] font-manrope">
              <MdKeyboardArrowDown className="shadow-2xl bg-white shadow-gray-900 rounded-full size-[44px]" />
              Discover more
            </button>
          </div>
          <div className="w-[746px]">
            <img className="w-full" src={bannerimg} alt="bannerImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
