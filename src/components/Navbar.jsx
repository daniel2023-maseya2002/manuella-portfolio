// src/components/Navbar.jsx
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' }
  ];

  const dropdownLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' }
  ];

  const contactLink = { name: 'Contact', href: '#contact', id: 'contact' };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const allSections = [...navLinks, ...dropdownLinks, contactLink];
      for (const section of allSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offset = element.offsetTop - 100;
          const height = element.offsetHeight;
          if (scrollPosition >= offset && scrollPosition < offset + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSmoothScroll = (e, href, id) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setIsOpen(false);
      setIsDropdownOpen(false);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
      setIsDropdownOpen(false);
    }
  };

  const isActive = (id) => activeSection === id;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-2xl'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 md:py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home', 'home')}
            className="group relative"
          >
            <span className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-brownSoft to-nudeDark bg-clip-text text-transparent">
              Manuela
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brownSoft to-nudeDark transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Regular nav links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href, link.id)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                  isActive(link.id)
                    ? 'text-brownSoft'
                    : 'text-gray-700 hover:text-brownSoft'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-brownSoft to-nudeDark transition-all duration-300 ${
                    isActive(link.id)
                      ? 'w-6'
                      : 'w-0 group-hover:w-4'
                  }`}
                ></span>
              </a>
            ))}

            {/* Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                ref={dropdownButtonRef}
                onClick={toggleDropdown}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group flex items-center space-x-1 ${
                  dropdownLinks.some(link => isActive(link.id))
                    ? 'text-brownSoft'
                    : 'text-gray-700 hover:text-brownSoft'
                }`}
              >
                <span>Work</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-brownSoft to-nudeDark transition-all duration-300 ${
                    dropdownLinks.some(link => isActive(link.id))
                      ? 'w-6'
                      : 'w-0 group-hover:w-4'
                  }`}
                ></span>
              </button>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl py-2 border border-white/50 animate-dropdown"
                >
                  {dropdownLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href, link.id)}
                      className={`block px-5 py-3 text-sm font-medium transition-all duration-300 hover:bg-nudeLight/50 ${
                        isActive(link.id)
                          ? 'text-brownSoft bg-nudeLight/30'
                          : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-1 h-1 rounded-full ${isActive(link.id) ? 'bg-brownSoft' : 'bg-transparent'} transition-all duration-300`}></div>
                        <span>{link.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Contact link */}
            <a
              href={contactLink.href}
              onClick={(e) => handleSmoothScroll(e, contactLink.href, contactLink.id)}
              className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                isActive(contactLink.id)
                  ? 'text-brownSoft'
                  : 'text-gray-700 hover:text-brownSoft'
              }`}
            >
              {contactLink.name}
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-brownSoft to-nudeDark transition-all duration-300 ${
                  isActive(contactLink.id)
                    ? 'w-6'
                    : 'w-0 group-hover:w-4'
                }`}
              ></span>
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={scrollToContact}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-brownSoft to-nudeDark text-cream rounded-xl font-semibold overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Hire Me</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-nudeDark to-brownSoft transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-brownSoft transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-brownSoft transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-brownSoft transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href, link.id)}
                className={`text-center py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive(link.id)
                    ? 'bg-gradient-to-r from-brownSoft to-nudeDark text-cream shadow-lg'
                    : 'text-gray-700 hover:bg-nudeLight/50'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Dropdown Section */}
            <div className="border-t border-nudeLight/30 pt-2">
              <div className="text-center py-2 text-sm font-semibold text-brownSoft/70 uppercase tracking-wider">
                Work
              </div>
              {dropdownLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href, link.id)}
                  className={`block text-center py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive(link.id)
                      ? 'bg-gradient-to-r from-brownSoft to-nudeDark text-cream shadow-lg'
                      : 'text-gray-700 hover:bg-nudeLight/50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Mobile Contact */}
            <a
              href={contactLink.href}
              onClick={(e) => handleSmoothScroll(e, contactLink.href, contactLink.id)}
              className={`text-center py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive(contactLink.id)
                  ? 'bg-gradient-to-r from-brownSoft to-nudeDark text-cream shadow-lg'
                  : 'text-gray-700 hover:bg-nudeLight/50'
              }`}
            >
              {contactLink.name}
            </a>
            
            {/* Mobile CTA Button */}
            <button
              onClick={scrollToContact}
              className="mt-4 py-3 bg-gradient-to-r from-brownSoft to-nudeDark text-cream rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Hire Me</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-dropdown {
          animation: dropdown 0.2s ease-out;
        }
        
        .mobile-menu-open {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;