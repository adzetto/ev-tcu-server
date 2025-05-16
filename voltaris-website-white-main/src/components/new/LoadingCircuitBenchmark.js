import React, { useEffect, useRef } from 'react';
import './animation-styles.css';

const LoadingCircuitBenchmark = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    
    // Circuit benchmark parameters
    const benchmarks = [];
    const benchmarkCount = 10;
    const colors = ['#FF4254', '#0044FF', '#10B981', '#8B5CF6'];
    
    // Initialize benchmarks
    for (let i = 0; i < benchmarkCount; i++) {
      benchmarks.push({
        x: Math.random() * width,
        y: height - 100 - Math.random() * 400, // Position benchmarks in bottom half
        width: 100 + Math.random() * 200,
        height: 1 + Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.2 + Math.random() * 0.8,
        direction: Math.random() > 0.5 ? 1 : -1,
        label: Math.floor(Math.random() * 100),
        pulseRate: 0.01 + Math.random() * 0.03,
        pulsePhase: Math.random() * Math.PI * 2,
        dots: []
      });
      
      // Add data points/dots to each benchmark
      const dotCount = 3 + Math.floor(Math.random() * 8);
      for (let j = 0; j < dotCount; j++) {
        benchmarks[i].dots.push({
          x: Math.random() * benchmarks[i].width,
          size: 2 + Math.random() * 3,
          pulseRate: 0.02 + Math.random() * 0.05,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    }
    
    // Animation function
    let animationFrameId;
    let lastTimestamp = 0;
    
    const animate = (timestamp) => {
      // Calculate delta time for smooth animation
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw benchmarks
      benchmarks.forEach(benchmark => {
        // Move benchmark
        benchmark.x += benchmark.speed * benchmark.direction * deltaTime * 0.05;
        
        // Reverse direction if hitting edge
        if (benchmark.x + benchmark.width > width || benchmark.x < 0) {
          benchmark.direction *= -1;
        }
        
        // Calculate pulse effect
        const pulseEffect = Math.sin(timestamp * benchmark.pulseRate + benchmark.pulsePhase) * 0.3 + 0.7;
        
        // Draw benchmark line
        ctx.beginPath();
        ctx.strokeStyle = benchmark.color;
        ctx.lineWidth = benchmark.height * pulseEffect;
        ctx.globalAlpha = 0.7 * pulseEffect;
        ctx.moveTo(benchmark.x, benchmark.y);
        ctx.lineTo(benchmark.x + benchmark.width, benchmark.y);
        ctx.stroke();
        
        // Draw benchmark label
        ctx.font = '10px monospace';
        ctx.fillStyle = benchmark.color;
        ctx.globalAlpha = 0.9 * pulseEffect;
        ctx.fillText(`${benchmark.label}v`, benchmark.x + benchmark.width + 5, benchmark.y + 4);
        
        // Draw measurement tick marks
        const tickCount = Math.floor(benchmark.width / 20);
        for (let i = 0; i <= tickCount; i++) {
          const tickX = benchmark.x + (i * benchmark.width / tickCount);
          ctx.beginPath();
          ctx.strokeStyle = benchmark.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.5 * pulseEffect;
          ctx.moveTo(tickX, benchmark.y - 3);
          ctx.lineTo(tickX, benchmark.y + 3);
          ctx.stroke();
        }
        
        // Draw data points/dots
        benchmark.dots.forEach(dot => {
          const dotPulse = Math.sin(timestamp * dot.pulseRate + dot.pulsePhase) * 0.5 + 0.5;
          const absoluteX = benchmark.x + dot.x;
          
          ctx.beginPath();
          ctx.fillStyle = benchmark.color;
          ctx.globalAlpha = 0.9 * dotPulse;
          ctx.arc(absoluteX, benchmark.y, dot.size * dotPulse, 0, Math.PI * 2);
          ctx.fill();
          
          // Occasionally draw data transfer pulse
          if (Math.random() < 0.001 * deltaTime) {
            // Vertical data line
            ctx.beginPath();
            ctx.strokeStyle = benchmark.color;
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.7;
            ctx.setLineDash([2, 2]);
            ctx.moveTo(absoluteX, 0);
            ctx.lineTo(absoluteX, height);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        });
      });
      
      // Draw occasional horizontal scan lines
      if (Math.random() < 0.03) {
        const scanY = Math.random() * height;
        const scanColor = colors[Math.floor(Math.random() * colors.length)];
        
        ctx.beginPath();
        ctx.strokeStyle = scanColor;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(0, scanY);
        ctx.lineTo(width, scanY);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0" 
      style={{ opacity: 0.7 }}
    />
  );
};

export default LoadingCircuitBenchmark;