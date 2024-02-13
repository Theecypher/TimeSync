import dateCalendar from "./Assets/dateCalendar.svg";
import ArrowLeft from "./Assets/arrowLeft.svg";
import ArrowRight from "./Assets/arrowRight.svg";
import AnalyticsGraph from "./AnalyticsGraph";
import AnalyticsTopNav from "./TopNav";
import { IoIosArrowBack } from "react-icons/io";

const Analytics = () => {
  return (
    <div className="w-full flex flex-col md:bg-[#f6f6f6]">
      {/* <div className="w-full bg-white lg:sticky top-0 z-30 h-[88px] border-b-[1px] border-[#F5F5F5] px-[24px] hidden lg:flex  items-center justify-end "> */}
      <AnalyticsTopNav />
      {/* </div> */}
      <div className="flex justify-between items-start mt-2 px-4">
        <h3 className="flex w-[138px] h-[22px] flex-col justify-center text-[#3D3D3D] text-[18px] font-[500] leading-8 tracking-[-1.28px] md:text-[24px]">
          Analytics
        </h3>

        <div className="flex items-center gap-[24px]">
          <div className="flex w-[111px] h-[24px] py-[2px] px-0 justify-center items-center gap-[73px] rounded">
            <div className="flex justify-center items-center gap-1">
              <h5 className="text-black opacity-50 text-center text-[16px] font-[600] leading-normal">
                November
              </h5>
              <img src={dateCalendar} alt="" />
            </div>
          </div>

          <div className="flex h-[20px] items-center gap-4">
            <img
              src={ArrowLeft}
              className="w-[20px] h-[9px] flex-shrink-0"
              alt=""
            />
            {/* <IoIosArrowBack className="" /> */}
            <h5 className="text-[#1e1e1] text-center text-[16px] font-[500] leading-normal">
              Week 1
            </h5>
            <img
              src={ArrowRight}
              className="w-[20px] h-[9px] flex-shrink-0"
              alt=""
            />
          </div>
        </div>
      </div>

      <AnalyticsGraph />
      {/* </div> */}
    </div>
  );
};

export default Analytics;
