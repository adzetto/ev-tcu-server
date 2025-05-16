import React, { useState, useEffect } from 'react';
import { ExternalLink } from "lucide-react";

const EnhancedSponsorsBar = ({ sponsors }) => {
  // State to track screen size
  const [isMobile, setIsMobile] = useState(false);
  
  // Effect to handle responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Improved tier configuration with more distinctive colors
  const getTierConfig = (tier) => {
    const config = {
      platinum: {
        height: isMobile ? "28px" : "34px", // Smaller on mobile
        color: "#E5D085", // More elegant platinum color
        barWidth: "90%",
        barClass: "tier-platinum"
      },
      gold: {
        height: isMobile ? "26px" : "30px", // Smaller on mobile
        color: "#FFC233", // More vibrant gold color
        barWidth: "80%",
        barClass: "tier-gold" 
      },
      silver: {
        height: isMobile ? "24px" : "28px", // Smaller on mobile
        color: "#C0C0C0", // Silver color
        barWidth: "70%",
        barClass: "tier-silver"
      },
      bronze: {
        height: isMobile ? "22px" : "26px", // Smaller on mobile
        color: "#CD7F32", // Bronze color
        barWidth: "60%",
        barClass: "tier-bronze"
      },
      default: {
        height: isMobile ? "20px" : "24px", // Smaller on mobile
        color: "#3B82F6", // Default blue color
        barWidth: "50%",
        barClass: "tier-default"
      }
    };
    
    return config[tier] || config.default;
  };

  return (
    <div className="relative w-full bg-gray-50 border-t border-voltaris-neutral-200 pt-2 pb-4 md:pt-3 md:pb-6 sponsor-bar rounded-t-lg">
      {/* Header section */}
      <div className="flex items-center justify-between px-2 sm:px-4 md:px-6 mb-2 md:mb-3">
        <div className="flex items-center">
          <div className="text-voltaris-neutral-600 text-[10px] sm:text-xs uppercase tracking-wide font-medium">
            SPONSORLAR
          </div>
          <div className="ml-2 h-px w-8 bg-gradient-to-r from-voltaris-neutral-400/40 to-transparent"></div>
        </div>
        
        <div className="flex items-center">
          <span className="px-1.5 py-0.5 border border-voltaris-neutral-200 rounded bg-gray-50 hover:border-voltaris-neutral-400 transition-colors">
            <a 
              href="#sponsors" 
              className="text-voltaris-neutral-600 hover:text-voltaris-neutral-800 flex items-center text-[8px] sm:text-[9px] uppercase" 
              title="Tüm Sponsorları Görüntüle"
            >
              DETAYLAR <ExternalLink size={8} className="ml-1" />
            </a>
          </span>
        </div>
      </div>
      
      {/* Sponsors continuous-scrolling marquee */}
      <div className="relative overflow-hidden py-1 sm:py-2 px-2 sm:px-6 md:px-8">
        {/* Create two copies of sponsors for seamless looping */}
        <div className="flex sponsors-track">
          {/* First copy of sponsors */}
          {sponsors.map((sponsor) => renderSponsorItem(sponsor, getTierConfig))}
          
          {/* Second copy of sponsors for seamless loop */}
          {sponsors.map((sponsor) => renderSponsorItem(sponsor, getTierConfig))}
          
          {/* Third copy of sponsors for wider screens */}
          {sponsors.map((sponsor) => renderSponsorItem(sponsor, getTierConfig))}
        </div>
      </div>
      
      {/* CSS for animations and effects */}
      <style>{`
        .sponsor-bar {
          margin-bottom: 0;
          box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.05);
        }
        
        .sponsors-track {
          display: flex;
          animation: scrollX 30s linear infinite;
          /* Gap between sponsors */
          gap: ${isMobile ? '0.5rem' : '1.5rem'};
        }
        
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${sponsors.length * (isMobile ? 90 : 130)}px); }
        }
        
        .sponsors-track:hover {
          animation-play-state: paused;
        }
        
        .tier-platinum {
          box-shadow: 0 0 5px #E5D085;
          animation: leftToRightFade 8s infinite;
        }
        
        .tier-gold {
          box-shadow: 0 0 5px #FFC233;
          animation: leftToRightFade 8s infinite;
        }
        
        .tier-silver {
          box-shadow: 0 0 5px #C0C0C0;
          animation: leftToRightFade 8s infinite;
        }
        
        .tier-bronze {
          box-shadow: 0 0 5px #CD7F32;
          animation: leftToRightFade 8s infinite;
        }
        
        .tier-default {
          box-shadow: 0 0 5px #3B82F6;
          animation: leftToRightFade 8s infinite;
        }
        
        @keyframes leftToRightFade {
          0% { opacity: 0; transform: translateX(-50%) scaleX(0); transform-origin: left; }
          20% { opacity: 1; transform: translateX(-50%) scaleX(1); transform-origin: left; }
          80% { opacity: 1; transform: translateX(-50%) scaleX(1); transform-origin: right; }
          100% { opacity: 0; transform: translateX(-50%) scaleX(0); transform-origin: right; }
        }
        
        /* Improve touch targets and sizing on mobile */
        @media (max-width: 768px) {
          .sponsor-container {
            padding: 0.25rem;
          }
          
          .sponsors-track {
            animation-duration: 50s; /* Slower on mobile */
          }
        }
        
        /* Faster on larger screens */
        @media (min-width: 1280px) {
          .sponsors-track {
            animation-duration: 25s;
          }
        }
      `}</style>
    </div>
  );
};

