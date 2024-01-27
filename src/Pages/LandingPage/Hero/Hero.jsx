import Line from "../../../assets/Line.svg";
import MacbookScreen from "./Assets/MacbookPro.svg";
import frame from "../../../assets/frame.svg";
import TimerFrame from "./Assets/Frame16188.svg";
import BigIphoneWall from "./Assets/FloatingIphone.svg";
import secondIphoneWall from "./Assets/BigIphoneWall.svg";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex-shrink-0 bg bg-[#F9FCFE] md:bg-[#fff]">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-[15px] gap-[8px]">
        <div className="flex flex-col justify-center items-end gap-[2px]">
          <h1 className="font-montserrat text-[24px] w-[320px] font-[700] text-center md:text-[64px] md:w-[780px] md:leading-[1.2] md:tracking-[-2.56px]">
            <span className="text-[#F77A4A]">Unlock </span>
            Your productivity potential with
            <span className="relative text-[#034592] ml-[5px]">
              TimeSync!
              <img
                src={Line}
                className="absolute w-[120px] h-[20px] left-[10%] md:w-[208.999px] md:h-[32.731px] md:left-[27px] md:top-[68px]"
                alt=""
              />
            </span>
          </h1>
        </div>
        <p className="mt-[13.5px] w-[335px] color-[#1e1e1e] leading-[120%] tracking-[0.32px] text-[14px] text-center font-[400] md:w-[610px] md:tracking-[-0.48px] md:mt-[32px] md:text-[14px] lg:text-[20px] opacity-[0.7] md:leading-[120%]">
          Welcome to a smarter way to manage your time and tasks. TimeSync is
          your dedicated companion for seamless time tracking, efficient project
          management, and insightful analytics.
        </p>
      </div>

      <div className="flex justify-center flex-shrink-0 items-center pt-[25px] mt-[35px]">
        <div className="flex-shrink-0 bg-cover w-[365px] h-[204px] relative md:w-[725.651px] md:h-[443.591px]">
          <img
            src={TimerFrame}
            className="w-[201px] h-[121px] z-10 flex-shrink-0 self-stretch absolute left-[-6%] top-[50%] translate-y-[-50%] md:w-[124px]"
            alt=""
          />
          <img
            src={MacbookScreen}
            className="absolute left-[7%] top-[6px] w-[300.493px] object-cover h-[178.536px] md:w-[617.964px] md:h-[358.874px] md:top-3 flex-shrink-0"
            alt=""
          />

          {/* MOBILE SCREEN IPONE */}
          {/* <div className="iphone w-[79.741px] h-[162.983px] md:hidden">
            <img
              src={frame}
              className="w-[72.897px] h-[157.293px] absolute right-[3px] top-[3px]"
              alt=""
            />
          </div> */}

          {/* DESKTOP IPHONE */}
          <div className="shadow opacity-70 absolute left-[70%] bottom-[-10%] md:w-[404.876px] md:h-[391.9px] flex-shrink-0"></div>
          <div className="BigIphone hidden md:block z-20 absolute bottom-[-4px] left-[85%]">
            <img
              src={BigIphoneWall}
              className="w-[176.485px] h-[383.123px] flex-shrink-0 absolute right-[4px] top-[-24px]"
              alt=""
            />
          </div>

          <div className="BigIphone md:h-[315px] hidden md:block absolute bottom-[10px] left-[105%]">
            <img
              src={secondIphoneWall}
              className="w-[176px] h-[313px] flex-shrink-0 absolute right-[-5px] top-1"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex mt-[72px] justify-center items-center gap-4">
        <Link
          to="/signin"
          className="border-[1px] border-[#F77A4A] text-[#f77a4a] hidden md:block font-[500] text-[16px] py-[10px] text-center px-[16px] rounded-[30px] w-[112px] h-[48px]"
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className="bg-[#034592] md:mx-1 mx-3 font-[500] hidden md:block text-[16px] py-[10px] text-white text-center px-[16px] rounded-[30px] w-[112px] h-[48px]"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
};

export default Hero;
