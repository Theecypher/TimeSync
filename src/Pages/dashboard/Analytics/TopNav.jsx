import Avatar from "./Assets/Avatar.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AnalyticsTopNav = () => {
  return (
    <div className="w-full hidden bg-white sticky top-0 z-30 h-[88px] border-b-[1px] border-[#F5F5F5] px-[24px] lg:flex  items-center lg:justify-between">
      {/* // <div className="bg-[#fff] hidden w-full md:flex"> */}
      <span className="">Welcome Daniel!</span>
      <div className="flex items-center gap-x-[8px]">
        <img
          src={Avatar}
          alt="avatar"
          className="w-[36px] h-[36px] rounded-full fill-[#D9D9D9]"
        />
        <MdOutlineKeyboardArrowDown className=" rotate-[0deg] text-[18px] fill-[#1E1E1E]" />
      </div>
    </div>
  );
};

export default AnalyticsTopNav;
