import React from "react";
import { Link } from "react-router-dom";
import { IPOMainBoardbg } from "../../assets/images";

const IPOMainBoardSection = () => {
  const features = [
    "IPO Readiness",
    "SEBI Compliance",
    "Due Diligence",
    "Listing Support",
  ];

  const idealFor = [
    "Companies planning a Main Board IPO",
    "Fast-growing SMEs",
    "Mid-sized enterprises",
    "Family-owned businesses transitioning",
    "Export-led businesses",
  ];

  return (
    <section
      className="relative w-full flex justify-center py-16 md:py-24 bg-[#131722]"
      style={{
        backgroundImage: `url(${IPOMainBoardbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#0c101a]/80"></div>

      <div className="relative z-10 container mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">

          {/* Left Card */}
          <div className="w-full lg:w-[60%] flex">
            <Link
              to="/service/ipo-advisory"
              className="group flex flex-col justify-center w-full p-8 sm:p-10 lg:p-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 mb-8">
                <div className="flex items-center justify-center w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-2xl bg-[#bcf56a] shadow-[0_4px_20px_rgba(188,245,106,0.3)]">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 sm:w-9 sm:h-9 text-[#142033]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M3 17l6-6 4 4 8-8m0 0v6m0-6h-6"
                    />
                  </svg>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#7cb342] font-gilroy leading-tight transition-colors duration-300 group-hover:text-[#7cb342]">
                  IPO Advisory (SME & Mainboard)
                </h2>
              </div>

              <p className="text-[#dfe7ef] text-[1.05rem] sm:text-[1.1rem] leading-8 font-medium mb-12 max-w-2xl">
                Complete IPO advisory services from private company to listed
                company. We guide businesses through IPO planning,
                documentation, compliance, and execution support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                {features.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-[2px] shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6 text-[#8CC63F]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M12 2l2.4 2.4 3.4-.6 1.4 3.1 3 1.8-1 3.3 2 2.8-2 2.8 1 3.3-3 1.8-1.4 3.1-3.4-.6L12 22l-2.4-2.4-3.4.6-1.4-3.1-3-1.8 1-3.3-2-2.8 2-2.8-1-3.3 3-1.8 1.4-3.1 3.4.6L12 2z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 12l2 2 4-4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <span className="text-[#dfe7ef] text-base font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Link>
          </div>

          {/* Right Card */}
          <div className="w-full lg:w-[35%] lg:ml-auto flex">
            <div className="w-full bg-[#e4e6ea] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl">
              <h4 className="mb-8 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#142033] font-gilroy">
                IDEAL FOR
              </h4>

              <div className="flex flex-col gap-6">
                {idealFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#bcf56a] text-[#142033] font-bold text-sm shadow-sm shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span className="pt-1 text-[#3a4c5e] text-base leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IPOMainBoardSection;