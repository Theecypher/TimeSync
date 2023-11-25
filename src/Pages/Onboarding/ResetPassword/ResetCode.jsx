import { Link } from "react-router-dom";

const ResetCode = () => {
    return (
        <section className="flex text-center lg:items-center lg:justify-center font-monserrat lg:bg-blue-300 h-screen  lg:backdrop-blur-[30px] lg:bg-[rgba(255, 255, 255, 0.2)]">
            <form
            className="w-full lg:w-[451px] mt-[48px] lg:mt-0 bg-white lg:border-[#F5F5F5] lg:shadow-md lg:border-[0.5px] lg:rounded-[12px] items-center justify-between lg:justify-start  lg:py-[20px] xl:py-[30px] 2xl:py-[48px] lg:px-[60px]"
            >
                <div className="pt-5 h-[140px]">
                    <h2 className="py-[10px] hidden lg:block">Logo</h2>
                    <h2 className="font-bold font-montserrat text-[25px] md:text-[28px] pb-2 leading-[35.2px]">Reset code sent</h2>
                    <p className="text-[10px] pt-3 font-montserrat w-[38%] lg:w-[89%] lg:text-[14px] mx-auto text-[#98a2b3]">
                        If we find an account associated with that email, 
                        you will receive a 4-digit code. Please
                        enter the code below.

                    </p>
                </div>

                <div className="mt-10 pt-5 ">
                    <input type="text"
                    className="w-[51px] rounded py-[10px] border-[1.8px] border-black/20 m-[3px] lg:m-[7px]"
                     />
                    <input type="text"
                    className="w-[51px] rounded py-[10px] border-[1.8px] border-black/20 m-[3px] lg:m-[7px]"
                     />
                    <input type="text"
                    className="w-[51px] rounded py-[10px] border-[1.8px] border-black/20 m-[3px] lg:m-[7px]"
                     />
                    <input type="text"
                    className="w-[51px] rounded py-[10px] border-[1.8px] border-black/20 m-[3px] lg:m-[7px]"
                     />
                   
                   
                </div>

                <div className="flex justify-center m-7">
                  <p className="mr-1 font-montserrat">Code will expire in 10:00</p>
                    <Link className="font-montserrat underline lg:text-green-400 lg:no-underline text-blue-600">Resend code</Link>
                </div>

            </form>
        </section>
     );
}
 
export default ResetCode;