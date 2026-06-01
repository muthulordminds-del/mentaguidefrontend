import React, { useState, useContext } from 'react';
import { Mentaguidelogo1 } from '../assets/images';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const FloatingInput = ({ label, type = "text", ...props }) => {
  return (
    <div className="relative group w-full border-b border-[#2b2b2b] focus-within:border-white transition-colors pt-4">
      <input
        type={type}
        placeholder=" "
        className="peer w-full bg-transparent pb-1.5 text-[#2b2b2b] placeholder-transparent focus:outline-none transition-colors border-none text-xs sm:text-sm lg:text-base font-normal"
        {...props}
      />
      <label className="absolute left-0 top-4 text-white opacity-80 transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-[10px] sm:peer-focus:text-xs peer-focus:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] sm:peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:opacity-100 font-normal uppercase tracking-[0.12em] sm:tracking-wider">
        {label}
      </label>
    </div>
  );
};

const ContactSection = () => {
  const { backendUrl } = useContext(AppContext);
  const [formData, setFormData] = useState({
    opportunity: '',
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post(backendUrl + '/api/contact/submit', formData);
      if (data.success) {
        toast.success(data.message);
        setFormData({
          opportunity: '',
          name: '',
          email: '',
          phone: '',
          website: '',
          message: ''
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-full w-full snap-start relative font-sans overflow-y-auto lg:overflow-hidden bg-[#98ac2a] flex flex-col justify-start lg:justify-center text-white">
      {/* Target Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-5 sm:px-6 md:px-10 lg:pl-36 lg:pr-24 xl:pl-48 xl:pr-32 pt-20 sm:pt-24 md:pt-24 lg:pt-20 pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        {/* Title */}
        <div className="w-full flex justify-start md:justify-end mb-8 md:mb-10 lg:mb-12 md:pr-8 lg:pr-20">
          <h2 className="text-[#2b2b2b] text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-gilroy font-black tracking-tight">
            Contact.
          </h2>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Col 1: Address Details */}
          <div className="flex flex-col text-[#2b2b2b]">
            <h3 className="font-gilroy font-normal text-lg md:text-xl lg:text-2xl mb-4 text-white">Address:</h3>

            <div className="font-normal text-xs sm:text-sm lg:text-[1rem] leading-relaxed space-y-4 mb-7 md:mb-8 text-white">
              <p>vCommission Media Pvt. Ltd.<br />Splendor Spectrum One, Tower 1, 4th Floor,<br />Golf Course Ext, Sec-58, Gurugram, 122001, HR, India</p>
              <p>Registered Office: vCommission Media Pvt Ltd<br />Regus, Level 4,Rectangle One,<br />D-4 Commercial Complex,<br />Saket, New Delhi,<br />Delhi 110017</p>
            </div>

            {/* Badges and Logos - Using Mentaguidelogo per request */}
            <div className="text-white font-medium text-sm sm:text-base mb-3">Member of</div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="bg-white/20 p-2 rounded-sm inline-block border border-white/40 max-w-max">
                <span className="text-white text-[10px] sm:text-xs font-bold tracking-widest">COPYSCAPE PROTECTED</span>
              </div>

              {/* Mentaguide logo placement */}
              <div className="w-40 h-14 sm:w-48 sm:h-16 md:w-52 md:h-[4.5rem] lg:w-56 lg:h-20 xl:w-64 xl:h-24 rounded-md overflow-hidden flex items-center justify-center p-2 mt-1 sm:mt-2">
                <img src={Mentaguidelogo1} alt="Mentaguide Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col text-white">
            <h3 className="font-gilroy font-normal text-lg md:text-xl lg:text-2xl mb-4 lg:mb-6">Quick Links:</h3>
            <ul className="space-y-2.5 sm:space-y-3 md:space-y-4 font-normal text-sm lg:text-[0.95rem]">
              <li><a href="/" className="hover:text-[#2b2b2b] transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-[#2b2b2b] transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-[#2b2b2b] transition-colors">Service</a></li>
              <li><a href="/contact" className="hover:text-[#2b2b2b] transition-colors">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-[#2b2b2b] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Form */}
          <div className="flex flex-col w-full md:col-span-2 xl:col-span-1 md:max-w-2xl xl:max-w-none md:mx-auto xl:mx-0">
            <form onSubmit={onSubmitHandler} className="flex flex-col space-y-4 lg:space-y-5 w-full">
              <FloatingInput name="opportunity" value={formData.opportunity} onChange={onChangeHandler} disabled={isLoading} label="Select Opportunity" />
              <FloatingInput name="name" value={formData.name} onChange={onChangeHandler} disabled={isLoading} label="Your Name" />
              <FloatingInput name="email" value={formData.email} onChange={onChangeHandler} disabled={isLoading} label="Email Address" type="email" />
              <FloatingInput name="phone" value={formData.phone} onChange={onChangeHandler} disabled={isLoading} label="Contact Number" type="tel" />
              <FloatingInput name="website" value={formData.website} onChange={onChangeHandler} disabled={isLoading} label="Website URL" type="url" />
              <FloatingInput name="message" value={formData.message} onChange={onChangeHandler} disabled={isLoading} label="Enter Message" />

              <button disabled={isLoading} type="submit" className="bg-[#000000] text-white font-gilroy font-bold tracking-widest text-xs sm:text-sm py-3 lg:py-4 px-7 sm:px-8 self-start hover:bg-white hover:text-black transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? 'SENDING...' : 'SEND'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
