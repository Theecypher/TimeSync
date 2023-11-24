import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './signIn/SignIn';
import SignUp from './sign-up/SignUp'

function App() {
  return (
    <>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
