import React from "react";
import phoneIMG from "../assets/imagePhone.png";
import icon1 from "../assets/icon.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
const Features = () => {
  return (
    <section className="pb-[112px]">
      <div className="container">
        <div className="featuresDiv flex items-start justify-center gap-[200px]">
          <div className="w-[348px]">
            <img className="w-full" src={phoneIMG} alt="PhoneImg" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[40px] font-bold font-manrope text-[#131022]">
              App Features
            </h2>
            <p className="mt-6 mb-[56px] w-[725px] text-[18px]  font-manrope text-[#9397AD]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              volutpat mollis egestas. Nam luctus facilisis ultrices.
              Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-12">
                <div className="flex items-start gap-6">
                  <div className="w-[60px]">
                    <img className="w-full" src={icon1} alt="icon" />
                  </div>
                  <div className="flex flex-col gap-3 w-[255px]">
                    <h3 className="text-[20px] font-bold font-manrope text-[#131022]">
                      Easy Payments
                    </h3>
                    <p className="text-[16px] font-manrope">
                      Id mollis consectetur congue egestas egestas suspendisse
                      blandit justo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-[60px]">
                    <img className="w-full" src={icon2} alt="icon" />
                  </div>
                  <div className="flex flex-col gap-3 w-[255px]">
                    <h3 className="text-[20px] font-bold font-manrope text-[#131022]">
                      Cost Statistics
                    </h3>
                    <p className="text-[16px] font-manrope">
                      Mattis urna ultricies non amet, purus in auctor non. Odio
                      vulputate ac nibh.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-[60px]">
                    <img className="w-full" src={icon3} alt="icon" />
                  </div>
                  <div className="flex flex-col gap-3 w-[255px]">
                    <h3 className="text-[20px] font-bold font-manrope text-[#131022]">
                      Regular Cashback
                    </h3>
                    <p className="text-[16px] font-manrope">
                      Sit facilisis dolor arcu, fermentum vestibulum arcu
                      elementum imperdiet eleifend.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12">
                <div className="flex items-start gap-6">
                  <div className="w-[60px]">
                    <img className="w-full" src={icon4} alt="icon" />
                  </div>
                  <div className="flex flex-col gap-3 w-[255px]">
                    <h3 className="text-[20px] font-bold font-manrope text-[#131022]">
                      Data Security
                    </h3>
                    <p className="text-[16px] font-manrope">
                      Augue pulvinar justo, fermentum fames aliquam accumsan
                      vestibulum non.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-[60px]">
                    <img className="w-full" src={icon5} alt="icon" />
                  </div>
                  <div className="flex flex-col gap-3 w-[255px]">
                    <h3 className="text-[20px] font-bold font-manrope text-[#131022]">
                      Support 24/7
                    </h3>
                    <p className="text-[16px] font-manrope">
                      A elementum, imperdiet enim, pretium etiam facilisi in
                      aenean quam mauris.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-[60px]">
                    <img className="w-full" src={icon6} alt="icon" />
                  </div>
                  <div className="flex flex-col gap-3 w-[255px]">
                    <h3 className="text-[20px] font-bold font-manrope text-[#131022]">
                      Top Standards
                    </h3>
                    <p className="text-[16px] font-manrope">
                      Faucibus cursus maecenas lorem cursus nibh. Sociis sit
                      risus id. Sit facilisis dolor arcu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
