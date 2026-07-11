import React, { useState, useContext } from 'react';
import { eventbannerhero } from '../assets/images';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import AdvertiserForm from './AdvertiserForm';
const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userData } = useContext(AppContext);

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
    <section className="w-full relative bg-white font-sans overflow-hidden">
      {/* Event Banner Image */}
      <img
        src={eventbannerhero}
        alt="Expand 360 Square - Transforming Businesses. Accelerating Growth"
        className="w-full h-auto block"
      />

      {/* CTA buttons */}
      <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-center py-6 md:hidden">
        <button
          onClick={handleAdvertiserClick}
          className="bg-[#a4d64f] text-[#202523] px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-black uppercase tracking-widest hover:bg-[#b5e663] transition-all hover:-translate-y-1 shadow-[0_10px_25px_rgba(164,214,79,0.3)] text-sm sm:text-base"
        >
          Advertiser Signup
        </button>
      </div>

      {/* Advertiser Signup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="font-gilroy font-bold text-xl text-[#2d2f31]">Advertiser Signup</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="flex-1 w-full bg-gray-50 p-6 md:p-8 overflow-y-auto scroll-smooth">
              <AdvertiserForm onSuccess={() => setIsModalOpen(false)} showIntroScreen={true} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;