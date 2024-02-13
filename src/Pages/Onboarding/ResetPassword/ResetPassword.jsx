import { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import useStore from "../../../zustand-store/store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ResetCode from "./ResetCode";
import { toast } from "sonner";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const { baseUrl, updateToken, newToken, updateNewToken } = useStore();
  const [hasSentCode, setHasSentCode] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    let errors = {};
    if (!email) {
      errors.email = "Email field cannot be empty";
    }
    return errors;
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const validated = validateEmail();
    if (Object.keys(validated).length === 0) {
      setLoading(true);
      axios
        .post(`${baseUrl}/auth/forgot-password`, {
          email: email,
        })
        .then((res) => {
          console.log(res);
          let token = res?.data?.data?.token;
          console.log(token);
          updateToken(token);
          setHasSentCode(true);
          toast.success("Rset Code Sent!");
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
          setLoading(false);
        });
    }
    // else {
    //   setError(validated);
    //   toast.warning("Incorrect or Invalid Email!");
    // }
  };

  return (
    <div className="w-full lg:bg-[#B6D8FF] font-montserrat flex px-[16px] lg:px-0 lg:flex-col lg:items-center lg:justify-center lg:backdrop-blur-[30px] lg:bg-[rgba(255, 255, 255, 0.2)] h-[100vh]">
      {hasSentCode ? (
        <ResetCode />
      ) : (
        <ForgotPassword
          Loading={Loading}
          handleForgotPassword={handleForgotPassword}
          handleChange={handleChange}
          error={error}
        />
      )}
    </div>
  );
};

export default ResetPassword;
