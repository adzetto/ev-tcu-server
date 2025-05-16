import React, { useState, useEffect } from 'react';
import { Calendar, Award, ExternalLink, ArrowLeft, Clock, Search, Tag, ChevronRight } from 'lucide-react';
import './minimal-duyurular.css';

// Dummy data - gerçek uygulamada API'dan gelecek şekilde değiştirilebilir
const announcementData = [
  {
    id: 1,
    title: "Guran Nakliyat Altın Sponsorumuz Oldu",
    date: "25 Nisan 2025",
    category: "Sponsorluk",
    type: "gold",
    image: "/sponsors/guran_nakliyat_logo_yatay.png",
    excerpt: "Voltaris Elektromobil Takımı olarak, Guran Nakliyat'ın Altın Sponsorumuz olduğunu duyurmaktan memnuniyet duyarız.",
    content: "Voltaris Elektromobil Takımı olarak, <strong>Guran Nakliyat</strong>'ın Altın Sponsorumuz olduğunu duyurmaktan memnuniyet duyarız. Destekleri için teşekkür eder, başarılı işbirliğimizin devamını dileriz.",
    website: "http://www.gurannakliyat.com/",
    featured: true
  },
  {
    id: 2,
    title: "Teknofest 2025 Kayıtları Başladı",
    date: "15 Nisan 2025",
    category: "Yarışma",
    type: "event",
    excerpt: "2025 yılı Teknofest başvuruları açıldı. Takımımız bu yıl daha iddialı bir şekilde yarışmaya hazırlanıyor.",
    content: "2025 yılı Teknofest başvuruları açıldı. Takımımız bu yıl daha iddialı bir şekilde yarışmaya hazırlanıyor. Tüm ekip üyelerimizle birlikte yeni tasarımımız üzerinde çalışmalara başladık.",
    featured: false
  },
  {
    id: 3,
    title: "Yeni Motor Sürücü Sistemi Geliştirme Çalışmaları",
    date: "10 Nisan 2025",
    category: "Teknik",
    type: "technical",
    excerpt: "Araç performansını artırmak için yeni motor sürücü sistemi üzerinde çalışmalarımız devam ediyor.",
    content: "Araç performansını artırmak için yeni motor sürücü sistemi üzerinde çalışmalarımız devam ediyor. Verimliliği %15 artıracak özel tasarım sürücü devresi ekibimiz tarafından test ediliyor.",
    featured: true
  }
];

// Kategorilere göre renk atamaları - beyaz temaya uygun daha açık renkler
const categoryColors = {
  "Sponsorluk": "border-amber-500 text-amber-700 bg-amber-50",
  "Yarışma": "border-voltaris-red text-voltaris-red bg-red-50",
  "Teknik": "border-green-600 text-green-700 bg-green-50",
  "default": "border-gray-400 text-gray-700 bg-gray-50"
};

// Kategori ikonları
const categoryIcons = {
  "Sponsorluk": <Award className="text-amber-500" size={16} />,
  "Yarışma": <Calendar className="text-voltaris-red" size={16} />,
  "Teknik": <Tag className="text-green-600" size={16} />,
  "default": <Tag className="text-gray-500" size={16} />
};

