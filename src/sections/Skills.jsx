// src/sections/Skills.jsx
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'industry', name: 'Industry Knowledge' },
    { id: 'tools', name: 'Tools & Technologies' },
    { id: 'interpersonal', name: 'Interpersonal Skills' },
    { id: 'languages', name: 'Languages' }
  ];

  const skillsData = {
    industry: [
      { name: 'Accounting', level: 'Advanced' },
      { name: 'Auditing', level: 'Advanced' },
      { name: 'Account Reconciliation', level: 'Advanced' },
      { name: 'Tax Preparation', level: 'Intermediate' },
      { name: 'Budget Reconciliation', level: 'Advanced' },
      { name: 'Bookkeeping', level: 'Advanced' },
      { name: 'Record Keeping', level: 'Advanced' }
    ],
    tools: [
      { name: 'Google Workspace', level: 'Advanced' },
      { name: 'Data Entry', level: 'Advanced' },
      { name: 'Report Writing', level: 'Advanced' }
    ],
    interpersonal: [
      { name: 'Communication', level: 'Advanced' },
      { name: 'Active Listening', level: 'Advanced' },
      { name: 'Organization Skills', level: 'Advanced' },
      { name: 'Time Management', level: 'Advanced' },
      { name: 'Team Management', level: 'Intermediate' },
      { name: 'Team Coordination', level: 'Advanced' },
      { name: 'Multitasking', level: 'Advanced' },
      { name: 'Proactive Leadership', level: 'Intermediate' },
      { name: 'Customer Service', level: 'Advanced' }
    ],
    languages: [
      { name: 'English', level: 'Professional' },
      { name: 'French', level: 'Native' }
    ]
  };

  const getIcon = (skillName) => {
    const iconMap = {
      'Accounting': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      'Auditing': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      'Google Workspace': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
        </svg>
      ),
      'Communication': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      'Time Management': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'English': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      'French': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10" />
        </svg>
      )
    };
    return iconMap[skillName] || (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    );
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Advanced': return 'bg-emerald-100 text-emerald-700';
      case 'Intermediate': return 'bg-amber-100 text-amber-700';
      case 'Professional': return 'bg-blue-100 text-blue-700';
      case 'Native': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getSkillsToDisplay = () => {
    if (activeCategory === 'all') {
      return [
        ...skillsData.industry,
        ...skillsData.tools,
        ...skillsData.interpersonal,
        ...skillsData.languages
      ];
    }
    return skillsData[activeCategory] || [];
  };

  const displaySkills = getSkillsToDisplay();

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-tr from-cream via-nudeLight to-cream">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-nude rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brownSoft rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/40 mb-6">
            <div className="w-1.5 h-1.5 bg-brownSoft rounded-full"></div>
            <span className="text-brownSoft font-semibold text-sm tracking-wide uppercase">
              Core Competencies
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brownSoft to-nudeDark bg-clip-text text-transparent">
              Skills & 
            </span>
            <span className="text-nudeDark"> Expertise</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            A combination of technical knowledge, tools, and interpersonal strengths
          </p>
          
          <div className="flex justify-center items-center space-x-3 mt-6">
            <div className="w-16 h-1 bg-gradient-to-r from-nudeDark to-brownSoft rounded-full"></div>
            <div className="w-2 h-2 bg-brownSoft rounded-full"></div>
            <div className="w-2 h-2 bg-nudeDark rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-brownSoft to-nudeDark rounded-full"></div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-brownSoft to-nudeDark text-cream shadow-lg'
                  : 'bg-white/40 backdrop-blur-sm text-brownSoft hover:bg-white/60 border border-white/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displaySkills.map((skill, index) => (
            <div
              key={index}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brownSoft to-nudeDark rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Card content */}
              <div className="relative bg-white/40 backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-nudeLight to-nude rounded-lg flex items-center justify-center text-brownSoft group-hover:scale-110 transition-transform duration-300">
                      {getIcon(skill.name)}
                    </div>
                    <h3 className="font-bold text-brownSoft text-lg">
                      {skill.name}
                    </h3>
                  </div>
                  {skill.level && (
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  )}
                </div>
                
                {/* Progress indicator for advanced skills */}
                {skill.level === 'Advanced' && (
                  <div className="mt-3">
                    <div className="w-full bg-nudeLight rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-brownSoft to-nudeDark h-1.5 rounded-full w-full"></div>
                    </div>
                  </div>
                )}
                {skill.level === 'Intermediate' && (
                  <div className="mt-3">
                    <div className="w-full bg-nudeLight rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-brownSoft to-nudeDark h-1.5 rounded-full w-2/3"></div>
                    </div>
                  </div>
                )}
                {skill.level === 'Professional' && (
                  <div className="mt-3">
                    <div className="w-full bg-nudeLight rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-brownSoft to-nudeDark h-1.5 rounded-full w-full"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/30 backdrop-blur-md rounded-xl border border-white/50">
            <div className="text-2xl font-bold text-brownSoft">{skillsData.industry.length + skillsData.tools.length + skillsData.interpersonal.length + skillsData.languages.length}</div>
            <div className="text-xs text-gray-600 mt-1">Total Skills</div>
          </div>
          <div className="text-center p-4 bg-white/30 backdrop-blur-md rounded-xl border border-white/50">
            <div className="text-2xl font-bold text-brownSoft">{skillsData.industry.length}</div>
            <div className="text-xs text-gray-600 mt-1">Industry Knowledge</div>
          </div>
          <div className="text-center p-4 bg-white/30 backdrop-blur-md rounded-xl border border-white/50">
            <div className="text-2xl font-bold text-brownSoft">{skillsData.interpersonal.length}</div>
            <div className="text-xs text-gray-600 mt-1">Interpersonal Skills</div>
          </div>
          <div className="text-center p-4 bg-white/30 backdrop-blur-md rounded-xl border border-white/50">
            <div className="text-2xl font-bold text-brownSoft">{skillsData.languages.length}</div>
            <div className="text-xs text-gray-600 mt-1">Languages</div>
          </div>
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

export default Skills;