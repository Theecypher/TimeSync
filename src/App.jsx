import React from "react";
import { Route, Routes } from "react-router-dom";
import ResetPassword from "./Pages/Onboarding/ResetPassword/ResetPassword";
import SignIn from "./Pages/Onboarding/signIn/SignIn";
import CreatePassword from "./Pages/Onboarding/ResetPassword/CreatePassword";
import SignUp from "./Pages/Onboarding/sign-up/SignUp";
import ResetCode from "./Pages/Onboarding/ResetPassword/ResetCode";

function App() {
  return (
    < div className=' font-montserrat'>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/createPassword" element={<CreatePassword />} />
        <Route path="/resetCode" element={<ResetCode />} />
      </Routes>
    </div>
  );
}

export default App;
