import React from 'react';
import clock from './assets/Frame 1.svg';
import todo from './assets/Frame 2.svg';
import analytics from './assets/Frame 3.svg';

const Why = () => {
  return (
    <div className='m-[30px]'>
     <div className='flex justify-center pb-[80px]'>
        <p className='text-[#034592] md:text-[56px]  text-[20px] font-[700]'>Why Choose TimeSync?</p>
     </div>
     <div className='md:flex md:flex-row gap-[3rem] flex flex-col justify-center items-center pb-[60px]'>
        <div><img src={clock} alt='clock'/></div>
        <div className='lg:flex lg:justify-center md:flex-col'>
            <p className='text-[#1E1E1E] md:text-[40px] text-[20px] font-[700]'>Effortless Time Tracking</p>
            <p className='text-[#4D4D4D] md:text-[24px] text-[16px]'>Say goodbye to guesswork.
With our intuitive time tracking features, log your work hours effortlessly and gain accurate insights into your productivity.</p>
        </div>
     </div>
     <div className='md:flex md:flex-row gap-[3rem] flex flex-col justify-center items-center pb-[60px]'>
        <div>
            <p className='text-[#1E1E1E] md:text-[40px] text-[20px] font-[700]'>Streamlined Project Management</p>
            <p className='text-[#4D4D4D] md:text-[24px] text-[16px]'>Bring order to chaos. Organize your projects and tasks in one place. Collaborate with ease, meet deadlines, and surpass your goals.</p>
        </div>
        <div><img src={todo} alt='todo'/></div>
     </div>
     <div className='md:flex md:flex-row gap-[3rem] flex flex-col justify-center items-center'>
        <div><img src={analytics} alt='analytics'/></div>
        <div>
            <p className='text-[#1E1E1E] md:text-[40px] text-[20px] font-[700]'>Insightful Analytics</p>
            <p className='text-[#4D4D4D] md:text-[24px] text-[16px]'>Leverage detailed reports to understand how you spend your time. Identify patterns, optimize workflows, and make informed decisions.</p>
        </div>
     </div>
    </div>
  )
}

export default Why