import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Oval } from "react-loader-spinner";
import useStore from '../../../zustand-store/store';
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import VerifyMail from '../sign-up/components/VerifyMail';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [notVerified, setNotVerifed] = useState(false)
  const navigate = useNavigate();
  const {baseUrl, updateToken, token} = useStore();
  // console.log(token)

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    // Reset previous state
    setEmailError(false);
    setPasswordError(false);
    setSubmitStatus(null);

    if (!email) {
      setEmailError(true);
    }

    if (!password) {
      setPasswordError(true);
    }

    if (email && password) {
      setLoading(true);

      axios
        .post(`${baseUrl}/auth/login`, {
          email: email,
          password: password,
        })
       
        .then((response) => {
          console.log(response);
          let token = response?.data?.data?.token
          localStorage.setItem('token', token)
          updateToken(token)
          setSubmitStatus('success');
          toast.success("Sign up successful!");
          setLoading(false);
          navigate('/dashboard');
        })
        .catch((err) => {
          console.log(err.response);
          if (err?.response?.data?.message.includes("An otp has been")) {
            setNotVerifed(true)
          }
          toast.error(
            err?.response?.data?.err || err?.response?.data?.message || 'Error logging in'
          );
          setSubmitStatus('error');
          
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className='flex flex-col justify-center h-screen items-center sm:bg-blue-200'>{
      notVerified ? 
      <VerifyMail/> 
      :
      <div className='w-[390px] h-[844px] px-3 flex flex-col justify-between items-center bg-white sm:w-[451px] sm:h-[525px] sm:rounded-lg sm:border-2 sm:shadow-lg sm:shadow-grey-200/60'>
        <div className='flex flex-col items-center leading-tight'>
          <h2 className='font-montserrat font-bold py-10 text-[#1E1E1E] text-[20px] lg:text-[24px] '>Sign in</h2>
          <p className='font-[400] font-montserrat text-[#1E1E1E] text-[10px] lg:text-[14px]'>Sign in to continue working.</p>
        </div>
        {submitStatus === 'success' && <p className='text-green-500 text-[12px]'>Form submitted successfully!</p>}
        {submitStatus === 'error' && <p className='flex items-center justify-center text-[#D42620] text-[12px] bg-[#f8dcdb] w-[300px] h-[28px] sm:w-[390px]'>Email or password incorrect.</p>}
        <form className='h-52 w-full p-4 space-y-4'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            className={`w-full h-12 rounded-md border-[0.4px] placeholder-gray outline-none pl-4 ${
              emailError ? 'border-red-500' : ''
            }`}
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p className='text-red-500 text-sm'>required</p>}
          <input
            type='password'
            placeholder='Password'
            name='password'
            className={`w-full h-12 rounded-md border-[0.4px] placeholder-gray outline-none pl-4 ${
              passwordError ? 'border-red-500' : ''
            }`}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <p className='text-red-500 text-sm'>required</p>}
        </form>
        <div className='flex flex-col items-center leading-tight'>
          <button
            type='submit'
            className='w-[331px] h-12 text-[#FFFFFF] bg-[#034592] font-[500] text-[16px] rounded-[16px] mx-2 sm:mb-1'
            onClick={handleSignIn}
            disabled={loading}
          >
             {loading ? (
              <div className="flex justify-center space-x-2">
                <span>Signing In</span>
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
              <span> Sign In </span>
            )}
          </button>
          
          <p className='w-full py-5 text-center text-[#737373] text-[12px] font-[400] '>
            Don't have an account? <Link to='/signup' className='text-[14px] text-[#034592] underline ml-1'>Create an account</Link>
          </p>
        </div>
      </div>
      }
    </div>
  );
};

export default SignIn;
