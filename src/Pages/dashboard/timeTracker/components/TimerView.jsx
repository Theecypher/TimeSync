import React from 'react'
import calendar from "../../../../assets/calendar.svg";
import switchOn from "../../../../assets/switch-on.svg";

const TimerView = ({timers}) => {
    function convertTimer(timer) {
      const date = new Date(timer);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      return formattedHours + ":" + formattedMinutes;
    }
    const getAmPm=(timer)=>{
        const date = new Date(timer);
        const hours = date.getHours();
        const ampm = hours >= 12 ? "pm" : "am";
        return ampm
    }
  return (
    <>
      {timers?.map((task, index) => (
        <div
          key={index}
          className={`w-full mt-[32px] flex flex-col lg:flex-row lg:justify-between lg:items-center py-[20px] pl-[28px] pr-[21px]  ${
            task.status == "Running" && "border-[1px] border-main-blue"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center max-lg:gap-y-[15px]  lg:gap-x-[20px]">
            <p className="text-main-blue text-[10px] lg:text-[12px] font-[500] leading-[10px] lg:leading-[12px] tracking-[-0.48px]">
              {task.status}
            </p>
            <p className="text-[16px] leading-[16px]">{task.timerName}</p>
          </div>
          <div className="flex flex-row items-center gap-x-[72px]">
            <div className="hidden lg:flex items-center gap-x-[16px]">
              {/* Calendar */}
              <div className="flex flex-col items-center gap-y-[8px] justify-center p-[8px] bg-[rgba(242, 247, 252, 0.53)] border-[1px] border-[rgba(3, 69, 146, 0.20)] rounded-[8px]">
                <img src={calendar} alt="calendar" className="" />
                <small className="text-[12px] font-[500] leading-[12px] tracking-[-0.48px] text-black">
                  Calendar
                </small>
              </div>
              {/* Auto */}
              <div className="hidden lg:flex flex-col justify-center items-center gap-y-[5px]">
                <img src={switchOn} alt="switch on" className="" />
                <small className="text-black text-[12px] font-[500] leading-[12px] tracking-[-0.48px] text-center">
                  Auto
                </small>
              </div>
            </div>
            {/* Time */}
            <div className='w-full flex max-lg:justify-between max-lg:mt-[28px]'>
              <div className="flex flex-row gap-x-[20px] lg:gap-x-[40px]">
                {/* Start */}
                <div className="flex flex-col text-[1E1E1E] gap-y-[8px]">
                  <p className=" text-[20px] lg:text-[32px] font-[300] leading-[20px] lg:leading-[32px] tracking-[-1.28px]">
                    {convertTimer(task.start)}
                    <sub className="text-[12px] font-[500] tracking-[-0.48px]">
                      {getAmPm(task.start)}
                    </sub>
                  </p>
                  <small className="text-center text-primary-blue font-[600] text-[12px] leading-[12px] tracking-[-0.48px]">
                    Start
                  </small>
                </div>
                {/* Finish */}
                <div className="flex flex-col text-[1E1E1E] gap-y-[8px]">
                  <p className="text-[20px] lg:text-[32px] font-[300] leading-[20px] lg:leading-[32px] tracking-[-1.28px]">
                    {convertTimer(task.stop)}
                    <sub className="text-[12px] font-[500] tracking-[-0.48px]">
                      {getAmPm(task.stop)}
                    </sub>
                  </p>
                  <small className="text-center text-primary-blue font-[600] text-[12px] leading-[12px] tracking-[-0.48px]">
                    Finish
                  </small>
                </div>
                {/* Overtime */}
                <div className="flex flex-col text-[1E1E1E] gap-y-[8px]">
                  <p className="text-error-2 text-[20px] lg:text-[32px] font-[300] leading-[20px] lg:leading-[32px] tracking-[-1.28px]">
                    0:00
                    <sub className="text-[12px] font-[500] tracking-[-0.48px]">
                      m
                    </sub>
                  </p>
                  <small className="text-center text-error-2 font-[600] text-[12px] leading-[12px] tracking-[-0.48px]">
                    overtime
                  </small>
                </div>
              </div>
              <div className="lg:hidden ">
                <button className="py-[8px] px-[16px] bg-[#D42620] max-lg:text-[16px] text-white text-center rounded-[16px]">
                  Pause
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <button className="py-[8px] px-[16px] bg-[#D42620] text-white text-center rounded-[16px]">
              Pause
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TimerView