import { useState } from "react";
import { useStore } from "zustand";
import { tasksData } from "../../dashboard/taskData";
import calendar from "../../../assets/calendar.svg"
import switchOn from "../../../assets/switch-on.svg"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

const CalendarView = () => {
  const [activeView, setActiveView] = useState("calendar");
  const [tasks, setTasks] = useState(tasksData);
  const [days, setDays] = useState([
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]);
  const [taskColumn, setTaskColumn] = useState(false);
  // const {baseUrl} = useStore()
  // console.log(baseUrl)

  console.log(activeView);

  const handleClick = (index) => {
    setTaskColumn(!taskColumn);
    console.log(index);
  }

  return ( 
    <div className="flex flex-col mt-7">
        <div className="mx-auto">
        <p className="months  mt-2 mb-4 hidden md:block font-bold text-gray-400">November</p>
        <div className="flex mt-2 mb-4 items-center">
          <MdArrowBackIos className="text-gray-300" />  
          <p className="">Week 1</p>
          <MdArrowForwardIos className="text-gray-300" />
        </div>
      </div>
    <div className="flex m-1">
      {days.map((day, index) => (
              <ul onClick={() => handleClick(index)} key={index} 
              className={(!taskColumn) ? "border my-1 mx-[2px] bg-gray-50 rounded-xl border-blue-900" :
              "border my-1 mx-[2px] rounded-xl border-blue-900 bg-blue-100"
            }
              >
                  <h4 className="text-center pb-9 pt-2">{day}</h4>
                  <li>
                     {tasks.map((task, index) => (
                      <div key={index} className="border bg-white mx-[1.5px] px-[6px] my-[13px] py-[5.5px] rounded-xl">
                          <div className="flex">
                              <div>
                                  <div>
                                  <p className="text-blue-700 text-sm py-1">Checked</p>
                                  <h5 className="font-bold text-md">Workout</h5>
                                  </div>
                                  <div className="flex gap-2">
                                      <div>
                                          <p className="font-extralight text-sm">8:10pm</p>
                                          <small className="text-sm font-[350]">Start</small>
                                      </div>
                                      <div>
                                          <p className="font-extralight text-sm">8:10pm</p>
                                          <small className="text-sm font-[350]">Finish</small>
                                      </div>
                                  </div>
                              </div>
                              <p className="mt-2">{task.startTime.time}<span>m</span></p>
                          </div>
                      </div>    
                     ))}
                  </li>
              </ul>
          // </div>
      ))}
    </div>
    </div>
  )
}

 
export default CalendarView;