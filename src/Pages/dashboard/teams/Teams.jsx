import React, {useEffect, useState} from "react";
import Chat from "./components/Chat";
import Shared from "./components/Shared";
import Tasks from "./components/Tasks";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import jade from './components/assets/Image-24.png';
import safinatu from './components/assets/Safinatu.svg';
import devguy from './components/assets/Devguy.svg';
import jacob from './components/assets/Jacob.svg';
import { useOutletContext } from "react-router-dom";

const Teams = () => {
  const [activeTab, setActiveTab] = useState("Chat");
  const [subMenuActiveTab, setSubMenuActiveTab] = useState('Todo')
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const containerHeight = showOptions ? '120px' : '70px';
  const taskMenu = [
    {
      title: 'Todo',
      
      fn: ()=>{
          setSubMenuActiveTab('Todo')
          console.log('Todo is active')}
      
    },
    {
      title: 'In progress',
      fn: ()=>{
        setSubMenuActiveTab('In progress')
        console.log('In Progress is active')
      }
    },
    {
      title: 'Completed',
      fn: ()=>{
        setSubMenuActiveTab('Completed')
        console.log('Completed is active')
      }
    }   
  ]
  const sharedMenu = [
    {
      title: 'Todo',
      
      fn: ()=>{
          setSubMenuActiveTab('Todo')
          console.log('Todo is active')}
      
    },
    {
      title: 'In progress',
      fn: ()=>{
        setSubMenuActiveTab('In progress')
        console.log('In Progress is active')
      }
    },
    {
      title: 'Completed',
      fn: ()=>{
        setSubMenuActiveTab('Completed')
        console.log('Completed is active')
      }
    }   
  ]
  const chatMenu = [
    {
      title: 'Topics', 
      className: 'font-[700]'
    },

    {
      title: '# Problem statement',
    },
    {
      title: '# Onboarding',

    },
    {
      title: '# User research',

    },
    {
      title: '# Illustration & icons',

    },
    {
      title: '# Design system',

    },
    {
      title: 'Direct messages', 
      className: 'font-[700]'
    },
    {
      title: 'Jade',
      img: jade,
      
      fn: ()=>{
          setSubMenuActiveTab('Jade')
          console.log('Jade is active')}
      
    },
    {
      title: 'Safinatu',
      img: safinatu,
      fn: ()=>{
        setSubMenuActiveTab('Safinatu')
        console.log('Safinatu is active')
      }
    },
    {
      title: 'Dev guy',
      img: devguy,
      fn: ()=>{
        setSubMenuActiveTab('Dev guy')
        console.log('Dev guy is active')
      }
    },   

    {
      title: 'Jacob',
      img: jacob,
      fn: ()=>{
        setSubMenuActiveTab('Jacob')
        console.log('Jacob is active')
      }
    }   
  ]
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
  const [openModal, setOpenModal, setHeader, header] = useOutletContext()
  useEffect(()=>{
  setHeader('Teams')
  },[])
  return (
    <div className="w-full flex flex-col">
      {/* topNav */}
      <div className="w-full bg-white sticky top-0 z-30 h-[88px] border-b-[1px] border-[#F5F5F5] px-[24px] hidden lg:flex items-center justify-end "></div>
      <div className="w-full relative flex flex-row ">
        {/* Side Nav */}
        <aside className="fixed z-30 w-[254px] px-[22px] py-[32px] hidden lg:flex lg:flex-col flex-shrink-0 h-full bg-[#FDF3F3]  overflow-y-auto ">
        <div className=" w-[209px] rounded-[12px] h-${containerHeight} overflow-hidden m-auto flex items-center bg-white gap-x-[8px] justify-center">
            <div className="flex flex-col">
            <div className="flex flex-row">
            <h4 className=" text-[#3D3D3D] text-[20px] font-[500] leading-[20px] tracking-[-0.8px]">Teams</h4>
            {showOptions ? (
            <MdKeyboardArrowUp size={24} onClick={handleToggleOptions} />
            ) : (
            <MdKeyboardArrowDown size={24} onClick={handleToggleOptions} />
            )}
            </div>
            {showOptions && (
            <div>
              <p className="text-[12px] font-[600]">Digital productivity tools</p>
              <p className="text-[12px] font-[400]">Charity and non profit website</p>
              <p className="text-[12px] font-[400]">E learning platform</p>
            </div>
             )}
            </div>
          </div>
          {/* Menu Subcategory */}
          <div className="w-full mt-[100px] flex flex-col items-start gap-y-[20px] text-[#3D3D3D]">
          {activeTab !== 'Chat' && <h4>Section</h4>}
             {activeTab === 'Tasks' ?
               taskMenu?.map((item, index) => (
                  <button 
                  key={index} 
                  onClick={(item.fn)}
                  className={`${subMenuActiveTab == item.title && 'w-full bg-[#FCB59A] text-start rounded-[4px] '} w-full text-start p-[8px]`}>
                    {item.title}
                  </button>
                ))
                :
                // Shared Menu
                activeTab === 'Shared' ?
                sharedMenu?.map(((item, index)=>(
                  <button 
                  key={index} 
                  onClick={(item.fn)}
                  className={`${subMenuActiveTab == item.title && 'w-full bg-[#FCB59A] text-start rounded-[4px] '} w-full text-start p-[8px]`}>
                    {item.title}
                  </button>
                )))
              :
              // Chat Menu
              activeTab === 'Chat' &&
              chatMenu?.map(((item, index)=>(
                <button 
                key={index} 
                onClick={(item.fn)}
                className={`${subMenuActiveTab == item.title && 'w-full bg-[#FCB59A] text-start rounded-[4px] '} w-full text-start flex p-[8px] ${item.className}`}>
                {item.img && <img src={item.img} alt={item.title} className="w-[24px] h-[24px] mr-[8px]"/>}
                  {item.title}
                </button>
              )))
}
          </div>
        </aside>
        <div className="w-full relative flex flex-col lg:pl-[254px] ">
          {/* menutop */}
          <div className="sticky top-[29px] lg:top-[88px] z-[99] w-full lg:h-[88px] bg-white flex justify-between pl-[32px] pr-[24px] py-[24px] text-[16px] font-[500] leading-[16px] tracking-[-0.64px] text-[#7B7C7C] ">
            <div className=" flex gap-x-[16px] ">
              {menuTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={tab.fn}
                  className={`${
                    activeTab == tab.name && "w-full bg-[#FAFAFA] text-[#1E1E1E]"
                  } p-[12px] flex items-center justify-center rounded-[8px]`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <p className="font-[600] max-lg:hidden">Digital Productivity tools</p>
          </div>
          {/* Main screen */}
          <main className="w-full bg-[#FAFAFA] min-h-[calc(100vh-176px)]">
            {activeTab == "Chat" ? (
              <Chat />
            ) : activeTab == "Shared" ? (
              <Shared />
            ) : (
              activeTab == "Tasks" && <Tasks />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Teams;
