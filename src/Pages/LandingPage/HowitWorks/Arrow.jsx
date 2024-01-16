import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ShowNextFeedback = () => {
  const [active, setActive] = useState(false);

  const ToggleActive = () => {
    setActive((active) => !active);
  };

  return (
    <div className="hidden absolute md:flex md:right-[2%] w-[35px] text-[#b6d8ff]">
      <button
        onClick={ToggleActive}
        className={
          active
            ? "bg-[#034592] border py-[1px] px-[1px] text-[#fff]"
            : "bg-none"
        }
      >
        <AiOutlineArrowLeft />
      </button>
      <AiOutlineArrowRight />
    </div>
  );
};

export default ShowNextFeedback;
