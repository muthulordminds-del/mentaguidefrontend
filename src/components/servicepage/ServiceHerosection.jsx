import React, { useContext, useState } from 'react';
import { serviceherosectionbg, servicesubimg1 } from '../../assets/images';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import AdvertiserForm from '../AdvertiserForm';

const ServiceHerosection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { userData } = useContext(AppContext);

    const handleAdvertiserClick = () => {
        if (!userData) {
            toast.error('To access this form, you must login');
        } else if (!userData.isAccountVerified) {
            toast.error('To access this form, you must verify your email.');
        } else {
            setIsModalOpen(true);
        }
    };

    const scrollToServices = () => {
        const section = document.getElementById('service-grid');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-36 sm:pt-36 sm:pb-16 lg:pt-56 lg:pb-32 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${serviceherosectionbg})`
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
                <div className="relative flex flex-col lg:flex-row items-center w-full">

                    {/* Card */}
                    <div className="bg-[#f2f2f7] rounded-[1.5rem] p-6 sm:p-8 lg:p-10 w-full md:w-[85%] lg:w-[55%] xl:w-[52%] mx-auto lg:mx-0 shadow-2xl relative z-20 md:-translate-y-6 lg:-translate-y-8 xl:translate-y-[-20%]">
                        {/* Small Heading */}
                        <p className="text-[#ff7f41] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-4 font-gilroy">
                            Mission Driven Consultancy
                        </p>

                        {/* Main Heading */}
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-gilroy text-[#0f172a] leading-[1.15] mb-5">
                            Powering <span className="text-[#b76e98]">Global Growth</span><br className="hidden sm:block" /> Through Strategic Insight
                        </h1>

                        {/* Quote block */}
                        <div className="flex mb-5 items-stretch">
                            <div className="w-1 bg-gradient-to-b from-[#ff6b35] via-[#a044ff] to-[#3b82f6] mr-4 shrink-0 rounded-full"></div>
                            <p className="text-[#1e293b] font-gilroy-light italic text-sm sm:text-base font-semibold leading-relaxed">
                                "Empowering businesses with finance, compliance, advisory, and growth solutions."
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-[#475569] font-gilroy-light mb-6 text-sm sm:text-base max-w-xl leading-relaxed">
                            MentaGuide empowers businesses with strategic insights, operational excellence, and growth-focused solutions to achieve sustainable success and long-term value creation.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <button onClick={scrollToServices} className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2.5 rounded-lg font-gilroy text-sm transition-colors duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl cursor-pointer">
                                Explore Services
                            </button>
                            {/* <button className="bg-white/50 border border-gray-300 hover:border-gray-400 hover:bg-white text-[#0f172a] px-6 py-2.5 rounded-lg font-gilroy text-sm transition-colors duration-300 w-full sm:w-auto">
                                Our Process
                            </button> */}
                        </div>
                    </div>

                    {/* Mobile Advertiser CTA */}
                    <div className="absolute left-0 bottom-[-70px] z-30 md:hidden">
                        <button
                            onClick={handleAdvertiserClick}
                            className="bg-[#a4d64f] text-[#202523] px-5 py-2.5 rounded-full font-black uppercase tracking-widest hover:bg-[#b5e663] transition-all hover:-translate-y-1 shadow-[0_10px_25px_rgba(164,214,79,0.3)] text-xs"
                        >
                            Advertiser Signup
                        </button>
                    </div>

                    {/* Desktop Feathers Image */}
                    <div className="hidden lg:block absolute right-0 lg:right-[-2%] xl:-right-[5%] top-[30%] -translate-y-1/2 z-30 w-[45%] lg:w-[48%] xl:w-[50%] pointer-events-none">
                        <img
                            src={servicesubimg1}
                            alt="Golden Feathers"
                            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-110 origin-center"
                        />
                    </div>

                </div>
            </div>

            {/* Advertiser Signup Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-between p-4 border-b border-gray-100">
                            <h3 className="font-gilroy font-bold text-xl text-[#2d2f31]">Advertiser Signup</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        <div className="flex-1 w-full bg-gray-50 p-6 md:p-8 overflow-y-auto scroll-smooth">
                            <AdvertiserForm onSuccess={() => setIsModalOpen(false)} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ServiceHerosection
