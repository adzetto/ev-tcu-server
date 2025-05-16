import React, { useState, useEffect, useRef } from 'react';
import './ScrollIndicator.css';

/**
 * ScrollIndicator component
 * A minimal circular scroll progress indicator that appears in the bottom right corner
 * and fills/unfills based on the page scroll position.
 */
const ScrollIndicator = () => {
  // Refs
  const indicatorRef = useRef(null);
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
      const indicatorPosition = window.innerHeight - 20 - 44;
      
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

  // CSS variables for the component
  const indicatorSize = 44; // Size in pixels
  const borderWidth = 2;
  const indicatorColor = '#FF4254'; // Voltaris red
  const backgroundColor = 'rgba(255, 255, 255, 0.95)';
  
  // Create stroke dash properties for circle
  const radius = (indicatorSize - borderWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

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
      className={`scroll-indicator ${isVisible ? 'visible' : 'hidden'} ${isOnDarkSection ? 'on-dark' : ''}`}
      onClick={scrollToTop}
      style={{
        // Set CSS variables programmatically
        '--indicator-size': `${indicatorSize}px`,
        '--border-width': `${borderWidth}px`,
        '--indicator-color': indicatorColor,
        '--background-color': backgroundColor
      }}
      aria-label={`${scrollProgress}% scrolled`}
      role="progressbar"
      aria-valuenow={scrollProgress}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {/* SVG circle indicator */}
      <svg
        width={indicatorSize}
        height={indicatorSize}
        viewBox={`0 0 ${indicatorSize} ${indicatorSize}`}
        style={{
          position: 'absolute',
          transform: 'rotate(-90deg)' // Start from top
        }}
      >
        {/* Background circle */}
        <circle
          cx={indicatorSize / 2}
          cy={indicatorSize / 2}
          r={radius}
          fill="none"
          stroke="#EEEEEE"
          strokeWidth={borderWidth}
        />
        
        {/* Progress circle */}
        <circle
          cx={indicatorSize / 2}
          cy={indicatorSize / 2}
          r={radius}
          fill="none"
          stroke={indicatorColor}
          strokeWidth={borderWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Percentage text */}
      {/* Percentage text with subtle animation */}
      <span 
        className="scroll-indicator__text"
        style={{
          // Add subtle transform scale animation based on scroll progress
          transform: `scale(${1 + scrollProgress/500})`, // Subtle scale effect from 1 to 1.2
          transition: 'transform 0.3s'
        }}
      >
        {scrollProgress}%
      </span>
      
      {/* Accessible text for screen readers */}
      <span className="sr-only">
        Scroll to top of page
      </span>
    </div>
  );
};

export default ScrollIndicator;
