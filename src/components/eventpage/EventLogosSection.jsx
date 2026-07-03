import React from 'react';
import {
  Sedexlogo,
  BSCIlogo,
  GOTSlogo,
  OCSlogo,
  SA8000logo,
  WRAPlogo,
  Halallogo,
} from '../../assets/images';

const logos = [
  { src: Sedexlogo, alt: 'Sedex' },
  { src: BSCIlogo, alt: 'BSCI' },
  { src: GOTSlogo, alt: 'GOTS' },
  { src: OCSlogo, alt: 'OCS' },
  { src: SA8000logo, alt: 'SA8000' },
  { src: WRAPlogo, alt: 'WRAP' },
  { src: Halallogo, alt: 'Halal' },
  { src: Sedexlogo, alt: 'Sedex 2' }, // Repeating one to make an even 8 for the 4x2 grid
];

const EventLogosSection = () => {
  return (
    <section className="w-full bg-[#faf9f8] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 border-t border-l border-gray-200 bg-white sm:grid-cols-3 md:grid-cols-4">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center border-r border-b border-gray-200 p-8 sm:p-10"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 max-w-full object-contain grayscale transition-all duration-300 hover:grayscale-0 sm:max-h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventLogosSection;
