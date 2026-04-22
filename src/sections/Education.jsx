// src/sections/Education.jsx
import { useEffect, useRef, useState } from 'react';
import certificatePdf from '../assets/documents/certificate-placeholder.png';
import certificateImage from '../assets/images/certificate-placeholder.jpg';

const Education = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const educationData = [
    {
      id: 1,
      institution: "Adventist University of Central Africa",
      degree: "Bachelor of Business Administration, Accounting",
      period: "Nov 2021 – Jun 2026",
      description: "Comprehensive education in accounting principles, financial management, auditing, and business strategy. Developed strong analytical and problem-solving skills.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      id: 2,
      institution: "Cegep TSD",
      degree: "Bright Language Test (CEFR B2)",
      period: "Aug 2022",
      description: "Certified English language proficiency at B2 level, demonstrating advanced communication skills for professional environments.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      id: 3,
      institution: "ALX Academy",
      degree: "Virtual Assistant, Business Administration",
      period: "May 2025 – Jun 2025",
      description: "Intensive training in virtual assistance, business operations, project management, and administrative support for modern enterprises.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const certificatesData = [
    {
      id: 1,
      title: "Certificate of Achievement",
      issuer: "ALX Academy",
      date: "Jun 2025",
      description: "Successfully completed the Virtual Assistant program with honors, demonstrating excellence in business administration and operational support. This certificate validates comprehensive skills in virtual assistance, project management, and business operations.",
      image: certificateImage,
      pdf: certificatePdf,
      credentialId: "ALX-VA-2025-001",
      longDescription: "The ALX Virtual Assistant program is an intensive 8-week training that covers essential skills for modern business support. This achievement demonstrates proficiency in task management, communication tools, project coordination, and administrative excellence."
    }
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedCert(null);
    }, 300);
    document.body.style.overflow = 'auto';
  };

  const downloadCertificate = (pdfUrl, title) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewFullCertificate = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  return (
    <>
      <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-cream via-nudeLight to-nude">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-nude rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brownSoft rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45"></div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#8B6F65_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/40 backdrop-blur-md rounded-full shadow-lg border border-white/50 mb-6">
              <div className="relative">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-brownSoft font-semibold text-sm tracking-wide uppercase">
                Academic Background
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brownSoft to-nudeDark bg-clip-text text-transparent">
                Education & 
              </span>
              <span className="text-nudeDark"> Certifications</span>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              Academic background and professional certifications
            </p>
            
            <div className="flex justify-center items-center space-x-3 mt-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full"></div>
              <div className="w-3 h-3 bg-brownSoft rounded-full"></div>
              <div className="w-3 h-3 bg-nudeDark rounded-full"></div>
              <div className="w-20 h-0.5 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full"></div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-0.5 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={edu.id}
                  className="group animate-slideIn"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative bg-white/30 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-white/50 overflow-hidden">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-nudeLight to-nude rounded-xl flex items-center justify-center text-brownSoft group-hover:scale-110 transition-transform duration-300 shadow-md">
                          {edu.icon}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                          <h4 className="text-xl md:text-2xl font-bold text-brownSoft">
                            {edu.institution}
                          </h4>
                          <span className="px-3 py-1.5 bg-gradient-to-r from-brownSoft to-nudeDark text-cream rounded-full text-sm font-semibold shadow-md">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-nudeDark font-semibold mb-3">{edu.degree}</p>
                        <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div>
            <div className="flex items-center justify-center mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-0.5 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificatesData.map((cert, index) => (
                <div
                  key={cert.id}
                  className="group cursor-pointer animate-slideIn"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => openModal(cert)}
                >
                  <div className="relative h-full">
                    {/* Card glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brownSoft to-nudeDark rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    {/* Main card */}
                    <div className="relative bg-white/30 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50 h-full flex flex-col">
                      {/* Image preview */}
                      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-nudeLight to-nude">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Overlay icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <svg className="w-8 h-8 text-brownSoft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-bold text-brownSoft leading-tight">
                            {cert.title}
                          </h4>
                          <div className="w-8 h-8 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-4 h-4 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-sm text-nudeDark font-semibold mb-2">{cert.issuer}</p>
                        <p className="text-xs text-gray-500 mb-3">{cert.date}</p>
                        <p className="text-sm text-gray-600 line-clamp-2">{cert.description}</p>
                      </div>
                      
                      {/* Footer */}
                      <div className="px-6 pb-6 pt-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Click to view details</span>
                          <span className="text-brownSoft font-semibold group-hover:underline">View Certificate →</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats summary */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-5 bg-white/30 backdrop-blur-md rounded-xl border border-white/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-brownSoft">{educationData.length}</div>
              <div className="text-xs text-gray-600 mt-2">Degrees & Programs</div>
            </div>
            <div className="text-center p-5 bg-white/30 backdrop-blur-md rounded-xl border border-white/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-brownSoft">{certificatesData.length}</div>
              <div className="text-xs text-gray-600 mt-2">Certifications</div>
            </div>
            <div className="text-center p-5 bg-white/30 backdrop-blur-md rounded-xl border border-white/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-brownSoft">5+</div>
              <div className="text-xs text-gray-600 mt-2">Years of Study</div>
            </div>
            <div className="text-center p-5 bg-white/30 backdrop-blur-md rounded-xl border border-white/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-brownSoft">B2</div>
              <div className="text-xs text-gray-600 mt-2">Language Level</div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slideIn {
            animation: slideIn 0.6s ease-out forwards;
            opacity: 0;
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>

      {/* Modal - Fixed version */}
      {isModalOpen && selectedCert && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
            onClick={closeModal}
          ></div>
          
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div 
              className="relative bg-gradient-to-br from-cream to-nudeLight rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-modalSlideIn"
              ref={modalRef}
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-brownSoft to-nudeDark p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-cream">{selectedCert.title}</h3>
                    <p className="text-cream/80 text-sm mt-1">
                      {selectedCert.issuer} • {selectedCert.date}
                    </p>
                    {selectedCert.credentialId && (
                      <p className="text-cream/60 text-xs mt-2 font-mono">
                        ID: {selectedCert.credentialId}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-cream/80 hover:text-cream transition-colors duration-200 bg-white/10 rounded-full p-2 hover:bg-white/20 flex-shrink-0"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 180px)' }}>
                {/* Certificate Preview */}
                <div className="mb-6">
                  <div className="bg-white/50 rounded-xl p-2 shadow-inner">
                    <div className="relative" style={{ paddingBottom: '70%' }}>
                      <iframe
                        src={selectedCert.pdf}
                        title={selectedCert.title}
                        className="absolute inset-0 w-full h-full rounded-lg"
                        frameBorder="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-5">
                  <div>
                    <h4 className="text-lg font-bold text-brownSoft mb-3 flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Description</span>
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{selectedCert.longDescription || selectedCert.description}</p>
                  </div>
                  
                  {selectedCert.credentialId && (
                    <div className="bg-nudeLight/30 rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-brownSoft mb-2">Credential Information</h4>
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">Certificate ID:</span> {selectedCert.credentialId}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        <span className="font-medium">Issue Date:</span> {selectedCert.date}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        <span className="font-medium">Issuing Organization:</span> {selectedCert.issuer}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 p-6 bg-gradient-to-t from-nudeLight/30 to-transparent border-t border-white/30">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 bg-white text-brownSoft rounded-xl font-semibold hover:bg-nudeLight transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Close
                </button>
                <button
                  onClick={() => viewFullCertificate(selectedCert.pdf)}
                  className="px-6 py-2.5 bg-gradient-to-r from-brownSoft to-nudeDark text-cream rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Full Screen</span>
                </button>
                <button
                  onClick={() => downloadCertificate(selectedCert.pdf, selectedCert.title)}
                  className="px-6 py-2.5 bg-gradient-to-r from-brownSoft to-nudeDark text-cream rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-modalSlideIn {
          animation: modalSlideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Education;