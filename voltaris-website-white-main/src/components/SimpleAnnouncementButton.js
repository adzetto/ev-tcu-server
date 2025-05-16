import React, { useState, useRef, useEffect } from 'react';
import { BellRing, ChevronRight } from 'lucide-react';
import './SimpleAnnouncementButton.css';
import './AnnouncementHoverEffects.css';
import './AnnouncementPreviewAnimation.css';
import './AnnouncementDataGraph.css';
import AnnouncementPreviewAnimation from './AnnouncementPreviewAnimation';
import AnnouncementDataGraph from './AnnouncementDataGraph';

const SimpleAnnouncementButton = () => {
  // State for managing hover and preview visibility
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  
  // Ref for timeout to delay hiding
  const hideTimeoutRef = useRef(null);
  
  // Navigate to announcements page
  const navigateToAnnouncements = () => {
    window.location.href = '/duyurular';
  };
  
  // Handle mouse enter
  const handleMouseEnter = () => {
    console.log('Mouse entered button or preview');
    setIsHovered(true);
    setShowPreview(true);
    
    // Clear any existing timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };
  
  // Handle mouse leave
  const handleMouseLeave = () => {
    console.log('Mouse left button or preview');
    setIsHovered(false);
    
    // Set timeout to hide preview after 3.5 seconds
    hideTimeoutRef.current = setTimeout(() => {
      console.log('Hiding preview after delay');
      setShowPreview(false);
    }, 3500);
  };
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      className="simple-announcement-wrapper relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main button */}
      <button 
        onClick={navigateToAnnouncements}
        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-gradient-to-r from-voltaris-red/10 to-voltaris-red/20 text-voltaris-red border border-voltaris-red/30 hover:border-voltaris-red/60 transition-all duration-300 relative overflow-hidden shadow-sm"
      >
        <BellRing size={14} className="text-voltaris-red" />
        <span className="relative z-10">Duyurular</span>
        
        {/* Notification indicator */}
        <span className="relative flex h-2 w-2 z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-voltaris-red opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-voltaris-red"></span>
        </span>
      </button>
      
      {/* Preview dropdown */}
      {showPreview && (
        <div 
          className={`absolute top-full right-0 mt-1 w-72 z-50 ${!isHovered ? 'announcement-preview-delay-exit' : ''}`}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-md border border-voltaris-red/20 shadow-md p-3 announcement-preview">
            {/* SVG Animation */}
            <AnnouncementPreviewAnimation />
            
            {/* Circuit pattern background */}
            <div className="circuit-pattern-bg"></div>
            
            {/* Technical scan line */}
            <div className="scan-line"></div>
            
            {/* Technical data points */}
            <div className="data-point"></div>
            <div className="data-point"></div>
            <div className="data-point"></div>
            <div className="data-point"></div>
            
            {/* Connection lines */}
            <div className="connection-line"></div>
            <div className="connection-line"></div>
            <div className="connection-line"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="text-xs font-medium text-voltaris-red mb-1 flex items-center">
                <span className="w-1 h-1 bg-voltaris-red rounded-full mr-1"></span>
                Yeni Duyuru
              </div>
              <p className="text-xs text-voltaris-neutral-600 mb-3 relative">
                Guran Nakliyat'ın <span className="text-voltaris-red font-medium">Altın Sponsorumuz</span> olduğunu duyurmaktan memnuniyet duyarız. Destek ve işbirliği için teşekkür ederiz.
              </p>
              
              {/* More academic & technical UI elements */}
              <div className="bg-gray-50/80 p-2 rounded border border-gray-100 mb-2">
                <div className="text-[10px] font-mono text-voltaris-neutral-500 flex items-center">
                  <span className="w-1.5 h-1.5 bg-voltaris-red/60 rounded-full mr-1"></span>
                  SPONSORLUK.KATEGORI = ALTIN
                </div>
              </div>
              
              <div className="text-right text-[10px] text-voltaris-neutral-500 mt-1 flex items-center justify-between">
                <span className="font-mono">25.04.2025</span>
                <button 
                  onClick={navigateToAnnouncements}
                  className="text-voltaris-red text-[10px] flex items-center bg-voltaris-red/5 px-2 py-1 rounded hover:bg-voltaris-red/10 transition-colors"
                >
                  Detaylar <ChevronRight size={10} className="ml-0.5" />
                </button>
              </div>
              
              {/* Technical data visualization */}
              <AnnouncementDataGraph />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleAnnouncementButton;