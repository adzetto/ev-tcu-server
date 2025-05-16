import React, { useEffect, useState } from 'react';

/**
 * A component that adds emergency fallback styles to ensure mobile menu visibility
 */
const MobileMenuFallback = () => {
  const [isAdded, setIsAdded] = useState(false);
  
  useEffect(() => {
    if (!isAdded) {
      const style = document.createElement('style');
      style.setAttribute('id', 'mobile-menu-fallback-styles');
      style.innerHTML = `
        /* Mobile menu critical fixes */
        .mobile-menu-panel, 
        .mobile-menu-panel .menu-content,
        .mobile-menu-panel .menu-items-container,
        .mobile-menu-panel .menu-item,
        .mobile-menu-panel .mobile-submenu,
        .mobile-menu-panel button,
        .mobile-menu-panel a,
        .mobile-menu-panel div {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        
        .mobile-menu-panel {
          display: flex !important;
          flex-direction: column !important;
        }
        
        .mobile-menu-panel.show {
          transform: translateX(0) !important;
        }
        
        .mobile-menu-panel .menu-content {
          display: flex !important;
          flex-direction: column !important;
        }
        
        .mobile-menu-panel .menu-item {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
        }
        
        .mobile-menu-panel .mobile-submenu {
          margin-left: 1rem !important;
          padding-left: 0.75rem !important;
          border-left: 1px solid rgba(239, 68, 68, 0.3) !important;
          visibility: visible !important;
          opacity: 1 !important;
          display: block !important;
          position: relative !important;
          z-index: 10003 !important;
        }
        
        .mobile-menu-panel .mobile-submenu button {
          width: 100% !important;
          text-align: left !important;
          padding: 0.625rem 0.75rem !important;
          visibility: visible !important;
          opacity: 1 !important;
          display: block !important;
          position: relative !important;
          z-index: 10004 !important;
          color: #334155 !important;
        }
        
        .mobile-menu-panel .mobile-submenu button span {
          color: #334155 !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        
        .mobile-menu-panel span {
          display: inline !important;
          color: #334155 !important;
        }
      `;
      
      document.head.appendChild(style);
      setIsAdded(true);
      
      console.log('Mobile menu fallback styles applied');
      
      // Function to handle menu opening
      const handleMenuOpen = () => {
        const panel = document.querySelector('.mobile-menu-panel');
        if (panel && panel.classList.contains('show')) {
          // Force critical styles for visibility
          panel.style.visibility = 'visible';
          panel.style.opacity = '1';
          panel.style.display = 'flex';
          
          // Force all elements inside to be visible
          const elements = panel.querySelectorAll('*');
          elements.forEach(el => {
            el.style.visibility = 'visible';
            el.style.opacity = '1';
          });
        }
      };
      
      // Set an interval to periodically check and fix the menu
      const checkInterval = setInterval(() => {
        handleMenuOpen();
      }, 500);
      
      return () => {
        clearInterval(checkInterval);
        const styleEl = document.getElementById('mobile-menu-fallback-styles');
        if (styleEl) {
          styleEl.remove();
        }
      };
    }
  }, [isAdded]);
  
  return null; // This component doesn't render anything
};

export default MobileMenuFallback;