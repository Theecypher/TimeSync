import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="w-[232px] flex flex-col h-screen border ">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="time-tracker">Time Tracker</Link>
    </div>
  );
};

export default SideMenu;
