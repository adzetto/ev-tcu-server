import React, { useState } from 'react';
import PlatinumTierComponent from './PlatinumTierComponent';
import SponsorshipModal from '../../SponsorshipModal';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import './PlatinumSponsorship.css';

const PlatinumSponsorship = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  
  const handleContactClick = () => {
    setModalOpen(true);
  };
  
  const platinumBenefits = [
    'Web sitesi ana sayfasında büyük logo gösterimi',
    'Etkinliklerde logo önceliği ve ayrıcalıklı konum',
    'Ekibimiz tarafından yılda 2 teknik sunum',
    'Sosyal medya hesaplarımızda aylık paylaşım',
    'Araç üzerinde gösterişli logo alanı',
    'VIP davetler ve özel bilgilendirmeler',
    'Teknik raporlarda teşekkür metni'
  ];
  
  const toggleDetails = () => {
    setDetailsExpanded(!detailsExpanded);
  };
  
  return (
    <div className="platinum-sponsorship-container">
      <div className="platinum-main-content">
        <div className="platinum-tier-component-wrapper">
          <PlatinumTierComponent 
            price="Özel Teklif" 
            benefits={platinumBenefits}
            onContactClick={handleContactClick}
          />
        </div>
        
        <div className="platinum-info-panel">
          <div className="platinum-info-header">
            <h3>Platin Sponsorluk Özellikleri</h3>
            <div className="platinum-info-badge">Premium</div>
          </div>
          
          <div className="platinum-info-content">
            <p className="platinum-info-description">
              Platin sponsorlarımıza özel ayrıcalıklar ve maksimum görünürlük sağlıyoruz. 
              Aracımızda en büyük logo alanı, tüm etkinliklerde birincil konum ve dijital varlıklarda 
              öncelikli gösterim ile markanızı ön plana çıkarıyoruz.
            </p>
            
            <div className="platinum-info-metrics">
              <div className="platinum-info-metric">
                <div className="platinum-info-metric-value">1.</div>
                <div className="platinum-info-metric-label">Öncelik</div>
              </div>
              <div className="platinum-info-metric">
                <div className="platinum-info-metric-value">%300</div>
                <div className="platinum-info-metric-label">Görünürlük</div>
              </div>
              <div className="platinum-info-metric">
                <div className="platinum-info-metric-value">VIP</div>
                <div className="platinum-info-metric-label">Erişim</div>
              </div>
            </div>
            
            <div className={`platinum-info-details ${detailsExpanded ? 'expanded' : ''}`}>
              <h4>Neden Platin Sponsor Olmalısınız?</h4>
              <ul className="platinum-info-benefits">
                <li>
                  <CheckCircle size={16} className="platinum-info-check" />
                  <span>Mühendislik öğrencileriyle yakın iş birliği fırsatı</span>
                </li>
                <li>
                  <CheckCircle size={16} className="platinum-info-check" />
                  <span>Kurumsal sürdürülebilirlik hedeflerinize katkı</span>
                </li>
                <li>
                  <CheckCircle size={16} className="platinum-info-check" />
                  <span>Teknoloji odaklı etkinliklerde tanıtım imkanı</span>
                </li>
                <li>
                  <CheckCircle size={16} className="platinum-info-check" />
                  <span>Yenilikçi projelerle marka imajını güçlendirme</span>
                </li>
                <li>
                  <CheckCircle size={16} className="platinum-info-check" />
                  <span>Enerji verimliliği ve sürdürülebilirlik alanlarında AR-GE iş birliği</span>
                </li>
              </ul>
              
              {detailsExpanded && (
                <div className="platinum-info-extra">
                  <h4>Teknik İş Birliği Fırsatları</h4>
                  <p>
                    Platin sponsorlarımıza elektrikli araç teknolojileri, batarya yönetim sistemleri, 
                    enerji verimliliği ve yazılım sistemleri konularında teknik iş birliği olanakları sunuyoruz. 
                    Ekibimizdeki farklı mühendislik disiplinlerinden öğrencilerle ortak projeler geliştirme fırsatı.
                  </p>
                  
                  <div className="platinum-info-technical">
                    <div className="platinum-info-technical-item">
                      <h5>Batarya Teknolojileri</h5>
                      <div className="platinum-info-progress">
                        <div className="platinum-info-progress-bar" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="platinum-info-technical-item">
                      <h5>Enerji Verimliliği</h5>
                      <div className="platinum-info-progress">
                        <div className="platinum-info-progress-bar" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div className="platinum-info-technical-item">
                      <h5>Yazılım Sistemleri</h5>
                      <div className="platinum-info-progress">
                        <div className="platinum-info-progress-bar" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div className="platinum-info-technical-item">
                      <h5>Motor Kontrol</h5>
                      <div className="platinum-info-progress">
                        <div className="platinum-info-progress-bar" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <button className="platinum-info-toggle" onClick={toggleDetails}>
                {detailsExpanded ? 'Daha Az Göster' : 'Daha Fazla Göster'}
                <ArrowRight size={16} className={`platinum-info-arrow ${detailsExpanded ? 'rotated' : ''}`} />
              </button>
            </div>
            
            <button 
              className="platinum-info-cta"
              onClick={handleContactClick}
            >
              İletişime Geç
            </button>
          </div>
        </div>
      </div>
      
      {/* Technical decoration */}
      <div className="platinum-tech-decoration">
        <div className="platinum-tech-circle"></div>
        <div className="platinum-tech-line"></div>
        <div className="platinum-tech-dots"></div>
      </div>
      
      {/* Sponsorship Modal */}
      <SponsorshipModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        currentTier="platinum"
      />
    </div>
  );
};

export default PlatinumSponsorship;