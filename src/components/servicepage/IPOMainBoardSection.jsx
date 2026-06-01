import React from 'react';
import { IPOMainBoardbg } from '../../assets/images';

const IPOMainBoardSection = () => {
  return (
    <section 
      className="py-16 md:py-24 w-full flex justify-center relative bg-[#131722]"
      style={{
        backgroundImage: `url(${IPOMainBoardbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#0c101a]/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[85rem] relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">
          
          {/* Left Content */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 mb-8">
              <div className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-2xl bg-[#bcf56a] flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(188,245,106,0.3)]">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#142033]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 17l6-6 4 4 8-8m0 0v6m0-6h-6" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white font-gilroy leading-tight">
                IPO Main Board Assistance
              </h2>
            </div>
            
            <p className="text-[#aebac5] mb-12 leading-[1.8] text-[1.05rem] sm:text-[1.1rem] font-medium max-w-2xl">
              Preparing your enterprise for the ultimate milestone. We provide a rigorous framework for governance, readiness, and successful market entry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-8">
              {[
                "IPO readiness assessment",
                "Governance framework support",
                "Business transformation",
                "Internal control strengthening",
                "Compliance & documentation",
                "Investor readiness support",
                "Stakeholder coordination",
                "Reporting alignment"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="shrink-0 mt-[2px]">
                    <svg className="w-6 h-6 text-[#bcf56a]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                       <path d="M12 2l2.4 2.4 3.4-.6 1.4 3.1 3 1.8-1 3.3 2 2.8-2 2.8 1 3.3-3 1.8-1.4 3.1-3.4-.6L12 22l-2.4-2.4-3.4.6-1.4-3.1-3-1.8 1-3.3-2-2.8 2-2.8-1-3.3 3-1.8 1.4-3.1 3.4.6L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                       <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[#e2e8f0] text-[1rem] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - IDEAL FOR Card */}
          <div className="w-full lg:w-[35%] lg:ml-auto mt-6 lg:mt-0">
            <div className="bg-[#e4e6ea] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden h-full">
              <h4 className="text-[#142033] font-bold text-xs sm:text-sm tracking-[0.15em] uppercase mb-8 font-gilroy">
                IDEAL FOR
              </h4>
              
              <div className="flex flex-col gap-6">
                {[
                  "Companies planning a Main Board IPO",
                  "Fast-growing SMEs",
                  "Mid-sized enterprises",
                  "Family-owned businesses transitioning",
                  "Export-led businesses"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="w-9 h-9 rounded-full bg-[#d0f588] text-[#142033] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <span className="text-[#4b5a69] text-[0.95rem] sm:text-base font-medium leading-relaxed pt-1.5">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IPOMainBoardSection;
