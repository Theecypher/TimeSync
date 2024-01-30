import { HamburgerMenuIcon, PlusIcon } from '@radix-ui/react-icons'
import React, { useEffect, useRef, useState } from 'react'
import { BsPlusSquare } from 'react-icons/bs'

const TopBar = ({header, setopenMenu}) => {
  const openMenu =()=>{
    setopenMenu(true)
  }
  return (
    <div className="w-full relative border-b">
      <nav className="lg:hidden bg-white w-full max-lg:h-[52px] fixed pt-[20px] left-0 px-[13px] z-[99999] top-0 flex justify-between border-b">
        <HamburgerMenuIcon onClick={openMenu} className=" w-[20px] h-[20px]" />
        <h3>{header}</h3>
        {/* plus icon */}
        <button className="bg-[#034592] h-[24px] rounded-[6px] shrink-0 px-[3px]">
          <PlusIcon color="white" />
        </button>
      </nav>
    </div>
  );
}

export default TopBar