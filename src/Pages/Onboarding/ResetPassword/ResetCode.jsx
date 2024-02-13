import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useStore from "../../../zustand-store/store";

const ResetCode = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useStore();
  const { baseUrl, updateNewToken } = useStore();
  const navigateTo = useNavigate();

  const handleChange = (index, value) => {
    let newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    if (value !== "" && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
    let otpString = newOtpValues.join("");
    console.log(otpString);
    if (otpString.length === 4) {
      handleResetCode(otpString);
    }
  };

  const headers = {
    Authorization: `${token}`,
  };

  const handleResetCode = (otpString) => {
    setIsLoading(true);
    axios
      .post(
        `${baseUrl}/auth/confirm-forgot-password-otp`,
        {
          otp: otpString,
        },

        { headers }
      )
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          toast.warning(res.data.message);
          return;
        }
        let newToken = res?.data?.data?.token;
        newToken && localStorage.setItem("newToken", newToken);
        newToken && updateNewToken(newToken);
        toast.success("Reset Code verification successful!");
        setTimeout(() => {
          navigateTo("/createPassword");
        }, 2000);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.data?.message);
        setIsLoading(false);
      });
  };

  return (
    <form className="w-full lg:w-[387px] mt-[48px] lg:mt-0 lg:bg-[#B6D8FF] bg-white lg:border-[#F5F5F5] lg:shadow-md lg:border-[0.5px] lg:rounded-[12px] flex flex-col items-center justify-between lg:justify-start  lg:py-[20px] xl:py-[30px] 2xl:py-[48px] lg:px-[60px]">
      {/* <form className="lg:w-[387px] w-full flex flex-col lg:bg-[#B6D8FF] justify-between  px-[60px] py-[48px] gap-y-[72px] items-center rounded-[12px] border-[1px] border-[#F5F5F5] text-[#1E1E1E]"> */}
      <div className="flex flex-col items-center gap-y-[12px] ">
        <h1 className=" text-[24px] font-[700] leading-[35.2px]">
          Reset Code Sent
        </h1>
        <p className="text-center font-[400] leading-[23.6px] text-[14px]">
          If we find an account associated with that email, you will receive a
          4-digit code.Please enter the code below
        </p>
      </div>
      <div className="flex flex-col gap-y-[40px]">
        <div className="flex gap-x-[8px]">
          {otpValues.map((digit, index) => (
            <input
              key={index}
              type="text"
              ref={inputRefs[index]}
              maxLength={1}
              name={digit}
              value={otpValues.value1}
              disabled={isLoading}
              onChange={(e) => handleChange(index, e.target.value)}
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
            className="pl-1 text-main-blue font-[400] text-[14px] underline underline-offset-1 leading-[23.6px]"
          >
            {" "}
            Resend code
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResetCode;
