// src/sections/Services.jsx

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const serviceCategories = [
    {
      title: "Accounting & Finance",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      items: ["Bookkeeping", "Financial statements", "Bank reconciliation"],
      color: "from-emerald-400 to-emerald-600"
    },
    {
      title: "Tax & Compliance",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      items: ["VAT", "Corporate Tax", "Regulatory compliance"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Audit Support",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: ["Audit preparation", "Document verification"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Administrative & Operations",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      items: ["Scheduling", "Documentation", "Reporting"],
      color: "from-orange-400 to-orange-600"
    }
  ];

  const additionalInfo = [
    {
      title: "Availability",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: "Remote or in-person",
      location: "Kigali, Rwanda"
    },
    {
      title: "Pricing",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: "Contact for pricing",
      note: "Custom quotes available"
    },
    {
      title: "Services Provided",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      services: ["Administrative Assistance", "Customer Service", "Virtual Assistance", "Bookkeeping"]
    }
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-bl from-cream via-nudeLight to-cream">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-nude rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brownSoft rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/40 mb-6">
            <div className="w-1.5 h-1.5 bg-brownSoft rounded-full"></div>
            <span className="text-brownSoft font-semibold text-sm tracking-wide uppercase">
              What I Offer
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brownSoft to-nudeDark bg-clip-text text-transparent">
              Professional
            </span>
            <span className="text-nudeDark"> Services</span>
          </h2>
          
          <div className="flex justify-center items-center space-x-3 mt-6">
            <div className="w-16 h-1 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full"></div>
            <div className="w-2 h-2 bg-brownSoft rounded-full"></div>
            <div className="w-2 h-2 bg-nudeDark rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full"></div>
          </div>
        </div>

        {/* Overview Block */}
        <div className="mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-brownSoft to-nudeDark rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-brownSoft to-nudeDark rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brownSoft mb-3">Overview</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    I provide reliable and results-driven support in administrative assistance, accounting, 
                    and virtual assistance to support growing businesses. With experience supporting startups 
                    and small and medium-sized enterprises, I combine strong financial knowledge with practical 
                    sales and marketing skills to help businesses improve accuracy, efficiency, and profitability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brownSoft to-nudeDark rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-white/40 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50 h-full">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-nudeLight to-nude rounded-xl flex items-center justify-center text-brownSoft group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brownSoft text-center mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-brownSoft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {additionalInfo.map((info, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brownSoft to-nudeDark rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-white/40 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-nudeLight to-nude rounded-full flex items-center justify-center text-brownSoft group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-brownSoft mb-3">{info.title}</h3>
                {info.content && (
                  <p className="text-gray-700 font-semibold">{info.content}</p>
                )}
                {info.location && (
                  <p className="text-sm text-gray-500 mt-1">{info.location}</p>
                )}
                {info.note && (
                  <p className="text-xs text-gray-500 mt-1">{info.note}</p>
                )}
                {info.services && (
                  <div className="mt-3 space-y-1">
                    {info.services.map((service, idx) => (
                      <p key={idx} className="text-sm text-gray-600">{service}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="group relative px-10 py-4 bg-gradient-to-r from-brownSoft to-nudeDark text-cream rounded-xl font-semibold overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Get in Touch</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-nudeDark to-brownSoft transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Services;