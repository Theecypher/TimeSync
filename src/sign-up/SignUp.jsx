import React, { useState } from "react";

const SignUp = () => {
  const [signupDetails, setSignupDetails] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState(null)

  const handleOnchange=(e)=>{
    const {name, value} = e.target
    setSignupDetails((prevVals)=>({...prevVals, [name]:value} ))
  }
  const validateSignup=()=>{
    let errors ={}
    if(!signupDetails.name){
      errors.email ='Name field cannot be empty'
    }
    if(!signupDetails.email){
      errors.email ='Email field cannot be empty'
    }
    if(!signupDetails.password){
      errors.email =' Password must contain at least 8 characters'
    }
    return errors
  }
  const handleSignUp=(e)=>{
    e.preventDefault()
    const validated= validateSignup()
    console.log(validated)
    if(Object.keys(validated).length ===0){
      console.log('login successful!')
    }
    else{
      setError(validated)
    }

  }
  return (
    <div className="w-full flex items-center justify-center backdrop-blur-[30px] bg-[rgba(255, 255, 255, 0.2)] min-h-screen">
      <form 
        onSubmit={handleSignUp}
      className="w-[451px] bg-white border-[#F5F5F5] shadow-md border-[0.5px] rounded-[12px] flex flex-col items-center gap-y-[39px] lg:py-[48px] lg:px-[60px]">
        <div className="w-[215px] flex flex-col lg:gap-y-[12px] items-center ">
          <h2 className="text-[#000000] text-[24px] leading-[35.2px] font-[700]">
            Sign Up
          </h2>
          <p className="font-[400] text-[#1E1E1E] text-[14px] leading-[23.6px] text-center">
            Take control of your time and boost productivity
          </p>
        </div>
        <div className="flex flex-col mt-[52px] gap-y-[12px] font-[400]">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={signupDetails.name}
            onChange={handleOnchange}
            className="text-[#666666] text-[14px] leading-[24.6px] font-[400] lg:-[62px] w-[331px] rounded-[4px] border-[0.5px] pl-[12px] py-[10px] pr-[10px] "
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={signupDetails.email}
            onChange={handleOnchange}
            className="text-[#666666] text-[14px] leading-[24.6px] font-[400] lg:-[62px] w-[331px] rounded-[4px] border-[0.5px] pl-[12px] py-[10px] pr-[10px] "
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={signupDetails.password}
            onChange={handleOnchange}
            className="text-[#666666] text-[14px] leading-[24.6px] font-[400] lg:-[62px] w-[331px] rounded-[4px] border-[0.5px] pl-[12px] py-[10px] pr-[10px] "
          />
          <div className="flex flex-col px-[12px]">
            <div className="flex items-center gap-x-[8px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.89494 5.10547L5.10547 8.89469M8.89494 8.89494L5.10547 5.10572"
                  stroke="#D42620"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1C9.8284 1 11.2426 1 12.1213 1.87868C13 2.75736 13 4.17157 13 7C13 9.8284 13 11.2426 12.1213 12.1213C11.2426 13 9.8284 13 7 13C4.17157 13 2.75736 13 1.87868 12.1213C1 11.2426 1 9.8284 1 7Z"
                  stroke="#D42620"
                />
              </svg>
              <p className="text-[#D42620] text-[10px] leading-[23.6px] font-[400] ">
                Password must contain at least 8 characters
              </p>
            </div>
            <div className="flex items-center gap-x-[8px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.89494 5.10547L5.10547 8.89469M8.89494 8.89494L5.10547 5.10572"
                  stroke="#D42620"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1C9.8284 1 11.2426 1 12.1213 1.87868C13 2.75736 13 4.17157 13 7C13 9.8284 13 11.2426 12.1213 12.1213C11.2426 13 9.8284 13 7 13C4.17157 13 2.75736 13 1.87868 12.1213C1 11.2426 1 9.8284 1 7Z"
                  stroke="#D42620"
                />
              </svg>
              <p className="text-[#D42620] text-[10px] leading-[23.6px] font-[400] ">
                Password must contain a number or symbol
              </p>
            </div>
            <div className="flex items-center gap-x-[8px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.89494 5.10547L5.10547 8.89469M8.89494 8.89494L5.10547 5.10572"
                  stroke="#D42620"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1C9.8284 1 11.2426 1 12.1213 1.87868C13 2.75736 13 4.17157 13 7C13 9.8284 13 11.2426 12.1213 12.1213C11.2426 13 9.8284 13 7 13C4.17157 13 2.75736 13 1.87868 12.1213C1 11.2426 1 9.8284 1 7Z"
                  stroke="#D42620"
                />
              </svg>
              <p className="text-[#D42620] text-[10px] leading-[23.6px] font-[400] ">
                Password must contain an uppercase letter
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-[20px]">
          <button className="w-full text-[#FFFFFF] bg-[#034592] font-[500] text-[16px] leading-[19.5px] rounded-[4px] p-[10px] transition ease-out active:duration-300">
            Sign up
          </button>
          <div className="text-[#737373] text-[12px] leading-[14.63px] font-[400]">
            <span className="">Already have an account?</span>
            <button className="text-[14px] leading-[17.07px] text-[#034592] underline ml-1">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
