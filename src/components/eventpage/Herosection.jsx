import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { eventherosectionbg } from '../../assets/images';
import { AppContext } from '../../context/AppContext';

const summitStart = new Date('2026-08-11T11:11:00+05:30').getTime();

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
  const { isLoggedIn } = useContext(AppContext);

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
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#090704] px-4 pt-24 pb-6 text-white sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${eventherosectionbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,3,0.95)_0%,rgba(7,6,3,0.78)_32%,rgba(7,6,3,0.54)_58%,rgba(7,6,3,0.9)_100%)]" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center text-center">
        <div className="mx-auto max-w-4xl pt-4 sm:pt-8 lg:pt-0">
          <h1 className="font-gilroy text-[clamp(1.75rem,5vw,3.5rem)] font-black leading-[1.08] text-white drop-shadow-[0_3px_0_rgba(9,65,145,0.85)]">
            Expand 360<sup className="relative align-baseline">²</sup>
            <span className="block">Discover. Connect. Grow.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-gilroy-light text-xs font-semibold leading-7 text-white sm:text-sm md:text-base">
            An exclusive business forum bringing together entrepreneurs, industry experts, investors, and policymakers to exchange ideas, build strategic partnerships, and shape the future of sustainable business growth.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 text-base font-bold sm:flex-row sm:gap-10 md:text-lg">
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-[#ff7a00]" aria-hidden="true" />
              <span className="text-[#ff7a00] underline-offset-2 hover:underline hover:text-[#ff8d22] transition-colors">August 11, 11 AM 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#ff7a00]" aria-hidden="true" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Merlis+Hotel%2C+61%2C+Avinashi+Road%2C+Goldwins%2C+Coimbatore%2C+Tamil+Nadu+-+641014"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff7a00] underline-offset-2 hover:underline hover:text-[#ff8d22] transition-colors"
              >
                Merlis Hotel, Sitra, Coimbatore
              </a>
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

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:mt-13 sm:w-auto sm:flex-row">
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
      </div>

      {/* Event-only footer: stays in the hero's document flow at every zoom level. */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 pt-5 text-white md:flex-row md:items-end md:gap-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {!isLoggedIn && (
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="font-gilroy text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#a4d64f] sm:text-base"
            >
              Login
            </button>
          )}
          <button
            type="button"
            onClick={() => navigate('/event-registration')}
            className="rounded-full bg-[#a4d64f] px-5 py-2 text-xs font-black uppercase tracking-widest text-[#202523] shadow-[0_4px_14px_rgba(164,214,79,0.3)] transition hover:-translate-y-1 hover:bg-[#b5e663] sm:px-6 sm:py-2.5"
          >
            Register Now
          </button>
        </div>

        <div className="flex flex-col items-center gap-1 text-center font-gilroy text-sm font-bold tracking-wide sm:flex-row sm:gap-3 sm:text-base md:items-end md:text-right">
          <a href="tel:+917708505529" className="transition-colors hover:text-[#a4d64f]">+91 7708505529</a>
          <span className="hidden opacity-50 sm:inline">|</span>
          <a href="mailto:info@mentaguide.com" className="transition-colors hover:text-[#a4d64f]">info@mentaguide.com</a>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
