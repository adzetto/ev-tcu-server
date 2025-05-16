/**
 * Advanced Menu Visibility Controller
 * This utility provides enhanced control over when the mobile menu button should be visible
 * based on current section, header size, and screen dimensions.
 */

/**
 * Updates the visibility of the mobile menu button based on various conditions
 * @param {string} activeSection - The currently active section ID
 * @param {boolean} scrolled - Whether the page has been scrolled
 * @param {boolean} forceUpdate - Whether to force an update regardless of throttling
 */
export const updateMenuButtonVisibility = (activeSection, scrolled, forceUpdate = false) => {
  // Throttle updates for better performance
  if (!forceUpdate && window.menuVisibilityThrottled) return;
  
  // Throttle updates to once every 100ms for better performance
  window.menuVisibilityThrottled = true;
  setTimeout(() => {
    window.menuVisibilityThrottled = false;
  }, 100);
  
  // Get DOM elements
  const menuButton = document.querySelector('.mobile-menu-button');
  const header = document.querySelector('header');
  
  if (!menuButton || !header) return;
  
  // Determine visibility based on multiple factors
  const isHomePage = activeSection === 'home';
  const isMobile = window.innerWidth < 768;
  const isShortScreen = window.innerHeight < 600;
  const isNarrowHeader = header.offsetHeight < 80;
  const isTopOfPage = !scrolled && window.scrollY < 50;
  
  // Configure visibility logic
  // Show if:
  // 1. On mobile devices
  // 2. On the home page (hero section) on desktop
  // 3. The header is too narrow to fit all navigation items
  // 4. The screen height is very short
  const shouldShow = 
    isMobile || 
    (isHomePage && !isMobile) || 
    isNarrowHeader ||
    isShortScreen ||
    (isTopOfPage && isHomePage); // Always show when at top of homepage
  
  // Update visibility
  if (shouldShow) {
    menuButton.style.display = 'flex';
    setTimeout(() => {
      menuButton.style.opacity = '1';
      menuButton.style.transform = 'translateY(0)';
    }, 10);
  } else {
    menuButton.style.opacity = '0';
    menuButton.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      if (!shouldShow) menuButton.style.display = 'none';
    }, 300); // Match transition duration
  }
  
  // Update body attribute for CSS targeting
  document.body.setAttribute('data-section', activeSection);
  document.body.setAttribute('data-scrolled', scrolled ? 'true' : 'false');
};

/**
 * Creates event listeners for the menu visibility controller
 * @param {Function} getSectionFn - Function that returns the current section
 * @param {Function} getScrolledFn - Function that returns the current scrolled state
 */
export const initMenuVisibilityController = (getSectionFn, getScrolledFn) => {
  // Initial setup
  updateMenuButtonVisibility(getSectionFn(), getScrolledFn(), true);
  
  // Add resize listener
  window.addEventListener('resize', () => {
    updateMenuButtonVisibility(getSectionFn(), getScrolledFn());
  });
  
  // Additional scroll listener for precise control during scrolling
  window.addEventListener('scroll', () => {
    updateMenuButtonVisibility(getSectionFn(), window.scrollY > 50);
  }, { passive: true }); // Passive for better scroll performance
  
  return () => {
    window.removeEventListener('resize', updateMenuButtonVisibility);
    window.removeEventListener('scroll', updateMenuButtonVisibility);
  };
};

export default {
  updateMenuButtonVisibility,
  initMenuVisibilityController
};