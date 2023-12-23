import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/Onboarding/signIn/SignIn";
import SignUp from "./Pages/Onboarding/sign-up/SignUp";
import DashboardLayout from "./Pages/dashboard/layout/DashboardLayout";
import TimeTracker from "./Pages/dashboard/TimeTracker";
import Dashboard from "./Pages/dashboard/Dashboard";
import { Toaster } from "sonner";
import ShowTimerModal from "./Pages/Timer/TimerModal/testTimer";
import ResetPassword from "./Pages/Onboarding/ResetPassword/ResetPassword";
import CalendarView from "./Pages/Timer/TimerModal/CalendarView";

function App() {
  return (
    <div className=" font-montserrat">
      <Toaster position="top-right" />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="time-tracker" element={<TimeTracker />} />
          <Route path="calendar-view" element={<CalendarView />} />
        </Route>
        <Route path="/showTimerModal" element={<ShowTimerModal />} />
      </Routes>
    </div>
  );
}

export default App;
