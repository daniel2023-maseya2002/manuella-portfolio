// src/sections/Experience.jsx
import { useEffect, useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: "Junior Accountant",
      company: "Asuhab & Co Limited",
      period: "Oct 2025 – Apr 2026",
      description: [
        "Recorded daily financial transactions (income, expenses, payments)",
        "Prepared invoices and monitored outstanding rent",
        "Assisted with bank reconciliations",
        "Maintained financial records and monthly reports",
        "Prepared taxes (VAT, CIT, Road Levy)"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Account Manager",
      company: "Profogas Global Company Limited",
      period: "Mar 2026",
      description: [
        "Managed vendor payments",
        "Reconciled daily expenses",
        "Coordinated logistics and schedules"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Audit Intern",
      company: "GPO Partners",
      period: "May 2025 – Jun 2025",
      description: [
        "Assisted in audit fieldwork",
        "Prepared working papers",
        "Evaluated internal controls",
        "Ensured compliance with audit standards"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Personal Assistant",
      company: "TRIFT ALLIANCE",
      period: "May 2023 – Apr 2024",
      description: [
        "Managed schedules and coordination",
        "Supported administrative operations"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Program Coordinator",
      company: "Profogas Global Company Limited",
      period: "Oct 2023 – Nov 2023",
      description: [
        "Coordinated team activities",
        "Managed operational tasks"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Volunteer Staff",
      company: "Afrinaija Pots Restaurant",
      period: "May 2022 – Sep 2024",
      description: [
        "Supported customer service and operations"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-rose-500 to-pink-600"
    }
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-cream via-nudeLight to-nude">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-nude rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brownSoft rounded-full blur-3xl opacity-20 animate-pulse-slow delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#8B6F65_1px,transparent_1px),linear-gradient(-45deg,#8B6F65_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/40 backdrop-blur-md rounded-full shadow-lg border border-white/50 mb-6">
            <div className="relative">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-brownSoft font-semibold text-sm tracking-wide uppercase">
              Career Timeline
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brownSoft to-nudeDark bg-clip-text text-transparent">
              Professional
            </span>
            <span className="text-nudeDark"> Experience</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            A journey of hands-on experience in accounting, audit, and business operations
          </p>
          
          <div className="flex justify-center items-center space-x-3 mt-6">
            <div className="w-20 h-0.5 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full"></div>
            <div className="w-3 h-3 bg-brownSoft rounded-full"></div>
            <div className="w-3 h-3 bg-nudeDark rounded-full"></div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full"></div>
          </div>
        </div>

        {/* Modern Timeline with staggered cards */}
        <div className="relative">
          {/* Gradient vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brownSoft via-nudeDark to-brownSoft rounded-full shadow-lg"></div>
          
          {/* Glowing dots on line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-4 h-4 bg-brownSoft rounded-full shadow-lg animate-pulse"></div>
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-nudeDark rounded-full shadow-lg animate-pulse"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 z-20">
                  <div className={`relative transition-all duration-500 ${activeIndex === index ? 'scale-150' : 'scale-100'}`}>
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-2xl ring-4 ring-white/50 backdrop-blur-sm transition-all duration-500 ${activeIndex === index ? 'shadow-2xl scale-110' : ''}`}>
                      <div className="text-cream">
                        {exp.icon}
                      </div>
                    </div>
                    {activeIndex === index && (
                      <div className="absolute inset-0 rounded-full animate-ping-slow opacity-75" style={{background: `linear-gradient(135deg, ${exp.color.split(' ')[1]}, ${exp.color.split(' ')[3]})`}}></div>
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className={`relative transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`}`}>
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brownSoft to-nudeDark rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  {/* Main card */}
                  <div className={`relative bg-white/30 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-white/50 overflow-hidden group-hover:border-white/70`}>
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${exp.color} transform rotate-45 translate-x-10 -translate-y-10 opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    </div>
                    
                    {/* Period badge */}
                    <div className={`inline-flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r ${exp.color} text-cream rounded-full text-xs font-semibold mb-4 shadow-lg`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{exp.period}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-brownSoft mb-2 group-hover:text-nudeDark transition-colors duration-300">
                      {exp.title}
                    </h3>
                    
                    {/* Company */}
                    <div className="flex items-center space-x-2 mb-4">
                      <svg className="w-4 h-4 text-nudeDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p className="text-nudeDark font-semibold">{exp.company}</p>
                    </div>
                    
                    {/* Description list */}
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">
                          <svg className="w-4 h-4 text-brownSoft mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Hover indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-brownSoft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-white/30 backdrop-blur-md rounded-full shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <div className="relative">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-brownSoft font-semibold">Open to new opportunities</span>
            <svg className="w-5 h-5 text-brownSoft group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;