import React, { useEffect, useRef } from 'react';
import './animation-styles.css';

const EnhancedLogoAnimation = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const circuitPathsRef = useRef([]);
  
  // Initialize animation on component mount
  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;
    if (!container || !logo) return;
    
    // Initial position off-screen
    let posX = -100;
    let posY = 50;
    let walkSpeed = 0.5;
    let rotation = 0;
    let rotationSpeed = 0.5;
    let rotationDirection = 1;
    let isWalking = true;
    
    // Circuit path animation variables
    const numPaths = 4;
    circuitPathsRef.current = [];
    
    // Create circuit paths
    for (let i = 0; i < numPaths; i++) {
      const path = document.createElement('div');
      path.classList.add('circuit-path');
      
      // Assign color - alternate between red and blue
      const color = i % 2 === 0 ? '#FF4254' : '#0044FF';
      path.style.background = `linear-gradient(90deg, transparent, ${color}, transparent)`;
      
      // Set position and initial properties
      path.style.position = 'absolute';
      path.style.height = '2px';
      path.style.width = '50px';
      path.style.opacity = '0';
      path.style.transform = 'translateX(-100%)';
      path.style.zIndex = '-1';
      
      // Assign index to reference later
      path.dataset.index = i;
      
      // Add to container and reference array
      container.appendChild(path);
      circuitPathsRef.current.push({
        element: path,
        active: false,
        x: 0,
        y: 0,
        angle: 0,
        speed: 2 + Math.random() * 3,
        width: 30 + Math.random() * 50,
        opacity: 0.7 + Math.random() * 0.3
      });
    }
    
    // Animation loop
    let animationFrameId;
    let lastTimestamp = 0;
    
    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = (timestamp - lastTimestamp) / 16; // normalize to ~60fps
      lastTimestamp = timestamp;
      
      // Update logo position for walking effect
      if (isWalking) {
        posX += walkSpeed * deltaTime;
        
        // Bobbing effect while walking
        posY = 50 + Math.sin(posX * 0.05) * 3;
        
        // Stop walking once we reach center
        if (posX >= 50) {
          isWalking = false;
          posX = 50;
          posY = 50;
          
          // Trigger a final spin
          rotationDirection = Math.random() < 0.5 ? 1 : -1;
          rotationSpeed = 3;
        }
      } else {
        // Slow down rotation
        rotationSpeed *= 0.98;
        if (rotationSpeed < 0.01) {
          rotationSpeed = 0;
        }
      }
      
      // Update rotation
      rotation += rotationSpeed * rotationDirection * deltaTime;
      
      // Apply logo transformations
      logo.style.transform = `translate(-50%, -50%) translateX(${posX}%) translateY(${posY}%) rotate(${rotation}deg)`;
      
      // Update circuit paths
      circuitPathsRef.current.forEach((path, index) => {
        // Check if we should activate a new path
        if (!path.active) {
          if (isWalking && Math.random() < 0.02) {
            path.active = true;
            
            // Position slightly behind the logo
            const angle = Math.random() * Math.PI * 2;
            const distance = 20 + Math.random() * 20;
            path.x = posX - Math.cos(angle) * distance;
            path.y = posY + Math.sin(angle) * distance;
            
            // Set path direction, slightly behind logo's direction
            path.angle = Math.atan2(50 - path.y, 50 - path.x);
            
            // Initialize path properties
            path.element.style.opacity = '0';
            path.element.style.width = `${path.width}px`;
            path.element.style.transform = `translate(-50%, -50%) 
              translateX(${path.x}%) translateY(${path.y}%) 
              rotate(${path.angle * 180 / Math.PI}deg)`;
          }
        } else {
          // Update existing path
          path.opacity -= 0.01 * deltaTime;
          
          // Move path along its angle
          path.x += Math.cos(path.angle) * path.speed * deltaTime;
          path.y += Math.sin(path.angle) * path.speed * deltaTime;
          
          // Apply path transformations
          path.element.style.opacity = path.opacity;
          path.element.style.transform = `translate(-50%, -50%) 
            translateX(${path.x}%) translateY(${path.y}%) 
            rotate(${path.angle * 180 / Math.PI}deg)`;
          
          // Deactivate path if it's faded out
          if (path.opacity <= 0) {
            path.active = false;
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
      circuitPathsRef.current.forEach(path => {
        if (path.element.parentNode) {
          path.element.parentNode.removeChild(path.element);
        }
      });
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full h-20 overflow-hidden"
    >
      <img 
        ref={logoRef}
        src="/logo_sadece.png" 
        alt="Voltaris Logo"
        className="absolute left-0 top-0 h-10 w-10 transform -translate-x-1/2 -translate-y-1/2 z-10"
        style={{ 
          transformOrigin: 'center',
          filter: 'drop-shadow(0 0 10px rgba(255, 66, 84, 0.5))'
        }}
      />
    </div>
  );
};

export default EnhancedLogoAnimation;