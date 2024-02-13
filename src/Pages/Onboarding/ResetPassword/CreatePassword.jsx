import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Oval } from "react-loader-spinner";

const CreatePassword = ({
  psswrdDetails,
  handleSubmit,
  psswrdError,
  loading,
  error,
  handleChange,
}) => {
  return (
    <div className="w-full lg:bg-[#B6D8FF] font-montserrat flex px-[16px] lg:px-0 lg:flex-col lg:items-center lg:justify-center lg:backdrop-blur-[30px] lg:bg-[rgba(255, 255, 255, 0.2)] h-[100vh]">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-[451px] mt-[48px] lg:mt-0 bg-white lg:border-[#F5F5F5] lg:shadow-md lg:border-[0.5px] lg:rounded-[12px] flex flex-col items-center justify-between lg:justify-start  lg:py-[20px] xl:py-[30px] 2xl:py-[48px] lg:px-[60px]"
      >
        <div className="w-full flex flex-col items-center">
          <div className=" flex flex-col gap-y-[12px] items-center">
            <h2 className="font-montserrat mx-auto lg:w-full text-[#1E1E1E] lg:text-[#000000] text-[20px] lg:text-[24px] font-[700]">
              Create New Password
            </h2>
            <p className="font-[400] font-montserrat text-[#1E1E1E] text-[10px] lg:text-[14px] leading-[23.6px] text-center">
              Create new password for your account!
            </p>
          </div>
          <div className="flex flex-col mt-[72px] lg:-[35px] xl:mt-[45px] 2xl:mt-[52px] gap-y-[12px] font-[400]">
            <input
              type="password"
              placeholder="Password"
              name="psswrd"
              value={psswrdDetails.psswrd}
              onChange={handleChange}
              className={` ${error?.psswrd && "border border-red-400"} 
          "text-[#666666] text-[14px] focus:outline-none leading-[24.6px] font-[400] lg:-[62px] w-[331px] rounded-[4px] border-[0.5px] pl-[12px] py-[10px] pr-[10px] "
          `}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPsswrd"
              value={psswrdDetails.confirmPsswrd}
              onChange={handleChange}
              className="text-[#666666] text-[14px] focus:outline-none leading-[24.6px] font-[400] lg:-[62px] w-[331px] rounded-[4px] border-[0.5px] pl-[12px] py-[10px] pr-[10px]"
            />
            {error && (
              <div className="flex flex-col px-[12px]">
                <div className="flex items-center gap-x-[8px]">
                  {psswrdError?.length ? (
                    <FaRegCircleXmark className="text-[20px] text-red-500" />
                  ) : (
                    <IoIosCheckmarkCircleOutline className="text-[20px] text-green-400" />
                  )}
                  <p
                    className={`${
                      psswrdError?.length ? "text-[#D42620]" : "text-[#0F973D]"
                    }  text-[10px] leading-[23.6px] font-[400] `}
                  >
                    Password must contain at least 8 characters
                  </p>
                </div>
                <div className="flex items-center gap-x-[8px]">
                  {psswrdError?.test ? (
                    <FaRegCircleXmark className="text-[20px] text-red-500" />
                  ) : (
                    <IoIosCheckmarkCircleOutline className="text-[20px] text-green-400" />
                  )}
                  <p
                    className={`${
                      psswrdError?.test ? "text-[#D42620]" : "text-[#0F973D]"
                    }  text-[10px] leading-[23.6px] font-[400] `}
                  >
                    Password must contain a number and symbol
                  </p>
                </div>
                <div className="flex items-center gap-x-[8px]">
                  {psswrdError?.upperCase ? (
                    <FaRegCircleXmark className="text-[20px] text-red-500" />
                  ) : (
                    <IoIosCheckmarkCircleOutline className="text-[20px] text-green-400" />
                  )}
                  <p
                    className={`${
                      psswrdError?.upperCase
                        ? "text-[#D42620]"
                        : "text-[#0F973D]"
                    }  text-[10px] leading-[23.6px] font-[400] `}
                  >
                    Password must contain an uppercase letter
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-[20px] lg:mt-[58px] xl:mt-[60px] 2xl:mt-[72px]">
          <button
            disabled={loading}
            className={` gap-x-2 disabled:bg-[#0346927c] w-full text-[#FFFFFF] bg-[#034592] font-[500] text-[16px] leading-[19.5px] rounded-[4px] p-[10px] transition ease-out active:duration-300`}
          >
            {loading ? (
              <div className="flex justify-center space-x-2">
                <span>Reseting Password</span>
                <Oval
                  height={20}
                  width={20}
                  color="white"
                  secondaryColor="white"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </div>
            ) : (
              <span> Create Password </span>
            )}
          </button>
          <div className="text-center lg:text-start text-[#737373] text-[12px] leading-[14.63px] font-[400]">
            <span className="">Already have an account?</span>
            <Link
              to="/"
              className="text-[14px] leading-[17.07px] text-[#034592] underline ml-1"
            >
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePassword;
