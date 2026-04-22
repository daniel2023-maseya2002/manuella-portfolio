// src/sections/About.jsx
import { useEffect, useState } from 'react';
import profileImage from '../assets/images/about.jpeg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const strengths = [
    {
      name: 'Communication',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      name: 'Organization',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    },
    {
      name: 'Attention to Detail',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      name: 'Time Management',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Client Service',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    }
  ];

  const achievements = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const expertise = [
    'Financial Analysis', 'Tax Compliance', 'Audit Preparation',
    'Risk Assessment', 'Budget Planning', 'Strategic Advisory'
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-cream via-nudeLight to-nude">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-nude rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brownSoft rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-nudeLight to-transparent opacity-30 rotate-12"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B6F65_1px,transparent_1px),linear-gradient(to_bottom,#8B6F65_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/40 mb-6">
            <div className="relative">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-brownSoft font-semibold text-sm tracking-wide uppercase">
              Get to Know Me
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brownSoft to-nudeDark bg-clip-text text-transparent">
              About
            </span>
            <span className="text-nudeDark"> Me</span>
          </h2>
          
          <div className="flex justify-center items-center space-x-3">
            <div className="w-16 h-1 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full"></div>
            <div className="w-3 h-3 bg-brownSoft rounded-full"></div>
            <div className="w-3 h-3 bg-nudeDark rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT SIDE - Profile Image with Modern Frame */}
          <div className={`relative flex justify-center items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Animated rings */}
            <div className="absolute w-full h-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[480px] md:h-[480px] border-2 border-brownSoft/20 rounded-full animate-ping-slow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[520px] md:h-[520px] border border-nude/30 rounded-full animate-spin-slow"></div>
            </div>

            {/* Main image container */}
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brownSoft via-nudeDark to-nude rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Gradient border */}
              <div className="relative p-[3px] bg-gradient-to-r from-brownSoft via-nudeDark to-nude rounded-2xl shadow-2xl">
                <div className="relative bg-gradient-to-br from-cream to-nudeLight rounded-xl overflow-hidden">
                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-brownSoft rounded-tl-xl z-20"></div>
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-brownSoft rounded-tr-xl z-20"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-brownSoft rounded-bl-xl z-20"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-brownSoft rounded-br-xl z-20"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 z-10"></div>
                  
                  <img
                    src={profileImage}
                    alt="Kamgang Hart Manuela - Accounting Professional"
                    className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Modern badge overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md rounded-lg p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-cream text-xs font-semibold">Accounting Expert</p>
                        <p className="text-cream/70 text-xs">Certified Professional</p>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full opacity-20 animate-float-delay"></div>
          </div>

          {/* RIGHT SIDE - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Achievement stats */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brownSoft to-nudeDark rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white/40 backdrop-blur-md rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50">
                    <div className="flex justify-center mb-2">
                      <svg className="w-6 h-6 text-brownSoft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {index === 0 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                        {index === 1 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        )}
                        {index === 2 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        )}
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-brownSoft">{item.number}</div>
                    <div className="text-xs text-gray-600 mt-1">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main description */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-nudeLight/50 to-cream/50 rounded-xl p-5 border-l-4 border-brownSoft">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  As a soon-to-be <span className="text-brownSoft font-bold relative inline-block group">
                    accounting
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brownSoft transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span> graduate with a strong foundation in 
                  <span className="text-brownSoft font-bold"> finance</span> and a passion for business strategy and 
                  <span className="text-brownSoft font-bold"> operations</span>.
                </p>
              </div>
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                My academic background is complemented by hands-on experience in diverse roles including 
                assistant <span className="text-brownSoft font-bold relative inline-block group">
                  auditor
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brownSoft transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span> intern, personal assistant, customer care representative, 
                salesperson, and receptionist.
              </p>
            </div>

            {/* Expertise tags */}
            <div>
              <h3 className="text-lg font-bold text-brownSoft mb-4 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Areas of Expertise</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/40 backdrop-blur-sm text-brownSoft rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer border border-white/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Strengths cards */}
            <div>
              <h3 className="text-lg font-bold text-brownSoft mb-4 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span>Core Strengths</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {strengths.map((strength, index) => (
                  <div 
                    key={index}
                    className="group relative cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brownSoft/20 to-nudeDark/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-white/40 backdrop-blur-md rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/50">
                      <div className="flex justify-center mb-2">
                        <div className="text-brownSoft group-hover:scale-110 transition-transform duration-300">
                          {strength.icon}
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-brownSoft">{strength.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brownSoft to-nudeDark rounded-xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-r from-nudeLight to-cream rounded-xl p-6 shadow-xl border border-white/50">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-base italic leading-relaxed">
                      "I thrive in dynamic environments, enjoy solving problems, and am eager to contribute my 
                      multidisciplinary experience to a forward-thinking team."
                    </p>
                    <div className="mt-3 flex items-center space-x-2">
                      <div className="flex-1 h-px bg-gradient-to-r from-nudeDark to-transparent"></div>
                      <span className="text-xs text-brownSoft font-semibold">- Kamgang Hart Manuela</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status indicator */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full border-2 border-cream flex items-center justify-center text-xs font-bold text-cream">KH</div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Open for opportunities</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-emerald-600 font-semibold">Available for work</span>
                  </div>
                </div>
              </div>
              <a 
                href="#contact"
                className="text-xs text-brownSoft hover:text-nudeDark font-semibold transition-colors flex items-center space-x-1 group"
              >
                <span>Let's connect</span>
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes ping-slow {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          100% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
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
      `}</style>
    </section>
  );
};

export default About;