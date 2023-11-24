
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ResetPassword from './Pages/Onboarding/ResetPassword/ResetPassword';
import SignIn from './Pages/Onboarding/signIn/SignIn';
import CreatePassword from './Pages/Onboarding/ResetPassword/CreatePassword';

function App() {
  return (
    <>
    <Routes>
      <Route path='/signin' element={<SignIn />}/>
    </Routes>
    <Routes>
      <Route path='/resetPassword' element={<ResetPassword />}/>
    </Routes>
    <Routes>
      <Route path='/' element={<CreatePassword />}/>
    </Routes>
    </>
  )
}

export default App
