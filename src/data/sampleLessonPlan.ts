import { LessonPlanData } from '../types';

export const SAMPLE_LESSON_PLAN_GAP_BOLAKLARI: LessonPlanData = {
  id: 'namuna-gap-bolaklari-3-sinf',
  createdAt: new Date().toISOString(),
  umumiy: {
    fan: 'Ona tili',
    sinf: '3-sinf',
    mavzu: 'Gap bo‘laklari (Bosh bo‘laklar: Ega va Kesim)',
    davomiyligi: '45 daqiqa',
    turi: 'Yangi bilim beruvchi',
    oqituvchiIsmi: 'Zilola Rahimova',
    maktabRaqami: '12-sonli umumta’lim maktabi'
  },
  maqsad: {
    talimiy: 'O‘quvchilarga gapning bosh bo‘laklari — ega va kesim haqida boshlang‘ich tushuncha berish, ularni gap ichidan to‘g‘ri topish va so‘roq berishni o‘rgatish.',
    tarbiyaviy: 'O‘quvchilarda ona tilimizga mehr va hurmat tuyg‘usini shakllantirish, o‘zaro hamjihatlik, tartib-intizom va darsda bir-birini tinglash madaniyatini tarbiyalash.',
    rivojlantiruvchi: 'Boshlang‘ich sinf o‘quvchilarining mustaqil mantiqiy fikrlash, og‘zaki nutq boyligi, lug‘at zaxirasi hamda tahlil qilish ko‘nikmalarini o‘stirish.'
  },
  kutilayotganNatijalar: [
    'Gap bo‘laklari nima ekanligini biladi va ta’riflab bera oladi.',
    'Ega kim? yoki nima? so‘rog‘iga javob bo‘lishini va tagiga bitta to‘g‘ri chiziq chizilishini tushunadi.',
    'Kesim nima qildi? nima qilyapti? so‘rog‘iga javob bo‘lib, tagiga ikkita to‘g‘ri chiziq chizilishini amalda qo‘llay oladi.',
    'Berilgan sodda gaplardan bosh bo‘laklarni ajratib, daftarga chiroyli yoza oladi.'
  ],
  jihozlar: [
    '3-sinf Ona tili darsligi va mashq daftari',
    'Rangli ko‘rgazmali plakatlar: «Gap daraxti» va «Ega va Kesim qahramonlari»',
    'Interaktiv tarqatma kartochkalar (so‘zlar va so‘roqlar yozilgan)',
    'Doska, rangli bo‘rlar yoki markerlar',
    'Rag‘batlantiruvchi yulduzcha va «Oltin qalam» nishonlari'
  ],
  metodlar: [
    {
      nomi: '«Aqliy hujum» (Klaster)',
      tavsifi: 'Gap va so‘z tushunchalarini eslash, o‘quvchilarni yangi mavzuga faol jalb etish.'
    },
    {
      nomi: '«Sehrli so‘roqlar» o‘yini',
      tavsifi: 'Kim? Nima? va Nima qildi? savollari yordamida o‘quvchilarda qiziqarli topqirlik mashqi.'
    },
    {
      nomi: '«Juftlikda ishlash»',
      tavsifi: 'O‘quvchilar partadoshi bilan gap tuzib, bosh bo‘laklarini bir-biriga tushuntirib berishi.'
    },
    {
      nomi: '«Zinama-zina» didaktik o‘yini',
      tavsifi: 'Doskada berilgan so‘zlardan to‘g‘ri gap tuzish va chizmalar bilan ifodalash.'
    }
  ],
  borishi: [
    {
      vaqt: '00–05 daqiqa',
      bosqich: 'Tashkiliy qism',
      mazmuni: 'Salomlashish, davomatni aniqlash. Sinf tozaligi va o‘quv qurollari tayyorligini tekshirish. «Keling, tabassum qilamiz!» shiori ostida yoqimli dars muhitini yaratish.',
      metod: 'Ijobiy psixologik motivatsiya'
    },
    {
      vaqt: '05–10 daqiqa',
      bosqich: 'O‘tgan mavzuni takrorlash',
      mazmuni: 'O‘tgan darsdagi «Gap nima?» mavzusi yuzasidan tezkor savol-javob o‘tkazish. O‘quvchilar bir necha so‘zdan iborat gap aytadilar va uning tugallangan fikr bildirishi esga olinadi.',
      metod: '«Zanjir» tezkor savol-javob metodi'
    },
    {
      vaqt: '10–25 daqiqa',
      bosqich: 'Yangi mavzuni tushuntirish',
      mazmuni: '«Ega va Kesim» ertak qahramonlari orqali yangi mavzu ochib beriladi: «Ega — gapda kim yoki nima harakat qilayotganini aytadi, Kesim esa u nima qilayotganini bildiradi». Doskaga misol yoziladi: «Anvar (Kim? - Ega) kitob o‘qidi (Nima qildi? - Kesim)». Belgilanishi tushuntiriladi.',
      metod: 'Muammoli bayon va ko‘rgazmali tushuntirish'
    },
    {
      vaqt: '25–35 daqiqa',
      bosqich: 'Mustahkamlash',
      mazmuni: 'Darslikdagi mashqni bajarish. Tarqatma kartochkalardagi gaplarning egasi va kesimini topib, tagiga chizish. «Kim chaqqon?» o‘yinida o‘quvchilar doskaga chiqib bosh bo‘laklarni ajratadilar.',
      metod: 'Amaliy mashq va «Sehrli qalam» o‘yini'
    },
    {
      vaqt: '35–40 daqiqa',
      bosqich: 'Baholash',
      mazmuni: 'Darsda faol ishtirok etgan, to‘g‘ri javob bergan o‘quvchilarni rag‘batlantirish. Rangli yulduzchalar va formativ ballar e’lon qilinadi.',
      metod: 'Formativ rag‘batlantirish va izohli baholash'
    },
    {
      vaqt: '40–45 daqiqa',
      bosqich: 'Uyga vazifa va yakun',
      mazmuni: 'Darslikdagi 124-mashq beriladi. Sharti tushuntiriladi: 4 ta gap ko‘chirib yoziladi, ega va kesim tagiga chiziladi. Dars yakunlanadi.',
      metod: 'Yo‘riqnoma va maslahat'
    }
  ],
  oqituvchiFaoliyati: [
    'O‘quvchilarni darsga jalb qiladi va ijobiy kayfiyat bag‘ishlaydi.',
    '«Ega va Kesim» mavzusini bolalar tiliga mos qiziqarli ko‘rgazmalar va ertak usulida tushuntiradi.',
    'Doskada namuna ko‘rsatib, to‘g‘ri so‘roq berish usullarini ko‘rsatadi (Kim? Ega — bir chiziq, Nima qildi? Kesim — ikki chiziq).',
    'O‘quvchilarning daftardagi yozuvlarini va husnixatini nazorat qiladi, qiynalganlarga yakka tartibda ko‘maklashadi.',
    'O‘quvchilarning faolligini adolatli baholab, darsni xulosa qiladi.'
  ],
  oquvchiFaoliyati: [
    'O‘qituvchi bilan salomlashib, darsga tayyorligini bildiradi.',
    'Diqqat bilan ko‘rgazmali plakatlarni kuzatadi, berilgan savollarga chaqqonlik bilan javob beradi.',
    'Daftarlariga sana, mavzu va namunaviy gaplarni chiroyli husnixat bilan ko‘chiradi.',
    'Juftlikda ishlab, berilgan gaplardan ega va kesimni topadi va tagiga chizadi.',
    'Uyga berilgan vazifa talablarini tushunib, kundaliklariga belgilab oladi.'
  ],
  topshiriqlar: [
    {
      raqam: 1,
      nomi: '«Egani top!» mashqi',
      tavsifi: 'Quyidagi gaplarga tegishli so‘roqni bering va egani toping:\n1. Qushlar iliq o‘lkalarga uchib ketdi.\n2. Malika onasiga yordam berdi.\n3. Quyosh olamni yoritdi.',
      javobi: '1. Qushlar (Nima?), 2. Malika (Kim?), 3. Quyosh (Nima?)'
    },
    {
      raqam: 2,
      nomi: '«Kesimni joy-joyiga qo‘y» o‘yini',
      tavsifi: 'Nuqtalar o‘rniga mos kesimni qo‘yib, gapni to‘ldiring:\n1. Bog‘da shirin mevalar ... (pishdi / o‘sdi).\n2. O‘quvchilar yangi darsni diqqat bilan ... (tingladilar).\n3. Shamol mayin ... (esdi).',
      javobi: 'pishdi, tingladilar, esdi'
    },
    {
      raqam: 3,
      nomi: '«Chizma bo‘yicha gap tuzish»',
      tavsifi: 'Doskadagi [ _____  ====== ] chizmasiga mos qilib bittadan gap tuzing.',
      javobi: 'Misol: Bahor keldi. Bolalar quvondi.'
    }
  ],
  baholash: [
    {
      ball: '5 (A’lo)',
      mezon: 'Ega va kesim tushunchasini to‘liq tushungan, so‘roqlarni adashmasdan to‘g‘ri beradi, gaplarni xatosiz tahlil qila oladi va daftarga chiroyli yozadi.'
    },
    {
      ball: '4 (Yaxshi)',
      mezon: 'Mavzuni tushungan, mustaqil gap tuza oladi, ammo so‘roq berishda yoki tagiga chizishda juz’iy 1-2 ta noaniqlikka yo‘l qo‘yadi.'
    },
    {
      ball: '3 (Qoniqarli)',
      mezon: 'Gap bo‘laklarini faqat o‘qituvchi yordamida ajratadi, so‘roq berishda qiynaladi, faolligi past.'
    }
  ],
  uygaVazifa: {
    vazifa: 'Darslikning 48-betidagi 124-mashq. 4 ta gapni ko‘chirib yozish.',
    korsatma: 'Har bir gapdagi eganing tagiga bitta to‘g‘ri chiziq, kesimning tagiga esa ikkita to‘g‘ri chiziq chizing. Qaysi so‘roqlarga javob bo‘lganini og‘zaki ayting.'
  },
  refleksiya: {
    metod: '«Svetofor» usuli',
    savollar: [
      '🟢 Yashil: «Bugun men ega va kesimni juda yaxshi tushundim va mustaqil bajara olaman.»',
      '🟡 Sariq: «Mavzuni tushundim, lekin ba’zi so‘roqlarda biroz ikkilanib qoldim.»',
      '🔴 Qizil: «Mavzu menga qiyin tuyuldi, yana qo‘shimcha mashq qilishim kerak.»'
    ]
  },
  tavsiyalar: [
    'Boshlang‘ich 3-sinf o‘quvchilari uchun mavzuni quruq qoidalar bilan emas, «Ega» va «Kesim»ni ertak qahramonlari yoki do‘stlar sifatida gavdalantirish dars samarasini 2 barobar oshiradi.',
    'Dars o‘rtasida (20-daqiqada) 1 daqiqalik «Jismoniy daqiqa» (sheriklar bilan «Kim chaqqon» harakatli mashqi) o‘tkazilsa, o‘quvchilar charchoqni his qilmaydi.',
    'O‘quvchilar daftarlariga ega va kesimni chizishda albatta chizg‘ichdan foydalanishini ta’kidlang — bu boshlang‘ich sinfdan boshlab estetik tartibni o‘rgatadi.'
  ]
};

export const POPULAR_EXAMPLES = [
  {
    sinf: '3-sinf',
    fan: 'Ona tili',
    mavzu: 'Gap bo‘laklari',
    turi: 'Yangi bilim beruvchi',
    davomiyligi: '45 daqiqa',
    badge: 'Tavsiya etiladi'
  },
  {
    sinf: '4-sinf',
    fan: 'Matematika',
    mavzu: 'Ko‘p xonali sonlarni qo‘shish va ayirish',
    turi: 'Mustahkamlovchi',
    davomiyligi: '45 daqiqa',
    badge: 'Mashhur'
  },
  {
    sinf: '5-sinf',
    fan: 'Informatika',
    mavzu: 'Algoritm tushunchasi va uning turlari',
    turi: 'Yangi bilim beruvchi',
    davomiyligi: '45 daqiqa',
    badge: 'Zamonaviy'
  },
  {
    sinf: '2-sinf',
    fan: 'O‘qish',
    mavzu: 'Ona tabiatni sevamiz va asraymiz',
    turi: 'Aralash',
    davomiyligi: '40 daqiqa',
    badge: 'Interaktiv'
  }
];
