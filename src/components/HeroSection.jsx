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
    <section className="relative w-full overflow-hidden bg-white font-sans xl:h-[100dvh]">
      {/* Visual layer: it establishes the hero's size but does not position content. */}
      <div className="aspect-[16/9] w-full xl:h-full xl:aspect-auto">
        <img
          src={eventbannerhero}
          alt="Expand 360² - Transforming Businesses. Accelerating Growth"
          className="block h-full w-full object-contain object-center xl:object-cover xl:object-top"
        />
      </div>

      {/*
        CTAs share a fixed layout zone with the left navigation, rather than using
        banner-relative bottom offsets. They remain in normal flex flow inside it.
      */}
      <div className="relative z-10 px-4 py-3 sm:px-6 sm:py-4 xl:absolute xl:inset-0 xl:grid xl:grid-rows-[3fr_auto_1fr] xl:px-20 xl:py-0">
        <div className="flex max-w-xl flex-col gap-4 sm:gap-5 xl:row-start-2">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {!isLoggedIn && (
              <button
                onClick={() => navigate('/login')}
                className="font-gilroy text-[#2d2f31] hover:text-[#a4d64f] transition-colors uppercase tracking-widest text-xs font-bold cursor-pointer"
              >
                Login
              </button>
            )}
            <button
              onClick={handleAdvertiserClick}
              className="bg-[#a4d64f] text-[#202523] px-5 py-2 rounded-full font-black uppercase tracking-widest hover:bg-[#b5e663] transition-all hover:-translate-y-1 shadow-[0_4px_14px_rgba(164,214,79,0.3)] text-xs cursor-pointer whitespace-nowrap"
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
