import React, { useState } from 'react';
import { Zap, BarChart3, Users, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import SponsorshipModal from '../../SponsorshipModal';
import './SilverSponsorship.css';

const SilverSponsorship = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailsExpanded, setDetailsExpanded] = useState(false);

  const silverBenefits = [
    "Aracın yan yüzeylerinde küçük logo",
    "Web sitesi ve sosyal medyada düzenli tanıtım",
    "Yarışma etkinliklerine davet",
    "Teşekkür sertifikası",
    "Kurum logonuzun ekip formalarında gösterimi"
  ];

  return (
    <div className="silver-sponsorship-container">
      <div className="silver-sponsorship-content">
        <div className="silver-tier-wrapper">
          <div className="silver-tier-card">
            <div className="silver-tier-header">
              <div className="silver-tier-badge">Silver</div>
              <h2 className="silver-tier-price">₺20,000+</h2>
            </div>
            <ul className="silver-tier-benefits">
              {silverBenefits.map((benefit, index) => (
                <li key={index} className="silver-tier-benefit-item">
                  <span className="silver-tier-check">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <button 
              className="silver-tier-button"
              onClick={() => setModalOpen(true)}
            >
              İletişime Geç
            </button>
          </div>
        </div>
        
        <div className="silver-benefits-section">
          <h2 className="silver-benefits-title">Gümüş Sponsorluk Detayları</h2>
          <p className="silver-benefits-description">
            Gümüş sponsorlarımız, Voltaris elektrikli araç projemizde değerli destekçilerimiz arasında yer alır. 
            Bu sponsorluk seviyesi, markanızın projemizde tanıtılması ve teknoloji odaklı bir girişimle 
            işbirliği yapma fırsatı sunar.
          </p>
          
          <div className="silver-features-grid">
            <div className="silver-feature-card">
              <Zap className="silver-feature-icon" />
              <h3>Marka Bilinirliği</h3>
              <p>Elektromobil yarışmalarında ve etkinliklerinde markanızın genç mühendisler ve teknoloji meraklıları arasında tanınırlığını artırın.</p>
            </div>
            
            <div className="silver-feature-card">
              <BarChart3 className="silver-feature-icon" />
              <h3>Sürdürülebilir Katkı</h3>
              <p>Geleceğin teknolojilerine yatırım yaparak kurumsal sosyal sorumluluk hedeflerinizi destekleyin.</p>
            </div>
            
            <div className="silver-feature-card">
              <Users className="silver-feature-icon" />
              <h3>Yetenek Havuzu</h3>
              <p>Mühendislik alanındaki genç yeteneklerle iletişim kurma ve potansiyel çalışanlarla tanışma fırsatı.</p>
            </div>
            
            <div className="silver-feature-card">
              <Calendar className="silver-feature-icon" />
              <h3>Etkinlik Katılımı</h3>
              <p>Ekibimizin düzenlediği teknik sunumlara ve yarışmalara davetli olarak katılım sağlayın.</p>
            </div>
          </div>
          
          <div className="silver-details-toggle" onClick={() => setDetailsExpanded(!detailsExpanded)}>
            <button className="silver-details-button">
              <span>İşbirliği Detayları</span>
              {detailsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
          
          {detailsExpanded && (
            <div className="silver-expanded-details animate-slideDown">
              <h3>Gümüş Sponsorluk Ayrıcalıkları</h3>
              <p>
                Gümüş sponsor olarak aşağıdaki ayrıcalıklara sahip olursunuz:
              </p>
              <ul>
                <li>Voltaris aracının yan yüzeylerinde küçük-orta boy logo gösterimi</li>
                <li>Sosyal medya hesaplarımızda üç ayda bir düzenli tanıtım</li>
                <li>Teknik ekibimizle yılda bir kez buluşma ve teknoloji sohbeti</li>
                <li>Şirketinize özel teşekkür sertifikası</li>
                <li>Yarışma sonuçları ve teknik gelişmeler hakkında düzenli bilgilendirme</li>
              </ul>
              
              <div className="silver-impact-metrics">
                <div className="silver-impact-item">
                  <div className="silver-impact-value">12+</div>
                  <div className="silver-impact-label">Yarışma Etkinliği</div>
                </div>
                <div className="silver-impact-item">
                  <div className="silver-impact-value">1000+</div>
                  <div className="silver-impact-label">İzleyici</div>
                </div>
                <div className="silver-impact-item">
                  <div className="silver-impact-value">%150</div>
                  <div className="silver-impact-label">Görünürlük</div>
                </div>
              </div>
            </div>
          )}
          
          <button 
            className="silver-contact-button"
            onClick={() => setModalOpen(true)}
          >
            Sponsor Ol
          </button>
        </div>
      </div>
      
      {/* Sponsorship Modal */}
      <SponsorshipModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        currentTier="silver"
      />
    </div>
  );
};

export default SilverSponsorship; 