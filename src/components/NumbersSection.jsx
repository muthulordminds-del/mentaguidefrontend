import React, { useEffect, useState, useRef } from 'react';

// Custom hook for number counting animation
const useCountUp = (end, duration = 2000, isVisible) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return count;
};

const StatItem = ({ title, value, prefix = "", suffix = "", isVisible }) => {
  const count = useCountUp(value, 2000, isVisible);
  
  return (
    <div className="flex flex-col">
      <span className="text-[#2b2b2b] font-gilroy font-bold text-xs md:text-sm lg:text-base tracking-wide mb-1">{title}</span>
      <span className="font-gilroy font-black text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] tracking-tighter text-[#a4d64f] leading-none">
        {prefix}{count}{suffix}
      </span>
    </div>
  );
};

const NumbersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full snap-start relative font-sans overflow-hidden bg-[#ebebeb] flex items-center">
      
      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-start pt-24 md:pt-32 lg:pt-35 px-8 md:pl-32 lg:pl-48 xl:pl-56 pr-8 md:pr-12 lg:pr-16 max-w-[1600px] mx-auto">
        
        {/* Texts */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h3 className="text-[#a4d64f] font-gilroy font-bold tracking-widest uppercase text-xs md:text-sm lg:text-base mb-1 md:mb-2">
            Performance
          </h3>
          <h2 className="text-[#2b2b2b] font-gilroy font-black tracking-tight text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] mb-2 md:mb-4">
            Numbers Matter
          </h2>
          <p className="text-[#5c5c5c] font-medium text-sm md:text-base lg:text-lg">
            We measure our success in numbers, and we are sure you do, too.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-8 md:gap-y-10 lg:gap-y-12 gap-x-8 md:gap-x-12">
          <StatItem title="Experience" value={12} suffix="+" isVisible={isVisible} />
          <StatItem title="Team Size" value={100} isVisible={isVisible} />
          <StatItem title="Affiliates" value={100} suffix="K+" isVisible={isVisible} />
          <StatItem title="Monthly Global Traffic" value={80} suffix="M" isVisible={isVisible} />
          <StatItem title="Monthly Conversions" value={2} suffix="M" isVisible={isVisible} />
          <StatItem title="Monthly GMV" value={2} prefix="$" suffix="B" isVisible={isVisible} />
        </div>
        
        {/* Bottom divider mimicking the image */}
        <div className="absolute bottom-16 md:bottom-24 left-8 right-8 md:left-32 md:right-12 lg:left-48 lg:right-16 h-[1px] bg-gray-300"></div>
      </div>

    </section>
  );
};

export default NumbersSection;
