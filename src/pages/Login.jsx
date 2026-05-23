import React, { useContext, useState } from 'react'
import PasswordInput from '../components/Shared/PasswordInput'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FaArrowRight, FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import { homepagebg1, Mentaguidelogo1 } from '../assets/images'

const Login = () => {

    const navigate = useNavigate()

    const { backendUrl, setIsLoggedIn, getUserData } = useContext(AppContext)

    const [state, setState] = useState('Login')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const switchState = (nextState) => {
        if (isSubmitting) return
        setState(nextState)
        setName('')
        setEmail('')
        setPassword('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isSubmitting) return

        setIsSubmitting(true)
        try {
            axios.defaults.withCredentials = true

            if (state === 'Sign up') {

                const { data } = await axios.post(backendUrl + '/api/auth/register', { name, email, password })

                if (data.success) {
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                    }
                    setIsLoggedIn(true)
                    await getUserData()

                    // Send OTP automatically and redirect
                    try {
                        await axios.post(backendUrl + '/api/auth/send-verify-otp')
                        toast.success("Registration successful! Please verify your email.")
                    } catch (err) {
                        // ignore if it fails, user can resend
                        toast.success("Registration successful!")
                    }
                    navigate('/email-verify')
                }
                else {
                    toast.error(data.message)

                }

            } else {
                const { data } = await axios.post(backendUrl + '/api/auth/login', { email, password })

                if (data.success) {
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                    }
                    setIsLoggedIn(true)

                    // Fetch user data directly to check verification status immediately
                    try {
                        const res = await axios.get(backendUrl + '/api/user/data')
                        if (res.data.success) {
                            const user = res.data.userData

                            // Let context know
                            await getUserData()

                            if (!user.isAccountVerified) {
                                // User is not verified, send OTP and redirect
                                await axios.post(backendUrl + '/api/auth/send-verify-otp')
                                toast.info("Please verify your email before proceeding.")
                                navigate('/email-verify')
                                return
                            }
                        }
                    } catch (err) {
                        console.error(err)
                        // fallback to standard get user data
                        await getUserData()
                    }

                    navigate('/', { state: { showAdvertiserPopup: true } })
                }
                else {
                    toast.error(data.message)

                }

            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || 'An error occurred. Please try again.';
            toast.error(errorMessage);
            console.error('Login error:', error);
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='relative h-screen overflow-hidden bg-[#f7f8f3] font-gilroy text-[#2d2f31]'>
            {/* Logo */}
            <div
                className='absolute top-4 left-4 sm:top-6 sm:left-8 z-50 cursor-pointer hidden lg:block'
                onClick={() => navigate('/')}
            >
                <div className="bg-white rounded-lg p-2 sm:p-3 shadow-md inline-flex items-center justify-center transition-transform hover:scale-105">
                    <img src={Mentaguidelogo1} alt="Mentaguide Logo" className="w-32 sm:w-40 lg:w-48 h-auto" />
                </div>
            </div>

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
                            Build your audit-ready export journey with clarity.
                        </h1>
                        <p className='mt-6 max-w-lg text-base font-semibold leading-7 text-white/75'>
                            Manage certifications, paperwork, and international buyer readiness from one focused account.
                        </p>
                    </div>
                </section>

                <main className='flex h-full items-center justify-center px-5 py-6 sm:px-8 lg:px-12'>
                    <div className='w-full max-w-md rounded-[2rem] border border-[#e4e8d8] bg-white p-6 shadow-[0_24px_80px_rgba(45,47,49,0.12)] sm:p-8'>
                        <div className='mb-8'>
                            <p className='mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#8ab83f]'>
                                {state === 'Sign up' ? 'Start here' : 'Welcome back'}
                            </p>
                            <h2 className='font-gilroy text-3xl font-black text-[#222421] sm:text-4xl'>
                                {state === 'Sign up' ? 'Create account' : 'Login'}
                            </h2>
                            <p className='mt-3 text-sm font-semibold leading-6 text-[#6a6d67]'>
                                {state === 'Sign up' ? 'Create your account to continue with Mentaguide.' : 'Login to continue to your Mentaguide account.'}
                            </p>
                        </div>

                        <div className='mb-6 grid grid-cols-2 rounded-full bg-[#eef2e6] p-1 text-sm font-bold'>
                            <button
                                type='button'
                                onClick={() => switchState('Sign up')}
                                disabled={isSubmitting}
                                className={`rounded-full px-4 py-2.5 transition-all ${state === 'Sign up' ? 'bg-[#2d2f31] text-white shadow-sm' : 'text-[#6a6d67] hover:text-[#2d2f31]'}`}
                            >
                                Sign up
                            </button>
                            <button
                                type='button'
                                onClick={() => switchState('Login')}
                                disabled={isSubmitting}
                                className={`rounded-full px-4 py-2.5 transition-all ${state === 'Login' ? 'bg-[#2d2f31] text-white shadow-sm' : 'text-[#6a6d67] hover:text-[#2d2f31]'}`}
                            >
                                Login
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} autoComplete={state === 'Sign up' ? 'off' : 'on'} className='space-y-4'>
                            {state === 'Sign up' && (
                                <label className='flex items-center gap-3 rounded-2xl border border-[#e1e6d4] bg-[#fbfcf8] px-4 py-3.5 transition-within:border-[#a4d64f] focus-within:ring-4 focus-within:ring-[#a4d64f]/15'>
                                    <FaUser className='shrink-0 text-[#8ab83f]' />
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        autoComplete='name'
                                        className='w-full bg-transparent text-sm font-semibold text-[#2d2f31] outline-none placeholder:text-[#9a9f92]'
                                        type="text"
                                        placeholder='Full name'
                                        required
                                    />
                                </label>
                            )}

                            <label className='flex items-center gap-3 rounded-2xl border border-[#e1e6d4] bg-[#fbfcf8] px-4 py-3.5 transition-within:border-[#a4d64f] focus-within:ring-4 focus-within:ring-[#a4d64f]/15'>
                                <FaEnvelope className='shrink-0 text-[#8ab83f]' />
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete={state === 'Sign up' ? 'off' : 'email'}
                                    className='w-full bg-transparent text-sm font-semibold text-[#2d2f31] outline-none placeholder:text-[#9a9f92]'
                                    type="email"
                                    placeholder='Email address'
                                    required
                                />
                            </label>

                            <label className='flex items-center gap-3 rounded-2xl border border-[#e1e6d4] bg-[#fbfcf8] px-4 py-3.5 transition-within:border-[#a4d64f] focus-within:ring-4 focus-within:ring-[#a4d64f]/15'>
                                <FaLock className='shrink-0 text-[#8ab83f]' />
                                <PasswordInput
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete={state === 'Sign up' ? 'new-password' : 'current-password'}
                                    placeholder="Password"
                                    className='text-sm font-semibold text-[#2d2f31] placeholder:text-[#9a9f92]'
                                    required
                                />
                            </label>

                            {state === 'Login' && (
                                <button
                                    type='button'
                                    onClick={() => navigate('/reset-password')}
                                    className='text-sm font-bold text-[#6d941f] hover:text-[#2d2f31]'
                                >
                                    Forgot password?
                                </button>
                            )}

                            <button disabled={isSubmitting} className='mt-2 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#a4d64f] px-5 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-[#202523] shadow-[0_14px_30px_rgba(164,214,79,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#b5e663] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0'>
                                {isSubmitting ? (state === 'Sign up' ? 'Signing up...' : 'Logging in...') : state}
                                {!isSubmitting && <FaArrowRight />}
                            </button>
                        </form>

                        {state === 'Sign up' ? (
                            <p className='mt-6 text-center text-sm font-semibold text-[#70746b]'>
                                Already have an account?{' '}
                                <button onClick={() => switchState('Login')} className='font-black text-[#2d2f31] underline decoration-[#a4d64f] decoration-2 underline-offset-4'>
                                    Login here
                                </button>
                            </p>
                        ) : (
                            <p className='mt-6 text-center text-sm font-semibold text-[#70746b]'>
                                Don't have an account?{' '}
                                <button onClick={() => switchState('Sign up')} className='font-black text-[#2d2f31] underline decoration-[#a4d64f] decoration-2 underline-offset-4'>
                                    Sign up here
                                </button>
                            </p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Login
