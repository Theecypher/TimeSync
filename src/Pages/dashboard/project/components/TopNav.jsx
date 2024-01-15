import React, { useState } from 'react'
import Button from '../../../../components/ui/Button'
import { PlusIcon } from '@radix-ui/react-icons'
import ProjectModal from './ProjectModal'


const ProjectTopNav = ({openModal, setOpenModal}) => {
    // const openModal=()=>{
    //     setOpenModal(true)
    // }
    // const [openModal, setOpenModal]= useState(false)
    const closeModal=()=>setOpenModal(false)
  return (
    <div className='w-full flex h-full items-center justify-end '>
        <Button onClick={()=>setOpenModal(true)} className='flex items-center gap-1'>Add new <PlusIcon height={16} width={16} color='white'/></Button>
        {/* <ProjectModal openModal={openModal} closeModal={closeModal} /> */}
    </div>
  )
}

export default ProjectTopNav