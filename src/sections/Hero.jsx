// src/sections/Hero.jsx
import { useEffect, useState } from 'react';
import cvFile from '../assets/documents/cv.pdf';
import profileImage from '../assets/images/pictureprofile.jpeg';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Kamgang_Hart_Manuela_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-nudeLight to-nude">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-nude rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brownSoft rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-nudeLight to-transparent opacity-20 rotate-45"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B6F65_1px,transparent_1px),linear-gradient(to_bottom,#8B6F65_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-12 sm:py-16 md:py-20 w-full z-10">
          <div className={`flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* LEFT SIDE - Text Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
              {/* Animated badge */}
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/40 backdrop-blur-md rounded-full shadow-lg border border-white/30 animate-slideInLeft mx-auto lg:mx-0">
                <div className="relative">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full"></div>
                  <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-brownSoft font-semibold text-xs sm:text-sm tracking-wide">
                  Available for opportunities
                </span>
              </div>

              {/* Name with animation */}
              <div className="animate-slideInLeft animation-delay-200">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-brownSoft to-nudeDark bg-clip-text text-transparent">
                    Kamgang Hart
                  </span>
                  <span className="block text-nudeDark mt-1 sm:mt-2 relative inline-block">
                    Manuela
                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-nudeDark to-transparent rounded-full"></div>
                  </span>
                </h1>
              </div>

              {/* Decorative elements */}
              <div className="flex items-center space-x-2 sm:space-x-3 animate-slideInLeft animation-delay-400 justify-center lg:justify-start">
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brownSoft rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-nudeDark rounded-full"></div>
                <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-nudeDark to-transparent rounded-full"></div>
              </div>

              {/* Title */}
              <div className="animate-slideInLeft animation-delay-600">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-nudeDark relative inline-block">
                  Accounting & Finance Professional
                  <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1.5 sm:h-2" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,5 Q50,0 100,5 T200,5" stroke="#D2B1A3" fill="none" strokeWidth="2"/>
                  </svg>
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed animate-fadeIn animation-delay-800">
                Dedicated <span className="text-brownSoft font-bold relative inline-block group">
                  Accounting
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brownSoft transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span> professional with expertise in 
                financial reporting, <span className="text-brownSoft font-bold relative inline-block group">
                  Audit
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brownSoft transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span> support, and 
                <span className="text-brownSoft font-bold relative inline-block group">
                  Finance
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brownSoft transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span> management. Committed to delivering accuracy 
                and excellence in every financial operation, helping businesses maintain financial integrity and make 
                informed strategic decisions.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 animate-slideInUp animation-delay-1000 justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-brownSoft to-nudeDark text-cream rounded-xl font-semibold overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Contact Me</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-nudeDark to-brownSoft transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                
                <button
                  onClick={openModal}
                  className="group px-6 sm:px-8 py-2.5 sm:py-3 bg-white/30 backdrop-blur-sm border-2 border-brownSoft text-brownSoft rounded-xl font-semibold hover:bg-brownSoft hover:text-cream transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download CV</span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 animate-fadeIn animation-delay-1200">
                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brownSoft group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-base sm:text-lg font-bold text-brownSoft">2+</span>
                      <span className="text-xs sm:text-sm text-gray-600 ml-1">Years Experience</span>
                    </div>
                  </div>
                </div>
                <div className="w-px h-6 sm:h-8 bg-nudeDark hidden sm:block"></div>
                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brownSoft group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <span className="text-base sm:text-lg font-bold text-brownSoft">10+</span>
                      <span className="text-xs sm:text-sm text-gray-600 ml-1">Projects Completed</span>
                    </div>
                  </div>
                </div>
                <div className="w-px h-6 sm:h-8 bg-nudeDark hidden sm:block"></div>
                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brownSoft group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-base sm:text-lg font-bold text-brownSoft">100%</span>
                      <span className="text-xs sm:text-sm text-gray-600 ml-1">Client Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Circular Profile Image with Modern Frame */}
            <div className="relative flex justify-center items-center order-1 lg:order-2 animate-slideInRight mb-8 lg:mb-0">
              {/* Animated rings - adjusted for mobile */}
              <div className="absolute w-full h-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] border-2 border-nudeDark/20 rounded-full animate-ping-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] border border-nude/30 rounded-full animate-spin-slow"></div>
              </div>

              {/* Main circular frame */}
              <div className="relative group">
                {/* Outer glow effect */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-brownSoft via-nudeDark to-nude rounded-full blur-xl sm:blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Gradient border circle */}
                <div className="relative p-[2px] sm:p-[3px] bg-gradient-to-r from-brownSoft via-nudeDark to-nude rounded-full shadow-xl sm:shadow-2xl">
                  <div className="relative bg-gradient-to-br from-cream to-nudeLight rounded-full p-2 sm:p-3">
                    {/* Decorative rotating border */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brownSoft/30 to-transparent rotate-45"></div>
                    </div>
                    
                    {/* Image container */}
                    <div className="relative overflow-hidden rounded-full w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]">
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-brownSoft/30 via-transparent to-nudeDark/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 z-20 rounded-full"></div>
                      
                      {/* Profile image */}
                      <img
                        src={profileImage}
                        alt="Kamgang Hart Manuela - Accounting & Finance Professional"
                        className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Modern badge overlay */}
                      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md rounded-full px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30 whitespace-nowrap">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-cream text-xs sm:text-sm font-semibold">Finance Expert</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner decorative dots */}
                    <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-brownSoft rounded-full"></div>
                    <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-nudeDark rounded-full"></div>
                    <div className="absolute -bottom-1.5 -left-1.5 sm:-bottom-2 sm:-left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-nudeDark rounded-full"></div>
                    <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-brownSoft rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements - hidden on very small screens */}
              <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full opacity-20 animate-float hidden sm:block"></div>
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full opacity-20 animate-float-delay hidden sm:block"></div>
              
              {/* Floating small circles */}
              <div className="absolute top-1/4 -right-4 sm:-right-6 w-2 h-2 sm:w-3 sm:h-3 bg-brownSoft rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 -left-4 sm:-left-6 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-nudeDark rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on very small screens */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-brownSoft rounded-full flex justify-center">
            <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-brownSoft rounded-full mt-1.5 sm:mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* CV MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative bg-gradient-to-br from-cream to-nudeLight rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden animate-scaleIn mx-2 sm:mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with gradient */}
            <div className="relative bg-gradient-to-r from-brownSoft to-nudeDark p-4 sm:p-6">
              <div className="flex justify-between items-start sm:items-center gap-3">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cream">Curriculum Vitae</h3>
                  <p className="text-cream/80 text-xs sm:text-sm mt-0.5 sm:mt-1">Kamgang Hart Manuela</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-cream/80 hover:text-cream transition-colors duration-200 bg-white/10 rounded-full p-1.5 sm:p-2 hover:bg-white/20 flex-shrink-0"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="p-4 sm:p-6 bg-nudeLight/20">
              <iframe
                src={cvFile}
                title="CV Preview"
                className="w-full h-[50vh] sm:h-[60vh] rounded-lg shadow-inner bg-white"
                frameBorder="0"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 p-4 sm:p-6 bg-gradient-to-t from-nudeLight/30 to-transparent">
              <button
                onClick={closeModal}
                className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white text-brownSoft rounded-lg font-semibold hover:bg-nudeLight transition-all duration-300 shadow-md text-sm sm:text-base order-2 sm:order-1"
              >
                Close
              </button>
              <button
                onClick={downloadCV}
                className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-brownSoft to-nudeDark text-cream rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base order-1 sm:order-2"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(6px);
            opacity: 0;
          }
        }
        
        @media (min-width: 640px) {
          @keyframes slideInLeft {
            from {
              transform: translateX(-50px);
            }
            to {
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              transform: translateX(50px);
            }
            to {
              transform: translateX(0);
            }
          }
          
          @keyframes slideInUp {
            from {
              transform: translateY(30px);
            }
            to {
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes scroll {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(8px);
              opacity: 0;
            }
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fadeInScale {
          animation: fadeInScale 0.3s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 3s ease-in-out infinite 1.5s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s ease-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </>
  );
};

export default Hero;