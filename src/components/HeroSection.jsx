import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { eventbannerhero } from '../assets/images';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import AdvertiserForm from './AdvertiserForm';
const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userData, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAdvertiserClick = () => {
    if (!userData) {
      toast.error('To access this form, you must login');
    } else if (!userData.isAccountVerified) {
      toast.error('To access this form, you must verify your email.');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="w-full h-[100dvh] md:h-full relative bg-white font-sans overflow-hidden flex flex-col md:block">
      {/* Event Banner Image */}
      <div className="w-full relative flex-1 min-h-0 md:flex-none">
        <img
          src={eventbannerhero}
          alt="Expand 360 Square - Transforming Businesses. Accelerating Growth"
          className="w-full h-full md:h-auto block object-cover object-center md:max-h-none"
        />
      </div>

      {/* Description text + Login/Advertiser Signup - same as desktop, now on mobile too */}
      <div className="block absolute bottom-0 md:bottom-[22%] lg:bottom-[25%] xl:bottom-[27%] left-0 right-0 z-10 px-4 sm:px-6 md:px-8 lg:px-20 pb-4 sm:pb-5 md:pb-0">
        <div className="max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-2 md:mt-0.5">
            {!isLoggedIn && (
              <button
                onClick={() => navigate('/login')}
                className="font-gilroy text-[#2d2f31] hover:text-[#a4d64f] transition-colors uppercase tracking-widest text-[0.65rem] sm:text-xs lg:text-sm font-bold cursor-pointer"
              >
                Login
              </button>
            )}
            <button
              onClick={handleAdvertiserClick}
              className="bg-[#a4d64f] text-[#202523] px-4 py-2 sm:px-5 lg:px-6 lg:py-2.5 rounded-full font-black uppercase tracking-widest hover:bg-[#b5e663] transition-all hover:-translate-y-1 shadow-[0_4px_14px_rgba(164,214,79,0.3)] text-[0.65rem] sm:text-xs lg:text-sm cursor-pointer whitespace-nowrap"
            >
              Advertiser Signup
            </button>
          </div>
        </div>
      </div>

      {/* Advertiser Signup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[90vh] sm:h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-100">
              <h3 className="font-gilroy font-bold text-lg sm:text-xl text-[#2d2f31]">Advertiser Signup</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="flex-1 w-full bg-gray-50 p-4 sm:p-6 md:p-8 overflow-y-auto scroll-smooth">
              <AdvertiserForm onSuccess={() => setIsModalOpen(false)} showIntroScreen={true} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;