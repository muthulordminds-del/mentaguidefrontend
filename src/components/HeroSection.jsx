import React, { useState, useContext } from 'react';
import { homepagebg1 } from '../assets/images';
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
    <section className="min-h-screen w-full relative bg-white font-sans overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-[length:200%] sm:bg-[length:150%] md:bg-[length:85%] lg:bg-[length:70%] xl:bg-[length:60%] bg-bottom md:bg-right-bottom opacity-30 md:opacity-100"
        style={{ backgroundImage: `url(${homepagebg1})` }}
      />

      {/* Main Content */}
      <main className="absolute top-1/2 left-0 md:left-32 lg:left-48 xl:left-56 max-w-2xl transform -translate-y-1/2 w-full px-6 sm:px-8 md:px-0 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-gilroy font-bold text-[#2d2f31] leading-[1.1] sm:leading-[1.1] mb-4 sm:mb-6 tracking-tight">
          Your gateway to<br className="hidden sm:block" />
          <span className="text-[#a4d64f]"> big global</span> orders
        </h1>

        <p className="text-[#5c5c5c] text-base sm:text-lg lg:text-[1.15rem] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl leading-relaxed sm:leading-relaxed mb-8 sm:mb-10 md:mb-16 font-semibold font-gilroy-light">
          We take the stress out of export certifications and paperwork, making your factory 100% audit-ready for international buyers.
        </p>

        {/* <div className="flex flex-wrap items-center gap-6 md:gap-10 text-sm md:text-[0.95rem] font-bold text-[#444648]">
          <a href="/login" className="font-gilroy hover:text-[#a4d64f] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#a4d64f] after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left pt-1 pb-1">Login</a>
          <button onClick={handleAdvertiserClick} className="font-gilroy hover:text-[#a4d64f] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#a4d64f] after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left pt-1 pb-1">Advertiser Signup</button>
          <a href="" className="font-gilroy hover:text-[#a4d64f] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#a4d64f] after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left pt-1 pb-1">Affiliate Signup</a>
        </div> */}

        {/* CTA buttons */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center mt-8 md:mt-10 md:hidden">
          <button
            onClick={handleAdvertiserClick}
            className="bg-[#a4d64f] text-[#202523] px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-black uppercase tracking-widest hover:bg-[#b5e663] transition-all hover:-translate-y-1 shadow-[0_10px_25px_rgba(164,214,79,0.3)] text-sm sm:text-base"
          >
            Advertiser Signup
          </button>
        </div>
      </main>

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
              <AdvertiserForm onSuccess={() => setIsModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
