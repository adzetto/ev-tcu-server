import React, { useEffect, useState } from 'react';
import { Users, Wrench, Cpu, Briefcase, User, ChevronDown, ChevronUp } from 'lucide-react';
import teamData from '../teamData';

const TeamHierarchyChart = () => {
  // State for mobile dropdowns
  const [expandedDivision, setExpandedDivision] = useState(null);
  const [expandedSubdivision, setExpandedSubdivision] = useState({});
  
  // Realistic team statistics from development report
  const teamStats = [
    { label: "Takım Üyesi", value: 24, color: "red" },
    { label: "Farklı Disiplin", value: 4, color: "blue" },
    { label: "Mühendislik Çözümü", value: 7, color: "red" },
    { label: "Ortalama Deneyim", value: 3, color: "blue", unit: "yıl" }
  ];
  
  // Team divisions with members count
  const divisions = [
    { 
      id: "leadership", 
      name: "Takım Liderliği", 
      icon: <Users size={24} />,
      color: "blue",
      members: 2,
      lead: teamData.teamLeadership[0],
      description: "Takımın genel stratejisi ve koordinasyonunu sağlar"
    },
    { 
      id: "electronics", 
      name: "Elektronik ve Yazılım", 
      icon: <Cpu size={24} />,
      color: "red",
      members: 7,
      lead: teamData.electronicsTeam.captain,
      description: "Elektronik sistemler ve yazılım geliştirme"
    },
    { 
      id: "mechanical", 
      name: "Mekanik Tasarım", 
      icon: <Wrench size={24} />,
      color: "green",
      members: 12,
      lead: teamData.mechanicalTeam.captain,
      description: "Şasi, kabuk ve mekanik sistemlerin tasarımı"
    },
    { 
      id: "sponsorship", 
      name: "Sponsorluk ve İletişim", 
      icon: <Briefcase size={24} />,
      color: "purple",
      members: 3,
      lead: teamData.sponsorshipTeam.captain,
      description: "Sponsorluk ve iletişim faaliyetleri"
    }
  ];
  
  // Subdivisions data
  const subdivisions = {
    electronics: [
      { 
        id: "hardware", 
        name: "Donanım Birimi", 
        members: teamData.electronicsTeam.hardware.length,
        description: "Elektronik donanım tasarımı ve üretimi",
        membersList: teamData.electronicsTeam.hardware
      },
      { 
        id: "software", 
        name: "Yazılım Geliştirme Birimi", 
        members: teamData.electronicsTeam.software.length,
        description: "Gömülü yazılım ve ADAS sistemi geliştirme",
        membersList: teamData.electronicsTeam.software
      }
    ],
    mechanical: [
      { 
        id: "chassis", 
        name: "Şasi ve Aktarma Birimi", 
        members: teamData.mechanicalTeam.chassisAndDrivetrain.length,
        description: "Şasi tasarımı ve üretimi, aktarma organları",
        membersList: teamData.mechanicalTeam.chassisAndDrivetrain
      },
      { 
        id: "shell", 
        name: "Kabuk ve Analiz Birimi", 
        members: teamData.mechanicalTeam.shellAndAnalysis.length,
        description: "Aerodinamik kabuk tasarımı ve analizi",
        membersList: teamData.mechanicalTeam.shellAndAnalysis
      },
      { 
        id: "powertrain", 
        name: "Güç Aktarma ve Parçalar Birimi", 
        members: teamData.mechanicalTeam.powertrainAndParts.length,
        description: "Güç aktarım sistemleri ve parça tasarımı",
        membersList: teamData.mechanicalTeam.powertrainAndParts
      }
    ],
    sponsorship: [
      { 
        id: "sponsors", 
        name: "Sponsorluk İlişkileri", 
        members: 2,
        description: "Sponsor bulma ve sponsor ilişkileri yönetimi",
        membersList: teamData.sponsorshipTeam.members.slice(0, 2)
      },
      { 
        id: "communications", 
        name: "İletişim ve Organizasyon", 
        members: 1,
        description: "Sosyal medya ve etkinlik organizasyonu",
        membersList: teamData.sponsorshipTeam.members.slice(2, 3) || []
      }
    ]
  };

  // Toggle division expansion
  const toggleDivision = (divisionId) => {
    setExpandedDivision(expandedDivision === divisionId ? null : divisionId);
    
    // Reset subdivision expansions when closing a division
    if (expandedDivision === divisionId) {
      setExpandedSubdivision({});
    }
  };
  
  // Toggle subdivision expansion
  const toggleSubdivision = (divisionId, subdivisionId) => {
    setExpandedSubdivision(prev => ({
      ...prev,
      [`${divisionId}-${subdivisionId}`]: !prev[`${divisionId}-${subdivisionId}`]
    }));
  };

  useEffect(() => {
    // Animation for statistics bars
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-grow');
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.stats-bar').forEach(bar => {
      statsObserver.observe(bar);
    });
    
    // Update expanded state based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Reset mobile-specific states on desktop
        setExpandedDivision(null);
        setExpandedSubdivision({});
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on component mount
    
    return () => {
      statsObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Dynamically determine if we're on mobile
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-800">
      <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center relative">
        <span className="text-gradient-red-blue">Organizasyon Yapımız</span>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-24 bg-gradient-to-r from-red-500 to-blue-500"></div>
      </h3>
      
      {/* Team Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
        {teamStats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-black/50 border border-gray-800 rounded-lg p-3 sm:p-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="circuit-pattern w-full h-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className={`text-2xl sm:text-3xl font-bold text-${stat.color}-500`}>
                {stat.value}{stat.unit && <span className="text-sm ml-1">{stat.unit}</span>}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              
              <div className="mt-2 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-${stat.color}-500 w-0 stats-bar`}
                  style={{
                    transitionDelay: `${index * 0.2}s`,
                    width: `${stat.value * 4}%`
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Professional Organization Chart */}
      <div className="mt-8 md:mt-12 relative">
        {/* Main Team Leader */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="org-card org-leader-card bg-gradient-to-r from-red-900/40 to-blue-900/40 border border-blue-500/30 rounded-lg p-3 sm:p-4 w-full sm:w-64 max-w-full relative">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-red-500 flex-shrink-0">
                <img 
                  src="/team/placeholder-1.jpg"
                  alt={teamData.teamLeadership[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base">{teamData.teamLeadership[0].name}</h4>
                <p className="text-red-400 text-xs sm:text-sm">{teamData.teamLeadership[0].role}</p>
                <p className="text-xs text-gray-400 mt-1">Prof. Dr. {teamData.advisors[0].name}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vertical Line from Leader - Hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 top-[100px] w-0.5 h-10 bg-gray-700 transform -translate-x-1/2"></div>
        
        {/* Department Heads Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative mb-8 md:mb-12">
          {divisions.map((division, index) => (
            <div key={division.id} className="flex flex-col items-center">
              {/* Vertical line from top - Hidden on mobile */}
              {index === 1 && <div className="hidden md:block absolute -top-10 left-1/2 w-[calc(100%-6rem)] h-0.5 bg-gray-700"></div>}
              
              {/* Vertical line to department head - Hidden on mobile */}
              <div className="hidden md:block w-0.5 h-6 bg-gray-700 mb-2"></div>
              
              {/* Division Card - Clickable on mobile */}
              <div 
                className={`org-card bg-black/60 backdrop-blur-sm border border-${division.color}-500/30 rounded-lg p-3 sm:p-4 w-full relative transition-all ${isMobile ? 'cursor-pointer' : ''} ${expandedDivision === division.id ? 'border-opacity-100 shadow-lg shadow-' + division.color + '-900/20' : 'border-opacity-30'}`}
                onClick={() => isMobile && toggleDivision(division.id)}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`text-${division.color}-500 p-1.5 sm:p-2 rounded-full bg-${division.color}-900/20 flex-shrink-0`}>
                      {division.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm sm:text-base">{division.name}</h5>
                      <p className="text-xs text-gray-400">{division.members} üye</p>
                    </div>
                  </div>
                  
                  {/* Dropdown indicator on mobile */}
                  {isMobile && (
                    <div className="text-gray-400">
                      {expandedDivision === division.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2 border-t border-gray-800 pt-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-gray-700 flex-shrink-0">
                    <img 
                      src={division.lead?.image || `/team/placeholder-${index+2}.jpg`}
                      alt={division.lead?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-white">{division.lead?.name}</p>
                    <p className="text-xs text-gray-400">{division.lead?.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Vertical line to subdivision section - Hidden on mobile */}
              <div className="hidden md:block w-0.5 h-8 bg-gray-700 mt-2"></div>
            </div>
          ))}
        </div>
        
        {/* Subdivisions Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {divisions.map((division, divIndex) => (
            <div 
              key={`subdiv-${division.id}`} 
              className={`flex flex-col space-y-3 sm:space-y-4 transition-all duration-300 ${isMobile && expandedDivision !== division.id ? 'hidden' : 'block'}`}
            >
              {/* Subdivision Cards */}
              {subdivisions[division.id] && subdivisions[division.id].map((subdiv, subIndex) => (
                <div 
                  key={subdiv.id} 
                  className={`org-card bg-gray-900/50 border border-${division.color}-900/20 rounded-lg p-2.5 sm:p-3 transition-all`}
                >
                  {/* Subdivision Header - Clickable on mobile */}
                  <div
                    className={`${isMobile ? 'cursor-pointer' : ''} flex justify-between items-center`}
                    onClick={() => isMobile && toggleSubdivision(division.id, subdiv.id)}
                  >
                    <h6 className="text-xs sm:text-sm font-medium text-white mb-1 flex items-center gap-2">
                      <span className={`text-${division.color}-500 flex-shrink-0`}>
                        <User size={16} />
                      </span>
                      {subdiv.name}
                    </h6>
                    
                    {/* Dropdown indicator for members on mobile */}
                    {isMobile && (
                      <div className="text-gray-400">
                        {expandedSubdivision[`${division.id}-${subdiv.id}`] ? 
                          <ChevronUp size={16} /> : 
                          <ChevronDown size={16} />
                        }
                      </div>
                    )}
                  </div>
                  
                  <p className="text-xs text-gray-400 mb-2">{subdiv.description}</p>
                  
                  {/* Team Members - Collapsible on mobile */}
                  <div className={`mt-2 border-t border-gray-800 pt-2 ${isMobile && !expandedSubdivision[`${division.id}-${subdiv.id}`] ? 'hidden' : 'block'}`}>
                    <p className="text-xs text-gray-500 mb-2">Ekip Üyeleri:</p>
                    <div className="flex flex-wrap gap-1">
                      {subdiv.membersList && subdiv.membersList.map((member, memIndex) => (
                        <div 
                          key={member.id || memIndex} 
                          className="w-6 h-6 rounded-full overflow-hidden border border-gray-800" 
                          title={member.name}
                        >
                          <img 
                            src={member.image || `/team/placeholder-${((subIndex+1) * 3 + memIndex) % 24 + 1}.jpg`}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      
                      {(!subdiv.membersList || subdiv.membersList.length === 0) && 
                        Array(subdiv.members).fill(0).map((_, i) => (
                          <div key={i} className="w-6 h-6 rounded-full overflow-hidden border border-gray-800">
                            <img 
                              src={`/team/placeholder-${((subIndex+1) * 3 + i) % 24 + 1}.jpg`}
                              alt="Team member"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Responsive Styles */}
      <style jsx>{`
        @keyframes grow {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-grow {
          animation: grow 1s forwards;
        }
        
        .org-card {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }
        
        .org-leader-card {
          box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.1);
        }
        
        /* Mobile accordion animation */
        @media (max-width: 767px) {
          .org-card {
            max-height: 1000px;
            opacity: 1;
            overflow: hidden;
            transition: max-height 0.3s ease, opacity 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamHierarchyChart;