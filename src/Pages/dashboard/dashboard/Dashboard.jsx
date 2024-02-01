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
import { convertTimer, formatDate, getAmPm } from "../../../utils/utils";
import { Link, useOutletContext } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const Dashboard = () => {

  const [timers, setTimers] = useState(null);
  const { token, baseUrl } = useStore();
  const [openModal, setOpenModal, setHeader, header] = useOutletContext();
  useEffect(() => {
    setHeader("Dashboard");
  }, []);

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const getTimers = () => {
    axios
      .get(`${baseUrl}/timers`, { headers })
      .then((response) => {
        // console.log(response);
        if (response?.data?.status == "success") {
          let data = response?.data?.timers;
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
    <div className="w-full relative flex flex-col font-montserrat pb-[20px box-border">
      {/* The Top Nav */}
      <div className="w-full bg-white lg:sticky top-0 z-30 h-[88px] border-b-[1px] border-[#F5F5F5] px-[24px] hidden lg:flex  items-center justify-end ">
        <TopNav />
      </div>
      <main className="lg:bg-[#F6F6F6] lg:h-[calc(100vh-88px)] overflow-hidden w-full px-[16px] lg:px-[24px] pb-[20px] box-border">
        <div className="w-full flex lg:flex-row flex-col gap-x-[16px] pt-[66px] lg:pt-[16px]">
          {/* Today's Timer */}
          <div className="w-full bg-white h-[307px]  lg:px-[24px] pt-[24px] rounded-[16px] overflow-hidden">
            {timers ? (
              <>
                <div className="flex justify-between ">
                  <h4 className="text-[#1E1E1E] text-[14px] font-[600] leading-[16.8px] tracking-[-0.28px]">
                    Today's timer
                  </h4>
                  <Link
                    to="time-tracker"
                    className="text-primary-blue underline text-[14px] leading-[14px] tracking-[-0.56px] font-[500] "
                  >
                    See all
                  </Link>
                </div>
                <div className="h-full overflow-y-scroll flex mt-[24px] flex-col gap-y-[24px] ">
                  {timers?.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-center gap-y-[20px] border-[1px] border-primary-blue rounded-[12px] p-[16px] "
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-y-[12px]">
                          <small className="max-lg:text-[10px] ">
                            {item.status}
                          </small>
                          <span className=" max-lg:text-[16px] font-[500]">
                            {item.timerName}
                          </span>
                        </div>
                        <LuCalendarRange />
                      </div>
                      <div className="flex justify-between">
                        <div className=" flex flex-col">
                          <table className="text-[#1E1E1E]">
                            <tbody className="">
                              <tr className="">
                                <td className="pr-[24px] flex items-baseline text-[20px] font-[300] whitespace-nowrap">
                                  {" "}
                                  <span>{convertTimer(item.start)}</span>{" "}
                                  <span className="text-[12px] font-[500]">
                                    {getAmPm(item.start)}
                                  </span>
                                </td>
                                <td className=" pr-[24px] text-[20px] font-[300] whitespace-nowrap">
                                  {convertTimer(item.stop)}
                                  <span className="text-[12px] font-[500]">
                                    {getAmPm(item.stop)}
                                  </span>
                                </td>
                                <td className="text-[20px] font-[300] whitespace-nowrap">
                                  0:00<span className="text-[12px]">m</span>
                                </td>
                              </tr>
                              <tr className="max-lg:text-[12px]">
                                <td className="pr-[24px]">start</td>
                                <td className="pr-[24px]">Finish</td>
                                <td>Overtime</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <Button className="self-center bg-error-1 px-[16px] w-fit py-[8px] h-fit">
                          Pause
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="w-full flex justify-center h-full items-center">
                <TailSpin
                  width={"50"}
                  height={"50"}
                  color="#034592"
                  className=""
                />
              </div>
            )}
          </div>
          {/* Analtics and Report */}
          <div className="w-full lg:w-max lg:h-[307px] max-lg:mt-[40px] rounded-[16px] flex flex-col gap-y-[24px] bg-white lg:p-[24px]">
            <div className="max-lg:flex max-lg:w-full justify-between">
              <h4 className="text-[#1E1E1E] text-[14px] font-[600] leading-[16.8px] tracking-[-0.28px]">
                Analytics and report
              </h4>
              <Link
                to="time-tracker"
                className=" lg:hidden block text-primary-blue underline text-[14px] leading-[14px] tracking-[-0.56px] font-[500] "
              >
                See all
              </Link>
            </div>
            <div className="max-lg:w-full flex lg:flex-row flex-col lg:gap-x-[20px] max-lg:gap-y-[14px]">
              {/* time spent */}
              <div className="lg:w-[166px] max-lg:h-[124px] w-full flex flex-col p-[20px] bg-[#E3EFFC] font-[500] text-[#1E1E1E] rounded-[12px] relative">
                <span className="text-[12px] leading-[14.4px] tracking-[-0.24px]">
                  Time spent
                </span>
                <div>
                  <h1 className="text-[36px] mt-[8px] lg:mt-[24px] text-[#1E1E1E]  leading-[43.2px] tracking-[-0.72px]">
                    2500
                  </h1>
                  <span className=" max-lg:mt-0 text-[16px] leading-[19.2px] tracking-[-0.32px] ">
                    Hours
                  </span>
                </div>
                <div className="max-lg:absolute bottom-[20px] right-[17px] flex flex-col gap-y-[8px] mt-[32px]">
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
              <div className="lg:w-[166px] max-lg:h-[124px] w-full flex flex-col p-[20px] bg-[#FFECE5] font-[500] text-[#1E1E1E] rounded-[12px] relative">
                <span className="text-[12px] leading-[14.4px] tracking-[-0.24px]">
                  Project completed
                </span>
                <div>
                  <h1 className="text-[36px] mt-[8px] lg:mt-[24px] text-[#1E1E1E]  leading-[43.2px] tracking-[-0.72px]">
                    554
                  </h1>
                  <span className=" max-lg:mt-0 text-[16px] leading-[19.2px] tracking-[-0.32px] ">
                    Projects
                  </span>
                </div>
                <div className="max-lg:absolute bottom-[20px] right-[17px] flex flex-col gap-y-[8px] mt-[32px]">
                  <span className="text-[14px] leading-[16.8px] tracking-[-0.28px]">
                    37%
                  </span>
                  {/* progress */}
                  <div className="w-[45px] h-[7px] bg-white rounded-[8px]">
                    <div className="bg-[#F77A4A] w-[37%] h-full rounded-[8px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Todo List */}
        <div className="relative w-full h-[60%] max-lg:mt-[32px] overflow-y-scroll bg-white mt-[16px] flex flex-col lg:p-[24px]">
          <div className="flex justify-between text-[#1E1E1E]">
            <span className="lg:w-full text-[16px] font-[600]">To do list</span>
            <div className="lg:w-full flex gap-x-[8px]">
              <span className="text-[12px] font-[500]">Month 2023</span>
              <MdOutlineKeyboardArrowDown className=" rotate-[0deg] text-[18px] fill-[#1E1E1E]" />
            </div>
          </div>
          {timers ? (
            <div className="w-full h-full overflow-y-scroll mt-[51px]">
              <table className="min-w-full">
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
                  {timers?.map((item, index) => (
                    <tr key={item.id} className="space-y-[20px] ">
                      <td className="py-[20px] pr-[80px] max-w-[248px] text-ellipsis  ">
                        {item.timerName}
                      </td>
                      <td>Digital Productivity</td>
                      <td>{formatDate(item.start)}</td>
                      <td>
                        {convertTimer(item.start)} {getAmPm(item.start)}
                      </td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="w-full flex justify-center h-full items-center">
              <TailSpin
                width={"50"}
                height={"50"}
                color="#034592"
                className=""
              />
            </div>
          )}
          <div className="w-full absolute bottom-0 mx-auto flex justify-center">
            <button className="text-primary-blue underline">see all</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
