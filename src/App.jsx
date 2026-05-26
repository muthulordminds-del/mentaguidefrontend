import React from 'react'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Resetpassword from './pages/Resetpassword'
import Emailverify from './pages/Emailverify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Shared/Navbar'
import ContactSection from './components/ContactSection'
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/email-verify" element={<Emailverify />} />
      </Routes>
      <ContactSection/>
    </div>
  )
}

export default App
