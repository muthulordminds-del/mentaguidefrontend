import React from 'react';
import { contactherobg, telephone1, telephone2 } from '../../assets/images';

const ContactHeroSection = () => {
    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center md:justify-end overflow-hidden pt-20 md:pt-0"
            style={{
                backgroundImage: `url(${contactherobg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col md:flex-row items-center justify-between">
                {/* Left side text/content */}
                <div className="w-full md:w-1/2 z-10 text-white flex flex-col justify-center items-start pt-10 md:pt-0 pb-10 md:pb-0 pl-4 md:pl-16 lg:pl-24">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black font-gilroy leading-tight mb-6 tracking-wide drop-shadow-md">
                        Let's Talk
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl font-light opacity-90 max-w-lg leading-relaxed drop-shadow-sm">
                        Have questions or planning to get started with your certification process? We're here to help you at every step.
                    </p>
                </div>

                {/* Right side telephone images */}
                <div className="hidden md:flex w-full md:w-1/2 justify-center md:justify-end items-center relative mt-10 md:mt-0 z-10">
                    <div className="relative w-[80%] max-w-[400px] lg:max-w-[500px] hover:scale-105 transition-transform duration-500">
                        {/* Base telephone image */}
                        <img
                            src={telephone1}
                            alt="Vintage Telephone Base"
                            className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-300 scale-150"
                        />
                        {/* Second telephone image, positioned absolutely over the first or as needed */}
                        <img
                            src={telephone2}
                            alt="Vintage Telephone Handset"
                            className="absolute top-[-15%] left-[-7%] w-full h-auto object-contain drop-shadow-xl animate-ring scale-90 origin-center"
                        />
                    </div>
                </div>
            </div>

            {/* Optional overlay if needed to match design perfectly */}
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none"></div>
        </section>
    );
}

export default ContactHeroSection;