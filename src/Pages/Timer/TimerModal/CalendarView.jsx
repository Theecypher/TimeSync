import { useState } from "react";
import { useStore } from "zustand";
import { tasksData } from "../../dashboard/taskData";
import RightArrow from "./Assests/rightarrow.svg";
import LeftArrow from "./Assests/leftarrow.svg";
import dateCalendar from "./Assests/date-calendar.svg";

const CalendarView = ({timers}) => {
  const [activeView, setActiveView] = useState("calendar");
  const [tasks, setTasks] = useState(tasksData);
  const [days, setDays] = useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);
  const [taskColumn, setTaskColumn] = useState(false);
  // const {baseUrl} = useStore()
  // console.log(baseUrl)

  console.log(activeView);

  const handleClick = (index) => {
    setTaskColumn(!taskColumn);
    console.log(index);
  };

  return (
    <div className="flex flex-col mt-7">
      <div className="flex w-[111px] h-[60px] mb-2 flex-col justify-center items-center gap-4 flex-shrink-0 mx-auto">
        <div className="flex w-[111px] h-[24px] py-[2px] px-0 justify-center items-center gap-[73px] flex-shrink-0 rounded">
          <div className="flex md:justify-center md:items-center md:gap-1">
            <p className="months text-center hidden md:block font-[600] text-[#9a9a9a]">
              November
            </p>
            <img className="w-[20px] h-[20px]" src={dateCalendar} alt="" />
          </div>
        </div>
        <div className="flex md:w-[120.586px] md:h-[20px] items-center md:gap-4 flex-shrink-0">
          <img
            src={LeftArrow}
            className="flex-shrink-0 md:w-[16px] h-[7.793px] text-gray-300"
            alt=""
          />
          <p className="text-[#1e1e1e] text-center text-[16px] font-medium leading-normal tracking-tighter">
            Week 1
          </p>
          <img
            src={RightArrow}
            className="flex-shrink-0 md:w-[16px] h-[7.793px] text-gray-300"
            alt=""
          />
        </div>
      </div>
      <div className="flex my-1 mx-[12px] gap-1 flex-shrink-0 items-start w-[1004px]">
        {days.map((day, index) => (
          <ul
            onClick={() => handleClick(index)}
            key={index}
            className={
              !taskColumn
                ? "border my-1 mx-[2px] bg-gray-50 rounded-xl border-blue-900"
                : "border my-1 mx-[2px] rounded-xl border-blue-900 bg-blue-100"
            }
          >
            <h4 className="text-center text-[#1e1e1e] text-[15px] font-[400] leading-normal pt-2 h-[39px] flex-shrink-0">
              {day}
            </h4>
            <li>
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="border-[0.5px] border-[#E9EBF8] bg-[#FDFDFD] mx-[1px] px-[8px] my-[13px] py-[5.5px] md:w-[131px] lg:w-[135px] rounded-[8px]"
                >
                  <div className="flex w-[115px] gap-[14px] justify-center">
                    <div className="py-1">
                      <div className="flex items-center gap-[13px]">
                        <div className="flex flex-col justify-center items-start gap-[6px]">
                          <p className="text-blue-700 text-[12px] font-[500] leading-[10px] tracking-[-0.4px] py-1">
                            Checked
                          </p>
                          <h5 className="font-[500] text-[14px] tetxt-[#1e1e1e] leading-[14px] tracking-[-0.56px] overflow-ellipsis w-[67px]">
                            Workou..
                          </h5>
                        </div>

                        <p className="mt-2 text-[#1e1e1e] font-montserrat text-[18px] font-[300] leading-4 tracking-[-0.64]">
                          {task.startTime.time}
                          <span className="text-[#1e1e1e] text-[10px] tracking-[-0.4px]">
                            m
                          </span>
                        </p>
                      </div>

                      <div className="flex gap-2 items-start">
                        <div className="flex flex-col items-start gap-2 self-stretch">
                          <p className="font-light text-[10px] leading-normal tracking-[-0.4px] color-[#1e1e1e]">
                            8:10pm
                          </p>
                          <small className="text-[8px] text-[#1e1e1e] font-[400] leading-[8px] tracking-[-0.32px]">
                            Start
                          </small>
                        </div>
                        <div className="flex w-[36px] flex-col items-start gap-2 self-stretch">
                          <p className="font-light text-[10px] leading-normal tracking-[-0.4px] color-[#1e1e1e]">
                            8:10pm
                          </p>
                          <small className="text-[8px] text-[#1e1e1e] font-[400] leading-[8px] tracking-[-0.32px]">
                            Finish
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </li>
          </ul>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
