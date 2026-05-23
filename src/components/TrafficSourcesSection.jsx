import React from 'react';
import { homepagebg4 } from '../assets/images';

const TrafficSourcesSection = () => {
  const reasons = [
    {
      title: 'Simple & Practical',
      desc: 'No textbook theories—just real, actionable steps for your workshop floor.'
    },
    {
      title: 'Focused on Trade',
      desc: 'We specialize strictly in export-driven requirements.'
    },
    {
      title: 'Zero Confusion',
      desc: 'We tell you exactly what you need to do, what to fix, and why.'
    },
    {
      title: 'Proven Results',
      desc: 'Committed to helping your facility hit international benchmarks smoothly.'
    }
  ];

  return (
    <section className="min-h-screen w-full relative font-sans overflow-hidden text-white flex items-center bg-[#1a0b2e]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-right z-0 opacity-80"
        style={{ backgroundImage: `url(${homepagebg4})` }}
      />

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full h-full flex items-center pointer-events-none py-20">

        {/* Left Side Content */}
        <div className="w-full pointer-events-auto px-8 md:px-0 md:pl-32 lg:pl-48 xl:pl-56 md:max-w-[850px] lg:max-w-[950px] xl:max-w-[1050px]">
          <h3 className="text-[#a4d64f] font-bold tracking-widest text-sm md:text-base lg:text-lg mb-4 md:mb-6 uppercase font-gilroy">
            DOCUMENTATION & RELIABLE CONSULTING SUPPORT
          </h3>

          <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-gilroy font-bold leading-[1.1] tracking-tight mb-10 md:mb-14">
            Why Partner <span className="text-[#a4d64f]">With Us?</span>
          </h2>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-10">
            {reasons.map((r, index) => (
              <div
                key={index}
                className="group relative pl-6 border-l-2 border-[#a4d64f]/40 hover:border-[#a4d64f] transition-colors"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#a4d64f] shadow-[0_0_12px_#a4d64f]" />
                <h4 className="font-gilroy font-bold text-xl md:text-2xl text-white group-hover:text-[#a4d64f] transition-colors mb-2">
                  {r.title}
                </h4>
                <p className="text-[#cfcfcf] font-gilroy-light leading-relaxed text-sm md:text-base">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrafficSourcesSection;
