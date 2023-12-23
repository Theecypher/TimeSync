import { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import { useStore } from "zustand";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ResetCode from "./ResetCode";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [Loading, setLoading] = useState(false);
    // const { baseUrl, updateToken } = useStore();
    const [hasSentCode, setHasSentCode] = useState(true);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const validateForgotPword = () => {
        let errors = {};
        if (!signupDetails.email) {
            errors.email = "Email field cannot be empty";
        }
        return errors;
    }

    const handleForgotPassword = () => {
        e.preventPassword();
        const validated = validateForgotPword();
        console.log(validated);
        if (Object.keys(validated).length === 0) {
            console.log(email);
            setLoading(true);
            console.log(baseUrl);
        }
    }


    return ( 
        <div className="w-full lg:bg-[#B6D8FF] font-montserrat flex px-[16px] lg:px-0 lg:flex-col lg:items-center lg:justify-center lg:backdrop-blur-[30px] lg:bg-[rgba(255, 255, 255, 0.2)] h-[100vh]">
        {!hasSentCode ? 
        <ForgotPassword handleForgotPassword={handleForgotPassword} handleChange={handleChange} Loading={Loading} error={error} />
        :
        <ResetCode />
}
      </div>
     );
}
 
export default ResetPassword;