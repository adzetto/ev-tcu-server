/**
 * SectionAnimator - Handles technical section transitions
 * A simpler, more direct approach to animate sections
 */

// Define animation types for each section
const sectionAnimations = {
  'home': 'anim-slide-down',
  'about': 'anim-slide-right',
  'technical': 'anim-slide-up',
  'vehicle': 'anim-slide-left',
  'adas': 'anim-slide-right',
  'sponsors': 'anim-slide-up',
  'contact': 'anim-slide-left'
};

// Add technical elements to a section
const addTechElements = (section) => {
  // Check if elements are already added
  if (section.querySelector('.tech-border')) return;
  
  // Add tech borders
  const borders = ['top', 'right', 'bottom', 'left'];
  borders.forEach(position => {
    const border = document.createElement('div');
    border.className = `tech-border tech-border-${position}`;
    section.appendChild(border);
  });
  
  // Add tech corners
  const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  corners.forEach(position => {
    const corner = document.createElement('div');
    corner.className = `tech-corner tech-corner-${position}`;
    section.appendChild(corner);
  });
  
  // Add scan line
  const scanLine = document.createElement('div');
  scanLine.className = 'tech-scan';
  section.appendChild(scanLine);
  
  // Add technical grid background
  const techGrid = document.createElement('div');
  techGrid.className = 'tech-grid';
  section.appendChild(techGrid);
};

// Initialize all sections with appropriate classes and elements
const initSections = () => {
  // Get all sections
  const sections = document.querySelectorAll('section');
  
  // Process each section
  sections.forEach(section => {
    // Add the base animation class
    section.classList.add('section-animated');
    
    // Add the specific animation type based on section id
    const animType = sectionAnimations[section.id] || 'anim-slide-up';
    section.classList.add(animType);
    
    // Add technical elements to each section
    addTechElements(section);
  });
  
  // Set up intersection observer to trigger animations as sections come into view
  setupIntersectionObserver();
  
  // Activate the first section immediately (with a slight delay for page load)
  setTimeout(() => {
    const firstSection = document.querySelector('section');
    if (firstSection) {
      firstSection.classList.add('active');
    }
  }, 500);
};

// Setup intersection observer to detect when sections enter viewport
const setupIntersectionObserver = () => {
  const options = {
    root: null, // Use viewport
    rootMargin: '-100px 0px', // Trigger slightly after entering viewport
    threshold: 0.1 // Trigger when 10% of the element is visible
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When section enters viewport
      if (entry.isIntersecting) {
        // Add active class to trigger animations
        entry.target.classList.add('active');
        
        // Unobserve to avoid re-triggering (one animation per page load)
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  // Observe all sections except the first one (which we activate immediately)
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    if (index > 0) { // Skip first section
      observer.observe(section);
    }
  });
};

// Function to manually trigger section animation (used when navigating via menu)
const animateSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // Reset animation by removing active class
    section.classList.remove('active');
    
    // Force a reflow to restart animation
    void section.offsetWidth;
    
    // Add active class to trigger animation
    setTimeout(() => {
      section.classList.add('active');
    }, 50);
  }
};

export {
  initSections,
  animateSection
};

export default {
  init: initSections,
  animate: animateSection
};
