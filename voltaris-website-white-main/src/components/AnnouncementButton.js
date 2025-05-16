import React, { useState, useEffect, useRef } from 'react';
import { BellRing, X, ChevronRight } from 'lucide-react';
import './AnnouncementButton.css';
import './AnnouncementHoverEffects.css';
import './AnnouncementPreviewAnimation.css';
import './AnnouncementDataGraph.css';
import './AnnouncementButtonEffects.css';
import AnnouncementPreviewAnimation from './AnnouncementPreviewAnimation';
import AnnouncementDataGraph from './AnnouncementDataGraph';
import AnnouncementButtonEffects from './AnnouncementButtonEffects';

const AnnouncementButton = ({ inTopBar = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstAppear, setIsFirstAppear] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const hoverTimeoutRef = useRef(null);
  
  // Handle navigation to announcements page
  const navigateToAnnouncements = () => {
    window.location.href = '/duyurular';
  };
  
  useEffect(() => {
    console.log('Hover state changed:', isHovered);
    console.log('Preview state:', showPreview);
  }, [isHovered, showPreview]);
  
  // Make sure preview is shown if hovered on initial render
  useEffect(() => {
    if (inTopBar) {
      // Set initial state to be visible
      setIsVisible(true);
      console.log('Component mounted, isVisible set to true');
    }
  }, [inTopBar]);
  
  // Show button after scrolling down a bit (for floating button only)
  useEffect(() => {
    if (inTopBar) {
      return; // Skip for topbar version
    }
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
        // After 5 seconds, turn off the initial appear effect
        if (isFirstAppear) {
          setTimeout(() => {
            setIsFirstAppear(false);
          }, 5000);
        }
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFirstAppear, inTopBar]);
  
  // Handle mouse enter and leave with delay
  const handleMouseEnter = () => {
    console.log('Mouse enter');
    setIsHovered(true);
    setShowPreview(true);
    
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };
  
  const handleMouseLeave = () => {
    console.log('Mouse leave');
    setIsHovered(false);
    
    // Set timeout to hide preview after 3.5 seconds
    hoverTimeoutRef.current = setTimeout(() => {
      setShowPreview(false);
      hoverTimeoutRef.current = null;
      console.log('Timeout completed, hiding preview');
    }, 3500); // 3.5 seconds delay before hiding
  };
  
  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);
  
  // Don't render if not visible
  if (!isVisible) return null;
  
  // For top bar version
  if (inTopBar) {
    return (
      <div 
        className="announcement-topbar-wrapper hidden md:block relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-hovered={isHovered ? "true" : "false"}
      >
        <button 
          onClick={navigateToAnnouncements}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="topbar-announcement-button flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-gradient-to-r from-voltaris-red/10 to-voltaris-red/20 text-voltaris-red border border-voltaris-red/30 hover:border-voltaris-red/60 transition-all duration-300 relative group overflow-hidden shadow-sm"
        >
          {/* Canvas particle effect */}
          <AnnouncementButtonEffects />
          
          <BellRing size={14} className="text-voltaris-red" />
          <span className="relative z-10">Duyurular</span>
          
          {/* Notification indicator */}
          <span className="relative flex h-2 w-2 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-voltaris-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-voltaris-red"></span>
          </span>
          
          {/* Background animation */}
          <span className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          
          {/* Subtle top highlight */}
          <span className="absolute top-0 left-0 right-0 h-px bg-white/50"></span>
          
          {/* Particle effects */}
          <div className="announcement-particles">
            <div className="announcement-particle"></div>
            <div className="announcement-particle"></div>
            <div className="announcement-particle"></div>
            <div className="announcement-particle"></div>
          </div>
        </button>
        
        {/* Dropdown preview with advanced effects */}
        <div 
          className={`announcement-dropdown ${showPreview ? 'block' : 'hidden'} absolute top-full right-0 mt-1 w-72 z-50 transition-all duration-700 ease-in-out ${showPreview && !isHovered ? 'announcement-fade-out' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`bg-white/95 backdrop-blur-sm rounded-md border border-voltaris-red/20 shadow-md p-3 transition-all duration-500 ease-in-out announcement-preview ${showPreview ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-2'} ${showPreview && !isHovered ? 'announcement-preview-delay-exit' : ''}`}>
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
                  <span className="w-1.5 h-1.5 bg-amber-500/60 rounded-full mr-1"></span>
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
      </div>
    );
  }
  
  // Original floating button version
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start">
      {/* Expanded announcement preview */}
      {isOpen && (
        <div className="mb-3 bg-white shadow-lg rounded-lg border border-gray-200 p-4 max-w-xs announcement-content announcement-panel relative">
          <button 
            className="absolute top-2 right-2 text-voltaris-neutral-400 hover:text-voltaris-neutral-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X size={16} />
          </button>
          
          <h4 className="text-sm font-bold text-voltaris-neutral-800 mb-2 pr-5">Yeni Altın Sponsorumuz</h4>
          <p className="text-xs text-voltaris-neutral-600 mb-3">
            Guran Nakliyat'ın Altın Sponsorumuz olduğunu duyurmaktan memnuniyet duyarız.
          </p>
          
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-voltaris-neutral-500">25 Nisan 2025</span>
            <button 
              onClick={navigateToAnnouncements}
              className="text-[10px] font-medium bg-voltaris-red/10 hover:bg-voltaris-red/20 text-voltaris-red px-2 py-1 rounded transition-colors detail-button"
            >
              Detaylar
            </button>
          </div>
        </div>
      )}
      
      {/* Main button */}
      <button
        onClick={() => isOpen ? navigateToAnnouncements() : setIsOpen(true)}
        className={`announcement-button flex items-center transition-all duration-300 rounded-full ${isFirstAppear ? 'initial-appear' : ''} ${isOpen 
            ? 'bg-voltaris-red text-white pl-3 pr-4 py-2 shadow-lg' 
            : 'bg-white text-voltaris-red hover:bg-voltaris-red/10 p-3 shadow-md hover:shadow-lg border border-gray-200'
        }`}
      >
        <BellRing size={isOpen ? 16 : 20} className={isOpen ? 'mr-2' : ''} />
        {isOpen && <span className="text-sm font-medium">Duyurular</span>}
        
        {/* Notification dot */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-white notification-dot"></span>
      </button>
    </div>
  );
};

export default AnnouncementButton;