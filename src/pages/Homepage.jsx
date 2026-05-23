import React, { useRef, useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeroSection from '../components/HeroSection';
import VisionSection from '../components/VisionSection';
import VerticalsSection from '../components/VerticalsSection';
import TrafficSourcesSection from '../components/TrafficSourcesSection';
import AdvertisersSection from '../components/AdvertisersSection';
import NumbersSection from '../components/NumbersSection';
import ProcessSection from '../components/ProcessSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Shared/Navbar';
import { posterforgoogleform } from '../assets/images';
import { AppContext } from '../context/AppContext';

const Homepage = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showHeroLogo, setShowHeroLogo] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const [showAdvertiserPopup, setShowAdvertiserPopup] = useState(false);
    const [showIframeModal, setShowIframeModal] = useState(false);
    const { isLoggedIn, userData } = useContext(AppContext);

    useEffect(() => {
        const hasSeen = sessionStorage.getItem('hasSeenAdvertiserPopup');
        if (!hasSeen) {
            setShowAdvertiserPopup(true);
            sessionStorage.setItem('hasSeenAdvertiserPopup', 'true');
        }

        if (location.state?.showAdvertiserPopup) {
            setShowAdvertiserPopup(true);
            navigate('/', { replace: true, state: {} });
        }
    }, [location.state, navigate]);

    const handlePopupAdvertiserClick = () => {
        if (!isLoggedIn || !userData) {
            toast.error("Please login first to access this form.");
            setShowAdvertiserPopup(false);
            navigate('/login');
        } else if (!userData.isAccountVerified) {
            toast.error("Please verify your email to access this form.");
            setShowAdvertiserPopup(false);
            navigate('/email-verify');
        } else {
            setShowIframeModal(true);
        }
    };

    const handleCloseAll = () => {
        setShowAdvertiserPopup(false);
        setShowIframeModal(false);
    };

    const handleScroll = () => {
        if (!containerRef.current) return;
        const { scrollTop, clientHeight } = containerRef.current;
        const heroHeight = containerRef.current.firstElementChild?.clientHeight || clientHeight;
        setShowHeroLogo(scrollTop < heroHeight - 1);

        // Add small buffer to perfectly snap before updating dot index
        const scrollIndex = Math.round(scrollTop / clientHeight);
        if (scrollIndex !== activeIndex && scrollIndex >= 0 && scrollIndex < 9) {
            setActiveIndex(scrollIndex);
        }
    };

    const scrollTo = (index) => {
        if (!containerRef.current) return;
        containerRef.current.scrollTo({
            top: index * window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative font-sans text-white h-screen w-full overflow-hidden">
            {/* Sticky Overlays */}
            {/* Global Navigation Shell */}
            <Navbar activeIndex={activeIndex} showHeroLogo={showHeroLogo} />

            {/* Pagination Dots Fixed Corner (Kept in Homepage for scroll context) */}
            <div className="fixed bottom-3 left-4 md:bottom-5 md:left-6 lg:bottom-6 lg:left-8 flex items-center gap-2 md:gap-3 z-50 pointer-events-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollTo(idx)}
                        className={`rounded-full transition-colors focus:outline-none pointer-events-auto ${activeIndex === idx
                            ? 'w-2 md:w-2.5 h-2 md:h-2.5 bg-[#a4d64f]'
                            : 'w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-500 hover:bg-[#a4d64f]'
                            }`}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>

            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="relative z-0 h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar bg-[#0a0a0a]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

                <div className="w-full h-screen snap-start overflow-hidden relative"><HeroSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><VisionSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><VerticalsSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><TrafficSourcesSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><AdvertisersSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><ProcessSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><NumbersSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><TeamSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><ContactSection /></div>
            </div>

            {/* Initial Advertiser Signup Popup */}
            {showAdvertiserPopup && !showIframeModal && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="relative w-full max-w-md max-h-[95vh] overflow-y-auto hide-scrollbar bg-white rounded-2xl shadow-2xl p-5 sm:p-8 animate-in fade-in zoom-in duration-200">
                        <button 
                            onClick={handleCloseAll}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-800 transition-colors bg-white/80 rounded-full p-1 z-10"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        
                        <div className="text-center">
                            <h2 className="text-2xl font-black text-[#222421] mb-2">Advertiser Signup</h2>
                            <p className="text-[#6a6d67] mb-4">Complete your advertiser profile to get started.</p>
                            
                            <div className="w-full rounded-xl overflow-hidden mb-6 border border-gray-100">
                                <img src={posterforgoogleform} alt="Advertiser Signup" className="w-full h-auto object-cover" />
                            </div>
                            
                            <button
                                onClick={handlePopupAdvertiserClick}
                                className="w-full py-3.5 bg-[#a4d64f] text-[#202523] font-black uppercase tracking-widest rounded-xl shadow-[0_10px_25px_rgba(164,214,79,0.3)] transition-all hover:-translate-y-1 hover:bg-[#b5e663]"
                            >
                                Advertiser Signup
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Google Form Iframe Modal */}
            {showIframeModal && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 sm:p-8">
                    <div className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-100 bg-white">
                            <div>
                                <h3 className="text-xl font-black text-[#202523] uppercase tracking-wider">Advertiser Signup</h3>
                                <p className="text-sm font-semibold text-gray-500 mt-1">Please complete the form below</p>
                            </div>
                            <button 
                                onClick={handleCloseAll} 
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors group"
                            >
                                <svg className="w-6 h-6 text-gray-500 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        
                        {/* Iframe Container */}
                        <div className="flex-1 w-full bg-[#f8f9fa] relative">
                            <iframe 
                                src="https://docs.google.com/forms/d/e/1FAIpQLScXCErL-eTaGJPKUMwKQE61HZM6GOa4lRsY4uvrB-o5Hu-75w/viewform?embedded=true" 
                                className="absolute inset-0 w-full h-full border-none"
                                title="Advertiser Signup Form"
                            >Loading…</iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};



export default Homepage;
