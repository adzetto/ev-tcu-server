import React, { useState, useEffect, useRef } from 'react';
import './ScrollIndicatorBar.css';

/**
 * ScrollIndicatorBar component
 * A minimal vertical bar indicator that appears in the bottom right corner
 * and fills/unfills based on the page scroll position.
 */
const ScrollIndicatorBar = () => {
  // Refs
  const indicatorRef = useRef(null);
  
  // State
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isOnDarkSection, setIsOnDarkSection] = useState(false);

  useEffect(() => {
    // Function to calculate scroll percentage and check section background
    const calculateScrollProgress = () => {
      // Calculate the total scrollable height of the page
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Get current scroll position
      const scrollPosition = window.scrollY;
      
      // Calculate percentage (0 to 100)
      const progress = Math.min(Math.round((scrollPosition / totalHeight) * 100), 100);
      setScrollProgress(progress);
      
      // Show indicator only after the user has scrolled a bit
      setIsVisible(scrollPosition > 100);
      
      // Check if we're on a dark section to adjust indicator appearance
      checkSectionBackground();
    };
    
    // Function to check if the current section has a dark background
    const checkSectionBackground = () => {
      // Get all sections
      const sections = document.querySelectorAll('section');
      let onDarkSection = false;
      
      // Get the indicator's vertical position
      const indicatorPosition = window.innerHeight - 20 - 80; // Adjusted for bar height
      
      // Check which section is currently at the indicator's level
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= indicatorPosition && rect.bottom >= indicatorPosition) {
          // Check if this section has a dark background
          const bgColor = window.getComputedStyle(section).backgroundColor;
          const sectionId = section.getAttribute('id');
          
          // Define which sections are considered "dark"
          const darkSections = ['technical', 'adas'];
          onDarkSection = darkSections.includes(sectionId) || 
                          bgColor.includes('rgb(17, 24, 39)') || 
                          bgColor.includes('rgb(31, 41, 55)');
        }
      });
      
      setIsOnDarkSection(onDarkSection);
    };

    // Calculate initial scroll position
    calculateScrollProgress();
    
    // Add scroll event listener
    window.addEventListener('scroll', calculateScrollProgress);
    
    // Clean up
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  // Function to scroll to top when indicator is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Add pulse animation effect
    if (indicatorRef.current) {
      indicatorRef.current.classList.add('pulse-animation');
      setTimeout(() => {
        if (indicatorRef.current) {
          indicatorRef.current.classList.remove('pulse-animation');
        }
      }, 700);
    }
  };

  return (
    <div 
      ref={indicatorRef}
      className={`scroll-indicator-bar ${isVisible ? 'visible' : 'hidden'} ${isOnDarkSection ? 'on-dark' : ''}`}
      onClick={scrollToTop}
      data-progress={`${scrollProgress}%`}
      role="progressbar"
      aria-valuenow={scrollProgress}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label={`${scrollProgress}% scrolled`}
    >
      <div className="scroll-indicator-bar__track">
        <div 
          className="scroll-indicator-bar__fill"
          style={{ height: `${scrollProgress}%` }}
        >
          <div className="scroll-indicator-bar__glow"></div>
        </div>
        
        {/* Small indicator dot that moves with scroll progress */}
        <div 
          className="scroll-indicator-bar__marker"
          style={{ bottom: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Accessible text for screen readers */}
      <span className="sr-only">
        Scroll to top of page
      </span>
    </div>
  );
};

export default ScrollIndicatorBar;
