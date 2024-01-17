import React from 'react';
import clock from './assets/Frame-1.png';
import todo from './assets/Frame 2.png';
import analytics from './assets/Frame 3.png';

const Why = () => {
  return (
    <div className='m-[30px]'>
     <div className='flex justify-center pb-[80px]'>
        <p className='text-[#034592] text-[56px]'>Why Choose TimeSync?</p>
     </div>
     <div className='flex gap-[3rem] items-center pb-[60px]'>
        <div><img src={clock} alt='clock'/></div>
        <div>
            <p className='text-[#1E1E1E] text-[40px]'>Effortless Time Tracking</p>
            <p className='text-[#4D4D4D] text-[24px]'>Say goodbye to guesswork.
With our intuitive time tracking features, log your work hours effortlessly and gain accurate insights into your productivity.</p>
        </div>
     </div>
     <div className='flex gap-[3rem] items-center pb-[60px]'>
        <div>
            <p className='text-[#1E1E1E] text-[40px]'>Streamlined Project Management</p>
            <p className='text-[#4D4D4D] text-[24px]'>Bring order to chaos. Organize your projects and tasks in one place. Collaborate with ease, meet deadlines, and surpass your goals.</p>
        </div>
        <div><img src={todo} alt='todo'/></div>
     </div>
     <div className='flex gap-[3rem] items-center'>
        <div><img src={analytics} alt='analytics'/></div>
        <div>
            <p className='text-[#1E1E1E] text-[40px]'>Insightful Analytics</p>
            <p className='text-[#4D4D4D] text-[24px]'>Leverage detailed reports to understand how you spend your time. Identify patterns, optimize workflows, and make informed decisions.</p>
        </div>
     </div>
    </div>
  )
}

export default Why