import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaWpforms, FaCalendarAlt, FaPaperPlane } from 'react-icons/fa';

const ContactDetailsSection = () => {
  return (
    <section className="py-20 bg-white text-[#2b2b2b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Content Details */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-12">
            
            {/* Get in Touch */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-gilroy mb-6 leading-tight">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-teal-50 p-3 rounded-full text-teal-600">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-gilroy mb-1">Phone / WhatsApp</h4>
                    <p className="text-gray-600 leading-relaxed">Reach out to us directly for quick assistance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-teal-50 p-3 rounded-full text-teal-600">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-gilroy mb-1">Location</h4>
                    <p className="text-gray-600 leading-relaxed">Coimbatore</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-teal-50 p-3 rounded-full text-teal-600">
                    <FaWpforms size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-gilroy mb-1">Inquiry Form</h4>
                    <p className="text-gray-600 leading-relaxed">Share your details and requirements, and we’ll get back to you shortly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Consultation */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-gilroy mb-4">Book Consultation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Take the first step towards making your business export-ready. Schedule a consultation and get clear guidance on certifications and next steps.
              </p>
            </div>

            {/* Get Started */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-gilroy mb-6">Get Started</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-teal-600 mb-3"><FaWpforms size={24} /></div>
                  <h4 className="text-lg font-bold font-gilroy mb-2">Simple Form</h4>
                  <p className="text-sm text-gray-600">Share your basic details and requirements.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-teal-600 mb-3"><FaCalendarAlt size={24} /></div>
                  <h4 className="text-lg font-bold font-gilroy mb-2">Slot Booking</h4>
                  <p className="text-sm text-gray-600">Choose a convenient time or request a callback.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (Modeled from the image) */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#f8f9fa] rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold font-gilroy mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Define your goals and identify areas where we can add value to your business.
              </p>
              
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full name" 
                    className="w-full bg-transparent border-b border-gray-300 py-3 px-2 text-gray-800 focus:outline-none focus:border-teal-600 transition-colors placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-transparent border-b border-gray-300 py-3 px-2 text-gray-800 focus:outline-none focus:border-teal-600 transition-colors placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full bg-transparent border-b border-gray-300 py-3 px-2 text-gray-800 focus:outline-none focus:border-teal-600 transition-colors placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Message" 
                    rows="4"
                    className="w-full bg-transparent border-b border-gray-300 py-3 px-2 text-gray-800 focus:outline-none focus:border-teal-600 transition-colors placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="button" 
                    className="bg-[#2b2b2b] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-black transition-colors hover:-translate-y-1 shadow-lg"
                  >
                    <span>Send a message</span>
                    <FaPaperPlane size={14} />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
