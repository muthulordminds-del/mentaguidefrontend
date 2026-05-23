import React from 'react';
import { homepagebg2 } from '../assets/images';

const VisionSection = () => {
  return (
    <section className="min-h-screen w-full relative bg-[#0a0a0a] font-sans text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-[right_center]"
        style={{ backgroundImage: `url(${homepagebg2})` }}
      />

      {/* Orbiting Circles */}
      <div className="absolute top-1/2 right-[-20%] sm:right-[-10%] md:right-[-5%] lg:right-[5%] xl:right-[5%] -translate-y-1/2 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] xl:w-[750px] xl:h-[750px] rounded-full flex items-center justify-center pointer-events-none z-0 mix-blend-screen opacity-40 md:opacity-60">
        {/* Ring 1 (largest) */}
        <div className="absolute w-[95%] h-[95%] rounded-full border border-white/10 animate-[spin_25s_linear_infinite]">
          <div className="absolute -top-[5px] left-1/2 w-2 h-2 md:w-2.5 md:h-2.5 bg-cyan-400 rounded-full -translate-x-1/2 shadow-[0_0_12px_#22d3ee]" />
        </div>
        {/* Ring 2 */}
        <div className="absolute w-[75%] h-[75%] rounded-full border border-white/10 animate-[spin_20s_linear_infinite_reverse]">
          <div className="absolute top-[14%] right-[14%] w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_#ef4444]" />
        </div>
        {/* Ring 3 */}
        <div className="absolute w-[55%] h-[55%] rounded-full border border-white/10 animate-[spin_15s_linear_infinite]">
          <div className="absolute bottom-[10%] left-[15%] w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15]" />
          <div className="absolute bottom-1/2 -left-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444]" />
        </div>
        {/* Ring 4 (smallest) */}
        <div className="absolute w-[35%] h-[35%] rounded-full border border-white/10 animate-[spin_12s_linear_infinite_reverse]">
          <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
        </div>
      </div>

      {/* Main Content */}
      <main className="absolute top-1/2 left-0 md:left-32 lg:left-48 xl:left-56 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl transform -translate-y-1/2 w-full px-6 sm:px-8 md:px-0 z-10">
        <h3 className="text-[#a4d64f] font-bold tracking-[0.15em] text-base sm:text-lg mb-4 sm:mb-6 md:mb-8 uppercase">
          What We Do
        </h3>

        {/* <p className="text-[#ddd] font-gilroy-light text-base md:text-lg lg:text-[1.15rem] leading-relaxed mb-1">
          Lead the digital space through
        </p> */}

        <p className="text-white font-gilroy font-bold text-base sm:text-lg lg:text-[1.15rem] leading-[1.5] sm:leading-[1.6] mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          At MentaGuide, we help ambitious businesses step onto <span className="font-gilroy-light font-normal text-[#bbb]"> the global stage through practical certification consulting.
          </span>
        </p>

        <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] font-gilroy font-bold text-white leading-[1.1] sm:leading-tight tracking-tight max-w-full md:max-w-3xl">
          Our mission? <br className="hidden sm:block" />
          <span className="block mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-gilroy-light font-normal leading-relaxed text-[#ddd]">
            Export compliance can feel like a mountain of confusing paperwork. Our mission is to handle that complexity for you, making the entire certification process smooth and stress-free so you can focus entirely on growing your business and connecting with buyers worldwide.
          </span>
        </h2>
      </main>
    </section>
  );
};

export default VisionSection;
