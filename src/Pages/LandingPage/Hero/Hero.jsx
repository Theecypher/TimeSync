import TimeSync from "../../../assets/logo.svg";
import Line from "../../../assets/Line.svg";
import TimerImage from "../../../assets/TimerPicture.svg";
import frame from "../../../assets/frame.svg";
import TimerFrame from "../../../assets/TimerFrame.svg";
import BigIphoneWall from "../../../assets/igIphoneWall.svg";
import "./Hero.css";
import smallTimerImage from "../../../assets/TimerSmallImage.svg";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <section className="flex-shrink-0 bg bg-[#F9FCFE] md:bg-[#fff]">
      <Navbar />
      {/* <main className="pt-[36px] w-full"> */}
      <div className="flex flex-col items-center justify-center pt-[20px] gap-[8px]">
        <div className="flex flex-col justify-center items-end gap-[2px]">
          <h1 className="text-[24px] w-[320px] font-[700] text-center md:text-[48px] md:trackin-[-2.56px] md:w-[700px]">
            <span className="text-[#F77A4A]">Unlock </span>
            Your productivity potential with
            <span className="relative text-[#034592] ml-[5px]">
              TimeSync!
              <img
                src={Line}
                className="absolute w-[120px] h-[20px] left-[10%] md:w-[208.999px] md:h-[32.731px] md:left-[500x] md:t-[150px]"
                alt=""
              />
            </span>
          </h1>
        </div>
        <p className="mt-[13.5px] w-[335px] color-[#1e1e1e] leading-[120%] tracking-[0.32px] text-[16px] text-center font-[400] md:w-[810px] md:tracking-[-0.48px] md:text-[24px] lg:text-[32px]">
          Welcome to a smarter way to manage time and tasks. TimeSync is your
          dedicated companion for seamless time tracking, efficient project
          management, and insightful analytics.
        </p>
      </div>

      <div className="flex justify-center flex-shrink-0 items-center pt-[25px] mt-[35px]">
        <div className="flex-shrink-0 bg-cover w-[365px] h-[204px] relative md:w-[826px] md:h-[503px]">
          <img
            src={smallTimerImage}
            className="absolute z-10 right-[-5px] top-[1px] w-[92.36px] h-[33.155px] md:w-[196px] md:h-[67px]"
            alt=""
          />
          <img
            src={TimerFrame}
            className="w-[54.981px] z-10 flex-shrink-0 self-stretch absolute left-[12px] bottom-[12%] md:w-[124px]"
            alt=""
          />
          <img
            src={TimerImage}
            className="absolute left-[9%] top-[6px] w-[300.493px] object-cover h-[178.536px] md:w-[675px] md:h-[438px] md:top-2"
            alt=""
          />

          <div className="iphone w-[79.741px] h-[162.983px] md:hidden">
            <img
              src={frame}
              className="w-[72.897px] h-[157.293px] absolute right-[3px] top-[3px]"
              alt=""
            />
          </div>
          <div className="BigIphone hidden md:block absolute right-[3px] top-[18%]">
            <img
              src={BigIphoneWall}
              className="w-[179px] h-[386px] absolute right-[9px] top-[8px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
