import React from 'react'
import { twMerge } from 'tailwind-merge'

const Input = ({type, placeholder, className}) => {
  return (
    <input type={type} placeholder={placeholder}className={twMerge('h-[56px] max-w-full border-[1px] border-[#E9EBF8] shadown-sm px-[18px] rounded-[16px] text-[#7B7C7C] font-[400] text-[14px] leading-[21px] focus:outline-primary-blue', className)}/>
  )
}

export default Input