const MinimalDuyurularPage = () => {
  const [announcements, setAnnouncements] = useState(announcementData);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredAnnouncement, setFeaturedAnnouncement] = useState(null);
  
  // Featured duyuruyu seç
  useEffect(() => {
    const featured = announcementData.find(item => item.featured);
    if (featured) {
      setFeaturedAnnouncement(featured);
    }
  }, []);
  
  // Filtreleme fonksiyonu
  const filteredAnnouncements = announcements.filter(announcement => {
    // Arama terimini kontrol et
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Kategori filtresini kontrol et
    const matchesCategory = activeCategory === 'all' || announcement.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Kategori değiştirme
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  
  // Duyuru detay sayfasına yönlendirme
  const navigateToAnnouncementDetail = (id) => {
    // Gerçek bir uygulama için duyuru detay sayfasına yönlendirme yapılır
    // Şimdilik alert ile gösterelim
    alert(`Duyuru #${id} detayları görüntülenecek\nBu özellik henüz yapım aşamasındadır.`);
    // window.location.href = `/duyurular/${id}`; // ileride eklenebilir
  };
  
  // Akademik duyuru kartı
  const AnnouncementCard = ({ announcement }) => {
    const categoryStyle = categoryColors[announcement.category] || categoryColors.default;
    const categoryIcon = categoryIcons[announcement.category] || categoryIcons.default;
    
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 academic-card">
        <div className="p-5">
          {/* Kategori etiketi */}
          <div className="flex justify-between items-center mb-4">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${categoryStyle}`}>
              {categoryIcon}
              <span className="ml-1.5">{announcement.category}</span>
            </div>
            <div className="text-gray-500 text-xs flex items-center">
              <Clock size={14} className="mr-1.5" />
              {announcement.date}
            </div>
          </div>
          
          {/* Başlık */}
          <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-voltaris-red transition-colors">
            {announcement.title}
          </h3>
          
          {/* Özet */}
          <p className="text-gray-600 text-sm mb-4">
            {announcement.excerpt}
          </p>
          
          {/* Okuma linki */}
          <div className="text-right">
            <button 
              onClick={() => navigateToAnnouncementDetail(announcement.id)}
              className="text-voltaris-red text-sm inline-flex items-center hover:underline academic-link"
            >
              Devamını Oku <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
        
        {/* Logo alanı */}
        {announcement.image && (
          <div className="pt-3 px-5 pb-5 mt-2 border-t border-gray-100">
            <div className="flex items-center justify-center">
              <img 
                src={`${process.env.PUBLIC_URL}${announcement.image}`}
                alt={announcement.title}
                className="max-h-12 w-auto object-contain opacity-90"
              />
            </div>
          </div>
        )}
      </div>
    );
  };
  
  // Öne çıkan duyuru - daha akademik, minimal görünüm
  const FeaturedAnnouncement = ({ announcement }) => {
    if (!announcement) return null;
    
    const categoryStyle = categoryColors[announcement.category] || categoryColors.default;
    const categoryIcon = categoryIcons[announcement.category] || categoryIcons.default;
    
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-8 featured-card">
        <div className="px-6 pt-5 pb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Sol taraf - içerik */}
            <div className="md:w-3/4">
              {/* Kategori bilgisi */}
              <div className="flex items-center flex-wrap gap-3 mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${categoryStyle}`}>
                  {categoryIcon}
                  <span className="ml-1.5">{announcement.category}</span>
                </div>
                
                <div className="text-gray-500 text-sm flex items-center">
                  <Calendar size={14} className="mr-1.5" />
                  {announcement.date}
                </div>
                
                <div className="text-voltaris-red text-xs font-medium rounded-full px-2 py-0.5 border border-voltaris-red/20 bg-red-50">
                  Öne Çıkan
                </div>
              </div>
              
              {/* Başlık */}
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                {announcement.title}
              </h2>
              
              {/* İçerik */}
              <div className="text-gray-600 mb-5" dangerouslySetInnerHTML={{ __html: announcement.content }}></div>
              
              {/* Butonlar */}
              <div className="flex flex-wrap items-center gap-3">
                <button 
                  onClick={() => navigateToAnnouncementDetail(announcement.id)}
                  className="inline-flex items-center bg-voltaris-red text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Detayları Görüntüle <ChevronRight size={16} className="ml-1" />
                </button>
                
                {announcement.website && (
                  <a 
                    href={announcement.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Web Sitesi <ExternalLink size={14} className="ml-2" />
                  </a>
                )}
              </div>
            </div>
            
            {/* Sağ taraf - logo */}
            {announcement.image && (
              <div className="md:w-1/4 flex items-center justify-center mt-4 md:mt-0">
                <div className="bg-gray-50 p-5 rounded-md border border-gray-100">
                  <img 
                    src={`${process.env.PUBLIC_URL}${announcement.image}`}
                    alt={announcement.title}
                    className="max-w-full h-auto object-contain mx-auto"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 py-4 mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center">
              <Calendar size={24} className="mr-3 text-voltaris-red" />
              Duyurular
            </h1>
            <a 
              href="/" 
              className="flex items-center text-gray-600 hover:text-voltaris-red transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} className="mr-1" />
              Ana Sayfaya Dön
            </a>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-8">
        {/* Filtreler ve arama */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            <button 
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'all' 
                ? 'bg-gray-100 text-gray-800 font-medium' 
                : 'text-gray-500 hover:text-gray-800'}`}
            >
              Tümü
            </button>
            
            <button 
              onClick={() => handleCategoryChange('Sponsorluk')}
              className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'Sponsorluk' 
                ? 'bg-amber-50 text-amber-700 border border-amber-200 font-medium' 
                : 'text-gray-500 hover:text-amber-700'}`}
            >
              Sponsorluk
            </button>
            
            <button 
              onClick={() => handleCategoryChange('Yarışma')}
              className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'Yarışma' 
                ? 'bg-red-50 text-voltaris-red border border-red-200 font-medium' 
                : 'text-gray-500 hover:text-voltaris-red'}`}
            >
              Yarışma
            </button>
            
            <button 
              onClick={() => handleCategoryChange('Teknik')}
              className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'Teknik' 
                ? 'bg-green-50 text-green-700 border border-green-200 font-medium' 
                : 'text-gray-500 hover:text-green-700'}`}
            >
              Teknik
            </button>
          </div>
          
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Duyurularda ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-voltaris-red/30 focus:border-voltaris-red/60"
            />
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        
        {/* Featured duyuru */}
        {featuredAnnouncement && <FeaturedAnnouncement announcement={featuredAnnouncement} />}
        
        {/* Duyurular grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map(announcement => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500">
              <p className="text-lg">Aranan kriterlere uygun duyuru bulunamadı.</p>
              <button 
                onClick={() => {setSearchTerm(''); setActiveCategory('all');}}
                className="mt-4 text-voltaris-red hover:underline"
              >
                Tüm filtreleri temizle
              </button>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src={`${process.env.PUBLIC_URL}/logo_kırmızı.png`}
                alt="Voltaris Logo"
                className="h-10 w-auto"
              />
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 Voltaris Elektromobil Takımı
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalDuyurularPage;