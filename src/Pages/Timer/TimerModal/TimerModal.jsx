import { motion, spring } from "framer-motion";
import TimerBackdrop from "./TimerBackdrop";
import { AiOutlineClose } from "react-icons/ai";
import "./Timer.css";
import { useState } from "react";
import useReminderStore from "../../../zustand-store/reminderStore";

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
      stiffness: 110,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const TimerModal = ({ handleClose }) => {
  const [value, setValue] = useState({
    Tname: "",
    start: "",
    finish: "",
    schedule: "",
  });

  const handleChange = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  const createReminders = useReminderStore((state) => state.createReminders);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    createReminders(value);
    setValue(" ");
  };

  return (
    <TimerBackdrop onclick={handleClose}>
      <motion.form
        // onclick={(e) => e.stopPropagation()}
        className="inline-flex px-[40px] py-[32px] m-auto border items-start
            rounded-[16px] bg-white
            orange-gradient gap-[10px]"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center gap-[40px]">
          <div className="flex justify-between w-[480px] items-center font-montserrat">
            <p className="font-[600] text-[20px] leading-[30px] tracking-[-0.46px] text-[#1e1e1e]">
              Set timer
            </p>
            <AiOutlineClose
              className="flex justify-between items-center text-[#1e1e1e] bg-[#f5f5f5] font-extrabold rounded-md w-[24px]"
              onClick={handleClose}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex w-[480px] flex-col items-start gap-2">
              <label
                htmlFor="name"
                className="text-[#1e1e1e] font-Monserrat text-[16px] font-[400] leading-[24px] tracking-[-0.368px]"
              >
                Timer name
              </label>
              <input
                type="text"
                value={value.Tname}
                className="border borderstyle outline-none w-full rounded-[16px] pt-[16px] pr-[382px] pb-[19px] pl-[16px]"
                placeholder="Timer name"
                name="Tname"
                onChange={handleChange}
              />
            </div>

            <div className="flex w-[480px] flex-col gap-2">
              <label
                htmlFor="start"
                className="text-[#1e1e1e] font-Monserrat text-[16px] font-[400] leading-[24px] tracking-[-0.368px]"
              >
                Start
              </label>
              <input
                type="text"
                className="flex w-[480px] pt-[16px] border borderstyle pr-[375px] pb-[19px] pl-[16px] items-center rounded-[16px]"
                placeholder="Starting Time"
                value={value.start}
                name="start"
                onChange={handleChange}
              />
            </div>

            <div className="flex w-[480px] flex-col gap-2 items-start">
              <label
                htmlFor="finish"
                className="text-[#1e1e1e] font-Monserrat text-[16px] font-[400] leading-[24px] tracking-[-0.368px]"
              >
                Finish
              </label>
              <input
                type="time"
                className="Timer-modal borderstyle flex w-[480px] p-[16px] justify-center items-center rounded-[16px] border"
                value={value.schedule}
                placeholder="Timer name"
                name="schedule"
                onChange={handleChange}
              />
            </div>

            <div className="flex w-[480px] flex-col gap-2 items-start">
              <label htmlFor="schedule" className="">
                Calender Schedule
              </label>
              <input
                type="date"
                className="Timer-modalborderstyle mb-2 flex w-[480px] p-[16px] justify-center items-center rounded-[16px] border pl-[30px]"
                value={value.schedule}
                placeholder="Timer name"
                name="schedule"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="flex m-auto justify-center items-center text-[#FFFFFF] bg-[#034592] font-[500] text-[13.714px] leading-[20.571px] rounded-2xl py-[5.7px] px-[38.095px] gap-[3.81px]"
            >
              Create{" "}
            </button>
          </div>
        </div>
      </motion.form>
    </TimerBackdrop>
  );
};

export default TimerModal;
