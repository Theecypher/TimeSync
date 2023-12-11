import axios from "axios";
import useStore from "../../../../zustand-store/store";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const VerifyMail = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useStore();
  // console.log(token)
  const { baseUrl, updateToken } = useStore();
  // console.log(token)
  const navigateTo = useNavigate();
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
        `${baseUrl}/auths/otp-verification`,
        {
          otp: otpString,
        },
        { headers }
      )
      .then((response) => {
        console.log(response);
        if (response.data.message) {
          toast.warning(response.data.message);
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
    axios
      .post(`${baseUrl}/auths/resend-otp`, "", { headers })
      .then((response) => {
        console.log(response);
        toast.success(response?.data?.data?.message);
      })
      .catch((err) => {
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
        <div className="flex">
          <p className="text-[14px] font-[400] leading-[23.6px]">
            Code will expire in 10:00{" "}
          </p>
          <button
            type="button"
            onClick={handleResendOtp}
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

export default VerifyMail;
