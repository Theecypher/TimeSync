import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    return (
        <section className="flex text-center items-center justify-center bg-blue-300 h-screen">
            <div className="w-[330px] px-3 md:w-[400px] border-[2px] border-grey shadow-lg shadow-grey-200/60 rounded-md bg-white">
                <div className="py-3">
                    <h2 className="py-[10px]">Logo</h2>
                    <h2 className="font-bold text-[32px] md:text-[36px]">Reset password</h2>
                    <p className="text-[14px] md:w-[80%] mx-auto">
                       Provide the email on your account and we'll 
                       send the details to reset your password
                    </p>
                </div>

                <form className="w-full my-2 px-7 pt-3 space-y-4 md:px-8">
                    <input type="text"
                    className="w-full px-2 mb-3 rounded-md border h-12"
                    placeholder="Email"
                     />


                     <button className="border w-full rounded bg-[#004592] h-12 text-white font-bold md:text-xl">
                        Reset password
                     </button>
                </form>

                <div className="m-6">
                    <div className="flex justify-center text-[14px]">
                        <p className="">Don't have an account? </p>
                        <Link>  Create account
                        <FaArrowRight className="inline" />
                        </Link>
                    </div>

                    <div className="m-4">
                    <Link>Return to login</Link>

                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ResetPassword;