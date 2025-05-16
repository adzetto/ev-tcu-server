/**
 * Helper function to format team data for the MinimalTechnicalOrgChart component
 * Use this if your existing teamData structure needs conversion
 */
export const formatTeamDataForOrgChart = (originalTeamData) => {
  // Create a structured object for the org chart
  const formattedData = {
    captain: {
      id: 'captain',
      name: '', // Will be filled from data
      photo: null, // Will be filled if available
      role: 'Takım Kaptanı'
    },
    departments: [],
    statistics: {
      totalMembers: 0,
      departments: 0,
      majors: 0
    }
  };

  // Set captain info
  if (originalTeamData.teamLead || originalTeamData.captain) {
    const captain = originalTeamData.teamLead || originalTeamData.captain;
    formattedData.captain.name = captain.name;
    if (captain.photo) {
      formattedData.captain.photo = captain.photo;
    }
  }

  // Process departments and members
  if (originalTeamData.departments) {
    formattedData.departments = originalTeamData.departments.map(dept => ({
      id: dept.id || `dept-${Math.random().toString(36).substr(2, 9)}`,
      name: dept.name,
      members: dept.members.map(member => ({
        id: member.id || `member-${Math.random().toString(36).substr(2, 9)}`,
        name: member.name,
        role: member.role || member.position,
        photo: member.photo || null,
        specialty: member.specialty || member.expertise || null
      }))
    }));
  }

  // Process team structure if departments aren't directly available
  if (!originalTeamData.departments && originalTeamData.teamStructure) {
    const deptMap = {};
    
    // Group members by department
    originalTeamData.teamStructure.forEach(member => {
      const deptName = member.department;
      
      if (!deptMap[deptName]) {
        deptMap[deptName] = {
          id: `dept-${Math.random().toString(36).substr(2, 9)}`,
          name: deptName,
          members: []
        };
      }
      
      deptMap[deptName].members.push({
        id: `member-${Math.random().toString(36).substr(2, 9)}`,
        name: member.name,
        role: member.role || member.position,
        photo: member.photo || null,
        specialty: member.specialty || member.expertise || null
      });
    });
    
    formattedData.departments = Object.values(deptMap);
  }

  // Calculate statistics
  formattedData.statistics.totalMembers = formattedData.departments.reduce(
    (total, dept) => total + dept.members.length, 
    0
  );
  formattedData.statistics.departments = formattedData.departments.length;
  
  // Count unique majors/fields
  const uniqueMajors = new Set();
  formattedData.departments.forEach(dept => {
    dept.members.forEach(member => {
      if (member.specialty) {
        uniqueMajors.add(member.specialty);
      }
    });
  });
  formattedData.statistics.majors = uniqueMajors.size;

  return formattedData;
};

export default formatTeamDataForOrgChart;