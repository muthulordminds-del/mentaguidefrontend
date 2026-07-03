import React from 'react';
import { FaUsers, FaUserTie, FaGlobe, FaCalendarAlt, FaShieldAlt } from 'react-icons/fa';
import { eventherosectionbg } from '../../assets/images';

const stats = [
  { icon: FaUsers, value: '5000', label: 'EXPECTED ATTENDEES' },
  { icon: FaUserTie, value: '85', label: 'EXPERT SPEAKERS' },
  { icon: FaGlobe, value: '25', label: 'COUNTRIES REPRESENTED' },
  { icon: FaCalendarAlt, value: '3', label: 'DAYS OF EXCELLENCE' },
];

const CallToActionSection = () => {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#090704] px-4 py-24 text-white sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${eventherosectionbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        
        {/* Header */}
        <h2 className="font-gilroy text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
          Ready to Transform Your<br className="hidden sm:block" /> Professional Network?
        </h2>
        <p className="mx-auto mt-6 max-w-3xl font-gilroy-light text-sm font-semibold leading-relaxed text-gray-200 sm:text-base md:text-lg">
          Join industry leaders and innovators at the premier professional development conference. Secure your place among 5,000+ forward-thinking professionals from 25+ countries.
        </p>

        {/* Stats Card */}
        <div className="mt-14 w-full rounded-2xl bg-[#222222]/90 px-6 py-12 shadow-2xl backdrop-blur-md sm:px-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3a2818]">
                  <stat.icon className="text-xl text-[#f47a00]" aria-hidden="true" />
                </div>
                <p className="mt-6 font-gilroy text-3xl font-black text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-gray-400 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center">
          <h3 className="font-gilroy text-2xl font-black text-white sm:text-3xl">
            Early Bird Registration Ends Soon
          </h3>
          <p className="mx-auto mt-4 max-w-xl font-gilroy-light text-sm text-gray-300 sm:text-base">
            Secure your spot at the exclusive rate. Limited availability for premium networking sessions and workshop access.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <button className="w-full rounded-full bg-[#f47a00] px-8 py-4 font-gilroy text-sm font-black uppercase tracking-wide text-white shadow-[0_10px_20px_rgba(244,122,0,0.3)] transition hover:-translate-y-0.5 hover:bg-[#ff8b1e] sm:w-auto">
              REGISTER NOW
            </button>
            <button className="w-full rounded-full border border-gray-400 bg-transparent px-8 py-4 font-gilroy text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black sm:w-auto">
              DOWNLOAD BROCHURE
            </button>
          </div>

          {/* Footer Text */}
          <div className="mt-12 flex items-center justify-center gap-2 border-t border-white/10 pt-6 text-[10px] text-gray-400 sm:text-xs">
            <FaShieldAlt className="text-[#f47a00]" />
            <span>Secure payment processing • Full refund policy • ISO certified event management</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallToActionSection;
