import React from 'react';

// ADAS System Architecture SVG Component
export const AdasSystemArchitecture = () => {
  return (
    <div className="svg-container mx-auto" style={{ maxWidth: "950px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" width="100%" height="100%">
        <defs>
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a14" />
            <stop offset="100%" stopColor="#1a1b24" />
          </linearGradient>
          <linearGradient id="component-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a3a" />
            <stop offset="100%" stopColor="#1a1a2a" />
          </linearGradient>
          <linearGradient id="raspberry-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b71c1c" />
            <stop offset="100%" stopColor="#7f0000" />
          </linearGradient>
          <linearGradient id="sensor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d47a1" />
            <stop offset="100%" stopColor="#01285e" />
          </linearGradient>
          <linearGradient id="screen-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#004d40" />
            <stop offset="100%" stopColor="#00251a" />
          </linearGradient>
          <linearGradient id="arduino-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0097a7" />
            <stop offset="100%" stopColor="#005662" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="normal" />
          </filter>

          <g id="data-packet">
            <rect width="16" height="10" rx="2" fill="#ff4254" opacity="0.8" />
            <rect width="12" height="2" rx="1" fill="white" x="2" y="2" opacity="0.6" />
            <rect width="8" height="2" rx="1" fill="white" x="4" y="6" opacity="0.6" />
          </g>
        </defs>

        <rect width="900" height="600" fill="url(#bg-gradient)" />

        <g opacity="0.1">
          <path d="M0,50 L900,50 M0,100 L900,100 M0,150 L900,150 M0,200 L900,200 M0,250 L900,250 M0,300 L900,300 M0,350 L900,350 M0,400 L900,400 M0,450 L900,450 M0,500 L900,500 M0,550 L900,550" stroke="#ffffff" strokeWidth="1" />
          <path d="M50,0 L50,600 M100,0 L100,600 M150,0 L150,600 M200,0 L200,600 M250,0 L250,600 M300,0 L300,600 M350,0 L350,650 M400,0 L400,650 M450,0 L450,650 M500,0 L500,650 M550,0 L550,650 M600,0 L600,650 M650,0 L650,650 M700,0 L700,650 M750,0 L750,650 M800,0 L800,650 M850,0 L850,650" stroke="#ffffff" strokeWidth="0.5" />
        </g>

        <text x="450" y="50" fontFamily="Arial, sans-serif" fontSize="24" fill="#ffffff" textAnchor="middle" fontWeight="bold">ADAS Sistem Mimarisi</text>
        <text x="450" y="75" fontFamily="Arial, sans-serif" fontSize="16" fill="#ff4254" textAnchor="middle">Voltaris Elektromobil</text>

        <g transform="translate(450, 235)">
          <rect x="-120" y="-60" width="240" height="120" rx="5" ry="5" fill="url(#raspberry-gradient)" stroke="#ffffff" strokeWidth="2" filter="url(#glow)" />
          <text x="0" y="-25" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffcc00" textAnchor="middle">ADAS İşlem Birimi</text>
          <text x="0" y="0" fontFamily="Arial, sans-serif" fontSize="18" fill="#ffffff" textAnchor="middle" fontWeight="bold">Raspberry Pi 5</text>
          <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle">8GB RAM</text>
          <rect x="-100" y="45" width="200" height="10" rx="2" fill="#333333" />
          <rect x="-90" y="45" width="15" height="10" rx="1" fill="#444444" />
          <rect x="-70" y="45" width="15" height="10" rx="1" fill="#444444" />
          <rect x="-50" y="45" width="15" height="10" rx="1" fill="#444444" />
          <rect x="-30" y="45" width="15" height="10" rx="1" fill="#444444" />
          <rect x="-10" y="45" width="15" height="10" rx="1" fill="#444444" />
          <rect x="10" y="45" width="15" height="10" rx="1" fill="#444444" />
          <rect x="30" y="45" width="15" height="10" rx="1" fill="#444444" />
          <rect x="50" y="45" width="15" height="10" rx="1" fill="#444444" />
          <rect x="70" y="45" width="15" height="10" rx="1" fill="#444444" />
        </g>

        <g transform="translate(200, 170)">
          <rect x="-70" y="-50" width="140" height="100" rx="5" ry="5" fill="url(#sensor-gradient)" stroke="#ffffff" strokeWidth="2" />
          <g transform="translate(0, -30)">
              <circle cx="0" cy="0" r="12" fill="#000000" stroke="#333333" strokeWidth="2" />
              <circle cx="0" cy="0" r="8" fill="#222222" stroke="#444444" strokeWidth="1" />
              <circle cx="0" cy="0" r="4" fill="#111111" />
              <circle cx="-3" cy="-3" r="1" fill="#ffffff" opacity="0.7" />
          </g>
          <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">USB Kamera</text>
          <text x="0" y="23" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">1280x960 Çözünürlük</text>
          <text x="0" y="41" fontFamily="Arial, sans-serif" fontSize="10" fill="#aaaaaa" textAnchor="middle">Şerit Takibi, İşaret Algılama</text>
        </g>

        <g transform="translate(200, 300)">
          <rect x="-70" y="-45" width="140" height="90" rx="5" ry="5" fill="url(#sensor-gradient)" stroke="#ffffff" strokeWidth="2" />
          <g opacity="0.7" transform="translate(-35, -15)">
              <path d="M-20,-10 C-30,-25 -40,-30 -50,-30" stroke="#4fc3f7" strokeWidth="2" fill="none"> 
                <animate attributeName="opacity" values="0.1;0.7;0.1" dur="3s" repeatCount="indefinite" />
              </path>
              <path d="M-15,-5 C-25,-20 -30,-25 -40,-25" stroke="#4fc3f7" strokeWidth="2" fill="none"> 
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" begin="0.2s" />
              </path>
              <path d="M-10,0 C-20,-15 -25,-20 -30,-20" stroke="#4fc3f7" strokeWidth="2" fill="none"> 
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" begin="0.4s" />
              </path>
          </g>
          <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">RD-03D Radar</text>
          <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Çoklu Nesne Algılama</text>
          <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="10" fill="#aaaaaa" textAnchor="middle">Kör Nokta Algılama</text>
        </g>

        <g transform="translate(200, 430)">
          <rect x="-70" y="-50" width="140" height="100" rx="5" ry="5" fill="url(#sensor-gradient)" stroke="#ffffff" strokeWidth="2" />
          <g transform="translate(0, -30)">
              <circle cx="0" cy="0" r="10" fill="#ffeb3b" opacity="0.8"> 
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
              </circle>
              <path d="M0,-15 L0,-10 M-10,0 L-15,0 M0,15 L0,10 M15,0 L10,0" stroke="#ffeb3b" strokeWidth="2" opacity="0.8" fill="none"/>
              <path d="M-7,-7 L-11,-11 M-7,7 L-11,11 M7,7 L11,11 M7,-7 L11,-11" stroke="#ffeb3b" strokeWidth="2" opacity="0.8" fill="none"/>
          </g>
          <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">BH1750 Sensör</text>
          <text x="0" y="23" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Ortam Işığı Sensörü</text>
          <text x="0" y="41" fontFamily="Arial, sans-serif" fontSize="10" fill="#aaaaaa" textAnchor="middle">Otomatik Farlar</text>
        </g>

        <g transform="translate(700, 170)">
          <rect x="-70" y="-50" width="140" height="100" rx="5" ry="5" fill="url(#screen-gradient)" stroke="#ffffff" strokeWidth="2" />
          <g transform="translate(0, -10)">
            <rect x="-50" y="-25" width="100" height="50" rx="2" fill="#000022" stroke="#444444" />
            <path d="M-40,-15 L-25,-15 M-40,-5 L-10,-5 M-40,5 L-30,5 M-40,15 L-20,15" stroke="#00ff00" strokeWidth="1" opacity="0.7" fill="none"/>
            <rect x="0" y="-20" width="40" height="40" fill="#001133" opacity="0.6" />
            <text x="20" y="5" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle" opacity="0.9">ADAS</text>
          </g>
          <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">10" TFT Ekran</text>
          <text x="0" y="36" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">HDMI Bağlantısı</text>
        </g>

        <g transform="translate(700, 300)">
          <rect x="-70" y="-50" width="140" height="100" rx="5" ry="5" fill="url(#arduino-gradient)" stroke="#ffffff" strokeWidth="2" />
          <g transform="translate(0, -30)">
              <rect x="-45" y="0" width="90" height="20" rx="2" fill="#005662" stroke="#0097a7" />
              <text x="0" y="13" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle">168MHz ARM Cortex-M4</text>
          </g>
          <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">AKS Kontrol Ünitesi</text>
          <text x="0" y="23" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">STM32F407VGT6</text>
          <text x="0" y="41" fontFamily="Arial, sans-serif" fontSize="10" fill="#aaaaaa" textAnchor="middle">Hız Sabitleyici</text>
        </g>

        <g transform="translate(700, 430)">
          <rect x="-70" y="-50" width="140" height="100" rx="5" ry="5" fill="url(#component-gradient)" stroke="#ffffff" strokeWidth="2" />
          <g transform="translate(0, -33)">
              <rect x="-40" y="0" width="80" height="15" rx="2" fill="#333333" stroke="#666666" />
              <circle cx="-30" cy="8" r="3" fill="#cc0000" />
              <circle cx="30" cy="8" r="3" fill="#00cc00" />
              <path d="M-20,0 L-20,-10 M-10,0 L-10,-10 M0,0 L0,-10 M10,0 L10,-10 M20,0 L20,-10" stroke="#888888" strokeWidth="1" fill="none"/>
          </g>
          <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Motor Kontrolcüsü</text>
          <text x="0" y="23" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">BLDC Motor Sürücü</text>
          <text x="0" y="41" fontFamily="Arial, sans-serif" fontSize="10" fill="#aaaaaa" textAnchor="middle">Alan Oryantasyonlu Kontrol</text>
        </g>

        <g strokeWidth="2" fill="none">
          <path d="M270,170 L330,170 L330,235" stroke="#4fc3f7">
            <animate attributeName="strokeDashoffset" from="60" to="0" dur="3s" repeatCount="indefinite" />
            <animate attributeName="strokeDasharray" values="5,5" />
          </path> 
          <text x="300" y="160" fontFamily="monospace" fontSize="10" fill="#4fc3f7" textAnchor="middle">USB</text>
          
          <path d="M270,300 L330,300 L330,235" stroke="#4fc3f7">
            <animate attributeName="strokeDashoffset" from="60" to="0" dur="4s" repeatCount="indefinite" />
            <animate attributeName="strokeDasharray" values="5,5" />
          </path> 
          <text x="300" y="290" fontFamily="monospace" fontSize="10" fill="#4fc3f7" textAnchor="middle">UART</text>
          
          <path d="M270,430 L310,430 L310,235" stroke="#66bb6a">
            <animate attributeName="strokeDashoffset" from="60" to="0" dur="5s" repeatCount="indefinite" />
            <animate attributeName="strokeDasharray" values="5,5" />
          </path> 
          <text x="290" y="420" fontFamily="monospace" fontSize="10" fill="#66bb6a" textAnchor="middle">I2C</text>
          
          <path d="M570,235 L570,170 L630,170" stroke="#ff7043" strokeWidth="3">
            <animate attributeName="strokeDashoffset" from="60" to="0" dur="2s" repeatCount="indefinite" />
            <animate attributeName="strokeDasharray" values="10,5" />
          </path> 
          <text x="600" y="160" fontFamily="monospace" fontSize="10" fill="#ff7043" textAnchor="middle">HDMI</text>
          
          <path d="M570,235 L600,235 L600,300 L630,300" stroke="#ffeb3b" strokeWidth="2">
            <animate attributeName="strokeDashoffset" from="60" to="0" dur="3s" repeatCount="indefinite" />
            <animate attributeName="strokeDasharray" values="8,4" />
          </path> 
          <text x="600" y="265" fontFamily="monospace" fontSize="10" fill="#ffeb3b" textAnchor="middle">CAN Bus</text>
          
          <path d="M700,350 L700,380" stroke="#ff4254" strokeWidth="2">
            <animate attributeName="strokeDashoffset" from="50" to="0" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="strokeDasharray" values="6,3" />
          </path> 
          <text x="720" y="370" fontFamily="monospace" fontSize="10" fill="#ff4254" textAnchor="start">PWM/CAN</text>
        </g>

        <g>
          <use xlinkHref="#data-packet">
            <animateMotion dur="2s" repeatCount="indefinite" path="M270,170 L330,170 L330,235" />
          </use>
          <use xlinkHref="#data-packet">
            <animateMotion dur="3s" repeatCount="indefinite" path="M270,300 L330,300 L330,235" />
          </use>
          <use xlinkHref="#data-packet">
            <animateMotion dur="4s" repeatCount="indefinite" path="M270,430 L310,430 L310,235" />
          </use>
          <use xlinkHref="#data-packet">
            <animateMotion dur="1.5s" repeatCount="indefinite" path="M570,235 L570,170 L630,170" />
          </use>
          <use xlinkHref="#data-packet">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M570,235 L600,235 L600,300 L630,300" />
          </use>
          <use xlinkHref="#data-packet">
            <animateMotion dur="1s" repeatCount="indefinite" path="M700,350 L700,380" />
          </use>
        </g>

        <g transform="translate(450, 540)">
          <rect x="-400" y="-30" width="800" height="60" rx="5" ry="5" fill="rgba(20,20,40,0.7)" stroke="#ffffff" strokeWidth="1" />
          <text x="0" y="-10" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">ADAS Fonksiyonları</text>
          <text x="-370" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#4fc3f7" textAnchor="start">• Şerit Takibi</text>
          <text x="-200" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#66bb6a" textAnchor="start">• Trafik İşareti Algılama</text>
          <text x="10" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffeb3b" textAnchor="start">• Hız Sabitleyici</text>
          <text x="150" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ff7043" textAnchor="start">• Kör Nokta Algılama</text>
          <text x="320" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ff4254" textAnchor="start">• Otomatik Farlar</text>
        </g>

        <g opacity="0.8">
          <path d="M450,295 L450,340 L550,340" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,2" fill="none" />
          <text x="560" y="345" fontFamily="monospace" fontSize="10" fill="#ffffff">GPIO/CAN/I2C</text>

          <path d="M200,120 L200,90 L300,90" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,2" fill="none" />
          <text x="310" y="95" fontFamily="monospace" fontSize="10" fill="#ffffff">~23 FPS İşleme Hızı</text>

          <path d="M200,345 L200,380 L300,380" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,2" fill="none" />
          <text x="310" y="385" fontFamily="monospace" fontSize="10" fill="#ffffff">~30° Algılama Açısı</text>
        </g>
      </svg>
    </div>
  );
};

// Lane Detection Algorithm SVG Component
const LaneDetectionDiagram = () => {
  return (
    <div className="svg-container mx-auto mt-10" style={{ maxWidth: "950px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 650" width="100%" height="100%">
        <defs>
          <linearGradient id="lane-bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a14" />
            <stop offset="100%" stopColor="#1a1b24" />
          </linearGradient>
          
          <linearGradient id="lane-block-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a3a" />
            <stop offset="100%" stopColor="#1a1a2a" />
          </linearGradient>
          
          <linearGradient id="lane-primary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4fc3f7" />
            <stop offset="100%" stopColor="#0277bd" />
          </linearGradient>
          
          <linearGradient id="lane-secondary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4254" />
            <stop offset="100%" stopColor="#b71c1c" />
          </linearGradient>
          
          <linearGradient id="lane-tertiary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66bb6a" />
            <stop offset="100%" stopColor="#2e7d32" />
          </linearGradient>
          
          <filter id="lane-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="normal" />
          </filter>
          
          <pattern id="lane-cameraInput" patternUnits="userSpaceOnUse" width="120" height="80">
            <rect width="120" height="80" fill="#000000" />
            <path d="M0,40 L120,40" stroke="#444444" strokeWidth="1" />
            <path d="M0,25 L120,25 M0,55 L120,55" stroke="#444444" strokeWidth="0.5" />
            <path d="M60,0 L60,80" stroke="#444444" strokeWidth="1" />
            <path d="M30,0 L30,80 M90,0 L90,80" stroke="#444444" strokeWidth="0.5" />
            <circle cx="60" cy="40" r="20" fill="none" stroke="#ffeb3b" strokeWidth="0.5" />
            <path d="M40,40 L80,40 M60,20 L60,60" stroke="#ffeb3b" strokeWidth="0.5" />
          </pattern>
          
          <pattern id="lane-binaryMask" patternUnits="userSpaceOnUse" width="120" height="80">
            <rect width="120" height="80" fill="#000000" />
            <path d="M0,35 Q30,30 60,30 Q90,30 120,35" stroke="#ffffff" strokeWidth="3" />
            <path d="M0,45 Q30,50 60,50 Q90,50 120,45" stroke="#ffffff" strokeWidth="3" />
          </pattern>
          
          <pattern id="lane-laneDetection" patternUnits="userSpaceOnUse" width="120" height="80">
            <rect width="120" height="80" fill="#000000" />
            <path d="M30,80 Q45,40 60,0" stroke="#ff4254" strokeWidth="2" fill="none" />
            <path d="M90,80 Q75,40 60,0" stroke="#ff4254" strokeWidth="2" fill="none" />
            <path d="M0,60 L120,60" stroke="#4fc3f7" strokeWidth="1" strokeDasharray="5,3" />
            <circle cx="60" cy="60" r="5" fill="#ffeb3b" />
          </pattern>
          
          <pattern id="lane-warpedImage" patternUnits="userSpaceOnUse" width="120" height="80">
            <rect width="120" height="80" fill="#111111" />
            <path d="M10,10 L10,70 L110,70 L110,10 Z" stroke="#444444" fill="none" />
            <path d="M10,70 L30,30 L90,30 L110,70" stroke="#4fc3f7" strokeWidth="2" fill="none" />
            <path d="M30,30 L90,30" stroke="#444444" strokeDasharray="5,5" />
            <path d="M60,10 L60,70" stroke="#444444" strokeDasharray="3,3" />
          </pattern>
          
          <pattern id="lane-resultImage" patternUnits="userSpaceOnUse" width="120" height="80">
            <rect width="120" height="80" fill="#111111" />
            <rect x="40" y="10" width="40" height="60" fill="#222222" />
            <path d="M10,70 L30,10 L90,10 L110,70" stroke="#00ff00" strokeWidth="2" fill="none" />
            <path d="M10,70 L110,70" stroke="#ffcc00" strokeWidth="2" />
            <path d="M40,40 L80,40" stroke="#ffffff" strokeDasharray="4,4" />
            <path d="M60,10 L60,70" stroke="#ff4254" strokeWidth="1.5" />
            <text x="60" y="30" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle">ŞERİT</text>
            <text x="60" y="40" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle">MERKEZİ</text>
          </pattern>
          
          <g id="lane-data-packet">
            <rect width="16" height="10" rx="2" fill="#4fc3f7" opacity="0.8" />
            <rect width="12" height="2" rx="1" fill="white" x="2" y="2" opacity="0.6" />
            <rect width="8" height="2" rx="1" fill="white" x="4" y="6" opacity="0.6" />
          </g>

          <marker id="lane-arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ffffff" />
          </marker>
        </defs>
        
        <rect width="900" height="650" fill="url(#lane-bg-gradient)" />
        
        <g opacity="0.1">
          <path d="M0,50 L900,50 M0,100 L900,100 M0,150 L900,150 M0,200 L900,200 M0,250 L900,250 M0,300 L900,300 M0,350 L900,350 M0,400 L900,400 M0,450 L900,450 M0,500 L900,500 M0,550 L900,550 M0,600 L900,600 M0,650 L900,650 M0,700 L900,700 M0,750 L900,750 M0,800 L900,800 M0,850 L900,850 M0,900 L900,900 M0,950 L900,950 M0,1000 L900,1000 M0,1050 L900,1050 M0,1100 L900,1100 M0,1150 L900,1150" stroke="#ffffff" strokeWidth="0.5" />
          <path d="M0,50 L900,50 M0,100 L900,100 M0,150 L900,150 M0,200 L900,200 M0,250 L900,250 M0,300 L900,300 M0,350 L900,350 M0,400 L900,400 M0,450 L900,450 M0,500 L900,500 M0,550 L900,550 M0,600 L900,600 M0,650 L900,650" stroke="#ffffff" strokeWidth="0.5" />
          <path d="M50,0 L50,650 M100,0 L100,650 M150,0 L150,650 M200,0 L200,650 M250,0 L250,650 M300,0 L300,650 M350,0 L350,650 M400,0 L400,650 M450,0 L450,650 M500,0 L500,650 M550,0 L550,650 M600,0 L600,650 M650,0 L650,650 M700,0 L700,650 M750,0 L750,650 M800,0 L800,650 M850,0 L850,650" stroke="#ffffff" strokeWidth="0.5" />
        </g>
        
        <text x="450" y="45" fontFamily="Arial, sans-serif" fontSize="24" fill="#ffffff" textAnchor="middle" fontWeight="bold">Şerit Takip Uyarı Sistemi</text>
        <text x="450" y="70" fontFamily="Arial, sans-serif" fontSize="16" fill="#4fc3f7" textAnchor="middle">Görüntü İşleme Algoritma Akışı</text>
        
        <g id="block-definitions">
          <rect id="block-rect-template" x="-65" y="-45" width="130" height="90" rx="5" ry="5" stroke="#ffffff" strokeWidth="1.5" />
          <text id="block-title-template" x="0" y="-25" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold"></text>
          <text id="block-subtitle-template" x="0" y="-10" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle"></text>
          <text id="block-detail1-template" x="0" y="25" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle"></text>
          <text id="block-detail2-template" x="0" y="38" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle"></text>
          <rect id="block-pattern-rect-template" x="-45" y="-5" width="90" height="40" opacity="0.9"/>
        </g>

        <g transform="translate(100, 160)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-block-gradient)" />
          <rect x="-55" y="-30" width="110" height="60" fill="url(#lane-cameraInput)" />
          <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="bold">Kamera Girişi</text>
          <text x="0" y="-35" fontFamily="Arial, sans-serif" fontSize="9" fill="#4fc3f7" textAnchor="middle">1280x960 USB Kamera</text>
        </g>
        
        <g transform="translate(280, 160)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-primary-gradient)" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Renk Uzayı</text>
          <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Dönüşümü</text>
          <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">LAB + HLS</text>
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">cv2.cvtColor()</text>
        </g>
        
        <g transform="translate(460, 160)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-primary-gradient)" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Gürültü Azaltma</text>
          <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">(Median + TOPHAT)</text>
          <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">5x5 Medyan Filtre</text>
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">TOP HAT Morfolojisi</text>
        </g>
        
        <g transform="translate(640, 160)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-primary-gradient)" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Perspektif</text>
          <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Dönüşümü</text>
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">getPerspectiveTransform()</text>
          <rect x="-40" y="5" width="80" height="30" fill="url(#lane-warpedImage)" opacity="0.9" />
        </g>

        <g transform="translate(820, 160)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-primary-gradient)" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">İkili Eşikleme</text>
          <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">(Renk Kanalları)</text>
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="8" fill="#ffffff" textAnchor="middle">HLS L-Knl + LAB B-Knl</text>
          <rect x="-40" y="5" width="80" height="30" fill="url(#lane-binaryMask)" opacity="0.9" />
        </g>
        
        <g transform="translate(820, 300)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-tertiary-gradient)" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Şerit Tespiti</text>
          <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">(Kayar Pencere)</text>
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Histogram Tepe Tespiti</text>
          <rect x="-40" y="5" width="80" height="30" fill="url(#lane-laneDetection)" opacity="0.9" />
        </g>
        
        <g transform="translate(640, 300)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-tertiary-gradient)" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Polinom Uydurma</text>
          <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">(ax²+bx+c)</text>
          <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">En Küçük Kareler</text>
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">np.polyfit()</text>
        </g>
        
        <g transform="translate(460, 300)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-tertiary-gradient)" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Zamansal</text>
          <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Yumuşatma</text>
          <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">7-Kare Ortalaması</text>
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="8" fill="#ffffff" textAnchor="middle">Ağırlıklı Filtre [0.4..0.025]</text>
        </g>
        
        <g transform="translate(280, 300)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-secondary-gradient)" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Şerit Sapması</text>
          <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">(Piksel → Metre)</text>
          <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">Kalibrasyon</text>
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">0.0293 m/px</text>
        </g>

        <g transform="translate(100, 300)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-secondary-gradient)" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Uyarı Kararı</text>
          <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">(Eşik Kontrolü)</text>
          <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">Eşik: 15cm</text>
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">2500Hz Uyarı Sinyali</text>
        </g>
        
        <g transform="translate(100, 440)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-secondary-gradient)" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Uyarı Ekranı</text>
          <rect x="-45" y="0" width="90" height="20" rx="3" fill="#770000" stroke="#ff0000" />
          <text x="0" y="12" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle" fontWeight="bold">ŞERİT İHLALİ</text>
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Nextion NX8048T070</text>
        </g>

        <g transform="translate(280, 440)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-block-gradient)" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Sesli Uyarı</text>
          <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">300ms Süre</text>
          <g transform="translate(0, 5)">
            <path d="M-15,5 L-5,-5 L-5,15 Z" fill="#ffffff" />
            <rect x="-20" y="0" width="5" height="10" fill="#ffffff" />
            <path d="M5,10 C15,0 15,0 5,-10 M10,15 C25,0 25,0 10,-15" stroke="#ffffff" strokeWidth="1.5" fill="none">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </path>
          </g>
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">8Ω 5W Hoparlör</text>
        </g>

        <g transform="translate(460, 440)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-block-gradient)" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">CAN Bus</text>
          <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Entegrasyonu</text>
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Dönüş Sinyali Durumu</text>
          <rect x="-35" y="8" width="70" height="15" rx="2" fill="#222222" stroke="#444444" />
          <text x="-20" y="19" fontFamily="monospace" fontSize="8" fill="#66bb6a">0x38F</text>
          <text x="10" y="19" fontFamily="monospace" fontSize="8" fill="#4fc3f7">00000100</text>
        </g>

        <g transform="translate(640, 440)">
          <use xlinkHref="#block-rect-template" fill="url(#lane-block-gradient)" />
          <rect x="-55" y="-25" width="110" height="55" fill="url(#lane-resultImage)" />
          <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="bold">Görselleştirme</text>
          <text x="0" y="-35" fontFamily="Arial, sans-serif" fontSize="9" fill="#4fc3f7" textAnchor="middle">%95.7 Doğruluk</text>
        </g>
        
        <g stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.7">
          <path d="M165,160 L215,160" markerEnd="url(#lane-arrowhead)" />
          <path d="M345,160 L395,160" markerEnd="url(#lane-arrowhead)" />
          <path d="M525,160 L575,160" markerEnd="url(#lane-arrowhead)" />
          <path d="M705,160 L755,160" markerEnd="url(#lane-arrowhead)" />
          <path d="M820,205 L820,255" markerEnd="url(#lane-arrowhead)" />
          <path d="M755,300 L705,300" markerEnd="url(#lane-arrowhead)" />
          <path d="M575,300 L525,300" markerEnd="url(#lane-arrowhead)" />
          <path d="M395,300 L345,300" markerEnd="url(#lane-arrowhead)" />
          <path d="M215,300 L165,300" markerEnd="url(#lane-arrowhead)" />
          <path d="M100,345 L100,395" markerEnd="url(#lane-arrowhead)" />
          <path d="M100,345 C100,370 200,370 280,370 L280,395" markerEnd="url(#lane-arrowhead)" strokeDasharray="4,4" />
          <path d="M100,345 C100,380 380,380 460,380 L460,395" markerEnd="url(#lane-arrowhead)" strokeDasharray="4,4" />
          <path d="M460,345 C460,375 560,375 640,375 L640,395" markerEnd="url(#lane-arrowhead)" strokeDasharray="4,4" />
        </g>
        
        <g>
          <use xlinkHref="#lane-data-packet">
            <animateMotion dur="10s" repeatCount="indefinite" path="M165,160 L215,160" />
          </use>
          <use xlinkHref="#lane-data-packet">
            <animateMotion dur="10s" repeatCount="indefinite" begin="1s" path="M345,160 L395,160" />
          </use>
          <use xlinkHref="#lane-data-packet">
            <animateMotion dur="10s" repeatCount="indefinite" begin="2s" path="M525,160 L575,160" />
          </use>
          <use xlinkHref="#lane-data-packet">
            <animateMotion dur="10s" repeatCount="indefinite" begin="3s" path="M705,160 L755,160" />
          </use>
          <use xlinkHref="#lane-data-packet">
            <animateMotion dur="10s" repeatCount="indefinite" begin="4s" path="M820,205 L820,255" />
          </use>
          <use xlinkHref="#lane-data-packet">
            <animateMotion dur="10s" repeatCount="indefinite" begin="5s" path="M755,300 L705,300" />
          </use>
          <use xlinkHref="#lane-data-packet">
            <animateMotion dur="10s" repeatCount="indefinite" begin="6s" path="M575,300 L525,300" />
          </use>
          <use xlinkHref="#lane-data-packet">
            <animateMotion dur="10s" repeatCount="indefinite" begin="7s" path="M395,300 L345,300" />
          </use>
          <use xlinkHref="#lane-data-packet">
            <animateMotion dur="10s" repeatCount="indefinite" begin="8s" path="M215,300 L165,300" />
          </use>
          <use xlinkHref="#lane-data-packet">
            <animateMotion dur="10s" repeatCount="indefinite" begin="9s" path="M100,345 L100,395" />
          </use>
        </g>
        
        <g transform="translate(450, 580)">
          <rect x="-400" y="-25" width="800" height="50" rx="5" ry="5" fill="rgba(20,20,40,0.7)" stroke="#ffffff" strokeWidth="1" />
          <text x="0" y="-8" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Sistem Performansı</text>
          <text x="-370" y="12" fontFamily="Arial, sans-serif" fontSize="11" fill="#4fc3f7" textAnchor="start">• 23 FPS İşleme</text>
          <text x="-230" y="12" fontFamily="Arial, sans-serif" fontSize="11" fill="#66bb6a" textAnchor="start">• %95.7 Tespit Doğruluğu</text>
          <text x="-50" y="12" fontFamily="Arial, sans-serif" fontSize="11" fill="#ffeb3b" textAnchor="start">• ±5.2 cm Sapma Hatası</text>
          <text x="120" y="12" fontFamily="Arial, sans-serif" fontSize="11" fill="#ff7043" textAnchor="start">• 98.7 ms Uyarı Gecikmesi</text>
          <text x="290" y="12" fontFamily="Arial, sans-serif" fontSize="11" fill="#ff4254" textAnchor="start">• %1.8 Yanlış Pozitif Oranı</text>
        </g>
      </svg>
    </div>
  );
};

// Traffic Sign Detection SVG Component
const TrafficSignDetectionDiagram = () => {
  return (
    <div className="svg-container mx-auto mt-10" style={{ maxWidth: "950px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 700" width="100%" height="100%">
        <defs>
          <linearGradient id="bg-gradient-ts" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a14" />
            <stop offset="100%" stopColor="#1a1b24" />
          </linearGradient>
          
          <linearGradient id="block-gradient-ts" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a3a" />
            <stop offset="100%" stopColor="#1a1a2a" />
          </linearGradient>
          
          <linearGradient id="model-gradient-ts" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4254" />
            <stop offset="100%" stopColor="#b71c1c" />
          </linearGradient>
          
          <linearGradient id="preprocess-gradient-ts" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4fc3f7" />
            <stop offset="100%" stopColor="#0277bd" />
          </linearGradient>
          
          <linearGradient id="postprocess-gradient-ts" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66bb6a" />
            <stop offset="100%" stopColor="#2e7d32" />
          </linearGradient>
          
          <linearGradient id="result-gradient-ts" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#aa00ff" />
            <stop offset="100%" stopColor="#4a148c" />
          </linearGradient>
          <linearGradient id="data-gradient-ts" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffeb3b" />
            <stop offset="100%" stopColor="#f57f17" />
          </linearGradient>
          <linearGradient id="train-gradient-ts" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4db6ac" />
            <stop offset="100%" stopColor="#00695c" />
          </linearGradient>
          
          <filter id="glow-ts" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="normal" />
          </filter>
          
          <pattern id="speedLimit-ts" patternUnits="userSpaceOnUse" width="60" height="60">
            <circle cx="30" cy="30" r="28" fill="#ffffff" stroke="#ff0000" strokeWidth="4" />
            <text x="30" y="38" fontFamily="Arial, sans-serif" fontSize="24" fill="#000000" textAnchor="middle" fontWeight="bold">50</text>
          </pattern>
          
          <pattern id="stopSign-ts" patternUnits="userSpaceOnUse" width="60" height="60">
            <path d="M15 5 L45 5 L55 15 L55 45 L45 55 L15 55 L5 45 L5 15 Z" fill="#ff0000" stroke="#ffffff" strokeWidth="3"/>
            <text x="30" y="35" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">DUR</text>
          </pattern>
          
          <pattern id="yieldSign-ts" patternUnits="userSpaceOnUse" width="60" height="60">
            <path d="M30,5 L55,55 L5,55 Z" fill="#ffffff" stroke="#ff0000" strokeWidth="4" />
            <path d="M30,12 L48,50 L12,50 Z" fill="#ffff00" stroke="#000000" strokeWidth="1"/>
            <text x="30" y="43" fontFamily="Arial, sans-serif" fontSize="8" fill="#000000" textAnchor="middle" fontWeight="bold">YOL VER</text>
          </pattern>
          
          <pattern id="processedImage-ts" patternUnits="userSpaceOnUse" width="100" height="70">
            <rect width="100" height="70" fill="#331a3f" />
            <rect x="10" y="10" width="50" height="50" rx="2" fill="none" stroke="#00ff00" strokeWidth="2" />
            <text x="35" y="35" fontFamily="monospace" fontSize="8" fill="#00ff00" textAnchor="middle">İŞARET</text>
            <text x="35" y="45" fontFamily="monospace" fontSize="6" fill="#00ff00" textAnchor="middle">%96</text>
            <rect x="65" y="25" width="25" height="25" rx="2" fill="none" stroke="#ffff00" strokeWidth="1" />
            <text x="77.5" y="40" fontFamily="monospace" fontSize="6" fill="#ffff00" textAnchor="middle">%88</text>
          </pattern>
          
          <pattern id="nnVisualization-ts" patternUnits="userSpaceOnUse" width="110" height="60">
            <rect width="110" height="60" fill="#111111" />
            <rect x="5" y="5" width="20" height="50" rx="3" fill="#4fc3f7" opacity="0.7"/> 
            <rect x="30" y="5" width="20" height="50" rx="3" fill="#7e57c2" opacity="0.7"/> 
            <rect x="55" y="5" width="20" height="50" rx="3" fill="#7e57c2" opacity="0.7"/> 
            <rect x="80" y="5" width="20" height="50" rx="3" fill="#ff4254" opacity="0.7"/> 
            <path d="M25,15 L30,10 M25,30 L30,25 M25,45 L30,40" stroke="#ffffff" strokeWidth="0.5" opacity="0.5"/>
            <path d="M50,10 L55,15 M50,25 L55,30 M50,40 L55,45" stroke="#ffffff" strokeWidth="0.5" opacity="0.5"/>
            <path d="M75,15 L80,10 M75,30 L80,25 M75,45 L80,40" stroke="#ffffff" strokeWidth="0.5" opacity="0.5"/>
            <circle cx="15" cy="30" r="4" fill="#ffffff">
              <animate attributeName="cy" values="15;45;15" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="65" cy="30" r="4" fill="#ffffff">
              <animate attributeName="cy" values="45;15;45" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
              <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
            </circle>
          </pattern>
          
          <g id="data-packet-ts">
            <rect width="16" height="10" rx="2" fill="#ff4254" opacity="0.8" />
            <rect width="12" height="2" rx="1" fill="white" x="2" y="2" opacity="0.6" />
            <rect width="8" height="2" rx="1" fill="white" x="4" y="6" opacity="0.6" />
          </g>

          <marker id="arrowhead-ts" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ffffff" />
          </marker>
        </defs>
        
        <rect width="900" height="700" fill="url(#bg-gradient-ts)" />
        
        <g opacity="0.1">
          <path d="M0,50 L900,50 M0,100 L900,100 M0,150 L900,150 M0,200 L900,200 M0,250 L900,250 M0,300 L900,300 M0,350 L900,350 M0,400 L900,400 M0,450 L900,450 M0,500 L900,500 M0,550 L900,550 M0,600 L900,600 M0,650 L900,650 M0,700 L900,700 M0,750 L900,750 M0,800 L900,800 M0,850 L900,850 M0,900 L900,900 M0,950 L900,950 M0,1000 L900,1000 M0,1050 L900,1050 M0,1100 L900,1100 M0,1150 L900,1150" stroke="#ffffff" strokeWidth="0.5" />
          <path d="M50,0 L50,700 M100,0 L100,700 M150,0 L150,700 M200,0 L200,700 M250,0 L250,700 M300,0 L300,700 M350,0 L350,700 M400,0 L400,700 M450,0 L450,700 M500,0 L500,700 M550,0 L550,700 M600,0 L600,700 M650,0 L650,700 M700,0 L700,700 M750,0 L750,700 M800,0 L800,700 M850,0 L850,700" stroke="#ffffff" strokeWidth="0.5" />
        </g>
        
        <text x="450" y="45" fontFamily="Arial, sans-serif" fontSize="24" fill="#ffffff" textAnchor="middle" fontWeight="bold">Trafik İşareti Tanıma Sistemi</text>
        <text x="450" y="70" fontFamily="Arial, sans-serif" fontSize="16" fill="#ff4254" textAnchor="middle">YOLOv5s Derin Öğrenme Mimarisi</text>

        <g id="block-definitions-ts">
          <rect id="block-rect-template-ts" x="-65" y="-45" width="130" height="90" rx="5" ry="5" stroke="#ffffff" strokeWidth="1.5" />
        </g>

        <g id="pipeline-ts">
          <g transform="translate(100, 160)">
            <use xlinkHref="#block-rect-template-ts" fill="url(#block-gradient-ts)" />
            <rect x="-55" y="-30" width="110" height="60" fill="#222222"/>
            <circle cx="0" cy="0" r="20" fill="#4fc3f7"/>
            <circle cx="0" cy="0" r="15" fill="#1a1b24"/>
            <circle cx="0" cy="0" r="10" fill="#4fc3f7"/>
            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="bold">Giriş</text>
            <text x="0" y="-35" fontFamily="Arial, sans-serif" fontSize="9" fill="#4fc3f7" textAnchor="middle">Kamera Görüntüsü</text>
          </g>
         
          <g transform="translate(280, 160)">
            <use xlinkHref="#block-rect-template-ts" fill="url(#preprocess-gradient-ts)" />
            <text x="0" y="-25" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Ön İşleme</text>
            <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Boyutlandır (640x640)</text>
            <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">CLAHE Normalizasyon</text>
            <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">[0-1] Ölçekleme</text>
            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="8" fill="#ffffff" textAnchor="middle">Float16/32</text>
          </g>
          
          <g transform="translate(460, 160)">
            <use xlinkHref="#block-rect-template-ts" fill="url(#model-gradient-ts)" />
            <text x="0" y="-25" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">YOLOv5s Modeli</text>
            <rect x="-55" y="-10" width="110" height="60" fill="url(#nnVisualization-ts)" />
            <text x="0" y="-35" fontFamily="Arial, sans-serif" fontSize="8" fill="#ffffff" textAnchor="middle">61 İşaret Sınıfı</text>
          </g>
          
          <g transform="translate(640, 160)">
            <use xlinkHref="#block-rect-template-ts" fill="url(#postprocess-gradient-ts)" />
            <text x="0" y="-25" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Son İşleme</text>
            <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Güven Eşiği: 0.5</text>
            <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">NMS Filtreleme</text>
            <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Kutu Birleştirme</text>
            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="8" fill="#ffffff" textAnchor="middle">(Bounding Box)</text>
          </g>
          
          <g transform="translate(820, 160)">
            <use xlinkHref="#block-rect-template-ts" fill="url(#result-gradient-ts)" />
            <rect x="-55" y="-30" width="110" height="60" fill="url(#processedImage-ts)" />
            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="bold">Çıkış</text>
            <text x="0" y="-35" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Tespit Edilen İşaretler</text>
          </g>

          <g stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.7">
            <path d="M165,160 L215,160" markerEnd="url(#arrowhead-ts)" />
            <path d="M345,160 L395,160" markerEnd="url(#arrowhead-ts)" />
            <path d="M525,160 L575,160" markerEnd="url(#arrowhead-ts)" />
            <path d="M705,160 L755,160" markerEnd="url(#arrowhead-ts)" />
          </g>

          <g>
            <use xlinkHref="#data-packet-ts">
              <animateMotion dur="5s" repeatCount="indefinite" path="M165,160 L215,160" />
            </use>
            <use xlinkHref="#data-packet-ts">
              <animateMotion dur="5s" repeatCount="indefinite" begin="1s" path="M345,160 L395,160" />
            </use>
            <use xlinkHref="#data-packet-ts">
              <animateMotion dur="5s" repeatCount="indefinite" begin="2s" path="M525,160 L575,160" />
            </use>
             <use xlinkHref="#data-packet-ts">
              <animateMotion dur="5s" repeatCount="indefinite" begin="3s" path="M705,160 L755,160" />
            </use>
          </g>
        </g>

        <g id="secondary-blocks-ts">
          <g transform="translate(180, 330)">
            <rect x="-130" y="-60" width="260" height="120" rx="10" ry="10" fill="url(#train-gradient-ts)" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" />
            <text x="0" y="-40" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Model Eğitim Süreci</text>
            <text x="-110" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Öğrenme Oranı: 0.01 (Kosinüs)</text>
            <text x="-110" y="0" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Yığın Boyutu: 16</text>
            <text x="-110" y="15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Optimizatör: SGD</text>
            <text x="-110" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Epok Sayısı: 800</text>
            <rect x="20" y="-10" width="90" height="40" rx="3" fill="rgba(0,0,0,0.3)"/>
            <text x="65" y="5" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle">Epoch: 799/800</text>
            <rect x="25" y="15" width="80" height="8" rx="2" fill="#333"/>
            <rect x="25" y="15" width="78" height="8" rx="2" fill="#66bb6a"/>
          </g>

          <g transform="translate(180, 490)">
            <rect x="-130" y="-60" width="260" height="120" rx="10" ry="10" fill="url(#data-gradient-ts)" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" />
            <text x="0" y="-40" fontFamily="Arial, sans-serif" fontSize="14" fill="#000000" textAnchor="middle" fontWeight="bold">Veri Zenginleştirme</text>
            <g transform="translate(-70, 10)">
              <rect x="-30" y="-30" width="60" height="60" fill="#000000" stroke="#444444" />
              <circle cx="0" cy="0" r="22" fill="#ff0000" />
              <path d="M-15,-15 L15,15 M-15,15 L15,-15" stroke="#ffffff" strokeWidth="3" />
            </g>
            <g transform="translate(0, 10)">
              <path d="M-30,0 L30,0" stroke="#000000" strokeWidth="2" markerEnd="url(#arrowhead-ts)" />
              <text x="0" y="-10" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">Zenginleştir</text>
            </g>
            <g transform="translate(70, 10)">
              <rect x="-30" y="-30" width="60" height="60" fill="#333333" stroke="#444444" />
              <g transform="rotate(15) scale(0.8)">
                <circle cx="0" cy="0" r="22" fill="#ff0000" opacity="0.8" />
                <path d="M-15,-15 L15,15 M-15,15 L15,-15" stroke="#ffffff" strokeWidth="3" />
              </g>
            </g>
          </g>

          <g transform="translate(460, 330)">
            <rect x="-130" y="-60" width="260" height="120" rx="10" ry="10" fill="url(#result-gradient-ts)" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" />
            <text x="0" y="-40" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Sistem Entegrasyonu</text>
            <text x="-110" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• CAN ID: 0x420, DLC: 8 byte</text>
            <text x="-110" y="0" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="start">• Veri: [İşaretID][Güven][X][Y][...]</text>
            <text x="-110" y="15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Güncelleme Hızı: 15 FPS</text>
            <rect x="-70" y="30" width="140" height="15" rx="3" fill="#222222" stroke="#aa00ff" />
            <rect x="-68" y="32" width="16" height="11" fill="#aa00ff" opacity="0.8">
              <animate attributeName="x" values="-68;54;-68" dur="3s" repeatCount="indefinite" />
            </rect>
          </g>

          <g transform="translate(460, 490)">
            <rect x="-130" y="-60" width="260" height="120" rx="10" ry="10" fill="url(#model-gradient-ts)" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" />
            <text x="0" y="-40" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Sistem Performansı</text>
            <text x="-110" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Doğruluk: %91.75</text>
            <text x="-110" y="0" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Çıkarım Süresi: 20ms</text>
            <text x="-110" y="15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• FPS: 15-20 (RPi 5)</text>
            <text x="20" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Model Boyutu: 13.7MB</text>
            <text x="20" y="0" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• TensorRT Optimize</text>
            <text x="20" y="15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Int8 Nicemleme</text>
          </g>

          <g transform="translate(740, 330)">
            <rect x="-130" y="-60" width="260" height="280" rx="10" ry="10" fill="url(#block-gradient-ts)" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" />
            <text x="0" y="-40" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Örnek İşaret Sınıfları</text>
            <text x="0" y="-25" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">(Toplam 61)</text>
            <g transform="translate(-65, 15)">
              <rect x="-30" y="-30" width="60" height="60" fill="url(#speedLimit-ts)" />
              <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Hız Limiti</text>
            </g>
            <g transform="translate(65, 15)">
               <rect x="-30" y="-30" width="60" height="60" fill="url(#stopSign-ts)" />
               <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Dur İşareti</text>
            </g>
             <g transform="translate(-65, 115)">
               <rect x="-30" y="-30" width="60" height="60" fill="url(#yieldSign-ts)" />
               <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Yol Ver</text>
            </g>
            <g transform="translate(65, 115)">
              <circle cx="0" cy="0" r="25" fill="#ffffff" stroke="#ff0000" strokeWidth="4" />
              <path d="M-15,0 L15,0" stroke="#000000" strokeWidth="5" />
               <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Girilmez</text>
            </g>
             <g transform="translate(-65, 215)">
              <path d="M0,-25 L25,25 L-25,25 Z" fill="#ffffff" stroke="#ff0000" strokeWidth="4" />
              <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="16" fill="#000000" textAnchor="middle" fontWeight="bold">!</text>
              <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Uyarı</text>
            </g>
            <g transform="translate(65, 215)">
               <circle cx="0" cy="0" r="25" fill="#0000ff" />
               <path d="M-15,0 L0,-15 L15,0 L0,15 Z" fill="#ffffff" />
               <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">Mecburi Yön</text>
            </g>
          </g>
        </g>

        <g id="footer-ts">
           <g transform="translate(450, 650)">
              <rect x="-400" y="-25" width="800" height="50" rx="5" ry="5" fill="rgba(20,20,40,0.7)" stroke="#ffffff" strokeWidth="1" />
              <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Gelecek İyileştirmeler</text>
              <text x="-360" y="15" fontFamily="Arial, sans-serif" fontSize="10" fill="#4fc3f7" textAnchor="start">• Gece/Hava Adaptasyonu</text>
              <text x="-180" y="15" fontFamily="Arial, sans-serif" fontSize="10" fill="#66bb6a" textAnchor="start">• MobileNetV3 Alternatifi</text>
              <text x="-10" y="15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffeb3b" textAnchor="start">• Zamansal Filtreleme</text>
              <text x="150" y="15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ff7043" textAnchor="start">• GPS Entegrasyonu</text>
              <text x="300" y="15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ff4254" textAnchor="start">• Gerçek Zamanlı Telemetri</text>
           </g>
         </g>

          <g transform="translate(840, 60)">
          <image href={`${process.env.PUBLIC_URL}/logo_only.svg`} width="50" height="50" x="-25" y="-25" />
        </g>
      </svg>
    </div>
  );
};

// Cruise Control System SVG Component
const CruiseControlSystemDiagram = () => {
  return (
    <div className="svg-container mx-auto mt-10" style={{ maxWidth: "950px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 650" width="100%" height="100%">
        <defs>
          {/* Gradients */}
          <linearGradient id="cc-bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a14" />
            <stop offset="100%" stopColor="#1a1b24" />
          </linearGradient>
           
          <linearGradient id="cc-block-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a3a" />
            <stop offset="100%" stopColor="#1a1a2a" />
          </linearGradient>
           
          <linearGradient id="cc-controller-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#009688" />
            <stop offset="100%" stopColor="#004d40" />
          </linearGradient>
           
          <linearGradient id="cc-sensor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4fc3f7" />
            <stop offset="100%" stopColor="#0277bd" />
          </linearGradient>
           
          <linearGradient id="cc-motor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4254" />
            <stop offset="100%" stopColor="#b71c1c" />
          </linearGradient>
           
          <linearGradient id="cc-bus-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffeb3b" />
            <stop offset="100%" stopColor="#fbc02d" />
          </linearGradient>
           
          <linearGradient id="cc-safety-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7043" />
            <stop offset="100%" stopColor="#e64a19" />
          </linearGradient>
           
          {/* Filters */}
          <filter id="cc-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="normal" />
          </filter>
           
          {/* PWM Visualization Pattern */}
          <pattern id="cc-pwmPattern" patternUnits="userSpaceOnUse" width="100" height="40">
            <rect width="100" height="40" fill="#111111" />
            <path d="M0,30 L10,30 L10,10 L30,10 L30,30 L50,30 L50,10 L70,10 L70,30 L90,30 L90,10 L100,10"  
                  stroke="#00ff00" strokeWidth="2" fill="none" />
          </pattern>
           
          {/* PID Controller Pattern */}
          <pattern id="cc-pidControllerPattern" patternUnits="userSpaceOnUse" width="100" height="60">
            <rect width="100" height="60" fill="#111111" />
            {/* P component */}
            <path d="M10,30 L25,30" stroke="#ff4254" strokeWidth="1.5" />
            <rect x="25" y="25" width="10" height="10" fill="#ff4254" />
            <text x="30" y="33" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle">P</text>
            <path d="M35,30 L45,30" stroke="#ff4254" strokeWidth="1.5" />
             
            {/* I component */}
            <path d="M10,45 L25,45" stroke="#4fc3f7" strokeWidth="1.5" />
            <rect x="25" y="40" width="10" height="10" fill="#4fc3f7" />
            <text x="30" y="48" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle">I</text>
            <path d="M35,45 L45,45" stroke="#4fc3f7" strokeWidth="1.5" />
             
            {/* D component */}
            <path d="M10,15 L25,15" stroke="#66bb6a" strokeWidth="1.5" />
            <rect x="25" y="10" width="10" height="10" fill="#66bb6a" />
            <text x="30" y="18" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle">D</text>
            <path d="M35,15 L45,15" stroke="#66bb6a" strokeWidth="1.5" />
             
            {/* Sum junction */}
            <circle cx="55" cy="30" r="5" fill="none" stroke="#ffffff" strokeWidth="1" />
            <text x="55" y="33" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle">Σ</text>
            <path d="M45,15 C50,15 50,25 55,25" stroke="#66bb6a" strokeWidth="1.5" />
            <path d="M45,30 L50,30" stroke="#ff4254" strokeWidth="1.5" />
            <path d="M45,45 C50,45 50,35 55,35" stroke="#4fc3f7" strokeWidth="1.5" />
             
            {/* Output */}
            <path d="M60,30 L90,30" stroke="#ffffff" strokeWidth="1.5" />
            <polygon points="85,26 90,30 85,34" fill="#ffffff" />
          </pattern>
           
          {/* Speed Graph Pattern */}
          <pattern id="cc-speedGraphPattern" patternUnits="userSpaceOnUse" width="100" height="60">
            <rect width="100" height="60" fill="#111111" />
            {/* Axes */}
            <path d="M10,50 L90,50 M10,10 L10,50" stroke="#444444" strokeWidth="1" />
            <text x="90" y="48" fontFamily="monospace" fontSize="6" fill="#888888">zaman</text>
            <text x="10" y="10" fontFamily="monospace" fontSize="6" fill="#888888">hız</text>
             
            {/* Target speed line */}
            <path d="M10,25 L90,25" stroke="#666666" strokeWidth="1" strokeDasharray="2,2" />
            <text x="12" y="25" fontFamily="monospace" fontSize="6" fill="#666666">hedef</text>
             
            {/* Actual speed curve */}
            <path d="M10,45 C30,45 35,40 40,38 C45,36 50,30 55,27 C60,24 65,25 70,25 C75,25 80,26 85,25 C90,24 95,25 100,25"  
                  stroke="#4fc3f7" strokeWidth="1.5" fill="none" />
          </pattern>
           
          {/* Motor Control Pattern */}
          <pattern id="cc-motorControlPattern" patternUnits="userSpaceOnUse" width="100" height="60">
            <rect width="100" height="60" fill="#111111" />
            {/* Motor symbol */}
            <circle cx="50" cy="30" r="15" fill="none" stroke="#ff4254" strokeWidth="1.5" />
            <text x="50" y="34" fontFamily="monospace" fontSize="12" fill="#ff4254" textAnchor="middle">M</text>
             
            {/* Rotation indication */}
            <path d="M65,30 A15,15 0 0 1 50,45" stroke="#ffffff" strokeWidth="1" fill="none" />
            <polygon points="50,47 52,42 48,42" fill="#ffffff" />
             
            {/* Power lines */}
            <path d="M20,20 L35,20" stroke="#ff4254" strokeWidth="2" />
            <path d="M20,40 L35,40" stroke="#0000ff" strokeWidth="2" />
             
            {/* MOSFET symbols */}
            <rect x="15" y="15" width="10" height="10" fill="#444444" stroke="#666666" />
            <rect x="15" y="35" width="10" height="10" fill="#444444" stroke="#666666" />
          </pattern>

          {/* Signal Pulse */}
          <g id="cc-signal-pulse">
            <rect width="14" height="8" rx="2" fill="#ffffff" opacity="0.8" />
          </g>

          {/* Arrowhead marker */}
          <marker id="cc-arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ffffff" />
          </marker>
        </defs>
         
        {/* Background */}
        <rect width="900" height="650" fill="url(#cc-bg-gradient)" />
         
        {/* Grid lines for technical look */}
        <g opacity="0.1">
          <path d="M0,50 L900,50 M0,100 L900,100 M0,150 L900,150 M0,200 L900,200 M0,250 L900,250 M0,300 L900,300 M0,350 L900,350 M0,400 L900,400 M0,450 L900,450 M0,500 L900,500 M0,550 L900,550 M0,600 L900,600" stroke="#ffffff" strokeWidth="1" />
          <path d="M50,0 L50,650 M100,0 L100,650 M150,0 L150,650 M200,0 L200,650 M250,0 L250,650 M300,0 L300,650 M350,0 L350,650 M400,0 L400,650 M450,0 L450,650 M500,0 L500,650 M550,0 L550,650 M600,0 L600,650 M650,0 L650,650 M700,0 L700,650 M750,0 L750,650 M800,0 L800,650 M850,0 L850,650" stroke="#ffffff" strokeWidth="1" />
        </g>
         
        {/* PID Equation */}
        <g transform="translate(450, 130)">
          <rect x="-250" y="-40" width="500" height="80" rx="10" ry="10" fill="rgba(0,0,0,0.3)" stroke="#ffffff" strokeWidth="1" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">PID Kontrol Denklemi</text>
          <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="16" fill="#ffffff" textAnchor="middle">Kp × e(t) + Ki × ∫e(t)dt + Kd × de(t)/dt = u(t)</text>
          <text x="-200" y="20" fontFamily="Arial, sans-serif" fontSize="16" fill="#ff4254" textAnchor="middle">{"  }"}</text>
          <text x="205" y="20" fontFamily="Arial, sans-serif" fontSize="16" fill="#ff4254" textAnchor="middle">{"{  "}</text>
        </g>
        
        {/* Title */}
        <text x="450" y="50" fontFamily="Arial, sans-serif" fontSize="24" fill="#ffffff" textAnchor="middle" fontWeight="bold">Seyir Kontrol Sistemi</text>
        <text x="450" y="75" fontFamily="Arial, sans-serif" fontSize="16" fill="#009688" textAnchor="middle">Gerçek Zamanlı PID Kontrol Mimarisi</text>

        {/* Connecting lines - These are positioned BEFORE the components to ensure components appear on top */}
        <g stroke="#ffffff" strokeWidth="1.5" fill="none">
          {/* Main process flow */}
          <path d="M200,250 L280,250" stroke="#4fc3f7" strokeDasharray="5,3" />
          <path d="M380,250 L460,250" stroke="#009688" />
          <path d="M560,250 L640,250" stroke="#ff4254" />
          <path d="M740,250 L820,250" stroke="#ffffff" />
           
          {/* Feedback loop */}
          <path d="M870,300 C870,350 800,380 740,380 C680,380 560,380 560,380" stroke="#ffffff" strokeDasharray="3,2" />
          <path d="M560,380 L460,380" stroke="#ffffff" strokeDasharray="3,2" />
          <path d="M460,380 L380,380" stroke="#ffffff" strokeDasharray="3,2" />
          <path d="M380,380 L280,380" stroke="#ffffff" strokeDasharray="3,2" />
          <path d="M280,380 C230,380 200,350 200,300" stroke="#ffffff" strokeDasharray="3,2" />
           
          {/* Vertical connections */}
          <path d="M150,300 L150,380" stroke="#ffeb3b" />
          <path d="M330,300 L330,380" stroke="#4fc3f7" />
          <path d="M510,300 L510,380" stroke="#009688" />
          <path d="M690,300 L690,380" stroke="#ff7043" />
          <path d="M870,300 L870,380" stroke="#ffffff" />
           
          {/* CAN bus network */}
          <path d="M200,430 L280,430" stroke="#ffeb3b" />
          <path d="M380,430 L460,430" stroke="#ffeb3b" />
          <path d="M560,430 L640,430" stroke="#ffeb3b" />
          <path d="M740,430 L820,430" stroke="#ffeb3b" />
        </g>

        {/* System components - Center Row */}
        {/* Speed Sensor */}
        <g transform="translate(150, 250)">
          <rect x="-50" y="-50" width="100" height="100" rx="10" ry="10" fill="url(#cc-sensor-gradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="0" y="-30" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Hall Sensörü</text>
          <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Hız Algılama</text>
           
          {/* Hall sensor icon */}
          <circle cx="0" cy="5" r="20" fill="none" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M-15,5 L15,5" stroke="#ffffff" strokeWidth="2" />
          <path d="M-5,-5 L-5,15 M5,-5 L5,15" stroke="#ffffff" strokeWidth="1.5" />
           
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">100-2500 Hz PWM</text>
          <text x="0" y="-65" fontFamily="Arial, sans-serif" fontSize="10" fill="#4fc3f7" textAnchor="middle">LM393 Karşılaştırıcı</text>
        </g>
         
        {/* Signal Conditioner */}
        <g transform="translate(330, 250)">
          <rect x="-50" y="-50" width="100" height="100" rx="10" ry="10" fill="url(#cc-controller-gradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="0" y="-30" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Sinyal</text>
          <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Koşullandırma</text>
           
          {/* Signal graph */}
          <rect x="-30" y="-10" width="60" height="30" fill="url(#cc-pwmPattern)" />
           
          <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">12-bit Çözünürlük</text>
          <text x="0" y="-65" fontFamily="Arial, sans-serif" fontSize="10" fill="#009688" textAnchor="middle">STM32F407VGT6</text>
        </g>
         
        {/* PID Controller */}
        <g transform="translate(510, 250)">
          <rect x="-50" y="-50" width="100" height="100" rx="10" ry="10" fill="url(#cc-controller-gradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="0" y="-30" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">PID</text>
          <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Kontrolcü</text>
           
          {/* PID visualization */}
          <rect x="-40" y="-10" width="80" height="50" fill="url(#cc-pidControllerPattern)" />
           
          <text x="0" y="50" fontFamily="Arial, sans-serif" fontSize="8" fill="#ffffff" textAnchor="middle">P=3.5, I=0.2, D=0.8</text>
          <text x="0" y="-65" fontFamily="Arial, sans-serif" fontSize="10" fill="#009688" textAnchor="middle">1kHz Güncelleme Hızı</text>
        </g>
         
        {/* Motor Driver */}
        <g transform="translate(690, 250)">
          <rect x="-50" y="-50" width="100" height="100" rx="10" ry="10" fill="url(#cc-motor-gradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="0" y="-30" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Motor</text>
          <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Sürücü</text>
           
          {/* Motor control visualization */}
          <rect x="-40" y="-10" width="80" height="50" fill="url(#cc-motorControlPattern)" />
           
          <text x="0" y="50" fontFamily="Arial, sans-serif" fontSize="8" fill="#ffffff" textAnchor="middle">3 Fazlı FOC, 120A</text>
          <text x="0" y="-65" fontFamily="Arial, sans-serif" fontSize="10" fill="#ff4254" textAnchor="middle">MOSFET Dönüştürücü</text>
        </g>
         
        {/* Wheel/Vehicle */}
        <g transform="translate(870, 250)">
          <rect x="-50" y="-50" width="100" height="100" rx="10" ry="10" fill="url(#cc-block-gradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="0" y="-30" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Araç</text>
          <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Hareket</text>
           
          {/* Wheel visualization */}
          <circle cx="0" cy="10" r="25" fill="#444444" stroke="#666666" strokeWidth="2" />
          <circle cx="0" cy="10" r="15" fill="none" stroke="#888888" strokeWidth="1" />
          <circle cx="0" cy="10" r="5" fill="#666666" />
           
          {/* Rotation animation */}
          <g>
            <path d="M0,-10 L-3,-5 L3,-5 Z" fill="#ffffff">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate"
                from="0 0 10" to="360 0 10" dur="3s" repeatCount="indefinite" />
            </path>
          </g>
           
          <text x="0" y="45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Araç Dinamiği</text>
        </g>
         
        {/* System components - Bottom Row */}
        {/* CAN Bus Transceiver */}
        <g transform="translate(150, 430)">
          <rect x="-50" y="-50" width="100" height="100" rx="10" ry="10" fill="url(#cc-bus-gradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="0" y="-30" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">CAN Veri Yolu</text>
          <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Arayüzü</text>
           
          {/* CAN bus icon */}
          <rect x="-35" y="-5" width="70" height="14" rx="2" fill="#111111" stroke="#ffeb3b" />
          <text x="-25" y="5" fontFamily="monospace" fontSize="10" fill="#ffeb3b">0x210</text>
          <text x="20" y="5" fontFamily="monospace" fontSize="8" fill="#ffffff">DLC:8</text>
           
          <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="8" fill="#111111" textAnchor="middle" fontWeight="bold">[Kontrol][Tork][Hız][Durum]</text>
          <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">500kbps Veri Hızı</text>
          <text x="0" y="-65" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffeb3b" textAnchor="middle">TJA1050 + MCP2515</text>
        </g>
         
        {/* Battery Management */}
        <g transform="translate(330, 430)">
          <rect x="-50" y="-50" width="100" height="100" rx="10" ry="10" fill="url(#cc-sensor-gradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="0" y="-30" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Batarya</text>
          <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Yönetimi</text>
           
          {/* Battery icon */}
          <rect x="-20" y="-5" width="40" height="20" rx="2" fill="#333333" stroke="#4fc3f7" />
          <rect x="20" y="2" width="5" height="6" rx="1" fill="#4fc3f7" />
           
          {/* Charge level animation */}
          <rect x="-17" y="-2" width="34" height="14" rx="1" fill="#4fc3f7" opacity="0.7">
            <animate attributeName="width" values="5;34;5" dur="10s" repeatCount="indefinite" />
          </rect>
           
          <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">SOC İzleme</text>
          <text x="0" y="45" fontFamily="Arial, sans-serif" fontSize="8" fill="#ffffff" textAnchor="middle">12V-48V DC Aralığı</text>
          <text x="0" y="-65" fontFamily="Arial, sans-serif" fontSize="10" fill="#4fc3f7" textAnchor="middle">RS485 Protokolü</text>
        </g>
         
        {/* Response Optimizer */}
        <g transform="translate(510, 430)">
          <rect x="-50" y="-50" width="100" height="100" rx="10" ry="10" fill="url(#cc-controller-gradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="0" y="-30" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Tepki</text>
          <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Optimizasyonu</text>
           
          {/* Graph visualization */}
          <rect x="-40" y="-5" width="80" height="40" fill="url(#cc-speedGraphPattern)" />
           
          <text x="0" y="45" fontFamily="Arial, sans-serif" fontSize="8" fill="#ffffff" textAnchor="middle">{"±2km/s Tolerans, <5s Yanıt"}</text>
          <text x="0" y="-65" fontFamily="Arial, sans-serif" fontSize="10" fill="#009688" textAnchor="middle">0.5 m/s² Maks. İvmelenme</text>
        </g>
         
        {/* Safety Monitor */}
        <g transform="translate(690, 430)">
          <rect x="-50" y="-50" width="100" height="100" rx="10" ry="10" fill="url(#cc-safety-gradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="0" y="-30" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Güvenlik</text>
          <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Monitörü</text>
           
          {/* Safety icon */}
          <path d="M0,-15 L20,15 L-20,15 Z" fill="none" stroke="#ff7043" strokeWidth="2" />
          <text x="0" y="8" fontFamily="Arial, sans-serif" fontSize="14" fill="#ff7043" textAnchor="middle" fontWeight="bold">!</text>
           
          <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">• Voltaj (&lt;10.5V)</text>
          <text x="0" y="42" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle">• Sıcaklık (&gt;85°C)</text>
          <text x="0" y="-65" fontFamily="Arial, sans-serif" fontSize="10" fill="#ff7043" textAnchor="middle">50ms Acil Kapatma</text>
        </g>
         
        {/* Telemetry Output */}
        <g transform="translate(870, 430)">
          <rect x="-50" y="-50" width="100" height="100" rx="10" ry="10" fill="url(#cc-block-gradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="0" y="-30" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Telemetri</text>
          <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Verileri</text>
           
          {/* Data visualization */}
          <rect x="-35" y="-5" width="70" height="40" rx="3" fill="#111111" stroke="#444444" />
          <text x="0" y="5" fontFamily="monospace" fontSize="8" fill="#00ff00" textAnchor="middle">HIZ: 42 KM/S</text>
          <text x="0" y="15" fontFamily="monospace" fontSize="8" fill="#ffeb3b" textAnchor="middle">AKIM: 18.4A</text>
          <text x="0" y="25" fontFamily="monospace" fontSize="8" fill="#4fc3f7" textAnchor="middle">SICAKLIK: 48°C</text>
           
          <text x="0" y="45" fontFamily="Arial, sans-serif" fontSize="8" fill="#ffffff" textAnchor="middle">ACS712 Akım Sensörü</text>
          <text x="0" y="-65" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">SPI Protokolü</text>
        </g>
         
        {/* Hardware Info */}
        <g transform="translate(150, 570)">
          <rect x="-100" y="-40" width="200" height="80" rx="5" ry="5" fill="url(#cc-block-gradient)" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Mikrodenetleyici</text>
          <text x="0" y="0" fontFamily="Arial, sans-serif" fontSize="12" fill="#009688" textAnchor="middle">STM32F407VGT6</text>
          <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">168MHz, 1MB Flash, 192KB RAM</text>
        </g>
         
        {/* Operating Parameters */}
        <g transform="translate(450, 570)">
          <rect x="-150" y="-40" width="300" height="80" rx="5" ry="5" fill="url(#cc-block-gradient)" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Çalışma Parametreleri</text>
           
          <text x="-130" y="0" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• PWM Frekansı: 20kHz</text>
          <text x="-130" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Çözünürlük: 10-bit (0-1023)</text>
           
          <text x="20" y="0" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Kontrol Döngüsü: 100ms</text>
          <text x="20" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• İntegral Limiti: ±25</text>
        </g>
         
        {/* Safety Features */}
        <g transform="translate(750, 570)">
          <rect x="-150" y="-40" width="300" height="80" rx="5" ry="5" fill="url(#cc-block-gradient)" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
          <text x="0" y="-20" fontFamily="Arial, sans-serif" fontSize="14" fill="#ff7043" textAnchor="middle" fontWeight="bold">Güvenlik Özellikleri</text>
           
          <text x="-130" y="0" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Düşük Voltaj Koruması: &lt;10.5V</text>
          <text x="-130" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Termal Koruma: &gt;85°C</text>
           
          <text x="20" y="0" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• Akım Limiti: &gt;100A</text>
          <text x="20" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="start">• İvmelenme Limiti: 0.5 m/s²</text>
        </g>

        {/* Animated signal pulses */}
        <g>
          <use xlinkHref="#cc-signal-pulse">
            <animateMotion dur="1.5s" repeatCount="indefinite" path="M200,250 L270,250" />
          </use>
           
          <use xlinkHref="#cc-signal-pulse">
            <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.3s" path="M380,250 L450,250" />
          </use>
           
          <use xlinkHref="#cc-signal-pulse">
            <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.6s" path="M560,250 L630,250" />
          </use>
           
          <use xlinkHref="#cc-signal-pulse">
            <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.9s" path="M740,250 L810,250" />
          </use>
           
          <use xlinkHref="#cc-signal-pulse">
            <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M870,300 C870,350 800,380 740,380 C680,380 560,380 560,380" />
          </use>
           
          <use xlinkHref="#cc-signal-pulse">
            <animateMotion dur="1.5s" repeatCount="indefinite" begin="3s" path="M560,380 L470,380" />
          </use>
           
          <use xlinkHref="#cc-signal-pulse">
            <animateMotion dur="1.5s" repeatCount="indefinite" begin="3.5s" path="M380,380 L290,380" />
          </use>
           
          <use xlinkHref="#cc-signal-pulse">
            <animateMotion dur="1.5s" repeatCount="indefinite" begin="4s" path="M280,380 C230,380 200,350 200,300" />
          </use>
        </g>
         
        {/* CAN Bus animated signal */}
        <g>
          <circle cx="150" cy="430" r="3" fill="#ffeb3b">
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
          </circle>
           
          <circle cx="330" cy="430" r="3" fill="#ffeb3b">
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" begin="0.2s" />
          </circle>
           
          <circle cx="510" cy="430" r="3" fill="#ffeb3b">
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" begin="0.4s" />
          </circle>
           
          <circle cx="690" cy="430" r="3" fill="#ffeb3b">
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" begin="0.6s" />
          </circle>
           
          <circle cx="870" cy="430" r="3" fill="#ffeb3b">
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" begin="0.8s" />
          </circle>
        </g>
         
        {/* Voltaris Logo */}
        <g transform="translate(50, 600)">
          <circle cx="0" cy="0" r="20" fill="none" stroke="#ff4254" strokeWidth="2" />
          <circle cx="0" cy="0" r="15" fill="none" stroke="#ff4254" strokeWidth="1" />
          <path d="M-5,-10 L0,10 L5,-10" fill="none" stroke="#ff4254" strokeWidth="2" />
          <path d="M-10,0 L-18,0 M10,0 L18,0" stroke="#ff4254" strokeWidth="1.5" />
          <text x="30" y="5" fontFamily="Arial, sans-serif" fontSize="16" fill="#ff4254" fontWeight="bold">VOLTARIS</text>
        </g>
      </svg>
    </div>
  );
};

// Blind Spot Detection System SVG Component
export const BlindSpotDetectionDiagram = () => {
  return (
    <div className="svg-container mx-auto" style={{ maxWidth: "950px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 1400" width="100%" height="100%" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
        <defs>
          {/* Enhanced gradients with more stops */}
          <linearGradient id="bs-bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f0f1a" />
            <stop offset="40%" stopColor="#161626" />
            <stop offset="60%" stopColor="#1a1a2a" />
            <stop offset="100%" stopColor="#1e1e2e" />
            <animate attributeName="x1" values="0%;10%;0%" dur="30s" repeatCount="indefinite" />
            <animate attributeName="y1" values="0%;5%;0%" dur="30s" repeatCount="indefinite" />
          </linearGradient>
          
          {/* Enhanced radar display gradient */}
          <linearGradient id="bs-radar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
            <animate attributeName="x1" values="0%;10%;0%" dur="20s" repeatCount="indefinite" />
          </linearGradient>
          
          {/* Enhanced glow for active elements */}
          <filter id="bs-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="normal" />
          </filter>
          
          {/* Enhanced data pulse filter */}
          <filter id="bs-data-pulse" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 8 -3" result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="normal" />
          </filter>
          
          {/* Enhanced warning pulse */}
          <filter id="bs-warning-pulse" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 1  0 1 0 0 0.5  0 0 1 0 0  0 0 0 10 -5" result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="normal" />
          </filter>

          {/* Data packet for animation */}
          <g id="bs-data-packet">
            <rect width="12" height="8" rx="2" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
            </rect>
          </g>
          
          {/* Warning packet for animation */}
          <g id="bs-warning-packet">
            <rect width="12" height="8" rx="2" fill="#ef4444" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="0.5s" repeatCount="indefinite" />
            </rect>
          </g>
          
          {/* Enhanced radar wave animation */}
          <circle id="bs-radar-wave" cx="0" cy="0" r="0" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.8">
            <animate attributeName="r" values="0;100" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Target blip for animation */}
          <circle id="bs-target-blip" cx="0" cy="0" r="4" fill="#ef4444" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
            <animate attributeName="r" values="4;6;4" dur="1s" repeatCount="indefinite" />
          </circle>
          
          {/* Particle animation for detection zone */}
          <circle id="bs-detection-particle" cx="0" cy="0" r="1.5" fill="#3b82f6" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Advanced math visualization pattern */}
          <pattern id="bs-math-pattern" patternUnits="userSpaceOnUse" width="200" height="100">
            <rect width="200" height="100" fill="#070d19" />
            
            {/* Coordinate system */}
            <path d="M20,50 L180,50 M100,10 L100,90" stroke="#475569" strokeWidth="0.5" opacity="0.6" />
            
            {/* Animated sine wave */}
            <path d="M20,50 C40,30 60,70 80,50 C100,30 120,70 140,50 C160,30 180,70 200,50" 
                  stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.8">
              <animate attributeName="d" 
                       values="M20,50 C40,30 60,70 80,50 C100,30 120,70 140,50 C160,30 180,70 200,50;
                               M20,50 C40,70 60,30 80,50 C100,70 120,30 140,50 C160,70 180,30 200,50;
                               M20,50 C40,30 60,70 80,50 C100,30 120,70 140,50 C160,30 180,70 200,50" 
                       dur="5s" repeatCount="indefinite" />
            </path>
            
            {/* Animated cosine wave */}
            <path d="M20,50 C40,70 60,30 80,50 C100,70 120,30 140,50 C160,70 180,30 200,50" 
                  stroke="#ef4444" strokeWidth="1" fill="none" opacity="0.6">
              <animate attributeName="d" 
                       values="M20,50 C40,70 60,30 80,50 C100,70 120,30 140,50 C160,70 180,30 200,50;
                               M20,50 C40,30 60,70 80,50 C100,30 120,70 140,50 C160,30 180,30 200,50;
                               M20,50 C40,70 60,30 80,50 C100,70 120,30 140,50 C160,70 180,30 200,50" 
                       dur="5s" repeatCount="indefinite" />
            </path>
            
            {/* Formula text */}
            <text x="100" y="25" fontFamily="monospace" fontSize="8" fill="#94a3b8" textAnchor="middle">
              R(θ,φ) = P·G·σ·λ²/(4π)³·R⁴
              <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
            </text>
            
            {/* Animated data points */}
            <circle cx="50" cy="40" r="2" fill="#3b82f6">
              <animate attributeName="cy" values="40;60;40" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="150" cy="60" r="2" fill="#ef4444">
              <animate attributeName="cy" values="60;40;60" dur="3s" repeatCount="indefinite" />
            </circle>
          </pattern>
          
          {/* Arrow markers for data flow */}
          <marker id="bs-arrow-blue" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
          </marker>
          
          <marker id="bs-arrow-red" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
          </marker>
          
          <marker id="bs-arrow-white" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ffffff" />
          </marker>
          
          {/* Particle effect filter */}
          <filter id="bs-particle-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          
          {/* Pulse animation filter */}
          <filter id="bs-pulse-animation" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 10 -5" result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="normal" />
          </filter>
        </defs>
        
        {/* Background with subtle animation */}
        <rect width="950" height="1400" fill="url(#bs-bg-gradient)" />
        
        {/* Enhanced grid with subtle animation */}
        <g opacity="0.1">
          <g>
            {[...Array(24)].map((_, i) => (
              <path key={`h-${i}`} d={`M0,${i * 50} L950,${i * 50}`} stroke="#94a3b8" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.1;0.2;0.1" dur={`${20 + i % 5}s`} repeatCount="indefinite" />
              </path>
            ))}
            
            {[...Array(19)].map((_, i) => (
              <path key={`v-${i}`} d={`M${i * 50},0 L${i * 50},1400`} stroke="#94a3b8" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.1;0.2;0.1" dur={`${15 + i % 7}s`} repeatCount="indefinite" />
              </path>
            ))}
          </g>
        </g>
        
        {/* Title with animated elements */}
        <g transform="translate(475, 70)">
          <text x="0" y="0" fontFamily="Inter, Arial, sans-serif" fontSize="28" fill="#ffffff" textAnchor="middle" fontWeight="bold">
            Kör Nokta Tespit Sistemi
          </text>
          <text x="0" y="35" fontFamily="Inter, Arial, sans-serif" fontSize="18" fill="#3b82f6" textAnchor="middle">
            24 GHz Radar Tabanlı Algılama Teknolojisi
          </text>
          
          {/* Animated underline */}
          <rect x="-200" y="15" width="400" height="2" fill="#3b82f6" opacity="0.8" rx="1">
            <animate attributeName="width" values="0;400;350;400" dur="3s" begin="0s" />
            <animate attributeName="x" values="200;-200;-175;-200" dur="3s" begin="0s" />
          </rect>
        </g>
        
        {/* Enhanced radar equation panel */}
        <g transform="translate(475, 150)">
          <rect x="-350" y="-40" width="700" height="80" rx="5" fill="rgba(15,23,42,0.7)" stroke="#475569" strokeWidth="1" />
          <text x="0" y="-15" fontFamily="Inter, Arial, sans-serif" fontSize="16" fill="#ffffff" textAnchor="middle" fontWeight="bold">
            Radar Denklem Parametreleri
          </text>
          <text x="-330" y="15" fontFamily="Inter, Arial, sans-serif" fontSize="14" fill="#3b82f6" textAnchor="start">
            P<tspan fill="#94a3b8">: Gönderilen Güç (W)</tspan>
          </text>
          <text x="-130" y="15" fontFamily="Inter, Arial, sans-serif" fontSize="14" fill="#3b82f6" textAnchor="start">
            G<tspan fill="#94a3b8">: Anten Kazancı (dBi)</tspan>
          </text>
          <text x="70" y="15" fontFamily="Inter, Arial, sans-serif" fontSize="14" fill="#3b82f6" textAnchor="start">
            σ<tspan fill="#94a3b8">: Radar Kesit Alanı (m²)</tspan>
          </text>
          <text x="270" y="15" fontFamily="Inter, Arial, sans-serif" fontSize="14" fill="#3b82f6" textAnchor="start">
            R<tspan fill="#94a3b8">: Menzil (m)</tspan>
          </text>
          
          {/* Animated elements */}
          <rect x="-348" y="-38" width="696" height="76" rx="4" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="5s" repeatCount="indefinite" />
          </rect>
        </g>
        
        {/* Enhanced car visualization with dynamic components */}
        <g transform="translate(475, 350)">
          {/* Car body - With improved styling */}
          <rect x="-150" y="-50" width="300" height="100" rx="20" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          <rect x="-125" y="-70" width="250" height="30" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          
          {/* Windows */}
          <path d="M-125,-40 L-110,-70 M125,-40 L110,-70" stroke="#475569" strokeWidth="2" />
          <rect x="-80" y="-65" width="160" height="20" rx="5" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          
          {/* Wheels with rotation animation */}
          <g transform="translate(-100, 50)">
            <circle cx="0" cy="0" r="20" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <circle cx="0" cy="0" r="12" fill="none" stroke="#64748b" strokeWidth="1" />
            <path d="M0,-10 L0,10 M-10,0 L10,0" stroke="#64748b" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite" />
            </path>
          </g>
          
          <g transform="translate(100, 50)">
            <circle cx="0" cy="0" r="20" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <circle cx="0" cy="0" r="12" fill="none" stroke="#64748b" strokeWidth="1" />
            <path d="M0,-10 L0,10 M-10,0 L10,0" stroke="#64748b" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite" />
            </path>
          </g>
          
          {/* Lights with pulse animation */}
          <rect x="-140" y="-25" width="15" height="8" rx="2" fill="#ec4899">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite" />
          </rect>
          
          <rect x="125" y="-25" width="15" height="8" rx="2" fill="#fb923c">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite" />
          </rect>
          
          {/* Blind spot zones with pulsing animation */}
          <path d="M-190,-30 C-300,0 -300,75 -190,100" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
          </path>
          
          <path d="M190,-30 C300,0 300,75 190,100" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" delay="1s" />
          </path>
          
          {/* Enhanced central processor */}
          <rect x="-40" y="-20" width="80" height="40" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="2">
            <animate attributeName="stroke" values="#3b82f6;#60a5fa;#3b82f6" dur="2s" repeatCount="indefinite" />
          </rect>
          
          <text x="0" y="0" fontSize="12" fill="#ffffff" textAnchor="middle" dominantBaseline="middle">ECU</text>
          <text x="0" y="15" fontSize="8" fill="#94a3b8" textAnchor="middle" dominantBaseline="middle">24GHz DSP</text>
          
          {/* Dynamic data processing animation */}
          <circle cx="-20" cy="-10" r="3" fill="#3b82f6">
            <animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="20" cy="-10" r="3" fill="#3b82f6">
            <animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" delay="0.2s" />
          </circle>
        </g>
                
        {/* Enhanced radar sensors with indicator and labels */}
        <g transform="translate(270, 350)">
          {/* Main sensor housing */}
          <rect x="-30" y="-20" width="60" height="40" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          
          {/* Sensor lens */}
          <rect x="-20" y="-10" width="40" height="20" rx="3" fill="#0f172a" stroke="#60a5fa" strokeWidth="1" />
          
          {/* Indicator light */}
          <circle cx="0" cy="0" r="5" fill="#3b82f6">
            <animate attributeName="fill" values="#3b82f6;#93c5fd;#3b82f6" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Label */}
          <text x="0" y="-30" fontSize="12" fill="#ffffff" textAnchor="middle">Sol Radar</text>
          <text x="0" y="30" fontSize="10" fill="#94a3b8" textAnchor="middle">24GHz 15° x 80°</text>
          
          {/* Improved wave field */}
          <path d="M-35,0 C-80,50 -150,-50 -200,0" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M-38,0 C-100,80 -170,-80 -220,0" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.3" />
          <path d="M-40,0 C-120,100 -200,-100 -250,0" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.2" />
          
          {/* Pulse animations */}
          <circle cx="-80" cy="-20" r="5" fill="#3b82f6" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
            <animate attributeName="r" values="0;5;0" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="-150" cy="10" r="5" fill="#3b82f6" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="r" values="0;5;0" dur="3s" repeatCount="indefinite" begin="1s" />
          </circle>
          
          <circle cx="-100" cy="-30" r="5" fill="#ef4444" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0;0.6" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="r" values="0;5;0" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>
        </g>
        
        <g transform="translate(680, 350)">
          {/* Main sensor housing */}
          <rect x="-30" y="-20" width="60" height="40" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          
          {/* Sensor lens */}
          <rect x="-20" y="-10" width="40" height="20" rx="3" fill="#0f172a" stroke="#60a5fa" strokeWidth="1" />
          
          {/* Indicator light */}
          <circle cx="0" cy="0" r="5" fill="#3b82f6">
            <animate attributeName="fill" values="#3b82f6;#93c5fd;#3b82f6" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Label */}
          <text x="0" y="-30" fontSize="12" fill="#ffffff" textAnchor="middle">Sağ Radar</text>
          <text x="0" y="30" fontSize="10" fill="#94a3b8" textAnchor="middle">24GHz 15° x 80°</text>
          
          {/* Improved wave field */}
          <path d="M35,0 C80,50 150,-50 200,0" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M38,0 C100,80 170,-80 220,0" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.3" />
          <path d="M40,0 C120,100 200,-100 250,0" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.2" />
          
          {/* Pulse animations */}
          <circle cx="80" cy="-20" r="5" fill="#3b82f6" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
            <animate attributeName="r" values="0;5;0" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="150" cy="10" r="5" fill="#3b82f6" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="r" values="0;5;0" dur="3s" repeatCount="indefinite" begin="1s" />
          </circle>
          
          <circle cx="100" cy="-30" r="5" fill="#ef4444" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0;0.6" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="r" values="0;5;0" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>
        </g>
        
        {/* Left Front phase rings */}
        <g transform="translate(170, 350)">
          <circle cx="0" cy="0" r="30" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          <circle cx="0" cy="0" r="60" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          <circle cx="0" cy="0" r="90" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          
          {/* Animated circles */}
          <circle cx="0" cy="0" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6">
            <animate attributeName="r" values="10;60;10" dur="4s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2;1;2" dur="4s" repeatCount="indefinite" />
            <animate attributeName="stroke" values="#3b82f6;#60a5fa;#3b82f6" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Left Rear phase rings */}
        <g transform="translate(170, 450)">
          <circle cx="0" cy="0" r="30" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          <circle cx="0" cy="0" r="60" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          <circle cx="0" cy="0" r="90" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          
          {/* Animated circles */}
          <circle cx="0" cy="0" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6">
            <animate attributeName="r" values="10;60;10" dur="4s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="stroke-width" values="2;1;2" dur="4s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="stroke" values="#3b82f6;#60a5fa;#3b82f6" dur="4s" repeatCount="indefinite" begin="1s" />
          </circle>
        </g>
        
        {/* Right Front phase rings */}
        <g transform="translate(780, 350)">
          <circle cx="0" cy="0" r="30" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          <circle cx="0" cy="0" r="60" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          <circle cx="0" cy="0" r="90" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          
          {/* Animated circles */}
          <circle cx="0" cy="0" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6">
            <animate attributeName="r" values="10;60;10" dur="4s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="stroke-width" values="2;1;2" dur="4s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="stroke" values="#3b82f6;#60a5fa;#3b82f6" dur="4s" repeatCount="indefinite" begin="0.5s" />
          </circle>
        </g>
        
        {/* Right Rear phase rings */}
        <g transform="translate(780, 450)">
          <circle cx="0" cy="0" r="30" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          <circle cx="0" cy="0" r="60" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          <circle cx="0" cy="0" r="90" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          
          {/* Animated circles */}
          <circle cx="0" cy="0" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6">
            <animate attributeName="r" values="10;60;10" dur="4s" repeatCount="indefinite" begin="1.5s" />
            <animate attributeName="stroke-width" values="2;1;2" dur="4s" repeatCount="indefinite" begin="1.5s" />
            <animate attributeName="stroke" values="#3b82f6;#60a5fa;#3b82f6" dur="4s" repeatCount="indefinite" begin="1.5s" />
          </circle>
        </g>
        
        {/* Enhanced warning indicators - Left */}
        <g transform="translate(270, 250)">
          <path d="M-20,-15 L0,15 L20,-15 Z" fill="#ef4444" stroke="#ffffff" strokeWidth="1" opacity="0.9">
            <animate attributeName="opacity" values="0.9;1;0.9" dur="0.5s" repeatCount="indefinite" />
          </path>
          <text x="0" y="-5" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">!</text>
          <text x="0" y="35" fontSize="10" fill="#ffffff" textAnchor="middle">SOL KÖR NOKTA</text>
        </g>
        
        {/* Enhanced warning indicators - Right */}
        <g transform="translate(680, 250)">
          <path d="M-20,-15 L0,15 L20,-15 Z" fill="#ef4444" stroke="#ffffff" strokeWidth="1" opacity="0.9">
            <animate attributeName="opacity" values="0.9;1;0.9" dur="0.5s" repeatCount="indefinite" begin="0.25s" />
          </path>
          <text x="0" y="-5" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">!</text>
          <text x="0" y="35" fontSize="10" fill="#ffffff" textAnchor="middle">SAĞ KÖR NOKTA</text>
        </g>
        
        {/* Enhanced information panels - Radar specifications */}
        <g transform="translate(250, 580)">
          <rect x="-150" y="-70" width="300" height="140" rx="5" fill="rgba(15,23,42,0.7)" stroke="#475569" strokeWidth="1" />
          <text x="0" y="-45" fontSize="16" fill="#ffffff" textAnchor="middle" fontWeight="bold">Radar Teknik Özellikleri</text>
          <line x1="-125" y1="-25" x2="125" y2="-25" stroke="#475569" strokeWidth="1" />
          
          <text x="-125" y="0" fontSize="12" fill="#3b82f6" textAnchor="start">• Frekans: 24 GHz ISM Band</text>
          <text x="-125" y="25" fontSize="12" fill="#3b82f6" textAnchor="start">• Açıklık: 15° dikey, 80° yatay</text>
          <text x="-125" y="50" fontSize="12" fill="#3b82f6" textAnchor="start">• Menzil: 0.5m - 30m</text>
          
          {/* Subtle animation */}
          <rect x="-148" y="-68" width="296" height="136" rx="4" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="4s" repeatCount="indefinite" />
          </rect>
        </g>
        
        {/* Enhanced information panels - Vehicle integration */}
        <g transform="translate(600, 580)">
          <rect x="-150" y="-70" width="300" height="140" rx="5" fill="rgba(15,23,42,0.7)" stroke="#475569" strokeWidth="1" />
          <text x="0" y="-45" fontSize="16" fill="#ffffff" textAnchor="middle" fontWeight="bold">Araç Entegrasyonu</text>
          <line x1="-125" y1="-25" x2="125" y2="-25" stroke="#475569" strokeWidth="1" />
          
          <text x="-125" y="0" fontSize="12" fill="#3b82f6" textAnchor="start">• Sinyal Arayüzü: CAN Bus 500kbps</text>
          <text x="-125" y="25" fontSize="12" fill="#3b82f6" textAnchor="start">• Güç Tüketimi: 1.2W (100mA@12V)</text>
          <text x="-125" y="50" fontSize="12" fill="#3b82f6" textAnchor="start">• Montaj: Tampon arkası, 0.8m yükseklik</text>
          
          {/* Subtle animation */}
          <rect x="-148" y="-68" width="296" height="136" rx="4" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="4s" repeatCount="indefinite" begin="1s" />
          </rect>
        </g>
        
        {/* Enhanced information panels - Driver display */}
        <g transform="translate(250, 730)">
          <rect x="-150" y="-70" width="300" height="140" rx="5" fill="rgba(15,23,42,0.7)" stroke="#475569" strokeWidth="1" />
          <text x="0" y="-45" fontSize="16" fill="#ffffff" textAnchor="middle" fontWeight="bold">Sürücü Arayüzü</text>
          <line x1="-125" y1="-25" x2="125" y2="-25" stroke="#475569" strokeWidth="1" />
          
          <text x="-125" y="0" fontSize="12" fill="#3b82f6" textAnchor="start">• A-Sütunu LED Uyarı Işıkları</text>
          <text x="-125" y="25" fontSize="12" fill="#3b82f6" textAnchor="start">• Opsiyonel Akustik Uyarı (65-85dB)</text>
          <text x="-125" y="50" fontSize="12" fill="#3b82f6" textAnchor="start">• Gösterge Paneli Entegrasyonu</text>
          
          {/* Subtle animation */}
          <rect x="-148" y="-68" width="296" height="136" rx="4" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="4s" repeatCount="indefinite" begin="2s" />
          </rect>
        </g>
        
        {/* Enhanced information panels - System parameters */}
        <g transform="translate(600, 730)">
          <rect x="-150" y="-70" width="300" height="140" rx="5" fill="rgba(15,23,42,0.7)" stroke="#475569" strokeWidth="1" />
          <text x="0" y="-45" fontSize="16" fill="#ffffff" textAnchor="middle" fontWeight="bold">Sistem Parametreleri</text>
          <line x1="-125" y1="-25" x2="125" y2="-25" stroke="#475569" strokeWidth="1" />
          
          <text x="-125" y="0" fontSize="12" fill="#3b82f6" textAnchor="start">• Tetikleme Hızı: &gt;30 km/s</text>
          <text x="-125" y="25" fontSize="12" fill="#3b82f6" textAnchor="start">• Algılama Gecikmesi: &lt;150ms</text>
          <text x="-125" y="50" fontSize="12" fill="#3b82f6" textAnchor="start">• Çalışma Sıcaklığı: -40°C to +85°C</text>
          
          {/* Subtle animation */}
          <rect x="-148" y="-68" width="296" height="136" rx="4" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="4s" repeatCount="indefinite" begin="3s" />
          </rect>
        </g>
        
        {/* Enhanced academic visualizations section */}
        <g transform="translate(475, 880)">
          <rect x="-425" y="-50" width="850" height="220" rx="5" fill="rgba(15,23,42,0.5)" stroke="#475569" strokeWidth="1" />
          <text x="0" y="-25" fontSize="18" fill="#ffffff" textAnchor="middle" fontWeight="bold">
            Radar Sinyal İşleme
          </text>

          {/* Signal processing steps */}
          <g transform="translate(-325, 70)">
            <rect x="-75" y="-75" width="150" height="150" rx="5" fill="rgba(15,23,42,0.7)" stroke="#475569" strokeWidth="1" />
            <text x="0" y="-55" fontSize="14" fill="#ffffff" textAnchor="middle">Ham Sinyal</text>
            <rect x="-60" y="-40" width="120" height="100" fill="url(#bs-math-pattern)" />
            <text x="0" y="75" fontSize="10" fill="#94a3b8" textAnchor="middle">I/Q Sinyali Örnekleme</text>
          </g>
          
          {/* FFT signal analysis */}
          <g transform="translate(-165, 70)">
            <rect x="-75" y="-75" width="150" height="150" rx="5" fill="rgba(15,23,42,0.7)" stroke="#475569" strokeWidth="1" />
            <text x="0" y="-55" fontSize="14" fill="#ffffff" textAnchor="middle">FFT İşleme</text>
            
            {/* Frequency domain visualization */}
            <rect x="-60" y="-40" width="120" height="100" fill="#070d19" />
            <path d="M-50,50 L-50,-40 M-50,50 L50,50" stroke="#475569" strokeWidth="1" />
            
            {/* FFT bars */}
            <rect x="-45" y="30" width="6" height="20" fill="#3b82f6" opacity="0.8">
              <animate attributeName="height" values="20;10;40;20" dur="4s" repeatCount="indefinite" begin="0.1s" />
              <animate attributeName="y" values="30;40;10;30" dur="4s" repeatCount="indefinite" begin="0.1s" />
            </rect>
            <rect x="-35" y="25" width="6" height="25" fill="#3b82f6" opacity="0.8">
              <animate attributeName="height" values="25;15;35;25" dur="3s" repeatCount="indefinite" begin="0.2s" />
              <animate attributeName="y" values="25;35;15;25" dur="3s" repeatCount="indefinite" begin="0.2s" />
            </rect>
            <rect x="-25" y="35" width="6" height="15" fill="#3b82f6" opacity="0.8">
              <animate attributeName="height" values="15;30;20;15" dur="3.5s" repeatCount="indefinite" begin="0.3s" />
              <animate attributeName="y" values="35;20;30;35" dur="3.5s" repeatCount="indefinite" begin="0.3s" />
            </rect>
            <rect x="-15" y="15" width="6" height="35" fill="#ef4444" opacity="0.8">
              <animate attributeName="height" values="35;45;25;35" dur="2s" repeatCount="indefinite" begin="0.4s" />
              <animate attributeName="y" values="15;5;25;15" dur="2s" repeatCount="indefinite" begin="0.4s" />
            </rect>
            <rect x="-5" y="20" width="6" height="30" fill="#3b82f6" opacity="0.8">
              <animate attributeName="height" values="30;20;40;30" dur="4s" repeatCount="indefinite" begin="0.5s" />
              <animate attributeName="y" values="20;30;10;20" dur="4s" repeatCount="indefinite" begin="0.5s" />
            </rect>
            <rect x="5" y="25" width="6" height="25" fill="#3b82f6" opacity="0.8">
              <animate attributeName="height" values="25;15;35;25" dur="3s" repeatCount="indefinite" begin="0.6s" />
              <animate attributeName="y" values="25;35;15;25" dur="3s" repeatCount="indefinite" begin="0.6s" />
            </rect>
            <rect x="15" y="30" width="6" height="20" fill="#3b82f6" opacity="0.8">
              <animate attributeName="height" values="20;30;15;20" dur="3.5s" repeatCount="indefinite" begin="0.7s" />
              <animate attributeName="y" values="30;20;35;30" dur="3.5s" repeatCount="indefinite" begin="0.7s" />
            </rect>
            <rect x="25" y="10" width="6" height="40" fill="#ef4444" opacity="0.8">
              <animate attributeName="height" values="40;30;50;40" dur="2s" repeatCount="indefinite" begin="0.8s" />
              <animate attributeName="y" values="10;20;0;10" dur="2s" repeatCount="indefinite" begin="0.8s" />
            </rect>
            <rect x="35" y="30" width="6" height="20" fill="#3b82f6" opacity="0.8">
              <animate attributeName="height" values="20;10;30;20" dur="4s" repeatCount="indefinite" begin="0.9s" />
              <animate attributeName="y" values="30;40;20;30" dur="4s" repeatCount="indefinite" begin="0.9s" />
            </rect>
            <rect x="45" y="40" width="6" height="10" fill="#3b82f6" opacity="0.8">
              <animate attributeName="height" values="10;20;5;10" dur="3s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="y" values="40;30;45;40" dur="3s" repeatCount="indefinite" begin="1s" />
            </rect>
            
            <text x="0" y="75" fontSize="10" fill="#94a3b8" textAnchor="middle">Frekans Analizi</text>
          </g>
          
          {/* Range-Doppler map */}
          <g transform="translate(-5, 70)">
            <rect x="-75" y="-75" width="150" height="150" rx="5" fill="rgba(15,23,42,0.7)" stroke="#475569" strokeWidth="1" />
            <text x="0" y="-55" fontSize="14" fill="#ffffff" textAnchor="middle">Menzil-Doppler</text>
            
            {/* Range-Doppler map visualization */}
            <rect x="-60" y="-40" width="120" height="100" fill="#070d19" />
            
            {/* Grid lines */}
            <path d="M-60,-15 L60,-15 M-60,10 L60,10 M-60,35 L60,35" stroke="#475569" strokeWidth="0.5" opacity="0.5" />
            <path d="M-35,-40 L-35,60 M-10,-40 L-10,60 M15,-40 L15,60 M40,-40 L40,60" stroke="#475569" strokeWidth="0.5" opacity="0.5" />
            
            {/* Target blips */}
            <circle cx="-20" cy="20" r="5" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.3s" />
              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" begin="0.3s" />
            </circle>
            
            <circle cx="30" cy="-20" r="6" fill="#ef4444" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
              <animate attributeName="r" values="6;8;6" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            
            <text x="-50" y="-30" fontSize="8" fill="#94a3b8">Hız</text>
            <text x="50" y="50" fontSize="8" fill="#94a3b8">Menzil</text>
            <text x="0" y="75" fontSize="10" fill="#94a3b8" textAnchor="middle">Hedef Tespiti</text>
          </g>
          
          {/* 3D wave analysis */}
          <g transform="translate(155, 70)">
            <rect x="-75" y="-75" width="150" height="150" rx="5" fill="rgba(15,23,42,0.7)" stroke="#475569" strokeWidth="1" />
            <text x="0" y="-55" fontSize="14" fill="#ffffff" textAnchor="middle">3D Analiz</text>
            
            {/* 3D visualization */}
            <rect x="-60" y="-40" width="120" height="100" fill="#070d19" />
            
            {/* 3D perspective grid */}
            <path d="M-60,60 L60,60 L60,-40 L-60,-40 Z" stroke="#475569" strokeWidth="0.5" fill="none" />
            <path d="M-60,60 L-30,30 L90,30 L60,60 Z" stroke="#475569" strokeWidth="0.5" fill="none" />
            <path d="M60,-40 L90,-10 L90,30 L60,60 Z" stroke="#475569" strokeWidth="0.5" fill="none" />
            
            {/* 3D wave representation */}
            <path d="M-50,50 C-30,40 -10,20 10,35 C30,50 50,30 70,40" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.8">
              <animate attributeName="d" 
                       values="M-50,50 C-30,40 -10,20 10,35 C30,50 50,30 70,40;
                               M-50,40 C-30,50 -10,30 10,15 C30,30 50,50 70,30;
                               M-50,50 C-30,40 -10,20 10,35 C30,50 50,30 70,40" 
                       dur="6s" repeatCount="indefinite" />
            </path>
            
            <text x="0" y="75" fontSize="10" fill="#94a3b8" textAnchor="middle">Dalga Formu Analizi</text>
          </g>
          
          {/* Mathematical model */}
          <g transform="translate(315, 70)">
            <rect x="-75" y="-75" width="150" height="150" rx="5" fill="rgba(15,23,42,0.7)" stroke="#475569" strokeWidth="1" />
            <text x="0" y="-55" fontSize="14" fill="#ffffff" textAnchor="middle">Matematiksel Model</text>
            
            <rect x="-60" y="-40" width="120" height="100" fill="#070d19" />
            
            {/* Mathematical expressions */}
            <text x="0" y="-20" fontSize="10" fill="#ffffff" textAnchor="middle">
              P(d|x) = P(x|d)P(d)/P(x)
            </text>
            
            <text x="0" y="0" fontSize="10" fill="#3b82f6" textAnchor="middle">
              CFAR Algoritması
            </text>
            
            <text x="0" y="20" fontSize="8" fill="#94a3b8" textAnchor="middle">
              T = α · (∑z_i)/(2N)
            </text>
            
            <text x="0" y="40" fontSize="8" fill="#94a3b8" textAnchor="middle">
              v = 2·f_d·λ
            </text>
            
            <rect x="-50" y="-30" width="100" height="70" rx="2" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
            </rect>
            
            <text x="0" y="75" fontSize="10" fill="#94a3b8" textAnchor="middle">Bayes Olasılık Modeli</text>
          </g>
        </g>
        
        {/* Interactive legend with sliders */}
        <g transform="translate(475, 1100)">
          <rect x="-350" y="-50" width="700" height="120" rx="5" fill="rgba(15,23,42,0.7)" stroke="#475569" strokeWidth="1" />
          <text x="0" y="-25" fontSize="16" fill="#ffffff" textAnchor="middle" fontWeight="bold">
            Algılama Parametreleri
          </text>

          {/* Distance slider */}
          <g transform="translate(-230, 10)">
            <text x="0" y="-20" fontSize="12" fill="#ffffff" textAnchor="middle">Mesafe</text>
            <rect x="-100" y="0" width="200" height="4" rx="2" fill="#1e293b" />
            <rect x="-100" y="0" width="140" height="4" rx="2" fill="#3b82f6" />
            <circle cx="40" cy="2" r="8" fill="#ffffff" stroke="#3b82f6" strokeWidth="2">
              <animate attributeName="cx" values="40;30;50;40" dur="5s" repeatCount="indefinite" />
            </circle>
            <text x="-100" y="20" fontSize="10" fill="#94a3b8" textAnchor="middle">0.5m</text>
            <text x="100" y="20" fontSize="10" fill="#94a3b8" textAnchor="middle">30m</text>
            <text x="40" y="20" fontSize="10" fill="#ffffff" textAnchor="middle">21m</text>
          </g>
          
          {/* Relative speed slider */}
          <g transform="translate(0, 10)">
            <text x="0" y="-20" fontSize="12" fill="#ffffff" textAnchor="middle">Göreceli Hız</text>
            <rect x="-100" y="0" width="200" height="4" rx="2" fill="#1e293b" />
            <rect x="-100" y="0" width="90" height="4" rx="2" fill="#ef4444" />
            <circle cx="-10" cy="2" r="8" fill="#ffffff" stroke="#ef4444" strokeWidth="2">
              <animate attributeName="cx" values="-10;-20;0;-10" dur="6s" repeatCount="indefinite" />
            </circle>
            <text x="-100" y="20" fontSize="10" fill="#94a3b8" textAnchor="middle">-20 km/s</text>
            <text x="100" y="20" fontSize="10" fill="#94a3b8" textAnchor="middle">+20 km/s</text>
            <text x="-10" y="20" fontSize="10" fill="#ffffff" textAnchor="middle">-5 km/s</text>
          </g>
          
          {/* Detection threshold slider */}
          <g transform="translate(230, 10)">
            <text x="0" y="-20" fontSize="12" fill="#ffffff" textAnchor="middle">Algılama Eşiği</text>
            <rect x="-100" y="0" width="200" height="4" rx="2" fill="#1e293b" />
            <rect x="-100" y="0" width="120" height="4" rx="2" fill="#22c55e" />
            <circle cx="20" cy="2" r="8" fill="#ffffff" stroke="#22c55e" strokeWidth="2">
              <animate attributeName="cx" values="20;10;30;20" dur="7s" repeatCount="indefinite" />
            </circle>
            <text x="-100" y="20" fontSize="10" fill="#94a3b8" textAnchor="middle">Düşük</text>
            <text x="100" y="20" fontSize="10" fill="#94a3b8" textAnchor="middle">Yüksek</text>
            <text x="20" y="20" fontSize="10" fill="#ffffff" textAnchor="middle">%60</text>
          </g>
        </g>
        
        {/* Enhanced system flow diagram at bottom */}
        <g transform="translate(475, 1250)">
          <rect x="-425" y="-30" width="850" height="60" rx="5" fill="rgba(15,23,42,0.5)" stroke="#475569" strokeWidth="1" />
          
          {/* System flow components */}
          <g>
            <rect x="-390" y="-15" width="100" height="30" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
            <text x="-340" y="5" fontSize="10" fill="#ffffff" textAnchor="middle">Radar Sensörleri</text>
            
            <rect x="-230" y="-15" width="100" height="30" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
            <text x="-180" y="5" fontSize="10" fill="#ffffff" textAnchor="middle">Sinyal İşleme</text>
            
            <rect x="-70" y="-15" width="100" height="30" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
            <text x="-20" y="5" fontSize="10" fill="#ffffff" textAnchor="middle">Algılama Algoritması</text>
            
            <rect x="90" y="-15" width="100" height="30" rx="3" fill="#1e293b" stroke="#ef4444" strokeWidth="1" />
            <text x="140" y="5" fontSize="10" fill="#ffffff" textAnchor="middle">Tehdit Değerlendirme</text>
            
            <rect x="250" y="-15" width="100" height="30" rx="3" fill="#1e293b" stroke="#ef4444" strokeWidth="1" />
            <text x="300" y="5" fontSize="10" fill="#ffffff" textAnchor="middle">Uyarı Göstergeleri</text>
            
            {/* Connecting arrows */}
            <path d="M-290,0 L-230,0" stroke="#3b82f6" strokeWidth="1" markerEnd="url(#bs-arrow-blue)" />
            <path d="M-130,0 L-70,0" stroke="#3b82f6" strokeWidth="1" markerEnd="url(#bs-arrow-blue)" />
            <path d="M30,0 L90,0" stroke="#3b82f6" strokeWidth="1" markerEnd="url(#bs-arrow-red)" />
            <path d="M190,0 L250,0" stroke="#ef4444" strokeWidth="1" markerEnd="url(#bs-arrow-red)" />
            
            {/* Animated data packets */}
            <use xlinkHref="#bs-data-packet">
              <animateMotion dur="1.5s" repeatCount="indefinite" path="M-290,0 L-240,0" />
            </use>
            
            <use xlinkHref="#bs-data-packet">
              <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.3s" path="M-130,0 L-80,0" />
            </use>
            
            <use xlinkHref="#bs-warning-packet">
              <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.6s" path="M30,0 L80,0" />
            </use>
            
            <use xlinkHref="#bs-warning-packet">
              <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.9s" path="M190,0 L240,0" />
            </use>
          </g>
        </g>
        
        {/* Voltaris logo */}
        <g transform="translate(50, 1350)">
          <circle cx="0" cy="0" r="20" fill="none" stroke="#ef4444" strokeWidth="2" />
          <circle cx="0" cy="0" r="15" fill="none" stroke="#ef4444" strokeWidth="1" />
          <path d="M-5,-10 L0,10 L5,-10" fill="none" stroke="#ef4444" strokeWidth="2" />
          <path d="M-10,0 L-18,0 M10,0 L18,0" stroke="#ef4444" strokeWidth="1.5" />
          <text x="30" y="5" fontFamily="Arial, sans-serif" fontSize="16" fill="#ef4444" fontWeight="bold">VOLTARIS</text>
        </g>
      </svg>
    </div>
  );
};

export default AdasSystemArchitecture;

export { LaneDetectionDiagram, TrafficSignDetectionDiagram, CruiseControlSystemDiagram };
