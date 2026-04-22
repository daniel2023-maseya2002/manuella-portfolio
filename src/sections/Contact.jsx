// src/sections/Contact.jsx
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mvzdvzqe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'manuelahart21@gmail.com',
      href: 'mailto:manuelahart21@gmail.com',
      gradient: 'from-rose-400 to-pink-500'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+250 791 226 903',
      href: 'tel:+250791226903',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Kigali, Rwanda',
      href: null,
      gradient: 'from-emerald-400 to-teal-500'
    }
  ];

  const inputFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'manuella Hart',
      required: true,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'manuellaHart@example.com',
      required: true,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '+250 791 226 903',
      required: true,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-cream via-nudeLight to-nude">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-nude rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brownSoft rounded-full blur-3xl opacity-30 animate-pulse-slow delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 animate-spin-slow"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#8B6F65_1px,transparent_1px),linear-gradient(-45deg,#8B6F65_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/40 mb-6 animate-float">
            <div className="relative">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-brownSoft font-semibold text-sm tracking-wide uppercase">
              Get in Touch
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brownSoft to-nudeDark bg-clip-text text-transparent">
              Let's
            </span>
            <span className="text-nudeDark"> Connect</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Have a project in mind? I'd love to hear from you
          </p>
          
          <div className="flex justify-center items-center space-x-3 mt-6">
            <div className="w-20 h-0.5 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full"></div>
            <div className="w-3 h-3 bg-brownSoft rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-nudeDark rounded-full"></div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full"></div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brownSoft to-nudeDark rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-500 group-hover:rotate-6`}>
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-sm font-bold text-brownSoft mb-2 uppercase tracking-wider">
                  {info.label}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-700 font-medium hover:text-brownSoft transition-all duration-300 group-hover:underline"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group animate-slide-up" style={{ animationDelay: '300ms' }}>
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brownSoft via-nudeDark to-brownSoft rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient"></div>
            
            <div className="relative bg-white/30 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-2xl border border-white/50 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-nudeLight/30 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-brownSoft/10 to-transparent rounded-full blur-2xl"></div>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-5 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm border border-emerald-400/50 rounded-xl text-emerald-700 text-center animate-slide-down">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm">I'll get back to you within 24-48 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-5 bg-gradient-to-r from-red-500/20 to-rose-600/20 backdrop-blur-sm border border-red-400/50 rounded-xl text-red-700 text-center animate-slide-down">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Something went wrong!</p>
                      <p className="text-sm">Please try again or contact me directly via email.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {inputFields.map((field) => (
                    <div key={field.name} className="relative group/field">
                      <label htmlFor={field.name} className="block text-brownSoft font-semibold mb-2 text-sm tracking-wide">
                        {field.label} {field.required && <span className="text-rose-500">*</span>}
                      </label>
                      <div className="relative">
                        <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-300 ${focusedField === field.name ? 'text-brownSoft scale-110' : 'text-brownSoft/50'}`}>
                          {field.icon}
                        </div>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          required={field.required}
                          className="w-full pl-12 pr-4 py-3.5 bg-white/40 backdrop-blur-sm border-2 border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brownSoft focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 hover:bg-white/60"
                          placeholder={field.placeholder}
                        />
                        <div className={`absolute inset-0 rounded-xl pointer-events-none transition-all duration-300 ${focusedField === field.name ? 'ring-2 ring-brownSoft/50' : ''}`}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Field */}
                <div className="relative group/field">
                  <label htmlFor="message" className="block text-brownSoft font-semibold mb-2 text-sm tracking-wide">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                      <svg className="w-5 h-5 text-brownSoft/50 group-focus-within/field:text-brownSoft transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full pl-12 pr-4 py-3.5 bg-white/40 backdrop-blur-sm border-2 border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brownSoft focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none hover:bg-white/60"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-4 bg-gradient-to-r from-brownSoft via-nudeDark to-brownSoft bg-size-200 bg-pos-0 hover:bg-pos-100 text-cream rounded-xl font-semibold overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span>Send Message</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-nudeDark via-brownSoft to-nudeDark bg-size-200 bg-pos-100 group-hover:bg-pos-0 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-white/30">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                    </div>
                    <span className="text-sm text-gray-600">Available for freelance work</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-brownSoft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs text-gray-500">Response within 24h</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-brownSoft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-xs text-gray-500">100% Confidential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-down {
          animation: slide-down 0.5s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        .bg-pos-0 {
          background-position: 0% 0%;
        }
        
        .bg-pos-100 {
          background-position: 100% 100%;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Contact;