import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ShowNextFeedback = () => {
  const [active, setActive] = useState(false);

  const ToggleActive = () => {
    setActive((active) => !active);
  };

  return (
    <div className="hidden absolute md:inline-flex w-[35px] top-[25%] md:right-[50%] lg:right-[32%] text-[#b6d8ff] gap-4">
      <button
        onClick={ToggleActive}
        className="flex w-[97px] border-[#bebebf] border py-[3px] px-[15px] justify-center text-[#bebebf] items-center gap-[10px] rounded-[8px]"
        // { active ?
        // : "bg-none w-[49px]"}
      >
        <AiOutlineArrowLeft className="flex-shrink-0 h-[20.417px] w-[20.417px] stroke-[2px] stroke-[#bebebf]" />
      </button>
      <button
        onClick={ToggleActive}
        className="flex w-[97px] border-[#034592] border py-[3px] px-[15px] text-[#034592] justify-center items-center gap-[10px] rounded-[8px]"
        // { active ?
        // : "bg-none w-[49px]"}
      >
        <AiOutlineArrowRight className="flex-shrink-0 h-[20.417px] w-[20.417px] stroke-[2px] stroke-[#034592]" />
      </button>
    </div>
  );
};

export default ShowNextFeedback;
