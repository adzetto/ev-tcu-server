// Enhanced team data structure with hierarchy and divisions based on organizational chart

// Main team leadership
const advisors = [
  {
    id: 1,
    name: "Prof. Dr. Erdal Çetkin",
    role: "Akademik Danışman",
    department: "Makina Mühendisliği",
    position: "Advisor",
    image: `${process.env.PUBLIC_URL}/team/erdalcetkin.png`,
    linkedin: "https://www.linkedin.com/in/erdal-cetkin/",
    email: "erdalcetkin@iyte.edu.tr"
  }
];

const teamLeadership = [
  {
    id: 2,
    name: "Ömer Ünal",
    role: "Takım Kaptanı",
    department: "Elektronik ve Haberleşme Mühendisliği",
    position: "Captain",
    class: "3",
    image: `${process.env.PUBLIC_URL}/team/omer-unal.jpg`,
    linkedin: "https://www.linkedin.com/in/omerunal1/",
    email: "unal.omer@proton.me"
  }
];

// Electronics and Software Team with sub-units - Ömer Ünal leads this division
const electronicsTeam = {
  captain: {
    id: 3,
    name: "Ömer Ünal",
    role: "Elektrik Elektronik Birimi Lideri",
    department: "Elektronik ve Haberleşme Mühendisliği",
    position: "Division Leader",
    class: "3",
    image: `${process.env.PUBLIC_URL}/team/omer-unal.jpg`,
    linkedin: "https://www.linkedin.com/in/omerunal1/",
    email: "unal.omer@proton.me"
  },
  // Vehicle Control System
  vehicleControlSystem: [
    {
      id: 4,
      name: "Süleyman Furkan Uslu",
      role: "Araç Kontrol Sistemi",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/suleyman-furkan-uslu.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 5,
      name: "İsmail Sakci",
      role: "Araç Kontrol Sistemi",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/ismail-sakci.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 6,
      name: "Uğur Günalp Soydan",
      role: "Araç Kontrol Sistemi",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/ugur-gunalp-soydan.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    }
  ],
  // Embedded Software
  embeddedSoftware: [
    {
      id: 7,
      name: "Muhammet Yağcıoğlu",
      role: "Gömülü Yazılım",
      department: "İnşaat Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/muhammet-yagcioglu.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 8,
      name: "Mümtaz Mert Demir",
      role: "Gömülü Yazılım",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/mumtaz-mert-demir.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 9,
      name: "Boran Zeylan",
      role: "Gömülü Yazılım",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/boran-zeylan.png`,
      linkedin: "https://www.linkedin.com/in/boran-zeylan-244b87218/",
      email: "example@example.com"
    }
  ],
  // Battery and BMS
  batteryAndBMS: [
    {
      id: 10,
      name: "Batuhan Abalı",
      role: "Batarya ve BYS",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/batuhan-abali.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 12,
      name: "Eyyüp Yusuf Gülüm",
      role: "Batarya ve BYS",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "4",
      image: `${process.env.PUBLIC_URL}/team/eyup-yusuf-gulum.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    }
  ],
  // Eski yapıyı koruyan birimler (Bileşenlerin çalışması için)
  hardware: [
    {
      id: 4,
      name: "Süleyman Furkan Uslu",
      role: "Donanım",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/suleyman-furkan-uslu.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 5,
      name: "İsmail Sakci",
      role: "Donanım",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/ismail-sakci.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 6,
      name: "Batuhan Abalı",
      role: "Donanım",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/batuhan-abali.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    }
  ],
  software: [
    {
      id: 7,
      name: "Muhammet Yağcıoğlu",
      role: "Yazılım",
      department: "İnşaat Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/muhammet-yagcioglu.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 8,
      name: "Mümtaz Mert Demir",
      role: "Yazılım",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/mumtaz-mert-demir.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 9,
      name: "Boran Zeylan",
      role: "Yazılım",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/boran-zeylan.png`,
      linkedin: "https://www.linkedin.com/in/boran-zeylan-244b87218/",
      email: "example@example.com"
    }
  ]
};

// Mechanical Team with sub-units - Harun Erbahayetmez leads this division
const mechanicalTeam = {
  captain: {
    id: 13,
    name: "Harun Erbahayetmez",
    role: "Mekanik Birimi Lideri",
    department: "Makina Mühendisliği",
    position: "Division Leader",
    class: "4",
    image: `${process.env.PUBLIC_URL}/team/harun-erbahayetmez.jpg`,
    linkedin: "https://www.linkedin.com/in/harun-erbahayetmez-8921a1226/",
    email: "example@example.com"
  },
  // Chassis and Drivetrain
  chassisAndDrivetrain: [
    {
      id: 14,
      name: "Mustafa Ali Özdon",
      role: "Şasi ve Aktarma organları",
      department: "Makina Mühendisliği",
      class: "4",
      image: `${process.env.PUBLIC_URL}/team/mustafa-ali-ozdon.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 15,
      name: "Tuncay Keten",
      role: "Şasi ve Aktarma organları",
      department: "Makina Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/tuncay-keten.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 16,
      name: "Cemre Taş",
      role: "Şasi ve Aktarma organları",
      department: "Makina Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/cemre-tas.jpeg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 17,
      name: "Arda İşbilir",
      role: "Şasi ve Aktarma organları",
      department: "Makina Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/arda-isbilir.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 18,
      name: "Çağan Kaplan",
      role: "Şasi ve Aktarma organları",
      department: "Makina Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/cagan-kaplan.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    }
  ],
  // Shell and Analysis
  shellAndAnalysis: [
    {
      id: 19,
      name: "Abdullah Sami İşlek",
      role: "Kabuk ve Analiz",
      department: "Makina Mühendisliği",
      class: "4",
      image: `${process.env.PUBLIC_URL}/team/abdullah-sami-islek.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 20,
      name: "Sefa Onat",
      role: "Kabuk ve Analiz",
      department: "Makina Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/sefa-onat.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 21,
      name: "Nazmi Eren",
      role: "Kabuk ve Analiz",
      department: "Makina Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/nazmi-eren.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 22,
      name: "Hikmet Can Tunalı",
      role: "Kabuk ve Analiz",
      department: "Makina Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/hikmet-can-tunali.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    }
  ],
  // Powertrain and Vehicle Parts
  powertrainAndParts: [
    {
      id: 23,
      name: "Berk Kutay Doğan",
      role: "Powertrain ve Araç Parçaları",
      department: "Makina Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/berk-kutay-dogan.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 24,
      name: "Atahan Demir",
      role: "Powertrain ve Araç Parçaları",
      department: "Makina Mühendisliği",
      class: "2",
      image: `${process.env.PUBLIC_URL}/team/atahan-demir.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 25,
      name: "Eren Nuray",
      role: "Powertrain ve Araç Parçaları",
      department: "Makina Mühendisliği",
      class: "2",
      image: `${process.env.PUBLIC_URL}/team/eren-nuray.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 26,
      name: "Yiğit Aktaş",
      role: "Powertrain ve Araç Parçaları",
      department: "Makina Mühendisliği",
      class: "2",
      image: `${process.env.PUBLIC_URL}/team/yigit-aktas.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 27,
      name: "Zeynep Günsu Demirel",
      role: "Powertrain ve Araç Parçaları",
      department: "Makina Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/zeynep-gunsu-demirel.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    }
  ]
};

// Sponsorship Team - Organizasyon ekibi olarak kullanılan yapıyı sponsorshipTeam adıyla tutuyoruz
const sponsorshipTeam = {
  captain: {
    id: 28,
    name: "Büşra Kaymaz",
    role: "Sponsorluk Takım Kaptanı",
    department: "Makina Mühendisliği",
    position: "Unit Captain",
    class: "2",
    image: `${process.env.PUBLIC_URL}/team/busra-kaymaz.jpg`,
    linkedin: "https://www.linkedin.com/in/b%C3%BC%C5%9Fra-kaymaz-415891255/",
    email: "kaymaazbusra@icloud.com"
  },
  members: [
    {
      id: 29,
      name: "Gamze Uyaroğlu",
      role: "Organizasyon",
      department: "Makina Mühendisliği",
      class: "2",
      image: `${process.env.PUBLIC_URL}/team/gamze-uyaroglu.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    },
    {
      id: 11,
      name: "Berkhan Talha Yanbaş",
      role: "Sponsorluk",
      department: "Elektronik ve Haberleşme Mühendisliği",
      class: "3",
      image: `${process.env.PUBLIC_URL}/team/berkhan-talha-yanbas.jpg`,
      linkedin: "https://linkedin.com/in/username",
      email: "example@example.com"
    }
  ]
};

// Updated sponsor data with actual logos
const sponsorData = [
  {
    id: 1,
    name: "Bias Mühendislik",
    logo: `${process.env.PUBLIC_URL}/sponsors/bias_mühendislik_logo.svg`,
    tier: "platinum",
    website: "https://bias.com.tr/"
  },
  {
    id: 2,
    name: "CN Enerji",
    logo: `${process.env.PUBLIC_URL}/sponsors/cn_enerji_logo.png`,
    tier: "platinum",
    website: "https://cn.com.tr/"
  },
  {
    id: 3,
    name: "Pilci",
    logo: `${process.env.PUBLIC_URL}/sponsors/pilci_logo.png`,
    tier: "gold",
    website: "https://pilci.com.tr/"
  },
  {
    id: 4,
    name: "TekYazin",
    logo: `${process.env.PUBLIC_URL}/sponsors/tekyaz_logo.svg`,
    tier: "gold",
    website: "https://tekyaz.com/"
  },
  {
    id: 5,
    name: "Habaş",
    logo: `${process.env.PUBLIC_URL}/sponsors/habas-logo.jpg`,
    tier: "gold",
    website: "https://www.habas.com.tr/"
  },
  {
    id: 6,
    name: "Cevher Jant",
    logo: `${process.env.PUBLIC_URL}/sponsors/cevherjant.png`,
    tier: "silver",
    website: "https://www.cevher.com/"
  },
  {
    id: 7,
    name: "Guran Nakliyat",
    logo: `${process.env.PUBLIC_URL}/sponsors/guran_nakliyat_logo.png`,
    tier: "gold",
    website: "http://www.gurannakliyat.com/"
  }
];

// Export all data
const teamData = {
  advisors,
  teamLeadership,
  electronicsTeam,
  mechanicalTeam,
  sponsorshipTeam, // 'organizationTeam' yerine 'sponsorshipTeam' kullanıyoruz
  sponsorData
};

export default teamData;