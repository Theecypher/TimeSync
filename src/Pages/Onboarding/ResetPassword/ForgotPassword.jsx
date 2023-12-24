import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return ( 
        <form
    className="w-full lg:w-[451px] mt-[48px] lg:mt-0 bg-white lg:border-[#F5F5F5] lg:shadow-md lg:border-[0.5px] lg:rounded-[12px] flex flex-col items-center justify-between lg:justify-start  lg:py-[20px] xl:py-[30px] 2xl:py-[48px] lg:px-[60px]"
  >
    <div className="w-full flex flex-col items-center">
      <div className=" flex flex-col gap-y-[12px] items-center">
        <h2 className=" font-montserrat text-[#1E1E1E] lg:text-[black] text-[20px] lg:text-[24px] leading-[35.2px] font-[700]  text-center">
          Reset your password
        </h2>
        <p className="font-[400] font-montserrat text-[#1E1E1E] text-[10px] lg:text-[14px] leading-[23.6px] text-center">
          Provide the email on your account and we'll send you details to your reset your password
        </p>
      </div>
      <div className="flex flex-col mt-[72px] lg:-[35px] xl:mt-[45px] 2xl:mt-[52px] gap-y-[12px] font-[400]">
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          className="text-[#666666] text-[14px] focus:outline-none leading-[24.6px] font-[400] w-[331px] rounded-[4px] border-[0.5px] pl-[12px] py-[10px] pr-[10px]"
        />
      </div>
    </div>
    <div className="w-full flex flex-col gap-y-[20px] lg:mt-[58px] xl:mt-[60px] 2xl:mt-[72px]">
      <button
        // disabled={loading}
        className={` gap-x-2 disabled:bg-[#0346927c] w-full text-[#FFFFFF] bg-[#034592] font-[500] text-[16px] leading-[19.5px] rounded-[4px] p-[10px] transition ease-out active:duration-300`}
      >
        Reset password
        {/* {loading ? (
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
          <span> Reset password </span>
        )} */}
      </button>
      <div className="text-center lg:text-start text-[#737373] text-[12px] leading-[14.63px] font-[400] mx-auto">
        <span className="">Dont have an account?</span>
        <Link
          to="/signup"
          className="text-[14px] leading-[17.07px] text-[#034592] underline ml-1"
        >
          Create an account
        </Link>
      </div>
    </div>
  </form>
     );
}
 
export default ForgotPassword;