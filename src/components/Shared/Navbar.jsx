import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowRight } from 'react-icons/fa';
import { Mentaguidelogo1 } from '../../assets/images';
import { AppContext } from '../../context/AppContext';

const Navbar = ({ activeIndex, hideFloatingNav = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { userData, backendUrl, setUserData, setIsLoggedIn, isLoggedIn } = useContext(AppContext);

  const isEventPage = location.pathname === '/event';
  const isAboutPage = location.pathname === '/about' || location.pathname === '/services' || location.pathname === '/contact' || isEventPage || location.pathname.startsWith('/service/');
  const positionClass = isAboutPage ? 'absolute' : 'fixed';

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleAdvertiserClick = () => {
    navigate('/event-registration');
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
        localStorage.removeItem('token');
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

  const isHomePage = location.pathname === '/';
  const isAuthPage = ['/login', '/reset-password', '/email-verify'].includes(location.pathname);

  // If we are on an auth page, don't render the global Navbar
  if (isAuthPage) return null;

  // On the Homepage, the Homepage component renders its own Navbar to pass activeIndex.
  // Prevent App.jsx's global Navbar from rendering a duplicate.
  if (isHomePage && activeIndex === undefined) return null;

  // Hero (0), Performance (5), and Contact/Footer (6) use dark text for visibility on white/light backgrounds.
  // What We Do (1), Who We Serve (2), Documentation (3), How We Work (4) use white text.
  let isDarkText = false;
  if (isHomePage) {
    isDarkText = (activeIndex === 0 || activeIndex === 5 || activeIndex === 6);
  } else if (isAboutPage) {
    isDarkText = false; // Pages like About, Services, Contact have dark backgrounds
  } else {
    isDarkText = true;
  }

  // Logo hidden across every section of the homepage.
  const displayLogo = isHomePage ? false : true;

  const navLinks = [
    { name: 'Home', href: '/', onClick: (e) => { e.preventDefault(); setIsOpen(false); navigate('/'); window.scrollTo(0, 0); } },
    { name: 'About', href: '/about', onClick: (e) => { e.preventDefault(); setIsOpen(false); navigate('/about'); window.scrollTo(0, 0); } },
    { name: 'Services', href: '/services', onClick: (e) => { e.preventDefault(); setIsOpen(false); navigate('/services'); window.scrollTo(0, 0); } },
    { name: 'Contact', href: '#', onClick: (e) => { e.preventDefault(); setIsOpen(false); navigate('/contact'); window.scrollTo(0, 0); } },
    { name: 'Event', href: '/event', onClick: (e) => { e.preventDefault(); setIsOpen(false); navigate('/event'); window.scrollTo(0, 0); } },
  ];

  // Split links into two columns for the layout shown in the screenshot
  const col1 = navLinks.slice(0, 4);
  const col2 = navLinks.slice(4);
  const isHomeHeroSection = isHomePage && activeIndex === 0;
  const authControlText = isDarkText ? 'text-gray-800 border-gray-500 hover:bg-gray-100' : 'text-white border-white/70 hover:bg-white/10';
  const authControl = isLoggedIn ? (
    <div
      className="group relative flex h-8 w-8 items-center justify-center rounded-full bg-black text-white cursor-pointer"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      {userData ? (userData.name ? userData.name[0].toUpperCase() : 'U') : <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
      <div className={`absolute right-0 top-0 z-10 pt-10 text-black ${isDropdownOpen ? 'block' : 'hidden group-hover:block'}`}>
        <ul className="m-0 list-none rounded bg-gray-100 p-2 text-sm shadow-lg">
          {userData && !userData.isAccountVerified && (
            <li
              onClick={(e) => { e.stopPropagation(); sendVerificationEmail(); }}
              className="cursor-pointer whitespace-nowrap px-2 py-1 hover:bg-gray-200"
            >
              Verify Email
            </li>
          )}
          <li
            onClick={(e) => { e.stopPropagation(); logout(); }}
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
      className={`flex items-center gap-1.5 sm:gap-2 rounded-full border px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base transition-all ${authControlText}`}
    >
      User
      <FaArrowRight className="text-xs sm:text-sm" />
    </button>
  );

  return (
    <>
      {/* Global Shell (Visible when menu is CLOSED) */}
      {!isOpen && (
        <div className="pointer-events-none">
          {/* Header */}
          <header className={`${positionClass} top-0 left-0 right-0 w-full px-4 sm:px-6 md:px-12 flex items-start justify-between z-[100] font-gilroy pointer-events-auto pt-3 md:pt-4`}>

            <div className="flex items-start gap-2 sm:gap-4 md:gap-8">
              {/* Two-Line Hamburger Trigger */}
              <button
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                className="tablet-nav-toggle group p-2 -ml-2 mt-1 sm:mt-1.5 md:mt-3 transition-all duration-300 pointer-events-auto flex xl:hidden flex-col gap-1.5"
              >
                <div className={`w-7 sm:w-8 h-[3px] sm:h-1 md:w-10 md:h-1 transition-colors duration-300 ${isDarkText ? 'bg-[#2b2b2b]' : 'bg-white'}`}></div>
                <div className={`w-7 sm:w-8 h-[3px] sm:h-1 md:w-6 md:h-1 transition-colors duration-300 ${isDarkText ? 'bg-[#2b2b2b]' : 'bg-white'}`}></div>
              </button>

              {displayLogo && (
                <div className={`select-none -mt-3 md:-mt-5 ${isAboutPage ? 'bg-white rounded-b-lg px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2 shadow-sm' : ''}`}>
                  <img
                    src={Mentaguidelogo1}
                    alt="Mentaguide Logo"
                    className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain"
                  />
                </div>
              )}
            </div>

            <div className="mt-1 sm:mt-1.5 md:mt-3 z-[100] pointer-events-auto">
              {authControl}
            </div>

          </header>

          {/* Left Vertical (Countries) */}
          {!hideFloatingNav && (
          <div className={`desktop-side-nav ${positionClass} left-6 md:left-8 lg:left-10 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center z-50 w-0 pointer-events-auto`}>
            <div className={`-rotate-90 flex items-center gap-3 ${isHomeHeroSection ? 'text-[0.85rem]' : 'text-[0.85rem] lg:text-[0.9rem]'} tracking-widest font-bold font-gilroy uppercase whitespace-nowrap transition-colors duration-300 ${isDarkText ? 'text-black' : 'text-white'}`}>
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo(0, 0); }} className="hover:text-[#a4d64f] transition-colors">Home</a> <span className="font-light opacity-50">|</span>
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('/about'); window.scrollTo(0, 0); }} className="hover:text-[#a4d64f] transition-colors">About</a> <span className="font-light opacity-50">|</span>
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('/services'); window.scrollTo(0, 0); }} className="hover:text-[#a4d64f] transition-colors">Service</a> <span className="font-light opacity-50">|</span>
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('/contact'); window.scrollTo(0, 0); }} className="hover:text-[#a4d64f] transition-colors">Contact</a> <span className="font-light opacity-50">|</span>
              {/* <a href="/" onClick={(e) => { e.preventDefault(); navigate('/event'); window.scrollTo(0, 0); }} className="hover:text-[#a4d64f] transition-colors">Event</a> <span className="font-light opacity-50">|</span> */}
              {/* <a href="#" className="hover:text-[#a4d64f] transition-colors">USA</a> */}
            </div>
          </div>
          )}

          {/* Right Vertical (Socials) */}
          {!hideFloatingNav && (
          <div className={`desktop-side-nav ${positionClass} right-8 md:right-10 lg:right-12 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center z-50 w-0 pointer-events-auto`}>
            <div className={`rotate-90 flex items-center gap-6 ${isHomeHeroSection ? 'text-[0.85rem]' : 'text-[0.85rem] lg:text-[1rem]'} font-bold font-gilroy tracking-wider whitespace-nowrap transition-colors duration-300 ${isDarkText ? 'text-black' : 'text-white'}`}>
              <a href="https://www.facebook.com/profile.php?id=61589020599973&sk=about" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors lowercase">facebook</a>
              <a href="https://www.instagram.com/mentaguide/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors lowercase">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors lowercase">x</a>
              <a href="https://www.linkedin.com/company/mentaguide" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors lowercase">linkedin</a>
              <a href="https://www.youtube.com/@MENTAGUIDE" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors lowercase">youtube</a>
            </div>
          </div>
          )}

          {/* Bottom Elements */}
          {!hideFloatingNav && location.pathname !== '/event' && (
          <div className={`${positionClass} ${location.pathname === '/about' ? 'top-[calc(100vh-0.0rem)] sm:top-[calc(100vh-1rem)] md:top-[calc(100vh-4rem)] lg:top-[calc(100vh-4.5rem)]' : isAboutPage ? 'top-[calc(100vh-8rem)] sm:top-[calc(100vh-6rem)] md:top-[calc(100vh-4rem)] lg:top-[calc(100vh-4.5rem)]' : 'bottom-8 md:bottom-4 lg:bottom-6'} left-0 right-0 flex flex-col md:flex-row justify-between items-center md:items-end z-50 px-6 md:px-8 lg:px-20 pointer-events-auto`}>
            <div className={`${isHomeHeroSection ? 'hidden' : 'flex'} flex-wrap justify-center items-center gap-4 md:gap-5 lg:gap-10 text-xs sm:text-sm md:text-base lg:text-[1.25rem] font-bold transition-colors duration-300 pl-0 lg:pl-32 xl:pl-48 ${isDarkText ? 'text-black' : 'text-white'}`}>
              {!isLoggedIn && (
                <button onClick={openLogin} className={`font-gilroy hover:text-[#a4d64f] transition-colors uppercase tracking-widest cursor-pointer ${isHomeHeroSection ? 'text-white' : ''}`}>Login</button>
              )}
              <button onClick={handleAdvertiserClick} className="bg-[#a4d64f] text-[#202523] px-5 py-2 md:px-5 md:py-2.5 lg:px-6 rounded-full font-black uppercase tracking-widest hover:bg-[#b5e663] transition-all hover:-translate-y-1 shadow-[0_4px_14px_rgba(164,214,79,0.3)] text-xs lg:text-base cursor-pointer hidden md:block whitespace-nowrap">Enquiry Now</button>
            </div>
            <div className={`${location.pathname === '/event' ? 'hidden sm:flex' : 'flex'} flex-col sm:flex-row justify-end md:justify-center items-end sm:items-center gap-0.5 sm:gap-3 md:gap-2 ${isHomeHeroSection ? 'text-base' : 'lg:gap-3 text-[0.75rem] sm:text-[1rem] md:text-base lg:text-[1.15rem]'} font-bold font-gilroy tracking-wide mt-1 md:mt-0 transition-colors duration-300 self-end md:self-auto ${isHomeHeroSection ? 'text-white translate-x-6 md:translate-x-10 lg:translate-x-85 -translate-y-2 md:-translate-y-3 lg:-translate-y-4' : isDarkText ? 'text-black' : 'text-white'}`}>
              <a href="tel:+917708505529" className="hover:text-[#a4d64f] transition-colors cursor-pointer">+91 7708505529</a>
              <span className="hidden sm:inline opacity-50">|</span>
              <a href="mailto:info@mentaguide.com" className="hover:text-[#a4d64f] transition-colors cursor-pointer whitespace-nowrap">info@mentaguide.com</a>
            </div>
          </div>
          )}
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
          <div className="desktop-side-nav fixed left-6 md:left-8 lg:left-10 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center z-50 w-0">
            <div className="-rotate-90 flex items-center gap-3 text-[0.85rem] lg:text-[0.9rem] tracking-widest font-bold font-gilroy uppercase whitespace-nowrap text-black">
              <a href="/" onClick={(e) => { e.preventDefault(); setIsOpen(false); navigate('/'); window.scrollTo(0, 0); }} className="hover:text-[#a4d64f] transition-colors">Home</a> <span className="font-light opacity-50">|</span>
              <a href="/about" onClick={(e) => { e.preventDefault(); setIsOpen(false); navigate('/about'); window.scrollTo(0, 0); }} className="hover:text-[#a4d64f] transition-colors">About</a> <span className="font-light opacity-50">|</span>
              <a href="#" className="hover:text-[#a4d64f] transition-colors">Services</a> <span className="font-light opacity-50">|</span>
              <a href="#" className="hover:text-[#a4d64f] transition-colors">Contact</a> <span className="font-light opacity-50">|</span>
            </div>
          </div>

          <div className="desktop-side-nav fixed right-8 md:right-10 lg:right-12 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center z-50 w-0">
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
              <button onClick={handleAdvertiserClick} className="bg-[#a4d64f] text-[#202523] px-5 py-2 md:px-6 md:py-2.5 rounded-full font-black uppercase tracking-widest hover:bg-[#b5e663] transition-all hover:-translate-y-1 shadow-[0_4px_14px_rgba(164,214,79,0.3)] text-xs md:text-sm lg:text-base cursor-pointer">
                Enquiry Now
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-[1rem] md:text-[1.1rem] font-bold font-gilroy tracking-wide mt-4 md:mt-0">
              <a href="tel:+917708505529" className="hover:text-[#a4d64f] transition-colors cursor-pointer">+91 7708505529</a>
              <span className="hidden sm:inline opacity-50">|</span>
              <a href="mailto:info@mentaguide.com" className="hover:text-[#a4d64f] transition-colors cursor-pointer">info@mentaguide.com</a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;