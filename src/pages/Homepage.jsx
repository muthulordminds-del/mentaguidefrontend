import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

const Homepage = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const [showAdvertiserPopup, setShowAdvertiserPopup] = useState(false);

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
        setShowAdvertiserPopup(false);
        navigate('/event-registration');
    };

    const handleCloseAll = () => {
        setShowAdvertiserPopup(false);
    };

    const handleScroll = () => {
        if (!containerRef.current) return;
        const { scrollTop } = containerRef.current;
        const slides = Array.from(containerRef.current.querySelectorAll(':scope > div'));
        const nearestIndex = slides.reduce((closestIndex, slide, index) => (
            Math.abs(slide.offsetTop - scrollTop) < Math.abs(slides[closestIndex].offsetTop - scrollTop)
                ? index
                : closestIndex
        ), 0);

        if (nearestIndex !== activeIndex) {
            setActiveIndex(nearestIndex);
        }
    };

    const scrollTo = (index) => {
        if (!containerRef.current) return;
        const slides = Array.from(containerRef.current.querySelectorAll(':scope > div'));
        const targetSlide = slides[index];
        if (!targetSlide) return;
        containerRef.current.scrollTo({
            top: targetSlide.offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative font-sans text-white h-screen w-full overflow-hidden" style={{ height: '100dvh' }}>
            {/* Sticky Overlays */}
            {/* Global Navigation Shell */}
            <Navbar activeIndex={activeIndex} />

            {/* Pagination Dots Fixed Corner (Kept in Homepage for scroll context) */}
            <div className="fixed bottom-2 left-3 sm:bottom-3 sm:left-4 md:bottom-5 md:left-6 lg:bottom-6 lg:left-8 flex items-center gap-1.5 sm:gap-2 md:gap-3 z-50 pointer-events-auto">
                {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollTo(idx)}
                        className={`rounded-full transition-colors focus:outline-none pointer-events-auto ${activeIndex === idx
                            ? 'w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 bg-[#a4d64f]'
                            : 'w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-gray-500 hover:bg-[#a4d64f]'
                            }`}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>

            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="relative z-0 h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar bg-[#0a0a0a]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', height: '100dvh' }}
            >
                <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

                <div className="relative flex h-auto w-full snap-start flex-col overflow-hidden xl:h-[100dvh]"><HeroSection /></div>
                <div className="w-full min-h-screen snap-start overflow-hidden relative" style={{ height: '100dvh' }}><VisionSection /></div>
                <div className="w-full min-h-screen snap-start overflow-hidden relative" style={{ height: '100dvh' }}><VerticalsSection /></div>
                <div className="w-full min-h-screen snap-start overflow-hidden relative" style={{ height: '100dvh' }}><TrafficSourcesSection /></div>
                {/* <div className="w-full min-h-screen snap-start overflow-hidden relative"><AdvertisersSection /></div> */}
                <div className="w-full min-h-screen snap-start overflow-hidden relative" style={{ height: '100dvh' }}><ProcessSection /></div>
                {/* <div className="w-full min-h-screen snap-start overflow-hidden relative" style={{ height: '100dvh' }}><NumbersSection /></div> */}
                {/* <div className="w-full min-h-screen snap-start overflow-hidden relative"><TeamSection /></div> */}
                <div className="w-full min-h-screen snap-start overflow-hidden relative" style={{ height: '100dvh' }}><ContactSection /></div>
            </div>

            {/* Initial Advertiser Signup Popup */}
            {showAdvertiserPopup && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto hide-scrollbar bg-white rounded-2xl shadow-2xl p-4 sm:p-6 animate-in fade-in zoom-in duration-200 flex flex-col">
                        <button 
                            onClick={handleCloseAll}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-800 transition-colors bg-white/80 rounded-full p-1 z-10"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        
                        <div className="text-center flex flex-col min-h-0">
                            <h2 className="text-xl sm:text-2xl font-black text-[#222421] mb-1 sm:mb-2">Enquiry Now</h2>
                            <p className="text-[#6a6d67] text-sm sm:text-base mb-3 sm:mb-4">Complete your advertiser profile to get started.</p>
                            
                            <div className="w-full flex justify-center mb-3 sm:mb-4 rounded-xl overflow-hidden border border-gray-100">
                                <img src={posterforgoogleform} alt="Advertiser Signup" className="h-[68vh] sm:h-[62vh] w-auto max-w-[95%] sm:max-w-[90%] object-contain" />
                            </div>
                            
                            <button
                                onClick={handlePopupAdvertiserClick}
                                className="w-full max-w-xs sm:max-w-sm mx-auto py-3 sm:py-3.5 bg-[#a4d64f] text-[#202523] font-black uppercase tracking-widest rounded-xl shadow-[0_10px_25px_rgba(164,214,79,0.3)] transition-all hover:-translate-y-1 hover:bg-[#b5e663] flex items-center justify-center gap-2 shrink-0"
                            >
                                Enquiry Now
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Homepage;