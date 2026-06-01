import React from 'react';

const MapSection = () => {
  return (
    <section className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100 mb-12 md:mb-24">
      <iframe
        title="Location Map - Coimbatore"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.815252516484!2d76.9616!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full grayscale-0 transition-all duration-700"
      ></iframe>
    </section>
  );
};

export default MapSection;
