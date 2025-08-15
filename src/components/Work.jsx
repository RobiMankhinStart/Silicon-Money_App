import React from "react";
import iphone1 from "../assets/iPhone12Pro1.png";
import iphone2 from "../assets/iPhone12Pro2.png";
import iphone3 from "../assets/iPhone12Pro3.png";

const Work = () => {
  return (
    <section className="bg-[#f3f6ff] pt-[80px] pb-[96px]">
      <div className="container">
        <div className="workDiv">
          <h2 className="text-[#131022] font-manrope font-bold text-[40px] text-center">
            How Does It Work?
          </h2>
          <div className="flex items-center gap-[100px] justify-center mt-12 mb-10">
            <div className="w-[328px]">
              <img className="w-full" src={iphone1} alt="phone" />
            </div>
            <div className="w-[328px]">
              <img className="w-full" src={iphone2} alt="phone" />
            </div>
            <div className="w-[328px]">
              <img className="w-full" src={iphone3} alt="phone" />
            </div>
          </div>
          <div className="flex flex-col mx-auto w-[636px] gap-3 ">
            <h2 className="text-[#131022] font-manrope font-bold text-[24px] text-center">
              How Does It Work?
            </h2>
            <p className="text-[#585C7B] font-manrope font-bold text-[16px] text-center">
              Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
              Arcu sociis tristique quisque hac in consectetur condimentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
