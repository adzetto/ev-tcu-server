import React from 'react';
import { GitMerge, AlertTriangle, Navigation, Eye, Camera, Sun, CircuitBoard, ArrowRight } from "lucide-react";

// Helper function for placeholder images
const getPlaceholderImage = (width, height, color = "0A0A14") => {
  return `https://via.placeholder.com/${width}x${height}/${color}/FF4254?text=VOLTARIS`;
};

// ADAS Feature Card
export const AdasFeatureCard = ({ title, description, icon, color = "red", imageUrl }) => {
  const colorClasses = {
    red: "from-red-600 to-red-700 border-red-500 text-red-500 bg-red-500/10",
    blue: "from-blue-600 to-blue-700 border-blue-500 text-blue-500 bg-blue-500/10"
  };
  
  return (
    <div className={`bg-black/50 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden relative group hover:shadow-lg transition-all duration-300`}>
      {/* Background image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl || getPlaceholderImage(600, 400)} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="adas-card-image-overlay"></div>
        
        {/* Icon overlay */}
        <div className={`absolute top-4 right-4 p-2 rounded-full ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
      
      <div className="p-5">
        <h4 className={`font-bold text-lg mb-2 ${color === 'red' ? 'text-red-500' : 'text-blue-500'}`}>{title}</h4>
        <p className="text-gray-400 text-sm mb-3">{description}</p>
        
        <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${
          color === 'red' 
            ? 'from-red-600 to-red-800' 
            : 'from-blue-600 to-blue-800'
        } transition-all duration-500`}></div>
      </div>
    </div>
  );
};

