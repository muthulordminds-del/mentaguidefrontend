import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { eventherosectionbg } from '../../assets/images';

const summitStart = new Date('2026-08-11T11:11:00+05:30').getTime();

const sponsors = ['Alitalia', 'LEXMARK', 'signifyhealth', 'VIATRIS', 'ROHTO', 'chewy'];

const getTimeLeft = () => {
  const distance = Math.max(summitStart - Date.now(), 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
};

const Herosection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const navigate = useNavigate();

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
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#090704] px-4 py-24 text-white sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${eventherosectionbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,3,0.95)_0%,rgba(7,6,3,0.78)_32%,rgba(7,6,3,0.54)_58%,rgba(7,6,3,0.9)_100%)]" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <div className="mx-auto max-w-4xl pt-4 sm:pt-8 lg:pt-0">
          <h1 className="font-gilroy text-[clamp(1.75rem,5vw,3.5rem)] font-black leading-[1.08] text-white drop-shadow-[0_3px_0_rgba(9,65,145,0.85)]">
            MentaGuide Business Horizons 2026
            <span className="block">Discover. Connect. Grow.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-gilroy-light text-xs font-semibold leading-7 text-white sm:text-sm md:text-base">
            An exclusive business forum bringing together entrepreneurs, industry experts, investors, and policymakers to exchange ideas, build strategic partnerships, and shape the future of sustainable business growth.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 text-xs font-bold sm:flex-row sm:gap-10 md:text-sm">
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-[#ff7a00]" aria-hidden="true" />
              <span>August 11, 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#ff7a00]" aria-hidden="true" />
              <span>Merlis Hotel, Coimbatore</span>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <p className="font-gilroy text-xs font-black uppercase tracking-wide text-white sm:text-sm">Event Starts In</p>

          <div className="mx-auto mt-6 grid w-full max-w-[520px] grid-cols-4 gap-2 sm:gap-4 md:gap-6">
            {countdown.map((item) => (
              <div
                key={item.label}
                className="flex aspect-square flex-col items-center justify-center rounded-lg border border-white/20 bg-[#2b221f]/90 px-1 shadow-[0_14px_35px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-3"
              >
                <span className="font-gilroy text-xl font-black leading-none text-white sm:text-3xl md:text-4xl">{item.value}</span>
                <span className="mt-1.5 sm:mt-3 text-[9px] font-bold uppercase tracking-wider text-white/95 sm:text-[11px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex w-full flex-col items-center justify-center gap-4 sm:mt-20 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={() => navigate('/event-registration')}
            className="w-full rounded-md bg-[#ff7a00] px-6 py-3 text-center font-gilroy text-sm font-black text-white shadow-[0_14px_28px_rgba(255,122,0,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ff8d22] sm:w-auto sm:min-w-40"
          >
            Secure Your Seats
          </button>
          <a
            href="#speakers"
            className="w-full rounded-md border border-white/90 px-6 py-3 text-center font-gilroy text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#111] sm:w-auto sm:min-w-36"
          >
            View Speakers
          </a>
          <a
            href="https://docs.google.com/forms/d/1LPv3U85IbwZEmBKiPm-MR_17FozT3-nehEQE65c0KKg/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-md border border-white/90 px-6 py-3 text-center font-gilroy text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#111] sm:w-auto sm:min-w-36"
          >
            Feedback
          </a>
        </div>

        <p className="mt-6 max-w-xl text-center text-[11px] italic leading-6 text-white/90 sm:text-xs">
          Limited to 30 Executive Participants
        </p>

        <div className="mt-12 w-full border-t border-white/15 pt-8 text-left sm:mt-14 lg:mt-16">
          <p className="text-[10px] font-black uppercase tracking-wider text-white/85 sm:text-[11px]">
            Proudly Supported By Industry Leaders
          </p>
          <div className="mt-7 grid grid-cols-2 items-center gap-x-8 gap-y-6 opacity-75 sm:grid-cols-3 md:grid-cols-6">
            {sponsors.map((sponsor) => (
                <span
                  key={sponsor}
                  className="text-center font-gilroy text-lg font-black text-white/80 grayscale sm:text-xl md:text-2xl"
                >
                {sponsor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;