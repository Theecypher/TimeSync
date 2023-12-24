import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "zustand";

const ResetCode = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [isLoading, setIsLoading] = useState(false)
  // const { token } = useStore();
  // console.log(token);
  // const { baseUrl, updateToken } = useStore();
  const navigateTo = useNavigate();

  const handleChange = (index, value) => {
    console.log(value);
    let newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    if (value !== "" && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
    console.log(newOtpValues);
    let otpString = newOtpValues.join("");
    console.log(otpString);
    if (otpString.length === 4) {
      handleResetCode(otpString);
    }
  };

  

    return (
        <form className="w-[387px] flex flex-col bg-white px-[60px] py-[48px] gap-y-[72px] items-center rounded-[12px] border-[1px] border-[#F5F5F5] text-[#1E1E1E]">
      <div className="flex flex-col items-center gap-y-[12px] ">
        <h1 className=" text-[24px] font-[700] leading-[35.2px]">
          Reser Code Sent
        </h1>
        <p className="text-center font-[400] leading-[23.6px] text-[14px]">
          If we find an account associated with that email, you will receive a 4-digit code.Please enter the code below
        </p>
      </div>
      <div className="flex flex-col gap-y-[40px]">
        <div className="flex gap-x-[8px]">
          {otpValues.map((digit, index) => (
            <input
              // key={index}
              type="text"
              ref={inputRefs[index]}
            //   maxLength={1}
              // name={digit}
              value={otpValues.value1}
              onChange={(e) => handleChange(index, e.target.value)}
            //   disabled={isLoading}
              className="border-[0.5px] rounded-[4px] border-[#B0B0B0] w-[60px] h-[60px] text-center text-[16px]"
            />
          // {
             ))} 
             {/* } */}
        </div>
        <div className="flex">
          <p className="text-[14px] font-[400] leading-[23.6px]">
            Code will expire in 10:00{" "}
          </p>
          <button
            type="button"
            // onClick={handleResendOtp}
            className="pl-1 text-main-blue font-[400] text-[14px] underline underline-offset-1 leading-[23.6px]"
          >
            {" "}
            Resend code
          </button>
        </div>
      </div>
    </form>
        
     );
}
 
export default ResetCode;