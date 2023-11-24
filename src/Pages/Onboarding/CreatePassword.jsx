const CreatePassword = () => {
    return (
        <section className="flex text-center items-center justify-center bg-[#3d89df] h-screen">
            <div className="w-[300px] px-3 h-[380px] md:w-[400px] border-[1.7px] rounded-lg border-gray border-gray-200/60 bg-white">
                <div className="py-3">
                    <h2 className="py-[10px]">Logo</h2>
                    <h2 className="font-bold text-[25px] md:text-[28px]">Create new Password</h2>
                    <p className="text-[14px] text-[#ddd5dd]">
                        Create a new password for your account
                    </p>
                </div>

                <form className="h-52 w-full p-4 space-y-4">
                    <input type="text"
                    className="w-full px-2 rounded-md border h-12"
                    placeholder="New Password"
                     />

                    <input type="text"
                    className="w-full px-2 rounded-md border h-12 placeholder-gray outline-none"
                    placeholder="Confirm new Password"
                     />

                     <button className="border w-full rounded bg-[#004592] h-12 text-white font-bold">
                        Reset password
                     </button>
                </form>
            </div>
        </section>
     );
}
 
export default CreatePassword;