// Helper function to render a sponsor item
function renderSponsorItem(sponsor, getTierConfigFn) {
  const tierConfig = getTierConfigFn(sponsor.tier);
  
  // Determine if this is the Pilci or Guran Nakliyat logo based on the logo source
  const isPilciLogo = sponsor.logo.toLowerCase().includes('pilci');
  const isGuranLogo = sponsor.logo.toLowerCase().includes('guran_nakliyat');
  
  // Apply special styling for Pilci logo and Guran Nakliyat - larger height
  let logoHeight = tierConfig.height;
  if (isPilciLogo) {
    logoHeight = `${parseInt(tierConfig.height) + 4}px`; // Add 4px to the default height
  } else if (isGuranLogo) {
    logoHeight = `${parseInt(tierConfig.height) + 15}px`; // Make Guran logo much taller
  }
  
  // Apply special styling for Guran Nakliyat logo - wider width
  let logoWidth = "90px"; // Default max width
  if (isGuranLogo) {
    logoWidth = "180px"; // Make Guran logo very wide
  }
  
  return (
    <div key={`${sponsor.id}-${Math.random()}`} className={`sponsor-container flex-shrink-0 ${isGuranLogo ? 'mx-5 sm:mx-6 px-2' : ''}`}>
      <a 
        href={sponsor.website} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex items-center justify-center h-8 sm:h-10 md:h-12">
          <img 
            src={sponsor.logo} 
            alt={sponsor.name}
            className="sponsor-logo transition-all duration-300 hover:scale-110 max-w-full object-contain"
            style={{
              height: logoHeight,
              maxHeight: logoHeight,
              maxWidth: logoWidth, // Custom width depending on logo
              width: "auto" // Maintain aspect ratio
            }}
          />
        </div>
        
        {/* Fixed tier bar indicator with left-to-right fade effect */}
        <div className="tier-bar-container relative h-1.5 mt-1 sm:mt-2">
          <div 
            className={`absolute left-1/2 transform -translate-x-1/2 h-1 ${tierConfig.barClass}`}
            style={{ 
              width: tierConfig.barWidth,
              background: `linear-gradient(to right, transparent, ${tierConfig.color} 40%, ${tierConfig.color} 60%, transparent)`
            }}
          ></div>
        </div>
      </a>
    </div>
  );
}

export default EnhancedSponsorsBar;