import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const Modal = ({className, children, openModal, closeModal}) => {
    if(openModal){
  return (
    <div className={`${openModal ? 'fixed inset-0 overflow-y-auto z-[999] flex items-center justify-center' : 'hidden'}`}>
    <div 
    onClick={closeModal} 
    className='fixed inset-0 z-[999] bg-transparent/25 '></div>
    <div className={twMerge('max-w-[70%] max-h-[90%] w-[50%] bg-white rounded-[16px] py-[14px] px-[10px] lg:py-[32px] lg:px-[40px] overflow-auto z-[9999]', className)}>
            {children}
        </div>
    </div>
  )
} else return null
}

export default Modal