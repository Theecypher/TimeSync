import React from 'react'
import avatar from '../../../../assets/profile-avatar.svg'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const TopNav = () => {
  return (
    <div className="w-full bg-white sticky top-0 z-30 h-[88px] border-b-[1px] border-[#F5F5F5] px-[24px] flex  items-center lg:justify-between">
      <span className=''>Welcome Daniel!</span>
      <div className='flex items-center gap-x-[8px]'>
        <img src={avatar} alt='avatar' className='w-[36px] h-[36px] rounded-full fill-[#D9D9D9]'/>
        <MdOutlineKeyboardArrowDown className=' rotate-[0deg] text-[18px] fill-[#1E1E1E]'/>
      </div>
    </div>
  )
}

export default TopNav