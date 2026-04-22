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

        <div className="relative max-w-7xl mx-auto px-6 md:px-20 py-20 w-full z-10">
          <div className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* LEFT SIDE - Text Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Animated badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/40 backdrop-blur-md rounded-full w-fit shadow-lg border border-white/30 animate-slideInLeft">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-brownSoft font-semibold text-sm tracking-wide">
                  Available for opportunities
                </span>
              </div>

              {/* Name with animation */}
              <div className="animate-slideInLeft animation-delay-200">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-brownSoft to-nudeDark bg-clip-text text-transparent">
                    Kamgang Hart
                  </span>
                  <span className="block text-nudeDark mt-2 relative inline-block">
                    Manuela
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-nudeDark to-transparent rounded-full"></div>
                  </span>
                </h1>
              </div>

              {/* Decorative elements */}
              <div className="flex items-center space-x-3 animate-slideInLeft animation-delay-400">
                <div className="w-12 h-0.5 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full"></div>
                <div className="w-2 h-2 bg-brownSoft rounded-full"></div>
                <div className="w-2 h-2 bg-nudeDark rounded-full"></div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-nudeDark to-transparent rounded-full"></div>
              </div>

              {/* Title */}
              <div className="animate-slideInLeft animation-delay-600">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-nudeDark relative inline-block">
                  Accounting & Finance Professional
                  <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,5 Q50,0 100,5 T200,5" stroke="#D2B1A3" fill="none" strokeWidth="2"/>
                  </svg>
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed animate-fadeIn animation-delay-800">
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
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slideInUp animation-delay-1000">
                <button
                  onClick={scrollToContact}
                  className="group relative px-8 py-3 bg-gradient-to-r from-brownSoft to-nudeDark text-cream rounded-xl font-semibold overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Contact Me</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-nudeDark to-brownSoft transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                
                <button
                  onClick={openModal}
                  className="group px-8 py-3 bg-white/30 backdrop-blur-sm border-2 border-brownSoft text-brownSoft rounded-xl font-semibold hover:bg-brownSoft hover:text-cream transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download CV</span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 pt-6 animate-fadeIn animation-delay-1200">
                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-brownSoft group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-lg font-bold text-brownSoft">5+</span>
                      <span className="text-sm text-gray-600 ml-1">Years Experience</span>
                    </div>
                  </div>
                </div>
                <div className="w-px h-8 bg-nudeDark"></div>
                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-brownSoft group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <span className="text-lg font-bold text-brownSoft">50+</span>
                      <span className="text-sm text-gray-600 ml-1">Projects Completed</span>
                    </div>
                  </div>
                </div>
                <div className="w-px h-8 bg-nudeDark"></div>
                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-brownSoft group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-lg font-bold text-brownSoft">100%</span>
                      <span className="text-sm text-gray-600 ml-1">Client Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Circular Profile Image with Modern Frame */}
            <div className="relative flex justify-center items-center animate-slideInRight">
              {/* Animated rings */}
              <div className="absolute w-full h-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] border-2 border-nudeDark/20 rounded-full animate-ping-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] border border-nude/30 rounded-full animate-spin-slow"></div>
              </div>

              {/* Main circular frame */}
              <div className="relative group">
                {/* Outer glow effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-brownSoft via-nudeDark to-nude rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Gradient border circle */}
                <div className="relative p-[3px] bg-gradient-to-r from-brownSoft via-nudeDark to-nude rounded-full shadow-2xl">
                  <div className="relative bg-gradient-to-br from-cream to-nudeLight rounded-full p-3">
                    {/* Decorative rotating border */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brownSoft/30 to-transparent rotate-45"></div>
                    </div>
                    
                    {/* Image container */}
                    <div className="relative overflow-hidden rounded-full w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
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
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md rounded-full px-6 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-cream text-sm font-semibold">Finance Expert</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner decorative dots */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-brownSoft rounded-full"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-nudeDark rounded-full"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-nudeDark rounded-full"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-brownSoft rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full opacity-30 animate-float"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full opacity-30 animate-float-delay"></div>
              
              {/* Floating small circles */}
              <div className="absolute top-1/4 -right-8 w-3 h-3 bg-brownSoft rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 -left-8 w-4 h-4 bg-nudeDark rounded-full animate-pulse delay-700"></div>
              <div className="absolute top-1/3 left-0 w-2 h-2 bg-brownSoft rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-brownSoft rounded-full flex justify-center">
            <div className="w-1 h-2 bg-brownSoft rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* CV MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative bg-gradient-to-br from-cream to-nudeLight rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with gradient */}
            <div className="relative bg-gradient-to-r from-brownSoft to-nudeDark p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-cream">Curriculum Vitae</h3>
                  <p className="text-cream/80 text-sm mt-1">Kamgang Hart Manuela</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-cream/80 hover:text-cream transition-colors duration-200 bg-white/10 rounded-full p-2 hover:bg-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="p-6 bg-nudeLight/20">
              <iframe
                src={cvFile}
                title="CV Preview"
                className="w-full h-[60vh] rounded-lg shadow-inner bg-white"
                frameBorder="0"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-4 p-6 bg-gradient-to-t from-nudeLight/30 to-transparent">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-white text-brownSoft rounded-lg font-semibold hover:bg-nudeLight transition-all duration-300 shadow-md"
              >
                Close
              </button>
              <button
                onClick={downloadCV}
                className="px-6 py-2 bg-gradient-to-r from-brownSoft to-nudeDark text-cream rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
            transform: translateY(-20px);
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
            transform: translateY(8px);
            opacity: 0;
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