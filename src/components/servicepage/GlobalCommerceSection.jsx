import React from 'react';
import { globalimg1, globalimg2 } from '../../assets/images';

const GlobalCommerceSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-[#f4f7f9] to-white w-full flex justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[85rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Card 1: Compliance */}
          <div className="lg:col-span-4 bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
            <div className="h-48 sm:h-56 lg:h-[18rem] w-full overflow-hidden bg-gray-100">
              <img src={globalimg1} alt="Compliance" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-grow">
              {/* Document Icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <h3 className="text-2xl sm:text-[1.75rem] font-bold text-[#0c223a] font-gilroy mb-4">
                Compliance
              </h3>

              <p className="text-[#5b6a7a] mb-8 leading-[1.8] text-[0.95rem] font-medium">
                Ensuring your documentation meets every regulatory requirement with surgical precision.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1.5 bg-[#f3e8ff] text-[#9333ea] text-[0.65rem] sm:text-xs font-bold tracking-widest uppercase rounded">
                  Regulatory
                </span>
                <span className="px-3 py-1.5 bg-[#e0f2fe] text-[#0284c7] text-[0.65rem] sm:text-xs font-bold tracking-widest uppercase rounded">
                  Legal Support
                </span>
                <span className="px-3 py-1.5 bg-[#ffedd5] text-[#ea580c] text-[0.65rem] sm:text-xs font-bold tracking-widest uppercase rounded">
                  Audit Ready
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Export & Import Solutions */}
          <div className="lg:col-span-8 bg-gradient-to-r from-[#0F172A] via-[#131B2E] to-[#8B5CF6] rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] overflow-hidden relative flex flex-col justify-center transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-[#232a42]">

            {/* Background Image on the right half */}
            <div className="absolute top-0 right-0 w-full lg:w-[50%] h-full opacity-60 pointer-events-none">
              <img src={globalimg2} className="w-full h-full object-cover" alt="Logistics" />
              {/* Gradient to fade the image into the background from the left */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#131B2E] via-[#131B2E]/90 to-transparent"></div>
              {/* Gradient to fade from the top for mobile */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#131B2E]/40 via-transparent to-[#131B2E] lg:hidden"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-10 lg:p-14 lg:w-[60%] h-full flex flex-col justify-center">

              {/* Globe Icon + text */}
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-[#0092ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="font-bold text-[#0092ff] text-xs sm:text-sm tracking-[0.15em] uppercase font-gilroy">
                  Global Commerce
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white font-gilroy mb-6 leading-[1.15]">
                Export & Import<br className="hidden sm:block" /> Solutions
              </h2>

              {/* Description */}
              <p className="text-[#8495a6] mb-10 leading-[1.8] text-[0.95rem] sm:text-[1.05rem] font-medium max-w-md lg:max-w-[90%]">
                Navigating the complexities of international trade with structured logistics and regulatory coordination.
              </p>

              {/* Bullet points */}
              <div className="flex flex-col gap-4 mt-auto lg:mt-0">
                {[
                  "Logistics coordination",
                  "Trade regulation support",
                  "Market access assistance"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    {/* Glowing dot */}
                    <div className="relative flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0092ff]"></div>
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-[#0092ff] animate-ping opacity-70"></div>
                    </div>
                    <span className="text-white text-[0.95rem] font-semibold">{item}</span>
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

export default GlobalCommerceSection;
