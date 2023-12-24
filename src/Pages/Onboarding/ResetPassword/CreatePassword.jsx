import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreatePassword = ({ resetPwordDetails, loading, handleChange, handleResetPassword, error, pwordError }) => {
  return ( 
    <form
    onSubmit={handleResetPassword}
    className="w-full lg:w-[451px] mt-[48px] lg:mt-0 bg-white lg:border-[#F5F5F5] lg:shadow-md lg:border-[0.5px] lg:rounded-[12px] flex flex-col items-center justify-between lg:justify-start  lg:py-[20px] xl:py-[30px] 2xl:py-[48px] lg:px-[60px]"
  >
    <div className="w-full flex flex-col items-center">
      <div className="lg:w-[215px] flex flex-col gap-y-[12px] items-center ">
        <h2 className=" font-montserrat text-[#1E1E1E] lg:text-[#000000] text-[20px] lg:text-[24px] leading-[35.2px] font-[700]">
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
          name="pword"
          value={resetPwordDetails.pword}
          onChange={handleChange}
          className={` ${
            error?.pword && "border border-red-400"
          } "text-[#666666] text-[14px] focus:outline-none leading-[24.6px] font-[400] lg:-[62px] w-[331px] rounded-[4px] border-[0.5px] pl-[12px] py-[10px] pr-[10px] "`}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPword"
          value={resetPwordDetails.confirmPword}
          onChange={handleChange}
          className={` ${
            error?.confirmPword && "border border-red-400"
          } "text-[#666666] text-[14px] focus:outline-none leading-[24.6px] font-[400] lg:-[62px] w-[331px] rounded-[4px] border-[0.5px] pl-[12px] py-[10px] pr-[10px] "`}
        />
        {error && (
          <div className="flex flex-col px-[12px]">
            <div className="flex items-center gap-x-[8px]">
              {pwordError?.length ? (
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
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1C9.8284 1 11.2426 1 12.1213 1.87868C13 2.75736 13 4.17157 13 7C13 9.8284 13 11.2426 12.1213 12.1213C11.2426 13 9.8284 13 7 13C4.17157 13 2.75736 13 1.87868 12.1213C1 11.2426 1 9.8284 1 7Z"
                    stroke="#0F973D"
                  />
                  <path
                    d="M4.47461 8.10522C4.47461 8.10522 5.48514 8.68154 5.9904 9.52628C5.9904 9.52628 7.50619 6.21049 9.52724 5.10522"
                    stroke="#0F973D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <p className={`${pwordError?.length ? 'text-[#D42620]' : 'text-[#0F973D]'}  text-[10px] leading-[23.6px] font-[400] `}>
                Password must contain at least 8 characters
              </p>
            </div>
            <div className="flex items-center gap-x-[8px]">
              {pwordError?.test ? (
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
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1C9.8284 1 11.2426 1 12.1213 1.87868C13 2.75736 13 4.17157 13 7C13 9.8284 13 11.2426 12.1213 12.1213C11.2426 13 9.8284 13 7 13C4.17157 13 2.75736 13 1.87868 12.1213C1 11.2426 1 9.8284 1 7Z"
                    stroke="#0F973D"
                  />
                  <path
                    d="M4.47461 8.10522C4.47461 8.10522 5.48514 8.68154 5.9904 9.52628C5.9904 9.52628 7.50619 6.21049 9.52724 5.10522"
                    stroke="#0F973D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <p className={`${pwordError?.test ? 'text-[#D42620]' : 'text-[#0F973D]'} text-[10px] leading-[23.6px] font-[400] `}>
                Password must contain a number or symbol
              </p>
            </div>
            <div className="flex items-center gap-x-[8px]">
              {pwordError?.uppercase ? (
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
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1C9.8284 1 11.2426 1 12.1213 1.87868C13 2.75736 13 4.17157 13 7C13 9.8284 13 11.2426 12.1213 12.1213C11.2426 13 9.8284 13 7 13C4.17157 13 2.75736 13 1.87868 12.1213C1 11.2426 1 9.8284 1 7Z"
                    stroke="#0F973D"
                  />
                  <path
                    d="M4.47461 8.10522C4.47461 8.10522 5.48514 8.68154 5.9904 9.52628C5.9904 9.52628 7.50619 6.21049 9.52724 5.10522"
                    stroke="#0F973D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <p className={`${pwordError?.uppercase ? 'text-error-2' : 'text-[#0F973D]' } text-[10px] leading-[23.6px] font-[400] `}>
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
            <span>Signing up</span>
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
          <span> Sign up </span>
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
   );
}
 
export default CreatePassword;