import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({children, onClick, className, variant}) => {
  return (
    <button onClick={onClick} className={twMerge('bg-main-blue py-[10px] px-[24px] text-white text-[16px] rounded-[16px] hover:bg-opacity-75', className)}>{children}</button>
  )
}

export default Button