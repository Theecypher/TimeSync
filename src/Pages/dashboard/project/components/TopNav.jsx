import React from 'react'
import Button from '../../../../components/ui/Button'
import { PlusIcon } from '@radix-ui/react-icons'


const ProjectTopNav = ({setOpenModal}) => {
    const openModal=()=>{
        setOpenModal(true)
    }
  return (
    <div className='w-full flex h-full items-center justify-end '>
        <Button onClick={openModal} className='flex items-center gap-1'>Add new <PlusIcon height={16} width={16} color='white'/></Button>
    </div>
  )
}

export default ProjectTopNav