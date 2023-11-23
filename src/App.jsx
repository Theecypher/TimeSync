import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './signIn/SignIn';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    </>
  )
}

export default App
