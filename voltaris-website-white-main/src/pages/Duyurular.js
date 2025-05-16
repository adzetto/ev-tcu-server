import React from 'react';
import { Calendar, Award, ExternalLink, ArrowLeft } from 'lucide-react';

const Duyurular = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      {/* Professional page header */}
      <div className="bg-white shadow-sm border-b border-gray-200 py-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-voltaris-neutral-800 flex items-center">
              <Calendar size={24} className="mr-3 text-voltaris-red" />
              Duyurular
            </h1>
            <a 
              href="/" 
              className="flex items-center text-voltaris-neutral-600 hover:text-voltaris-red transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} className="mr-1" />
              Ana Sayfaya Dön
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Guran Nakliyat Announcement */}
          <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden mb-6">
            <div className="border-b border-gray-100 bg-gradient-to-r from-amber-50/50 to-white px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-voltaris-neutral-800 flex items-center">
                  <Award size={20} className="mr-2 text-amber-500" />
                  Yeni Altın Sponsorumuz
                </h3>
                <span className="text-sm text-voltaris-neutral-500">25 Nisan 2025</span>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-voltaris-neutral-700 mb-5 leading-relaxed">
                Voltaris Elektromobil Takımı olarak, <strong>Guran Nakliyat</strong>'ın Altın Sponsorumuz olduğunu duyurmaktan memnuniyet duyarız. 
              </p>
              
              <p className="text-voltaris-neutral-700 mb-5 leading-relaxed">
                <strong>Guran Nakliyat</strong>, sektörde uzun yıllara dayanan deneyimiyle, lojistik alanında güvenilir ve kaliteli hizmet sunmaktadır. Firma, Voltaris Elektromobil Takımı'nın sürdürülebilir ulaşım teknolojileri geliştirme vizyonunu benimseyerek projemize destek vermeyi tercih etmiştir.
              </p>
              
              <p className="text-voltaris-neutral-700 mb-6 leading-relaxed">
                Destekleri için teşekkür eder, başarılı işbirliğimizin devamını dileriz.
              </p>
              
              {/* Sponsor Logo Section */}
              <div className="bg-gray-50 py-5 px-6 rounded-lg border border-gray-100 flex flex-col items-center">
                <a 
                  href="http://www.gurannakliyat.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="sponsor-link flex items-center text-sm text-voltaris-neutral-600 mb-3 hover:text-voltaris-blue transition-colors"
                >
                  <span>www.gurannakliyat.com</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
                <div className="overflow-hidden rounded-md mb-2">
                  <img 
                    src={`${process.env.PUBLIC_URL}/sponsors/guran_nakliyat_logo_yatay.png`}
                    alt="Guran Nakliyat" 
                    className="max-w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                    style={{ maxHeight: "80px" }}
                  />
                </div>
                <div className="text-xs text-voltaris-neutral-500 mt-2 text-center italic">
                  Voltaris Elektromobil Takımı'nın Altın Sponsoru
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="text-sm text-voltaris-neutral-500">
                  Kategori: <span className="text-amber-500 font-medium">Sponsorluk</span>
                </div>
                <a 
                  href="#sponsors"
                  className="text-sm text-voltaris-blue hover:text-voltaris-red transition-colors"
                >
                  Tüm Sponsorlar
                </a>
              </div>
            </div>
          </div>
          
          {/* Add more announcements here in the future */}
          
          {/* Empty state for future announcements */}
          <div className="text-center py-8 text-voltaris-neutral-500 text-sm">
            Daha fazla duyuru için takipte kalın.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Duyurular;