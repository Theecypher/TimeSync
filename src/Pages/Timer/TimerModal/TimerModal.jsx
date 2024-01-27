import { motion, spring } from "framer-motion";
import TimerBackdrop from "./TimerBackdrop";
import { AiOutlineClose } from "react-icons/ai";
import "./Timer.css"
import { useState } from "react";
import useReminderStore from "../../../zustand-store/reminderStore";
import axios from "axios";
import useStore from "../../../zustand-store/store";
import { toast } from "sonner";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            dampness: 280,
            stiffness: 110
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
}

const TimerModal = ({ handleClose, getTimers }) => {
    const [value, setValue] = useState({
        Tname: "",
        start: "",
        finish: "",
        schedule: "",
    });
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(null)
    const {baseUrl, token} = useStore()
    const headers = {
        Authorization: `Bearer ${token}`
    }

    const handleChange = (e) => {
        setValue((state) => ({ 
            ...state,
            
            [e.target.name]: e.target.value
        }))
        // console.log(e.target.value);
    }
    const convertTime=(time, scheduleDate)=>{
        const date = new Date(scheduleDate);
        const combinedDateTime = new Date(date.toDateString() + " " + time);
        const isoString = combinedDateTime.toISOString();
        console.log(isoString);
        return isoString
    } 
    const updateTime=()=>{
        const scheduleDate = new Date(value.schedule)
        const startTime = convertTime(value.start, scheduleDate )
        const endTime = convertTime(value.finish, scheduleDate);
        const timerDetails = {
            timerName: value.Tname,
            start: startTime,
            stop: endTime,
            calenderSchedule: scheduleDate
        }
        return timerDetails
    }

    const createReminders = useReminderStore((state) => state.createReminders);
    const validateInputs=()=>{
        let error={}
        if(!value.Tname){
            error.name ="Timer name cannot be empty"
        }
        if (!value.finish) {
          error.finish = "Timer Stop time cannot be empty";
        }
         if (!value.start) {
           error.start = "Timer Start time cannot be empty";
         }
          if (!value.schedule) {
            error.schedule = "Timer Schedule date cannot be empty";
          }
          return error
    }
    const handleSetTimer = (e) => {
        e.preventDefault();
        setIsLoading(true)
        const validate = validateInputs()
        if(Object.keys(validate).length ==0){
        // createReminders(value);
        // setValue(" ");
        const timerDetails = updateTime()
        console.log(timerDetails)
        axios.post(`${baseUrl}/timers`, timerDetails, {headers})
        .then((response)=>{
            console.log(response)
            if ((response?.data?.status == "success")) {
                setIsLoading(false);
            toast.success(response?.data?.message)
            getTimers()
        }
        })
        .catch((error)=>{
            console.log(error)
            if(error.response?.data?.err.includes('duplicate key error')){
                toast.error("Error! Duplicate Timer")
            }
            else{
                toast.error(error.response?.data?.err);
            }
            setIsLoading(false)
        })}
        else{
            setErrors(validate)
            toast.error("Error! Please check the inputs")
            setIsLoading(false)
        }
    }

    return ( 
        <TimerBackdrop onclick={handleClose}>
            <motion.form
            // onclick={(e) => e.stopPropagation()}
            className="m-auto items-center px-[2rem] border
            rounded-xl bg-white
            orange-gradient w-[470px]"
             variants={ dropIn }
             initial="hidden"
             animate="visible"
             exit= "exit"
             onSubmit={handleSetTimer}
            >
               <div className="flex justify-between py-4 items-center font-montserrat">
                        <p className="font-bold">Set timer</p>
                        <AiOutlineClose className="bg-[#eee] font-extrabold rounded-md p-[3px] text-[18px]" onClick={handleClose} />
                    </div>

                        <div className="flex flex-col">
                            <div className="m-[7px] ">
                                <label htmlFor="name" >Timer name</label>
                                <input type="text" value={value.Tname} className="border outline-none w-full rounded-[8px] py-2 px-4" 
                                placeholder="Timer name" name="Tname"
                                onChange={handleChange}
                                 />
                            </div>
                            <div className="m-[7px] ">
                                <label htmlFor="start">Start</label>
                                <input type="time" className="border outline-none rounded-[8px] w-full p-2" 
                                placeholder="Starting Time" value={value.start} name="start"
                                onChange={handleChange}
                                 />
                            </div>
                            <div className="m-[7px] ">
                                <label htmlFor="finish">Finish</label>
                                <input type="time" className="finish border outline-none w-full rounded-[8px] p-2" 
                                value={value.finish} placeholder="Finishing Time" name="finish"
                                onChange={handleChange}
                                 />
                                <span className="absolute mt-[12px] ml-[-22px] text-[20px]">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>  
                                </span>
                            </div>
                            <div className="m-[7px] ">
                                <label htmlFor="schedule">Calender Schedule</label>
                                <input type="date" className="Timer-modal border outline-none w-full rounded-[8px] p-2 inline-block 
                                relative pl-[30px]" value={value.schedule}
                                placeholder="Timer name" name="schedule"
                                onChange={handleChange}
                                 />
                            </div>

                            <button type="submit" className="my-5 text-[#FFFFFF] bg-[#034592] font-[500] text-[16px] leading-[19.5px] rounded-2xl py-[7px] px-[35px] mx-auto transition ease-out active:duration-300">{isLoading ? 'Creating...': ' Create' }</button>
                        </div>
            </motion.form>
        </TimerBackdrop>
     );
}
 

export default TimerModal;