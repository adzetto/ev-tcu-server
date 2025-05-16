import React, { useState } from 'react';
import './MinimalTechnicalOrgChart.css';

const MinimalTechnicalOrgChart = ({ teamData }) => {
  const [expandedDepartment, setExpandedDepartment] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  const toggleDepartment = (deptId) => {
    if (expandedDepartment === deptId) {
      setExpandedDepartment(null);
    } else {
      setExpandedDepartment(deptId);
    }
  };

  // Convert department array to department map for easier access
  const departmentMap = teamData.departments.reduce((acc, dept) => {
    acc[dept.id] = dept;
    return acc;
  }, {});

  return (
    <div className="minimal-org-chart-container">
      {/* Technical background grid */}
      <div className="technical-grid-background"></div>
      
      {/* Organization title */}
      <div className="org-chart-header">
        <div className="org-chart-title-container">
          <h3 className="org-chart-title">Organizasyon Yapısı</h3>
          <div className="org-title-underline"></div>
        </div>
      </div>
      
      {/* Team leadership */}
      <div className="leadership-section">
        <div className="leadership-card">
          <div className="leader-photo-container">
            {teamData.captain.photo ? (
              <img src={teamData.captain.photo} alt={teamData.captain.name} className="leader-photo" />
            ) : (
              <div className="leader-photo-placeholder">
                <span>{teamData.captain.name.charAt(0)}</span>
              </div>
            )}
          </div>
          <div className="leader-info">
            <h4 className="leader-name">{teamData.captain.name}</h4>
            <p className="leader-role">Takım Kaptanı</p>
          </div>
        </div>

        {/* Connecting lines */}
        <div className="leadership-connector">
          <div className="vertical-line"></div>
          <div className="horizontal-line"></div>
        </div>
      </div>

      {/* Departments */}
      <div className="departments-container">
        {teamData.departments.map((department) => (
          <div 
            key={department.id}
            className={`department-card ${expandedDepartment === department.id ? 'expanded' : ''}`}
            onClick={() => toggleDepartment(department.id)}
          >
            <div className="department-header">
              <div className="department-title-container">
                <h4 className="department-title">{department.name}</h4>
                <div className="department-subtitle">{department.members.length} üye</div>
              </div>
              <button className="expand-button">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {expandedDepartment === department.id ? (
                    <path d="M18 15l-6-6-6 6" />
                  ) : (
                    <path d="M6 9l6 6 6-6" />
                  )}
                </svg>
              </button>
            </div>
            
            {expandedDepartment === department.id && (
              <div className="department-members">
                <div className="members-grid">
                  {department.members.map((member) => (
                    <div 
                      key={member.id} 
                      className="member-card"
                      onMouseEnter={() => setHoveredMember(member.id)}
                      onMouseLeave={() => setHoveredMember(null)}
                    >
                      <div className="member-photo-container">
                        {member.photo ? (
                          <img src={member.photo} alt={member.name} className="member-photo" />
                        ) : (
                          <div className="member-photo-placeholder">
                            <span>{member.name.charAt(0)}</span>
                          </div>
                        )}
                      </div>
                      <div className="member-info">
                        <h5 className="member-name">{member.name}</h5>
                        <p className="member-role">{member.role}</p>
                        {hoveredMember === member.id && member.specialty && (
                          <div className="member-specialty">
                            <span className="specialty-label">Uzmanlık:</span> {member.specialty}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Department connectors */}
      <div className="department-connectors">
        {teamData.departments.map((department, index) => (
          <div key={`connector-${department.id}`} className="department-connector">
            <div className="connector-line" style={{ left: `${(100 / (teamData.departments.length + 1)) * (index + 1)}%` }}></div>
          </div>
        ))}
      </div>
      
      {/* Statistics section */}
      <div className="team-statistics">
        <div className="stat-card">
          <div className="stat-value">{teamData.statistics.totalMembers}</div>
          <div className="stat-label">Toplam Üye</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{teamData.statistics.departments}</div>
          <div className="stat-label">Departman</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{teamData.statistics.majors}</div>
          <div className="stat-label">Farklı Bölüm</div>
        </div>
      </div>
    </div>
  );
};

export default MinimalTechnicalOrgChart;