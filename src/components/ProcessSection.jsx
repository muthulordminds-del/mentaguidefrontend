import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Strategic Assessment & Planning',
    description: 'Establish a foundation for growth by developing clear strategic roadmaps, optimizing business models, and identifying market expansion opportunities through comprehensive advisory services.',
  },
  {
    number: '02',
    title: 'Operational Optimization',
    description: 'Analyze and refine core business processes, resolve bottlenecks, and implement supply chain management improvements to drive efficiency, productivity, and reduced costs.',
  },
  {
    number: '03',
    title: 'Financial & Governance Foundation',
    description: 'Build integrity and transparency by establishing robust accounting, budgeting, and financial planning systems alongside strong corporate governance and secretarial compliance practices.',
  },
  {
    number: '04',
    title: 'Risk Mitigation & Restructuring',
    description: 'Fortify the business through proactive risk management, crisis planning, and necessary corporate restructuring to ensure stability and agility amidst changing market demands.',
  },
  {
    number: '05',
    title: 'Sustainability & Market Validation',
    description: 'Achieve long-term value by integrating EHS  practices, securing necessary certifications (ISO, Export, etc.), and conducting thorough due diligence to support confident, sustainable decision-making.',
  },
];

const ProcessSection = () => {
  return (
    <section className="min-h-screen h-full w-full snap-start relative font-sans overflow-y-auto bg-[#0a0a0a] flex items-start md:items-center">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] bg-[#a4d64f]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#a4d64f]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col pt-24 pb-32 md:py-24 lg:py-28 px-6 sm:px-8 md:pl-32 lg:pl-48 xl:pl-56 md:pr-12 lg:pr-16 max-w-[1600px] mx-auto">

        {/* Heading */}
        <div className="mb-12 md:mb-16 lg:mb-20 max-w-3xl">
          <h3 className="text-[#a4d64f] font-gilroy font-bold tracking-widest uppercase text-xs md:text-sm lg:text-base mb-2 md:mb-3">
            How We Work
          </h3>
          <h2 className="text-white font-gilroy font-black tracking-tight text-3xl sm:text-4xl md:text-5xl xl:text-[3.5rem] leading-tight mb-3 md:mb-4">
            Our <span className="text-[#a4d64f]">Process</span>
          </h2>
          <p className="text-gray-400 font-medium text-sm md:text-base lg:text-lg">
            A simple, step-by-step approach designed to take you from consultation to certification with clarity and confidence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (mobile) / Horizontal line (desktop) */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-[2px] bg-gradient-to-r from-[#a4d64f]/0 via-[#a4d64f]/40 to-[#a4d64f]/0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-6">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex lg:flex-col gap-5 lg:gap-0 group">
                {/* Mobile vertical connector */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-14 -bottom-6 sm:-bottom-8 w-[2px] bg-gradient-to-b from-[#a4d64f]/40 to-[#a4d64f]/0" />
                )}

                {/* Circle indicator */}
                <div className="shrink-0 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-[#a4d64f] flex items-center justify-center font-gilroy font-black text-[#a4d64f] text-lg group-hover:bg-[#a4d64f] group-hover:text-[#0a0a0a] transition-all duration-300 shadow-[0_0_30px_-8px_rgba(164,214,79,0.6)]">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 lg:mt-6 lg:pr-4 pb-2 lg:pb-0">
                  <h4 className="text-white font-gilroy font-bold text-lg sm:text-xl mb-2 group-hover:text-[#a4d64f] transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
