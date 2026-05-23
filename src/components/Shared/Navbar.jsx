import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowRight } from 'react-icons/fa';
import { Mentaguidelogo1 } from '../../assets/images';
import { AppContext } from '../../context/AppContext';

const Navbar = ({ activeIndex, showHeroLogo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false);
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedIn } = useContext(AppContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleAdvertiserClick = () => {
    if (!userData) {
      toast.error('To access this form, you must login your email.');
    } else if (!userData.isAccountVerified) {
      toast.error('To access this form, you must verify your email.');
    } else {
      setIsAdvertiserModalOpen(true);
    }
  };

  const sendVerificationEmail = async () => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(backendUrl + '/api/auth/send-verify-otp');
      if (data.success) {
        setIsOpen(false);
        navigate('/email-verify');
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error sending verification email');
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(backendUrl + '/api/auth/logout');
      if (data.success) {
        setIsLoggedIn(false);
        setUserData(false);
        setIsOpen(false);
        navigate('/');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error logging out');
    }
  };

  const openLogin = () => {
    setIsOpen(false);
    navigate('/login');
  };

  // Hero (0) and later sections (4+) use dark text for visibility on white backgrounds.
  // ProcessSection (index 5) has a dark background, so keep text white there.
  const isDarkText = (activeIndex === 0 || activeIndex >= 4) && activeIndex !== 5;

  const navLinks = [
    { name: 'Home', href: '/', onClick: (e) => { e.preventDefault(); setIsOpen(false); navigate('/'); window.scrollTo(0,0); } },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  // Split links into two columns for the layout shown in the screenshot
  const col1 = navLinks.slice(0, 4);
  const col2 = navLinks.slice(4);
  const authControlText = isDarkText ? 'text-gray-800 border-gray-500 hover:bg-gray-100' : 'text-white border-white/70 hover:bg-white/10';
  const authControl = userData ? (
    <div className="group relative flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
      {userData.name?.[0]?.toUpperCase()}
      <div className="absolute right-0 top-0 z-10 hidden pt-10 text-black group-hover:block">
        <ul className="m-0 list-none rounded bg-gray-100 p-2 text-sm shadow-lg">
          {!userData.isAccountVerified && (
            <li
              onClick={sendVerificationEmail}
              className="cursor-pointer whitespace-nowrap px-2 py-1 hover:bg-gray-200"
            >
              Verify Email
            </li>
          )}
          <li
            onClick={logout}
            className="cursor-pointer whitespace-nowrap px-2 py-1 pr-10 hover:bg-gray-200"
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <button
      onClick={openLogin}
      className={`flex items-center gap-2 rounded-full border px-4 py-2 transition-all ${authControlText}`}
    >
      Login
      <FaArrowRight className="text-sm" />
    </button>
  );

  return (
    <>
      {/* Global Shell (Visible when menu is CLOSED) */}
      {!isOpen && (
        <div className="pointer-events-none">
          {/* Header */}
          <header className="fixed top-0 left-6 md:left-12 flex items-start gap-4 md:gap-8 z-[100] font-gilroy pointer-events-auto pt-3 md:pt-4">
            {/* Two-Line Hamburger Trigger */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="group p-2 -ml-2 transition-all duration-300 pointer-events-auto flex flex-col gap-1.5"
            >
              <div className={`w-8 h-1 md:w-10 md:h-1 transition-colors duration-300 ${isDarkText ? 'bg-[#2b2b2b]' : 'bg-white'}`}></div>
              <div className={`w-8 h-1 md:w-6 md:h-1 transition-colors duration-300 ${isDarkText ? 'bg-[#2b2b2b]' : 'bg-white'}`}></div>
            </button>

            {showHeroLogo && (
              <div className="select-none sticky top-0 -mt-3 md:-mt-5">
                <img
                  src={Mentaguidelogo1}
                  alt="Mentaguide Logo"
                  className="h-14 md:h-16 lg:h-20 w-auto object-contain"
                />
              </div>
            )}
          </header>

          <div className="fixed right-4 top-4 z-[100] pointer-events-auto sm:right-24 sm:top-6">
            {authControl}
          </div>

          {/* Left Vertical (Countries) */}
          <div className="fixed left-6 md:left-8 lg:left-10 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-50 w-0 pointer-events-auto">
            <div className={`-rotate-90 flex items-center gap-3 text-[0.85rem] lg:text-[0.9rem] tracking-widest font-bold font-gilroy uppercase whitespace-nowrap transition-colors duration-300 ${isDarkText ? 'text-black' : 'text-white'}`}>
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo(0,0); }} className="hover:text-[#a4d64f] transition-colors">Home</a> <span className="font-light opacity-50">|</span>
              <a href="#" className="hover:text-[#a4d64f] transition-colors">About</a> <span className="font-light opacity-50">|</span>
              <a href="#" className="hover:text-[#a4d64f] transition-colors">Service</a> <span className="font-light opacity-50">|</span>
              <a href="#" className="hover:text-[#a4d64f] transition-colors">Contact</a> <span className="font-light opacity-50">|</span>
              {/* <a href="#" className="hover:text-[#a4d64f] transition-colors">USA</a> */}
            </div>
          </div>

          {/* Right Vertical (Socials) */}
          <div className="fixed right-8 md:right-10 lg:right-12 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-50 w-0 pointer-events-auto">
            <div className={`rotate-90 flex items-center gap-6 text-[0.85rem] lg:text-[1rem] font-bold font-gilroy tracking-wider whitespace-nowrap transition-colors duration-300 ${isDarkText ? 'text-black' : 'text-white'}`}>
              <a href="https://www.facebook.com/profile.php?id=61589020599973&sk=about" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors lowercase">facebook</a>
              <a href="https://www.instagram.com/mentaguide/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors lowercase">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors lowercase">x</a>
              <a href="https://www.linkedin.com/company/mentaguide" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors lowercase">linkedin</a>
              <a href="https://www.youtube.com/@MENTAGUIDE" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors lowercase">youtube</a>
            </div>
          </div>

          {/* Bottom Elements */}
          <div className="fixed bottom-2 md:bottom-4 lg:bottom-6 left-0 right-0 flex flex-col md:flex-row justify-between items-center md:items-end z-50 px-6 md:px-12 lg:px-20 pointer-events-auto">
            <div className={`flex flex-wrap justify-center items-center gap-6 md:gap-10 text-base md:text-[1.15rem] lg:text-[1.25rem] font-bold hidden lg:flex transition-colors duration-300 pl-4 md:pl-24 lg:pl-32 xl:pl-48 ${isDarkText ? 'text-black' : 'text-white'}`}>
              {!userData && (
                <button onClick={openLogin} className="font-gilroy hover:text-[#a4d64f] transition-colors uppercase tracking-widest cursor-pointer">Login</button>
              )}
              <button onClick={handleAdvertiserClick} className="font-gilroy hover:text-[#a4d64f] transition-colors uppercase tracking-widest cursor-pointer">Advertiser Signup</button>
            </div>
            <div className={`text-[1rem] md:text-[1.15rem] font-bold font-gilroy tracking-wide ml-auto transition-colors duration-300 ${isDarkText ? 'text-black' : 'text-white'}`}>
              m: hello{'{at}'}vcommission.com
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Menu Overlay (Visible when menu is OPEN) */}
      <div className={`fixed inset-0 z-[110] bg-white transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Close Button (X) */}
        <button
          onClick={toggleMenu}
          className="absolute top-10 left-8 p-2 text-[#2b2b2b] hover:opacity-70 transition-opacity z-[120]"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content Container */}
        <div className="relative h-full w-full flex flex-col px-8 md:px-24 lg:px-32 xl:px-48 py-24 overflow-y-auto">
          {/* Main Links Grid */}
          <div className="flex-grow flex items-center py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-3 md:gap-y-6">
              {/* Column 1 */}
              <div className="flex flex-col space-y-3 md:space-y-6">
                {col1.map((link) => (
                  <a key={link.name} href={link.href} onClick={link.onClick} className="text-[#2b2b2b] text-2xl md:text-4xl lg:text-[2.75rem] font-gilroy font-black tracking-tight hover:text-[#a4d64f] transition-colors leading-none">
                    {link.name}
                  </a>
                ))}
              </div>
              {/* Column 2 */}
              <div className="flex flex-col space-y-3 md:space-y-6">
                {col2.map((link) => (
                  <a key={link.name} href={link.href} onClick={link.onClick} className="text-[#2b2b2b] text-2xl md:text-4xl lg:text-[2.75rem] font-gilroy font-black tracking-tight hover:text-[#a4d64f] transition-colors leading-none">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Overlay Sidebars (Inside the white overlay) */}
          <div className="fixed left-6 md:left-8 lg:left-10 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-50 w-0">
            <div className="-rotate-90 flex items-center gap-3 text-[0.85rem] lg:text-[0.9rem] tracking-widest font-bold font-gilroy uppercase whitespace-nowrap text-black">
              <a href="/" onClick={(e) => { e.preventDefault(); setIsOpen(false); navigate('/'); window.scrollTo(0,0); }} className="hover:text-[#a4d64f] transition-colors">Home</a> <span className="font-light opacity-50">|</span>
              <a href="#" className="hover:text-[#a4d64f] transition-colors">About</a> <span className="font-light opacity-50">|</span>
              <a href="#" className="hover:text-[#a4d64f] transition-colors">Services</a> <span className="font-light opacity-50">|</span>
              <a href="#" className="hover:text-[#a4d64f] transition-colors">Contact</a> <span className="font-light opacity-50">|</span>
            </div>
          </div>

          <div className="fixed right-8 md:right-10 lg:right-12 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-50 w-0">
            <div className="rotate-90 flex items-center gap-6 text-[0.85rem] lg:text-[1rem] font-bold font-gilroy tracking-wider whitespace-nowrap text-black">
              <a href="https://www.facebook.com/profile.php?id=61589020599973&sk=about" target="_blank" rel="noopener noreferrer" className="hover:text-[#a4d64f] transition-colors lowercase">facebook</a>
              <a href="https://www.instagram.com/mentaguide/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a4d64f] transition-colors lowercase">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#a4d64f] transition-colors lowercase">x</a>
              <a href="https://www.linkedin.com/company/mentaguide" target="_blank" rel="noopener noreferrer" className="hover:text-[#a4d64f] transition-colors lowercase">linkedin</a>
              <a href="https://www.youtube.com/@MENTAGUIDE" target="_blank" rel="noopener noreferrer" className="hover:text-[#a4d64f] transition-colors lowercase">youtube</a>
            </div>
          </div>

          {/* Menu Overlay Bottom Elements */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full mt-auto pt-12 text-black">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-base md:text-[1rem] lg:text-[1.1rem] font-bold">
              {authControl}
              <button onClick={handleAdvertiserClick} className="hover:text-[#a4d64f] transition-colors uppercase tracking-widest">Advertiser Signup

              </button>
              {/* <a href="#" className="hover:text-[#a4d64f] transition-colors uppercase tracking-widest">Affiliate Signup</a> */}
            </div>
            <div className="text-[1rem] md:text-[1.1rem] font-bold font-gilroy tracking-wide mt-4 md:mt-0">
              m: hello{'{at}'}vcommission.com
            </div>
          </div>
        </div>
      </div>

      {/* Advertiser Signup Modal */}
      {isAdvertiserModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="font-gilroy font-bold text-xl text-[#2d2f31]">Advertiser Signup</h3>
              <button 
                onClick={() => setIsAdvertiserModalOpen(false)}
                className="text-gray-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="flex-1 w-full bg-gray-50 relative">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScXCErL-eTaGJPKUMwKQE61HZM6GOa4lRsY4uvrB-o5Hu-75w/viewform?embedded=true" 
                className="w-full h-full border-none"
                title="Advertiser Signup Form"
              >Loading…</iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