// ADAS Technical Diagram
export const AdasTechnicalDiagram = () => {
  return (
    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="circuit-pattern w-full h-full"></div>
      </div>
      
      <div className="relative z-10">
        <h4 className="text-xl font-bold mb-6 text-center text-gradient-red-blue">ADAS Sistem Mimarisi</h4>
        
        <div className="relative mx-auto max-w-4xl">
          {/* Main diagram container */}
          <div className="border border-gray-800 rounded-lg p-6 bg-black/80">
            {/* Central system box */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-900 rounded-lg p-4 w-64 mx-auto mb-6 text-center relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-red-500"></div>
              
              <CircuitBoard size={32} className="mx-auto mb-2 text-blue-500" />
              <div className="text-lg font-bold mb-1">Ana Kontrol Ünitesi</div>
              <div className="text-xs text-gray-400">Raspberry Pi 5 + STM32F407</div>
            </div>
            
            {/* Connection lines */}
            <div className="relative h-16 mb-4">
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
              <div className="absolute left-1/4 top-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              <div className="absolute right-1/4 top-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            
            {/* Sensor and output boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/70 border border-red-900/50 rounded-lg p-3 text-center">
                <Camera size={24} className="mx-auto mb-2 text-red-500" />
                <div className="font-medium mb-1">Kamera Modülü</div>
                <div className="text-xs text-gray-400">Görüntü İşleme</div>
              </div>
              
              <div className="bg-black/70 border border-blue-900/50 rounded-lg p-3 text-center">
                <Navigation size={24} className="mx-auto mb-2 text-blue-500" />
                <div className="font-medium mb-1">Radar/Ultrasonik</div>
                <div className="text-xs text-gray-400">Mesafe Ölçümü</div>
              </div>
              
              <div className="bg-black/70 border border-red-900/50 rounded-lg p-3 text-center">
                <Eye size={24} className="mx-auto mb-2 text-red-500" />
                <div className="font-medium mb-1">IR Algılayıcılar</div>
                <div className="text-xs text-gray-400">Şerit Takibi</div>
              </div>
            </div>
            
            {/* Data flow arrows */}
            <div className="my-4 text-center">
              <div className="animate-pulse-slow">
                <ArrowRight size={32} className="mx-auto text-blue-500" />
              </div>
            </div>
            
            {/* Output systems */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/70 border border-red-900/50 rounded-lg p-3 text-center">
                <div className="font-medium mb-1">Sürücü Arayüzü</div>
                <div className="text-xs text-gray-400">Uyarılar ve Göstergeler</div>
              </div>
              
              <div className="bg-black/70 border border-blue-900/50 rounded-lg p-3 text-center">
                <div className="font-medium mb-1">Motor Kontrol Sistemi</div>
                <div className="text-xs text-gray-400">Hız Kontrolü ve Optimizasyon</div>
              </div>
            </div>
            
            {/* Technical specifications overlay */}
            <div className="absolute top-2 right-2 text-xs font-mono text-gray-500">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                <span>v1.2.4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ADAS Function Selector Component
export const AdasFunctionSelector = ({ activeFunction, setActiveFunction }) => {
  const functions = [
    { id: 'lane', label: 'Şerit Takip', icon: <GitMerge size={16} /> },
    { id: 'signs', label: 'Trafik İşaretleri', icon: <AlertTriangle size={16} /> },
    { id: 'cruise', label: 'Hız Sabitleyici', icon: <Navigation size={16} /> },
    { id: 'blindspot', label: 'Kör Nokta', icon: <Eye size={16} /> }
  ];
  
  return (
    <div className="flex overflow-x-auto border-b border-gray-800">
      {functions.map((func) => (
        <button
          key={func.id}
          onClick={() => setActiveFunction(func.id)}
          className={`px-4 py-3 font-medium text-sm whitespace-nowrap flex items-center adas-function-select ${
            activeFunction === func.id ? 'adas-function-active text-red-400' : 'text-gray-400 hover:text-white'
          }`}
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

// ADAS Function Detail Component
export const AdasFunctionDetail = ({ functionId }) => {
  const functions = {
    lane: {
      title: "Şerit Takip Sistemi",
      description: 
        "Kamera modülünden gelen görüntüyü OpenCV kütüphanesi ile işleyerek şerit çizgilerini tespit eden sistem, sürücünün farkında olmadan şerit dışına çıkması durumunda sesli ve görsel uyarı vererek güvenliği artırır.",
      image: getPlaceholderImage(800, 400),
      specs: [
        { label: "Kullanılan Algoritma", value: "Canny Edge Detection + Hough Transform" },
        { label: "Tepki Süresi", value: "< 200ms" },
        { label: "Doğruluk Oranı", value: "%95+" },
        { label: "Çalışma Koşulları", value: "Gündüz, hafif yağmur" }
      ]
    },
    signs: {
      title: "Trafik İşareti Tanıma Sistemi",
      description: 
        "YOLOv5s nesne algılama modeli kullanarak yol kenarındaki trafik işaretlerini gerçek zamanlı olarak tespit eden sistem, tespit edilen işaretleri sürücü ekranında göstererek bilgilendirme yapar.",
      image: getPlaceholderImage(800, 400),
      specs: [
        { label: "Tanınan İşaret Sayısı", value: "61 farklı trafik işareti" },
        { label: "Model Doğruluğu", value: "%92 mAP" },
        { label: "İşlem Süresi", value: "25-30 FPS" },
        { label: "Algılama Mesafesi", value: "25 metreye kadar" }
      ]
    },
    cruise: {
      title: "Akıllı Hız Sabitleyici",
      description: 
        "PID kontrol algoritması kullanan hız sabitleyici sistem, belirlenen hızda sabit giderek sürücü konforunu artırır ve enerji tüketimini optimize ederek menzili artırır.",
      image: getPlaceholderImage(800, 400),
      specs: [
        { label: "Kontrol Algoritması", value: "PID (Oransal-İntegral-Türevsel)" },
        { label: "Hız Sabitleme Hassasiyeti", value: "±1 km/s" },
        { label: "Enerji Tasarrufu", value: "%5-8 arasında" },
        { label: "Aktivasyon Koşulu", value: "15 km/s üzerinde" }
      ]
    },
    blindspot: {
      title: "Kör Nokta Algılama Sistemi",
      description: 
        "Aracın yan ve arka taraflarında bulunan radar ve ultrasonik sensörler ile kör noktadaki araçları veya engelleri tespit ederek sürücüyü uyarır, böylece şerit değiştirme manevralarının güvenliğini artırır.",
      image: getPlaceholderImage(800, 400),
      specs: [
        { label: "Sensör Tipi", value: "Ultrasonik + Kızılötesi" },
        { label: "Algılama Mesafesi", value: "5 metre" },
        { label: "Uyarı Tipi", value: "Görsel + Sesli" },
        { label: "Tepki Süresi", value: "< 100ms" }
      ]
    }
  };
  
  const currentFunction = functions[functionId] || functions.lane;
  
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-bold mb-4 text-red-500">{currentFunction.title}</h3>
        <p className="text-gray-300 mb-6 border-l-2 border-red-500/30 pl-4">
          {currentFunction.description}
        </p>
        
        <div className="bg-gray-950/80 backdrop-blur-md p-4 rounded-lg border border-gray-800">
          <h4 className="text-sm font-bold mb-3 text-blue-500">Teknik Özellikler</h4>
          <div className="space-y-3">
            {currentFunction.specs.map((spec, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-gray-400">{spec.label}:</span>
                <span className="text-white font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative rounded-lg overflow-hidden border border-gray-800 group">
        <img 
          src={currentFunction.image} 
          alt={currentFunction.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      </div>
    </div>
  );
};