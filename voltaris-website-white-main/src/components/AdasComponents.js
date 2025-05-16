import React, { useState, useEffect } from 'react';
import { 
  Camera, Navigation, AlertTriangle, Eye, Sun, GitMerge,
  BarChart2
} from 'lucide-react';

// ADAS Feature card component
export const AdasFeatureCard = ({ title, description, icon, color = "red", imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    red: "from-red-600 to-red-800 border-red-500 text-red-500",
    blue: "from-blue-600 to-blue-800 border-blue-500 text-blue-500"
  };
  
  return (
    <div 
      className={`bg-black rounded-lg border border-gray-800 overflow-hidden group relative h-full
        hover:border-${color === 'red' ? 'red' : 'blue'}-500 transition-all duration-300 transform hover:-translate-y-1`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Feature image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
        
        {/* Technical HUD overlay */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-2 left-2 text-xs font-mono border border-red-500/30 bg-black/70 px-2 py-1 rounded text-red-500">
            ADAS_FUNCTION
          </div>
          <div className="absolute bottom-2 right-2 text-xs font-mono border border-blue-500/30 bg-black/70 px-2 py-1 rounded text-blue-500">
            ACTIVE_SENSOR
          </div>
          
          {/* Scanning lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="w-full h-0.5 bg-red-500/30 absolute top-1/4 animate-scanLine"></div>
            <div className="w-full h-0.5 bg-blue-500/30 absolute top-3/4 animate-scanLine delay-500"></div>
          </div>
        </div>
        
        {/* Icon overlay */}
        <div className={`absolute bottom-0 right-0 p-3 bg-gradient-to-bl ${colorClasses[color]} text-white rounded-tl-lg`}>
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className={`text-xl font-bold mb-2 text-${color === 'red' ? 'red' : 'blue'}-500`}>{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        
        <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${colorClasses[color]} mt-4 transition-all duration-300 ease-in-out`}></div>
      </div>
      
      {/* Technical specs that appear on hover */}
      <div className={`absolute inset-0 bg-black/90 flex flex-col p-5 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} transition-all duration-300 pointer-events-none`}>
        <h4 className={`text-lg font-bold mb-3 text-${color === 'red' ? 'red' : 'blue'}-500`}>Teknik Özellikler</h4>
        
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-start">
            <div className={`text-${color === 'red' ? 'red' : 'blue'}-500 mr-2`}>•</div>
            <div>Çalışma prensibi: Gerçek zamanlı görüntü işleme ve sensör füzyonu</div>
          </div>
          <div className="flex items-start">
            <div className={`text-${color === 'red' ? 'red' : 'blue'}-500 mr-2`}>•</div>
            <div>Donanım: STM32F407 mikrodenetleyici ve Raspberry Pi 5</div>
          </div>
          <div className="flex items-start">
            <div className={`text-${color === 'red' ? 'red' : 'blue'}-500 mr-2`}>•</div>
            <div>Tepki süresi: &lt;100ms</div>
          </div>
          <div className="flex items-start">
            <div className={`text-${color === 'red' ? 'red' : 'blue'}-500 mr-2`}>•</div>
            <div>Haberleşme: CAN-Bus protokolü (500kbit/s)</div>
          </div>
          <div className="flex items-start">
            <div className={`text-${color === 'red' ? 'red' : 'blue'}-500 mr-2`}>•</div>
            <div>Güç tüketimi: 1.5W (bekleme), 3W (aktif)</div>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className={`w-full h-0.5 bg-gradient-to-r ${colorClasses[color]} mb-3`}></div>
          <p className="text-xs text-gray-400 italic">Yerli olarak geliştirilen ADAS teknolojisi</p>
        </div>
      </div>
    </div>
  );
};

// ADAS Technical diagram component
export const AdasTechnicalDiagram = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-6 text-blue-500 relative z-10 text-center">ADAS Sistem Mimarisi</h3>
      
      {/* ADAS System Architecture SVG */}
      <div className="bg-black rounded-lg border border-gray-800 p-6 relative overflow-hidden mb-10">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="circuit-pattern w-full h-full"></div>
        </div>
        
        <div className="w-full h-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="100%" height="100%" className="max-h-[600px]">
            <defs>
              {/* Gradients */}
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
              
              {/* Filters */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
                <feBlend in="SourceGraphic" in2="glow" mode="normal" />
              </filter>
              
              {/* Animation definitions */}
              <path id="data-path1" d="M300,200 C350,180 400,180 450,200" fill="none" />
              <path id="data-path2" d="M300,270 C350,290 400,290 450,270" fill="none" />
              <path id="data-path3" d="M570,200 C620,180 670,180 720,200" fill="none" />
              <path id="data-path4" d="M570,270 C620,290 670,290 720,270" fill="none" />
              
              {/* Data packet */}
              <g id="data-packet">
                <rect width="16" height="10" rx="2" fill="#ff4254" opacity="0.8" />
                <rect width="12" height="2" rx="1" fill="white" x="2" y="2" opacity="0.6" />
                <rect width="8" height="2" rx="1" fill="white" x="4" y="6" opacity="0.6" />
              </g>
              
              {/* Animated data packet */}
              <g id="moving-data-packet">
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite">
                  <mpath xlinkHref="#data-path1" />
                </animateMotion>
                <use xlinkHref="#data-packet" />
              </g>
            </defs>
            
            {/* Background */}
            <rect width="900" height="600" fill="url(#bg-gradient)" />
            
            {/* Grid lines for technical look */}
            <g opacity="0.1">
              <path d="M0,50 L900,50 M0,100 L900,100 M0,150 L900,150 M0,200 L900,200 M0,250 L900,250 M0,300 L900,300 M0,350 L900,350 M0,400 L900,400 M0,450 L900,450 M0,500 L900,500 M0,550 L900,550" stroke="#ffffff" strokeWidth="1" />
              <path d="M50,0 L50,600 M100,0 L100,600 M150,0 L150,600 M200,0 L200,600 M250,0 L250,600 M300,0 L300,600 M350,0 L350,600 M400,0 L400,600 M450,0 L450,600 M500,0 L500,600 M550,0 L550,600 M600,0 L600,600 M650,0 L650,600 M700,0 L700,600 M750,0 L750,600 M800,0 L800,600 M850,0 L850,600" stroke="#ffffff" strokeWidth="1" />
            </g>
            
            {/* Title */}
            <text x="450" y="50" fontFamily="Arial, sans-serif" fontSize="24" fill="#ffffff" textAnchor="middle" fontWeight="bold">ADAS Sistem Mimarisi</text>
            <text x="450" y="75" fontFamily="Arial, sans-serif" fontSize="16" fill="#ff4254" textAnchor="middle">Voltaris Elektromobil</text>
            
            {/* Main Raspberry Pi 5 */}
            <g transform="translate(450, 235)">
              <rect x="-120" y="-60" width="240" height="120" rx="5" ry="5" fill="url(#raspberry-gradient)" stroke="#ffffff" strokeWidth="2" filter="url(#glow)" />
              <text x="0" y="0" fontFamily="Arial, sans-serif" fontSize="18" fill="#ffffff" textAnchor="middle" fontWeight="bold">Raspberry Pi 5</text>
              <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle">8GB RAM</text>
              <text x="0" y="-25" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffcc00" textAnchor="middle">ADAS İşlem Birimi</text>
              
              {/* Ports visualization */}
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
            
            {/* USB Camera */}
            <g transform="translate(200, 170)">
              <rect x="-70" y="-40" width="140" height="80" rx="5" ry="5" fill="url(#sensor-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">USB Kamera</text>
              <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">1280x960 Çözünürlük</text>
              <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="10" fill="#aaaaaa" textAnchor="middle">Şerit Tespiti, İşaret Tespiti</text>
              
              {/* Camera lens */}
              <circle cx="0" cy="-20" r="12" fill="#000000" stroke="#333333" strokeWidth="2" />
              <circle cx="0" cy="-20" r="8" fill="#222222" stroke="#444444" strokeWidth="1" />
              <circle cx="0" cy="-20" r="4" fill="#111111" />
              <circle cx="-3" cy="-23" r="1" fill="#ffffff" opacity="0.7" />
            </g>
            
            {/* Radar Sensor */}
            <g transform="translate(200, 300)">
              <rect x="-70" y="-40" width="140" height="80" rx="5" ry="5" fill="url(#sensor-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">RD-03D Radar</text>
              <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Çoklu Nesne Algılama</text>
              <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="10" fill="#aaaaaa" textAnchor="middle">Kör Nokta Algılama</text>
              
              {/* Radar waves animation */}
              <g opacity="0.7">
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
            </g>
            
            {/* Light Sensor */}
            <g transform="translate(200, 430)">
              <rect x="-70" y="-40" width="140" height="80" rx="5" ry="5" fill="url(#sensor-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">BH1750 Sensör</text>
              <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Ortam Işığı Sensörü</text>
              <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="10" fill="#aaaaaa" textAnchor="middle">Otomatik Farlar</text>
              
              {/* Light sensor icon */}
              <circle cx="0" cy="-20" r="10" fill="#ffeb3b" opacity="0.8">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
              </circle>
              <path d="M0,-35 L0,-30 M-10,-20 L-15,-20 M0,-5 L0,-10 M15,-20 L10,-20" stroke="#ffeb3b" strokeWidth="2" opacity="0.8" />
              <path d="M-7,-27 L-11,-31 M-7,-13 L-11,-9 M7,-13 L11,-9 M7,-27 L11,-31" stroke="#ffeb3b" strokeWidth="2" opacity="0.8" />
            </g>
            
            {/* Display Screen */}
            <g transform="translate(700, 170)">
              <rect x="-70" y="-40" width="140" height="80" rx="5" ry="5" fill="url(#screen-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">10" TFT Ekran</text>
              <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">HDMI Bağlantısı</text>
              <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="10" fill="#aaaaaa" textAnchor="middle">Sürücü Arayüzü</text>
              
              {/* Screen display */}
              <rect x="-50" y="-30" width="100" height="60" rx="2" fill="#000022" stroke="#444444" />
              <path d="M-40,-20 L-25,-20 M-40,-10 L-10,-10 M-40,0 L-30,0 M-40,10 L-20,10 M-40,20 L-15,20" stroke="#00ff00" strokeWidth="1" opacity="0.7" />
              <rect x="0" y="-25" width="40" height="50" fill="#001133" opacity="0.6" />
              <text x="20" y="0" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle" opacity="0.9">ADAS</text>
            </g>
            
            {/* Vehicle Control System (AKS) */}
            <g transform="translate(700, 300)">
              <rect x="-70" y="-40" width="140" height="80" rx="5" ry="5" fill="url(#arduino-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">AKS Kontrol Ünitesi</text>
              <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">STM32F407VGT6</text>
              <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="10" fill="#aaaaaa" textAnchor="middle">Hız Sabitleyici</text>
              
              {/* Microcontroller details */}
              <rect x="-45" y="-30" width="90" height="20" rx="2" fill="#005662" stroke="#0097a7" />
              <text x="0" y="-17" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle">168MHz ARM Cortex-M4</text>
            </g>
            
            {/* Motor Controller */}
            <g transform="translate(700, 430)">
              <rect x="-70" y="-40" width="140" height="80" rx="5" ry="5" fill="url(#component-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Motor Kontrolü</text>
              <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">BLDC Motor Sürücü</text>
              <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="10" fill="#aaaaaa" textAnchor="middle">Alan Yönelimli Kontrol</text>
              
              {/* Motor controller chip */}
              <rect x="-40" y="-30" width="80" height="15" rx="2" fill="#333333" stroke="#666666" />
              <circle cx="-30" cy="-22" r="3" fill="#cc0000" />
              <circle cx="30" cy="-22" r="3" fill="#00cc00" />
              <path d="M-20,-30 L-20,-40 M-10,-30 L-10,-40 M0,-30 L0,-40 M10,-30 L10,-40 M20,-30 L20,-40" stroke="#888888" strokeWidth="1" />
            </g>
          
            {/* Connection Lines */}
            <g strokeWidth="2" fill="none">
              {/* USB Camera to Raspberry Pi */}
              <path d="M270,170 L330,170 L330,235" stroke="#4fc3f7">
                <animate attributeName="strokeDashoffset" from="60" to="0" dur="3s" repeatCount="indefinite" />
                <animate attributeName="strokeDasharray" values="5,5" />
              </path>
              <text x="300" y="160" fontFamily="monospace" fontSize="10" fill="#4fc3f7" textAnchor="middle">USB</text>
              
              {/* Radar to Raspberry Pi */}
              <path d="M270,300 L330,300 L330,235" stroke="#4fc3f7">
                <animate attributeName="strokeDashoffset" from="60" to="0" dur="4s" repeatCount="indefinite" />
                <animate attributeName="strokeDasharray" values="5,5" />
              </path>
              <text x="300" y="290" fontFamily="monospace" fontSize="10" fill="#4fc3f7" textAnchor="middle">UART</text>
              
              {/* Light Sensor to Raspberry Pi */}
              <path d="M270,430 L310,430 L310,235" stroke="#66bb6a">
                <animate attributeName="strokeDashoffset" from="60" to="0" dur="5s" repeatCount="indefinite" />
                <animate attributeName="strokeDasharray" values="5,5" />
              </path>
              <text x="290" y="420" fontFamily="monospace" fontSize="10" fill="#66bb6a" textAnchor="middle">I2C</text>
              
              {/* Raspberry Pi to Display */}
              <path d="M570,170 L630,170" stroke="#ff7043" strokeWidth="3">
                <animate attributeName="strokeDashoffset" from="60" to="0" dur="2s" repeatCount="indefinite" />
                <animate attributeName="strokeDasharray" values="10,5" />
              </path>
              <text x="600" y="160" fontFamily="monospace" fontSize="10" fill="#ff7043" textAnchor="middle">HDMI</text>
              
              {/* Raspberry Pi to AKS */}
              <path d="M570,235 L600,235 L600,300 L630,300" stroke="#ffeb3b" strokeWidth="2">
                <animate attributeName="strokeDashoffset" from="60" to="0" dur="3s" repeatCount="indefinite" />
                <animate attributeName="strokeDasharray" values="8,4" />
              </path>
              <text x="600" y="265" fontFamily="monospace" fontSize="10" fill="#ffeb3b" textAnchor="middle">CAN Bus</text>
              
              {/* AKS to Motor Controller */}
              <path d="M700,340 L700,390" stroke="#ff4254" strokeWidth="2">
                <animate attributeName="strokeDashoffset" from="50" to="0" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="strokeDasharray" values="6,3" />
              </path>
              <text x="720" y="370" fontFamily="monospace" fontSize="10" fill="#ff4254" textAnchor="middle">PWM/CAN</text>
            </g>
          
            {/* Animated data packets */}
            <g>
              {/* Camera to RPi */}
              <use xlinkHref="#data-packet">
                <animateMotion dur="2s" repeatCount="indefinite" path="M270,170 L330,170 L330,235" />
              </use>
              
              {/* Radar to RPi */}
              <use xlinkHref="#data-packet">
                <animateMotion dur="3s" repeatCount="indefinite" path="M270,300 L330,300 L330,235" />
              </use>
              
              {/* Light sensor to RPi */}
              <use xlinkHref="#data-packet">
                <animateMotion dur="4s" repeatCount="indefinite" path="M270,430 L310,430 L310,235" />
              </use>
              
              {/* RPi to Display */}
              <use xlinkHref="#data-packet">
                <animateMotion dur="1.5s" repeatCount="indefinite" path="M570,170 L630,170" />
              </use>
              
              {/* RPi to AKS */}
              <use xlinkHref="#data-packet">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M570,235 L600,235 L600,300 L630,300" />
              </use>
              
              {/* AKS to Motor */}
              <use xlinkHref="#data-packet">
                <animateMotion dur="1s" repeatCount="indefinite" path="M700,340 L700,390" />
              </use>
            </g>
            
            {/* ADAS Functions Description */}
            <g transform="translate(450, 520)">
              <rect x="-350" y="-30" width="700" height="60" rx="5" ry="5" fill="rgba(20,20,40,0.7)" stroke="#ffffff" strokeWidth="1" />
              <text x="0" y="-10" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">ADAS Functions</text>
              <text x="-300" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#4fc3f7" textAnchor="start">• Lane Following</text>
              <text x="-170" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#66bb6a" textAnchor="start">• Traffic Sign Detection</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffeb3b" textAnchor="start">• Cruise Control</text>
              <text x="140" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ff7043" textAnchor="start">• Blind Spot Detection</text>
              <text x="300" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ff4254" textAnchor="start">• Automatic Headlights</text>
            </g>
          
            {/* Technical annotations */}
            <g opacity="0.8">
              <path d="M450,295 L450,330 L550,330" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,2" />
              <text x="570" y="330" fontFamily="monospace" fontSize="10" fill="#ffffff">GPIO Pins</text>
              
              <path d="M270,210 L290,210 L290,240 L350,240" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,2" />
              <text x="370" y="240" fontFamily="monospace" fontSize="10" fill="#ffffff">23 FPS Processing</text>
          
              <path d="M270,340 L290,340 L290,380 L350,380" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,2" />
              <text x="370" y="380" fontFamily="monospace" fontSize="10" fill="#ffffff">30° Detection Angle</text>
            </g>
            
            {/* Voltaris Logo */}
            <g transform="translate(50, 550)">
              <circle cx="0" cy="0" r="20" fill="none" stroke="#ff4254" strokeWidth="2" />
              <circle cx="0" cy="0" r="15" fill="none" stroke="#ff4254" strokeWidth="1" />
              <path d="M-5,-10 L0,10 L5,-10" fill="none" stroke="#ff4254" strokeWidth="2" />
              <path d="M-10,0 L-18,0 M10,0 L18,0" stroke="#ff4254" strokeWidth="1.5" />
              <text x="30" y="5" fontFamily="Arial, sans-serif" fontSize="16" fill="#ff4254" fontWeight="bold">VOLTARIS</text>
            </g>
          </svg>
        </div>
      </div>

      {/* Lane Following Warning System SVG */}
      <div className="bg-black rounded-lg border border-gray-800 p-6 relative overflow-hidden mb-10">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="circuit-pattern w-full h-full"></div>
        </div>

        <div className="w-full h-auto">
          <h4 className="text-xl font-bold mb-4 text-blue-500 relative z-10 text-center">Lane Following Warning System</h4>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="100%" height="100%" className="max-h-[600px]">
            <defs>
              {/* Gradients */}
              <linearGradient id="bg-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0a0a14" />
                <stop offset="100%" stopColor="#1a1b24" />
              </linearGradient>
              
              <linearGradient id="block-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a2a3a" />
                <stop offset="100%" stopColor="#1a1a2a" />
              </linearGradient>
              
              <linearGradient id="primary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4fc3f7" />
                <stop offset="100%" stopColor="#0277bd" />
              </linearGradient>
              
              <linearGradient id="secondary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4254" />
                <stop offset="100%" stopColor="#b71c1c" />
              </linearGradient>
              
              <linearGradient id="tertiary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#66bb6a" />
                <stop offset="100%" stopColor="#2e7d32" />
              </linearGradient>
              
              {/* Camera Input Image Pattern */}
              <pattern id="cameraInput" patternUnits="userSpaceOnUse" width="120" height="80">
                <rect width="120" height="80" fill="#000000" />
                <path d="M0,40 L120,40" stroke="#444444" strokeWidth="1" />
                <path d="M0,25 L120,25 M0,55 L120,55" stroke="#444444" strokeWidth="0.5" />
                <path d="M60,0 L60,80" stroke="#444444" strokeWidth="1" />
                <path d="M30,0 L30,80 M90,0 L90,80" stroke="#444444" strokeWidth="0.5" />
                <circle cx="60" cy="40" r="20" fill="none" stroke="#ffeb3b" strokeWidth="0.5" />
                <path d="M40,40 L80,40 M60,20 L60,60" stroke="#ffeb3b" strokeWidth="0.5" />
              </pattern>
              
              {/* Processed Image Pattern */}
              <pattern id="processedImage" patternUnits="userSpaceOnUse" width="120" height="80">
                <rect width="120" height="80" fill="#000000" />
                <path d="M0,40 L120,40" stroke="#4fc3f7" strokeWidth="2" />
                <path d="M0,60 L120,60" stroke="#ff4254" strokeWidth="2" />
                <path d="M0,20 L120,20" stroke="#4fc3f7" strokeWidth="2" />
                <path d="M60,0 L30,80" stroke="#66bb6a" strokeWidth="1" strokeDasharray="3,2" />
                <path d="M60,0 L90,80" stroke="#66bb6a" strokeWidth="1" strokeDasharray="3,2" />
              </pattern>
              
              {/* Binary Mask Pattern */}
              <pattern id="binaryMask" patternUnits="userSpaceOnUse" width="120" height="80">
                <rect width="120" height="80" fill="#000000" />
                <path d="M0,35 Q30,30 60,30 Q90,30 120,35" stroke="#ffffff" strokeWidth="3" />
                <path d="M0,45 Q30,50 60,50 Q90,50 120,45" stroke="#ffffff" strokeWidth="3" />
              </pattern>
              
              {/* Lane Detection Pattern */}
              <pattern id="laneDetection" patternUnits="userSpaceOnUse" width="120" height="80">
                <rect width="120" height="80" fill="#000000" />
                <path d="M30,80 Q45,40 60,0" stroke="#ff4254" strokeWidth="2" fill="none" />
                <path d="M90,80 Q75,40 60,0" stroke="#ff4254" strokeWidth="2" fill="none" />
                <path d="M0,60 L120,60" stroke="#4fc3f7" strokeWidth="1" strokeDasharray="5,3" />
                <circle cx="60" cy="60" r="5" fill="#ffeb3b" />
              </pattern>
              
              {/* Warped Image Pattern */}
              <pattern id="warpedImage" patternUnits="userSpaceOnUse" width="120" height="80">
                <rect width="120" height="80" fill="#111111" />
                <path d="M10,10 L10,70 L110,70 L110,10 Z" stroke="#444444" fill="none" />
                <path d="M10,70 L30,30 L90,30 L110,70" stroke="#4fc3f7" strokeWidth="2" fill="none" />
                <path d="M30,30 L90,30" stroke="#444444" strokeDasharray="5,5" />
                <path d="M60,10 L60,70" stroke="#444444" strokeDasharray="3,3" />
              </pattern>
              
              {/* Result Image Pattern */}
              <pattern id="resultImage" patternUnits="userSpaceOnUse" width="120" height="80">
                <rect width="120" height="80" fill="#111111" />
                <rect x="40" y="10" width="40" height="60" fill="#222222" />
                <path d="M10,70 L30,10 L90,10 L110,70" stroke="#00ff00" strokeWidth="2" fill="none" />
                <path d="M10,70 L110,70" stroke="#ffcc00" strokeWidth="2" />
                <path d="M40,40 L80,40" stroke="#ffffff" strokeDasharray="4,4" />
                <path d="M60,10 L60,70" stroke="#ff4254" strokeWidth="1.5" />
                <text x="60" y="30" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle">LANE</text>
                <text x="60" y="40" fontFamily="monospace" fontSize="8" fill="#ffffff" textAnchor="middle">CENTER</text>
              </pattern>
              
              {/* Animation path for flow */}
              <path id="flow-path-1" d="M230,150 L350,150" fill="none" />
              <path id="flow-path-2" d="M470,150 L590,150" fill="none" />
              <path id="flow-path-3" d="M710,150 L830,150" fill="none" />
              <path id="flow-path-4" d="M830,190 L830,240" fill="none" />
              <path id="flow-path-5" d="M830,310 L830,360" fill="none" />
              <path id="flow-path-6" d="M830,430 L830,480" fill="none" />
              <path id="flow-path-7" d="M770,520 L650,520" fill="none" />
              <path id="flow-path-8" d="M530,520 L410,520" fill="none" />
              <path id="flow-path-9" d="M290,520 L170,520" fill="none" />
              <path id="flow-path-10" d="M110,480 L110,430" fill="none" />
              <path id="flow-path-11" d="M110,360 L110,310" fill="none" />
              <path id="flow-path-12" d="M110,240 L110,190" fill="none" />
              
              {/* Animated data packet */}
              <g id="data-packet2">
                <rect width="16" height="10" rx="2" fill="#4fc3f7" opacity="0.8" />
                <rect width="12" height="2" rx="1" fill="white" x="2" y="2" opacity="0.6" />
                <rect width="8" height="2" rx="1" fill="white" x="4" y="6" opacity="0.6" />
              </g>
            </defs>
            
            {/* Background */}
            <rect width="900" height="600" fill="url(#bg-gradient2)" />
            
            {/* Grid lines for technical look */}
            <g opacity="0.1">
              <path d="M0,50 L900,50 M0,100 L900,100 M0,150 L900,150 M0,200 L900,200 M0,250 L900,250 M0,300 L900,300 M0,350 L900,350 M0,400 L900,400 M0,450 L900,450 M0,500 L900,500 M0,550 L900,550" stroke="#ffffff" strokeWidth="1" />
              <path d="M50,0 L50,600 M100,0 L100,600 M150,0 L150,600 M200,0 L200,600 M250,0 L250,600 M300,0 L300,600 M350,0 L350,600 M400,0 L400,600 M450,0 L450,600 M500,0 L500,600 M550,0 L550,600 M600,0 L600,600 M650,0 L650,600 M700,0 L700,600 M750,0 L750,600 M800,0 L800,600 M850,0 L850,600" stroke="#ffffff" strokeWidth="1" />
            </g>
            
            {/* Process Blocks - First Row */}
            <g transform="translate(170, 150)">
              {/* Camera Input */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#block-gradient)" stroke="#ffffff" strokeWidth="2" />
              <rect x="-50" y="-30" width="100" height="60" fill="url(#cameraInput)" />
              <text x="0" y="50" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Camera Input</text>
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#4fc3f7" textAnchor="middle">1280x960 USB Camera</text>
            </g>
            
            <g transform="translate(350, 150)">
              {/* Image Conversion */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#primary-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Color Space</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Conversion</text>
              <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">LAB + HLS</text>
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">cv2.cvtColor()</text>
            </g>
            
            <g transform="translate(530, 150)">
              {/* Noise Reduction */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#primary-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Noise</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Reduction</text>
              <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">5x5 Median Filter</text>
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">TOP HAT Morphology</text>
            </g>
            
            <g transform="translate(710, 150)">
              {/* Perspective Transform */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#primary-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Perspective</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Transform</text>
              <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">Bird's Eye View</text>
              <rect x="-40" y="-25" width="80" height="40" fill="url(#warpedImage)" opacity="0.9" />
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">getPerspectiveTransform()</text>
            </g>
            
            {/* Process Blocks - Second Row */}
            <g transform="translate(830, 275)">
              {/* Thresholding */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#primary-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Binary</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Thresholding</text>
              <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">Color Channels</text>
              <rect x="-40" y="-25" width="80" height="40" fill="url(#binaryMask)" opacity="0.9" />
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">HLS L-Channel + LAB B-Channel</text>
            </g>
            
            <g transform="translate(830, 395)">
              {/* Lane Finding */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#tertiary-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Lane</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Detection</text>
              <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">Sliding Window</text>
              <rect x="-40" y="-25" width="80" height="40" fill="url(#laneDetection)" opacity="0.9" />
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Histogram Peak Detection</text>
            </g>
            
            <g transform="translate(830, 515)">
              {/* Polynomial Fitting */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#tertiary-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Polynomial</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Fitting</text>
              <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">ax² + bx + c</text>
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Least Squares Method</text>
            </g>
            
            {/* Process Blocks - Third Row */}
            <g transform="translate(650, 515)">
              {/* Smoothing Filter */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#tertiary-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Temporal</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Smoothing</text>
              <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">7-Frame Average</text>
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Weighted Filter [0.4,0.2,...,0.025]</text>
            </g>
            
            <g transform="translate(470, 515)">
              {/* Lane Deviation */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#secondary-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Lane</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Deviation</text>
              <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">Pixel → Meters</text>
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">0.0293 m/px Calibration</text>
            </g>
            
            <g transform="translate(290, 515)">
              {/* Warning Decision */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#secondary-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Warning</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Decision</text>
              <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">Threshold: 15cm</text>
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">2500Hz Warning Signal</text>
            </g>
            
            <g transform="translate(110, 515)">
              {/* Display Warning */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#secondary-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Warning</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Display</text>
              <rect x="-45" y="-10" width="90" height="25" rx="3" fill="#770000" stroke="#ff0000" />
              <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="9" fill="#ffffff" textAnchor="middle" fontWeight="bold">LANE DEPARTURE</text>
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Nextion NX8048T070 Display</text>
            </g>
            
            {/* Process Blocks - Fourth Row */}
            <g transform="translate(110, 395)">
              {/* Speaker Output */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#block-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">Audio</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Warning</text>
              <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">300ms Duration</text>
              
              {/* Speaker icon */}
              <path d="M-15,0 L-5,-10 L-5,10 Z" fill="#ffffff" />
              <rect x="-20" y="-5" width="5" height="10" fill="#ffffff" />
              <path d="M5,5 C15,-5 15,-5 5,-15 M10,10 C25,-5 25,-5 10,-20" stroke="#ffffff" strokeWidth="1.5" fill="none">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
              </path>
              
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">8Ω 5W Speaker</text>
            </g>
            
            <g transform="translate(110, 275)">
              {/* CAN Bus Integration */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#block-gradient)" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">CAN Bus</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle">Integration</text>
              <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="10" fill="#000000" textAnchor="middle">ID: 0x38F</text>
              
              {/* CAN data visualization */}
              <rect x="-40" y="-5" width="80" height="15" rx="2" fill="#222222" stroke="#444444" />
              <text x="-25" y="5" fontFamily="monospace" fontSize="8" fill="#66bb6a">0x38F</text>
              <text x="15" y="5" fontFamily="monospace" fontSize="8" fill="#4fc3f7">00000100</text>
              
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#ffffff" textAnchor="middle">Turn Signal Status</text>
            </g>
            
            <g transform="translate(110, 150)">
              {/* Results Visualization */}
              <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="url(#block-gradient)" stroke="#ffffff" strokeWidth="2" />
              <rect x="-50" y="-30" width="100" height="60" fill="url(#resultImage)" />
              <text x="0" y="50" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Visualization</text>
              <text x="0" y="-45" fontFamily="Arial, sans-serif" fontSize="10" fill="#4fc3f7" textAnchor="middle">95.7% Accuracy</text>
            </g>
            
            {/* Flow arrows */}
            <g stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.7">
              <path d="M230,150 L350,150" markerEnd="url(#arrowhead)" />
              <path d="M470,150 L590,150" markerEnd="url(#arrowhead)" />
              <path d="M710,150 L830,150" markerEnd="url(#arrowhead)" />
              <path d="M830,190 L830,235" markerEnd="url(#arrowhead)" />
              <path d="M830,315 L830,355" markerEnd="url(#arrowhead)" />
              <path d="M830,435 L830,475" markerEnd="url(#arrowhead)" />
              <path d="M770,515 L710,515" markerEnd="url(#arrowhead)" />
              <path d="M590,515 L530,515" markerEnd="url(#arrowhead)" />
              <path d="M410,515 L350,515" markerEnd="url(#arrowhead)" />
              <path d="M230,515 L170,515" markerEnd="url(#arrowhead)" />
              <path d="M110,475 L110,435" markerEnd="url(#arrowhead)" />
              <path d="M110,355 L110,315" markerEnd="url(#arrowhead)" />
              <path d="M110,235 L110,190" markerEnd="url(#arrowhead)" />
              <path d="M110,110 C110,90 130,90 170,90 C250,90 650,90 730,90 C770,90 790,90 790,110" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />
            </g>
            
            {/* Arrowhead marker */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#ffffff" />
              </marker>
            </defs>
            
            {/* Animated data packets */}
            <g>
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" path="M230,150 L340,150" />
              </use>
              
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s" path="M470,150 L580,150" />
              </use>
              
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" begin="1s" path="M710,150 L820,150" />
              </use>
              
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" begin="1.5s" path="M830,190 L830,230" />
              </use>
              
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" begin="2s" path="M830,315 L830,350" />
              </use>
              
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" begin="2.5s" path="M830,435 L830,470" />
              </use>
              
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" begin="3s" path="M770,515 L700,515" />
              </use>
              
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" begin="3.5s" path="M590,515 L520,515" />
              </use>
              
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" begin="4s" path="M410,515 L340,515" />
              </use>
              
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" begin="4.5s" path="M230,515 L160,515" />
              </use>
              
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" begin="5s" path="M110,475 L110,430" />
              </use>
              
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" begin="5.5s" path="M110,355 L110,310" />
              </use>
              
              <use xlinkHref="#data-packet2">
                <animateMotion dur="2s" repeatCount="indefinite" begin="6s" path="M110,235 L110,185" />
              </use>
            </g>
            
            {/* Performance Metrics */}
            <g transform="translate(450, 570)">
              <rect x="-350" y="-30" width="700" height="60" rx="5" ry="5" fill="rgba(20,20,40,0.7)" stroke="#ffffff" strokeWidth="1" />
              <text x="0" y="-10" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">System Performance</text>
              <text x="-320" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#4fc3f7" textAnchor="start">• 23 FPS Processing</text>
              <text x="-170" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#66bb6a" textAnchor="start">• 95.7% Detection Accuracy</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffeb3b" textAnchor="start">• ±5.2 cm Deviation Error</text>
              <text x="170" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ff7043" textAnchor="start">• 98.7 ms Warning Latency</text>
              <text x="320" y="10" fontFamily="Arial, sans-serif" fontSize="12" fill="#ff4254" textAnchor="start">• 1.8% False Positive Rate</text>
            </g>
            
            {/* Hardware Indicator */}
            <g transform="translate(170, 60)">
              <rect x="-120" y="-20" width="240" height="40" rx="5" ry="5" fill="rgba(100,0,0,0.3)" stroke="#ff4254" strokeWidth="1" strokeDasharray="5,3" />
              <text x="0" y="5" fontFamily="monospace" fontSize="12" fill="#ff4254" textAnchor="middle">Raspberry Pi 5 - 8GB RAM</text>
              <rect x="-15" y="-10" width="30" height="20" rx="3" fill="#b71c1c">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
              </rect>
            </g>
            
            {/* Voltaris Logo */}
            <g transform="translate(50, 550)">
              <circle cx="0" cy="0" r="20" fill="none" stroke="#ff4254" strokeWidth="2" />
              <circle cx="0" cy="0" r="15" fill="none" stroke="#ff4254" strokeWidth="1" />
              <path d="M-5,-10 L0,10 L5,-10" fill="none" stroke="#ff4254" strokeWidth="2" />
              <path d="M-10,0 L-18,0 M10,0 L18,0" stroke="#ff4254" strokeWidth="1.5" />
              <text x="30" y="5" fontFamily="Arial, sans-serif" fontSize="16" fill="#ff4254" fontWeight="bold">VOLTARIS</text>
            </g>
          </svg>
        </div>
      </div>

      {/* Display additional SVGs as needed - you can add more SVGs here following the same pattern */}
    </div>
  );
};

// ADAS Function selector component
export const AdasFunctionSelector = ({ activeFunction, setActiveFunction }) => {
  const functions = [
    { id: 'lane', label: 'Şerit Takip', icon: <GitMerge size={18} /> },
    { id: 'traffic', label: 'Trafik İşaret Algılama', icon: <AlertTriangle size={18} /> },
    { id: 'cruise', label: 'Hız Sabitleyici', icon: <Navigation size={18} /> },
    { id: 'blind', label: 'Kör Nokta Algılama', icon: <Eye size={18} /> },
    { id: 'camera', label: 'Geri Görüş Kamerası', icon: <Camera size={18} /> },
    { id: 'lights', label: 'Otomatik Far', icon: <Sun size={18} /> }
  ];
  
  return (
    <div className="flex overflow-x-auto scrollbar-hide">
      {functions.map((func) => (
        <button
          key={func.id}
          onClick={() => setActiveFunction(func.id)}
          className={`flex items-center whitespace-nowrap px-4 py-3 border-b-2 ${
            activeFunction === func.id 
              ? 'border-red-500 text-red-500' 
              : 'border-transparent text-gray-400 hover:text-white hover:border-gray-700'
          } transition-colors`}
        >
          <span className={`mr-2 ${activeFunction === func.id ? 'text-red-500' : 'text-gray-500'}`}>
            {func.icon}
          </span>
          {func.label}
        </button>
      ))}
    </div>
  );
};

// ADAS Function detail component
// ADAS Dashboard Component for real-time visualization
export const AdasDashboard = () => {
  const [speedData, setSpeedData] = useState(Array(20).fill(0));
  const [detectedObjects, setDetectedObjects] = useState([]);
  const [systemStatus, setSystemStatus] = useState({
    lane: "Active",
    signs: "Active",
    blindSpot: "Active",
    cruise: "Inactive"
  });
  
  // Simulate real-time data updates
  useEffect(() => {
    const timer = setInterval(() => {
      // Update speed data
      setSpeedData(prev => {
        const newData = [...prev];
        newData.shift();
        newData.push(25 + Math.random() * 10);
        return newData;
      });
      
      // Randomly update detected objects
      if (Math.random() > 0.7) {
        const newObject = {
          id: Date.now(),
          type: ["Stop Sign", "Speed Limit", "Yield", "No Entry"][Math.floor(Math.random() * 4)],
          confidence: (0.85 + Math.random() * 0.14).toFixed(2),
          distance: Math.floor(10 + Math.random() * 50)
        };
        
        setDetectedObjects(prev => [...prev.slice(-2), newObject]);
      }
      
      // Occasionally change system status
      if (Math.random() > 0.9) {
        const systems = ["lane", "signs", "blindSpot", "cruise"];
        const randomSystem = systems[Math.floor(Math.random() * systems.length)];
        const newStatus = Math.random() > 0.2 ? "Active" : "Inactive";
        
        setSystemStatus(prev => ({
          ...prev,
          [randomSystem]: newStatus
        }));
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="bg-black/80 backdrop-blur-md rounded-lg border border-gray-800 p-4 space-y-4 hole-effect">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-red-500">ADAS Gerçek Zamanlı İzleme</h3>
        <div className="flex items-center text-green-400 text-xs font-mono">
          <span className="w-2 h-2 bg-green-400 rounded-full inline-block mr-2 animate-pulse"></span>
          ONLINE
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-900/60 rounded-lg p-4">
          <h4 className="text-sm font-medium text-blue-400 mb-2 flex items-center">
            <BarChart2 size={14} className="mr-1" /> Hız Verileri
          </h4>
          <div className="h-24 flex items-end space-x-1">
            {speedData.map((value, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm w-full"
                style={{ height: `${value*2}%`, transition: "height 0.3s ease" }}
              ></div>
            ))}
          </div>
          <div className="text-right text-xs text-gray-500 mt-1">km/h</div>
        </div>
        
        <div className="bg-gray-900/60 rounded-lg p-4">
          <h4 className="text-sm font-medium text-red-400 mb-2 flex items-center">
            <Eye size={14} className="mr-1" /> Algılanan Nesneler
          </h4>
          {detectedObjects.length > 0 ? (
            <div className="space-y-2">
              {detectedObjects.map(obj => (
                <div key={obj.id} className="flex justify-between items-center text-xs">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span>
                    <span className="text-white">{obj.type}</span>
                  </div>
                  <div className="text-gray-400">
                    {obj.confidence} | {obj.distance}m
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-xs py-4">
              Nesne algılanmadı
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.entries(systemStatus).map(([key, status]) => (
          <div key={key} className="bg-gray-900/30 rounded p-2 text-xs">
            <div className="text-gray-500 uppercase tracking-wider mb-1">
              {key === "lane" ? "Şerit Takip" : 
               key === "signs" ? "İşaret Algılama" :
               key === "blindSpot" ? "Kör Nokta" : "Hız Sabitleyici"}
            </div>
            <div className={`flex items-center ${status === "Active" ? "text-green-400" : "text-red-400"}`}>
              <span className={`w-2 h-2 ${status === "Active" ? "bg-green-400" : "bg-red-400"} rounded-full inline-block mr-2 ${status === "Active" ? "animate-pulse" : ""}`}></span>
              {status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export const AdasFunctionDetail = ({ functionId }) => {
  const functionDetails = {
    lane: {
      title: "Şerit Takip Uyarı Sistemi",
      description: `Şerit Takip Uyarı Sistemi, 1280x960 çözünürlüklü bir kamerada görüntü işleme algoritması kullanarak şerit çizgilerini tespit eder. Araç şeritten çıkmaya başladığında sürücüyü sesli ve görsel olarak uyarır. Sistem, HLS ve LAB renk uzaylarında görüntü işleme, perspektif dönüşümü ve polinomial eğri tespiti kullanarak şeritleri belirler. Şerit sapması 15 cm eşiğini aştığında ekranda kırmızı "LANE DEPARTURE WARNING" mesajı gösterilir ve sesli uyarı verilir.`,
      specs: [
        "1280x960 kamera çözünürlüğü",
        "23 FPS işlem hızı",
        "±5,2 cm ortalama sapma hatası",
        "98,7 ms ortalama uyarı süresi",
        "%95,7 şerit tanımlama doğruluğu"
      ],
      algorithm: `1. Kamera kalibrasyonu
2. HLS ve LAB renk uzayına dönüşüm
3. Medyan filtre ile gürültü giderme (5x5 çekirdek)
4. TOP HAT morfolojik işlemi
5. Perspektif dönüşümü
6. Histogram tabanlı kayan pencere algoritması
7. İkinci dereceden polinom eğri hesaplama
8. Şerit sapması hesaplama ve uyarı tetikleme`,
      color: "red"
    },
    traffic: {
      title: "Trafik İşaret Algılayıcı",
      description: `YOLOv5s nesne algılama modelini kullanan trafik işareti algılama sistemi, 61 farklı trafik işaretini %91,75 doğrulukla tanımlar. Sistem, CSPDarknet53 omurgası ve PANet özellik piramidi yapısıyla düşük donanım gereksinimlerinde bile verimli çalışır. Tanımlanan işaretler, CAN Bus aracılığıyla araç kontrol sistemine iletilir ve sürücü ekranında gösterilir.`,
      specs: [
        "YOLOv5s nesne algılama modeli",
        "61 farklı trafik işareti tanıma",
        "%91,75 doğruluk oranı",
        "15-20 FPS performans",
        "20 ms ortalama çıkarım süresi"
      ],
      algorithm: `1. Görüntü normalizasyonu ve boyut standardizasyonu
2. CLAHE tabanlı görüntü işleme
3. YOLOv5s modeliyle nesne tespiti
4. Maksimum olmayan bastırma filtresi
5. Tanımlanan işaretlerin CAN mesajı formatında iletimi
6. Sürücü ekranında gösterimi`,
      color: "blue"
    },
    cruise: {
      title: "Hız Sabitleyici",
      description: `STM32F407VGT6 mikrodenetleyicisi üzerinde çalışan hız sabitleyici sistemi, 1kHz'de çalışan PID denetleyicisi kullanarak araç hızını kontrol eder. Sistem, aracın hızını anlık olarak izler ve belirlenen hız değerine göre motor torkunu otomatik olarak ayarlar. %5 aşma ile referans hızından ±2km/s sapma toleransı içinde çalışır.`,
      specs: [
        "STM32F407VGT6 mikrodenetleyici",
        "1 kHz PID denetleyici",
        "500kbps CAN-Bus haberleşme",
        "100 ms kontrol döngüsü",
        "±2km/s hız toleransı"
      ],
      algorithm: `1. Hall etkisi sensörleriyle hız tespiti
2. PID kontrolü (P=3,5, I=0,2, D=0,8)
3. FOC algoritması ile motor kontrolü
4. Doğrusal olmayan tork eğrisi uygulaması
5. Güvenlik izleme (düşük voltaj, aşırı sıcaklık, aşırı akım)`,
      color: "red"
    },
    blind: {
      title: "Kör Nokta Algılama",
      description: `Aracın arkasına 30 derece açıyla yerleştirilen iki adet RD-03D çoklu nesne algılama radarı kullanılarak kör nokta algılama sistemi oluşturulmuştur. Radarlar, kör noktadaki nesnelerin açı, hız ve uzaklık değerlerini gerçek zamanlı olarak tespit eder ve sürücüyü araç ekranında uyarır.`,
      specs: [
        "RD-03D çoklu nesne algılama radarı",
        "30 derece görüş açısı",
        "0-30 metre algılama mesafesi",
        "Açı, hız ve uzaklık ölçümü",
        "Gerçek zamanlı uyarı sistemi"
      ],
      algorithm: `1. Radar sinyallerinin alınması
2. Nesne pozisyonu ve hızının hesaplanması
3. Kör noktada nesne varlığının belirlenmesi
4. CAN-Bus üzerinden uyarı verilerinin iletimi
5. Sürücü ekranında görsel uyarı gösterimi`,
      color: "blue"
    },
    camera: {
      title: "Geri Görüş Kamerası",
      description: `Talent USB Kamera Modülü OV9726 CMOS 1MP kamera kullanılarak oluşturulan geri görüş sistemi, sürücünün aracın arkasını net bir şekilde görmesini sağlar. Sistem, vites "GERİ" konumuna getirildiğinde otomatik olarak devreye girer ve görüntüyü araç ekranına yansıtır. RTC kesmesi yöntemi kullanılarak vites durumu gerçek zamanlı olarak izlenir.`,
      specs: [
        "OV9726 CMOS 1MP kamera",
        "USB bağlantı",
        "RTC kesmesi (Interrupt) yöntemi",
        "Otomatik aktivasyon",
        "Düşük gecikme süresi"
      ],
      algorithm: `1. Vites durumunun RTC kesmesiyle izlenmesi
2. "GERİ" konumu tespit edildiğinde kameranın aktifleştirilmesi
3. USB arayüzü üzerinden görüntü alımı
4. Görüntünün işlenmesi ve optimize edilmesi
5. Araç ekranına gerçek zamanlı yansıtma`,
      color: "red"
    },
    lights: {
      title: "Otomatik Far",
      description: `BH1750 ortam ışığı sensörü modülü kullanılarak geliştirilen otomatik far sistemi, ortam ışık şiddetini sürekli olarak ölçer. Işık şiddeti belirlenen eşik değerin altına düştüğünde, sistem AKS'ye "araç farları aç" komutu göndererek farların otomatik olarak açılmasını sağlar. I2C haberleşme protokolü kullanılarak sensör verileri Raspberry Pi 5'e iletilir.`,
      specs: [
        "BH1750 ortam ışığı sensörü",
        "I2C haberleşme protokolü",
        "Ayarlanabilir ışık eşiği",
        "Otomatik kontrol sistemi",
        "Düşük güç tüketimi"
      ],
      algorithm: `1. BH1750 sensörü ile ortam ışık şiddetinin ölçülmesi
2. I2C protokolü ile verilerin iletilmesi
3. Işık şiddetinin eşik değerle karşılaştırılması
4. Eşik altında AKS'ye komut gönderilmesi
5. Farların otomatik kontrolü`,
      color: "blue"
    }
  };
  
  const detail = functionDetails[functionId];
  
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-black p-6 rounded-lg border border-gray-800 relative">
        {/* Circuit pattern background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="circuit-pattern w-full h-full"></div>
        </div>
        
        <h3 className={`text-xl font-bold mb-4 text-${detail.color}-500 relative z-10`}>{detail.title}</h3>
        <p className="text-gray-300 mb-6 border-l-2 border-gray-500 pl-4 relative z-10">{detail.description}</p>
        
        <div className="relative z-10">
          <h4 className="text-lg font-semibold text-white mb-3">Teknik Özellikler</h4>
          <ul className="space-y-2">
            {detail.specs.map((spec, index) => (
              <li key={index} className="flex items-start">
                <div className={`text-${detail.color}-500 mr-2`}>•</div>
                <div className="text-gray-300 text-sm">{spec}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-black p-6 rounded-lg border border-gray-800 relative">
        {/* Circuit pattern background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="circuit-pattern w-full h-full"></div>
        </div>
        
        <h3 className={`text-xl font-bold mb-4 text-${detail.color}-500 relative z-10`}>Algoritma Akışı</h3>
        
        <div className="relative z-10 font-mono text-sm text-gray-300 bg-black/50 p-4 rounded border border-gray-700 whitespace-pre-line">
          {detail.algorithm}
        </div>
        
        <div className="mt-6 relative z-10">
          <div className="w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent mb-4"></div>
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">ADAS_FUNCTION_ID: {functionId.toUpperCase()}</div>
            <div className="flex items-center text-red-500">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-xs">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};