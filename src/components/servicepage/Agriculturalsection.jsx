import React from 'react';
import { agriculturalimg, agriculturalbg } from '../../assets/images';

const Agriculturalsection = () => {
  return (
    <section 
      className="py-12 md:py-20 w-full flex justify-center relative"
      style={{
        backgroundImage: `url(${agriculturalbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[85rem]">
        
        {/* Main Card */}
        <div className="bg-[#fffdf9] rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto min-h-[300px] lg:min-h-[500px]">
            <img 
              src={agriculturalimg} 
              alt="Agricultural Export Solutions" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
            
            {/* Background subtle texture/color if needed */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fffdfa] to-[#fcfaf7] pointer-events-none -z-10"></div>
            
            {/* Icon */}
            <div className="mb-6 text-[#ff7115]">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="7" cy="16" r="4"></circle>
                <circle cx="18" cy="16" r="3"></circle>
                <path d="M11 16h4"></path>
                <path d="M7 12V6h4l4 4h4v3"></path>
                <path d="M7 6h4"></path>
                <path d="M3 12h4"></path>
              </svg>
            </div>
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#0c2138] font-gilroy mb-5 leading-tight">
              Agricultural Export Solutions
            </h2>
            
            {/* Description */}
            <p className="text-[#5a6a7c] mb-12 leading-[1.8] text-[0.95rem] sm:text-[1.05rem] font-medium max-w-lg">
              Facilitating global market expansion for agricultural producers through quality standards and strategic buyer identification.
            </p>
            
            {/* Two small cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Quality Standards Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col justify-start h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <h4 className="text-[#ff7115] font-bold text-sm tracking-widest uppercase mb-4 font-gilroy leading-relaxed">
                  Quality<br className="hidden sm:block" /> Standards
                </h4>
                <p className="text-[#4b5a69] text-sm sm:text-[0.95rem] leading-[1.75] font-medium">
                  Packaging and shelf-life optimization for long-distance international transit.
                </p>
              </div>

              {/* Market Access Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col justify-start h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <h4 className="text-[#0096ff] font-bold text-sm tracking-widest uppercase mb-4 font-gilroy leading-relaxed">
                  Market Access
                </h4>
                <p className="text-[#4b5a69] text-sm sm:text-[0.95rem] leading-[1.75] font-medium mt-auto sm:mt-0">
                  Strategic certification and identifying premium international buyer networks.
                </p>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Agriculturalsection;