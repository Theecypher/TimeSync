import React from "react";
import dashboard from "./img/dashboard.svg";
import teams from "./img/teams.svg";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { DashboardIcon } from "@radix-ui/react-icons";
import { CiClock1 } from "react-icons/ci";
import { PiNotepadThin } from "react-icons/pi";
import { BiBarChartSquare } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import logo from '../../../assets/Logo.svg'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SideBar = ({ openMenu, menuRef }) => {
  // console.log(openMenu)
  return (
    <div
      className={`lg:w-max lg:px-[28p] lg:shrink-0  bg-white max-lg:pt-[54px] flex lg:flex-col max-lg:justify-center   ${
        openMenu ? "w-fit z-[9999] px-[8px]" : "w-0 z-0 overflow-hidden"
      }`}
    >
      <div className="hidden h-[80px] lg:flex justify-center py-[28px] border-b border-[#EEE]">
        <img src={logo} />
        <h3 className="text-[20px] leading-[20px] font-[500]">
          <span className="text-primary-blue">Time</span>
          <span className="text-[#F56630]">Sync</span>
        </h3>
      </div>
      <div className="flex flex-col lg:px-[28px] lg:pt-[46px] h-full justify-between pb-[36px] items-center font-montserrat font-[500] text-[#636363]">
        <div>
          <div className="flex flex-col gap-y-[12px]">
            <NavLink
              to="/dashboard"
              className="flex items-center gap-x-[8px] p-[10px]"
            >
              <DashboardIcon />
              <span className="max-lg:hidden text-[12px] font-[500] leading-[14.4px] tracking-[-0.24px]">
                Dashboard
              </span>
            </NavLink>
            {/* teams */}
            <NavLink
              to="teams"
              className="flex items-center gap-x-[8px] p-[10px]"
            >
              <HiOutlineUserGroup />
              <div className="max-lg:hidden flex gap-x-[12px] items-center">
                <div className="flex gap-x-[7px] items-center">
                  <span className="max-lg:hidden text-[12px] font-[500] leading-[14.4px] tracking-[-0.24px]">
                    Teams
                  </span>
                  <span className="bg-error-1 px-[3px] py-[1px] text-[10px] leading-[12px] shrink-0 text-white rounded-full">
                    3
                  </span>
                </div>
                <MdOutlineKeyboardArrowDown />
              </div>
            </NavLink>
          </div>
          <div className="flex flex-col mt-[50px] gap-y-[12px]">
            {/* Time Tracker */}
            <NavLink
              to="time-tracker"
              className="flex items-center gap-x-[8px] p-[10px]"
            >
              <CiClock1 />
              <span className="max-lg:hidden text-[12px] font-[500] leading-[14.4px] tracking-[-0.24px]">
                Time-Tracker
              </span>
            </NavLink>
            {/* Projects */}
            <NavLink
              to="project"
              className="flex items-center gap-x-[8px] p-[10px]"
            >
              <PiNotepadThin />
              <span className="max-lg:hidden text-[12px] font-[500] leading-[14.4px] tracking-[-0.24px]">
                Projects
              </span>
            </NavLink>
            {/* Analytics */}
            <NavLink
              to="#"
              className="flex items-center gap-x-[8px] p-[10px] shrink-"
            >
              <BiBarChartSquare className="shrink-0" />
              <span className="max-lg:hidden shrink-0 text-[12px] font-[500] leading-[14.4px] tracking-[-0.24px]">
                Analytics and Report
              </span>
            </NavLink>
          </div>
        </div>
        {/* Settings */}
        <NavLink to="#" className="flex items-center gap-x-[8px] p-[10px]">
          <IoSettingsOutline />
          <span className="max-lg:hidden text-[12px] font-[500] leading-[14.4px] tracking-[-0.24px]">
            Settings
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;