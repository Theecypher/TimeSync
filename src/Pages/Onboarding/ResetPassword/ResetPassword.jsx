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
        .post(`${baseUrl}/auths/forgot-password`, {
          email: email,
        })
        .then((res) => {
          console.log(res);
          let token = res.data.data.token;
          setHasSentCode(true);
          toast.success("Reset Code Sent!");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error?.res?.data?.err || error?.res?.data?.message);
          setLoading(false);
        });
    } else {
      setError(validated);
      toast.warning("Please check input field");
    }
  };

  return (
    <div className="w-full lg:bg-[#B6D8FF] font-montserrat flex px-[16px] lg:px-0 lg:flex-col lg:items-center lg:justify-center lg:backdrop-blur-[30px] lg:bg-[rgba(255, 255, 255, 0.2)] h-[100vh]">
      {!hasSentCode ? (
        <ForgotPassword
          Loading={Loading}
          handleForgotPassword={handleForgotPassword}
          handleChange={handleChange}
          error={error}
        />
      ) : (
        <ResetCode />
      )}
    </div>
  );
};

export default ResetPassword;
