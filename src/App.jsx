import React from "react";
import { Route, Routes } from "react-router-dom";
import ResetPassword from "./Pages/Onboarding/ResetPassword/ResetPassword";
import SignIn from "./Pages/Onboarding/signIn/SignIn";
import CreatePassword from "./Pages/Onboarding/ResetPassword/CreatePassword";
import SignUp from "./Pages/Onboarding/sign-up/SignUp";
import ResetCode from "./Pages/Onboarding/ResetPassword/ResetCode";
import DashboardLayout from "./Pages/dashboard/layout/DashboardLayout";
import TimeTracker from "./Pages/dashboard/TimeTracker";
import Dashboard from "./Pages/dashboard/Dashboard";

function App() {
  return (
    <div className=" font-montserrat">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/createPassword" element={<CreatePassword />} />
        <Route path="/resetCode" element={<ResetCode />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="time-tracker" element={<TimeTracker />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
