import React, { useState } from 'react';
import jade from './assets/Image-24.png';
import me from './assets/Image-40.png';
import add from './assets/Add.svg';
import mic from './assets/Mic.svg';
import send from './assets/Send.svg';

const Chat = () => {
  const chatBox = [
    {
      sender: 'Jade',
      time: '11:17am',
      message: "Hey Paul! How's it going? I've been working on the wireframes for the new project. Have you had a chance to take a look?",
    },
    {
      sender: 'Me',
      time: '11:18am',
      message: "Hey Jade! I'm good, thanks. Yeah, I've reviewed the wireframes. They're looking solid! I especially like the flow you've created for the user journey. It's intuitive and should make for a great user experience.",
    },
    {
      sender: 'Jade',
      time: '11:18am',
      message: "Thanks, Paul! I tried to keep it user-friendly. I'm a bit concerned about the color scheme, though. What are your thoughts on that?",
    },
    {
      sender: 'Me',
      time: '11:20am',
      message: "Yeah, I was thinking the same thing. The current palette might be a bit too vibrant. I was playing around with some alternatives. I'll share a few options with you after this meeting. Let's aim for something that reflects our brand but is easy on the eyes.",
    },
    {
      sender: 'Jade',
      time: '11:22am',
      message: '',
    },
  ];
  const [chats, setChats] = useState(chatBox);

  return (
    <div className='m-[30px]'>
      <div className=' flex flex-col [&>*:nth-child(even)]:items-end' >
        {chats &&
          chats.map((chat, index) => (
            <div key={index} className='h-[170px] flex flex-col'>
              <div className='flex flex-row items-center gap-[8px] justify-start '>
                <img src={chat.sender === 'Jade' ? jade : me} alt='avatar' className='w-[24px] h-[24px]' />
                <p className='text-[#3D3D3D] text-[16px] font-semibold'>{chat.sender}</p>
                <p className='text-[#3D3D3D] text-[10px] font-medium'>{chat.time}</p>
              </div>
              <div>
                <p className='text-[#3D3D3D] text-[14px] font-normal w-[285px] h-[105px] ml-[30px]'>{chat.message}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Search field at the bottom of the chat */}
      <div className='flex flex-row pt-[30px] items-center fixed bottom-0'>
        <div className='flex flex-row gap-[10px]'>
          <img src={add} alt='add' />
          <img src={mic} alt='mic' />
        </div>
        <div>
          <input
            type='text'
            placeholder='Type a message'
            className='w-[543.03px] h-[59px] rounded-[6px] border border-[#F5F5F5] cursor-pointer bg-[#FAFAFA] p-[10px]'
          />
        </div>
        <div className='w-[24px] h-[24px] bg-[#E8F3FF] rounded-[4px] flex items-center justify-center'>
          <img src={send} alt='send' />
        </div>
      </div>
    </div>
  );
};

export default Chat;


// import React from 'react';
// import jade from './assets/Image-24.png';
// import me from './assets/Image-40.png';
// import add from './assets/Add.svg';
// import mic from './assets/Mic.svg';
// import send from './assets/Send.svg';

// const Chat = () => {
//   return (
//     <div className=' m-[30px]'>
//      <div className='w-[794px] h-[150px]'>
//       <div className='flex flex-row items-center gap-[8px]'>
//         <img src={jade} alt='jade' className= 'w-[24px] h-[24px]'/>
//         <p className='text-[#3D3D3D] text-[16px] font-semibold'>Jade</p>
//         <p className='text-[#3D3D3D] text-[10px] font-medium'>11:17am</p>
//       </div>
//       <div>
//         <p className='text-[#3D3D3D] text-[14px] font-normal w-[300px] h-[63px]'>Hey Paul! How's it going? I've been working on the wireframes for the new project. Have you had a chance to take a look?</p>
//       </div>
//      </div>
//      <div  className='w-[794px] h-[170px] flex justify-end '>
//       <div className='flex flex-row items-center gap-[8px]'>
//         <img src={me} alt='me'/>
//         <p className='text-[#3D3D3D] text-[16px] font-semibold'>Me</p>
//         <p className='text-[#3D3D3D] text-[10px] font-medium'>11:18am</p>
//       </div>
//       <div>
//         <p className='text-[#3D3D3D] text-[14px] font-normal w-[285px] h-[105px]'>Hey Jade! I'm good, thanks. Yeah, I've reviewed the wireframes. They're looking solid! I especially like the flow you've created for the user journey. It's intuitive and should make for a great user experience.</p>
//       </div>
//      </div>
//      <div  className='w-[794px] h-[150px]'>
//       <div className='flex flex-row items-center gap-[8px]'>
//         <img src={jade} alt='jade'/>
//         <p className='text-[#3D3D3D] text-[16px] font-semibold'>Jade</p>
//         <p className='text-[#3D3D3D] text-[10px] font-medium'>11:19am</p>
//       </div>
//       <div>
//         <p className='text-[#3D3D3D] text-[14px] font-normal w-[285px] h-[105px]'>Thanks, Paul! I tried to keep it user-friendly. I'm a bit concerned about the color scheme, though. What are your thoughts on that?</p>
//       </div>
//      </div>
//      <div  className='w-[794px] h-[150px] flex justify-end '>
//       <div className='flex flex-row items-center gap-[8px]'>
//         <img src={me} alt='me'/>
//         <p className='text-[#3D3D3D] text-[16px] font-semibold'>Me</p>
//         <p className='text-[#3D3D3D] text-[10px] font-medium'>11:20am</p>
//       </div>
//       <div>
//         <p className='text-[#3D3D3D] text-[14px] font-normal w-[285px] h-[105px]'>Yeah, I was thinking the same thing. The current palette might be a bit too vibrant. I was playing around with some alternatives. I'll share a few options with you after this meeting. Let's aim for something that reflects our brand but is easy on the eyes.</p>
//       </div>
//      </div>
//      <div className='flex flex-row pt-[30px] items-center'>
//       <div className='flex flex-row gap-[10px]'>
//       <img src={add} alt='add' />
//       <img src={mic}  alt='mic'/>
//       </div>
//       <div>
//       <input 
//         type='text'
//         placeholder='Type a message'
//         className='w-[543.03px] h-[59px] rounded-[6px] outline-none border-[#F5F5F5] cursor-pointer bg-[#FAFAFA] p-[10px]'
//       />
//       </div>
//       <div className='w-[24px] h-[24px] bg-[#E8F3FF] rounded-[4px] flex items-center justify-center'>
//       <img src={send} alt='send'/>
//       </div>
//      </div>
//     </div>
//   )
// }

// export default Chat