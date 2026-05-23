import React from 'react';
import { homepagebg3, homepageimg1 } from '../assets/images';

const VerticalsSection = () => {
  return (
    <section className="min-h-screen w-full relative font-sans overflow-hidden text-white flex items-center bg-[#5a0000]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center md:bg-center z-0 opacity-40 md:opacity-100"
        style={{ backgroundImage: `url(${homepagebg3})` }}
      />

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full h-full flex items-center pointer-events-none py-20 md:py-0">
        
        {/* Left Side Content */}
        <div className="w-full md:max-w-[700px] lg:max-w-[800px] pointer-events-auto px-6 sm:px-8 md:px-0 md:pl-32 lg:pl-48 xl:pl-56">
          <h3 className="text-[#a4d64f] font-bold tracking-widest text-sm md:text-base lg:text-lg mb-4 md:mb-6 uppercase font-gilroy">
            WHO WE SERVE
          </h3>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-gilroy font-bold leading-[1.1] sm:leading-[1.1] tracking-tight mb-6 sm:mb-8 md:mb-10">
            We Help Achieve <span className="text-[#a4d64f]">Success</span><br />
            For:
          </h2>

          {/* Industries we serve */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 max-w-2xl font-gilroy-light">
            <div className="group cursor-pointer">
              <h4 className="font-gilroy font-bold text-white group-hover:text-[#a4d64f] transition-colors mb-1 text-lg">Textile Industry</h4>
              <p className="text-[#cfcfcf] leading-relaxed text-sm md:text-base">Preparing spinning, weaving, and processing units for strict global compliance.</p>
            </div>
            <div className="group cursor-pointer">
              <h4 className="font-gilroy font-bold text-white group-hover:text-[#a4d64f] transition-colors mb-1 text-lg">Garment Manufacturers</h4>
              <p className="text-[#cfcfcf] leading-relaxed text-sm md:text-base">Helping apparel brands meet the workplace and environmental standards demanded by major Western buyers.</p>
            </div>
            <div className="group cursor-pointer">
              <h4 className="font-gilroy font-bold text-white group-hover:text-[#a4d64f] transition-colors mb-1 text-lg">Manufacturing Units</h4>
              <p className="text-[#cfcfcf] leading-relaxed text-sm md:text-base">Assisting production-heavy factories in streamlining their safety and labor tracking documentation.</p>
            </div>
            <div className="group cursor-pointer">
              <h4 className="font-gilroy font-bold text-white group-hover:text-[#a4d64f] transition-colors mb-1 text-lg">Export-Oriented Businesses</h4>
              <p className="text-[#cfcfcf] leading-relaxed text-sm md:text-base">Guiding any growing company looking to expand its footprint into international markets safely.</p>
            </div>
          </div>

        </div>

        {/* Right Side Chess Image */}
        <div className="absolute right-[-10%] sm:right-0 md:right-12 lg:right-24 xl:right-70 bottom-[-5%] sm:bottom-[-10%] md:bottom-[-10%] w-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[25%] z-[-1] pointer-events-none mix-blend-screen mix-blend-lighten opacity-30 md:opacity-100">
          <img 
            src={homepageimg1} 
            alt="Chess Pieces" 
            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
          />
        </div>

      </div>
    </section>
  );
};

export default VerticalsSection;
