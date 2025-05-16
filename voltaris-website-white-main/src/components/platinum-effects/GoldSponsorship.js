import React, { useState } from 'react';
import { ArrowDownToLine, Megaphone, Target, Award, ChevronDown, ChevronUp } from 'lucide-react';
import SponsorshipModal from '../../SponsorshipModal';
import GoldTierComponent from './GoldTierComponent';
import './GoldSponsorship.css';

const GoldSponsorship = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailsExpanded, setDetailsExpanded] = useState(false);

  const goldBenefits = [
    "Aracın ön ve yan yüzeylerinde orta boy logo",
    "Web sitesi ve tüm medya materyallerinde ikincil öncelikli tanıtım",
    "Etkinlik ve yarışmalarda VIP erişim",
    "Özel teşekkür plaketi",
    "Ekip tişörtlerinde logo"
  ];

  return (
    <div className="gold-sponsorship-container">
      <div className="gold-sponsorship-content">
        <div className="gold-tier-component-wrapper">
          <GoldTierComponent 
            price="₺35,000+" 
            benefits={goldBenefits}
            onContactClick={() => setModalOpen(true)}
          />
        </div>
        
        <div className="gold-benefits-section">
          <h2 className="gold-benefits-title">Altın Sponsorluk Avantajları</h2>
          <p className="gold-benefits-description">
            Altın sponsorlarımız, Voltaris elektrikli araç projemizde ikinci en yüksek görünürlük seviyesine sahiptir. 
            Bu kademe, markanızın yarışma aracımızda, ekipmanlarımızda ve tüm etkinliklerimizde öne çıkmasını sağlar.
          </p>
          
          <div className="gold-advantages-grid">
            <div className="gold-advantage-card">
              <Megaphone className="gold-advantage-icon" />
              <h3>Marka Görünürlüğü</h3>
              <p>Aracın ön ve yan yüzeylerinde orta boy logo ile yarışma boyunca markanızın güçlü temsili.</p>
            </div>
            
            <div className="gold-advantage-card">
              <Target className="gold-advantage-icon" />
              <h3>Hedef Kitleye Erişim</h3>
              <p>Teknoloji ve mühendislik alanındaki en parlak zihinlerle doğrudan etkileşim ve genç yeteneklere erişim.</p>
            </div>
            
            <div className="gold-advantage-card">
              <ArrowDownToLine className="gold-advantage-icon" />
              <h3>Medya Görünürlüğü</h3>
              <p>Sosyal medya ve basın bültenlerinde düzenli paylaşımlar ile markanızın sürekli tanıtımı.</p>
            </div>
            
            <div className="gold-advantage-card">
              <Award className="gold-advantage-icon" />
              <h3>VIP Erişim</h3>
              <p>Yarışmalar ve etkinliklerde özel erişim hakları ve takım üyeleriyle doğrudan iletişim fırsatı.</p>
            </div>
          </div>
          
          <div className="gold-details-toggle" onClick={() => setDetailsExpanded(!detailsExpanded)}>
            <button className="gold-details-button">
              <span>Teknik İşbirliği Detayları</span>
              {detailsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
          
          {detailsExpanded && (
            <div className="gold-expanded-details animate-slideDown">
              <h3>Teknik İşbirliği Fırsatları</h3>
              <p>
                Altın sponsorlar olarak, ekibimizle aşağıdaki alanlarda teknik işbirliği yapabilirsiniz:
              </p>
              <ul>
                <li>Elektrikli araç teknolojileri geliştirme projelerinde ortaklık</li>
                <li>Enerji verimliliği optimizasyonu için ortak AR-GE çalışmaları</li>
                <li>Mühendislik öğrencileri ile staj ve işe alım bağlantıları</li>
                <li>Kurumsal tanıtım günlerinde ekip üyelerimizin katılımı</li>
                <li>Şirketinizin mühendislik ekibiyle ortak çalışma grupları</li>
              </ul>
              <p>
                Bu işbirliği fırsatları, şirketinizin inovasyon ekosistemine katkıda bulunmasını ve geleceğin teknolojilerinde söz sahibi olmasını sağlar.
              </p>
            </div>
          )}
          
          <button 
            className="gold-contact-button"
            onClick={() => setModalOpen(true)}
          >
            İletişime Geç
          </button>
        </div>
      </div>
      
      {/* Sponsorship Modal */}
      <SponsorshipModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        currentTier="gold"
      />
    </div>
  );
};

export default GoldSponsorship; 