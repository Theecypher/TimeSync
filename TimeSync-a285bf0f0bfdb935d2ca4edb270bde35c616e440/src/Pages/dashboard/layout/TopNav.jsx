import React from 'react'
import ProjectTopNav from '../project/components/TopNav'
import { useLocation } from 'react-router-dom'

const TopNav = ({setOpenModal}) => {
  const path = useLocation()
  return (
    <div className='w-full bg-white sticky top-0 z-30 h-[88px] border-b-[1px] border-[#F5F5F5] px-[24px]'>
      {path.pathname.includes('project') ?
      <ProjectTopNav setOpenModal={setOpenModal}/> 
      :
      null
  }
    </div>
  )
}

export default TopNav