import { PlusIcon } from "@radix-ui/react-icons";
import DashboardLayout from "../layout/DashboardLayout";
import ProjectTopNav from "../project/components/TopNav";
import Button from "../../../components/ui/Button";
import TopNav from "./components/TopNav";
import { BsCalendar4Week } from "react-icons/bs";
import { LuCalendarRange } from "react-icons/lu";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useStore from "../../../zustand-store/store";
import axios from "axios";
import { convertTimer } from "../../../utils/utils";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [timerList, setTimerList] = useState([
    {
      title: "",
      status: "",
    },
    {
      title: "",
      status: "",
    },
    {
      title: "",
      status: "",
    },
    {
      title: "",
      status: "",
    },
    {
      title: "",
      status: "",
    },
    {
      title: "",
      status: "",
    },
    {
      title: "",
      status: "",
    },
    {
      title: "",
      status: "",
    },
    {
      title: "",
      status: "",
    },
    {
      title: "",
      status: "",
    },
  ]);
  const [timers, setTimers] = useState(null);
  const {token, baseUrl} = useStore()
  // console.log(token)
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const getTimers = () => {
    axios
      .get(`${baseUrl}/timers`, { headers })
      .then((response) => {
        console.log(response);
        if (response?.data?.status == "success") {
          let data = response?.data?.tasks;
          setTimers(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTimers();
  }, []);
  return (
    <div className="w-full h-screen overflow-hidden relative flex flex-col font-montserrat">
      {/* The Top Nav */}
      <div className="w-full bg-white sticky top-0 z-30 h-[88px] border-b-[1px] border-[#F5F5F5] px-[24px] flex  items-center justify-end ">
        <TopNav />
      </div>
      <main className="bg-[#F6F6F6] h-full w-full px-[24px] ">
        <div className="w-full flex gap-x-[16px] pt-[16px]">
          {/* Today's Timer */}
          <div className="w-full bg-white h-[307px]  px-[24px] pt-[24px] rounded-[16px] overflow-hidden">
            <div className="flex justify-between ">
              <h4 className="text-[#1E1E1E] text-[14px] font-[600] leading-[16.8px] tracking-[-0.28px]">
                Today's timer
              </h4>
              <Link to='time-tracker'  className="text-primary-blue underline text-[14px] leading-[14px] tracking-[-0.56px] font-[500] ">
                See all
              </Link>
            </div>
            <div className="h-full overflow-y-scroll flex mt-[24px] flex-col gap-y-[24px] ">
              {timers?.map((item, index) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center gap-y-[20px] border-[1px] border-primary-blue rounded-[12px] p-[16px]"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-y-[12px]">
                      <small>{item.status}</small>
                      <span>{item.timerName}</span>
                    </div>
                    <LuCalendarRange />
                  </div>
                  <div className="flex justify-between">
                    <div className=" flex flex-col">
                      <table className="">
                        <tbody>
                          <tr>
                            <td>{convertTimer(item.start)}</td>
                            <td>{convertTimer(item.stop)}</td>
                            <td>0:00m</td>
                          </tr>
                          <tr>
                            <td>start</td>
                            <td>Finish</td>
                            <td>Overtime</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <Button className="bg-error-1">Pause</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Analtics and Report */}
          <div className="w-max h-[307px] rounded-[16px] flex flex-col gap-y-[24px] bg-white p-[24px]">
            <h4 className="text-[#1E1E1E] text-[14px] font-[600] leading-[16.8px] tracking-[-0.28px]">
              Analytics and report
            </h4>
            <div className="flex gap-x-[20px]">
              {/* time spent */}
              <div className="w-[166px] flex flex-col p-[20px] bg-[#E3EFFC] font-[500] text-[#1E1E1E] rounded-[12px]">
                <span className="text-[12px] leading-[14.4px] tracking-[-0.24px]">
                  Time spent
                </span>
                <div>
                  <h1 className="text-[36px] mt-[24px] text-[#1E1E1E]  leading-[43.2px] tracking-[-0.72px]">
                    2500
                  </h1>
                  <span className=" text-[16px] leading-[19.2px] tracking-[-0.32px] ">
                    Hours
                  </span>
                </div>
                <div className="flex flex-col gap-y-[8px] mt-[32px]">
                  <span className="text-[14px] leading-[16.8px] tracking-[-0.28px]">
                    55%
                  </span>
                  {/* progress */}
                  <div className="w-[45px] h-[7px] bg-white rounded-[8px]">
                    <div className="bg-primary-blue w-[50%] h-full rounded-[8px]"></div>
                  </div>
                </div>
              </div>
              {/* Project completed */}
              <div className="w-[166px] flex flex-col p-[20px] bg-[#FFECE5] font-[500] text-[#1E1E1E] rounded-[12px]">
                <span className="text-[12px] leading-[14.4px] tracking-[-0.24px]">
                  Project completed
                </span>
                <div>
                  <h1 className="text-[36px] mt-[24px] text-[#1E1E1E]  leading-[43.2px] tracking-[-0.72px]">
                    2500
                  </h1>
                  <span className=" text-[16px] leading-[19.2px] tracking-[-0.32px] ">
                    Hours
                  </span>
                </div>
                <div className="flex flex-col gap-y-[8px] mt-[32px]">
                  <span className="text-[14px] leading-[16.8px] tracking-[-0.28px]">
                    55%
                  </span>
                  {/* progress */}
                  <div className="w-[45px] h-[7px] bg-white rounded-[8px]">
                    <div className="bg-primary-blue w-[50%] h-full rounded-[8px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Todo List */}
        <div className="w-full h-full overflow-auto bg-white mt-[16px] flex flex-col p-[24px]">
          <div className="flex justify-between">
            <span className="w-full">To do list</span>
            <div className="w-full flex gap-x-[8px]">
              <span>Month 2023</span>
              <MdOutlineKeyboardArrowDown className=" rotate-[0deg] text-[18px] fill-[#1E1E1E]" />
            </div>
          </div>
          <table className="min-w-full overflow-y-scroll mt-[51px] ">
            <thead>
              <tr className="">
                <th className="text-start">Task</th>
                <th className="text-start">Team</th>
                <th className="text-start">Date</th>
                <th className="text-start">Time</th>
                <th className="text-start">Status</th>
              </tr>
            </thead>
            <tbody className="table-row-group">
              {timerList?.map((item, index) => (
                <tr key={index} className="space-y-[20px] ">
                  <td className="py-[20px] pr-[80px] max-w-[248px] text-ellipsis  ">
                    Complete the design of the mobile version of the desktop
                    design
                  </td>
                  <td>Digital Productivity</td>
                  <td>12th, Mar 2023</td>
                  <td>12 PM</td>
                  <td>Completed</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center">
            <button className="text-primary-blue underline">see all</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
