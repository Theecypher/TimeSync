import React from 'react';
import '../signIn/SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='flex flex-col justify-center h-screen items-center bg-blue-200'>
        <div className='w-[400px] h-[450px] px-3 flex flex-col justify-between items-center bg-white rounded-lg border-2 border-grey shadow-lg shadow-grey-200/60'>
        <p className=' py-2'>Logo</p>
        <h2 className='font-bold py-5 text-xl'>Sign in</h2>
        <p className='text-gray-400'>Sign in to continue working.</p>
        <form className='h-52 w-full p-4 space-y-4'>
            <input type='email' placeholder='Email' className='w-full h-12  rounded-md border-[0.4px]  placeholder-gray outline-none pl-4'/>
            <input type='password' placeholder='Password' className='w-full h-12  rounded-md border-[0.4px]  placeholder-gray outline-none pl-4'/>
        </form>
        <Link><p className='py-5 text-blue-600'>Reset Password ↗</p></Link>
        <button type="submit" className=' w-80 h-12 bg-blue-800 text-white rounded mx-2' >Login →</button>
        <p className='w-full py-5 text-center'>Don't have an account? <Link className='text-blue-600'>Create an account →</Link></p>
        </div>
    </div>
  )
}

export default SignIn