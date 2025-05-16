import { useEffect, useRef, useState } from 'react';

// Utility function for throttling
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Utility to check if we're on the home page (hero section)
const isHomeSection = () => {
  // Check if home section exists and is visible in viewport
  const homeSection = document.getElementById('home');
  if (!homeSection) return false;
  
  const rect = homeSection.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
  
  // Also check if we're at the top of the page
  const scrollPosition = window.scrollY;
  const isAtTop = scrollPosition < 200; // If we're close to the top, consider it home
  
  return isVisible || isAtTop;
};

// Hook for interactive mouse effects
export const useMouseTrail = () => {
  const dotsRef = useRef([]);
  const mouseTrailRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef();
  const previousTimeRef = useRef();
  
  useEffect(() => {
    // Create mouse trail container
    const trailContainer = document.createElement('div');
    trailContainer.className = 'mouse-trail';
    document.body.appendChild(trailContainer);
    mouseTrailRef.current = trailContainer;
    
    // Create trail dots
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement('div');
      dot.className = 'trail-dot';
      trailContainer.appendChild(dot);
      dotsRef.current.push(dot);
    }
    
    // Mouse move event handler - throttled to improve performance
    const handleMouseMove = throttle((e) => {
      // Check if menu is open - don't animate when menu is open
      const menuIsOpen = document.querySelector('[class*="md:hidden"][class*="translate-x-0"]');
      if (menuIsOpen) return;
      
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      trailContainer.classList.add('active');
    }, 16); // ~60fps
    
    // Animation loop with performance optimizations
    const animate = (time) => {
      // Skip animation if menu is open or not on hero section
      const menuIsOpen = document.querySelector('[class*="md:hidden"][class*="translate-x-0"]');
      const onHome = isHomeSection();
      
      if (!menuIsOpen && (onHome || Math.random() < 0.2)) { // Only animate 20% of the time when not on home
        if (previousTimeRef.current !== undefined) {
          dotsRef.current.forEach((dot, index) => {
            const delay = index * 50;
            setTimeout(() => {
              dot.style.left = `${mousePosRef.current.x}px`;
              dot.style.top = `${mousePosRef.current.y}px`;
              dot.style.opacity = 1 - index * 0.05;
              dot.style.width = `${5 - index * 0.2}px`;
              dot.style.height = `${5 - index * 0.2}px`;
            }, delay);
          });
        }
      }
      
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation and add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
      if (mouseTrailRef.current) {
        document.body.removeChild(mouseTrailRef.current);
      }
    };
  }, []);
};

// Hook for parallax effects
export const useParallax = () => {
  useEffect(() => {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    if (parallaxLayers.length === 0) return; // Skip if no parallax layers
    
    // Mouse move event handler - throttled
    const handleMouseMove = throttle((e) => {
      // Skip parallax effects when mobile menu is open
      const menuIsOpen = document.querySelector('[class*="md:hidden"][class*="translate-x-0"]');
      if (menuIsOpen) return;
      
      // Only run full parallax effects on home section
      const onHome = isHomeSection();
      if (!onHome && Math.random() < 0.7) return; // 70% chance to skip on non-home pages
      
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const posX = e.clientX - centerX;
      const posY = e.clientY - centerY;
      
      parallaxLayers.forEach((layer) => {
        const speedX = layer.getAttribute('data-speed-x') || 0.1;
        const speedY = layer.getAttribute('data-speed-y') || 0.1;
        
        // Reduce movement intensity on non-home pages
        const intensityFactor = onHome ? 1.0 : 0.5;
        
        const translateX = posX * speedX * intensityFactor;
        const translateY = posY * speedY * intensityFactor;
        
        layer.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    }, 33); // ~30fps, lower for better performance
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};

// Hook for scroll effects
export const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = throttle(() => {
      // Skip animations when mobile menu is open
      const menuIsOpen = document.querySelector('[class*="md:hidden"][class*="translate-x-0"]');
      if (menuIsOpen) return;
      
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animated');
        }
      });
    }, 100); // Throttle to 100ms
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
};

// Hook for technical specs animation
export const useTechnicalSpecsAnimation = () => {
  useEffect(() => {
    const specIndicators = document.querySelectorAll('.specs-indicator-fill');
    if (specIndicators.length === 0) return; // Skip if no indicators
    
    const animateSpecsOnScroll = throttle(() => {
      // Skip animations when mobile menu is open
      const menuIsOpen = document.querySelector('[class*="md:hidden"][class*="translate-x-0"]');
      if (menuIsOpen) return;
      
      specIndicators.forEach((indicator) => {
        const indicatorTop = indicator.getBoundingClientRect().top;
        
        if (indicatorTop < window.innerHeight - 100) {
          const valuePercent = indicator.getAttribute('data-value') || 50;
          indicator.style.width = `${valuePercent}%`;
        }
      });
    }, 100); // Throttle to 100ms
    
    window.addEventListener('scroll', animateSpecsOnScroll);
    animateSpecsOnScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', animateSpecsOnScroll);
    };
  }, []);
};

const interactiveHooks = { useMouseTrail, useParallax, useScrollAnimation, useTechnicalSpecsAnimation };
export default interactiveHooks;