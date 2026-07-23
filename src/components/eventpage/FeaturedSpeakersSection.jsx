import React from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { speakers1, speakers2, speakers3, speakers4, speakers5, speakers6 } from '../../assets/images';
import haribaskar from '../../assets/images/haribaskar.png';
import umarani from '../../assets/images/umarani.png';

const featuredSpeakers = [
  {
    name: 'Hari Basker',
    role: 'Business Strategy & Growth Advisor',
    company: 'Expand 360²',
    badge: 'Keynote Speaker',
    session: 'Shaping the Future of Business',
    image: haribaskar,
  },
  {
    name: 'Uma Rani',
    role: '25+ Years Industry Experience, College Principal',
    company: 'Expand 360²',
    badge: 'Panel Speaker',
    session: 'Bridging Industry & Academia',
    image: umarani,
  },
];

const speakers = [
  {
    name: 'Sarah Chen',
    role: 'Design Director',
    company: 'Creative Labs',
    topic: 'Design Thinking Workshop',
    image: speakers3,
  },
  {
    name: 'David Wilson',
    role: 'Data Scientist',
    company: 'Analytics Pro',
    topic: 'Big Data Analytics',
    image: speakers4,
  },
  {
    name: 'Lisa Martinez',
    role: 'Marketing Expert',
    company: 'Brand Builders',
    topic: 'Digital Marketing Trends',
    image: speakers5,
  },
  {
    name: 'James Parker',
    role: 'CEO & Founder',
    company: 'StartupHub',
    topic: 'Entrepreneurship Panel',
    image: speakers6,
  },
];

const SocialButtons = () => (
  <div className="flex items-center gap-2">
    <a
      href="#linkedin"
      aria-label="LinkedIn profile"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff7a00] text-xs text-white shadow-[0_8px_18px_rgba(255,122,0,0.3)] transition hover:-translate-y-0.5 hover:bg-[#f06400]"
    >
      <FaLinkedinIn aria-hidden="true" />
    </a>
    <a
      href="#twitter"
      aria-label="Twitter profile"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff7a00] text-xs text-white shadow-[0_8px_18px_rgba(255,122,0,0.3)] transition hover:-translate-y-0.5 hover:bg-[#f06400]"
    >
      <FaTwitter aria-hidden="true" />
    </a>
  </div>
);

const FeaturedSpeakersSection = () => {
  return (
    <section id="speakers" className="w-full bg-white px-4 py-16 text-[#1d120b] sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-gilroy text-3xl font-black leading-tight text-[#1d120b] sm:text-4xl">
            Featured Speakers
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#ff7a00]" />
          <p className="mt-5 text-xs leading-6 text-[#4e443d] sm:text-sm">
            Hear from business leaders and industry experts sharing insights on strategy, growth, and sustainable business transformation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredSpeakers.map((speaker) => (
            <article
              key={speaker.name}
              className="grid overflow-hidden rounded-lg border border-[#ffc99d] bg-white shadow-[0_16px_36px_rgba(70,40,18,0.08)] sm:grid-cols-[200px_1fr]"
            >
              <div className="relative h-[220px] self-start">
                <img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover" />
                <div className="absolute bottom-3 right-3">
                  <SocialButtons />
                </div>
              </div>
              <div className="flex flex-col justify-center px-6 py-7">
                <span className="w-fit rounded-full bg-[#ff7a00] px-4 py-2 text-[10px] font-black uppercase tracking-wide text-white">
                  {speaker.badge}
                </span>
                <h3 className="mt-5 font-gilroy text-xl font-black text-[#1d120b]">{speaker.name}</h3>
                <p className="mt-2 text-xs font-black text-[#ff7a00]">{speaker.role}</p>
                <p className="mt-1 text-xs text-[#84786f]">{speaker.company}</p>
                <p className="mt-5 text-sm font-black leading-6 text-[#1d120b]">
                  Session: "{speaker.session}"
                </p>
                {/* <a
                  href="#profile"
                  className="mt-6 w-fit rounded-full bg-[#fff0e3] px-5 py-3 text-xs font-black text-[#ff7a00] transition hover:bg-[#ff7a00] hover:text-white"
                >
                  View Profile
                </a> */}
              </div>
            </article>
          ))}
        </div>

        {/* <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker, index) => (
            <article
              key={speaker.name}
              className="overflow-hidden rounded-lg bg-white text-center shadow-[0_18px_42px_rgba(70,40,18,0.1)]"
            >
              <div className="relative h-64 overflow-hidden sm:h-56 lg:h-64">
                <img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover" />
                {index === speakers.length - 1 && (
                  <div className="absolute bottom-4 right-4">
                    <SocialButtons />
                  </div>
                )}
              </div>
              <div className="px-5 py-6">
                <h3 className="font-gilroy text-sm font-black text-[#1d120b]">{speaker.name}</h3>
                <p className="mt-2 text-[11px] font-black text-[#ff7a00]">{speaker.role}</p>
                <p className="mt-1 text-[11px] text-[#8a7d72]">{speaker.company}</p>
                <span className="mt-5 inline-flex rounded-full bg-[#fff0e3] px-4 py-2 text-[10px] font-bold text-[#ff7a00]">
                  "{speaker.topic}"
                </span>
              </div>
            </article>
          ))}
        </div> */}

        <figure className="relative mx-auto mt-12 max-w-4xl rounded-xl bg-[#fff8f1] px-6 py-9 text-center shadow-[0_14px_32px_rgba(70,40,18,0.06)] sm:px-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 font-serif text-5xl leading-none text-[#ffd2a8]">
            "
          </div>
          <blockquote className="mx-auto max-w-3xl text-sm italic leading-7 text-[#2a211a]">
            "Expand 360² brings together the right people and ideas to help businesses grow with clarity and confidence."
          </blockquote>
          <figcaption className="mt-7 text-center">
            <p className="font-gilroy text-sm font-black text-[#1d120b]">Emily Rodriguez</p>
            <p className="mt-1 text-[11px] text-[#7c7067]">Chief Technology Officer, InnovaTech Global</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default FeaturedSpeakersSection;