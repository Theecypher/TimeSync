import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ResetPassword from "./Pages/Onboarding/ResetPassword/ResetPassword";
import SignIn from "./Pages/Onboarding/signIn/SignIn";
import CreatePassword from "./Pages/Onboarding/ResetPassword/CreatePassword";
import SignUp from "./Pages/Onboarding/sign-up/SignUp";
import ResetCode from "./Pages/Onboarding/ResetPassword/ResetCode";
import DashboardLayout from "./Pages/dashboard/layout/DashboardLayout";
import TimeTracker from "./Pages/dashboard/TimeTracker";
import Dashboard from "./Pages/dashboard/Dashboard";
import { Toaster } from "sonner";
import ShowTimerModal from "./Pages/Timer/TimerModal/testTimer";
import Onboarding from "./Pages/Onboarding/sign-up/onboarding/Onboarding";
import Teams from "./Pages/dashboard/teams/Teams";
import About from "./Pages/about/About";
import Why from "./Pages/why/Why";
import Features from "./Pages/features/Features";

function App() {
  const [otpTime, setOtpTime] = useState(localStorage.getItem('otp') || 300)

  useEffect(()=>{
    const timer =setInterval(() => {
    if(otpTime >0){
      localStorage.setItem('otp', otpTime - 1 )
      let newOtp = localStorage.getItem('otp')
      setOtpTime(newOtp)
    }else{
      // localStorage.removeItem('otp')
      clearInterval(timer)
    }
    }, 1000);
    return ()=>clearInterval(timer)
  },[otpTime])

  return (
    <div className=" font-montserrat">
      <Toaster position="top-right" />
      <Routes>
        <Route path="/signup" element={<SignUp otpTime={otpTime} setOtpTime={setOtpTime} />} />
        <Route path="/" element={<SignIn />} />
        <Route path='/onboarding' element={<Onboarding/>}/>
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/createPassword" element={<CreatePassword />} />
        <Route path="/resetCode" element={<ResetCode />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/why" element={<Why/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="time-tracker" element={<TimeTracker />} />
          <Route path='teams' element={<Teams/>}/>
        </Route>
        <Route path="/showTimerModal" element={<ShowTimerModal />} />
      </Routes>
    </div>
  );
}

export default App;
