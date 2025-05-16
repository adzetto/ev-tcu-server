import React from 'react';
import { 
  Box, AlertTriangle, Camera, Activity, Cpu, 
  Gauge, Zap, Eye, Ruler, Weight, 
  BarChart2, Layers, Shield, Disc
} from 'lucide-react';
import './ProfessionalPureWhite.css';

export const VehicleSpecifications = () => {
  return (
    <div className="professional-box">
      <div className="professional-box-header">
        <h3 className="professional-box-title">Araç Teknik Özellikleri</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dimensions and Weight */}
        <div className="technical-specs">
          <div className="technical-specs-category">Fiziksel Özellikler</div>
          <h4 className="technical-specs-title">Boyut ve Ağırlık</h4>
          <table className="technical-specs-table">
            <tbody>
              <tr>
                <td>Uzunluk</td>
                <td>3.250 mm</td>
              </tr>
              <tr>
                <td>Genişlik</td>
                <td>1.500 mm</td>
              </tr>
              <tr>
                <td>Yükseklik</td>
                <td>1.100 mm</td>
              </tr>
              <tr>
                <td>Dingil mesafesi</td>
                <td>2.200 mm</td>
              </tr>
              <tr>
                <td>Boş ağırlık</td>
                <td>120 kg</td>
              </tr>
              <tr>
                <td>Maksimum ağırlık</td>
                <td>240 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Performance */}
        <div className="technical-specs">
          <div className="technical-specs-category">Dinamik Yetenek</div>
          <h4 className="technical-specs-title">Performans</h4>
          <table className="technical-specs-table">
            <tbody>
              <tr>
                <td>Maksimum hız</td>
                <td>70 km/sa</td>
              </tr>
              <tr>
                <td>0-40 km/sa</td>
                <td>8 saniye</td>
              </tr>
              <tr>
                <td>Maksimum menzil</td>
                <td>100 km</td>
              </tr>
              <tr>
                <td>Max. tırmanma açısı</td>
                <td>15°</td>
              </tr>
              <tr>
                <td>Frenleme mesafesi</td>
                <td>14.05 m (50 km/sa'dan)</td>
              </tr>
              <tr>
                <td>Enerji tüketimi</td>
                <td>15-20 Wh/km</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* General Features */}
        <div className="technical-specs">
          <div className="technical-specs-category">Yapısal Bilgiler</div>
          <h4 className="technical-specs-title">Genel Özellikler</h4>
          <table className="technical-specs-table">
            <tbody>
              <tr>
                <td>Koltuk sayısı</td>
                <td>1 sürücü</td>
              </tr>
              <tr>
                <td>Şasi malzemesi</td>
                <td>Alüminyum profil</td>
              </tr>
              <tr>
                <td>Gövde malzemesi</td>
                <td>Cam elyaf (fiberglass)</td>
              </tr>
              <tr>
                <td>Aerodinamik katsayı</td>
                <td>0.16 Cd</td>
              </tr>
              <tr>
                <td>Tekerlek boyutu</td>
                <td>16 inç</td>
              </tr>
              <tr>
                <td>Min. dönüş yarıçapı</td>
                <td>3.47 m</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Structural Features */}
      <div className="mt-10">
        <div className="technical-specs-category">Teknik Detaylar</div>
        <h4 className="technical-specs-title mb-4">Yapısal Özellikler</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="technical-feature-card">
            <div className="flex items-center mb-3">
              <div className="p-1.5 rounded bg-red-50 mr-2">
                <Layers size={18} className="text-voltaris-red-primary" />
              </div>
              <h5 className="technical-feature-title">Şasi</h5>
            </div>
            <p className="technical-feature-description">
              Alüminyum profil kullanılarak tasarlanmış, hafif ve dayanıklı şasi yapısı. Çarpışma testlerinden geçirilmiş güvenli tasarım.
            </p>
            <div className="technical-feature-specs flex items-center justify-between">
              <span>Malzeme:</span>
              <span>AL6061-T6</span>
            </div>
          </div>
          
          <div className="technical-feature-card">
            <div className="flex items-center mb-3">
              <div className="p-1.5 rounded bg-blue-50 mr-2">
                <Disc size={18} className="text-voltaris-blue-primary" />
              </div>
              <h5 className="technical-feature-title">Süspansiyon</h5>
            </div>
            <p className="technical-feature-description">
              Çift salıncaklı süspansiyon sistemi, Mondial Drift L 125 amortisörler ile donatılmış, ayarlanabilir rotil bağlantıları.
            </p>
            <div className="technical-feature-specs flex items-center justify-between">
              <span>Sönümleme:</span>
              <span>Yağlı</span>
            </div>
          </div>
          
          <div className="technical-feature-card">
            <div className="flex items-center mb-3">
              <div className="p-1.5 rounded bg-red-50 mr-2">
                <Box size={18} className="text-voltaris-red-primary" />
              </div>
              <h5 className="technical-feature-title">Kabin ve Kabuk</h5>
            </div>
            <p className="technical-feature-description">
              Cam elyaf (fiberglass) kabuk, elle yatırma yöntemiyle üretim, 0.16 sürtünme katsayısı hedefi ile optimize edilmiş tasarım.
            </p>
            <div className="technical-feature-specs flex items-center justify-between">
              <span>Kalınlık:</span>
              <span>2-4 mm</span>
            </div>
          </div>
          
          <div className="technical-feature-card">
            <div className="flex items-center mb-3">
              <div className="p-1.5 rounded bg-blue-50 mr-2">
                <Shield size={18} className="text-voltaris-blue-primary" />
              </div>
              <h5 className="technical-feature-title">Fren Sistemi</h5>
            </div>
            <p className="technical-feature-description">
              Hidrolik disk fren, ön ve arka tekerleklerde fren diskleri, 50 km/h hızdan 14.05m'de durma performansı.
            </p>
            <div className="technical-feature-specs flex items-center justify-between">
              <span>Disk çapı:</span>
              <span>160 mm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdasSystemsSpecs = () => {
  return (
    <div className="professional-box">
      <div className="professional-box-header">
        <h3 className="professional-box-title">ADAS Sistem Özellikleri</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-6">
        Advanced Driver Assistance Systems (ADAS) ile aracımız için planladığımız gelişmiş sürüş destek sistemleri.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Lane Detection System */}
        <div className="adas-component adas-component-red">
          <div className="flex items-center mb-4">
            <div className="p-1.5 rounded bg-red-50 mr-2">
              <Eye size={18} className="text-voltaris-red-primary" />
            </div>
            <h4 className="text-base font-semibold text-gray-900">Şerit Takip Sistemi</h4>
          </div>
          
          <div className="equation-box">
            <div className="equation-title">Şerit Tespit Algoritması</div>
            <div className="equation-content">
              <div>Perspektif Dönüşümü: M = T<sub>src→dst</sub></div>
              <div>Polinom Modeli: f(x) = ax<sup>2</sup> + bx + c</div>
              <div>Ağırlıklı Filtre: W<sub>i</sub> = [0.4, 0.2, 0.15, 0.1, 0.075, 0.05, 0.025]</div>
              <div>Kalibrasyon Faktörü: 0.0293 m/piksel</div>
            </div>
            <div className="equation-parameters">
              Performans: 23 FPS | Doğruluk: %95.7
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            Kamera görüntüsünden Canny edge detection ve Hough transform kullanarak şeritleri tespit eder. Sonuç olarak sürücüye sesli ve görsel uyarılar verilir.
          </p>
        </div>
        
        {/* Traffic Sign Recognition */}
        <div className="adas-component adas-component-blue">
          <div className="flex items-center mb-4">
            <div className="p-1.5 rounded bg-blue-50 mr-2">
              <AlertTriangle size={18} className="text-voltaris-blue-primary" />
            </div>
            <h4 className="text-base font-semibold text-gray-900">Trafik İşareti Tanıma</h4>
          </div>
          
          <div className="equation-box">
            <div className="equation-title">YOLOv5s CNN Mimarisi</div>
            <div className="equation-content">
              <div>Omurga: CSPDarknet53 | Özellik Çıkarıcı: PANet</div>
              <div>Giriş Formatı: 640×640 px | Format: float16/32</div>
              <div>Güven Eşiği: τ = 0.5</div>
              <div>NMS Algoritması: IoU<sub>threshold</sub> = 0.45</div>
            </div>
            <div className="equation-parameters">
              Doğruluk: %91.75 | Çıkarım: 15-20ms | Sınıflar: 61
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            YOLOv5s tabanlı derin öğrenme modeli ile trafik işaretlerini gerçek zamanlı olarak tanır ve sürücüye bilgilendirici uyarılar verir.
          </p>
        </div>
        
        {/* Cruise Control */}
        <div className="adas-component adas-component-red">
          <div className="flex items-center mb-4">
            <div className="p-1.5 rounded bg-red-50 mr-2">
              <Cpu size={18} className="text-voltaris-red-primary" />
            </div>
            <h4 className="text-base font-semibold text-gray-900">Akıllı Hız Sabitleyici</h4>
          </div>
          
          <div className="equation-box">
            <div className="equation-title">PID Kontrolcü Denklemi</div>
            <div className="equation-content text-center">
              <div>u(t) = K<sub>p</sub>e(t) + K<sub>i</sub> ∫<sub>0</sub><sup>t</sup> e(τ) dτ + K<sub>d</sub> ∂e(t)/∂t</div>
              <div className="mt-2">K<sub>p</sub> = 3.5, K<sub>i</sub> = 0.2, K<sub>d</sub> = 0.8</div>
            </div>
            <div className="equation-parameters">
              Frekans: 1kHz | PWM Aralığı: 0-1023 | I<sub>limit</sub>: ±25
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            Optimize edilmiş PID kontrol algoritması ile hız sabitlenir, enerji verimliliği maksimize edilir ve sürüş konforu artırılır.
          </p>
        </div>
        
        {/* Blind Spot Detection */}
        <div className="adas-component adas-component-blue">
          <div className="flex items-center mb-4">
            <div className="p-1.5 rounded bg-blue-50 mr-2">
              <Camera size={18} className="text-voltaris-blue-primary" />
            </div>
            <h4 className="text-base font-semibold text-gray-900">Kör Nokta Algılama</h4>
          </div>
          
          <div className="equation-box">
            <div className="equation-title">Radar Tabanlı Tespit Sistemi</div>
            <div className="equation-content">
              <div>Model: RD-03D Çoklu Nesne Algılama Radarı</div>
              <div>Algılama Mesafesi: 0.5 - 3m</div>
              <div>Açısal Alan: θ = ±30°</div>
              <div>Parametreler: Konum (x,y), Hız (v), Mesafe (d)</div>
            </div>
            <div className="equation-parameters">
              Yenileme Hızı: 50Hz | Montaj Konumu: Arka
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            Ultrasonik ve kızılötesi sensörler ile kör noktalardaki engeller tespit edilir ve sürücüye uyarı verilir.
          </p>
        </div>
      </div>
      
      {/* ADAS System Architecture */}
      <div className="mt-8">
        <div className="technical-specs-category">Sistem Entegrasyonu</div>
        <h4 className="technical-specs-title mb-4">ADAS Sistem Mimarisi</h4>
        
        <div className="system-architecture">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Input Systems */}
            <div>
              <div className="system-architecture-title">Giriş Sistemleri</div>
              
              <div className="system-component">
                <div className="system-component-title">Kamera Modülü</div>
                <div className="system-component-description">1280x960 USB Kamera</div>
              </div>
              
              <div className="system-component">
                <div className="system-component-title">Radar Sensörü</div>
                <div className="system-component-description">RD-03D Çoklu Nesne Algılama</div>
              </div>
              
              <div className="system-component">
                <div className="system-component-title">Ortam Sensörü</div>
                <div className="system-component-description">BH1750 Işık Sensörü</div>
              </div>
            </div>
            
            {/* Processing Unit */}
            <div>
              <div className="system-architecture-title">İşlem Birimi</div>
              
              <div className="system-component">
                <div className="system-component-title">Ana İşlemci</div>
                <div className="system-component-description">Raspberry Pi 5 - 8GB RAM</div>
              </div>
              
              <div className="system-component">
                <div className="system-component-title">Mikrodenetleyici</div>
                <div className="system-component-description">STM32F407 - CAN Bus</div>
              </div>
              
              <div className="system-component">
                <div className="system-component-title">Yazılım Sistemleri</div>
                <div className="system-component-description">Linux, Python, C++</div>
              </div>
            </div>
            
            {/* Output Systems */}
            <div>
              <div className="system-architecture-title">Çıkış Sistemleri</div>
              
              <div className="system-component">
                <div className="system-component-title">Görüntüleme Birimi</div>
                <div className="system-component-description">7" LCD Dokunmatik Ekran</div>
              </div>
              
              <div className="system-component">
                <div className="system-component-title">Motor Kontrolü</div>
                <div className="system-component-description">PWM Motor Sürücü</div>
              </div>
              
              <div className="system-component">
                <div className="system-component-title">Uyarı Sistemi</div>
                <div className="system-component-description">Sesli ve Görsel Uyarı</div>
              </div>
            </div>
          </div>
          
          {/* Connection Diagram */}
          <div className="mt-6 p-4 bg-white border border-gray-200 rounded-md">
            <div className="text-center text-sm text-gray-500 mb-2">Basitleştirilmiş Sistem Bağlantı Şeması</div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-3xl h-16 relative">
                {/* Input to Processing */}
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-blue-200"></div>
                <div className="absolute left-1/6 top-1/4 right-5/6 h-px bg-blue-200"></div>
                <div className="absolute left-1/6 top-2/4 right-5/6 h-px bg-blue-200"></div>
                <div className="absolute left-1/6 top-3/4 right-5/6 h-px bg-blue-200"></div>
                
                {/* Processing to Output */}
                <div className="absolute right-1/4 top-0 bottom-0 w-px bg-red-200"></div>
                <div className="absolute left-5/6 top-1/4 right-1/6 h-px bg-red-200"></div>
                <div className="absolute left-5/6 top-2/4 right-1/6 h-px bg-red-200"></div>
                <div className="absolute left-5/6 top-3/4 right-1/6 h-px bg-red-200"></div>
                
                {/* Central Box */}
                <div className="absolute left-1/3 right-1/3 top-1/4 bottom-1/4 bg-gray-100 border border-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs font-medium">İşlemci</span>
                </div>
                
                {/* Left Box */}
                <div className="absolute left-0 w-1/8 top-1/4 bottom-1/4 bg-blue-50 border border-blue-200 rounded flex items-center justify-center">
                  <span className="text-xs font-medium">Girişler</span>
                </div>
                
                {/* Right Box */}
                <div className="absolute right-0 w-1/8 top-1/4 bottom-1/4 bg-red-50 border border-red-200 rounded flex items-center justify-center">
                  <span className="text-xs font-medium">Çıkışlar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default { VehicleSpecifications, AdasSystemsSpecs };
