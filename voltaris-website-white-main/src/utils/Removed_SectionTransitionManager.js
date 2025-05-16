/**
 * SectionTransitionManager
 * 
 * Manages technical corporate style transitions between sections.
 * Creates overlay elements with animated technical elements for a professional corporate tech feel.
 */

// Utility to create technical decorative elements
const createTechElements = (section) => {
  // Create the main overlay container
  const overlay = document.createElement('div');
  overlay.className = 'section-tech-overlay';
  
  // Add corner brackets
  const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  corners.forEach((position, index) => {
    const corner = document.createElement('div');
    corner.className = `corner-bracket ${position}`;
    corner.style.setProperty('--delay', `${0.1 + (index * 0.1)}s`);
    overlay.appendChild(corner);
  });
  
  // Add horizontal decorator lines (top and bottom)
  const hLineTop = document.createElement('div');
  hLineTop.className = 'decorator-line-h';
  hLineTop.style.top = '25px';
  hLineTop.style.left = '0';
  hLineTop.style.setProperty('--delay', '0.3s');
  overlay.appendChild(hLineTop);
  
  const hLineBottom = document.createElement('div');
  hLineBottom.className = 'decorator-line-h';
  hLineBottom.style.bottom = '25px';
  hLineBottom.style.left = '0';
  hLineBottom.style.setProperty('--delay', '0.4s');
  overlay.appendChild(hLineBottom);
  
  // Add vertical decorator lines (left and right)
  const vLineLeft = document.createElement('div');
  vLineLeft.className = 'decorator-line-v';
  vLineLeft.style.left = '25px';
  vLineLeft.style.top = '0';
  vLineLeft.style.setProperty('--delay', '0.5s');
  overlay.appendChild(vLineLeft);
  
  const vLineRight = document.createElement('div');
  vLineRight.className = 'decorator-line-v';
  vLineRight.style.right = '25px';
  vLineRight.style.top = '0';
  vLineRight.style.setProperty('--delay', '0.6s');
  overlay.appendChild(vLineRight);
  
  // Add technical data displays
  const dataPositions = [
    { top: '35px', left: '35px', text: '[ INIT ]', delay: '0.7s' },
    { top: '35px', right: '35px', text: `SEC_ID: ${section.id.toUpperCase()}`, delay: '0.8s' },
    { bottom: '35px', left: '35px', text: 'SYS_LOAD: 100%', delay: '0.9s' },
    { bottom: '35px', right: '35px', text: 'SCAN: COMPLETE', delay: '1s' }
  ];
  
  dataPositions.forEach(pos => {
    const dataDisplay = document.createElement('div');
    dataDisplay.className = 'tech-data-display';
    dataDisplay.textContent = pos.text;
    dataDisplay.style.setProperty('--delay', pos.delay);
    
    // Set positions
    if (pos.top) dataDisplay.style.top = pos.top;
    if (pos.bottom) dataDisplay.style.bottom = pos.bottom;
    if (pos.left) dataDisplay.style.left = pos.left;
    if (pos.right) dataDisplay.style.right = pos.right;
    
    overlay.appendChild(dataDisplay);
  });
  
  // Add scan line
  const scanLine = document.createElement('div');
  scanLine.className = 'scan-line';
  overlay.appendChild(scanLine);
  
  return overlay;
};

// Utility to trigger animations for a section
const animateSection = (section, delay = 0) => {
  // Make sure the section exists
  if (!section) return;
  
  // Get the transition type based on section ID or use a default
  const transitionTypes = {
    'home': 'section-transition-reveal',
    'about': 'section-transition-slide-right',
    'technical': 'section-transition-slide-up',
    'vehicle': 'section-transition-slide-left',
    'adas': 'section-transition-slide-right',
    'sponsors': 'section-transition-slide-up',
    'contact': 'section-transition-slide-left'
  };
  
  const transitionClass = transitionTypes[section.id] || 'section-transition-slide-up';
  
  // Prepare section with technical elements if not already done
  if (!section.querySelector('.section-tech-overlay')) {
    const techOverlay = createTechElements(section);
    section.appendChild(techOverlay);
  }
  
  // Get section elements
  const techOverlay = section.querySelector('.section-tech-overlay');
  const cornerBrackets = section.querySelectorAll('.corner-bracket');
  const decoratorLines = section.querySelectorAll('.decorator-line-h, .decorator-line-v');
  const techDataDisplays = section.querySelectorAll('.tech-data-display');
  const scanLine = section.querySelector('.scan-line');
  
  // Setup animation timeout
  setTimeout(() => {
    // Clear any existing classes
    section.classList.remove('section-transition-ready');
    section.classList.remove('section-transition-slide-up');
    section.classList.remove('section-transition-slide-right');
    section.classList.remove('section-transition-slide-left');
    section.classList.remove('section-transition-reveal');
    
    // Add the transition class
    section.classList.add(transitionClass);
    
    // Show the tech overlay
    if (techOverlay) {
      techOverlay.style.opacity = '1';
    }
    
    // Animate corner brackets
    cornerBrackets.forEach(bracket => {
      bracket.classList.add('animate');
    });
    
    // Animate decorator lines
    decoratorLines.forEach(line => {
      line.classList.add('animate');
    });
    
    // Animate data displays
    techDataDisplays.forEach(display => {
      display.classList.add('animate');
    });
    
    // Animate scan line
    if (scanLine) {
      scanLine.classList.add('animate');
    }
    
    // Add background scan effect
    section.classList.add('section-scan');
  }, delay);
};

// Initialize all sections for transition
const initSectionTransitions = () => {
  // Get all sections
  const sections = document.querySelectorAll('section');
  
  // Add initial state to all sections
  sections.forEach((section) => {
    section.classList.add('section-transition-ready');
  });
  
  // Animate the first visible section (typically the first one on page load)
  const firstSection = document.querySelector('section');
  if (firstSection) {
    animateSection(firstSection, 500); // Slight delay on first load
  }
  
  // Setup Intersection Observer to trigger animations when sections come into view
  const observerOptions = {
    root: null, // Use viewport as root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of section is visible
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Only animate sections when they're entering the viewport
      if (entry.isIntersecting) {
        // Don't animate the first section again (we already did that)
        if (entry.target === firstSection) return;
        
        animateSection(entry.target);
        
        // Unobserve after animating to prevent re-triggering
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all sections (skip the first one as we already animated it)
  sections.forEach((section, index) => {
    if (index > 0) {
      sectionObserver.observe(section);
    }
  });
};

// Function to animate a specific section (used when navigating directly to a section)
const triggerSectionTransition = (sectionId) => {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    // Reset the section first
    const techOverlay = targetSection.querySelector('.section-tech-overlay');
    if (techOverlay) {
      techOverlay.style.opacity = '0';
      
      // Reset all animated elements
      techOverlay.querySelectorAll('.animate').forEach(el => {
        el.classList.remove('animate');
      });
    }
    
    // Make sure it has the ready state
    targetSection.classList.add('section-transition-ready');
    targetSection.classList.remove('section-transition-slide-up');
    targetSection.classList.remove('section-transition-slide-right');
    targetSection.classList.remove('section-transition-slide-left');
    targetSection.classList.remove('section-transition-reveal');
    targetSection.classList.remove('section-scan');
    
    // Trigger animation after a short delay
    setTimeout(() => {
      animateSection(targetSection);
    }, 100);
  }
};

// Exposed functions
export {
  initSectionTransitions,
  triggerSectionTransition,
  animateSection
};

export default {
  init: initSectionTransitions,
  triggerTransition: triggerSectionTransition,
  animateSection
};
