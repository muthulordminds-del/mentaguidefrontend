import React from 'react';
import { FaCalendarAlt, FaLightbulb, FaUsers } from 'react-icons/fa';
import { eventimg } from '../../assets/images';

const stats = [
  { value: '1', label: 'Day' },
  { value: '20+', label: 'Attendees' },
];

const highlights = [
  {
    icon: FaUsers,
    title: 'Global Networking',
    text: 'Connect with industry leaders from 60+ countries',
  },
  {
    icon: FaLightbulb,
    title: 'Innovation Showcase',
    text: 'Discover cutting-edge technologies and startups',
  },
];

const InnovationSummitSection = () => {
  return (
    <section className="w-full bg-[#fff8f1] px-4 py-16 text-[#1f160f] sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="max-w-2xl">
            <h2 className="font-gilroy text-[clamp(2rem,4.8vw,3.9rem)] font-black leading-[1.12] text-[#1c0d03]">
              Expand 360<sup className="relative align-baseline">²</sup>
            </h2>

            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-[#3f332b] sm:text-base">
              A premier business forum that brings together entrepreneurs, business leaders, investors, policymakers, and industry experts to explore new opportunities, share innovative ideas, and shape the future of business. The event is designed to foster meaningful collaboration, inspire strategic thinking, and promote sustainable growth across industries.
            </p>

            <p className="mt-5 max-w-xl text-xs leading-7 text-[#6f6259] sm:text-sm">
              Experience insightful keynote sessions, expert panel discussions, interactive workshops, and high-impact networking opportunities covering business strategy, finance, corporate governance, compliance, ESG, certifications, digital transformation, and global market expansion. Whether you are an emerging entrepreneur or an established enterprise, Expand 360² provides the knowledge, connections, and practical insights needed to thrive in an evolving business landscape.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 lg:max-w-xl">
              {stats.map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <p className="font-gilroy text-4xl font-black leading-none text-[#ff7600] drop-shadow-[0_3px_0_rgba(255,118,0,0.18)] sm:text-5xl">
                    {item.value}
                  </p>
                  <p className="mt-3 text-[10px] font-black uppercase tracking-wide text-[#1f160f]">{item.label}</p>
                  <span className="mx-auto mt-2 block h-0.5 w-5 bg-[#ff7600] sm:mx-0" />
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#agenda"
                className="rounded-full bg-[#f47a00] px-7 py-4 text-center text-xs font-black uppercase tracking-wide text-white shadow-[0_14px_30px_rgba(244,122,0,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ff8b1e]"
              >
                View Full Agenda
              </a>
              <a
                href="#speakers"
                className="rounded-full border border-[#f47a00] bg-white px-7 py-4 text-center text-xs font-black uppercase tracking-wide text-[#f47a00] transition hover:-translate-y-0.5 hover:bg-[#f47a00] hover:text-white"
              >
                Meet The Speakers
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_50px_rgba(188,103,29,0.16)]">
              <img
                src={eventimg}
                alt="Technology summit audience"
                className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[360px]"
              />
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-[#f47a00] px-4 py-2 text-xs font-black text-white shadow-[0_10px_24px_rgba(244,122,0,0.36)] sm:right-6 sm:top-6 sm:px-5 sm:py-3 sm:text-sm">
                <FaCalendarAlt aria-hidden="true" />
                <span>August 11, 11 AM 2026</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-xl bg-white px-6 py-7 text-center shadow-[0_18px_40px_rgba(82,48,24,0.08)]"
                >
                  <Icon className="mx-auto text-3xl text-[#e86d00]" aria-hidden="true" />
                  <h3 className="mt-4 font-gilroy text-base font-black text-[#1b0e06]">{title}</h3>
                  <p className="mx-auto mt-3 max-w-[220px] text-xs leading-6 text-[#776b62]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        <figure className="relative mt-12 overflow-hidden rounded-2xl border border-[#ffd3ad] bg-white/70 px-6 py-8 shadow-[0_18px_44px_rgba(128,75,30,0.06)] sm:px-10 md:px-14 lg:mt-16">
          <div className="absolute left-6 top-0 font-serif text-8xl leading-none text-[#ffe0c3]">"</div>
          <div className="relative z-10 grid gap-8 md:grid-cols-[120px_1fr] md:items-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-[#ff7600] bg-gradient-to-br from-[#ffe0c3] to-[#0aa98b] text-2xl font-black text-white shadow-[0_12px_28px_rgba(244,122,0,0.18)] md:mx-0">
              SJ
            </div>
            <figcaption>
              <blockquote className="max-w-3xl text-sm italic leading-7 text-black sm:text-base">
                "Our mission has always been to bridge the gap between visionary ideas and practical implementation. This summit represents the culmination of years of bringing together the brightest minds in technology."
              </blockquote>
              <p className="mt-6 font-gilroy text-sm font-black text-black">Sarah Johnson</p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-wide text-[#ff7600]">Founder &amp; Event Director</p>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default InnovationSummitSection;