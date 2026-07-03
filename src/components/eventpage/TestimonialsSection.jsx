import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { speakers1, speakers2, speakers4 } from '../../assets/images';

const testimonials = [
  {
    id: 1,
    name: 'Ryan Thompson',
    role: 'Business Analyst',
    image: speakers1,
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.',
  },
  {
    id: 2,
    name: 'Rachel Chen',
    role: 'Project Manager',
    image: speakers2,
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
  },
  {
    id: 3,
    name: 'Jessica Martinez',
    role: 'UX Designer',
    image: speakers4,
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit sed eiusmod tempor.',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="font-gilroy text-4xl font-black text-[#1c0d03] sm:text-5xl">Testimonials</h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-[#f47a00]"></div>
          <p className="mx-auto mt-6 max-w-2xl font-gilroy-light text-sm font-semibold leading-6 text-[#5f524b] sm:text-base">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* Testimonials Grid (Desktop) / Carousel (Mobile) */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`relative flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-8 py-10 shadow-[0_12px_40px_rgba(149,157,165,0.12)] transition-all sm:px-10 lg:block ${
                // Simple logic to show only one on mobile, and all on desktop
                idx === currentIndex ? 'block' : 'hidden lg:block'
              }`}
            >
              {/* Profile Image */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-orange-100 p-1 shadow-md">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              {/* Stars */}
              <div className="mt-5 flex justify-center gap-1 text-[#ffb800]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Quote Text */}
              <div className="relative mt-8 px-4 text-center">
                <FaQuoteLeft className="absolute -left-2 top-0 text-sm text-[#f47a00]/40" />
                <p className="font-gilroy-light text-sm italic leading-7 text-gray-500 sm:text-base">
                  {testimonial.text}
                </p>
                <FaQuoteRight className="absolute -right-2 bottom-0 text-sm text-[#f47a00]/40" />
              </div>

              {/* Author Info */}
              <div className="mt-8 text-center">
                <p className="font-gilroy text-lg font-black text-[#1c0d03]">{testimonial.name}</p>
                <p className="font-gilroy-light text-[11px] font-semibold text-gray-400">
                  {testimonial.role}
                </p>
              </div>

              {/* Bottom Quote Icon */}
              <div className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-[#f47a00]">
                <FaQuoteRight className="text-xs" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (Visible primarily on mobile or when used as a full carousel) */}
        <div className="mt-12 flex justify-center gap-4 lg:justify-end">
          <button
            onClick={prevTestimonial}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f47a00] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#d66a00] lg:hidden"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            onClick={nextTestimonial}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f47a00] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#d66a00] lg:hidden"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-sm" />
          </button>

          {/* Desktop Nav Buttons (As per mockup, they are always at the bottom right) */}
          <button
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#f47a00] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#d66a00] lg:flex"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#f47a00] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#d66a00] lg:flex"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
