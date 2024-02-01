import axios from "axios";
import useStore from "../../../../zustand-store/store";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const VerifyMail = ({otpTime, setOtpTime}) => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [isLoading, setIsLoading] = useState(false);
  const date = new Date().getTime()
  let timeInMins = date /(1000*60)
  let add10mins = 10 * 60 * 1000


  const [currentTime, setCurrentTime] = useState(localStorage.getItem('currentTime') || localStorage.setItem('currentTime', timeInMins))

  
  const formatTime=(time)=>{
    const mins = Math.floor(time/60)
    const secs = time % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }
 
  
  const { token } = useStore();
  const { baseUrl, updateToken } = useStore();
  const navigateTo = useNavigate()

  const onInputChange = (index, value) => {
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
      handleVerifyMail(otpString);
    }
  };
  const headers = {
    Authorization: `${token}`,
  };
  const handleVerifyMail = (otpString) => {
    setIsLoading(true);
    axios
      .post(
        `${baseUrl}/auth/otp-verification`,
        {
          otp: otpString,
        },
        { headers }
      )
      .then((response) => {
        console.log(response);
        if (response.data.message) {
          toast.warning(response.data.message);
          setIsLoading(false)
          return
        }
        let newToken = response?.data?.data?.token;
        newToken && localStorage.setItem("token", newToken);
        newToken && updateToken(newToken);
        toast.success("Email verification Successful!");
        setTimeout(() => {
          navigateTo("/dashboard");
        }, 2000);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.data?.message);
        setIsLoading(false);
      });
  };
  const handleResendOtp = () => {
    setIsLoading(false)
    axios
      .post(`${baseUrl}/auth/resend-otp`, "", { headers })
      .then((response) => {
        console.log(response);
        toast.success(response?.data?.message || response?.data?.data?.message || "Token resent successfully!");
        setOtpTime(300)
      })
      .catch((err) => {
        toast.error('Failed, could not send otp !')
        console.log(err);
      });
  };
  return (
    <form className="w-[387px] flex flex-col bg-white px-[60px] py-[48px] gap-y-[72px] items-center rounded-[12px] border-[1px] border-[#F5F5F5] text-[#1E1E1E]">
      <div className="flex flex-col items-center gap-y-[12px] ">
        <h1 className=" text-[24px] font-[700] leading-[35.2px]">
          Verify Email
        </h1>
        <p className=" text-center font-[400] leading-[23.6px] text-[14px]">
          Check your email, a verification code have been sent to you to verify
          your email address.
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
              onChange={(e) => onInputChange(index, e.target.value)}
              disabled={isLoading}
              className="border-[0.5px] rounded-[4px] border-[#B0B0B0] w-[60px] h-[60px] text-center text-[16px]"
            />
          ))}
        </div>
        <div className=" flex max-lg:flex-nowrap gap-x-[2px] flex-wrap ">
          <p className="shrink-0 text-[14px] font-[400] leading-[23.6px]">
            Code will expire in {formatTime(otpTime)}
          </p>
          <button
            disabled ={otpTime >0}
            type="button"
            onClick={handleResendOtp}
            className="shrink-0 text-start text-main-blue font-[400] text-[14px] underline underline-offset-1 leading-[23.6px] disabled:opacity-50"
          >
            Resend code
          </button>
        </div>
      </div>
    </form>
  );
};

export default VerifyMail;
