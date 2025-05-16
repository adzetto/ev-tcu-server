import React from 'react';

// Sponsorship tier component
export const SponsorshipTier = ({ tier, price, benefits, color = "red", icon }) => {
  const colorClasses = {
    red: "from-red-600 to-red-800 border-red-500 hover:border-red-400 text-red-500",
    blue: "from-blue-600 to-blue-800 border-blue-500 hover:border-blue-400 text-blue-500",
    gold: "from-yellow-600 to-yellow-700 border-yellow-500 hover:border-yellow-400 text-yellow-500",
    silver: "from-gray-400 to-gray-600 border-gray-400 hover:border-gray-300 text-gray-400",
    bronze: "from-amber-700 to-amber-900 border-amber-700 hover:border-amber-600 text-amber-700"
  };
  
  return (
    <div className={`bg-black p-6 rounded-lg border-b-2 ${colorClasses[color]} 
      transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
      hover:shadow-${color === 'red' ? 'red' : color === 'blue' ? 'blue' : color === 'gold' ? 'yellow' : color === 'silver' ? 'gray' : 'amber'}-900/20 
      group relative overflow-hidden backdrop-blur-sm h-full flex flex-col`}
    >
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="circuit-pattern w-full h-full"></div>
      </div>
      
      <div className="relative z-10 flex-1">
        <div className="text-center mb-4">
          <div className={`text-${color === 'red' ? 'red' : color === 'blue' ? 'blue' : color === 'gold' ? 'yellow' : color === 'silver' ? 'gray' : 'amber'}-500 text-4xl font-bold mb-2`}>
            {tier}
          </div>
          <div className="text-white text-2xl font-semibold">{price}</div>
        </div>
        
        <div className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className={`text-${color === 'red' ? 'red' : color === 'blue' ? 'blue' : color === 'gold' ? 'yellow' : color === 'silver' ? 'gray' : 'amber'}-500 mr-2 mt-1`}>{icon}</div>
              <div className="text-gray-300 text-sm">{benefit}</div>
            </div>
          ))}
        </div>
        
        <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${colorClasses[color]} mt-4 transition-all duration-300 ease-in-out`}></div>
      </div>
      
      <div className="mt-auto pt-4">
        <button className={`w-full bg-gradient-to-r ${colorClasses[color]} text-white px-4 py-2 rounded-lg flex items-center justify-center font-medium transition-colors shadow-lg`}>
          İletişime Geç
        </button>
      </div>
    </div>
  );
};

// Technical sponsorship benefits component
export const SponsorshipBenefit = ({ title, description, icon, color = "red" }) => {
  return (
    <div className={`bg-black p-6 rounded-lg border-l-4 border-${color === 'red' ? 'red' : 'blue'}-500 hover:bg-${color === 'red' ? 'red' : 'blue'}-900/5 transition-all duration-300 backdrop-blur-sm relative group h-full`}>
      {/* Technical graphical elements in the background */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="80" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1" className={`text-${color === 'red' ? 'red' : 'blue'}-500`} />
          <path d="M65,20 L15,20 L15,70" fill="none" stroke="currentColor" strokeWidth="1" className={`text-${color === 'red' ? 'red' : 'blue'}-500`} />
          <circle cx="15" cy="70" r="5" fill="currentColor" className={`text-${color === 'red' ? 'red' : 'blue'}-500 opacity-30`} />
        </svg>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className={`text-${color === 'red' ? 'red' : 'blue'}-500 mt-1`}>
          {icon}
        </div>
        <div>
          <h4 className={`font-bold text-lg mb-3 text-${color === 'red' ? 'red' : 'blue'}-500`}>{title}</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-${color === 'red' ? 'red' : 'blue'}-500 to-transparent mt-4 transition-all duration-500`}></div>
        </div>
      </div>
    </div>
  );
};

// Contact form component for sponsorship section
export const SponsorshipContact = () => {
  return (
    <div className="bg-black/80 p-6 rounded-lg border border-gray-800 relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="circuit-pattern w-full h-full"></div>
      </div>
      
      <h3 className="text-2xl font-bold mb-6 text-red-500 relative z-10">Sponsorluk İletişim Formu</h3>
      
      <form className="space-y-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 text-sm mb-1">Adınız Soyadınız</label>
            <input 
              type="text" 
              className="w-full bg-black/50 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Şirket</label>
            <input 
              type="text" 
              className="w-full bg-black/50 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-gray-400 text-sm mb-1">E-posta</label>
          <input 
            type="email" 
            className="w-full bg-black/50 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-red-500 transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-gray-400 text-sm mb-1">Telefon</label>
          <input 
            type="tel" 
            className="w-full bg-black/50 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-red-500 transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-gray-400 text-sm mb-1">İlgilendiğiniz Sponsorluk Paketi</label>
          <select className="w-full bg-black/50 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-red-500 transition-colors">
            <option value="">Seçiniz</option>
            <option value="platinum">Platinum Sponsor</option>
            <option value="gold">Altın Sponsor</option>
            <option value="silver">Gümüş Sponsor</option>
            <option value="bronze">Bronz Sponsor</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-400 text-sm mb-1">Mesajınız</label>
          <textarea 
            rows="4" 
            className="w-full bg-black/50 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-red-500 transition-colors"
          ></textarea>
        </div>
        
        <div>
          <button 
            type="submit" 
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white px-6 py-3 rounded-lg flex items-center justify-center font-medium transition-colors shadow-lg shadow-red-900/20"
          >
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
};