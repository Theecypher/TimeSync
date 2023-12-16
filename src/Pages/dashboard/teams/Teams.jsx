import React, { useState } from "react";
import Chat from "./components/Chat";
import Shared from "./components/Shared";
import Tasks from "./components/Tasks";

const Teams = () => {
  const [activeTab, setActiveTab] = useState("Chat");
  let menuTabs = [
    {
      name: "Chat",
      fn: () => setActiveTab("Chat"),
    },
    {
      name: "Shared",
      fn: () => setActiveTab("Shared"),
    },
    {
      name: "Tasks",
      fn: () => setActiveTab("Tasks"),
    },
  ];
  return (
    <div className="w-full relative flex flex-row ">
      {/* Side Nav */}
      <aside className="fixed w-[254px] flex-shrink-0 h-[calc(100vh-88px)]  bg-[#FDF3F3]  overflow-y-auto "></aside>
      <div className="w-full flex flex-col pl-[254px] ">
        {/* menutop */}
        <div className="w-full h-[88px] flex justify-between pl-[32px] pr-[24px] py-[24px] text-[16px] font-[500] leading-[16px] tracking-[-0.64px] text-[#7B7C7C] ">
          <div className="flex gap-x-[16px] ">
            {menuTabs.map((tab, index) => (
              <button
                key={index}
                onClick={tab.fn}
                className={`${activeTab ==tab.name && ' bg-[#FAFAFA] text-[#1E1E1E]'} p-[12px] flex items-center justify-center rounded-[8px]`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <p className="font-[600]">Digital Productivity tools</p>
        </div>
        {/* Main screen */}
        <main className="w-full bg-[#FAFAFA] min-h-[calc(100vh-176px)]">
          {
            activeTab == 'Chat' ? 
            <Chat/>
            :
            activeTab == 'Shared' ?
            <Shared/>
            :
            activeTab == 'Tasks' &&
            <Tasks/>
          }
        </main>
      </div>
    </div>
  );
};

export default Teams;
