import React, { useEffect, useRef } from 'react';
import { Power4, gsap } from 'gsap';
import { CheckCircle, Award, Star, TrendingUp, Crown } from 'lucide-react';
import './GoldEffects.css';

const GoldTierComponent = ({ price, benefits, onContactClick }) => {
  const cardRef = useRef(null);
  const headerRef = useRef(null);
  const particlesRef = useRef(null);
  const orbitalsRef = useRef(null);
  const techLinesRef = useRef(null);
  
  // Initialize 3D effects
  useEffect(() => {
    if (!cardRef.current) return;
    
    // Set up header 3D effect
    const header = headerRef.current;
    gsap.set(header, { transformStyle: "preserve-3d" });
    
    // Particles animation
    const particles = particlesRef.current;
    if (particles) {
      // Create random particles
      for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'gold-particle';
        
        // Random position, size and animation delay
        const size = Math.random() * 4 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 10;
        
        gsap.set(particle, { 
          width: `${size}px`, 
          height: `${size}px`,
          left: `${posX}%`,
          top: `${posY}%`,
          opacity: Math.random() * 0.5 + 0.2,
          backgroundColor: Math.random() > 0.5 ? 'rgba(255,215,0,0.8)' : 'rgba(253,204,13,0.8)'
        });
        
        gsap.to(particle, {
          y: -100 - Math.random() * 100,
          opacity: 0,
          duration: duration,
          delay: delay,
          ease: "power1.out",
          repeat: -1,
          onRepeat: () => {
            gsap.set(particle, {
              y: 0,
              x: Math.random() * 20 - 10,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2
            });
          }
        });
        
        particles.appendChild(particle);
      }
    }
    
    // Orbitals animation
    const orbitals = orbitalsRef.current;
    if (orbitals) {
      const orbitalElements = orbitals.querySelectorAll('.gold-orbital');
      
      orbitalElements.forEach((orbital, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const duration = 20 + index * 5;
        
        gsap.to(orbital, {
          rotation: `${direction * 360}deg`,
          duration: duration,
          repeat: -1,
          ease: "linear"
        });
      });
    }
    
    // Technical lines animation
    const techLines = techLinesRef.current;
    if (techLines) {
      const lines = techLines.querySelectorAll('.gold-tech-line');
      
      lines.forEach((line, index) => {
        const delay = index * 0.2;
        
        gsap.fromTo(line, 
          { width: 0, opacity: 0 }, 
          { 
            width: '100%', 
            opacity: 1, 
            duration: 3, 
            delay: delay,
            ease: "power1.inOut",
            repeat: -1,
            repeatDelay: 5,
            yoyo: true
          }
        );
      });
    }
    
    // Card tilt effect
    const card = cardRef.current;
    
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const percentX = (mouseX - centerX) / centerX;
      const percentY = (mouseY - centerY) / centerY;
      
      // Apply tilt
      gsap.to(card, {
        rotationY: percentX * 2.5,
        rotationX: -percentY * 2.5,
        duration: 0.5,
        ease: Power4.easeOut,
        transformPerspective: 800,
        transformOrigin: "center"
      });
      
      // Move shine overlay based on mouse position
      const shineElement = card.querySelector('.gold-shine');
      if (shineElement) {
        gsap.to(shineElement, {
          x: mouseX,
          y: mouseY,
          opacity: 0.8,
          duration: 0.2
        });
      }
    };
    
    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 1,
        ease: Power4.easeOut
      });
      
      const shineElement = card.querySelector('.gold-shine');
      if (shineElement) {
        gsap.to(shineElement, {
          opacity: 0,
          duration: 0.5
        });
      }
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div 
      ref={cardRef} 
      className="gold-card"
    >
      {/* Advanced background effects */}
      <div className="gold-background">
        <div ref={particlesRef} className="gold-particles"></div>
        
        <div ref={orbitalsRef} className="gold-orbitals">
          <div className="gold-orbital gold-orbital-1"></div>
          <div className="gold-orbital gold-orbital-2"></div>
          <div className="gold-orbital gold-orbital-3"></div>
        </div>
        
        <div ref={techLinesRef} className="gold-tech-lines">
          <div className="gold-tech-line gold-tech-line-1"></div>
          <div className="gold-tech-line gold-tech-line-2"></div>
          <div className="gold-tech-line gold-tech-line-3"></div>
          <div className="gold-tech-line gold-tech-line-4"></div>
          <div className="gold-tech-line gold-tech-line-5"></div>
        </div>
      </div>
      
      {/* Interactive shine effect overlay */}
      <div className="gold-shine"></div>
      
      {/* 3D transformed inner elements */}
      <div className="gold-card-content">
        <div ref={headerRef} className="gold-card-header">
          <Award className="gold-crown-icon" size={32} />
          <h2 className="gold-title">Altın Sponsorluk</h2>
          <div className="gold-price">{price}</div>
          <div className="gold-badge">
            <div className="gold-badge-inner">
              <Star className="gold-badge-icon" size={12} />
              <span>Premium</span>
            </div>
          </div>
        </div>
        
        <div className="gold-benefits">
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index} className="gold-benefit-item">
                <CheckCircle className="gold-benefit-icon" size={20} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="gold-metrics">
          <div className="gold-metric">
            <TrendingUp className="gold-metric-icon" size={18} />
            <div className="gold-metric-label">
              <div className="gold-metric-value">%200</div>
              <div className="gold-metric-name">Marka Görünürlüğü</div>
            </div>
          </div>
          <div className="gold-metric">
            <Award className="gold-metric-icon" size={18} />
            <div className="gold-metric-label">
              <div className="gold-metric-value">2.</div>
              <div className="gold-metric-name">Öncelikli Konum</div>
            </div>
          </div>
        </div>
        
        <button 
          className="gold-button"
          onClick={onContactClick}
        >
          <span className="gold-button-text">İletişime Geç</span>
          <span className="gold-button-shine"></span>
        </button>
      </div>
      
      {/* Advanced corner decoration */}
      <div className="gold-corners">
        <div className="gold-corner gold-corner-tl"></div>
        <div className="gold-corner gold-corner-tr"></div>
        <div className="gold-corner gold-corner-bl"></div>
        <div className="gold-corner gold-corner-br"></div>
      </div>
    </div>
  );
};

export default GoldTierComponent; 