import React, { useEffect, useState } from "react";
import calendar from "../../../assets/calendar.svg";
import switchOn from "../../../assets/switch-on.svg";
import { tasksData } from "../taskData";
import useStore from "../../../zustand-store/store";
import CalendarView from "../../Timer/TimerModal/CalendarView";
import Button from "../../../components/ui/Button";
import { PlusIcon } from "@radix-ui/react-icons";
import TimerModal from "../../Timer/TimerModal/TimerModal";
import axios from "axios";
import TimerView from "./components/TimerView";
import ProjectTopNav from "../../../../TopNav";
import { useOutletContext } from "react-router-dom";

const TimeTracker = () => {
  const [activeView, setActiveView] = useState("timer");
  const [tasks, setTasks] = useState(tasksData)
  const [timers, setTimers] = useState(null)
  const [openTimerModal, setOpenTimerModal] = useState(false)
  const closeModal =()=>setOpenTimerModal(false)
  const {baseUrl, token} = useStore()
  // console.log(baseUrl)
    const headers = {
      Authorization: `Bearer ${token}`,
    };
 const [openModal, setOpenModal, setHeader, header] = useOutletContext();
 useEffect(() => {
   setHeader("Timers");
 }, []);
  const getTimers=()=>{
    axios.get(`${baseUrl}/timers`, {headers})
    .then((response)=>{
      // console.log(response)
      if(response?.data?.status=="success"){
      let data= response?.data?.timers
      setTimers(data)
    }
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    getTimers()
  },[])
  return (
    <div className="w-full lg:w-[1048px flex flex-col pt-[32p]">
      {/* Top Nav */}
      <div className="w-full bg-white sticky top-0 z-30 h-[88px] border-b-[1px] border-[#F5F5F5] px-[24px] hidden lg:flex  items-center justify-end ">
        <Button
          onClick={() => setOpenTimerModal(true)}
          className="flex items-center gap-1"
        >
          Set timer <PlusIcon height={16} width={16} color="white" />
        </Button>
        {openModal && (
          <TimerModal handleClose={closeModal} getTimers={getTimers} />
        )}
      </div>
      <h2 className="hidden lg:block pl-[20px]  lg:text-[48px] text-[#3D3D3D] font-[500]  lg:leading-[48px] tracking-[-1.92px]">
        Timer Library{" "}
      </h2>
      {/* Category View */}
      <div className=" flex flex-row px-[20px] mt-[36px] gap-x-[8px] lg:gap-x-[28px]">
        <button
          onClick={() => setActiveView("timer")}
          className={` ${
            activeView == "timer"
              ? "bg-[#F5F5F5] text-[12px] md:text-[14px] lg:text-[16px] font-[500] tracking-[-0.64px] text-[#1E1E1E] rounded-[8px] p-[8px] lg:p-[12px]"
              : "p-[12px] text-[12px] md:text-[14px] lg:text-[16px] font-[500] tracking-[-0.64px] text-[#7B7C7C] leading-[12px]"
          }`}
        >
          Timer view
        </button>
        <button
          onClick={() => setActiveView("calendar")}
          className={` ${
            activeView == "calendar"
              ? "bg-[#F5F5F5] text-[12px] md:text-[14px] lg:text-[16px] font-[500] tracking-[-0.64px] text-[#1E1E1E] rounded-[8px] p-[8px] lg:p-[12px]"
              : "p-[12px] text-[12px] md:text-[14px] lg:text-[16px] font-[500] tracking-[-0.64px] text-[#7B7C7C] leading-[12px]"
          }`}
        >
          Calendar view
        </button>
      </div>
      {/* Main View */}
      {activeView == "timer" ? (
        <TimerView timers={timers} />
      ) : (
        <CalendarView timers={timers} />
      )}
    </div>
  );
};

export default TimeTracker;
