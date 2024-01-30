import React, { useState } from "react";
import logo from "./img/logo.svg";
import avatar from "./img/avatar.png";
import dashboard from "./img/dashboard.svg";
import teams from "./img/teams.svg";
import time from "./img/time.svg";
import projects from "./img/notebook.svg";
import analytics from "./img/analytics.svg";
import settings from "./img/settings.svg";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  //  const [isClosed, setIsClosed] = useState('');

  const toggle = () => setIsOpen(!isOpen);

  return (
    <aside
      className={`lg:w-[230px] w-full h-full overflow-hidden ixed left-0 top-0 bottom-0 lg:sticky  z-[999] ${
        isOpen && "w-[60px]" 
      }`}
    >
      <nav className=" w-full h-full flex flex-col bg-white border-r shadow-sm ">
        <div className="p-4 pb-2 flex gap-[8px] text-[16px] items-center">
          <Link
          to={'/'}
            className={`lg:flex hidden flex-row items-center ${
              isOpen ? "block" : "none"
            }`}
          >
            <img src={logo} alt="logo" className="w-[20px] h-[20px]" />
            <span>TimeSync</span>
          </Link>
          <button className=" lg:invisible p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 flex justify-center align-center">
            <CiMenuBurger onClick={toggle} />
          </button>
        </div>

        <ul className="flex-1 px-3 pt-[50px] ">
          <Link to="/dashboard">
            <li className="relative flex items-center py-2 gap-[8px] text-[12px] text-[#7B7C7C] px-3 my-1 font-medium rounded-md cursor-pointer lg:hover:w-[184px] hover:w-[32px] lg:hover:h-[40px] hover:h-[36px] hover:bg-[#E3EFFC] hover:border-[#B6D8FF] hover:rounded-[4px]">
              <span
                className={`hidden lg:inline ${isOpen ? "lg:visible" : ""}`}
              >
                Dashboard
              </span>{" "}
              <img src={dashboard} alt="dashboard" />
            </li>
          </Link>
          <Link to="teams">
            <li className="relative flex items-center gap-[8px] text-[12px] text-[#7B7C7C] py-2 px-3 my-1 font-medium rounded-md cursor-pointer lg:hover:w-[184px] hover:w-[32px] lg:hover:h-[40px] hover:h-[36px] hover:bg-[#E3EFFC] hover:border-[#B6D8FF] hover:rounded-[4px]">
              <img src={teams} alt="teams" />
              <span
                className={`hidden lg:inline ${isOpen ? "lg:visible" : ""}`}
              >
                Teams{" "}
              </span>
            </li>
          </Link>
        </ul>
        <ul className="flex-1 px-3">
          <Link to="time-tracker">
            <li className="relative flex items-center gap-[8px] text-[12px] text-[#7B7C7C] py-2 px-3 my-1 font-medium rounded-md cursor-pointer lg:hover:w-[184px] hover:w-[32px] lg:hover:h-[40px] hover:h-[36px] hover:bg-[#E3EFFC] hover:border-[#B6D8FF] hover:rounded-[4px]">
              <img src={time} alt="time" />
              <span
                className={`hidden lg:inline ${isOpen ? "lg:visible" : ""}`}
              >
                Time tracker
              </span>
            </li>
          </Link>
          <Link to="project">
            <li className="relative flex items-center gap-[8px] text-[12px] text-[#7B7C7C] py-2 px-3 my-1 font-medium rounded-md cursor-pointer lg:hover:w-[184px] hover:w-[32px] lg:hover:h-[40px] hover:h-[36px] hover:bg-[#E3EFFC] hover:border-[#B6D8FF] hover:rounded-[4px]">
              <img src={projects} alt="projects" />
              <span
                className={`hidden lg:inline ${isOpen ? "lg:visible" : ""}`}
              >
                Projects{" "}
              </span>
            </li>
          </Link>
          <li className="relative flex items-center gap-[8px] text-[12px] text-[#7B7C7C] py-2 px-3 my-1 font-medium rounded-md cursor-pointer lg:hover:w-[184px] hover:w-[32px] lg:hover:h-[40px] hover:h-[36px] hover:bg-[#E3EFFC] hover:border-[#B6D8FF] hover:rounded-[4px]">
            <img src={analytics} alt="analytics" />
            <span className={`hidden lg:inline ${isOpen ? "lg:visible" : ""}`}>
              Analytics and report
            </span>
          </li>
        </ul>
        <ul className="flex-1 px-3 pt-[90px]">
          <li className="relative flex items-center gap-[8px] text-[12px] text-[#7B7C7C] py-2 px-3 my-1 font-medium rounded-md cursor-pointer lg:hover:w-[184px] hover:w-[32px] lg:hover:h-[40px] hover:h-[36px]  hover:bg-[#E3EFFC] hover:border-[#B6D8FF] hover:rounded-[4px]">
            <img src={settings} alt="settings" />
            <span className={`hidden lg:inline ${isOpen ? "lg:visible" : ""}`}>
              Settings
            </span>
          </li>
        </ul>
        <div className="flex flex-col p-3 items-center text-[12px]">
          <img src={avatar} alt="avatar" className="w-[40px] height-[40px]" />
          <p className={`hidden lg:inline ${isOpen ? "lg:visible" : ""}`}>
            Paul Garcia
          </p>
        </div>
      </nav>
    </aside>
  );
};

export default SideMenu;
