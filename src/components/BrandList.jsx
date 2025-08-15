import React from "react";
import logo1 from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
const BrandList = () => {
  return (
    <section className="pt-[96px] pb-[112px]">
      <div className="container">
        <div className="ListDiv flex items-center justify-center gap-6">
          <div className="w-[196px]">
            <img className="w-full" src={logo1} alt="logo1" />
          </div>
          <div className="w-[196px]">
            <img className="w-full" src={logo2} alt="logo2" />
          </div>
          <div className="w-[196px]">
            <img className="w-full" src={logo3} alt="logo3" />
          </div>
          <div className="w-[196px]">
            <img className="w-full" src={logo4} alt="logo4" />
          </div>
          <div className="w-[196px]">
            <img className="w-full" src={logo5} alt="logo5" />
          </div>
          <div className="w-[196px]">
            <img className="w-full" src={logo6} alt="logo6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandList;
