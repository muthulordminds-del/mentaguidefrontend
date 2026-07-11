import React from 'react'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Servicepage from './pages/Servicepage'
import Contactpage from './pages/Contactpage'
import { Routes, Route, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Resetpassword from './pages/Resetpassword'
import Emailverify from './pages/Emailverify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Shared/Navbar'
import ContactSection from './components/ContactSection'
import Eventpage from './pages/Eventpage'
import ServiceDetailsPage from './pages/ServiceDetailsPage'
import AdvertiserSignupPage from './pages/AdvertiserSignupPage'

const App = () => {
  const location = useLocation()
  const hideFooterRoutes = ['/', '/login', '/reset-password', '/email-verify']
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname)

  return (
    <div>
      <ToastContainer />
      <Navbar hideFloatingNav={location.pathname === '/advertiser-signup'} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/service/:slug" element={<ServiceDetailsPage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/event" element={<Eventpage />} />
        <Route path="/advertiser-signup" element={<AdvertiserSignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/email-verify" element={<Emailverify />} />
      </Routes>
      {shouldShowFooter && <ContactSection />}
    </div>
  )
}

export default App
