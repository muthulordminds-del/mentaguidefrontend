import React, { useRef } from 'react';

const teamMembers = [
  { name: 'Tarang Bhargava', role: 'Founder' },
  { name: 'Stuart Carter', role: 'Director, Advertiser Sales (Global)' },
  { name: 'Koulik Kar', role: 'EA to CEO, Executive Office' },
  { name: 'Unnati Sobti', role: 'Sr. Manager, Affiliate Sales' },
  { name: 'Niharika Agrawal', role: 'Director, Affiliate Growth' },
  { name: 'Nuti Bhalla', role: 'Head, Advertiser Sales' },
  { name: 'Niharika Chhabra', role: 'Head, Advertiser Growth (India)' },
];

const TeamSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.flex-shrink-0');
      if (!card) return;
      const style = window.getComputedStyle(scrollRef.current);
      const gap = parseFloat(style.gap) || 0;
      const scrollAmount = card.offsetWidth + gap;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.flex-shrink-0');
      if (!card) return;
      const style = window.getComputedStyle(scrollRef.current);
      const gap = parseFloat(style.gap) || 0;
      const scrollAmount = card.offsetWidth + gap;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen w-full snap-start relative font-sans overflow-hidden bg-[#f3f1eb] flex flex-col justify-center">
      
      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full px-8 md:pl-28 lg:pl-36 xl:pl-48 pr-8 md:pr-16 lg:pr-24 max-w-[1700px] mx-auto pb-24 md:pb-32 lg:pb-40">
        
        {/* Title */}
        <div className="w-full flex justify-end mt-8 md:mt-12 lg:mt-20 mb-4 md:mb-6 lg:mb-8">
          <h2 className="text-[#2b2b2b] text-3xl md:text-4xl lg:text-[2.00rem] font-gilroy font-black tracking-tight pr-4 md:pr-12 lg:pr-20">
            Team.
          </h2>
        </div>
        
        {/* Carousel Container */}
        <div className="relative w-full flex items-center pr-4 md:pr-12 lg:pr-20">
          
          {/* Left Arrow Button */}
          <button 
            onClick={scrollLeft}
            className="absolute -left-2 md:-left-8 lg:-left-12 z-20 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 border border-[#a4d64f] rounded-full flex items-center justify-center text-[#a4d64f] hover:bg-[#a4d64f] hover:text-white transition-colors shadow-sm bg-[#f3f1eb]"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Track Container */}
          <div 
            ref={scrollRef}
            className="w-full flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth hidden-scrollbar py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`.hidden-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            
            {teamMembers.map((member, index) => (
              <div key={index} className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] snap-center flex flex-col group cursor-pointer">
                
                {/* Image Box Placeholder */}
                {/* Replace background with actual image -> <img src={member.img} className="w-full h-full object-cover" /> */}
                <div className="w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px] bg-[#e6e4df] rounded-sm mb-4 md:mb-6 overflow-hidden relative border border-[#e0ded8]">
                  <div className="absolute inset-0 flex items-center justify-center text-[#c2c0bb] group-hover:scale-105 transition-transform duration-500">
                    <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Member Info */}
                <h3 className="text-[#2b2b2b] font-gilroy font-black text-xl md:text-2xl lg:text-[1.35rem] tracking-tight mb-1">{member.name}</h3>
                <p className="text-[#757575] font-medium text-xs md:text-sm lg:text-[0.95rem]">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={scrollRight}
            className="absolute -right-2 md:-right-8 lg:-right-4 z-20 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 border border-[#a4d64f] rounded-full flex items-center justify-center text-[#a4d64f] hover:bg-[#a4d64f] hover:text-white transition-colors shadow-sm bg-[#f3f1eb]"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
