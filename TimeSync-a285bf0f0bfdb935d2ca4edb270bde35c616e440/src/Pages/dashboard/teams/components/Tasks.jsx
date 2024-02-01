import React, { useState } from 'react'

const Tasks = () => {
    const tasklists=[
        {
            title: 'Complete the mobile version of the designs',
            started: false,
        },
        {
            title: 'Name Layers',
            started: false,
        },
        {
            title: 'Update Design system',
            started: false,
        },
        {
            title: 'Iterate and implement User research data on high fidelity design',
            started: false,
        },
        {
            title: 'Complete the mobile version of the designs',
            started: false,
        },
        {
            title: 'Complete the mobile version of the designs',
            started: false,
        },
    ]
    const [tasks, setTasks] = useState(tasklists)
  return (
    <main className="w-full flex flex-col justify-center gap-y-[4px] pt-[31px]">
        {tasks &&
          tasks.map((task, index) => (
            <div
              key={index}
              className="p-[20px] bg-white flex justify-between text-[#1E1E1E]"
            >
              <div className="flex items-center gap-x-[30px] text-[#3D3D3D] text-[20px] font-[500] ">
                  <p className=" text-[16px] font-[500] leading-[16px] tracking-[-0.64px]">
                    {index + 1}.
                  </p>
                 <p className='max-w-[318px] flex-shrink-0 leading-[20px] tracking-[-0.8px]'>{task.title.length < 50 ? task.title : task.title.slice(0,50) + "..."}</p>
              </div>
              <div className='flex flex-col justify-center items-end gap-y-[16px]'>
                <button className='w-[88px] bg-main-blue text-white py-[8px] px-[16px] rounded-[16px] text-[16px] font-[500] leading-[16px] tracking-[-0.64px]'>{task.started ? "Pause" : "Start"}</button>
                <span className='text-[#1E1E1E] text-[16px] font-[600] leading-[14px] tracking-[-0.56px] underline'>Add to timer library</span>
              </div>
             
            </div>
          ))}
      </main>
  )
}

export default Tasks