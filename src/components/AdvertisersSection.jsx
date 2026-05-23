import React from 'react';
import {
  homepagebg5,
  Sedexlogo,
  BSCIlogo,
  GOTSlogo,
  Halallogo,
  OCSlogo,
  SA8000logo,
  WRAPlogo,
} from '../assets/images';

const AdvertisersSection = () => {
  const logos = [
    { src: Sedexlogo, alt: 'Sedex' },
    { src: BSCIlogo, alt: 'BSCI' },
    { src: GOTSlogo, alt: 'GOTS' },
    { src: OCSlogo, alt: 'OCS' },
    { src: SA8000logo, alt: 'SA8000' },
    { src: WRAPlogo, alt: 'WRAP' },
     { src: Halallogo, alt: 'Halal' },
  ];

  return (
    <section className="h-screen w-full snap-start relative font-sans overflow-hidden flex items-center justify-center bg-[#eaa73b]">
      {/* Background Image (Leaf & Orange Base) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${homepagebg5})` }}
      />

      {/* Main Content Wrapper - generous top/bottom padding so title + logos clear the navbar and bottom bar */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center pt-24 pb-28 md:pt-28 md:pb-32 lg:pt-32 lg:pb-36 px-6 sm:px-12 md:px-28 lg:px-36 xl:px-48 max-w-[1600px] mx-auto">

        {/* Title */}
        <div className="w-full text-center mb-6 md:mb-10 lg:mb-12">
          <h2 className="text-[#2b2b2b] text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-gilroy font-bold tracking-tight">
            Certifications We Support.
          </h2>
          <p className="text-[#2b2b2b]/70 font-medium text-sm md:text-base lg:text-lg mt-2 max-w-2xl mx-auto">
            Globally recognized standards we help our clients achieve.
          </p>
        </div>

        {/* Logos Grid - 3 columns, centered */}
        <div className="grid grid-cols-3 gap-x-6 sm:gap-x-10 md:gap-x-14 gap-y-6 md:gap-y-8 place-items-center max-w-3xl mx-auto w-full">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-full group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdvertisersSection;
