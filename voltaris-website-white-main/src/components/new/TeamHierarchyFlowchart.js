import React, { useState, useEffect, useRef } from 'react';
import './animation-styles.css';
import { Users, Wrench, Cpu, Briefcase, ChevronDown, ChevronRight, GitBranch, AlertCircle } from 'lucide-react';

const TeamHierarchyFlowchart = ({ teamData }) => {
  // Initialize with one section already open
  const [expandedNodes, setExpandedNodes] = useState({ electronics: true });
  // const [selectedNode, setSelectedNode] = useState(null);
  const [memberDetails, setMemberDetails] = useState(null);
  const chartRef = useRef(null);
  
  // Make clicking on nodes open with a single click 100% of the time
  const handleNodeClick = (nodeId, event) => {
    event.preventDefault(); // Prevent any default behaviors
    event.stopPropagation(); // Stop any event bubbling
    
    // Forcefully toggle the node regardless of current state
    if (expandedNodes[nodeId]) {
      // If already expanded, close it
      const newState = {};
      setExpandedNodes(newState);
    } else {
      // Open the clicked node, close others
      setExpandedNodes({ [nodeId]: true });
      
      // Add scroll animation after a short delay to allow the DOM to update
      setTimeout(() => {
        // Find the newly expanded content
        const expandedContent = document.querySelector(`.expanded-${nodeId}`);
        if (expandedContent) {
          // Get the parent scrollable container
          const scrollableContainer = document.querySelector('.team-hierarchy-container');
          
          // If we have a scrollable container, scroll it
          if (scrollableContainer) {
            // Calculate the target scroll position
            const containerRect = scrollableContainer.getBoundingClientRect();
            const expandedRect = expandedContent.getBoundingClientRect();
            const targetScroll = expandedRect.top - containerRect.top - 60; // Offset for better positioning
            
            // Scroll with animation
            scrollableContainer.scrollTo({
              top: targetScroll,
              behavior: 'smooth'
            });
          } else {
            // Fallback to default scrollIntoView
            expandedContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          
          // Add highlight class to make it more noticeable
          expandedContent.classList.add('highlight-pulse');
          setTimeout(() => {
            expandedContent.classList.remove('highlight-pulse');
          }, 2000);
        }
      }, 150); // Slightly longer delay for more reliable DOM update
    }
  };
  
  // Whether any node is expanded (for layout purposes)
  const hasExpandedNode = Object.keys(expandedNodes).length > 0;
  const expandedNodeId = Object.keys(expandedNodes)[0];
  
  // Function to handle member click
  const handleMemberClick = (member, event) => {
    event.stopPropagation();
    setMemberDetails(member);
  };
  
  // Close member details panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (memberDetails && !event.target.closest('.member-detail-panel')) {
        setMemberDetails(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [memberDetails]);
  
  // Show important people by default
  useEffect(() => {
    // Make all important people visible immediately
    setTimeout(() => {
      if (chartRef.current) {
        chartRef.current.querySelectorAll('.node-animate').forEach(node => {
          node.style.opacity = '1';
        });
      }
    }, 100);
  }, []);
  
  // Count team members by division
  const electronicsCount = (teamData.electronicsTeam.hardware?.length || 0) + 
                         (teamData.electronicsTeam.software?.length || 0) + 1; // +1 for captain
                         
  const mechanicalCount = (teamData.mechanicalTeam.chassisAndDrivetrain?.length || 0) + 
                        (teamData.mechanicalTeam.shellAndAnalysis?.length || 0) + 
                        (teamData.mechanicalTeam.powertrainAndParts?.length || 0) + 1; // +1 for captain
                        
  const sponsorshipCount = (teamData.sponsorshipTeam.members?.length || 0) + 1; // +1 for captain
  
  return (
    <div className="p-4 relative z-10 flex justify-center team-hierarchy-container overflow-auto max-h-[800px]">
      <div 
        ref={chartRef}
        className={`relative bg-black/50 backdrop-blur-lg border border-gray-800 rounded-lg p-6 overflow-hidden ${hasExpandedNode ? 'grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl' : 'w-full max-w-3xl'}`}
      >
        {/* Professional data flow animations - visible and static */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="h-full w-full">
            {/* Vertical top-to-bottom data flow lines */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-blue-500/20 via-blue-500/5 to-transparent data-flow-line"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-red-500/20 via-red-500/5 to-transparent data-flow-line"></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-blue-500/20 via-blue-500/5 to-transparent data-flow-line"></div>
            
            {/* Horizontal connector lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
            <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
          </div>
        </div>
        
        {/* Side panel for expanded items */}
        {hasExpandedNode && (
          <div className="col-span-1 bg-black/80 rounded-lg border border-blue-500/20 p-4 animate-slideInRight overflow-y-auto max-h-[600px]">
            {expandedNodeId === 'advisors' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-blue-500 border-b border-blue-500/20 pb-2">Akademik Danışmanlar</h3>
                <div className="divide-y divide-gray-800">
                  {teamData.advisors.map((member, idx) => (
                    <div key={idx} className="py-3 hover:bg-blue-900/10 rounded px-2 transition-colors cursor-pointer" onClick={(e) => handleMemberClick(member, e)}>
                      <div className="flex items-center">
                        <div className="h-16 w-16 rounded-lg overflow-hidden border border-blue-500/30 mr-4">
                          <img src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${idx + 1}.jpg`} alt={member.name} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{member.name}</div>
                          <div className="text-xs text-blue-400">{member.role}</div>
                        </div>
                        <div className="ml-auto text-blue-500/70">
                          <ChevronRight size={16} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {expandedNodeId === 'captain' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-red-500 border-b border-red-500/20 pb-2">Takım Kaptanı</h3>
                <div className="divide-y divide-gray-800">
                  {teamData.teamLeadership.map((member, idx) => (
                    <div key={idx} className="py-3 hover:bg-red-900/10 rounded px-2 transition-colors cursor-pointer" onClick={(e) => handleMemberClick(member, e)}>
                      <div className="flex items-center">
                        <div className="h-16 w-16 rounded-lg overflow-hidden border border-red-500/30 mr-4">
                          <img src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${idx + 1}.jpg`} alt={member.name} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{member.name}</div>
                          <div className="text-xs text-red-400">{member.role}</div>
                        </div>
                        <div className="ml-auto text-red-500/70">
                          <ChevronRight size={16} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {expandedNodeId === 'electronics' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-red-500 border-b border-red-500/20 pb-2">Elektronik ve Yazılım</h3>
                
                {/* Captain */}
                <div>
                  <h4 className="text-sm font-medium text-red-400 flex items-center mb-2">
                    <Cpu size={14} className="mr-2" /> Takım Lideri
                  </h4>
                  <div className="py-2 hover:bg-red-900/10 rounded px-2 transition-colors cursor-pointer" onClick={(e) => handleMemberClick(teamData.electronicsTeam.captain, e)}>
                    <div className="h-20 w-20 rounded-lg overflow-hidden border border-red-500/30 mr-4">
                      <img src={teamData.electronicsTeam.captain.image || `${process.env.PUBLIC_URL}/team/placeholder-3.jpg`} alt={teamData.electronicsTeam.captain.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{teamData.electronicsTeam.captain.name}</div>
                      <div className="text-xs text-red-400">{teamData.electronicsTeam.captain.role}</div>
                    </div>
                  </div>
                </div>
                
                {/* Hardware Team */}
                <div>
                  <h4 className="text-sm font-medium text-gray-300 flex items-center mb-2 border-t border-gray-800 pt-3">
                    <GitBranch size={14} className="mr-2 text-red-400" /> Donanım Ekibi
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {teamData.electronicsTeam.hardware.map((member, idx) => (
                      <div key={idx} className="py-2 hover:bg-red-900/5 rounded px-2 transition-colors cursor-pointer" onClick={(e) => handleMemberClick(member, e)}>
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full overflow-hidden border border-red-500/20 mr-2">
                            <img src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${(idx + 4) % 24 + 1}.jpg`} alt={member.name} className="h-full w-full object-cover" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-300">{member.name}</div>
                            <div className="text-xs text-red-400/70">{member.role}</div>
                          </div>
                          <div className="ml-auto text-red-500/50">
                            <ChevronRight size={12} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Software Team */}
                <div>
                  <h4 className="text-sm font-medium text-gray-300 flex items-center mb-2 border-t border-gray-800 pt-3">
                    <GitBranch size={14} className="mr-2 text-red-400" /> Yazılım Ekibi
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {teamData.electronicsTeam.software.map((member, idx) => (
                      <div key={idx} className="py-2 hover:bg-red-900/5 rounded px-2 transition-colors cursor-pointer" onClick={(e) => handleMemberClick(member, e)}>
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full overflow-hidden border border-red-500/20 mr-2">
                            <img src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${(idx + 7) % 24 + 1}.jpg`} alt={member.name} className="h-full w-full object-cover" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-300">{member.name}</div>
                            <div className="text-xs text-red-400/70">{member.role}</div>
                          </div>
                          <div className="ml-auto text-red-500/50">
                            <ChevronRight size={12} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {expandedNodeId === 'mechanical' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-green-500 border-b border-green-500/20 pb-2">Mekanik Tasarım</h3>
                
                {/* Captain */}
                <div>
                  <h4 className="text-sm font-medium text-green-400 flex items-center mb-2">
                    <Wrench size={14} className="mr-2" /> Takım Lideri
                  </h4>
                  <div className="py-2 hover:bg-green-900/10 rounded px-2 transition-colors cursor-pointer" onClick={(e) => handleMemberClick(teamData.mechanicalTeam.captain, e)}>
                    <div className="h-20 w-20 rounded-lg overflow-hidden border border-green-500/30 mr-4">
                      <img src={teamData.mechanicalTeam.captain.image || `${process.env.PUBLIC_URL}/team/placeholder-13.jpg`} alt={teamData.mechanicalTeam.captain.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{teamData.mechanicalTeam.captain.name}</div>
                      <div className="text-xs text-green-400">{teamData.mechanicalTeam.captain.role}</div>
                    </div>
                  </div>
                </div>
                
                {/* Subteams with collapsible sections */}
                <div className="space-y-3">
                  {/* Chassis Team */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 flex items-center mb-2 border-t border-gray-800 pt-3">
                      <GitBranch size={14} className="mr-2 text-green-400" /> Şasi ve Aktarma Ekibi
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {teamData.mechanicalTeam.chassisAndDrivetrain.map((member, idx) => (
                        <div key={idx} className="py-2 hover:bg-green-900/5 rounded px-2 transition-colors cursor-pointer" onClick={(e) => handleMemberClick(member, e)}>
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full overflow-hidden border border-green-500/20 mr-2">
                              <img src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${(idx + 14) % 24 + 1}.jpg`} alt={member.name} className="h-full w-full object-cover" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-300">{member.name}</div>
                              <div className="text-xs text-green-400/70">{member.role}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Shell Team */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 flex items-center mb-2 border-t border-gray-800 pt-3">
                      <GitBranch size={14} className="mr-2 text-green-400" /> Kabuk ve Analiz Ekibi
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {teamData.mechanicalTeam.shellAndAnalysis.map((member, idx) => (
                        <div key={idx} className="py-2 hover:bg-green-900/5 rounded px-2 transition-colors cursor-pointer" onClick={(e) => handleMemberClick(member, e)}>
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full overflow-hidden border border-green-500/20 mr-2">
                              <img src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${(idx + 17) % 24 + 1}.jpg`} alt={member.name} className="h-full w-full object-cover" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-300">{member.name}</div>
                              <div className="text-xs text-green-400/70">{member.role}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Powertrain Team */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 flex items-center mb-2 border-t border-gray-800 pt-3">
                      <GitBranch size={14} className="mr-2 text-green-400" /> Güç Aktarma Ekibi
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {teamData.mechanicalTeam.powertrainAndParts.map((member, idx) => (
                        <div key={idx} className="py-2 hover:bg-green-900/5 rounded px-2 transition-colors cursor-pointer" onClick={(e) => handleMemberClick(member, e)}>
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full overflow-hidden border border-green-500/20 mr-2">
                              <img src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${(idx + 19) % 24 + 1}.jpg`} alt={member.name} className="h-full w-full object-cover" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-300">{member.name}</div>
                              <div className="text-xs text-green-400/70">{member.role}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {expandedNodeId === 'sponsorship' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-purple-500 border-b border-purple-500/20 pb-2">Sponsorluk ve Organizasyon</h3>
                
                {/* Captain */}
                <div>
                  <h4 className="text-sm font-medium text-purple-400 flex items-center mb-2">
                    <Briefcase size={14} className="mr-2" /> Takım Lideri
                  </h4>
                  <div className="py-2 hover:bg-purple-900/10 rounded px-2 transition-colors cursor-pointer" onClick={(e) => handleMemberClick(teamData.sponsorshipTeam.captain, e)}>
                    <div className="h-20 w-20 rounded-lg overflow-hidden border border-purple-500/30 mr-4">
                      <img src={teamData.sponsorshipTeam.captain.image || `${process.env.PUBLIC_URL}/team/placeholder-10.jpg`} alt={teamData.sponsorshipTeam.captain.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{teamData.sponsorshipTeam.captain.name}</div>
                      <div className="text-xs text-purple-400">{teamData.sponsorshipTeam.captain.role}</div>
                    </div>
                  </div>
                </div>
                
                {/* Team Members */}
                <div>
                  <h4 className="text-sm font-medium text-gray-300 flex items-center mb-2 border-t border-gray-800 pt-3">
                    <GitBranch size={14} className="mr-2 text-purple-400" /> Takım Üyeleri
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {teamData.sponsorshipTeam.members.map((member, idx) => (
                      <div key={idx} className="py-2 hover:bg-purple-900/5 rounded px-2 transition-colors cursor-pointer" onClick={(e) => handleMemberClick(member, e)}>
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full overflow-hidden border border-purple-500/20 mr-2">
                            <img src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${(idx + 11) % 24 + 1}.jpg`} alt={member.name} className="h-full w-full object-cover" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-300">{member.name}</div>
                            <div className="text-xs text-purple-400/70">{member.role}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        </div>
        
        {/* Main content container - takes up full width or first columns if side panel is open */}
        <div className={`${hasExpandedNode ? 'col-span-2' : 'w-full'} relative z-10`}>
          {/* Advisors */}
          <div className="flex justify-center mb-12 opacity-0 node-animate">
            <div 
            className="bg-black/70 border border-blue-500/30 rounded-lg p-4 w-64 text-center cursor-pointer hover:border-blue-500/60 hover:bg-blue-900/20 transition-all duration-300"
            onClick={(e) => handleNodeClick('advisors', e)}
            >
              <div className="inline-block bg-blue-900/30 p-2 rounded-full text-blue-500 mb-2">
                <AlertCircle size={24} />
              </div>
              <h4 className="text-lg font-bold text-white">Akademik Danışmanlar</h4>
              <p className="text-xs text-blue-400 mt-1">{teamData.advisors.length} Danışman</p>
              
              <div className="mt-4 flex justify-center">
                {teamData.advisors.map((advisor, index) => (
                  <div 
                    key={index}
                    className="relative group hover:z-10"
                    onClick={(e) => handleMemberClick(advisor, e)}
                  >
                    <div className="h-24 w-24 rounded-xl overflow-hidden border-2 border-blue-500/50 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-blue-500/10">
                      <img 
                        src={advisor.image || `${process.env.PUBLIC_URL}/team/placeholder-${index + 1}.jpg`}
                        alt={advisor.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-black font-bold">
                      A
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Team Captain */}
          <div className="flex justify-center mb-12 opacity-0 node-animate" style={{animationDelay: "0.2s"}}>
            <div 
            className="bg-black/70 border border-red-500/30 rounded-lg p-4 w-64 text-center cursor-pointer hover:border-red-500/60 hover:bg-red-900/20 transition-all duration-300 relative"
            onClick={(e) => handleNodeClick('captain', e)}
            >
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-75"></div>
              
              <div className="inline-block bg-red-900/30 p-2 rounded-full text-red-500 mb-2">
                <Users size={24} />
              </div>
              <h4 className="text-lg font-bold text-white">Takım Kaptanı</h4>
              
              <div className="mt-4 flex justify-center">
                {teamData.teamLeadership.map((leader, index) => (
                  <div 
                    key={index} 
                    className="relative group hover:z-10"
                    onClick={(e) => handleMemberClick(leader, e)}
                  >
                    <div className="h-24 w-24 rounded-xl overflow-hidden border-2 border-red-500/50 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-red-500/10">
                      <img 
                        src={leader.image || `${process.env.PUBLIC_URL}/team/placeholder-${index + 1}.jpg`}
                        alt={leader.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-black font-bold">
                      K
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Team Units - Division Level */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Electronics Team */}
            <div className="opacity-0 node-animate" style={{animationDelay: "0.3s"}}>
                <div className={`relative transition-all duration-300 ${expandedNodes.electronics ? 'transform -translate-x-12' : ''}`}>
                  <div 
                  className={`bg-black/70 border border-red-500/30 rounded-lg p-4 text-center cursor-pointer transition-all duration-300 ${expandedNodes.electronics ? 'ring-2 ring-red-500/30 shadow-lg shadow-red-900/10 bg-red-900/20' : 'hover:border-red-500/60 hover:bg-red-900/5'}`}
                  onClick={(e) => handleNodeClick('electronics', e)}
                  >
                <div className="inline-block bg-red-900/30 p-2 rounded-full text-red-500 mb-2">
                  <Cpu size={24} />
                </div>
                <h4 className="text-lg font-bold text-white">Elektronik ve Yazılım</h4>
                <p className="text-xs text-red-400 mt-1">{electronicsCount} Üye</p>
                
                <div className="mt-4 flex justify-center">
                  <div 
                    className="relative group hover:z-10"
                    onClick={(e) => handleMemberClick(teamData.electronicsTeam.captain, e)}
                  >
                    <div className="h-24 w-24 rounded-xl overflow-hidden border-2 border-red-500/50 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-red-500/10">
                      <img 
                        src={teamData.electronicsTeam.captain.image || `${process.env.PUBLIC_URL}/team/placeholder-3.jpg`}
                        alt={teamData.electronicsTeam.captain.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-black font-bold">
                      E
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-sm flex items-center justify-center">
                  <span>{expandedNodes.electronics ? 'Gizle' : 'Detayları Göster'}</span>
                  {expandedNodes.electronics ? (
                    <ChevronDown size={16} className="ml-2" />
                  ) : (
                    <ChevronRight size={16} className="ml-2" />
                  )}
                </div>
              </div>
              
              {/* Electronics Subteams */}
              {expandedNodes.electronics && (
                <div className="mt-4 space-y-4 animate-slideDown smooth-scroll expanded-electronics">
                  {/* Hardware Unit */}
                  <div className="bg-black/60 border border-red-900/20 rounded-lg p-3 relative">
                    <div className="absolute left-4 -top-2 px-2 py-0.5 bg-black text-xs text-red-400 border border-red-900/30 rounded">
                      <div className="flex items-center">
                        <GitBranch size={12} className="mr-1" />
                        <span>Elektronik Donanım</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {teamData.electronicsTeam.hardware.map((member, index) => (
                        <div 
                          key={index}
                          className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={(e) => handleMemberClick(member, e)}
                        >
                          <div className="h-10 w-10 rounded-full overflow-hidden border border-red-500/30">
                            <img 
                              src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${(index + 4) % 24 + 1}.jpg`}
                              alt={member.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="text-xs text-gray-400 mt-1 truncate w-full text-center">
                            {member.name.split(' ')[0]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Software Unit */}
                  <div className="bg-black/60 border border-red-900/20 rounded-lg p-3 relative">
                    <div className="absolute left-4 -top-2 px-2 py-0.5 bg-black text-xs text-red-400 border border-red-900/30 rounded">
                      <div className="flex items-center">
                        <GitBranch size={12} className="mr-1" />
                        <span>Yazılım Geliştirme</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {teamData.electronicsTeam.software.map((member, index) => (
                        <div 
                          key={index}
                          className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={(e) => handleMemberClick(member, e)}
                        >
                          <div className="h-10 w-10 rounded-full overflow-hidden border border-red-500/30">
                            <img 
                              src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${(index + 7) % 24 + 1}.jpg`}
                              alt={member.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="text-xs text-gray-400 mt-1 truncate w-full text-center">
                            {member.name.split(' ')[0]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Mechanical Team */}
            <div className="opacity-0 node-animate" style={{animationDelay: "0.4s"}}>
              <div 
              className={`bg-black/70 border border-green-500/30 rounded-lg p-4 text-center cursor-pointer transition-all duration-300 ${expandedNodes.mechanical ? 'ring-2 ring-green-500/30 shadow-lg shadow-green-900/10 bg-green-900/20' : 'hover:border-green-500/60 hover:bg-green-900/5'}`}
              onClick={(e) => handleNodeClick('mechanical', e)}
              >
                <div className="inline-block bg-green-900/30 p-2 rounded-full text-green-500 mb-2">
                  <Wrench size={24} />
                </div>
                <h4 className="text-lg font-bold text-white">Mekanik Tasarım</h4>
                <p className="text-xs text-green-400 mt-1">{mechanicalCount} Üye</p>
                
                <div className="mt-4 flex justify-center">
                  <div 
                    className="relative group hover:z-10"
                    onClick={(e) => handleMemberClick(teamData.mechanicalTeam.captain, e)}
                  >
                    <div className="h-24 w-24 rounded-xl overflow-hidden border-2 border-green-500/50 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-green-500/10">
                      <img 
                        src={teamData.mechanicalTeam.captain.image || `${process.env.PUBLIC_URL}/team/placeholder-13.jpg`}
                        alt={teamData.mechanicalTeam.captain.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-black font-bold">
                      M
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-sm flex items-center justify-center">
                  <span>{expandedNodes.mechanical ? 'Gizle' : 'Detayları Göster'}</span>
                  {expandedNodes.mechanical ? (
                    <ChevronDown size={16} className="ml-2" />
                  ) : (
                    <ChevronRight size={16} className="ml-2" />
                  )}
                </div>
              </div>
              
              {/* Mechanical Subteams */}
              {expandedNodes.mechanical && (
                <div className="mt-4 space-y-4 animate-slideDown smooth-scroll expanded-mechanical">
                  {/* Chassis Unit */}
                  <div className="bg-black/60 border border-green-900/20 rounded-lg p-3 relative">
                    <div className="absolute left-4 -top-2 px-2 py-0.5 bg-black text-xs text-green-400 border border-green-900/30 rounded">
                      <div className="flex items-center">
                        <GitBranch size={12} className="mr-1" />
                        <span>Şasi ve Aktarma</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {teamData.mechanicalTeam.chassisAndDrivetrain.map((member, index) => (
                        <div 
                          key={index}
                          className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={(e) => handleMemberClick(member, e)}
                        >
                          <div className="h-10 w-10 rounded-full overflow-hidden border border-green-500/30">
                            <img 
                              src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${(index + 14) % 24 + 1}.jpg`}
                              alt={member.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="text-xs text-gray-400 mt-1 truncate w-full text-center">
                            {member.name.split(' ')[0]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Shell Unit */}
                  <div className="bg-black/60 border border-green-900/20 rounded-lg p-3 relative">
                    <div className="absolute left-4 -top-2 px-2 py-0.5 bg-black text-xs text-green-400 border border-green-900/30 rounded">
                      <div className="flex items-center">
                        <GitBranch size={12} className="mr-1" />
                        <span>Kabuk ve Analiz</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {teamData.mechanicalTeam.shellAndAnalysis.map((member, index) => (
                        <div 
                          key={index}
                          className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={(e) => handleMemberClick(member, e)}
                        >
                          <div className="h-10 w-10 rounded-full overflow-hidden border border-green-500/30">
                            <img 
                              src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${(index + 17) % 24 + 1}.jpg`}
                              alt={member.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="text-xs text-gray-400 mt-1 truncate w-full text-center">
                            {member.name.split(' ')[0]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Powertrain Unit */}
                  <div className="bg-black/60 border border-green-900/20 rounded-lg p-3 relative">
                    <div className="absolute left-4 -top-2 px-2 py-0.5 bg-black text-xs text-green-400 border border-green-900/30 rounded">
                      <div className="flex items-center">
                        <GitBranch size={12} className="mr-1" />
                        <span>Güç Aktarma</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {teamData.mechanicalTeam.powertrainAndParts.slice(0, 6).map((member, index) => (
                        <div 
                          key={index}
                          className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={(e) => handleMemberClick(member, e)}
                        >
                          <div className="h-10 w-10 rounded-full overflow-hidden border border-green-500/30">
                            <img 
                              src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${(index + 19) % 24 + 1}.jpg`}
                              alt={member.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="text-xs text-gray-400 mt-1 truncate w-full text-center">
                            {member.name.split(' ')[0]}
                          </div>
                        </div>
                      ))}
                      
                      {teamData.mechanicalTeam.powertrainAndParts.length > 6 && (
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-10 rounded-full overflow-hidden border border-green-500/30 bg-black/80 flex items-center justify-center text-green-500">
                            +{teamData.mechanicalTeam.powertrainAndParts.length - 6}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sponsorship Team */}
            <div className="opacity-0 node-animate" style={{animationDelay: "0.5s"}}>
              <div 
              className={`bg-black/70 border border-purple-500/30 rounded-lg p-4 text-center cursor-pointer transition-all duration-300 ${expandedNodes.sponsorship ? 'ring-2 ring-purple-500/30 shadow-lg shadow-purple-900/10 bg-purple-900/20' : 'hover:border-purple-500/60 hover:bg-purple-900/5'}`}
              onClick={(e) => handleNodeClick('sponsorship', e)}
              >
                <div className="inline-block bg-purple-900/30 p-2 rounded-full text-purple-500 mb-2">
                  <Briefcase size={24} />
                </div>
                <h4 className="text-lg font-bold text-white">Sponsorluk ve Organizasyon</h4>
                <p className="text-xs text-purple-400 mt-1">{sponsorshipCount} Üye</p>
                
                <div className="mt-4 flex justify-center">
                  <div 
                    className="relative group hover:z-10"
                    onClick={(e) => handleMemberClick(teamData.sponsorshipTeam.captain, e)}
                  >
                    <div className="h-24 w-24 rounded-xl overflow-hidden border-2 border-purple-500/50 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-purple-500/10">
                      <img 
                        src={teamData.sponsorshipTeam.captain.image || `${process.env.PUBLIC_URL}/team/placeholder-10.jpg`}
                        alt={teamData.sponsorshipTeam.captain.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-purple-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-black font-bold">
                      S
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-sm flex items-center justify-center">
                  <span>{expandedNodes.sponsorship ? 'Gizle' : 'Detayları Göster'}</span>
                  {expandedNodes.sponsorship ? (
                    <ChevronDown size={16} className="ml-2" />
                  ) : (
                    <ChevronRight size={16} className="ml-2" />
                  )}
                </div>
              </div>
              
              {/* Sponsorship Team Members */}
              {expandedNodes.sponsorship && (
                <div className="mt-4 bg-black/60 border border-purple-900/20 rounded-lg p-4 animate-slideDown smooth-scroll expanded-sponsorship">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {teamData.sponsorshipTeam.members.map((member, index) => (
                      <div 
                        key={index}
                        className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={(e) => handleMemberClick(member, e)}
                      >
                        <div className="h-12 w-12 rounded-full overflow-hidden border border-purple-500/30">
                          <img 
                            src={member.image || `${process.env.PUBLIC_URL}/team/placeholder-${(index + 11) % 24 + 1}.jpg`}
                            alt={member.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="text-xs text-gray-400 mt-2 text-center">
                          {member.name}
                        </div>
                        <div className="text-xs text-purple-400">
                          {member.role}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Member Detail Panel */}
        {memberDetails && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black/90 border border-blue-500/30 rounded-lg p-6 max-w-md w-full member-detail-panel relative">
              <button 
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                onClick={() => setMemberDetails(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="flex items-start">
                <div className="h-20 w-20 rounded-lg overflow-hidden border-2 border-blue-500/30 mr-4">
                  <img 
                    src={memberDetails.image || "/team/placeholder-1.jpg"}
                    alt={memberDetails.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{memberDetails.name}</h3>
                  <p className="text-blue-400">{memberDetails.role}</p>
                  <p className="text-gray-400 text-sm mt-1">{memberDetails.department}</p>
                  
                  {memberDetails.class && (
                    <p className="text-gray-500 text-sm mt-2">
                      {memberDetails.class}. Sınıf
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                {memberDetails.email && (
                  <a 
                    href={`mailto:${memberDetails.email}`}
                    className="flex items-center justify-center bg-blue-900/20 text-blue-400 px-3 py-2 rounded-md text-sm hover:bg-blue-900/30 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email
                  </a>
                )}
                
                {memberDetails.linkedin && (
                  <a 
                    href={memberDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-blue-900/20 text-blue-400 px-3 py-2 rounded-md text-sm hover:bg-blue-900/30 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamHierarchyFlowchart;