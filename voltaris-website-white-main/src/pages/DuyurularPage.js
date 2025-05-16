import React, { useState, useEffect } from 'react';
import { Calendar, Award, ExternalLink, ArrowLeft, Clock, Tag, Search, Filter, ChevronDown, Share2, Eye, Star, ChevronRight } from 'lucide-react';
import './duyurular.css';

// Dummmy data - gerçek uygulamada API'dan gelecek şekilde değiştirilebilir
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

// Kategorilere göre renk atamaları
const categoryColors = {
  "Sponsorluk": "bg-yellow-900 text-yellow-300",
  "Yarışma": "bg-red-900 text-red-300",
  "Teknik": "bg-green-900 text-green-300",
  "default": "bg-gray-800 text-gray-300"
};

// Duyuru tiplerine göre ikon atamaları
const typeIcons = {
  "gold": <Award className="text-yellow-400" />,
  "event": <Calendar className="text-red-400" />,
  "technical": <Eye className="text-green-400" />,
  "default": <Tag className="text-gray-400" />
};

const DuyurularPage = () => {
  const [announcements, setAnnouncements] = useState(announcementData);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredAnnouncement, setFeaturedAnnouncement] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
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
  
  // Duyuru kartı bileşeni
  const AnnouncementCard = ({ announcement }) => {
    const categoryStyle = categoryColors[announcement.category] || categoryColors.default;
    const typeIcon = typeIcons[announcement.type] || typeIcons.default;
    
    return (
      <div className="rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01] bg-gray-900 border border-gray-800 group tech-card hover-glow scanline">
        <div className="p-5">
          {/* Kategori ve tarih */}
          <div className="flex justify-between items-center mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryStyle}`}>
              {announcement.category}
            </span>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock size={14} className="mr-1" />
              {announcement.date}
            </div>
          </div>
          
          {/* Başlık */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-voltaris-red transition-colors">
            {announcement.title}
          </h3>
          
          {/* Özet */}
          <p className="text-gray-400 text-sm mb-4">
            {announcement.excerpt}
          </p>
          
          {/* Alt bilgi */}
          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-500">
              {typeIcon}
            </div>
            <button className="text-voltaris-red text-sm flex items-center transition-all duration-300 group-hover:translate-x-1">
              Devamını Oku <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
        
        {/* Eğer logo varsa göster */}
        {announcement.image && (
          <div className="pt-3 px-5 pb-5 mt-3 border-t border-gray-800">
            <div className="flex items-center justify-center">
              <img 
                src={`${process.env.PUBLIC_URL}${announcement.image}`} 
                alt={announcement.title}
                className="max-h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        )}
      </div>
    );
  };
  
  // Öne çıkan duyuru bileşeni
  const FeaturedAnnouncement = ({ announcement }) => {
    if (!announcement) return null;
    
    return (
      <div className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-800 relative mb-10 animated-border hover-glow">
        {/* Featued badge */}
        <div className="absolute top-0 right-0 bg-voltaris-red text-white text-xs py-1 px-3 rounded-bl-lg featured-badge">
          <div className="flex items-center">
            <Star size={12} className="mr-1" /> Öne Çıkan
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sol taraf - içerik */}
            <div className="md:w-3/4">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {announcement.title}
              </h2>
              
              <div className="flex items-center mb-4 text-gray-400 text-sm">
                <Calendar size={16} className="mr-2 text-voltaris-red" />
                {announcement.date}
                
                <span className="mx-3">•</span>
                
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[announcement.category] || categoryColors.default}`}>
                  {announcement.category}
                </div>
              </div>
              
              <div className="text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: announcement.content }}></div>
              
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-voltaris-red text-white px-5 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center">
                  Detayları Görüntüle <ChevronRight size={16} className="ml-1" />
                </button>
                
                {announcement.website && (
                  <a 
                    href={announcement.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-gray-700 text-gray-300 px-4 py-2 rounded-md hover:border-gray-500 hover:text-white transition-colors flex items-center"
                  >
                    Web Sitesi <ExternalLink size={14} className="ml-2" />
                  </a>
                )}
                
                <button className="text-gray-400 border border-gray-700 p-2 rounded-md hover:text-white hover:border-gray-500 transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
            
            {/* Sağ taraf - logo/imaj */}
            {announcement.image && (
              <div className="md:w-1/4 flex items-center justify-center">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
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
    <div className="min-h-screen bg-black text-white relative">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 circuit-pattern pointer-events-none"></div>
      {/* Back to home navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <a href="/" className="text-gray-400 hover:text-voltaris-red flex items-center transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Ana Sayfaya Dön
        </a>
      </div>
      
      {/* Header */}
      <header className="py-10 bg-gradient-to-r from-gray-900 via-gray-900 to-black border-b border-gray-800 bg-animated-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-voltaris-red via-red-500 to-yellow-600 text-neon">
            Duyurular
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            Voltaris Elektromobil Takımı'nın en güncel duyurularını, etkinliklerini ve gelişmelerini buradan takip edebilirsiniz.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured announcement */}
        {featuredAnnouncement && <FeaturedAnnouncement announcement={featuredAnnouncement} />}
        
        {/* Filters and search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <button 
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'all' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white'}`}
            >
              Tümü
            </button>
            
            <button 
              onClick={() => handleCategoryChange('Sponsorluk')}
              className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'Sponsorluk' 
                ? 'bg-yellow-900/30 text-yellow-300 border border-yellow-900' 
                : 'text-gray-400 hover:text-yellow-300'}`}
            >
              Sponsorluk
            </button>
            
            <button 
              onClick={() => handleCategoryChange('Yarışma')}
              className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'Yarışma' 
                ? 'bg-red-900/30 text-red-300 border border-red-900' 
                : 'text-gray-400 hover:text-red-300'}`}
            >
              Yarışma
            </button>
            
            <button 
              onClick={() => handleCategoryChange('Teknik')}
              className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'Teknik' 
                ? 'bg-green-900/30 text-green-300 border border-green-900' 
                : 'text-gray-400 hover:text-green-300'}`}
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
              className="bg-gray-900 border border-gray-800 text-gray-200 rounded-lg pl-10 pr-4 py-2 w-full md:w-64 focus:outline-none focus:border-voltaris-red transition-colors"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        
        {/* Announcements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map(announcement => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-400">
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
      <footer className="border-t border-gray-800 py-8 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src={`${process.env.PUBLIC_URL}/logo_kırmızı.png`}
                alt="Voltaris Logo"
                className="h-12 w-auto"
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

export default DuyurularPage;