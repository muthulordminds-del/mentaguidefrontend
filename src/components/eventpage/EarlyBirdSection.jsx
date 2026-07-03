import React, { useState, useEffect, useMemo } from 'react';
import { FaRegClock } from 'react-icons/fa';

const summitStart = new Date('2026-03-15T09:00:00-04:00').getTime();

const getTimeLeft = () => {
  const distance = Math.max(summitStart - Date.now(), 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
};

const EarlyBirdSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const countdown = useMemo(
    () => [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds },
    ],
    [timeLeft]
  );

  return (
    <section className="w-full bg-[#faf9f8] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center rounded-2xl border border-[#ffe0c3] bg-[#fff8f1] px-6 py-12 shadow-sm sm:px-10">
        
        {/* Title */}
        <div className="flex items-center gap-3">
          <FaRegClock className="text-2xl text-[#f47a00] sm:text-3xl" aria-hidden="true" />
          <h2 className="font-gilroy text-2xl font-black text-[#1c0d03] sm:text-3xl">
            Early Bird Pricing Ends Soon!
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          {countdown.map((item) => (
            <div
              key={item.label}
              className="flex h-[88px] w-[80px] flex-col items-center justify-center rounded-xl bg-white shadow-[0_8px_24px_rgba(149,157,165,0.15)] sm:h-[104px] sm:w-[96px]"
            >
              <span className="font-gilroy text-3xl font-black leading-none text-[#f47a00] sm:text-4xl">
                {item.value}
              </span>
              <span className="mt-2 font-gilroy-light text-[10px] font-black uppercase tracking-wide text-gray-500 sm:text-[11px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-10 text-center">
          <p className="font-gilroy-light text-sm font-semibold text-[#1c0d03] sm:text-base">
            Need help choosing? <span className="text-gray-600">Contact our support team</span>
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 font-gilroy text-sm font-bold sm:gap-4 sm:text-base">
            <a href="mailto:tickets@example.com" className="text-[#f47a00] transition hover:text-[#d66a00]">
              tickets@example.com
            </a>
            <span className="hidden text-gray-300 sm:inline">|</span>
            <a href="tel:+15551234567" className="text-[#f47a00] transition hover:text-[#d66a00]">
              +1 (555) 123-4567
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EarlyBirdSection;
