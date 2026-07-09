import React from 'react';
import { Link } from 'react-router-dom';
import { businessgrowth1, finance1, ipo1, compliance1 } from '../../assets/images';

const Managementsection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-[#f4f7f9] w-full flex justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[85rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Crisis & Risk Management */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
            <Link to={`/service/business-growth-consultancy`} className="flex flex-col group cursor-pointer bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 h-full overflow-hidden">
              <div className="h-56 sm:h-64 lg:h-72 w-full overflow-hidden">
                <img src={businessgrowth1} alt="Business Growth Consultancy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-grow relative">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[1rem] bg-[#fff8f2] border border-[#ffe4ce] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#f7811d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[1.8rem] font-bold text-[#0c223a] font-gilroy leading-tight">
                    Business Growth Consultancy
                  </h3>
                </div>
                
                <p className="text-[#5b6a7a] mb-5 leading-[1.8] text-[0.95rem] sm:text-base font-medium">
                  Our consultancy services focus on business transformation, operational efficiency, corporate restructuring, and risk management solutions.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                  {[
                    "Business Strategy",
                    "Growth Planning",
                    "Risk Management",
                    "Mergers & Acquisitions"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-[1.15rem] h-[1.15rem] text-[#f7811d] shrink-0 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#4b5a69] text-[0.95rem] font-semibold leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          {/* Card 2: Finance & Taxation */}
          <div className="lg:col-span-5 bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 mt-6 lg:mt-0">
            <Link to={`/service/finance-taxation-corporate-affairs`} className="flex flex-col group cursor-pointer bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 h-full overflow-hidden">
              <div className="h-56 sm:h-64 lg:h-72 w-full overflow-hidden">
                <img src={finance1} alt="Finance, Taxation & Corporate Affairs" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-5 mb-6">
                  <div className="shrink-0 flex items-center justify-center pt-2">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#0092ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[1.8rem] font-bold text-[#0c223a] font-gilroy leading-tight">
                    Finance, Taxation & Corporate Affairs
                  </h3>
                </div>
                
                <p className="text-[#5b6a7a] mb-6 leading-[1.8] text-[0.95rem] sm:text-base font-medium">
                  We handle accounting, bookkeeping, GST registration, MCA filings, and corporate compliance management.
                </p>
                
                <div className="flex flex-col gap-3">
                  {[
                    "Accounting",
                    "GST Filing",
                    "Company Incorporation"
                  ].map((item, index) => (
                    <Link to="/service/finance-taxation-corporate-affairs" key={index} className="flex items-center justify-between px-6 py-4 sm:py-5 border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] rounded-2xl hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer bg-white group">
                      <span className="text-[#324050] text-[0.95rem] font-semibold">{item}</span>
                      <svg className="w-[1.1rem] h-[1.1rem] text-gray-400 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </Link>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-6 lg:mt-8">

          {/* Card 3: IPO Advisory (SME & Mainboard) */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
            <Link to={`/service/ipo-advisory`} className="flex flex-col group cursor-pointer bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 h-full overflow-hidden">
              <div className="h-56 sm:h-64 lg:h-72 w-full overflow-hidden">
                <img src={ipo1} alt="IPO Advisory (SME & Mainboard)" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-grow relative">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[1rem] bg-[#fff8f2] border border-[#ffe4ce] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#f7811d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 3v18h18M7 15l4-4 3 3 5-6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[1.8rem] font-bold text-[#0c223a] font-gilroy leading-tight">
                    IPO Advisory (SME & Mainboard)
                  </h3>
                </div>
                
                <p className="text-[#5b6a7a] mb-5 leading-[1.8] text-[0.95rem] sm:text-base font-medium">
                  Complete IPO advisory covering readiness assessment, strategy, regulatory compliance, and execution support for SME and Mainboard listings.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                  {[
                    "IPO Readiness",
                    "IPO Strategy & Roadmap",
                    "Regulatory Compliance",
                    "IPO Execution Support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-[1.15rem] h-[1.15rem] text-[#f7811d] shrink-0 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#4b5a69] text-[0.95rem] font-semibold leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-7 border-t border-gray-100">
                  <h4 className="mb-5 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#0c223a]">
                    Ideal For
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {[
                      "Companies planning a Main Board IPO",
                      "Fast-growing SMEs",
                      "Mid-sized enterprises",
                      "Family-owned businesses transitioning",
                      "Export-led businesses"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#fff8f2] border border-[#ffe4ce] text-[#f7811d] font-bold text-[0.7rem] shrink-0">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[#5b6a7a] text-[0.9rem] font-medium leading-snug pt-[2px]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 4: Compliance & Sustainability */}
          <div className="lg:col-span-5 bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 mt-6 lg:mt-0">
            <Link to={`/service/compliance-certification-sustainability`} className="flex flex-col group cursor-pointer bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 h-full overflow-hidden">
              <div className="h-56 sm:h-64 lg:h-72 w-full overflow-hidden">
                <img src={compliance1} alt="Compliance, Certification & Sustainability" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-5 mb-6">
                  <div className="shrink-0 flex items-center justify-center pt-2">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#0092ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[1.8rem] font-bold text-[#0c223a] font-gilroy leading-tight">
                    Compliance & Sustainability
                  </h3>
                </div>
                
                <p className="text-[#5b6a7a] mb-6 leading-[1.8] text-[0.95rem] sm:text-base font-medium">
                  ISO certification, trademark registration, regulatory compliance, and ESG consulting for sustainable business growth.
                </p>
                
                <div className="flex flex-col gap-3">
                  {[
                    "ISO Certification",
                    "Trademark Registration",
                    "ESG Consulting"
                  ].map((item, index) => (
                    <Link to="/service/compliance-certification-sustainability" key={index} className="flex items-center justify-between px-6 py-4 sm:py-5 border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] rounded-2xl hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer bg-white group">
                      <span className="text-[#324050] text-[0.95rem] font-semibold">{item}</span>
                      <svg className="w-[1.1rem] h-[1.1rem] text-gray-400 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Managementsection;