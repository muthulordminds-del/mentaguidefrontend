import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { eventbannerhero } from '../assets/images';
import { AppContext } from '../context/AppContext';
const HeroSection = () => {
  const { isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAdvertiserClick = () => {
    navigate('/event-registration');
  };

  return (
    <section className="w-full md:h-full relative bg-white font-sans overflow-hidden">
      {/* Event Banner Image */}
      <div className="w-full relative aspect-[16/9] md:aspect-auto">
        <img
          src={eventbannerhero}
          alt="Expand 360 Square - Transforming Businesses. Accelerating Growth"
          className="w-full h-full md:h-auto block object-contain object-center md:object-cover md:max-h-none"
        />
      </div>

      {/* Description text + Login/Advertiser Signup - same as desktop, now on mobile too */}
      <div className="block relative md:absolute bottom-0 md:bottom-[22%] lg:bottom-[25%] xl:bottom-[27%] left-0 right-0 z-10 px-4 sm:px-6 md:px-8 lg:px-20 py-3 sm:py-4 md:pb-0 md:pt-0">
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
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;