import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowRight } from 'react-icons/fa';
import { homepagebg1 } from '../assets/images';

const Emailverify = () => {

  axios.defaults.withCredentials = true

  const navigate = useNavigate();

  const { backendUrl, isLoggedIn, userData, getUserData } = useContext(AppContext)
  const [isVerifying, setIsVerifying] = useState(false)
  const [isResending, setIsResending] = useState(false)

  const inputRefs = React.useRef([])

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text')
    const pasteArray = paste.split('');
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char
      }
    })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (isVerifying) return

    setIsVerifying(true)
    try {
      const otpArray = inputRefs.current.map(e => e.value)
      const otp = otpArray.join('')

      const { data } = await axios.post(backendUrl + '/api/auth/verify-account', { otp })

      if (data.success) {
        toast.success(data.message)
        getUserData()
        navigate('/', { state: { showAdvertiserPopup: true } })
      }
      else {
        toast.error(data.message)
      }


    } catch (error) {
      toast.error(error.response?.data?.message || 'Error verifying email');
    } finally {
      setIsVerifying(false)
    }
  }

  const handleResendOtp = async () => {
    if (isResending) return;
    setIsResending(true);
    try {
      const { data } = await axios.post(backendUrl + '/api/auth/send-verify-otp');
      if (data.success) {
        toast.success("Verification OTP sent successfully to your email.");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error resending OTP');
    } finally {
      setIsResending(false);
    }
  };

  useEffect(() => {
    isLoggedIn && userData && userData.isAccountVerified && navigate('/')

  }, [isLoggedIn, userData])


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
            <h1 className='max-w-xl text-5xl font-black leading-tight'>
              Secure your account before moving ahead.
            </h1>
            <p className='mt-6 max-w-lg text-base font-semibold leading-7 text-white/75'>
              Enter the verification code sent to your email to confirm your Mentaguide account.
            </p>
          </div>
        </section>

        <main className='flex h-full items-center justify-center px-5 py-6 sm:px-8 lg:px-12'>
          <form onSubmit={onSubmitHandler} className='w-full max-w-md rounded-[2rem] border border-[#e4e8d8] bg-white p-6 shadow-[0_24px_80px_rgba(45,47,49,0.12)] sm:p-8'>
            <div className='mb-8'>
              <p className='mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#8ab83f]'>Verification</p>
              <h1 className='text-3xl font-black text-[#222421] sm:text-4xl'>Email verify OTP</h1>
              <p className='mt-3 text-sm font-semibold leading-6 text-[#6a6d67]'>Enter the 6 digit OTP sent to your email.</p>
            </div>

            <div className='mb-8 grid grid-cols-6 gap-2 sm:gap-3' onPaste={handlePaste}>
              {Array(6).fill(0).map((_, index) => (
                <input type="text" maxLength={1} key={index} required
                  className='h-12 rounded-2xl border border-[#e1e6d4] bg-[#fbfcf8] text-center text-xl font-black text-[#2d2f31] outline-none transition-all focus:border-[#a4d64f] focus:ring-4 focus:ring-[#a4d64f]/15 sm:h-14'
                  ref={e => inputRefs.current[index] = e}
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>

            <button disabled={isVerifying} className='flex w-full items-center justify-center gap-3 rounded-2xl bg-[#a4d64f] px-5 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-[#202523] shadow-[0_14px_30px_rgba(164,214,79,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#b5e663] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0'>
              {isVerifying ? 'Verifying...' : 'Verify Email'}
              {!isVerifying && <FaArrowRight />}
            </button>
            <p className='mt-6 text-center text-sm font-semibold text-[#6a6d67]'>
              Didn't receive the code?{' '}
              <button
                type='button'
                onClick={handleResendOtp}
                disabled={isResending}
                className='text-[#8ab83f] underline transition-colors hover:text-[#a4d64f] disabled:cursor-not-allowed disabled:opacity-50'
              >
                {isResending ? 'Resending...' : 'Resend OTP'}
              </button>
            </p>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Emailverify
