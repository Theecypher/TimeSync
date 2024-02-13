import React from 'react';
import clock from './assets/Frame-1.png';
import todo from './assets/Frame 2.png';
import analytics from './assets/Frame 3.png';

const Why = () => {
   return (
     <div className='m-[30px]'>
      <div className='flex justify-center pb-[80px]'>
         <p className='text-[#034592] md:text-[56px] text-[20px] font-[700] text-center'>Why Choose TimeSync?</p>
      </div>
      <div className='md:flex md:flex-row gap-[3rem] flex flex-col justify-center items-center pb-[60px]'>
         <div><img src={clock} alt='clock' className='w-[250px] h-[250px] md:w-[400px] md:h-[400px]'/></div>
         <div className='lg:flex lg:justify-center md:flex-col text-center md:text-left'>
             <p className='text-[#1E1E1E] md:text-[40px] text-[20px] font-[700]'>Effortless Time Tracking</p>
             <p className='text-[#4D4D4D] md:text-[24px] text-[16px] lg:w-[494px] lg:h-[180px]'>Say goodbye to guesswork.
 With our intuitive time tracking features, log your work hours effortlessly and gain accurate insights into your productivity.</p>
         </div>
      </div>
      <div className='md:flex md:flex-row gap-[3rem] flex flex-col justify-center items-center pb-[60px]'>
         <div className='text-center md:text-left order-2 md:order-1'>
             <p className='text-[#1E1E1E] md:text-[40px] text-[20px] font-[700] lg:w-[494px]'>Streamlined Project Management</p>
             <p className='text-[#4D4D4D] md:text-[24px] text-[16px] lg:w-[494px] lg:h-[180px]'>Bring order to chaos. Organize your projects and tasks in one place. Collaborate with ease, meet deadlines, and surpass your goals.</p>
         </div>
         <div className='md:order-2 order-1'><img src={todo} alt='todo' className='w-[250px] h-[250px] md:w-[400px] md:h-[400px]'/></div>
      </div>
      <div className='md:flex md:flex-row gap-[3rem] flex flex-col justify-center items-center'>
         <div><img src={analytics} alt='analytics' className='w-[250px] h-[250px] md:w-[400px] md:h-[400px]'/></div>
         <div className='text-center md:text-left'>
             <p className='text-[#1E1E1E] md:text-[40px] text-[20px] font-[700]'>Insightful Analytics</p>
             <p className='text-[#4D4D4D] md:text-[24px] text-[16px] lg:w-[494px] lg:h-[180px]'>Leverage detailed reports to understand how you spend your time. Identify patterns, optimize workflows, and make informed decisions.</p>
         </div>
      </div>
     </div>
   )
 }
 
 export default Why
