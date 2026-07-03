import React, { useState } from 'react';
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  eventimg1,
  eventimg2,
  eventimg3,
  eventimg4,
  eventimg5,
  eventimg6,
  eventimg7,
  eventimg8,
} from '../../assets/images';

const eventImages = [
  eventimg1,
  eventimg2,
  eventimg3,
  eventimg4,
  eventimg5,
  eventimg6,
  eventimg7,
  eventimg8,
];

const EventImagesSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % eventImages.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + eventImages.length) % eventImages.length);
  };

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {eventImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-100 shadow-sm"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img}
                alt={`Event highlight ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: '250px' }}
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                    <FaExpand className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 sm:p-6 md:p-12"
          onClick={closeLightbox}
        >
          {/* Top Bar with Close Button */}
          <div className="absolute top-0 flex w-full justify-between p-4 sm:p-6">
            <div className="text-2xl font-black text-white/50">Evently</div>
            <button
              onClick={closeLightbox}
              className="text-white/70 transition hover:text-white"
              aria-label="Close modal"
            >
              <FaTimes className="text-3xl font-light" />
            </button>
          </div>

          {/* Main Image Container */}
          <div className="relative flex max-h-[85vh] w-full max-w-6xl items-center justify-center">
            
            {/* Left Navigation */}
            <button
              onClick={showPrev}
              className="absolute left-0 z-10 flex h-14 w-14 -translate-x-2 items-center justify-center text-white/50 transition hover:text-white sm:-translate-x-12"
              aria-label="Previous image"
            >
              <FaChevronLeft className="text-4xl font-light" />
            </button>

            {/* The Image */}
            <img
              src={eventImages[selectedIndex]}
              alt={`Gallery ${selectedIndex + 1}`}
              className="max-h-[85vh] w-auto max-w-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            />

            {/* Right Navigation */}
            <button
              onClick={showNext}
              className="absolute right-0 z-10 flex h-14 w-14 translate-x-2 items-center justify-center text-white/50 transition hover:text-white sm:translate-x-12"
              aria-label="Next image"
            >
              <FaChevronRight className="text-4xl font-light" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="absolute bottom-6 left-0 w-full px-6 text-left text-sm text-white/70">
            Gallery {selectedIndex + 1}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventImagesSection;
