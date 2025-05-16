import React, { useEffect, useRef } from 'react';
import './TechParticles.css';

/**
 * TechParticles Component
 * Adds a subtle technical particle grid background effect to sections
 * for a corporate tech feel
 */
const TechParticles = ({ color = '#0044FF', density = 40, speed = 1, opacity = 0.3 }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;
    
    // Function to update canvas dimensions
    const updateDimensions = () => {
      const container = canvas.parentElement;
      width = container.offsetWidth;
      height = container.offsetHeight;
      
      canvas.width = width;
      canvas.height = height;
      
      // Recreate particles when dimensions change
      createParticles();
    };
    
    // Create particles
    const createParticles = () => {
      // Clear existing particles
      particlesRef.current = [];
      
      // Calculate number of particles based on density and canvas size
      const area = width * height;
      const particleCount = Math.floor(area * density / 100000);
      
      // Create particles
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          connectDistance: Math.random() * 100 + 50
        });
      }
    };
    
    // Draw particles and connections
    const drawParticles = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Set colors based on props
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      
      // Draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
        
        // Draw particle
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections to nearby particles
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < particle.connectDistance) {
            // Set opacity based on distance
            ctx.globalAlpha = opacity * (1 - distance / particle.connectDistance);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
    };
    
    // Animation loop
    const animate = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initialize
    updateDimensions();
    animate();
    
    // Listen for window resize
    window.addEventListener('resize', updateDimensions);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, density, speed, opacity]);
  
  return (
    <div className="tech-particles-container">
      <canvas ref={canvasRef} className="tech-particles-canvas" />
    </div>
  );
};

export default TechParticles;
