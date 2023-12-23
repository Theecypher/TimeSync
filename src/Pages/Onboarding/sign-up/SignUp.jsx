import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../../../zustand-store/store";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import VerifyMail from "./components/VerifyMail";
import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [psswdError, setPsswdError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { baseUrl, updateToken } = useStore();
  const [hasSignedUp, setHasSignedUp] = useState(false)
  const navigateTo = useNavigate();

  // useEffect(()=>{
  // console.log(psswdError )
  // },[psswdError])
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setSignupDetails((prevVals) => ({ ...prevVals, [name]: value }));
    setError((prevVals)=>({...prevVals, [name]: ''}))
    if(e.target.name == 'password'){
    let password = e.target.value
      const passwdValidate=validatePassword(password)
      setPsswdError(passwdValidate)
      // console.log(passwdValidate)
    }
  };
  const validateSignup = () => {
    let errors = {};
    if (!signupDetails.name) {
      errors.name = "Name field cannot be empty";
    }
    if (!signupDetails.email) {
      errors.email = "Email field cannot be empty";
    }
    if (!signupDetails.password) {
      errors.password = " Password must contain at least 8 characters";
    }
    return errors;
  };
  const validatePassword = (password) => {
    let errors = {};
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/;
    const upperCase = /[A-Z]/;
    if (!password || password.length < 8) {
      errors.length = "cannot be less than 8 characters";
    }
    if (!password || regex.test(password) == false) {
      errors.test = "must include numbers and symbols";
    }
    if (!password || upperCase.test(password) == false) {
      errors.uppercase = "must include an uppercase character";
    }
    return errors;
  };
  
  const handleSignUp = (e) => {
    e.preventDefault();
    const validatePasswd = validatePassword(signupDetails.password);
    console.log(validatePasswd);
    const validated = validateSignup();
    console.log(validated);
    if (Object.keys(validated).length === 0 && Object.keys(validatePasswd).length===0) {
      console.log(signupDetails);
      setLoading(true);
      axios
        .post(`${baseUrl}/auths/sign-up`, {
          name: signupDetails.name,
          email: signupDetails.email,
          password: signupDetails.password,
        })
        .then((response) => {
          console.log(response);
          let token = response.data.data.token;
          localStorage.setItem("token", token);
          updateToken(token)
          setHasSignedUp(true)
          toast.success("Sign up successful!");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            error?.response?.data?.err || error?.response?.data?.message
          );
          setLoading(false);
        });
    } else {
      setError(validated);
      toast.warning("Please check all input fields");
    }
  };
  
  return (
    <div className="w-full lg:bg-[#B6D8FF] font-montserrat flex px-[16px] lg:px-0 lg:flex-col lg:items-center lg:justify-center lg:backdrop-blur-[30px] lg:bg-[rgba(255, 255, 255, 0.2)] h-[100vh]">
      {!hasSignedUp ? 
      <SignUpForm handleSignUp={handleSignUp} signupDetails={signupDetails} handleOnchange={handleOnchange} error={error} isLoading={isLoading} psswdError={psswdError} />
      :
      <VerifyMail/>
}
      {/* <Link to="/dashboard">Dashboard</Link> */}
    </div>
  );
};

export default SignUp;
