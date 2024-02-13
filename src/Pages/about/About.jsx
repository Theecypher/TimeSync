import React from 'react';
import male from './assets/Male.png';

const About = () => {
  return (
    <div className='m-[30px] flex md:flex-row flex-col gap-[3rem] font-montserrat'>
     <div className='flex flex-col'>
     <div>
     <div className='md:h-[249px] md:w-[288px] h-[200px] w-[200px] rounded-[20px] border bg-[#3D89DF]'><p></p></div>
     <div className='md:h-[249px] md:w-[288px] h-[200px] w-[200px] rounded-[20px] border bg-[#FCB59A] md:mt-[160px] md:ml-[230px] mt-[-20px] ml-[130px]'><p></p></div>
     </div>
     <div className='flex absolute ml-[40px] mt-[40px]'><img src={male} alt='male' className='md:w-[427px] md:h-[580px] w-[250px] h-[300px]' /></div>
     </div>
     <div>
       <p className='text-[#F77A4A] md:text-[56px] text-[24px] font-[700]'>About Us</p>
       <p className='text-[#4D4D4D] md:text-[14px] lg:text-[20px] pb-[20px]'>Welcome to TimeSync, your dedicated companion in navigating a more intelligent approach to time and task management. Our platform is crafted to offer you a seamless experience in time tracking, ensuring precision and efficiency.</p>
       <p className='text-[#4D4D4D] md:text-[14px] lg:text-[20px] pb-[20px]'>Beyond that, TimeSync is your partner in effective project management, providing tools and features to enhance collaboration and productivity. Dive into insightful analytics to gain a comprehensive understanding of your workflow, empowering you to make informed decisions.</p>
       <p className='text-[#4D4D4D] md:text-[14px] lg:text-[20px] pb-[20px]'>Join us on a journey where managing your time and tasks becomes not just a routine but a strategic and fulfilling endeavor.</p>
       <p className='text-[#4D4D4D] md:text-[14px] lg:text-[20px]'>TimeSync is designed to elevate your efficiency and productivity, making every moment count.</p>
    <div>
        <button className='w-[121px] h-[48px] rounded-[30px] bg-[#034592] text-[#FFFFFF] mt-[30px]'>Read More</button>
    </div>
     </div>
    </div>
  )
}

export default About