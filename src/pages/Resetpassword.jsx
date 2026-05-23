import React, { useState, useContext } from 'react'
import PasswordInput from '../components/Shared/PasswordInput'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FaArrowRight, FaEnvelope, FaLock } from 'react-icons/fa'
import { homepagebg1 } from '../assets/images'

const Resetpassword = () => {

  const {backendUrl} = useContext(AppContext)

  axios.defaults.withCredentials = true

  const navigate = useNavigate()

  const [email,setEmail] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [isEmailSent,setIsEmailSent] = useState('')
  const [otp,setOtp] = useState(0)
  const [isOtpSubmitted,setIsOtpSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

   const inputRefs = React.useRef([])
  
    const handleInput = (e,index)=>{
      if(e.target.value.length > 0 && index <inputRefs.current.length - 1){
        inputRefs.current[index + 1].focus()
      }
    }
  
    const handleKeyDown = (e,index)=>{
      if(e.key === 'Backspace' && e.target.value === '' &&  index > 0){
        inputRefs.current[index - 1].focus()
      }
    }
  
    const handlePaste =(e)=>{
      const paste = e.clipboardData.getData('text')
      const pasteArray = paste.split('');
      pasteArray.forEach((char,index)=>{
        if(inputRefs.current[index]){
          inputRefs.current[index].value = char
        }
      })
    }

    const onSubmitEmail = async(e)=>{
      e.preventDefault()
      if (loading) return
      setLoading(true)
      try {
        const {data} = await axios.post(backendUrl + '/api/auth/send-reset-otp', {email})
        data.success ? toast.success(data.message) : toast.error(data.message)
        data.success && setIsEmailSent(true)
      } catch (error) {
        toast.error(error.response?.data?.message || 'Error sending OTP')
      } finally {
        setLoading(false)
      }
    }

    const onSubmitOtp = async(e)=>{
      e.preventDefault()
      if (loading) return
      setLoading(true)
      const otpArray = inputRefs.current.map(e => e.value)
      const currentOtp = otpArray.join('')
      try {
        const {data} = await axios.post(backendUrl + '/api/auth/verify-reset-otp', {email, otp: currentOtp})
        if (data.success) {
            setOtp(currentOtp)
            setIsOtpSubmitted(true)
        } else {
            toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.response?.data?.message || 'Invalid OTP')
      } finally {
        setLoading(false)
      }
    }

    const onSubmitNewPassword = async(e)=>{
      e.preventDefault();
      if (loading) return
      setLoading(true)
      try {
        const {data}= await axios.post(backendUrl + '/api/auth/reset-password', {email,otp,newPassword})
        data.success ? toast.success(data.message) : toast.error(data.message)
        data.success && navigate('/login')
      } catch (error) {
        toast.error(error.response?.data?.message || 'Error resetting password')
      } finally {
        setLoading(false)
      }
    }
  
  return (
        <div className='h-screen overflow-hidden bg-[#f7f8f3] font-gilroy text-[#2d2f31]'>
            <div className='grid h-full grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]'>
                <section className='relative hidden overflow-hidden bg-[#202523] lg:block'>
                    <div
                        className='absolute inset-0 bg-no-repeat bg-right-bottom opacity-95'
                        style={{ backgroundImage: `url(${homepagebg1})`, backgroundSize: '75%' }}
                    />
                    <div className='absolute inset-0 bg-gradient-to-br from-[#151917] via-[#202523]/90 to-[#a4d64f]/20' />
                    <div className='relative z-10 flex h-full flex-col justify-end px-16 pb-20 text-white'>
                        <p className='mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#a4d64f]'>Mentaguide</p>
                        <h1 className='max-w-xl font-gilroy text-5xl font-black leading-tight'>
                            Restore access to your workspace.
                        </h1>
                        <p className='mt-6 max-w-lg text-base font-semibold leading-7 text-white/75'>
                            Reset your password securely and continue managing your certification journey.
                        </p>
                    </div>
                </section>

                <main className='flex h-full items-center justify-center px-5 py-6 sm:px-8 lg:px-12'>
                    <div className='w-full max-w-md rounded-[2rem] border border-[#e4e8d8] bg-white p-6 shadow-[0_24px_80px_rgba(45,47,49,0.12)] sm:p-8'>
                        
                        {!isEmailSent && (
                        <form onSubmit={onSubmitEmail} className='space-y-4'>
                            <div className='mb-8'>
                                <p className='mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#8ab83f]'>Password help</p>
                                <h2 className='font-gilroy text-3xl font-black text-[#222421] sm:text-4xl'>Reset Password</h2>
                                <p className='mt-3 text-sm font-semibold leading-6 text-[#6a6d67]'>Enter your registered email address.</p>
                            </div>
                            
                            <label className='flex items-center gap-3 rounded-2xl border border-[#e1e6d4] bg-[#fbfcf8] px-4 py-3.5 transition-within:border-[#a4d64f] focus-within:ring-4 focus-within:ring-[#a4d64f]/15'>
                                <FaEnvelope className='shrink-0 text-[#8ab83f]' />
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full bg-transparent text-sm font-semibold text-[#2d2f31] outline-none placeholder:text-[#9a9f92]'
                                    type="email"
                                    placeholder='Email address'
                                    required
                                />
                            </label>

                            <button disabled={loading} className='mt-2 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#a4d64f] px-5 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-[#202523] shadow-[0_14px_30px_rgba(164,214,79,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#b5e663] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0'>
                                {loading ? 'Sending...' : 'Send OTP'}
                                {!loading && <FaArrowRight />}
                            </button>
                            
                            <button type="button" onClick={() => navigate('/login')} className='mt-4 w-full text-center text-sm font-semibold text-[#6a6d67] hover:text-[#2d2f31]'>
                                Back to Login
                            </button>
                        </form>
                        )}

                        {!isOtpSubmitted && isEmailSent && (
                        <form onSubmit={onSubmitOtp} className='space-y-4'>
                            <div className='mb-8'>
                                <p className='mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#8ab83f]'>Check your inbox</p>
                                <h2 className='font-gilroy text-3xl font-black text-[#222421] sm:text-4xl'>Verify OTP</h2>
                                <p className='mt-3 text-sm font-semibold leading-6 text-[#6a6d67]'>Enter the 6 digit OTP sent to your email.</p>
                            </div>

                            <div className='flex justify-between mb-8' onPaste={handlePaste}>
                                {Array(6).fill(0).map((_, index) => (
                                    <input type="text" maxLength={1} key={index} required
                                        className='w-10 h-10 sm:w-12 sm:h-12 border border-[#e1e6d4] bg-[#fbfcf8] text-center text-[#2d2f31] text-xl font-bold rounded-xl focus:border-[#a4d64f] focus:ring-4 focus:ring-[#a4d64f]/15 outline-none transition-all'
                                        ref={e => inputRefs.current[index] = e}
                                        onInput={(e) => handleInput(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                    />
                                ))}
                            </div>

                            <button disabled={loading} className='mt-2 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#a4d64f] px-5 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-[#202523] shadow-[0_14px_30px_rgba(164,214,79,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#b5e663] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0'>
                                {loading ? 'Verifying...' : 'Submit'}
                                {!loading && <FaArrowRight />}
                            </button>
                        </form>
                        )}

                        {isOtpSubmitted && isEmailSent && (
                        <form onSubmit={onSubmitNewPassword} className='space-y-4'>
                            <div className='mb-8'>
                                <p className='mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#8ab83f]'>Almost done</p>
                                <h2 className='font-gilroy text-3xl font-black text-[#222421] sm:text-4xl'>New Password</h2>
                                <p className='mt-3 text-sm font-semibold leading-6 text-[#6a6d67]'>Enter your new strong password.</p>
                            </div>

                            <label className='flex items-center gap-3 rounded-2xl border border-[#e1e6d4] bg-[#fbfcf8] px-4 py-3.5 transition-within:border-[#a4d64f] focus-within:ring-4 focus-within:ring-[#a4d64f]/15'>
                                <FaLock className='shrink-0 text-[#8ab83f]' />
                                <PasswordInput 
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Enter your new password"
                                    className="w-full bg-transparent text-sm font-semibold text-[#2d2f31] outline-none placeholder:text-[#9a9f92]"
                                    required
                                />
                            </label>

                            <button disabled={loading} className='mt-2 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#a4d64f] px-5 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-[#202523] shadow-[0_14px_30px_rgba(164,214,79,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#b5e663] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0'>
                                {loading ? 'Resetting...' : 'Submit'}
                                {!loading && <FaArrowRight />}
                            </button>
                        </form>
                        )}
                        
                    </div>
                </main>
            </div>
        </div>
  )
}

export default Resetpassword