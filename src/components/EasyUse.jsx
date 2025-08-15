import video from "../assets/video.png";
import { FaArrowRight, FaRegCheckCircle } from "react-icons/fa";

const EasyUse = () => {
  return (
    <div>
      <div className="container">
        <div className="UseDiv flex items-center justify-center gap-[134px]">
          <div className="flex flex-col  items-start">
            <h2 className="text-[#131022] font-manrope font-bold text-[32px] text-center">
              Simple & Easy to Use
            </h2>
            <ul className="flex flex-col mt-8 mb-10 gap-3">
              <li className="flex items-center gap-2 text-[#585C7B] font-manrope font-bold text-[16px]">
                <FaRegCheckCircle className="text-[20px] text-[#6366F1]" />
                Banking transactions are free for you
              </li>
              <li className="flex items-center gap-2 text-[#585C7B] font-manrope font-bold text-[16px]">
                <FaRegCheckCircle className="text-[20px] text-[#6366F1]" />
                No monthly cash commission
              </li>
              <li className="flex items-center gap-2 text-[#585C7B] font-manrope font-bold text-[16px]">
                <FaRegCheckCircle className="text-[20px] text-[#6366F1]" />
                Manage payments and transactions online
              </li>
              <li className="flex items-center gap-2 text-[#585C7B] font-manrope font-bold text-[16px]">
                <FaRegCheckCircle className="text-[20px] text-[#6366F1]" />
                Receive real-time alerts
              </li>
              <li className="flex items-center gap-2 text-[#585C7B] font-manrope font-bold text-[16px]">
                <FaRegCheckCircle className="text-[20px] text-[#6366F1]" />
                Receive payment from international bank details
              </li>
            </ul>
            <button className="cursor-pointer bg-[#6366F1]  px-6 py-3 rounded-[6px] border-[1px] border-slate-500 text-white font-medium font-manrope group">
              <div className="relative overflow-hidden">
                <p className="flex items-center gap-2 group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Learn more <FaArrowRight className="mt-1" />
                </p>
                <p className="flex items-center gap-2 absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Learn more <FaArrowRight className="mt-1" />
                </p>
              </div>
            </button>
          </div>
          <div className="w-[746px]">
            <img className="w-full" src={video} alt="video" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyUse;
