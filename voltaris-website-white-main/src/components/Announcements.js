import React from 'react';
import { Calendar, Award, ExternalLink } from 'lucide-react';

const Announcements = () => {
  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-voltaris-neutral-100 to-white px-4 py-3 border-b border-gray-200">
        <h3 className="text-lg font-bold text-voltaris-neutral-800 flex items-center">
          <Calendar size={18} className="mr-2 text-voltaris-red" />
          Duyurular
        </h3>
      </div>
      
      <div className="p-4">
        {/* Announcement Item - Guran Nakliyat */}
        <div className="announcement-item mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-start">
            <div className="announcement-badge bg-voltaris-neutral-100 p-1.5 rounded-full mr-3 flex-shrink-0">
              <Award size={16} className="text-voltaris-red" />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                <h4 className="font-semibold text-voltaris-neutral-800 mr-2">Yeni Altın Sponsorumuz</h4>
                <span className="text-xs text-voltaris-neutral-500 mt-1 sm:mt-0">25 Nisan 2025</span>
              </div>
              <p className="text-voltaris-neutral-700 text-sm mb-3">
                Voltaris Elektromobil Takımı olarak, <strong>Guran Nakliyat</strong>'ın Altın Sponsorumuz olduğunu duyurmaktan memnuniyet duyarız. Destekleri için teşekkür eder, başarılı işbirliğimizin devamını dileriz.
              </p>
              
              {/* Sponsor Logo Section */}
              <div className="bg-gray-50 py-3 px-4 rounded-lg border border-gray-100 flex flex-col items-center">
                <a 
                  href="http://www.gurannakliyat.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="sponsor-link flex items-center text-xs text-voltaris-neutral-600 mb-2 hover:text-voltaris-blue transition-colors"
                >
                  <span>www.gurannakliyat.com</span>
                  <ExternalLink size={12} className="ml-1" />
                </a>
                <div className="overflow-hidden rounded-md">
                  <img 
                    src={`${process.env.PUBLIC_URL}/sponsors/guran_nakliyat_logo_yatay.png`}
                    alt="Guran Nakliyat" 
                    className="max-w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                    style={{ maxHeight: "70px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Can add more announcements here in the future */}
      </div>
    </div>
  );
};

export default Announcements;