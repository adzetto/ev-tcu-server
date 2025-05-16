import React, { useState } from 'react';
import { Cpu, Wrench, Briefcase, ChevronDown, ChevronRight, X, Mail, Linkedin, Info, Battery } from 'lucide-react';
import './ModernTechnicalOrgChart.css';

const ModernTechnicalOrgChart = ({ teamData }) => {
  // This is the updated professional version with cleaner styling
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
        className={`member-card ${isExpanded ? 'expanded' : ''} ${color}`}
        onClick={(e) => toggleMember(member.id, e)}
      >
        <div className={`member-photo-container ${isExpanded ? 'expanded' : ''}`}>
          <img 
            src={member.image || "/team/placeholder-1.jpg"}
            alt={member.name}
            className="member-photo"
          />
        </div>
        <div className="member-info">
          <p className="member-name">{member.name}</p>
          <p className="member-role">{member.role}</p>
          
          {isExpanded && (
            <div className="member-links">
              {member.email && (
                <a 
                  href={`mailto:${member.email}`}
                  className="member-link email"
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
                  className="member-link linkedin"
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
    <div className="modern-org-chart-container">
      {/* Technical grid background */}
      <div className="technical-grid-background"></div>
      
      <h3 className="org-chart-title">
        Organizasyon Yapımız
        <div className="title-underline"></div>
      </h3>
      
      {/* Main Organization Chart */}
      <div className="org-chart">
        {/* Board Level - Top Level with Advisor and Captain Side by Side */}
        <div className="leadership-level">
          {/* Academic Advisor */}
          <div className="leadership-card advisor" onClick={(e) => toggleMember(teamData.advisors[0]?.id, e)}>
            <div className={`leadership-photo-container ${isMemberExpanded(teamData.advisors[0]?.id) ? 'expanded' : ''}`}>
              <img 
                src={teamData.advisors[0]?.image || "/team/placeholder-2.jpg"}
                alt="Akademik Danışman"
                className="leadership-photo"
              />
            </div>
            <div className="leadership-info">
              <h4 className="leadership-title">Akademik Danışman</h4>
              <p className="leadership-name">{teamData.advisors[0]?.name || "Prof. Dr. Erdal Çetkin"}</p>
              
              {isMemberExpanded(teamData.advisors[0]?.id) && teamData.advisors[0] && (
                <div className="leadership-links">
                  {teamData.advisors[0].email && (
                    <a 
                      href={`mailto:${teamData.advisors[0].email}`}
                      className="leadership-link email"
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
                      className="leadership-link linkedin"
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
          
          {/* Team Captain */}
          <div className="leadership-card captain" onClick={(e) => toggleMember(teamData.teamLeadership[0]?.id, e)}>
            <div className={`leadership-photo-container ${isMemberExpanded(teamData.teamLeadership[0]?.id) ? 'expanded' : ''}`}>
              <img 
                src={teamData.teamLeadership[0]?.image || "/team/placeholder-1.jpg"}
                alt="Takım Kaptanı"
                className="leadership-photo"
              />
            </div>
            <div className="leadership-info">
              <h4 className="leadership-name">{teamData.teamLeadership[0]?.name || "Ömer Ünal"}</h4>
              <p className="leadership-title">Takım Kaptanı</p>
              
              {isMemberExpanded(teamData.teamLeadership[0]?.id) && teamData.teamLeadership[0] && (
                <div className="leadership-links">
                  {teamData.teamLeadership[0].email && (
                    <a 
                      href={`mailto:${teamData.teamLeadership[0].email}`}
                      className="leadership-link email"
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
                      className="leadership-link linkedin"
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
        
        {/* Connectors */}
        <div className="connector-container">
          <div className="vertical-connector"></div>
          <div className="horizontal-connector"></div>
        </div>
        
        {/* Unit Captains Level */}
        <div className="division-leaders">
          {/* Electronics Team Leader */}
          <div className="division-card electronics">
            <div 
              className={`division-leader ${isMemberExpanded(teamData.electronicsTeam.captain?.id) ? 'expanded' : ''}`}
              onClick={(e) => toggleMember(teamData.electronicsTeam.captain?.id, e)}
            >
              <div className="division-photo-container">
                <img 
                  src={teamData.electronicsTeam.captain?.image || "/team/placeholder-2.jpg"} 
                  alt={teamData.electronicsTeam.captain?.name}
                  className="division-photo"
                />
              </div>
              <div className="division-info">
                <h4 className="division-leader-name">{teamData.electronicsTeam.captain?.name}</h4>
                <p className="division-leader-title">Elektronik Birimi Lideri</p>
                
                {isMemberExpanded(teamData.electronicsTeam.captain?.id) && teamData.electronicsTeam.captain && (
                  <div className="division-links">
                    {teamData.electronicsTeam.captain.email && (
                      <a 
                        href={`mailto:${teamData.electronicsTeam.captain.email}`}
                        className="division-link email"
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
                        className="division-link linkedin"
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
              className="info-button electronics"
              onClick={(e) => toggleUnitInfo('electronics', e)}
            >
              <Info size={12} className="info-icon" /> Birim Bilgisi
            </button>
            
            {/* Unit Info Box */}
            {isUnitInfoOpen('electronics') && (
              <div className="info-box electronics">
                <h5 className="info-title">{unitInfoData.electronics.title}</h5>
                <p className="info-description">{unitInfoData.electronics.description}</p>
                <div className="info-highlights">
                  <h6 className="info-highlights-title">Çalışma Alanları:</h6>
                  <ul className="info-highlights-list">
                    {unitInfoData.electronics.highlights.map((item, i) => (
                      <li key={i} className="info-highlight-item">
                        <span className="info-highlight-bullet">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          {/* Mechanical Team Leader */}
          <div className="division-card mechanical">
            <div 
              className={`division-leader ${isMemberExpanded(teamData.mechanicalTeam.captain?.id) ? 'expanded' : ''}`}
              onClick={(e) => toggleMember(teamData.mechanicalTeam.captain?.id, e)}
            >
              <div className="division-photo-container">
                <img 
                  src={teamData.mechanicalTeam.captain?.image || "/team/placeholder-2.jpg"} 
                  alt={teamData.mechanicalTeam.captain?.name}
                  className="division-photo"
                />
              </div>
              <div className="division-info">
                <h4 className="division-leader-name">{teamData.mechanicalTeam.captain?.name}</h4>
                <p className="division-leader-title">Mekanik Birimi Lideri</p>
                
                {isMemberExpanded(teamData.mechanicalTeam.captain?.id) && teamData.mechanicalTeam.captain && (
                  <div className="division-links">
                    {teamData.mechanicalTeam.captain.email && (
                      <a 
                        href={`mailto:${teamData.mechanicalTeam.captain.email}`}
                        className="division-link email"
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
                        className="division-link linkedin"
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
              className="info-button mechanical"
              onClick={(e) => toggleUnitInfo('mechanical', e)}
            >
              <Info size={12} className="info-icon" /> Birim Bilgisi
            </button>
            
            {/* Unit Info Box */}
            {isUnitInfoOpen('mechanical') && (
              <div className="info-box mechanical">
                <h5 className="info-title">{unitInfoData.mechanical.title}</h5>
                <p className="info-description">{unitInfoData.mechanical.description}</p>
                <div className="info-highlights">
                  <h6 className="info-highlights-title">Çalışma Alanları:</h6>
                  <ul className="info-highlights-list">
                    {unitInfoData.mechanical.highlights.map((item, i) => (
                      <li key={i} className="info-highlight-item">
                        <span className="info-highlight-bullet">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          {/* Sponsorship Team Leader */}
          <div className="division-card sponsorship">
            <div 
              className={`division-leader ${isMemberExpanded(teamData.sponsorshipTeam.captain?.id) ? 'expanded' : ''}`}
              onClick={(e) => toggleMember(teamData.sponsorshipTeam.captain?.id, e)}
            >
              <div className="division-photo-container">
                <img 
                  src={teamData.sponsorshipTeam.captain?.image || "/team/placeholder-15.jpg"}
                  alt={teamData.sponsorshipTeam.captain?.name}
                  className="division-photo"
                />
              </div>
              <div className="division-info">
                <h4 className="division-leader-name">{teamData.sponsorshipTeam.captain?.name}</h4>
                <p className="division-leader-title">Sponsorluk Takım Kaptanı</p>
                
                {isMemberExpanded(teamData.sponsorshipTeam.captain?.id) && teamData.sponsorshipTeam.captain && (
                  <div className="division-links">
                    {teamData.sponsorshipTeam.captain.email && (
                      <a 
                        href={`mailto:${teamData.sponsorshipTeam.captain.email}`}
                        className="division-link email"
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
                        className="division-link linkedin"
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
              className="info-button sponsorship"
              onClick={(e) => toggleUnitInfo('sponsorship', e)}
            >
              <Info size={12} className="info-icon" /> Birim Bilgisi
            </button>
            
            {/* Unit Info Box */}
            {isUnitInfoOpen('sponsorship') && (
              <div className="info-box sponsorship">
                <h5 className="info-title">{unitInfoData.sponsorship.title}</h5>
                <p className="info-description">{unitInfoData.sponsorship.description}</p>
                <div className="info-highlights">
                  <h6 className="info-highlights-title">Çalışma Alanları:</h6>
                  <ul className="info-highlights-list">
                    {unitInfoData.sponsorship.highlights.map((item, i) => (
                      <li key={i} className="info-highlight-item">
                        <span className="info-highlight-bullet">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Department Tabs */}
        <div className="departments-tabs">
          <button 
            className={`department-tab ${isSectionExpanded('electronics') ? 'active' : ''}`}
            onClick={() => toggleSection('electronics')}
          >
            <Cpu className="tab-icon" size={18} />
            <span className="tab-text">Elektronik Birimi</span>
            {isSectionExpanded('electronics') ? (
              <ChevronDown size={14} className="tab-arrow" />
            ) : (
              <ChevronRight size={14} className="tab-arrow" />
            )}
          </button>
          
          <button 
            className={`department-tab ${isSectionExpanded('mechanical') ? 'active' : ''}`}
            onClick={() => toggleSection('mechanical')}
          >
            <Wrench className="tab-icon" size={18} />
            <span className="tab-text">Mekanik Birimi</span>
            {isSectionExpanded('mechanical') ? (
              <ChevronDown size={14} className="tab-arrow" />
            ) : (
              <ChevronRight size={14} className="tab-arrow" />
            )}
          </button>
          
          <button 
            className={`department-tab ${isSectionExpanded('sponsorship') ? 'active' : ''}`}
            onClick={() => toggleSection('sponsorship')}
          >
            <Briefcase className="tab-icon" size={18} />
            <span className="tab-text">Sponsorluk & Organizasyon</span>
            {isSectionExpanded('sponsorship') ? (
              <ChevronDown size={14} className="tab-arrow" />
            ) : (
              <ChevronRight size={14} className="tab-arrow" />
            )}
          </button>
        </div>
        
        {/* Expanded Electronics Section */}
        {isSectionExpanded('electronics') && (
          <div className="expanded-department electronics">
            <div className="department-connector"></div>
            
            <div className="department-subdepartments">
              {/* Vehicle Control System Team */}
              <div className="subdepartment-container">
                <div className="subdepartment">
                  <h4 className="subdepartment-title">
                    <Cpu className="subdepartment-icon" size={18} /> Araç Kontrol Sistemi
                  </h4>
                  
                  <div className="members-grid">
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
                <button 
                  className="info-button electronics"
                  onClick={(e) => toggleUnitInfo('vehicleControl', e)}
                >
                  <Info size={12} className="info-icon" /> Birim Bilgisi
                </button>
                
                {/* Unit Info Box */}
                {isUnitInfoOpen('vehicleControl') && (
                  <div className="info-box electronics-sub">
                    <h5 className="info-title">{unitInfoData.vehicleControl.title}</h5>
                    <p className="info-description">{unitInfoData.vehicleControl.description}</p>
                    <div className="info-highlights">
                      <h6 className="info-highlights-title">Çalışma Alanları:</h6>
                      <ul className="info-highlights-list">
                        {unitInfoData.vehicleControl.highlights.map((item, i) => (
                          <li key={i} className="info-highlight-item">
                            <span className="info-highlight-bullet">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Embedded Software Team */}
              <div className="subdepartment-container">
                <div className="subdepartment">
                  <h4 className="subdepartment-title">
                    <Cpu className="subdepartment-icon" size={18} /> Gömülü Yazılım
                  </h4>
                  
                  <div className="members-grid">
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
                <button 
                  className="info-button electronics"
                  onClick={(e) => toggleUnitInfo('embeddedSoftware', e)}
                >
                  <Info size={12} className="info-icon" /> Birim Bilgisi
                </button>
                
                {/* Unit Info Box */}
                {isUnitInfoOpen('embeddedSoftware') && (
                  <div className="info-box electronics-sub">
                    <h5 className="info-title">{unitInfoData.embeddedSoftware.title}</h5>
                    <p className="info-description">{unitInfoData.embeddedSoftware.description}</p>
                    <div className="info-highlights">
                      <h6 className="info-highlights-title">Çalışma Alanları:</h6>
                      <ul className="info-highlights-list">
                        {unitInfoData.embeddedSoftware.highlights.map((item, i) => (
                          <li key={i} className="info-highlight-item">
                            <span className="info-highlight-bullet">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Battery and BMS Team */}
              <div className="subdepartment-container">
                <div className="subdepartment">
                  <h4 className="subdepartment-title">
                    <Battery className="subdepartment-icon" size={18} /> Batarya ve BYS
                  </h4>
                  
                  <div className="members-grid">
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
                <button 
                  className="info-button electronics"
                  onClick={(e) => toggleUnitInfo('batteryBMS', e)}
                >
                  <Info size={12} className="info-icon" /> Birim Bilgisi
                </button>
                
                {/* Unit Info Box */}
                {isUnitInfoOpen('batteryBMS') && (
                  <div className="info-box electronics-sub">
                    <h5 className="info-title">{unitInfoData.batteryBMS.title}</h5>
                    <p className="info-description">{unitInfoData.batteryBMS.description}</p>
                    <div className="info-highlights">
                      <h6 className="info-highlights-title">Çalışma Alanları:</h6>
                      <ul className="info-highlights-list">
                        {unitInfoData.batteryBMS.highlights.map((item, i) => (
                          <li key={i} className="info-highlight-item">
                            <span className="info-highlight-bullet">•</span> {item}
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
          <div className="expanded-department mechanical">
            <div className="department-connector"></div>
            
            <div className="department-subdepartments">
              {/* Chassis Team */}
              <div className="subdepartment-container">
                <div className="subdepartment">
                  <h4 className="subdepartment-title">
                    <Wrench className="subdepartment-icon" size={18} /> Şasi ve Aktarma organları
                  </h4>
                  
                  <div className="members-grid">
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
                <button 
                  className="info-button mechanical"
                  onClick={(e) => toggleUnitInfo('chassis', e)}
                >
                  <Info size={12} className="info-icon" /> Birim Bilgisi
                </button>
                
                {/* Unit Info Box */}
                {isUnitInfoOpen('chassis') && (
                  <div className="info-box mechanical-sub">
                    <h5 className="info-title">{unitInfoData.chassis.title}</h5>
                    <p className="info-description">{unitInfoData.chassis.description}</p>
                    <div className="info-highlights">
                      <h6 className="info-highlights-title">Çalışma Alanları:</h6>
                      <ul className="info-highlights-list">
                        {unitInfoData.chassis.highlights.map((item, i) => (
                          <li key={i} className="info-highlight-item">
                            <span className="info-highlight-bullet">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Shell Team */}
              <div className="subdepartment-container">
                <div className="subdepartment">
                  <h4 className="subdepartment-title">
                    <Wrench className="subdepartment-icon" size={18} /> Kabuk ve Analiz
                  </h4>
                  
                  <div className="members-grid">
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
                <button 
                  className="info-button mechanical"
                  onClick={(e) => toggleUnitInfo('shell', e)}
                >
                  <Info size={12} className="info-icon" /> Birim Bilgisi
                </button>
                
                {/* Unit Info Box */}
                {isUnitInfoOpen('shell') && (
                  <div className="info-box mechanical-sub">
                    <h5 className="info-title">{unitInfoData.shell.title}</h5>
                    <p className="info-description">{unitInfoData.shell.description}</p>
                    <div className="info-highlights">
                      <h6 className="info-highlights-title">Çalışma Alanları:</h6>
                      <ul className="info-highlights-list">
                        {unitInfoData.shell.highlights.map((item, i) => (
                          <li key={i} className="info-highlight-item">
                            <span className="info-highlight-bullet">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Powertrain Team */}
              <div className="subdepartment-container">
                <div className="subdepartment">
                  <h4 className="subdepartment-title">
                    <Wrench className="subdepartment-icon" size={18} /> Powertrain ve Araç Parçaları
                  </h4>
                  
                  <div className="members-grid">
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
                <button 
                  className="info-button mechanical"
                  onClick={(e) => toggleUnitInfo('powertrain', e)}
                >
                  <Info size={12} className="info-icon" /> Birim Bilgisi
                </button>
                
                {/* Unit Info Box */}
                {isUnitInfoOpen('powertrain') && (
                  <div className="info-box mechanical-sub">
                    <h5 className="info-title">{unitInfoData.powertrain.title}</h5>
                    <p className="info-description">{unitInfoData.powertrain.description}</p>
                    <div className="info-highlights">
                      <h6 className="info-highlights-title">Çalışma Alanları:</h6>
                      <ul className="info-highlights-list">
                        {unitInfoData.powertrain.highlights.map((item, i) => (
                          <li key={i} className="info-highlight-item">
                            <span className="info-highlight-bullet">•</span> {item}
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
          <div className="expanded-department sponsorship">
            <div className="department-connector"></div>
            
            <div className="subdepartment-container sponsorship-container">
              <div className="subdepartment sponsorship-subdepartment">
                <h4 className="subdepartment-title">
                  <Briefcase className="subdepartment-icon" size={18} /> Sponsorluk ve Organizasyon
                </h4>
                
                <div className="members-grid sponsorship-grid">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTechnicalOrgChart;