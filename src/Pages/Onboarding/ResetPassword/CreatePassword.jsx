import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreatePassword = () => {
    return (
        <section className="flex text-center lg:items-center lg:justify-center lg:bg-blue-300 h-screen">
            <form
            className="w-full lg:w-[451px] mt-[48px] lg:mt-0 bg-white lg:border-[#F5F5F5] lg:shadow-md lg:border-[0.5px] lg:rounded-[12px] items-center justify-between lg:justify-start  lg:py-[20px] xl:py-[30px] 2xl:py-[48px] lg:px-[60px]"
            >
                <div className="lg:py-1 h-[115px] lg:h-[95px]">
                    <h2 className="hidden font-montserrat lg:block py-[10px] lg:py-2">Logo</h2>
                    <h2 className="font-bold text-[20px] md:text-[28px] pb-1 leading-[35.2px]">Create new password</h2>
                    <p className="text-[10px] lg:pt-1 font-montserrat w-[44%] lg:w-[89%] lg:text-[14px] mx-auto text-[#98a2b3]">
                       Create new password for your account
                    </p>
                </div>

                <div className="w-full mb-2 px-9 lg:px-5 lg:pt-[35px] space-y-4 md:px-8 h-[270px] lg:h-20">
                    <input type="text"
                    className="w-full px-2 mb-3 rounded-md border h-12"
                    placeholder="password"
                     />
                    <input type="text"
                    className="w-full px-2 mb-3 rounded-md border h-12"
                    placeholder="Confirm password"
                     />
                </div>

                <div className="m-6 lg:mt-[7rem]">
                     <button className="border mb-[17px] w-full rounded-lg bg-[#004592] h-12 text-white font-bold md:text-xl">
                        Reset password
                     </button>

                    <div className="flex lg:hidden justify-center text-[14px]">
                        <p className="mr-1 hidden">Don't have an account? </p>
                        <Link className="text-[#004592] underline" to="/" >  Create account
                        <FaArrowRight className="ml-1 hidden" />
                        </Link>
                    </div>

                    <div className="m-4 hidden">
                    <Link>Return to login</Link>

                    </div>
                </div>
            </form>
        </section>
     );
}
 
export default CreatePassword;