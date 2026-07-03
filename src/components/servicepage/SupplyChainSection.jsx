import React from 'react';
import { compliance1, industrycertifications1 } from '../../assets/images';
import { Link } from 'react-router-dom';

const SupplyChainSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white w-full flex justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[85rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Supply Chain & Logistics */}
          <div className="bg-[#f0f2f4] rounded-3xl overflow-hidden flex flex-col border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="h-56 sm:h-64 lg:h-72 w-full">
              <img src={compliance1} alt="Compliance & Sustainability" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 sm:p-10 flex flex-col flex-grow">
              <h3 className="text-2xl sm:text-[1.75rem] font-bold text-[#142033] font-gilroy mb-4">
                Compliance & Sustainability
              </h3>
              <p className="text-[#5b6a7a] mb-6 leading-[1.8] text-[0.95rem] font-medium max-w-sm">
                Helping organizations meet statutory, industry, and global compliance standards.
              </p>
              
              <div className="flex flex-col gap-4">
                {/* Box 1 */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl flex items-start gap-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-white">
                  <div className="shrink-0 text-[#142033] pt-1">
                    <svg className="w-[1.4rem] h-[1.4rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#142033] font-bold text-[0.95rem] mb-1">Global Certifications</h4>
                    <p className="text-[#5b6a7a] text-sm leading-relaxed font-medium">ISO Certification, Trademark Registration, and ESG Consulting.</p>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl flex items-start gap-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-white">
                  <div className="shrink-0 text-[#142033] pt-1">
                    <svg className="w-[1.4rem] h-[1.4rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="9" y1="9" x2="9" y2="15"></line>
                      <line x1="15" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#142033] font-bold text-[0.95rem] mb-1">Regulatory Compliance</h4>
                    <p className="text-[#5b6a7a] text-sm leading-relaxed font-medium">End-to-end guidance to maintain statutory regulations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Strategic Consulting */}
          <div className="bg-[#271247] rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="h-56 sm:h-64 lg:h-72 w-full">
              <img src={industrycertifications1} alt="Industry Certifications" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 sm:p-10 flex flex-col flex-grow">
              <h3 className="text-2xl sm:text-[1.75rem] font-bold text-white font-gilroy mb-4">
                Industry Certifications
              </h3>
              <p className="text-[#788898] mb-6 leading-[1.8] text-[0.95rem] font-medium max-w-sm">
                We help businesses obtain industry certifications required for compliance and market expansion.
              </p>
              
              <div className="flex flex-col flex-grow">
                {[
                  'ISO 9001 Quality Management', 
                  'HACCP & Food Safety', 
                  'GMP Standards', 
                  'Global Export Certifications'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-[#23293e] last:border-0">
                    <span className="text-[#cfd6df] text-[0.95rem] font-medium">{item}</span>
                    <svg className="w-5 h-5 text-[#bcf56a] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                ))}
              </div>
              
              <Link to="/service/industry-certifications" className="w-full mt-8 py-4 bg-[#bcf56a] hover:bg-[#a6e053] text-[#121625] font-bold rounded-xl transition-colors text-[0.95rem] text-center block">
                Explore Certifications
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupplyChainSection;
