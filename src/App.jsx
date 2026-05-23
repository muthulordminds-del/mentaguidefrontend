import React from 'react'
import Homepage from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Resetpassword from './pages/Resetpassword'
import Emailverify from './pages/Emailverify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/email-verify" element={<Emailverify />} />
      </Routes>
    </div>
  )
}

export default App
