import React, { useState } from 'react';
import { Cpu, Wrench, Briefcase, ChevronDown, ChevronRight, X, Mail, Linkedin, Info, Battery } from 'lucide-react';
import '../OrganizationChartMobile.css';
import '../IndustrialDesign.css';
import '../OrgChartIndustrial.css';

const ProfessionalOrgChart = ({ teamData }) => {
  // This is the updated professional academic version with no mouse-following effects
  // State to track which section is expanded (only one at a time)
  const [expandedSection, setExpandedSection] = useState(null);
  // State to track expanded member
  const [expandedMember, setExpandedMember] = useState(null);
  // State to track which unit info boxes are open
  const [openUnitInfo, setOpenUnitInfo] = useState({});
  
  // Toggle expanded state for a section
  const toggleSection = (sectionId) => {
    if (expandedSection === sectionId) {
      // If the same section is clicked again, close it
      setExpandedSection(null);
    } else {
      // Otherwise, close any open section and open the clicked one
      setExpandedSection(sectionId);
    }
  };
  
  // Toggle unit info box
  const toggleUnitInfo = (unitId, e) => {
    e.stopPropagation(); // Prevent triggering parent click events
    setOpenUnitInfo(prev => ({
      ...prev,
      [unitId]: !prev[unitId]
    }));
  };
  
  // Toggle member expansion
  const toggleMember = (memberId, e) => {
    e.stopPropagation(); // Prevent triggering parent click events
    if (expandedMember === memberId) {
      setExpandedMember(null);
    } else {
      setExpandedMember(memberId);
    }
  };
  
  // Check if a section is expanded
  const isSectionExpanded = (sectionId) => expandedSection === sectionId;
  
  // Check if unit info is open
  const isUnitInfoOpen = (unitId) => !!openUnitInfo[unitId];
  
  // Check if member is expanded
  const isMemberExpanded = (memberId) => expandedMember === memberId;
  
  // Unit information data
  const unitInfoData = {
    electronics: {
      title: "Elektrik Elektronik Kısmı",
      description: "Elektronik ekibi, aracımızın sinir sistemini oluşturan tüm elektronik donanım ve yazılım sistemlerinin tasarımı, üretimi ve testinden sorumludur. BLDC motor sürücüleri, batarya yönetim sistemleri (BMS), telemetri ve araç kontrol sistemleri gibi kritik bileşenleri geliştirmektedir.",
      highlights: [
        "CAN-Bus tabanlı veri iletişim altyapısı",
        "STM32 tabanlı gömülü sistemler",
        "YOLOv5 tabanlı nesne tanıma sistemleri",
        "Raspberry Pi 5 ile görüntü işleme"
      ]
    },
    vehicleControl: {
      title: "Araç Kontrol Sistemi",
      description: "Araç Kontrol Sistemi ekibi, aracın tüm elektronik kontrol sistemlerini tasarlar ve gerçekleştirir. Sensörlerden gelen verileri işleyerek, aracın güvenli ve verimli bir şekilde çalışmasını sağlar.",
      highlights: [
        "Motor kontrol algoritmaları",
        "Sürüş modu optimizasyonu",
        "Sensör verileri işleme",
        "Hata tanıma ve düzeltme sistemleri"
      ]
    },
    embeddedSoftware: {
      title: "Gömülü Yazılım Birimi",
      description: "Gömülü Yazılım ekibi, aracın mikrodenetleyicileri ve diğer elektronik bileşenleri için yazılım geliştirmekten sorumludur. Düşük seviyeli sistem entegrasyonu ve performans optimizasyonu üzerinde çalışırlar.",
      highlights: [
        "Gerçek zamanlı işletim sistemi uygulamaları",
        "Mikroişlemci programlama",
        "Veri iletişim protokolleri",
        "Hata ayıklama ve test"
      ]
    },
    batteryBMS: {
      title: "Batarya ve BYS Birimi",
      description: "Batarya ve Batarya Yönetim Sistemi (BYS) ekibi, aracın enerji kaynağını ve bununla ilgili tüm sistemleri tasarlar, geliştirir ve test eder. Sistem güvenliği ve optimum performansı sağlamak için çalışırlar.",
      highlights: [
        "Batarya paketleri tasarımı ve üretimi",
        "Güvenlik ve koruma sistemleri",
        "Enerji verimliliği optimizasyonu",
        "Şarj kontrol sistemleri"
      ]
    },
    mechanical: {
      title: "Mekanik Kısmı",
      description: "Mekanik tasarım ekibi, aracın şasi, süspansiyon, kabuk ve aktarma organları gibi tüm mekanik parçalarının tasarımı, analizi, üretimi ve testinden sorumludur. Aerodinamik verimlilik ve yapısal dayanıklılık, tasarım sürecinin temel unsurlarıdır.",
      highlights: [
        "Kompozit karbon fiber kabuk üretimi",
        "FEA ile yapısal analiz",
        "CAD ile kapsamlı tasarım",
        "3D baskı prototipleme"
      ]
    },
    chassis: {
      title: "Şasi ve Aktarma organları",
      description: "Şasi ve Aktarma Birimi, araç kaportasını oluşturan şasi tasarımı ve dayanıklılık testlerinin yanı sıra, mekanik aktarma organlarının optimizasyonundan sorumludur. Ekip, enerji verimliliğini en üst düzeye çıkarmak için aktarma organlarını sürekli olarak geliştirmektedir.",
      highlights: [
        "Alüminyum profil şasi tasarımı",
        "Yük ve dayanıklılık testleri",
        "Hafifleştirme çalışmaları",
        "Verimli güç aktarımı"
      ]
    },
    shell: {
      title: "Kabuk ve Analiz",
      description: "Kabuk ve Analiz Birimi, aracın dış kabuğunun aerodinamik özelliklerini optimize etmek ve üretim süreçlerini yönetmek için çalışmaktadır. CFD analizleri, kabuk geometrisinin sürekli iyileştirilmesine yardımcı olmaktadır.",
      highlights: [
        "Aerodinamik optimizasyon",
        "CFD simülasyonları",
        "Kalıp tasarımı ve üretimi",
        "Kompozit yapı analizi"
      ]
    },
    powertrain: {
      title: "Powertrain ve Araç Parçaları",
      description: "Güç Aktarma ve Parçalar Birimi, aracın tüm mekanik bileşenlerinin tasarımı, optimizasyonu ve entegrasyonundan sorumludur. Motor-tekerlek bağlantısı, fren sistemleri ve direksiyon gibi kritik sistemler, bu ekibin çalışma alanı içindedir.",
      highlights: [
        "Elektrik motorlarının entegrasyonu",
        "Fren sistemi tasarımı",
        "Jant ve tekerlek optimizasyonu",
        "Süspansiyon ayarları"
      ]
    },
    sponsorship: {
      title: "Sponsorluk ve Organizasyon Ekibi",
      description: "Sponsorluk ekibi, projenin finansal sürdürülebilirliğini sağlamak için sponsorluk anlaşmalarının yönetimi ve kurumsal ilişkilerden sorumludur. Aynı zamanda ekip, etkinlik organizasyonu ve sosyal medya yönetimi gibi iletişim faaliyetlerini de yürütmektedir.",
      highlights: [
        "Kurumsal sponsorluk anlaşmaları",
        "Tanıtım materyalleri hazırlama",
        "Sosyal medya içerik yönetimi",
        "Etkinlik ve fuar organizasyonu"
      ]
    },
    software: {
      title: "Yazılım Birimi",
      description: "Yazılım ekibi, aracın tüm yazılım sistemlerini tasarlar ve geliştirir. Yazılımın verimliliği ve güvenliği için çalışırlar.",
      highlights: [
        "İşletim sistemi geliştirme",
        "Uygulama geliştirme",
        "Veri analizi ve işleme",
        "Sistem entegrasyonu"
      ]
    }
  };
  
  // Enhanced team member component with expansion
  const EnhancedMemberCard = ({ member, color = "red" }) => {
    const isExpanded = isMemberExpanded(member.id);
    
    return (
      <div 
        className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${isExpanded ? 'scale-110 z-10' : 'hover:scale-105'}`}
        onClick={(e) => toggleMember(member.id, e)}
      >
        <div className={`${isExpanded ? 'w-32 h-32' : 'w-20 h-20'} rounded-lg overflow-hidden border border-${color}-500/30 mb-2 shadow-sm shadow-${color}-500/10 transition-all duration-300`}>
          <img 
            src={member.image || "/team/placeholder-1.jpg"}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className={`text-sm text-voltaris-text ${isExpanded ? 'font-bold' : ''}`}>{member.name}</p>
          <p className={`text-xs text-${color}-400/70`}>{member.department}</p>
          
          {isExpanded && (
            <div className="mt-2 flex justify-center space-x-2">
              {member.email && (
                <a 
                  href={`mailto:${member.email}`}
                  className={`p-1.5 bg-${color}-900/20 text-${color}-400 rounded-full hover:bg-${color}-900/40 transition-colors`}
                  onClick={(e) => e.stopPropagation()}
                  title={member.email}
                >
                  <Mail size={14} />
                </a>
              )}
              {member.linkedin && (
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 bg-${color}-900/20 text-${color}-400 rounded-full hover:bg-${color}-900/40 transition-colors`}
                  onClick={(e) => e.stopPropagation()}
                  title="LinkedIn"
                >
                  <Linkedin size={14} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  // Ensure we have all the required data
  if (!teamData) return null;
  
  return (
    <div className="w-full bg-white/95 backdrop-blur-sm p-3 sm:p-6 rounded-lg border border-voltaris-blue/20 shadow-lg industrial-box industrial-corners industrial-corners-bottom org-chart-pro">
      <h3 className="text-2xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-voltaris-blue to-voltaris-text bg-clip-text text-transparent">Organizasyon Yapımız</span>
        <div className="h-0.5 w-20 bg-gradient-to-r from-voltaris-blue to-transparent mx-auto mt-2"></div>
      </h3>
      
      {/* Main Organization Chart */}
      <div className="org-chart">
        {/* Board Level - Top Level with Advisor and Captain Side by Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 sm:mb-12">
          {/* Academic Advisor */}
          <div className="flex justify-center">
            <div 
              className={`org-box board-box cursor-pointer industrial-border ${isMemberExpanded(teamData.advisors[0]?.id) ? 'border-voltaris-blue/50' : ''}`}
              onClick={(e) => toggleMember(teamData.advisors[0]?.id, e)}
            >
              <div className="flex items-center justify-center mb-2">
                <div className={`${isMemberExpanded(teamData.advisors[0]?.id) ? 'w-32 h-32' : 'w-28 h-28'} rounded-lg overflow-hidden border-2 border-voltaris-blue/30 mx-auto shadow-lg shadow-voltaris-blue/10 transition-all duration-300 industrial-corners industrial-corners-bottom`}>
                  <img 
                    src={teamData.advisors[0]?.image || "/team/placeholder-2.jpg"}
                    alt="Akademik Danışman"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-voltaris-text">Akademik Danışman</h4>
                <p className="text-sm text-voltaris-blue">{teamData.advisors[0]?.name || "Prof. Dr. Erdal Çetkin"}</p>
                
                {isMemberExpanded(teamData.advisors[0]?.id) && teamData.advisors[0] && (
                  <div className="mt-2 flex justify-center space-x-2">
                    {teamData.advisors[0].email && (
                      <a 
                        href={`mailto:${teamData.advisors[0].email}`}
                        className="p-2 bg-voltaris-blue/10 text-voltaris-blue rounded-full hover:bg-voltaris-blue/20 transition-colors shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                        title={teamData.advisors[0].email}
                      >
                        <Mail size={14} />
                      </a>
                    )}
                    {teamData.advisors[0].linkedin && (
                      <a 
                        href={teamData.advisors[0].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-voltaris-blue/10 text-voltaris-blue rounded-full hover:bg-voltaris-blue/20 transition-colors shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                        title="LinkedIn"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Team Captain */}
          <div className="flex justify-center">
            <div 
              className={`org-box ceo-box cursor-pointer industrial-border ${isMemberExpanded(teamData.teamLeadership[0]?.id) ? 'border-voltaris-red/50' : ''}`}
              onClick={(e) => toggleMember(teamData.teamLeadership[0]?.id, e)}
            >
              <div className="flex items-center justify-center mb-2">
                <div className={`${isMemberExpanded(teamData.teamLeadership[0]?.id) ? 'w-32 h-32' : 'w-28 h-28'} rounded-lg overflow-hidden border-2 border-voltaris-red/30 mx-auto shadow-lg shadow-voltaris-red/10 transition-all duration-300 industrial-corners industrial-corners-bottom`}>
                  <img 
                    src={teamData.teamLeadership[0]?.image || "/team/placeholder-1.jpg"}
                    alt="Takım Kaptanı"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-voltaris-text">{teamData.teamLeadership[0]?.name || "Ömer Ünal"}</h4>
                <p className="text-sm text-voltaris-red">Takım Kaptanı</p>
                
                {isMemberExpanded(teamData.teamLeadership[0]?.id) && teamData.teamLeadership[0] && (
                  <div className="mt-2 flex justify-center space-x-2">
                    {teamData.teamLeadership[0].email && (
                      <a 
                        href={`mailto:${teamData.teamLeadership[0].email}`}
                        className="p-2 bg-voltaris-red/10 text-voltaris-red rounded-full hover:bg-voltaris-red/20 transition-colors shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                        title={teamData.teamLeadership[0].email}
                      >
                        <Mail size={14} />
                      </a>
                    )}
                    {teamData.teamLeadership[0].linkedin && (
                      <a 
                        href={teamData.teamLeadership[0].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-voltaris-red/10 text-voltaris-red rounded-full hover:bg-voltaris-red/20 transition-colors shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                        title="LinkedIn"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Vertical connector line */}
        <div className="connector-line mx-auto mb-4"></div>
        
        {/* Horizontal connector for directors level */}
        <div className="horizontal-connector-wide mx-auto mb-8"></div>
        
        {/* Unit Captains Level - Directors Level */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Electronics Team */}
          <div className="flex flex-col items-center">
            <div 
              className={`org-box director-box cursor-pointer transition-all duration-300 ${isSectionExpanded('electronics') ? 'border-voltaris-orange/50 shadow-lg shadow-voltaris-orange/10' : 'hover:border-voltaris-orange/30'} ${isMemberExpanded(teamData.electronicsTeam.captain?.id) ? 'border-voltaris-orange/50' : ''}`}
              onClick={(e) => toggleMember(teamData.electronicsTeam.captain?.id, e)}
            >
              <div className="flex items-center justify-center mb-2">
                <div className={`${isMemberExpanded(teamData.electronicsTeam.captain?.id) ? 'w-32 h-32' : 'w-28 h-28'} rounded-lg overflow-hidden border-2 border-voltaris-orange/30 mx-auto shadow-lg shadow-voltaris-orange/10 transition-all duration-300`}>
                  <img 
                    src={teamData.electronicsTeam.captain?.image || "/team/placeholder-2.jpg"} 
                    alt={teamData.electronicsTeam.captain?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-voltaris-text">{teamData.electronicsTeam.captain?.name}</h4>
                <p className="text-sm text-voltaris-orange">Elektronik Birimi Lideri</p>
                
                {isMemberExpanded(teamData.electronicsTeam.captain?.id) && teamData.electronicsTeam.captain && (
                  <div className="mt-2 flex justify-center space-x-2">
                    {teamData.electronicsTeam.captain.email && (
                      <a 
                        href={`mailto:${teamData.electronicsTeam.captain.email}`}
                        className="p-2 bg-voltaris-orange/10 text-voltaris-orange rounded-full hover:bg-voltaris-orange/20 transition-colors shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                        title={teamData.electronicsTeam.captain.email}
                      >
                        <Mail size={14} />
                      </a>
                    )}
                    {teamData.electronicsTeam.captain.linkedin && (
                      <a 
                        href={teamData.electronicsTeam.captain.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-voltaris-orange/10 text-voltaris-orange rounded-full hover:bg-voltaris-orange/20 transition-colors shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                        title="LinkedIn"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* Unit Info Button */}
            <button 
              className="mt-2 flex items-center justify-center text-xs text-voltaris-blue hover:text-voltaris-blue/80 bg-voltaris-blue/10 px-3 py-1 rounded shadow-sm transition-all hover:shadow-md"
              onClick={(e) => toggleUnitInfo('electronics', e)}
            >
              <Info size={12} className="mr-1" /> Birim Bilgisi
            </button>
            
            {/* Unit Info Box */}
            {isUnitInfoOpen('electronics') && (
              <div className="unit-info-box mt-4 w-full max-w-sm bg-white border border-voltaris-blue/20 rounded-lg p-4 animate-fadeIn shadow-lg" style={{
                  backgroundImage: "linear-gradient(to right, rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.03) 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}>
                <h5 className="font-bold text-voltaris-blue mb-2">{unitInfoData.electronics.title}</h5>
                <p className="text-sm text-voltaris-secondary mb-3">{unitInfoData.electronics.description}</p>
                <div className="bg-voltaris-blue/5 rounded-lg p-3">
                  <h6 className="text-xs text-voltaris-blue font-medium mb-2">Çalışma Alanları:</h6>
                  <ul className="text-xs text-voltaris-secondary">
                    {unitInfoData.electronics.highlights.map((item, i) => (
                      <li key={i} className="mb-1 flex items-start">
                        <span className="text-voltaris-blue mr-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          {/* Mechanical Team */}
          <div className="flex flex-col items-center">
            <div 
              className={`org-box director-box cursor-pointer transition-all duration-300 ${isSectionExpanded('mechanical') ? 'border-voltaris-green/50 shadow-lg shadow-voltaris-green/10' : 'hover:border-voltaris-green/30'} ${isMemberExpanded(teamData.mechanicalTeam.captain?.id) ? 'border-voltaris-green/50' : ''}`}
              onClick={(e) => toggleMember(teamData.mechanicalTeam.captain?.id, e)}
            >
              <div className="flex items-center justify-center mb-2">
                <div className={`${isMemberExpanded(teamData.mechanicalTeam.captain?.id) ? 'w-32 h-32' : 'w-28 h-28'} rounded-lg overflow-hidden border-2 border-voltaris-green/30 mx-auto shadow-lg shadow-voltaris-green/10 transition-all duration-300`}>
                  <img 
                    src={teamData.mechanicalTeam.captain?.image || "/team/placeholder-2.jpg"} 
                    alt={teamData.mechanicalTeam.captain?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-voltaris-text">{teamData.mechanicalTeam.captain?.name}</h4>
                <p className="text-sm text-voltaris-green">Mekanik Birimi Lideri</p>
                
                {isMemberExpanded(teamData.mechanicalTeam.captain?.id) && teamData.mechanicalTeam.captain && (
                  <div className="mt-2 flex justify-center space-x-2">
                    {teamData.mechanicalTeam.captain.email && (
                      <a 
                        href={`mailto:${teamData.mechanicalTeam.captain.email}`}
                        className="p-2 bg-voltaris-green/10 text-voltaris-green rounded-full hover:bg-voltaris-green/20 transition-colors shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                        title={teamData.mechanicalTeam.captain.email}
                      >
                        <Mail size={14} />
                      </a>
                    )}
                    {teamData.mechanicalTeam.captain.linkedin && (
                      <a 
                        href={teamData.mechanicalTeam.captain.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-voltaris-green/10 text-voltaris-green rounded-full hover:bg-voltaris-green/20 transition-colors shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                        title="LinkedIn"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* Unit Info Button */}
            <button 
              className="mt-2 flex items-center justify-center text-xs text-voltaris-blue hover:text-voltaris-blue/80 bg-voltaris-blue/10 px-3 py-1 rounded shadow-sm transition-all hover:shadow-md"
              onClick={(e) => toggleUnitInfo('mechanical', e)}
            >
              <Info size={12} className="mr-1" /> Birim Bilgisi
            </button>
            
            {/* Unit Info Box */}
            {isUnitInfoOpen('mechanical') && (
              <div className="unit-info-box mt-4 w-full max-w-sm bg-white border border-voltaris-blue/20 rounded-lg p-4 animate-fadeIn shadow-lg" style={{
                  backgroundImage: "linear-gradient(to right, rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.03) 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}>
                <h5 className="font-bold text-voltaris-blue mb-2">{unitInfoData.mechanical.title}</h5>
                <p className="text-sm text-voltaris-secondary mb-3">{unitInfoData.mechanical.description}</p>
                <div className="bg-voltaris-blue/5 rounded-lg p-3">
                  <h6 className="text-xs text-voltaris-blue font-medium mb-2">Çalışma Alanları:</h6>
                  <ul className="text-xs text-voltaris-secondary">
                    {unitInfoData.mechanical.highlights.map((item, i) => (
                      <li key={i} className="mb-1 flex items-start">
                        <span className="text-voltaris-blue mr-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          {/* Sponsorship Team */}
          <div className="flex flex-col items-center">
            <div 
              className={`org-box director-box cursor-pointer transition-all duration-300 ${isSectionExpanded('sponsorship') ? 'border-blue-500/50 shadow-lg shadow-blue-900/10' : 'hover:border-blue-500/30'} ${isMemberExpanded(teamData.sponsorshipTeam.captain?.id) ? 'border-blue-500/50' : ''}`}
              onClick={(e) => toggleMember(teamData.sponsorshipTeam.captain?.id, e)}
            >
              <div className="flex items-center justify-center mb-2">
                <div className={`${isMemberExpanded(teamData.sponsorshipTeam.captain?.id) ? 'w-32 h-32' : 'w-28 h-28'} rounded-lg overflow-hidden border-2 border-blue-500/30 mx-auto shadow-lg shadow-blue-500/10 transition-all duration-300`}>
                  <img 
                    src={teamData.sponsorshipTeam.captain?.image || "/team/placeholder-15.jpg"}
                    alt={teamData.sponsorshipTeam.captain?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-white">{teamData.sponsorshipTeam.captain?.name}</h4>
                <p className="text-sm text-blue-400">Sponsorluk Takım Kaptanı</p>
                
                {isMemberExpanded(teamData.sponsorshipTeam.captain?.id) && teamData.sponsorshipTeam.captain && (
                  <div className="mt-2 flex justify-center space-x-2">
                    {teamData.sponsorshipTeam.captain.email && (
                      <a 
                        href={`mailto:${teamData.sponsorshipTeam.captain.email}`}
                        className="p-2 bg-blue-900/20 text-blue-400 rounded-full hover:bg-blue-900/40 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        title={teamData.sponsorshipTeam.captain.email}
                      >
                        <Mail size={14} />
                      </a>
                    )}
                    {teamData.sponsorshipTeam.captain.linkedin && (
                      <a 
                        href={teamData.sponsorshipTeam.captain.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-900/20 text-blue-400 rounded-full hover:bg-blue-900/40 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        title="LinkedIn"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* Unit Info Button */}
            <button 
              className="mt-2 flex items-center justify-center text-xs text-blue-400 hover:text-blue-300 bg-blue-900/10 px-3 py-1 rounded-full"
              onClick={(e) => toggleUnitInfo('sponsorship', e)}
            >
              <Info size={12} className="mr-1" /> Birim Bilgisi
            </button>
            
            {/* Unit Info Box */}
            {isUnitInfoOpen('sponsorship') && (
              <div className="unit-info-box mt-4 w-full max-w-sm bg-black/70 border border-blue-500/20 rounded-lg p-4 animate-fadeIn">
                <h5 className="font-bold text-blue-400 mb-2">{unitInfoData.sponsorship.title}</h5>
                <p className="text-sm text-gray-300 mb-3">{unitInfoData.sponsorship.description}</p>
                <div className="bg-blue-900/10 rounded-lg p-3">
                  <h6 className="text-xs text-blue-400 font-medium mb-2">Çalışma Alanları:</h6>
                  <ul className="text-xs text-gray-400">
                    {unitInfoData.sponsorship.highlights.map((item, i) => (
                      <li key={i} className="mb-1 flex items-start">
                        <span className="text-blue-500 mr-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Detayları Göster Butonu - Ayrı blok olarak */}
        <div className="flex flex-wrap justify-center mb-8 gap-3 px-2">
          <button 
            className={`px-3 py-2 mb-2 w-full sm:w-auto bg-voltaris-blue/10 text-voltaris-text rounded-lg hover:bg-voltaris-blue/20 transition-colors ${isSectionExpanded('electronics') ? 'border border-voltaris-blue/30' : ''} shadow-sm`}
            onClick={() => toggleSection('electronics')}
          >
            <div className="flex items-center justify-center flex-wrap">
              <Cpu className="mr-2 text-voltaris-blue" size={18} />
              <span className="text-sm sm:text-base">Elektronik Birimi</span>
              {isSectionExpanded('electronics') ? (
                <ChevronDown size={14} className="ml-2" />
              ) : (
                <ChevronRight size={14} className="ml-2" />
              )}
            </div>
          </button>
          
          <button 
            className={`px-3 py-2 mb-2 w-full sm:w-auto bg-voltaris-blue/10 text-voltaris-text rounded-lg hover:bg-voltaris-blue/20 transition-colors ${isSectionExpanded('mechanical') ? 'border border-voltaris-blue/30' : ''} shadow-sm`}
            onClick={() => toggleSection('mechanical')}
          >
            <div className="flex items-center justify-center flex-wrap">
              <Wrench className="mr-2 text-voltaris-blue" size={18} />
              <span className="text-sm sm:text-base">Mekanik Birimi</span>
              {isSectionExpanded('mechanical') ? (
                <ChevronDown size={14} className="ml-2" />
              ) : (
                <ChevronRight size={14} className="ml-2" />
              )}
            </div>
          </button>
          
          <button 
            className={`px-3 py-2 mb-2 w-full sm:w-auto bg-voltaris-blue/10 text-voltaris-text rounded-lg hover:bg-voltaris-blue/20 transition-colors ${isSectionExpanded('sponsorship') ? 'border border-voltaris-blue/30' : ''} shadow-sm`}
            onClick={() => toggleSection('sponsorship')}
          >
            <div className="flex items-center justify-center flex-wrap">
              <Briefcase className="mr-2 text-voltaris-blue" size={18} />
              <span className="text-sm sm:text-base">Sponsorluk & Organizasyon</span>
              {isSectionExpanded('sponsorship') ? (
                <ChevronDown size={14} className="ml-2" />
              ) : (
                <ChevronRight size={14} className="ml-2" />
              )}
            </div>
          </button>
        </div>
        
        {/* Expanded Electronics Section */}
        {isSectionExpanded('electronics') && (
          <div className="electronics-expanded mb-12 animate-fadeIn">
            <div className="flex justify-center mb-4">
              <div className="connector-line-sm"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Vehicle Control System Team */}
              <div className="flex flex-col">
                <div className="org-box sub-box bg-white/80 border border-voltaris-red/20 shadow-sm">
                <h4 className="font-bold text-voltaris-text text-lg mb-4 flex items-center justify-center">
                <Cpu className="mr-2 text-voltaris-red" size={18} /> Araç Kontrol Sistemi
                </h4>
                  
                  <div className="grid grid-cols-1 gap-3 px-1 sm:px-0">
                    {teamData.electronicsTeam.vehicleControlSystem?.map((member, i) => (
                      <EnhancedMemberCard 
                        key={`vcs-${i}`}
                        member={member}
                        color="red"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Unit Info Button */}
                <div className="flex justify-center">
                  <button 
                    className="mt-2 flex items-center justify-center text-xs text-voltaris-red hover:text-voltaris-red/80 bg-voltaris-red/10 px-3 py-1 rounded shadow-sm transition-all hover:bg-voltaris-red/20"
                    onClick={(e) => toggleUnitInfo('vehicleControl', e)}
                  >
                    <Info size={12} className="mr-1" /> Birim Bilgisi
                  </button>
                </div>
                
                {/* Unit Info Box */}
                {isUnitInfoOpen('vehicleControl') && (
                  <div className="unit-info-box mt-4 w-full bg-white/90 border border-voltaris-red/20 rounded-lg p-4 animate-fadeIn shadow-sm">
                    <h5 className="font-bold text-voltaris-red mb-2">{unitInfoData.vehicleControl.title}</h5>
                    <p className="text-sm text-voltaris-text mb-3">{unitInfoData.vehicleControl.description}</p>
                    <div className="bg-voltaris-red/5 rounded-lg p-3">
                      <h6 className="text-xs text-voltaris-red font-medium mb-2">Çalışma Alanları:</h6>
                      <ul className="text-xs text-voltaris-text/90">
                        {unitInfoData.vehicleControl.highlights.map((item, i) => (
                          <li key={i} className="mb-1 flex items-start">
                            <span className="text-voltaris-red mr-1">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Embedded Software Team */}
              <div className="flex flex-col">
                <div className="org-box sub-box bg-white/80 border border-voltaris-red/20 shadow-sm">
                  <h4 className="font-bold text-voltaris-text text-lg mb-4 flex items-center justify-center">
                    <Cpu className="mr-2 text-voltaris-red" size={18} /> Gömülü Yazılım
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-3 px-1 sm:px-0">
                    {teamData.electronicsTeam.embeddedSoftware?.map((member, i) => (
                      <EnhancedMemberCard 
                        key={`es-${i}`}
                        member={member}
                        color="red"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Unit Info Button */}
                <div className="flex justify-center">
                  <button 
                    className="mt-2 flex items-center justify-center text-xs text-voltaris-red hover:text-voltaris-red/80 bg-voltaris-red/10 px-3 py-1 rounded shadow-sm transition-all hover:bg-voltaris-red/20"
                    onClick={(e) => toggleUnitInfo('embeddedSoftware', e)}
                  >
                    <Info size={12} className="mr-1" /> Birim Bilgisi
                  </button>
                </div>
                
                {/* Unit Info Box */}
                {isUnitInfoOpen('embeddedSoftware') && (
                  <div className="unit-info-box mt-4 w-full bg-white/90 border border-voltaris-red/20 rounded-lg p-4 animate-fadeIn shadow-sm">
                    <h5 className="font-bold text-voltaris-red mb-2">{unitInfoData.embeddedSoftware.title}</h5>
                    <p className="text-sm text-voltaris-text mb-3">{unitInfoData.embeddedSoftware.description}</p>
                    <div className="bg-voltaris-red/5 rounded-lg p-3">
                      <h6 className="text-xs text-voltaris-red font-medium mb-2">Çalışma Alanları:</h6>
                      <ul className="text-xs text-voltaris-text/90">
                        {unitInfoData.embeddedSoftware.highlights.map((item, i) => (
                          <li key={i} className="mb-1 flex items-start">
                            <span className="text-voltaris-red mr-1">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Battery and BMS Team */}
              <div className="flex flex-col">
                <div className="org-box sub-box bg-white/80 border border-voltaris-red/20 shadow-sm">
                  <h4 className="font-bold text-voltaris-text text-lg mb-4 flex items-center justify-center">
                    <Battery className="mr-2 text-voltaris-red" size={18} /> Batarya ve BYS
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-3 px-1 sm:px-0">
                    {teamData.electronicsTeam.batteryAndBMS?.map((member, i) => (
                      <EnhancedMemberCard 
                        key={`bms-${i}`}
                        member={member}
                        color="red"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Unit Info Button */}
                <div className="flex justify-center">
                  <button 
                    className="mt-2 flex items-center justify-center text-xs text-voltaris-red hover:text-voltaris-red/80 bg-voltaris-red/10 px-3 py-1 rounded shadow-sm transition-all hover:bg-voltaris-red/20"
                    onClick={(e) => toggleUnitInfo('batteryBMS', e)}
                  >
                    <Info size={12} className="mr-1" /> Birim Bilgisi
                  </button>
                </div>
                
                {/* Unit Info Box */}
                {isUnitInfoOpen('batteryBMS') && (
                  <div className="unit-info-box mt-4 w-full bg-white/90 border border-voltaris-red/20 rounded-lg p-4 animate-fadeIn shadow-sm">
                    <h5 className="font-bold text-voltaris-red mb-2">{unitInfoData.batteryBMS.title}</h5>
                    <p className="text-sm text-voltaris-text mb-3">{unitInfoData.batteryBMS.description}</p>
                    <div className="bg-voltaris-red/5 rounded-lg p-3">
                      <h6 className="text-xs text-voltaris-red font-medium mb-2">Çalışma Alanları:</h6>
                      <ul className="text-xs text-voltaris-text/90">
                        {unitInfoData.batteryBMS.highlights.map((item, i) => (
                          <li key={i} className="mb-1 flex items-start">
                            <span className="text-voltaris-red mr-1">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Expanded Mechanical Section */}
        {isSectionExpanded('mechanical') && (
          <div className="mechanical-expanded mb-12 animate-fadeIn">
            <div className="flex justify-center mb-4">
              <div className="connector-line-sm"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Chassis Team */}
              <div className="flex flex-col">
                <div className="org-box sub-box bg-white/80 border border-voltaris-blue/20 shadow-sm">
                  <h4 className="font-bold text-voltaris-text text-lg mb-4 flex items-center justify-center">
                    <Wrench className="mr-2 text-voltaris-blue" size={18} /> Şasi ve Aktarma organları
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-3 px-1 sm:px-0">
                    {teamData.mechanicalTeam.chassisAndDrivetrain.map((member, i) => (
                      <EnhancedMemberCard 
                        key={`chassis-${i}`}
                        member={member}
                        color="green"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Unit Info Button */}
                <div className="flex justify-center">
                  <button 
                    className="mt-2 flex items-center justify-center text-xs text-voltaris-blue hover:text-voltaris-blue/80 bg-voltaris-blue/10 px-3 py-1 rounded shadow-sm transition-all hover:bg-voltaris-blue/20"
                    onClick={(e) => toggleUnitInfo('chassis', e)}
                  >
                    <Info size={12} className="mr-1" /> Birim Bilgisi
                  </button>
                </div>
                
                {/* Unit Info Box */}
                {isUnitInfoOpen('chassis') && (
                  <div className="unit-info-box mt-4 w-full bg-white/90 border border-voltaris-blue/20 rounded-lg p-4 animate-fadeIn shadow-sm">
                    <h5 className="font-bold text-voltaris-blue mb-2">{unitInfoData.chassis.title}</h5>
                    <p className="text-sm text-voltaris-text mb-3">{unitInfoData.chassis.description}</p>
                    <div className="bg-voltaris-blue/5 rounded-lg p-3">
                      <h6 className="text-xs text-voltaris-blue font-medium mb-2">Çalışma Alanları:</h6>
                      <ul className="text-xs text-voltaris-text/90">
                        {unitInfoData.chassis.highlights.map((item, i) => (
                          <li key={i} className="mb-1 flex items-start">
                            <span className="text-voltaris-blue mr-1">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Shell Team */}
              <div className="flex flex-col">
                <div className="org-box sub-box bg-white/80 border border-voltaris-blue/20 shadow-sm">
                  <h4 className="font-bold text-voltaris-text text-lg mb-4 flex items-center justify-center">
                    <Wrench className="mr-2 text-voltaris-blue" size={18} /> Kabuk ve Analiz
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-3 px-1 sm:px-0">
                    {teamData.mechanicalTeam.shellAndAnalysis.map((member, i) => (
                      <EnhancedMemberCard 
                        key={`shell-${i}`}
                        member={member}
                        color="green"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Unit Info Button */}
                <div className="flex justify-center">
                  <button 
                    className="mt-2 flex items-center justify-center text-xs text-voltaris-blue hover:text-voltaris-blue/80 bg-voltaris-blue/10 px-3 py-1 rounded shadow-sm transition-all hover:bg-voltaris-blue/20"
                    onClick={(e) => toggleUnitInfo('shell', e)}
                  >
                    <Info size={12} className="mr-1" /> Birim Bilgisi
                  </button>
                </div>
                
                {/* Unit Info Box */}
                {isUnitInfoOpen('shell') && (
                  <div className="unit-info-box mt-4 w-full bg-white/90 border border-voltaris-blue/20 rounded-lg p-4 animate-fadeIn shadow-sm">
                    <h5 className="font-bold text-voltaris-blue mb-2">{unitInfoData.shell.title}</h5>
                    <p className="text-sm text-voltaris-text mb-3">{unitInfoData.shell.description}</p>
                    <div className="bg-voltaris-blue/5 rounded-lg p-3">
                      <h6 className="text-xs text-voltaris-blue font-medium mb-2">Çalışma Alanları:</h6>
                      <ul className="text-xs text-voltaris-text/90">
                        {unitInfoData.shell.highlights.map((item, i) => (
                          <li key={i} className="mb-1 flex items-start">
                            <span className="text-voltaris-blue mr-1">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Powertrain Team */}
              <div className="flex flex-col">
                <div className="org-box sub-box bg-white/80 border border-voltaris-blue/20 shadow-sm">
                  <h4 className="font-bold text-voltaris-text text-lg mb-4 flex items-center justify-center">
                    <Wrench className="mr-2 text-voltaris-blue" size={18} /> Powertrain ve Araç Parçaları
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-3 px-1 sm:px-0">
                    {teamData.mechanicalTeam.powertrainAndParts.map((member, i) => (
                      <EnhancedMemberCard 
                        key={`powertrain-${i}`}
                        member={member}
                        color="green"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Unit Info Button */}
                <div className="flex justify-center">
                  <button 
                    className="mt-2 flex items-center justify-center text-xs text-green-400 hover:text-green-300 bg-green-900/10 px-3 py-1 rounded-full"
                    onClick={(e) => toggleUnitInfo('powertrain', e)}
                  >
                    <Info size={12} className="mr-1" /> Birim Bilgisi
                  </button>
                </div>
                
                {/* Unit Info Box */}
                {isUnitInfoOpen('powertrain') && (
                  <div className="unit-info-box mt-4 w-full bg-black/70 border border-green-500/20 rounded-lg p-4 animate-fadeIn">
                    <h5 className="font-bold text-green-400 mb-2">{unitInfoData.powertrain.title}</h5>
                    <p className="text-sm text-gray-300 mb-3">{unitInfoData.powertrain.description}</p>
                    <div className="bg-green-900/10 rounded-lg p-3">
                      <h6 className="text-xs text-green-400 font-medium mb-2">Çalışma Alanları:</h6>
                      <ul className="text-xs text-gray-400">
                        {unitInfoData.powertrain.highlights.map((item, i) => (
                          <li key={i} className="mb-1 flex items-start">
                            <span className="text-green-500 mr-1">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Expanded Sponsorship Section */}
        {isSectionExpanded('sponsorship') && (
          <div className="sponsorship-expanded mb-12 animate-fadeIn">
            <div className="flex justify-center mb-4">
              <div className="connector-line-sm"></div>
            </div>
            
            <div className="org-box sub-box bg-black/60 border border-blue-500/20">
              <h4 className="font-bold text-white text-lg mb-4 flex items-center justify-center">
                <Briefcase className="mr-2 text-blue-500" size={18} /> Sponsorluk ve Organizasyon
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-1 sm:px-0">
                {teamData.sponsorshipTeam.members.map((member, i) => (
                  <EnhancedMemberCard 
                    key={`sponsor-${i}`}
                    member={member}
                    color="blue"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* CSS for the organization chart */}
      <style>
        {`
        .org-chart {
          position: relative;
        }
        
        .org-box {
          background-color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(74, 144, 191, 0.2);
          border-radius: 0.5rem;
          padding: 1rem;
          min-width: 180px;
          box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .board-box {
          background: linear-gradient(to bottom, rgba(74, 144, 191, 0.05), rgba(255, 255, 255, 0.9));
          border-color: rgba(74, 144, 191, 0.3);
          padding: 1.25rem;
          box-shadow: 0 4px 8px rgba(74, 144, 191, 0.1);
        }
        
        .ceo-box {
          background: linear-gradient(to bottom, rgba(225, 77, 90, 0.05), rgba(255, 255, 255, 0.9));
          border-color: rgba(225, 77, 90, 0.3);
          padding: 1.25rem;
          box-shadow: 0 4px 8px rgba(225, 77, 90, 0.1);
        }
        
        .director-box {
          width: 100%;
          max-width: 220px;
          margin: 0 auto;
        }
        
        .director-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
        }
        
        .sub-box {
          padding: 1.5rem;
        }
        
        .connector-line {
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(74, 144, 191, 0.5), rgba(225, 77, 90, 0.5));
          position: relative;
        }
        
        .connector-line::before,
        .connector-line::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          background-color: rgba(74, 144, 191, 0.7);
          border-radius: 50%;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .connector-line::before {
          top: 0;
        }
        
        .connector-line::after {
          bottom: 0;
        }
        
        .connector-line-sm {
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0.5), rgba(30, 64, 175, 0.3));
          position: relative;
        }
        
        .connector-line-sm::after {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: rgba(59, 130, 246, 0.7);
          border-radius: 50%;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
        }
        
        .horizontal-connector {
          position: relative;
          width: 60%;
          height: 2px;
          background: linear-gradient(to right, rgba(239, 68, 68, 0.4), rgba(59, 130, 246, 0.4));
          margin-left: auto;
          margin-right: auto;
        }
        
        .horizontal-connector-wide {
          position: relative;
          width: 80%;
          height: 2px;
          background: linear-gradient(to right, rgba(74, 144, 191, 0.5), rgba(225, 77, 90, 0.5));
          margin-left: auto;
          margin-right: auto;
        }
        
        .horizontal-connector::before,
        .horizontal-connector::after,
        .horizontal-connector-wide::before,
        .horizontal-connector-wide::after {
          content: '';
          position: absolute;
          width: 2px;
          height: 15px;
          background-color: rgba(74, 144, 191, 0.7);
        }
        
        /* Add connector nodes at the junctions */
        .horizontal-connector-wide::before,
        .horizontal-connector-wide::after {
          border-radius: 0 0 0 0;
          box-shadow: 0 -4px 0 rgb(74, 144, 191, 0.5);
        }
        
        .horizontal-connector::before {
          left: 0;
          top: 0;
        }
        
        .horizontal-connector::after {
          right: 0;
          top: 0;
        }
        
        .horizontal-connector-wide::before {
          left: 0;
          top: 0;
        }
        
        .horizontal-connector-wide::after {
          right: 0;
          top: 0;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        @media (max-width: 640px) {
          .horizontal-connector,
          .horizontal-connector-wide {
            width: 95%;
          }
          
          .org-box {
            min-width: auto;
            width: 100%;
            max-width: 100%;
          }
          
          .director-box {
            max-width: 100%;
            width: 100%;
          }
        }
        `}
      </style>
    </div>
  );
};

export default ProfessionalOrgChart;