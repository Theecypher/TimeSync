import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SignIn from "./Pages/Onboarding/signIn/SignIn";
import SignUp from "./Pages/Onboarding/sign-up/SignUp";
import DashboardLayout from "./Pages/dashboard/layout/DashboardLayout";
import Dashboard from "./Pages/dashboard/dashboard/Dashboard";
import { Toaster } from "sonner";
import ShowTimerModal from "./Pages/Timer/TimerModal/testTimer";
import ResetPassword from "./Pages/Onboarding/ResetPassword/ResetPassword";
import CalendarView from "./Pages/Timer/TimerModal/CalendarView";
import Onboarding from "./Pages/Onboarding/sign-up/onboarding/Onboarding";
import Teams from "./Pages/dashboard/teams/Teams";
import About from "./Pages/about/About";
import Why from "./Pages/why/Why";
import Features from "./Pages/features/Features";
import ResetComponentPassword from "./Pages/Onboarding/ResetPassword/CreatePasswordComponent";
import ResetCode from "./Pages/Onboarding/ResetPassword/ResetCode";
import TimeTracker from "./Pages/dashboard/timeTracker/TimeTracker";
import Project from "./Pages/dashboard/project/Project";
import LandingPage from "./Pages/LandingPage/LandingPage";
import useStore from "./zustand-store/store";

function App() {
  const [otpTime, setOtpTime] = useState(localStorage.getItem("otp") || 300);
  const location = useLocation()
  const router = useNavigate()
  const {token} = useStore()
  console.log(location.pathname)
  useEffect(()=>{
    if(!token && location.pathname.includes('dashboard')){
      router('/signin')
    }
  },[])

  useEffect(() => {
    const timer = setInterval(() => {
      if (otpTime > 0) {
        localStorage.setItem("otp", otpTime - 1);
        let newOtp = localStorage.getItem("otp");
        setOtpTime(newOtp);
      } else {
        // localStorage.removeItem('otp')
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [otpTime]);

  return (
    <div className=" font-montserrat">
      <Toaster position="top-right" />
      <Routes>
        <Route
          path="/signup"
          element={<SignUp otpTime={otpTime} setOtpTime={setOtpTime} />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/resetCode" element={<ResetCode />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/createPassword" element={<ResetComponentPassword />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="time-tracker" element={<TimeTracker />} />
          <Route path="teams" element={<Teams />} />
          <Route path="calendar-view" element={<CalendarView />} />
          <Route path="project" element={<Project />} />
        </Route>
        <Route path="/showTimerModal" element={<ShowTimerModal />} />
      </Routes>
    </div>
  );
}

export default App;
