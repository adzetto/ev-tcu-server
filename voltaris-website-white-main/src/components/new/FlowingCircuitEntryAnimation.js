import React, { useEffect, useRef, useCallback } from 'react';
import './animation-styles.css';

const FlowingCircuitEntryAnimation = () => {
  const canvasRef = useRef(null);
  const circuitRef = useRef({
    lines: [],
    dots: [],
    isAnimating: true
  });
  
  // Create a circuit line
  const createCircuitLine = (startX, startY, direction) => {
    const colors = ['#FF4254', '#0044FF', '#10B981', '#8B5CF6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const speed = 0.5 + Math.random() * 1.5;
    const thickness = 1 + Math.random() * 2;
    const length = 25 + Math.random() * 75;
    
    // Create branch after some delay with reduced probability
    const hasBranch = Math.random() < 0.3;
    const branchAfter = hasBranch ? 0.3 + Math.random() * 0.4 : null;
    const branchDirection = hasBranch ? (Math.random() < 0.5 ? 1 : -1) : null;
    
    return {
      startX,
      startY,
      currentLength: 0,
      maxLength: length,
      direction,
      color: randomColor,
      speed,
      thickness,
      hasBranch,
      branchAfter,
      branchDirection,
      branchCreated: false,
      isActive: true,
      isDying: false,
      opacity: 1
    };
  };
  
  // Create a pulse dot
  const createPulseDot = (x, y) => {
    return {
      x,
      y,
      size: 2 + Math.random() * 3,
      opacity: 1,
      growing: true,
      color: Math.random() < 0.5 ? '#FF4254' : '#0044FF',
      speed: 0.01 + Math.random() * 0.03
    };
  };
  
  // Draw all elements
  const draw = useCallback((ctx, width, height, deltaTime) => {
    const circuit = circuitRef.current;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Update and draw circuit lines
    for (let i = 0; i < circuit.lines.length; i++) {
      const line = circuit.lines[i];
      
      if (!line.isActive) continue;
      
      // Update line length
      if (!line.isDying) {
        line.currentLength += line.speed * deltaTime;
      }
      
      // Check if line should branch
      if (line.hasBranch && !line.branchCreated && line.currentLength > line.maxLength * line.branchAfter) {
        line.branchCreated = true;
        
        // Calculate branch point
        const radians = line.direction * (Math.PI / 180);
        const branchX = line.startX + Math.cos(radians) * (line.currentLength);
        const branchY = line.startY + Math.sin(radians) * (line.currentLength);
        
        // Create a new branch line with a different direction
        const branchDirection = line.direction + (45 + Math.random() * 45) * line.branchDirection;
        const branchLine = createCircuitLine(branchX, branchY, branchDirection);
        circuit.lines.push(branchLine);
        
        // Add pulsing dot at branch point
        circuit.dots.push(createPulseDot(branchX, branchY));
      }
      
      // Check if line has reached max length
      if (line.currentLength >= line.maxLength && !line.isDying) {
        line.isDying = true;
        
        // Add pulsing dot at endpoint
        const radians = line.direction * (Math.PI / 180);
        const endX = line.startX + Math.cos(radians) * line.maxLength;
        const endY = line.startY + Math.sin(radians) * line.maxLength;
        
        // Add dot at end of line with 50% probability
        if (Math.random() < 0.5) {
          circuit.dots.push(createPulseDot(endX, endY));
        }
        
        // Continue line in a new direction with 40% probability
        if (Math.random() < 0.4) {
          // Get new direction with a slight change
          const newDirection = line.direction + (Math.random() * 60 - 30);
          const newLine = createCircuitLine(endX, endY, newDirection);
          circuit.lines.push(newLine);
        }
      }
      
      // Fade out dying lines
      if (line.isDying) {
        line.opacity -= 0.01 * deltaTime;
        if (line.opacity <= 0) {
          line.isActive = false;
          continue;
        }
      }
      
      // Draw the line
      ctx.beginPath();
      ctx.lineWidth = line.thickness;
      ctx.strokeStyle = line.color.replace(')', `, ${line.opacity})`).replace('rgb', 'rgba');
      
      const radians = line.direction * (Math.PI / 180);
      const length = Math.min(line.currentLength, line.maxLength);
      const endX = line.startX + Math.cos(radians) * length;
      const endY = line.startY + Math.sin(radians) * length;
      
      ctx.moveTo(line.startX, line.startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
    
    // Update and draw pulse dots
    for (let i = 0; i < circuit.dots.length; i++) {
      const dot = circuit.dots[i];
      
      // Update pulse animation
      if (dot.growing) {
        dot.size += dot.speed * deltaTime;
        dot.opacity -= dot.speed * 0.5 * deltaTime;
        if (dot.size > 8) {
          dot.growing = false;
        }
      } else {
        dot.size -= dot.speed * deltaTime;
        dot.opacity -= dot.speed * 0.5 * deltaTime;
      }
      
      // Remove dots that have faded out
      if (dot.opacity <= 0) {
        circuit.dots.splice(i, 1);
        i--;
        continue;
      }
      
      // Draw the dot
      ctx.beginPath();
      ctx.fillStyle = dot.color.replace(')', `, ${dot.opacity})`).replace('rgb', 'rgba');
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Check if we need to create new lines or if animation should end
    if (circuit.isAnimating && circuit.lines.length < 20 && Math.random() < 0.02) {
      // Create new line from random edge of screen
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let startX, startY, direction;
      
      switch (side) {
        case 0: // Top
          startX = Math.random() * width;
          startY = 0;
          direction = 90 + Math.random() * 60 - 30; // Downward with some randomness
          break;
        case 1: // Right
          startX = width;
          startY = Math.random() * height;
          direction = 180 + Math.random() * 60 - 30; // Leftward with some randomness
          break;
        case 2: // Bottom
          startX = Math.random() * width;
          startY = height;
          direction = 270 + Math.random() * 60 - 30; // Upward with some randomness
          break;
        case 3: // Left
          startX = 0;
          startY = Math.random() * height;
          direction = Math.random() * 60 - 30; // Rightward with some randomness
          break;
        default: // Fallback to center with random direction
          startX = width / 2;
          startY = height / 2;
          direction = Math.random() * 360;
          break;
      }
      
      // Create and add new line
      const newLine = createCircuitLine(startX, startY, direction);
      circuit.lines.push(newLine);
      
      // Add pulsing dot at start point
      circuit.dots.push(createPulseDot(startX, startY));
    }
    
    // Check if animation should end
    let activeLines = circuit.lines.filter(line => line.isActive).length;
    if (activeLines === 0 && circuit.isAnimating) {
      circuit.isAnimating = false;
    }
  }, []);
  
  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lastTimestamp = 0;
    
    // Set canvas dimensions to match container
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Initialize starting lines
    const initLines = () => {
      const circuit = circuitRef.current;
      circuit.lines = [];
      circuit.dots = [];
      circuit.isAnimating = true;
      
      // Create initial lines from center
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < 4; i++) {
        const direction = i * 90 + Math.random() * 30 - 15;
        const line = createCircuitLine(centerX, centerY, direction);
        circuit.lines.push(line);
      }
      
      // Add pulsing dot at center
      circuit.dots.push(createPulseDot(centerX, centerY));
    };
    
    initLines();
    
    // Animation loop
    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      draw(ctx, canvas.width, canvas.height, deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-40"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
};

export default FlowingCircuitEntryAnimation;