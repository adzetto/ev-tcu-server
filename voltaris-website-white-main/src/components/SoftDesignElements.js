import React from 'react';
import { Gauge, Zap, Settings, Eye } from 'lucide-react';
import './SoftWhiteTheme.css';
import './ProfessionalWhiteTheme.css';
import './ProfessionalFonts.css';

export const SoftFeatureBox = ({ title, icon: Icon, children, color = "blue" }) => {
  const colorClasses = {
    blue: "text-blue-600 border-blue-500/40",
    red: "text-red-600 border-red-500/40",
    green: "text-green-600 border-green-500/40",
    orange: "text-orange-600 border-orange-500/40",
    purple: "text-purple-600 border-purple-500/40"
  };
  
  return (
    <div className="rounded-lg border p-5 relative overflow-hidden transition-all duration-300 hover:shadow-md" 
         style={{background: "#ffffff"}}>
      {/* Professional grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-pattern"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`flex items-center mb-4 ${colorClasses[color]}`}>
          <div className={`p-2 rounded-md bg-gray-50 mr-3 ${colorClasses[color]}`}>
            <Icon size={20} />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        
        <div className="text-gray-700 space-y-3">
          {children}
        </div>
        
        {/* Subtle accent line */}
        <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${color === 'blue' ? 'from-blue-500' : color === 'red' ? 'from-red-500' : color === 'green' ? 'from-green-500' : color === 'orange' ? 'from-orange-500' : 'from-purple-500'} to-transparent`}></div>
      </div>
    </div>
  );
};

export const SoftStatCard = ({ value, label, icon: Icon, color = "blue" }) => {
  const colorClasses = {
    blue: "text-blue-600 border-blue-500/40",
    red: "text-red-600 border-red-500/40",
    green: "text-green-600 border-green-500/40",
    orange: "text-orange-600 border-orange-500/40",
    purple: "text-purple-600 border-purple-500/40"
  };
  
  return (
    <div className="rounded-lg border p-4 flex items-center transition-all duration-300 hover:shadow-md bg-white">
      {/* Icon */}
      <div className={`p-3 rounded-md bg-gray-50 mr-4 ${colorClasses[color]}`}>
        <Icon size={20} />
      </div>
      
      {/* Content */}
      <div>
        <div className="text-2xl font-bold text-gray-900 tech-data">{value}</div>
        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{label}</div>
      </div>
    </div>
  );
};

export const SoftSection = ({ title, subtitle, children, cornerType = "square" }) => {
  return (
    <div className="my-8 p-6 rounded-lg border relative bg-white shadow-sm">
      {cornerType === "square" && (
        <>
          <div className="absolute top-0 left-0 w-3 h-10 bg-blue-500/20"></div>
          <div className="absolute top-0 left-0 w-10 h-3 bg-blue-500/20"></div>
          
          <div className="absolute top-0 right-0 w-3 h-10 bg-red-500/20"></div>
          <div className="absolute top-0 right-0 w-10 h-3 bg-red-500/20"></div>
          
          <div className="absolute bottom-0 left-0 w-3 h-10 bg-green-500/20"></div>
          <div className="absolute bottom-0 left-0 w-10 h-3 bg-green-500/20"></div>
          
          <div className="absolute bottom-0 right-0 w-3 h-10 bg-orange-500/20"></div>
          <div className="absolute bottom-0 right-0 w-10 h-3 bg-orange-500/20"></div>
        </>
      )}
      
      {cornerType === "lines" && (
        <>
          <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          <div className="absolute top-0 left-0 w-px h-20 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
          
          <div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-red-500/50 to-transparent"></div>
          <div className="absolute top-0 right-0 w-px h-20 bg-gradient-to-b from-red-500/50 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-20 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-px h-20 bg-gradient-to-t from-green-500/50 to-transparent"></div>
          
          <div className="absolute bottom-0 right-0 w-20 h-px bg-gradient-to-l from-orange-500/50 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-px h-20 bg-gradient-to-t from-orange-500/50 to-transparent"></div>
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center mb-1 pb-1 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        <p className="text-gray-600 mb-6 text-sm">{subtitle}</p>
        
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Example of using these components
export const SoftDesignShowcase = () => {
  return (
    <SoftSection
      title="Voltaris Teknoloji Platformu"
      subtitle="Elektromobil yarışları için yüksek verimlilik teknolojileri"
      cornerType="lines"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SoftFeatureBox
          title="Gelişmiş Enerji Yönetimi"
          icon={Zap}
          color="red"
        >
          <p className="text-gray-700 text-sm leading-relaxed">Voltaris'in patentli enerji yönetim algoritmaları, aracın güç tüketimini optimize ederek minimum enerji tüketimi ile maksimum menzil sunmaktadır.</p>
          <div className="flex items-center justify-between mt-4 py-2 border-t border-gray-100">
            <span className="text-xs text-gray-500 font-mono">Enerji Verimliliği:</span>
            <span className="bg-red-50 text-red-600 rounded-md px-2 py-1 text-xs font-medium">15-20 Wh/km</span>
          </div>
        </SoftFeatureBox>
        
        <SoftFeatureBox
          title="Sürücü Destek Sistemleri"
          icon={Eye}
          color="blue"
        >
          <p className="text-gray-700 text-sm leading-relaxed">ADAS teknolojileri, Raspberry Pi 5 platformu üzerinde çalışan görüntü işleme modülleri ve sensör entegrasyonu ile yüksek güvenlikli sürüş deneyimi sunar.</p>
          <div className="flex items-center justify-between mt-4 py-2 border-t border-gray-100">
            <span className="text-xs text-gray-500 font-mono">İşlem Kapasitesi:</span>
            <span className="bg-blue-50 text-blue-600 rounded-md px-2 py-1 text-xs font-medium">23 FPS @ 640x480</span>
          </div>
        </SoftFeatureBox>
      </div>
      
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-100">Teknik Performans Göstergeleri</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SoftStatCard 
            value="80-100 km" 
            label="Maksimum Menzil" 
            icon={Gauge}
            color="green"
          />
          
          <SoftStatCard 
            value="70 km/sa" 
            label="Azami Hız" 
            icon={Zap}
            color="red"
          />
          
          <SoftStatCard 
            value="120 kg" 
            label="Araç Ağırlığı" 
            icon={Settings}
            color="blue"
          />
          
          <SoftStatCard 
            value="1.680 Wh" 
            label="Batarya Kapasitesi" 
            icon={Zap}
            color="orange"
          />
        </div>
      </div>

      <div className="mt-10 bg-gray-50 p-5 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-3">Teknoloji Entegrasyonu</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Donanım Bileşenleri</h4>
            <ul className="text-xs text-gray-700 space-y-2">
              <li className="flex items-baseline">
                <span className="w-3 h-3 bg-red-100 rounded-sm mr-2 flex-shrink-0"></span>
                <span>Raspberry Pi 5 - 8GB RAM, Çift Kamera Modülü</span>
              </li>
              <li className="flex items-baseline">
                <span className="w-3 h-3 bg-blue-100 rounded-sm mr-2 flex-shrink-0"></span>
                <span>STM32F407 Mikrodenetleyici - CAN Bus Protokolü</span>
              </li>
              <li className="flex items-baseline">
                <span className="w-3 h-3 bg-green-100 rounded-sm mr-2 flex-shrink-0"></span>
                <span>Batarya Yönetim Sistemi (BMS) - LiFePO4 Batarya</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Yazılım Altyapısı</h4>
            <ul className="text-xs text-gray-700 space-y-2">
              <li className="flex items-baseline">
                <span className="w-3 h-3 bg-purple-100 rounded-sm mr-2 flex-shrink-0"></span>
                <span>YOLOv5s CNN Mimarisi - Gerçek Zamanlı Nesne Tanıma</span>
              </li>
              <li className="flex items-baseline">
                <span className="w-3 h-3 bg-yellow-100 rounded-sm mr-2 flex-shrink-0"></span>
                <span>PID Kontrol Algoritmaları - Adaptif Hız Kontrolü</span>
              </li>
              <li className="flex items-baseline">
                <span className="w-3 h-3 bg-indigo-100 rounded-sm mr-2 flex-shrink-0"></span>
                <span>Python & C++ - Kritik Zaman Uygulamaları</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SoftSection>
  );
};

export default { SoftFeatureBox, SoftStatCard, SoftSection, SoftDesignShowcase };
