import React from 'react';

const CTASection = () => {
  return (
    <section className="py-12 md:py-20 bg-[#f8f9fa] w-full flex justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[85rem]">

        <div className="bg-[#5a28a4] rounded-[2rem] sm:rounded-[2.5rem] px-6 py-16 sm:py-20 flex flex-col items-center text-center shadow-2xl border border-[#273043]">

          <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-white font-gilroy mb-6 leading-tight">
            Ready to restructure your path?
          </h2>

          <p className="text-[#8995a5] mb-12 leading-[1.8] text-[0.95rem] sm:text-[1.05rem] font-medium max-w-2xl">
            Let's discuss how our specific services can be tailored to meet your unique business requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#c0f35a] hover:bg-[#a8df45] text-[#142033] font-bold text-[0.95rem] rounded-xl transition-colors shadow-lg">
              Book a Consultation
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 border-2 border-[#e2e8f0] text-white font-bold text-[0.95rem] rounded-xl transition-colors">
              Contact Our Experts
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;
