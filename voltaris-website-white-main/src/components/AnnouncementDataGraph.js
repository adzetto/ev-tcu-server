import React from 'react';

const AnnouncementDataGraph = () => {
  // Generate random data points for the graph
  const generatePoints = () => {
    // We'll create a small sine wave with some variation to look like a graph
    const points = [];
    for (let i = 0; i < 20; i++) {
      const x = i * 5;
      // Base sine wave with some random noise
      const y = 10 + 5 * Math.sin(i / 3) + Math.random() * 2;
      points.push({ x, y });
    }
    return points;
  };

  const dataPoints = generatePoints();
  
  // Convert points to SVG path
  const createPathData = (points) => {
    if (points.length === 0) return '';
    
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      path += ` L ${points[i].x} ${points[i].y}`;
    }
    return path;
  };

  return (
    <div className="announcement-data-graph mt-2 opacity-60 bg-gray-50/50 border border-gray-100 rounded-sm p-1">
      <svg width="100%" height="30" viewBox="0 0 100 20" preserveAspectRatio="none">
        {/* Grid lines */}
        <line x1="0" y1="5" x2="100" y2="5" stroke="rgba(200, 200, 200, 0.5)" strokeWidth="0.2" strokeDasharray="1,1" />
        <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(200, 200, 200, 0.5)" strokeWidth="0.2" strokeDasharray="1,1" />
        <line x1="0" y1="15" x2="100" y2="15" stroke="rgba(200, 200, 200, 0.5)" strokeWidth="0.2" strokeDasharray="1,1" />
        
        {/* Y-axis indicators */}
        <text x="2" y="5" fontSize="2" fill="rgba(100, 100, 100, 0.7)">20</text>
        <text x="2" y="10" fontSize="2" fill="rgba(100, 100, 100, 0.7)">10</text>
        <text x="2" y="15" fontSize="2" fill="rgba(100, 100, 100, 0.7)">0</text>
        
        {/* Data line */}
        <path
          d={createPathData(dataPoints)}
          fill="none"
          stroke="rgba(255, 66, 84, 0.8)"
          strokeWidth="0.5"
          className="graph-line"
        />
        
        {/* Gradient area under the line */}
        <defs>
          <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 66, 84, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 66, 84, 0)" />
          </linearGradient>
        </defs>
        
        <path
          d={`${createPathData(dataPoints)} L ${dataPoints[dataPoints.length - 1].x} 20 L ${dataPoints[0].x} 20 Z`}
          fill="url(#graphGradient)"
          className="graph-area"
        />
        
        {/* Animated data point indicator */}
        <circle 
          cx="0" 
          cy="0" 
          r="0.7" 
          fill="#FF4254" 
          className="graph-indicator"
        />
        
        {/* Current value indicator */}
        <g className="value-indicator">
          <rect x="80" y="2" width="18" height="5" rx="1" fill="rgba(255, 255, 255, 0.8)" stroke="rgba(255, 66, 84, 0.5)" strokeWidth="0.3" />
          <text x="89" y="5.5" fontSize="3" fill="rgba(255, 66, 84, 0.9)" textAnchor="middle">+12.4%</text>
        </g>
      </svg>
      
      <div className="text-[8px] text-center text-gray-400 mt-0.5">Sponsorluk Verileri - 2025</div>
    </div>
  );
};

export default AnnouncementDataGraph;