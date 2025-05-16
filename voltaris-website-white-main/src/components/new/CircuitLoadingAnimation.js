import React, { useEffect, useRef } from 'react';

const CircuitLoadingAnimation = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    
    // Circuit grid parameters
    const gridSize = 30;
    const lines = [];
    const nodes = [];
    const trails = [];
    
    // Red to Blue gradient colors for lines
    const getGradientColor = (position) => {
      // Position is 0 to 1 (left to right)
      const r = Math.floor(255 - position * 150);
      const g = Math.floor(position * 50);
      const b = Math.floor(50 + position * 205);
      return `rgb(${r}, ${g}, ${b})`;
    };
    
    // Create circuit grid
    const createCircuitGrid = () => {
      // Create horizontal lines
      for (let y = gridSize; y < height; y += gridSize) {
        // Skip some lines randomly for varied effect
        if (Math.random() > 0.7) continue;
        
        const lineWidth = 1 + Math.random() * 0.5;
        const startX = Math.random() > 0.5 ? 0 : width / 2;
        const endX = Math.random() > 0.5 ? width / 2 : width;
        
        lines.push({
          startX: startX,
          startY: y,
          endX: endX,
          endY: y,
          color: getGradientColor(y / height),
          width: lineWidth
        });
      }
      
      // Create vertical lines
      for (let x = gridSize; x < width; x += gridSize) {
        // Skip some lines randomly
        if (Math.random() > 0.7) continue;
        
        const lineWidth = 1 + Math.random() * 0.5;
        const startY = Math.random() > 0.5 ? 0 : height / 2;
        const endY = Math.random() > 0.5 ? height / 2 : height;
        
        lines.push({
          startX: x,
          startY: startY,
          endX: x,
          endY: endY,
          color: getGradientColor(x / width),
          width: lineWidth
        });
      }
      
      // Create nodes (connection points)
      for (let x = gridSize; x < width; x += gridSize) {
        for (let y = gridSize; y < height; y += gridSize) {
          // Create nodes at some intersections
          if (Math.random() > 0.92) {
            nodes.push({
              x: x,
              y: y,
              radius: 1 + Math.random() * 2,
              color: getGradientColor(x / width),
              pulse: Math.random() > 0.7,
              pulseRate: 0.02 + Math.random() * 0.04,
              pulseOffset: Math.random() * Math.PI * 2
            });
          }
        }
      }
    };
    
    // Create circuit trails (moving data points)
    const createTrail = () => {
      // Mostly horizontal trails
      const isHorizontal = Math.random() > 0.3;
      
      if (isHorizontal) {
        const y = Math.floor(Math.random() * height / gridSize) * gridSize;
        const direction = Math.random() > 0.5 ? 1 : -1;
        const startX = direction > 0 ? 0 : width;
        
        trails.push({
          x: startX,
          y: y,
          direction: direction,
          speed: 1 + Math.random() * 3,
          color: getGradientColor(y / height),
          width: 2 + Math.random() * 3,
          length: 10 + Math.random() * 20,
          horizontal: true,
          active: true
        });
      } else {
        const x = Math.floor(Math.random() * width / gridSize) * gridSize;
        const direction = Math.random() > 0.5 ? 1 : -1;
        const startY = direction > 0 ? 0 : height;
        
        trails.push({
          x: x,
          y: startY,
          direction: direction,
          speed: 1 + Math.random() * 3,
          color: getGradientColor(x / width),
          width: 2 + Math.random() * 3,
          length: 10 + Math.random() * 20,
          horizontal: false,
          active: true
        });
      }
    };
    
    // Initialize the circuit grid
    createCircuitGrid();
    
    // Animation loop
    let animationFrameId;
    let lastTimestamp = 0;
    let trailTimer = 0;
    
    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(0, 0, 0, 0)'; // Transparent background
      ctx.fillRect(0, 0, width, height);
      
      // Draw circuit grid lines
      lines.forEach(line => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(line.endX, line.endY);
        ctx.stroke();
      });
      
      // Draw and animate nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.fillStyle = node.color;
        
        // Pulse effect for some nodes
        let radius = node.radius;
        if (node.pulse) {
          radius = node.radius * (0.7 + Math.sin(timestamp * node.pulseRate + node.pulseOffset) * 0.5);
        }
        
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Create new trails occasionally
      trailTimer += deltaTime;
      if (trailTimer > 200 && trails.length < 15) { // Control max number of trails
        createTrail();
        trailTimer = 0;
      }
      
      // Update and draw trails
      trails.forEach((trail, index) => {
        if (!trail.active) return;
        
        // Update trail position
        if (trail.horizontal) {
          trail.x += trail.direction * trail.speed;
          
          // Check if trail reached edge
          if ((trail.direction > 0 && trail.x > width + trail.length) || 
              (trail.direction < 0 && trail.x < -trail.length)) {
            trail.active = false;
          }
        } else {
          trail.y += trail.direction * trail.speed;
          
          // Check if trail reached edge
          if ((trail.direction > 0 && trail.y > height + trail.length) || 
              (trail.direction < 0 && trail.y < -trail.length)) {
            trail.active = false;
          }
        }
        
        // Draw trail
        if (trail.horizontal) {
          ctx.beginPath();
          ctx.strokeStyle = trail.color;
          ctx.lineWidth = trail.width;
          ctx.moveTo(trail.x, trail.y);
          ctx.lineTo(trail.x - (trail.direction * trail.length), trail.y);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.strokeStyle = trail.color;
          ctx.lineWidth = trail.width;
          ctx.moveTo(trail.x, trail.y);
          ctx.lineTo(trail.x, trail.y - (trail.direction * trail.length));
          ctx.stroke();
        }
        
        // Remove inactive trails
        if (!trail.active) {
          trails.splice(index, 1);
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameId = requestAnimationFrame(animate);
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recreate circuit grid on resize
      lines.length = 0;
      nodes.length = 0;
      createCircuitGrid();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default CircuitLoadingAnimation;