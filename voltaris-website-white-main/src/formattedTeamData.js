import teamData from './teamData';

/**
 * Pre-formatted team data ready for the MinimalTechnicalOrgChart component
 */
const formattedTeamData = {
  // Team captain
  captain: {
    id: 'captain',
    name: 'Ömer Ünal',
    photo: `${process.env.PUBLIC_URL}/team/omer-unal.jpg`,
    role: 'Takım Kaptanı'
  },
  
  // Departments
  departments: [
    {
      id: 'electronics',
      name: 'Elektrik-Elektronik',
      members: [
        {
          id: 'el-1',
          name: 'Ömer Ünal',
          role: 'Birim Lideri',
          photo: `${process.env.PUBLIC_URL}/team/omer-unal.jpg`,
          specialty: 'Elektronik ve Haberleşme Müh.'
        },
        {
          id: 'el-2',
          name: 'Süleyman Furkan Uslu',
          role: 'Araç Kontrol Sistemi',
          photo: `${process.env.PUBLIC_URL}/team/suleyman-furkan-uslu.jpg`,
          specialty: 'Elektronik ve Haberleşme Müh.'
        },
        {
          id: 'el-3',
          name: 'İsmail Sakci',
          role: 'Araç Kontrol Sistemi',
          photo: `${process.env.PUBLIC_URL}/team/ismail-sakci.jpg`,
          specialty: 'Elektronik ve Haberleşme Müh.'
        },
        {
          id: 'el-4',
          name: 'Uğur Günalp Soydan',
          role: 'Araç Kontrol Sistemi',
          photo: `${process.env.PUBLIC_URL}/team/ugur-gunalp-soydan.jpg`,
          specialty: 'Elektronik ve Haberleşme Müh.'
        },
        {
          id: 'el-5',
          name: 'Batuhan Abalı',
          role: 'Batarya ve BYS',
          photo: `${process.env.PUBLIC_URL}/team/batuhan-abali.jpg`,
          specialty: 'Elektronik ve Haberleşme Müh.'
        },
        {
          id: 'el-6',
          name: 'Eyyüp Yusuf Gülüm',
          role: 'Batarya ve BYS',
          photo: `${process.env.PUBLIC_URL}/team/eyup-yusuf-gulum.jpg`,
          specialty: 'Elektronik ve Haberleşme Müh.'
        }
      ]
    },
    {
      id: 'software',
      name: 'Yazılım',
      members: [
        {
          id: 'sw-1',
          name: 'Muhammet Yağcıoğlu',
          role: 'Gömülü Yazılım',
          photo: `${process.env.PUBLIC_URL}/team/muhammet-yagcioglu.jpg`,
          specialty: 'İnşaat Mühendisliği'
        },
        {
          id: 'sw-2',
          name: 'Mümtaz Mert Demir',
          role: 'Gömülü Yazılım',
          photo: `${process.env.PUBLIC_URL}/team/mumtaz-mert-demir.jpg`,
          specialty: 'Elektronik ve Haberleşme Müh.'
        },
        {
          id: 'sw-3',
          name: 'Boran Zeylan',
          role: 'Gömülü Yazılım',
          photo: `${process.env.PUBLIC_URL}/team/boran-zeylan.png`,
          specialty: 'Elektronik ve Haberleşme Müh.'
        }
      ]
    },
    {
      id: 'mechanical',
      name: 'Mekanik',
      members: [
        {
          id: 'mech-1',
          name: 'Harun Erbahayetmez',
          role: 'Birim Lideri',
          photo: `${process.env.PUBLIC_URL}/team/harun-erbahayetmez.jpg`,
          specialty: 'Makina Mühendisliği'
        },
        {
          id: 'mech-2',
          name: 'Mustafa Ali Özdon',
          role: 'Şasi ve Aktarma Organları',
          photo: `${process.env.PUBLIC_URL}/team/mustafa-ali-ozdon.jpg`,
          specialty: 'Makina Mühendisliği'
        },
        {
          id: 'mech-3',
          name: 'Tuncay Keten',
          role: 'Şasi ve Aktarma Organları',
          photo: `${process.env.PUBLIC_URL}/team/tuncay-keten.jpg`,
          specialty: 'Makina Mühendisliği'
        },
        {
          id: 'mech-4',
          name: 'Cemre Taş',
          role: 'Şasi ve Aktarma Organları',
          photo: `${process.env.PUBLIC_URL}/team/cemre-tas.jpeg`,
          specialty: 'Makina Mühendisliği'
        },
        {
          id: 'mech-5',
          name: 'Arda İşbilir',
          role: 'Şasi ve Aktarma Organları',
          photo: `${process.env.PUBLIC_URL}/team/arda-isbilir.jpg`,
          specialty: 'Makina Mühendisliği'
        },
        {
          id: 'mech-6',
          name: 'Çağan Kaplan',
          role: 'Şasi ve Aktarma Organları',
          photo: `${process.env.PUBLIC_URL}/team/cagan-kaplan.jpg`,
          specialty: 'Makina Mühendisliği'
        },
        {
          id: 'mech-7',
          name: 'Abdullah Sami İşlek',
          role: 'Kabuk ve Analiz',
          photo: `${process.env.PUBLIC_URL}/team/abdullah-sami-islek.jpg`,
          specialty: 'Makina Mühendisliği'
        },
        {
          id: 'mech-8',
          name: 'Sefa Onat',
          role: 'Kabuk ve Analiz',
          photo: `${process.env.PUBLIC_URL}/team/sefa-onat.jpg`,
          specialty: 'Makina Mühendisliği'
        },
        {
          id: 'mech-9',
          name: 'Berk Kutay Doğan',
          role: 'Powertrain ve Araç Parçaları',
          photo: `${process.env.PUBLIC_URL}/team/berk-kutay-dogan.jpg`,
          specialty: 'Makina Mühendisliği'
        }
      ]
    },
    {
      id: 'sponsorship',
      name: 'Sponsorluk',
      members: [
        {
          id: 'sp-1',
          name: 'Büşra Kaymaz',
          role: 'Birim Lideri',
          photo: `${process.env.PUBLIC_URL}/team/busra-kaymaz.jpg`,
          specialty: 'Makina Mühendisliği'
        },
        {
          id: 'sp-2',
          name: 'Gamze Uyaroğlu',
          role: 'Organizasyon',
          photo: `${process.env.PUBLIC_URL}/team/gamze-uyaroglu.jpg`,
          specialty: 'Makina Mühendisliği'
        },
        {
          id: 'sp-3',
          name: 'Berkhan Talha Yanbaş',
          role: 'Sponsorluk',
          photo: `${process.env.PUBLIC_URL}/team/berkhan-talha-yanbas.jpg`,
          specialty: 'Elektronik ve Haberleşme Müh.'
        }
      ]
    }
  ],
  
  // Team statistics
  statistics: {
    totalMembers: 24,
    departments: 4,
    majors: 2
  }
};

export default formattedTeamData;