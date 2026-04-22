// src/components/Footer.jsx
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'manuelahart21@gmail.com',
      href: 'mailto:manuelahart21@gmail.com'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+250 791 226 903',
      href: 'tel:+250791226903'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Kigali, Rwanda',
      href: null
    }
  ];

  const openWhatsApp = () => {
    const phoneNumber = '250791226903';
    const message = 'Hello, I hope you\'re doing well. I visited your portfolio and I am interested in discussing a potential collaboration or work opportunity with you. Please let me know a convenient time to connect. Thank you.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      href: 'https://www.linkedin.com/in/manuelakamgang/',
      color: 'hover:bg-[#0077b5]'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      href: 'https://www.instagram.com/manuellahart?igsh=aW9wazJyeDh4bmxh',
      color: 'hover:bg-[#e4405f]'
    },
    // {
    //   name: 'X (Twitter)',
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    //     </svg>
    //   ),
    //   href: 'https://twitter.com/manuela',
    //   color: 'hover:bg-[#000000]'
    // },
    {
      name: 'WhatsApp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
          <path d="M16.001 3C8.821 3 3 8.822 3 16c0 2.821.922 5.427 2.48 7.535L3 29l5.654-2.455A12.94 12.94 0 0016 29c7.179 0 13-5.822 13-13S23.18 3 16.001 3zm0 23.4a10.35 10.35 0 01-5.273-1.447l-.378-.224-3.356 1.457.715-3.271-.246-.38A10.33 10.33 0 015.65 16c0-5.708 4.643-10.35 10.351-10.35 5.707 0 10.35 4.642 10.35 10.35 0 5.708-4.643 10.35-10.35 10.35zm5.677-7.752c-.311-.156-1.837-.907-2.123-1.01-.285-.104-.493-.156-.701.156-.207.311-.804 1.01-.986 1.218-.181.207-.363.233-.674.078-.311-.156-1.314-.484-2.503-1.542-.925-.825-1.549-1.844-1.731-2.155-.181-.311-.019-.479.137-.635.14-.139.311-.363.467-.545.156-.182.207-.311.311-.519.104-.207.052-.389-.026-.545-.078-.156-.701-1.692-.96-2.318-.252-.607-.508-.525-.701-.535l-.597-.01c-.207 0-.545.078-.83.389s-1.09 1.064-1.09 2.595 1.116 3.008 1.272 3.215c.156.207 2.197 3.355 5.323 4.703.744.321 1.324.512 1.776.655.746.237 1.425.204 1.962.124.598-.089 1.837-.75 2.097-1.475.259-.726.259-1.348.181-1.475-.078-.129-.285-.207-.597-.363z"/>
        </svg>
      ),
      onClick: openWhatsApp,
      color: 'hover:bg-[#25D366]',
      title: 'Chat on WhatsApp'
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: 'mailto:manuelahart21@gmail.com',
      color: 'hover:bg-[#ea4335]'
    }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus(null), 3000);
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#8B6F65] to-[#6B5349] text-white rounded-t-3xl shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"></div>
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="space-y-4 animate-fade-in">
            <div className="relative inline-block">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Kamgang Hart
              </h3>
              <h4 className="text-xl font-semibold text-white/90 mt-1">
                Manuela
              </h4>
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"></div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Accounting & Finance Professional dedicated to delivering excellence in financial management and business operations.
            </p>
            <div className="flex space-x-3 pt-2 flex-wrap gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  onClick={social.onClick ? (e) => {
                    e.preventDefault();
                    social.onClick();
                  } : undefined}
                  target={social.href && !social.onClick ? "_blank" : undefined}
                  rel={social.href && !social.onClick ? "noopener noreferrer" : undefined}
                  title={social.title || `Visit my ${social.name}`}
                  className={`group w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${social.color} hover:text-white cursor-pointer`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h5 className="text-lg font-bold relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white/40 rounded-full"></span>
            </h5>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="group inline-flex items-center text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 text-sm"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <svg className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h5 className="text-lg font-bold relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white/40 rounded-full"></span>
            </h5>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={info.label} className="group">
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-start space-x-3 text-white/70 hover:text-white transition-all duration-300 group-hover:translate-x-1 text-sm"
                    >
                      <div className="w-5 h-5 mt-0.5 text-white/50 group-hover:text-white transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-white/80 text-xs">{info.label}</p>
                        <p>{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start space-x-3 text-white/70 text-sm">
                      <div className="w-5 h-5 mt-0.5 text-white/50">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-white/80 text-xs">{info.label}</p>
                        <p>{info.value}</p>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h5 className="text-lg font-bold relative inline-block">
              Stay Updated
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white/40 rounded-full"></span>
            </h5>
            <p className="text-white/70 text-sm">
              Subscribe to get updates on my latest work and opportunities.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 text-white placeholder-white/50 text-sm"
                />
                <div className="absolute inset-0 rounded-xl pointer-events-none ring-1 ring-white/0 group-focus-within:ring-white/30 transition-all duration-300"></div>
              </div>
              <button
                type="submit"
                className="group relative w-full py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/30 text-sm"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Subscribe</span>
                </span>
              </button>
              {subscribeStatus === 'success' && (
                <p className="text-xs text-emerald-300 text-center animate-slide-down">
                  Thanks for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {currentYear} Manuela. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white/40 hover:text-white text-sm transition-all duration-300 hover:scale-105 transform inline-block"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white text-sm transition-all duration-300 hover:scale-105 transform inline-block"
              >
                Terms of Service
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="text-white/40 hover:text-white text-sm transition-all duration-300 hover:scale-105 transform inline-block"
              >
                Support
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-8 right-8 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
        >
          <svg className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;