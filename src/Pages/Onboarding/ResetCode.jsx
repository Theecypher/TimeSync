const CreatePassword = () => {
    return (
        <section className="flex text-center items-center justify-center bg-[#b6dbff] h-screen">
            <div className="w-[300px] px-3 h-[380px] md:w-[400px] border-[1.7px] rounded-lg border-gray border-gray-200/60 bg-white">
                <div className="py-3">
                    <h2 className="py-[10px]">Logo</h2>
                    <h2 className="font-bold text-[25px] md:text-[28px]">Reset code sent</h2>
                    <p className="text-[14px] text-[#98a2b3]">
                        If we find an account associated with that email, you'll
                        receive an email, you'll receive a 4-didgit code. Please
                        enter the code below

                    </p>
                </div>

                <form className="h-52 w-full p-4 space-y-4">
                    <input type="text"
                    className="w-[50px] rounded py-2 border-[1.8px] border-black/20 m-3"
                     />
                </form>

            </div>
        </section>
     );
}
 
export default CreatePassword;