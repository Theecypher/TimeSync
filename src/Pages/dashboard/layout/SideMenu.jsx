import React from "react";
import logo from './img/logo.svg';
import avatar from './img/avatar.png';
import dashboard from './img/dashboard.svg';
import teams from './img/teams.svg';
import time from './img/time.svg';
import projects from './img/notebook.svg';
import analytics from './img/analytics.svg';
import settings from './img/settings.svg'
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    // <div className="w-[232px] flex flex-col h-screen border ">

    //   <Link to="/dashboard">Dashboard</Link>
    //   <Link to="time-tracker">Time Tracker</Link>
    // </div>
    <aside className="h-screen w-[232px] fixed">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex gap-[8px] text-[16px] items-center">
          <img src={logo} alt="logo"/><span>TimeSync</span>
          {/* <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
          <CiMenuBurger />
          </button> */}

        </div>
        <ul className="flex-1 px-3 pt-[50px]">
        <Link to='/dashboard'>
          <li className="relative flex items-center py-2 gap-[8px] text-[12px] text-[#7B7C7C] px-3 my-1 font-medium rounded-md cursor-pointer hover:w-[184px] hover:h-[40px] hover:bg-[#E3EFFC] hover:border-[#B6D8FF] hover:rounded-[4px]">
          <span> Dashboard</span> <img src={dashboard} alt="dashboard"/>
          </li>
          </Link> 
          <li className="relative flex items-center gap-[8px] text-[12px] text-[#7B7C7C] py-2 px-3 my-1 font-medium rounded-md cursor-pointer hover:w-[184px] hover:h-[40px] hover:bg-[#E3EFFC] hover:border-[#B6D8FF] hover:rounded-[4px]">
          <img src={teams} alt="teams"/> <span>Teams </span>
          </li>
        </ul>
        <ul className="flex-1 px-3">
        <Link  to="time-tracker">
          <li className="relative flex items-center gap-[8px] text-[12px] text-[#7B7C7C] py-2 px-3 my-1 font-medium rounded-md cursor-pointer hover:w-[184px] hover:h-[40px] hover:bg-[#E3EFFC] hover:border-[#B6D8FF] hover:rounded-[4px]">
           <img src={time} alt="time"/> <span>Time tracker</span>
          </li>
          </Link>
          <li className="relative flex items-center gap-[8px] text-[12px] text-[#7B7C7C] py-2 px-3 my-1 font-medium rounded-md cursor-pointer hover:w-[184px] hover:h-[40px] hover:bg-[#E3EFFC] hover:border-[#B6D8FF] hover:rounded-[4px]">
          <img src={projects} alt="projects"/> <span>Projects </span>
          </li>
          <li className="relative flex items-center gap-[8px] text-[12px] text-[#7B7C7C] py-2 px-3 my-1 font-medium rounded-md cursor-pointer hover:w-[184px] hover:h-[40px] hover:bg-[#E3EFFC] hover:border-[#B6D8FF] hover:rounded-[4px]">
          <img src={analytics} alt="analytics"/> <span>Analytics and report</span>
          </li>
        </ul>
        <ul className="flex-1 px-3 pt-[90px]">
          <li className="relative flex items-center gap-[8px] text-[12px] text-[#7B7C7C] py-2 px-3 my-1 font-medium rounded-md cursor-pointer hover:w-[184px] hover:h-[40px] hover:bg-[#E3EFFC] hover:border-[#B6D8FF] hover:rounded-[4px]">
          <img src={settings} alt="settings"/> <span>Settings</span> 
          </li>
        </ul>
        <div className="flex flex-col p-3 items-center text-[12px]">
          <img src={avatar} alt="avatar" className="w-[40px] height-[40px]"/>
          <p>Paul Garcia</p>
        </div>
      </nav>

    </aside>
  );
};

export default SideMenu;
