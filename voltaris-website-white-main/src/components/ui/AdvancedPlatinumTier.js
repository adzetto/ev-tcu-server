import React, { useEffect, useRef } from 'react';
import './AdvancedPlatinumTier.css';

/**
 * AdvancedPlatinumTier Component
 * A highly advanced, eye-catching platinum sponsorship tier component
 * with advanced animations, 3D effects, and technical aesthetics.
 */
const AdvancedPlatinumTier = ({ 
  benefits = [], 
  price = "30.000₺", 
  onSelectTier = () => {} 
}) => {
  const platinumRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const glowRef = useRef(null);
  const rotatingBorderRef = useRef(null);
  const floatingBadgeRef = useRef(null);
  
  // Set up the particles animation on the canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const containerRect = canvas.parentElement.getBoundingClientRect();
    
    // Resize canvas to parent size
    canvas.width = containerRect.width;
    canvas.height = containerRect.height;
    
    // Create particles
    particlesRef.current = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        color: i % 3 === 0 ? '#4A90B3' : i % 3 === 1 ? '#B0B0B1' : '#E5E4E2',
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines between particles
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          
          // Calculate distance between two particles
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only draw line if particles are close enough
          if (distance < 80) {
            // Set opacity based on distance
            const opacity = (1 - distance / 80) * 0.2;
            
            // Draw line
            ctx.beginPath();
            ctx.strokeStyle = `rgba(74, 144, 191, ${opacity})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(particle.color)}, ${particle.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    // Helper function to convert hex color to RGB
    const hexToRgb = hex => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
        '255, 255, 255';
    };
    
    // Start animation
    animate();
    
    // Set up 3D rotation effect for card
    if (platinumRef.current) {
      platinumRef.current.addEventListener('mousemove', handleMouseMove);
    }
    
    // Clean up event listener on unmount
    return () => {
      if (platinumRef.current) {
        platinumRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  // Function to handle mouse move for 3D effect
  const handleMouseMove = (e) => {
    if (!platinumRef.current) return;
    
    const card = platinumRef.current;
    const cardRect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to the card
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    
    // Calculate rotation based on mouse position
    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;
    
    const rotateY = -((x - centerX) / centerX) * 5; // max 5deg
    const rotateX = ((y - centerY) / centerY) * 5; // max 5deg
    
    // Apply rotation
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Update lighting effect
    if (glowRef.current) {
      const percentX = x / cardRect.width * 100;
      const percentY = y / cardRect.height * 100;
      glowRef.current.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(74, 144, 191, 0.4) 0%, rgba(255, 255, 255, 0) 60%)`;
    }
  };
  
  // Reset card rotation when mouse leaves
  const handleMouseLeave = () => {
    if (!platinumRef.current) return;
    
    platinumRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    if (glowRef.current) {
      glowRef.current.style.background = 'none';
    }
  };
  
  // Update rotating gradient on interval
  useEffect(() => {
    if (!rotatingBorderRef.current) return;
    
    let angle = 0;
    
    const rotateGradient = () => {
      rotatingBorderRef.current.style.background = `linear-gradient(${angle}deg, #FFFFFF, #B0B0B1, #4A90B3, #B0B0B1, #FFFFFF)`;
      angle = (angle + 1) % 360;
    };
    
    const intervalId = setInterval(rotateGradient, 50);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // Update floating badge animation
  useEffect(() => {
    if (!floatingBadgeRef.current) return;
    
    let y = 0;
    const speed = 0.02;
    let direction = 1;
    
    const animateBadge = () => {
      y += speed * direction;
      if (y > 5) direction = -1;
      if (y < -5) direction = 1;
      
      floatingBadgeRef.current.style.transform = `translateY(${y}px) translateZ(20px)`;
      
      requestAnimationFrame(animateBadge);
    };
    
    animateBadge();
  }, []);

  return (
    <div 
      ref={platinumRef}
      className="advanced-platinum-tier" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Particle animation background */}
      <canvas ref={canvasRef} className="platinum-particles-canvas" />
      
      {/* Rotating gradient border */}
      <div ref={rotatingBorderRef} className="platinum-rotating-border"></div>
      
      {/* Smooth glow effect on hover */}
      <div ref={glowRef} className="platinum-glow-effect"></div>
      
      {/* Main content container */}
      <div className="platinum-content">
        {/* Floating badge with 3D effect */}
        <div ref={floatingBadgeRef} className="platinum-badge">
          <div className="platinum-badge-front">PLATINUM</div>
          <div className="platinum-badge-back"></div>
          <div className="platinum-badge-side"></div>
        </div>
        
        {/* Title and price */}
        <div className="platinum-title">PLATINUM</div>
        <div className="platinum-price">{price}</div>
        
        {/* Tech border with circuit pattern */}
        <div className="platinum-tech-border">
          <div className="circuit-lines circuit-line-1"></div>
          <div className="circuit-lines circuit-line-2"></div>
          <div className="circuit-lines circuit-line-3"></div>
          <div className="circuit-lines circuit-line-4"></div>
          
          <div className="circuit-dot circuit-dot-1"></div>
          <div className="circuit-dot circuit-dot-2"></div>
          <div className="circuit-dot circuit-dot-3"></div>
          <div className="circuit-dot circuit-dot-4"></div>
        </div>
        
        {/* Benefits list */}
        <div className="platinum-benefits">
          {benefits.map((benefit, index) => (
            <div key={index} className="platinum-benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">{benefit}</div>
            </div>
          ))}
        </div>
        
        {/* Technical data display */}
        <div className="platinum-tech-data">
          <div className="tech-data-item">STATUS: PREMIUM</div>
          <div className="tech-data-item">TIER_ID: PLT-2024</div>
        </div>
        
        {/* Action button with special effects */}
        <button 
          className="platinum-button"
          onClick={onSelectTier}
        >
          <span className="button-text">İLETİŞİME GEÇ</span>
          <div className="button-glow"></div>
        </button>
      </div>
      
      {/* Corner brackets */}
      <div className="platinum-corner platinum-corner-tl"></div>
      <div className="platinum-corner platinum-corner-tr"></div>
      <div className="platinum-corner platinum-corner-bl"></div>
      <div className="platinum-corner platinum-corner-br"></div>
      
      {/* Scan line animation */}
      <div className="platinum-scan-line"></div>
      
      {/* Technical edge highlights */}
      <div className="platinum-edge platinum-edge-top"></div>
      <div className="platinum-edge platinum-edge-right"></div>
      <div className="platinum-edge platinum-edge-bottom"></div>
      <div className="platinum-edge platinum-edge-left"></div>
    </div>
  );
};

export default AdvancedPlatinumTier;
