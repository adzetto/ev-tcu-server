import React, { useState } from 'react';
import { Linkedin, Mail, Github, Cpu, Terminal, Settings, Wrench, Zap, Briefcase, Battery } from 'lucide-react';

// Enhanced team member card with interactive effects and role highlights
export const TeamMemberCard = ({ member, index, highlight = false }) => {
  // Simplified version for the timeline view
  return (
    <div 
      className={`team-card relative bg-white dark:bg-black/80 p-5 rounded-lg overflow-hidden transition-all duration-300 ${highlight ? 'ring-2 ring-offset-2 ring-offset-black ring-blue-500/50' : ''}`}
      style={{ 
        boxShadow: highlight ? '0 0 15px rgba(59, 130, 246, 0.3)' : 'none'
      }}
    >
      {/* Bordered image container */}
      <div className="relative w-full h-64 mb-5 rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 group">
        <img 
          src={member.image || `/team/placeholder-${(index % 8) + 1}.jpg`} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        
        {/* Role tag */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-xs font-mono border border-blue-500/30 text-blue-400 px-2 py-1 rounded">
          {member.role}
        </div>
      </div>
      
      <h4 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h4>
      <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{member.department}</p>
      
      <div className="flex space-x-2 mt-4">
        {member.linkedin && (
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 dark:bg-gray-900 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin size={16} />
          </a>
        )}
        {member.email && (
          <a 
            href={`mailto:${member.email}`}
            className="p-2 bg-gray-100 dark:bg-gray-900 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-full text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <Mail size={16} />
          </a>
        )}
        {member.github && (
          <a 
            href={member.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 dark:bg-gray-900 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-full text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Github size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

// TeamTimelineView - A more elegant timeline-style team visualization
export const TeamTimelineView = ({ teamData }) => {
  return (
    <div className="relative py-10 w-full max-w-full overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <div className="circuit-background w-full h-full"></div>
      </div>
      
      {/* Vertical timeline line - hidden on mobile, visible on larger screens */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-red-500/50 hidden md:block"></div>
      
      <div className="relative z-10 w-full">
        {/* Team statistics overview */}
        <div className="mb-12 md:mb-16">
          <TeamStats />
        </div>
        
        {/* Timeline sections - All sections stack vertically on mobile */}
        <div className="space-y-16 md:space-y-24 w-full">
          {/* Advisors section */}
          <TimelineSection 
            title="Akademik Danışmanlar"
            icon={
              <svg className="w-7 h-7 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            color="purple"
            members={teamData.advisors}
            position="center"
            mobilePriority="full-width"
          />
          
          {/* Team Leadership */}
          <TimelineSection 
            title="Takım Liderliği"
            icon={
              <svg className="w-7 h-7 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            color="red"
            members={teamData.teamLeadership}
            position="center"
            mobilePriority="full-width"
          />
          
          {/* Electronics Team */}
          <TimelineSection 
            title="Elektrik Elektronik Birimi"
            icon={<Cpu size={20} className="md:w-7 md:h-7" />}
            color="blue"
            captain={teamData.electronicsTeam.captain}
            members={[
              ...(teamData.electronicsTeam.vehicleControlSystem || []),
              ...(teamData.electronicsTeam.embeddedSoftware || []),
              ...(teamData.electronicsTeam.batteryAndBMS || [])
            ]}
            position="center"
            mobilePriority="full-width"
            subunits={[
              { 
                title: "Araç Kontrol Sistemi", 
                members: teamData.electronicsTeam.vehicleControlSystem,
                icon: <Settings size={14} />
              },
              { 
                title: "Gömülü Yazılım", 
                members: teamData.electronicsTeam.embeddedSoftware,
                icon: <Terminal size={14} />
              },
              { 
                title: "Batarya ve BYS", 
                members: teamData.electronicsTeam.batteryAndBMS,
                icon: <Battery size={14} />
              }
            ]}
          />
          
          {/* Sponsorship Team */}
          <TimelineSection 
            title="Sponsorluk ve Organizasyon Takımı"
            icon={<Briefcase size={20} className="md:w-7 md:h-7" />}
            color="green"
            captain={teamData.sponsorshipTeam.captain}
            members={teamData.sponsorshipTeam.members}
            position="center"
            mobilePriority="full-width"
          />
          
          {/* Mechanical Team */}
          <TimelineSection 
            title="Mekanik Birimi"
            icon={<Wrench size={20} className="md:w-7 md:h-7" />}
            color="red"
            captain={teamData.mechanicalTeam.captain}
            members={[
              ...(teamData.mechanicalTeam.chassisAndDrivetrain || []),
              ...(teamData.mechanicalTeam.shellAndAnalysis || []),
              ...(teamData.mechanicalTeam.powertrainAndParts || [])
            ]}
            position="center"
            mobilePriority="full-width"
            subunits={[
              { 
                title: "Şasi ve Aktarma organları", 
                members: teamData.mechanicalTeam.chassisAndDrivetrain,
                icon: <Settings size={14} />
              },
              { 
                title: "Kabuk ve Analiz", 
                members: teamData.mechanicalTeam.shellAndAnalysis,
                icon: <Wrench size={14} />
              },
              { 
                title: "Powertrain ve Araç Parçaları", 
                members: teamData.mechanicalTeam.powertrainAndParts,
                icon: <Zap size={14} />
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

// Individual timeline section component
const TimelineSection = ({ 
  title, 
  icon, 
  color, 
  members, 
  captain, 
  position = "left", 
  subunits = [],
  mobilePriority = "default"
}) => {
  // State for hovering member detail cards - only show on hover
  const [activeCard, setActiveCard] = useState(null);
  
  // Function to handle toggle of member cards on mobile (tap instead of hover)
  const handleMemberInteraction = (cardId) => {
    if (activeCard === cardId) {
      setActiveCard(null); // Close card if tapped again
    } else {
      setActiveCard(cardId); // Open the selected card
    }
  };
  
  // Determine positioning classes based on mobilePriority
  const mobileLayoutClasses = mobilePriority === "full-width" 
    ? "w-full mx-auto"
    : `w-full md:w-5/12 ${position === 'right' ? 'md:ml-auto' : 'md:mr-auto'}`;
  
  return (
    <div className="relative flex flex-col md:flex-row items-center md:justify-start w-full min-w-0 overflow-visible">
      {/* Timeline node - centered on mobile, positioned on timeline for larger screens */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center z-20">
        <div className={`text-${color}-500`}>
          {icon}
        </div>
      </div>
      
      {/* Content box - full width on mobile, positioned based on screen size */}
      <div className={`min-w-0 max-w-full relative px-2 xs:px-3 sm:px-4 md:px-0 ${mobileLayoutClasses}`}>
        {/* Connecting line to timeline - hidden on mobile, positioned based on desktop layout */}
        {position !== 'center' && (
          <div className={`absolute top-1/2 hidden md:block ${position === 'left' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} transform -translate-y-1/2 w-16 h-px bg-gradient-to-${position === 'left' ? 'r' : 'l'} from-${color}-500/80 to-gray-300/20 dark:to-gray-800/20`}></div>
        )}
        
        {/* Section title */}
        <div className={`mb-3 md:mb-6 flex items-center justify-center md:justify-${position === 'center' ? 'center' : position === 'right' ? 'start' : 'end'}`}>
          <h3 className={`text-base sm:text-lg md:text-xl font-bold text-${color}-500`}>{title}</h3>
        </div>
        
        {/* Team members visualization */}
        <div className={`bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-lg border border-${color}-500/30 p-2 xs:p-3 sm:p-4 md:p-5 shadow-lg mt-5 md:mt-0 w-full min-w-0`}>
          {/* Captain highlight if exists */}
          {captain && (
            <div className="mb-3 pb-3 md:mb-4 md:pb-4 border-b border-gray-200 dark:border-gray-800">
              <div className={`text-xs md:text-sm uppercase text-${color}-500 font-medium mb-2 flex items-center`}>
                <span className="mr-1">●</span> Takım Kaptanı
              </div>
              <div className="flex items-center">
                <div 
                  className="relative h-8 w-8 xs:h-10 xs:w-10 md:h-12 md:w-12 rounded-full border border-gray-200 dark:border-gray-800 overflow-hidden mr-2 sm:mr-3 cursor-pointer hover:border-blue-500 transition-colors"
                  onClick={() => handleMemberInteraction('captain')}
                  onMouseEnter={() => window.innerWidth >= 768 && setActiveCard('captain')}
                  onMouseLeave={() => window.innerWidth >= 768 && setActiveCard(null)}
                >
                  <img 
                    src={captain.image || `/team/placeholder-1.jpg`} 
                    alt={captain.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="max-w-[calc(100%-45px)] xs:max-w-[calc(100%-60px)] md:max-w-[calc(100%-70px)]">
                  <div className="font-bold text-gray-900 dark:text-white text-xs xs:text-sm md:text-base truncate">{captain.name}</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 truncate">{captain.role}</div>
                </div>
                
                {/* Detail card - adaptive positioning for all screen sizes */}
                {activeCard === 'captain' && (
                  <div className={`absolute left-0 right-0 md:inset-x-auto ${position === 'center' || position === 'right' ? 'md:left-full md:right-auto md:ml-3' : 'md:right-full md:left-auto md:mr-3'} top-full md:top-0 z-30 w-full md:w-64 mt-2 md:mt-0 bg-white/90 dark:bg-black/90 backdrop-blur-lg p-3 rounded-lg border border-blue-500/30 shadow-xl transform transition-all duration-300`}>
                    <div className="flex items-start space-x-3">
                      <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={captain.image || `/team/placeholder-1.jpg`} 
                          alt={captain.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-gray-900 dark:text-white mb-1 truncate">{captain.name}</div>
                        <div className="text-xs text-blue-600 dark:text-blue-400 mb-1 sm:mb-2 truncate">{captain.role}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 truncate">{captain.department}</div>
                        
                        <div className="flex space-x-2 mt-2">
                          {captain.linkedin && (
                            <a href={captain.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                              <Linkedin size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                            </a>
                          )}
                          {captain.email && (
                            <a href={`mailto:${captain.email}`} className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                              <Mail size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                            </a>
                          )}
                          {captain.github && (
                            <a href={captain.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                              <Github size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Mobile close button */}
                    <button 
                      className="absolute top-1 right-1 text-gray-500 md:hidden"
                      onClick={() => setActiveCard(null)}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Members grid or list */}
          <div>
            {subunits.length > 0 ? (
              // Render as subunit groups with accordion-style on mobile
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {subunits.map((subunit, idx) => (
                  <div key={idx} className="mb-2 md:mb-3">
                    <div 
                      className={`flex items-center text-2xs xs:text-xs md:text-sm text-${color}-600 dark:text-${color}-400 p-1.5 xs:p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900/30 cursor-pointer transition-colors`}
                      onClick={() => handleMemberInteraction(`subunit-header-${idx}`)}
                    >
                      <div className="mr-1 xs:mr-2 flex-shrink-0">{subunit.icon}</div>
                      <div className="font-medium truncate">{subunit.title}</div>
                      <div className="ml-0.5 xs:ml-1 text-2xs xs:text-xs text-gray-500 flex-shrink-0">({subunit.members?.length || 0})</div>
                      <div className="ml-auto text-2xs xs:text-xs flex-shrink-0">
                        {activeCard === `subunit-header-${idx}` ? '▲' : '▼'}
                      </div>
                    </div>
                    
                    {/* Subunit members - toggleable on mobile */}
                    <div className={`flex flex-wrap ${activeCard === `subunit-header-${idx}` ? 'block' : 'md:block hidden'}`}>
                      {subunit.members?.map((member, i) => (
                        <div 
                          key={member.id || i} 
                          className="relative mr-1 mb-1"
                          onClick={() => handleMemberInteraction(`${idx}-${i}`)}
                          onMouseEnter={() => window.innerWidth >= 768 && setActiveCard(`${idx}-${i}`)}
                          onMouseLeave={() => window.innerWidth >= 768 && setActiveCard(null)}
                        >
                          <div className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 rounded-full border border-gray-200 dark:border-gray-800 overflow-hidden cursor-pointer hover:border-blue-500 transition-colors flex-shrink-0">
                            <img 
                              src={member.image || `/team/placeholder-${(i % 8) + 1}.jpg`} 
                              alt={member.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          
                          {/* Detail card with adaptive positioning */}
                          {activeCard === `${idx}-${i}` && (
                            <div className={`fixed inset-x-2 xs:inset-x-4 md:absolute md:inset-x-auto ${position === 'center' || position === 'right' ? 'md:left-full md:ml-3' : 'md:right-full md:mr-3'} bottom-16 xs:bottom-20 md:bottom-auto md:top-0 z-40 md:z-30 w-auto md:w-60 bg-white/90 dark:bg-black/90 backdrop-blur-lg p-2 xs:p-3 rounded-lg border border-blue-500/30 shadow-xl transform transition-all duration-300`}>
                              <MemberDetailCardResponsive member={member} onClose={() => setActiveCard(null)} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Render as simple member grid
              <div className="flex flex-wrap">
                {members?.map((member, idx) => (
                  <div 
                    key={member.id || idx} 
                    className="relative m-1"
                    onClick={() => handleMemberInteraction(`member-${idx}`)}
                    onMouseEnter={() => window.innerWidth >= 768 && setActiveCard(`member-${idx}`)}
                    onMouseLeave={() => window.innerWidth >= 768 && setActiveCard(null)}
                  >
                    <div className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 rounded-full border border-gray-200 dark:border-gray-800 overflow-hidden cursor-pointer hover:border-blue-500 transition-colors">
                      <img 
                        src={member.image || `/team/placeholder-${(idx % 8) + 1}.jpg`} 
                        alt={member.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    
                    {/* Member detail card */}
                    {activeCard === `member-${idx}` && (
                      <div className={`fixed inset-x-2 xs:inset-x-4 md:absolute md:inset-x-auto ${position === 'center' || position === 'right' ? 'md:left-full md:ml-3' : 'md:right-full md:mr-3'} bottom-16 xs:bottom-20 md:bottom-auto md:top-0 z-40 md:z-30 w-auto md:w-60 bg-white/90 dark:bg-black/90 backdrop-blur-lg p-2 xs:p-3 rounded-lg border border-blue-500/30 shadow-xl transform transition-all duration-300`}>
                        <MemberDetailCardResponsive member={member} onClose={() => setActiveCard(null)} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Responsive detailed member card with mobile close button
const MemberDetailCardResponsive = ({ member, onClose }) => {
  return (
    <div className="relative">
      <div className="flex items-start space-x-2 xs:space-x-3">
        <div className="h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 rounded overflow-hidden flex-shrink-0">
          <img 
            src={member.image || `/team/placeholder-1.jpg`} 
            alt={member.name} 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-gray-900 dark:text-white mb-0.5 xs:mb-1 text-xs xs:text-sm md:text-base truncate">{member.name}</div>
          <div className="text-2xs xs:text-xs text-blue-600 dark:text-blue-400 mb-0.5 xs:mb-1 truncate">{member.role}</div>
          <div className="text-2xs xs:text-xs text-gray-600 dark:text-gray-400 truncate">{member.department}</div>
          
          <div className="flex space-x-2 mt-1 xs:mt-2">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={12} className="xs:w-3.5 xs:h-3.5 md:w-4 md:h-4" />
              </a>
            )}
            {member.email && (
              <a href={`mailto:${member.email}`} className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                <Mail size={12} className="xs:w-3.5 xs:h-3.5 md:w-4 md:h-4" />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                <Github size={12} className="xs:w-3.5 xs:h-3.5 md:w-4 md:h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile close button */}
      <button 
        className="absolute top-0.5 right-0.5 xs:top-1 xs:right-1 text-gray-500 md:hidden p-0.5 xs:p-1"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

// Detailed member card shown on hover
const MemberDetailCard = ({ member }) => {
  return (
    <div className="absolute top-0 left-full ml-3 z-30 w-60 bg-white/90 dark:bg-black/90 backdrop-blur-lg p-3 rounded-lg border border-blue-500/30 shadow-xl transform transition-all duration-300">
      <div className="flex items-start space-x-3">
        <div className="h-14 w-14 rounded overflow-hidden flex-shrink-0">
          <img 
            src={member.image || `/team/placeholder-1.jpg`} 
            alt={member.name} 
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="font-bold text-gray-900 dark:text-white mb-1">{member.name}</div>
          <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">{member.role}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">{member.department}</div>
          
          <div className="flex space-x-2 mt-2">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={14} />
              </a>
            )}
            {member.email && (
              <a href={`mailto:${member.email}`} className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                <Mail size={14} />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                <Github size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced team page structure - simplified timeline version
export const EnhancedTeamStructure = ({ teamData }) => {
  // This is now a wrapper for the new TeamTimelineView
  return <TeamTimelineView teamData={teamData} />;
};

// Team stats visualization
export const TeamStats = () => {
  const stats = [
    { label: "Takım Üyesi", value: 24, color: "voltaris-red" },
    { label: "Farklı Disiplin", value: 4, color: "voltaris-blue" },
    { label: "Prototip Geliştirme", value: 1, color: "voltaris-red" },
    { label: "Kuruluş", value: 2024, color: "voltaris-blue", unit: "" }
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 md:gap-4 px-2 xs:px-4 md:px-0">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white dark:bg-voltaris-neutral-50 border border-gray-200 dark:border-voltaris-neutral-200 rounded-lg p-2 xs:p-3 md:p-4 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          {/* Technical background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="w-full h-full" style={{ 
              backgroundImage: `radial-gradient(#${stat.color === 'voltaris-red' ? 'f54242' : '0055c9'} 1px, transparent 1px)`,
              backgroundSize: "12px 12px",
              backgroundPosition: "0 0"
            }}></div>
          </div>
          
          <div className="relative z-10">
            <div className={`text-xl xs:text-2xl md:text-3xl font-bold text-${stat.color}`}>
              {stat.value}{stat.unit && <span className="text-2xs xs:text-xs md:text-sm ml-0.5 xs:ml-1">{stat.unit}</span>}
            </div>
            <div className="text-2xs xs:text-xs md:text-sm text-gray-700 dark:text-voltaris-neutral-600">{stat.label}</div>
            
            {/* Progress indicator */}
            <div className="mt-1 xs:mt-2 w-full h-1 bg-gray-100 dark:bg-voltaris-neutral-200 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-${stat.color}`}
                style={{width: `${Math.min(stat.value * 4, 100)}%`}}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Sponsor showcase component for hero section
export const SponsorShowcase = ({ sponsors }) => {
  return (
    <div className="sponsor-showcase rounded-lg bg-white dark:bg-voltaris-neutral-50 backdrop-blur-sm border border-gray-200 dark:border-voltaris-neutral-300 overflow-hidden p-2 sm:p-4 mx-auto max-w-xs sm:max-w-2xl md:max-w-3xl shadow-lg">
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-center text-gradient-red-blue">Sponsorlarımız</h3>
      
      <div className="sponsor-carousel overflow-hidden">
        <div className="sponsor-track flex animate-sponsorSlide">
          {/* Double the sponsors for infinite loop effect */}
          {[...sponsors, ...sponsors].map((sponsor, index) => {
            // Special sizing for certain sponsors
            const isPilciLogo = sponsor.logo.toLowerCase().includes('pilci');
            const isGuranLogo = sponsor.logo.toLowerCase().includes('guran_nakliyat');
            
            // Calculate custom height based on sponsor
            let customHeight = '100%';
            let customWidth = '100%';
            if (isPilciLogo) {
              customHeight = 'calc(100% + 4px)';
            } else if (isGuranLogo) {
              customHeight = 'calc(100% + 20px)'; // Super tall
              customWidth = '200%'; // Super wide
            }
            
            return (
              <div 
                key={`${sponsor.id}-${index}`} 
                className={`flex-shrink-0 px-2 sm:px-4 md:px-6 flex items-center justify-center sponsor-item ${isGuranLogo ? 'w-32 sm:w-40 md:w-48' : ''}`}
              >
                <a 
                  href={sponsor.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group"
                >
                  <div className={`relative h-16 sm:h-20 md:h-24 ${isGuranLogo ? 'w-32 sm:w-40 md:w-48' : 'w-28 sm:w-36 md:w-40'} grayscale hover:grayscale-0 transition-all duration-500 flex items-center justify-center sponsor-tier-${sponsor.tier}`}>
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-h-12 sm:max-h-16 md:max-h-20 max-w-24 sm:max-w-32 md:max-w-full object-contain"
                      style={{
                        maxWidth: customWidth, // Custom width based on sponsor
                        maxHeight: customHeight
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 dark:via-voltaris-neutral-300/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
                  </div>
                  <p className="text-center text-[10px] sm:text-xs text-gray-600 dark:text-voltaris-neutral-600 mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{sponsor.name}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Technical circuit decoration */}
      <div className="mt-2 sm:mt-4 sponsor-circuit-decoration">
        <div className="flex items-center justify-center">
          <div className="h-px w-full bg-gradient-to-r from-voltaris-red/30 via-transparent to-voltaris-blue/30"></div>
        </div>
      </div>
      
      {/* Add responsive styles */}
      <style>
        {`
          @media (max-width: 640px) {
            .sponsor-track {
              animation-duration: 20s !important; /* Slower on mobile */
            }
            .sponsor-item {
              min-width: 100px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

// Create named object before exporting
const TeamComponents = { TeamMemberCard, EnhancedTeamStructure, TeamStats, SponsorShowcase, TeamTimelineView };
export default TeamComponents;