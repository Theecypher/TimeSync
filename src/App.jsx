import { useState } from 'react'
import './App.css'
import ResetPassword from './Pages/Onboarding/ResetPassword'
import CreatePassword from './Pages/Onboarding/CreatePassword'
import ResetCode from './Pages/Onboarding/ResetCode'

function App() {

  return (
    <div>
      {/* <CreatePassword /> */}
      {/* <ResetPassword /> */}
      <ResetCode />
    </div>
  )
}

export default App
