import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdvertiserForm from '../components/AdvertiserForm';

const AdvertiserSignupPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-28 sm:pt-32 pb-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mb-6 px-1 text-black font-gilroy">
        <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-bold">
          <button onClick={() => navigate('/login')} className="hover:text-[#a4d64f] transition-colors uppercase tracking-widest cursor-pointer">
            Login
          </button>
          <span className="bg-[#a4d64f] text-[#202523] px-4 py-1.5 rounded-full font-black uppercase tracking-widest text-xs sm:text-sm whitespace-nowrap">
            Advertiser Signup
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold">
          <a href="tel:+917708505529" className="hover:text-[#a4d64f] transition-colors">+91 7708505529</a>
          <span className="opacity-50">|</span>
          <a href="mailto:mentaguide6@gmail.com" className="hover:text-[#a4d64f] transition-colors whitespace-nowrap">mentaguide6@gmail.com</a>
        </div>
      </div>

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <AdvertiserForm onSuccess={() => navigate('/event')} />
      </div>
    </div>
  );
};

export default AdvertiserSignupPage;
