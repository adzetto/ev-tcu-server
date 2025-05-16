import React from 'react';

const AnnouncementPreviewAnimation = () => {
  return (
    <div className="announcement-animation-container absolute inset-0 overflow-hidden pointer-events-none">
      {/* Technical grid background */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 66, 84, 0.1)" strokeWidth="0.5" />
          </pattern>
          
          <linearGradient id="scan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 66, 84, 0)" />
            <stop offset="50%" stopColor="rgba(255, 66, 84, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 66, 84, 0)" />
          </linearGradient>
        </defs>
        
        {/* Grid background */}
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        
        {/* Animated scanning line */}
        <rect className="scan-line-svg" width="100%" height="2" fill="url(#scan-gradient)" />
        
        {/* Circuit nodes */}
        <circle className="circuit-node" cx="15%" cy="20%" r="2" fill="rgba(255, 66, 84, 0.5)" />
        <circle className="circuit-node" cx="85%" cy="30%" r="2" fill="rgba(255, 66, 84, 0.5)" />
        <circle className="circuit-node" cx="35%" cy="70%" r="2" fill="rgba(255, 66, 84, 0.5)" />
        <circle className="circuit-node" cx="75%" cy="80%" r="2" fill="rgba(255, 66, 84, 0.5)" />
        
        {/* Connection paths */}
        <path 
          className="connection-path" 
          d="M 15% 20% Q 50% 10%, 85% 30%" 
          stroke="rgba(255, 66, 84, 0.3)" 
          strokeWidth="1" 
          fill="none" 
        />
        <path 
          className="connection-path" 
          d="M 35% 70% Q 60% 90%, 75% 80%" 
          stroke="rgba(255, 66, 84, 0.3)" 
          strokeWidth="1" 
          fill="none" 
        />
        <path 
          className="connection-path" 
          d="M 85% 30% Q 70% 50%, 35% 70%" 
          stroke="rgba(255, 66, 84, 0.3)" 
          strokeWidth="1" 
          fill="none" 
        />
        
        {/* Data indicators */}
        <text x="15%" y="16%" fontSize="8" fill="rgba(255, 66, 84, 0.7)" className="data-label">01</text>
        <text x="85%" y="26%" fontSize="8" fill="rgba(255, 66, 84, 0.7)" className="data-label">02</text>
        <text x="35%" y="66%" fontSize="8" fill="rgba(255, 66, 84, 0.7)" className="data-label">03</text>
        <text x="75%" y="76%" fontSize="8" fill="rgba(255, 66, 84, 0.7)" className="data-label">04</text>
        
        {/* Alert indicator */}
        <g className="alert-indicator">
          <rect x="70%" y="10%" width="25" height="15" rx="2" fill="rgba(255, 66, 84, 0.1)" stroke="rgba(255, 66, 84, 0.3)" strokeWidth="0.5" />
          <text x="72%" y="13%" fontSize="8" fill="rgba(255, 66, 84, 0.7)">ALERT</text>
        </g>
      </svg>
    </div>
  );
};

export default AnnouncementPreviewAnimation;