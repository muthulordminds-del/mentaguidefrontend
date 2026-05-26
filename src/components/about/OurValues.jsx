import React from 'react';
import { ourvaluesbg } from '../../assets/images';
import { FaRegHandshake, FaTrophy, FaUsers, FaFistRaised, FaBrain, FaRegHandPeace, FaRegLightbulb, FaGlassCheers } from 'react-icons/fa';

const valuesData = [
  { id: '01', title: 'Integrity and trust', subtitle: 'Honesty and Respect', bottomtext: 'Integrity and trust', color: 'bg-[#8dc63f]', textColor: 'text-[#8dc63f]', icon: FaRegHandshake },
  { id: '02', title: 'Client-first thinking', subtitle: 'You Win, I Win', bottomtext: 'Client-first thinking', color: 'bg-[#a3d445]', textColor: 'text-[#a3d445]', icon: FaTrophy },
  { id: '03', title: 'Accountability', subtitle: 'Accountability ', bottomtext: 'Accountability', color: 'bg-[#bad33c]', textColor: 'text-[#bad33c]', icon: FaUsers },
  { id: '04', title: 'Practical execution', subtitle: 'Get It Done Right', bottomtext: 'Practical execution', color: 'bg-[#bad33c]', textColor: 'text-[#d5b220]', icon: FaFistRaised },
  { id: '05', title: 'Continuous improvement', subtitle: 'Always Getting Better', bottomtext: 'Continuous improvement', color: 'bg-[#ead125]', textColor: 'text-[#ead125]', icon: FaBrain },
  { id: '06', title: 'Long-term partnerships', subtitle: 'Building Lasting Relationships', bottomtext: 'Long-term partnerships', color: 'bg-[#e5bc24]', textColor: 'text-[#e5bc24]', icon: FaRegHandPeace },
   { id: '07', title: 'Ownership ', subtitle: 'Take ownership of your work', bottomtext: 'Ownership', color: 'bg-[#d5b220]', textColor: 'text-[#d5b220]', icon: FaFistRaised },
  
];

const OurValues = () => {
    return (
        <section 
            className="w-full relative py-16 md:py-24 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${ourvaluesbg})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#0a1128]/80 backdrop-blur-[1px]"></div>
            
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold font-gilroy text-white mb-12 tracking-wide text-center">
                    Our <span className="text-[#a4d64f]">Core Values</span>
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {valuesData.map((val, idx) => (
                        <div 
                            key={idx} 
                            className="flex flex-col bg-white rounded shadow-lg overflow-hidden h-[240px] transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="flex-1 p-6 relative flex flex-col justify-between overflow-hidden">
                                {/* Top area with Icon and Number */}
                                <div className="flex justify-between items-start w-full relative z-10">
                                    <div className={`text-4xl ${val.textColor}`}>
                                        <val.icon />
                                    </div>
                                </div>
                                
                                {/* Very faint huge background number outline */}
                                <div 
                                    className="text-6xl font-black text-transparent absolute top-2 right-4 select-none z-0"
                                    style={{ WebkitTextStroke: '2px #e5e7eb' }}
                                >
                                    {val.id}
                                </div>
                                
                                {/* Text Content */}
                                <div className="mt-8 z-10">
                                    <h3 className="text-2xl font-bold font-gilroy text-gray-900 mb-1">{val.title}</h3>
                                    <p className="text-sm font-gilroy-light text-gray-700 font-semibold">{val.subtitle}</p>
                                </div>
                            </div>
                            
                            {/* Bottom Strip */}
                            <div className={`w-full py-2.5 px-6 ${val.color}`}>
                                <p className="text-white font-bold text-sm md:text-base tracking-wide whitespace-nowrap truncate">{val.bottomtext}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;
