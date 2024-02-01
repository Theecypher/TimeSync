import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { cloneElement } from "react";

const Select = ({ className, children }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);
  const prop = 'I am prop'
  const onChange = () => {
    console.log("On change fn");

  };
  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className={twMerge(
        "relative h-[56px] max-w-full border-[1px] border-[#E9EBF8] shadown-sm px-[18px] rounded-[16px] text-[#7B7C7C] font-[400] text-[14px] leading-[21px]",
        className
      )}
    >
      <div className="absolute top-0 translate-y-[50%] right-4">
        {!open ? <RiArrowDownSLine size={30} /> : <RiArrowUpSLine size={30} />}
      </div>
      {open && <OptionGroup>  {cloneElement(children, {prop: prop})}</OptionGroup>}
    </div>
  );
};

export default Select;

export function Option({ children, className, prop, setValue }) {
  console.log(prop)
  return (
    <button
      onClick={() => {
        console.log(children);
        setValue(children);
      }}
      className={twMerge(
        "w-full self-start text-start pt-[16px] text-black",
        className
      )}
    >
      {children}
    </button>
  );
}

export function OptionGroup({ children, className, onChange }) {
  return (
    <div
      onClick={onChange}
      className={twMerge(
        "w-full flex flex-col items-start gap-y-[16px] divide-y  min-h-min bg-white z-10 absolute top-[70px] border-[1px] shadow-sm rounded-md left-0 px-[24px] py-[6px] pb-[16px] ",
        className
      )}
    >
      {children}
    </div>
  );
}
