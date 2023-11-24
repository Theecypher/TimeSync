import React from "react";
import { Route, Routes } from "react-router-dom";
import ResetPassword from "./Pages/Onboarding/ResetPassword/ResetPassword";
import SignIn from "./Pages/Onboarding/signIn/SignIn";
import CreatePassword from "./Pages/Onboarding/ResetPassword/CreatePassword";
import SignUp from "./Pages/Onboarding/sign-up/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/" element={<CreatePassword />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
