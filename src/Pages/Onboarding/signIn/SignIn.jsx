import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../signIn/SignIn.css';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("submitted form------>>")
    axios.post('https://timesyncofficial.onrender.com/login', {
      email: email,
      password: password
    })
    .then((response) => {
       console.log(response.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
   
    if (!email) {
      setEmailError(true);
    }

    if (!password) {
      setPasswordError(true);
    }

    
    if (email && password) {
      console.log('Email:', email);
      console.log('Password:', password);
     
    }
  };

  return (
    <div className='flex flex-col justify-center h-screen items-center sm:bg-blue-200'>
      <div className='w-[390px] h-[844px] px-3 flex flex-col justify-between items-center bg-white sm:w-[451px] sm:h-[525px] sm:rounded-lg sm:border-2 sm:shadow-lg sm:shadow-grey-200/60'>
        <div className='flex flex-col items-center leading-tight'>
          <h2 className='font-montserrat font-bold py-10 text-[#1E1E1E] text-[20px] lg:text-[24px] '>Sign in</h2>
          <p className='font-[400] font-montserrat text-[#1E1E1E] text-[10px] lg:text-[14px]'>Sign in to continue working.</p>
        </div>
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
          >
            Sign in
          </button>
          <p className='w-full py-5 text-center text-[#737373] text-[12px] font-[400] '>
            Don't have an account? <Link to='/signup' className='text-[14px] text-[#034592] underline ml-1'>Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
