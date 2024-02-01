import React, { useState } from "react";
import docs from "./assets/docs.svg";
import download from "./assets/download.svg";
import disabledownload from "./assets/disabledownload.svg";
import link from "./assets/link.svg";
import pdf from "./assets/pdf.svg";
import picture from "./assets/picture.svg";
import speaker from "./assets/speaker.svg";
import share from "./assets/share.svg";
import video from "./assets/video.svg";

const Shared = () => {
  const sharedLists = [
    {
      title: "Progress report and task allocation for week 5",
      icon: pdf,
      date: "6th Dec",
      time: "7:00pm",
      download: true,
      share: true,
    },
    {
      title: "Explanation of sketch for  “Shared screen",
      icon: video,
      date: "4th Dec",
      time: "3:00pm",
      download: true,
      share: true,
    },
    {
      title: "Sketches for the  “Shared screen",
      icon: picture,
      date: "3rd Dec",
      time: "4:00am",
      download: true,
      share: true,
    },
    {
      title: "Tutorials for microinteraction",
      icon: link,
      date: "2nd Dec",
      time: "11:00am",
      download: false,
      share: true,
    },
    {
      title: "Recording from Friday’s meeting",
      icon: speaker,
      date: "2nd Dec",
      time: "5:00am",
      download: true,
      share: true,
    },
    {
      title: "Documentation",
      icon: docs,
      date: "1st Dec",
      time: "2:00pm",
      download: true,
      share: true,
    },
    {
      title: "Progress report and task allocation for week 3",
      icon: pdf,
      date: "30th Nov",
      time: "9:00pm",
      download: true,
      share: true,
    },
  ];
  const [sharedList, setSharedList] = useState(sharedLists);
  return (
    <div className="w-full flex flex-col">
      {/* Sub menu */}
      <div className="w-full h-[72px] flex justify-end">
        {/* Sort */}
        <div className="flex items-center pr-[21px] gap-x-[4px] text-[#1E1E1E]">
          <span className="font-[500] text-[16px] leading-[16px] tracking-[-0.64px]">
            {" "}
            Name
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5C21 15.9783 21 18.2175 19.6088 19.6088C18.2175 21 15.9783 21 11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5Z"
              stroke="#1E1E1E"
              strokeWidth="1.3"
            />
            <path
              d="M8.5 11.5H14.5001"
              stroke="#1E1E1E"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 15H13.5"
              stroke="#1E1E1E"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 8H15.5"
              stroke="#1E1E1E"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <main className="w-full flex flex-col justify-center gap-y-[4px]">
        {sharedList &&
          sharedList.map((list, index) => (
            <div
              key={index}
              className="p-[20px] bg-white flex justify-between text-[#1E1E1E]"
            >
              <div className="flex gap-x-[40px]">
                <img src={list.icon} className="" />
                <div className="flex flex-col gap-y-[12px]">
                  <p className=" text-[16px] font-[500] leading-[16px] tracking-[-0.64px]">
                    {list.title}
                  </p>
                  <div className="flex gap-x-[12px] font-[400] text-[14px] leading-[14px] tracking-[-0.56px]">
                    <span>{list.date}</span>
                    <span>{list.time}</span>
                  </div>
                </div>
              </div>
              {/* Share & Download */}
              <div className="flex gap-x-[46px] text-[#1E1E1E]">
                <button
                  disabled={!list.download}
                  className="disabled:opacity-30 flex flex-col gap-y-[8px] text-[10px] font-[400px] leading-[10px] tracking-[-0.4px] justify-center items-center"
                >
                  {list.download ? (
                    <img src={download} className="" />
                  ) : (
                    <img src={disabledownload} className="" />
                  )}
                  <span>Download</span>
                </button>
                <button
                  className="flex flex-col gap-y-[8px] text-[10px] font-[400px] leading-[10px] tracking-[-0.4px] justify-center items-center"
                >
                  <img src={share} className="" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
      </main>
    </div>
  );
};

export default Shared;
