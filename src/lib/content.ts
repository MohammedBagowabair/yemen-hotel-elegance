export type Lang = "en" | "ar";

type L = { en: string; ar: string };

export const brand = {
  name: { en: "Dar Al Sama", ar: "دار السماء" },
  full: {
    en: "Dar Al Sama Hotel & Residences",
    ar: "دار السماء للفنادق والأجنحة",
  },
  tagline: {
    en: "Old Sana'a, reimagined",
    ar: "صنعاء القديمة، كما لم ترَها من قبل",
  },
};

export const nav = {
  home: { en: "Home", ar: "الرئيسية" },
  about: { en: "The House", ar: "عن الدار" },
  rooms: { en: "Rooms & Suites", ar: "الغرف والأجنحة" },
  dining: { en: "Dining", ar: "المطاعم" },
  amenities: { en: "Amenities", ar: "الخدمات" },
  gallery: { en: "Gallery", ar: "المعرض" },
  contact: { en: "Contact", ar: "تواصل معنا" },
  book: { en: "Book a stay", ar: "احجز إقامتك" },
  langLabel: { en: "العربية", ar: "English" },
  menu: { en: "Menu", ar: "القائمة" },
};

export const hero = {
  eyebrow: {
    en: "Boutique hotel & serviced residences · Old Sana'a",
    ar: "فندق بوتيك وأجنحة مخدومة · صنعاء القديمة",
  },
  title: {
    en: "Where Yemeni heritage becomes quiet luxury",
    ar: "حيث يصبح التراث اليمني رفاهية هادئة",
  },
  text: {
    en: "Forty-eight rooms and residences inside a restored Old Sana'a house — gypsum friezes, qamariya light, and a rooftop above the oldest mountain city in the world.",
    ar: "ثمانٍ وأربعون غرفة وجناحًا داخل بيت صنعاني مُرمَّم — جصّ أبيض، وضوء القمريات، وسطحٌ يطلّ على أقدم مدينة جبلية في العالم.",
  },
  primary: { en: "Check availability", ar: "توفّر الغرف" },
  secondary: { en: "Explore the house", ar: "اكتشف الدار" },
  scroll: { en: "Scroll", ar: "انزل" },
};

export const booking = {
  title: { en: "Plan your stay", ar: "خطّط لإقامتك" },
  checkIn: { en: "Check in", ar: "تاريخ الوصول" },
  checkOut: { en: "Check out", ar: "تاريخ المغادرة" },
  guests: { en: "Guests", ar: "الضيوف" },
  rooms: { en: "Rooms", ar: "الغرف" },
  search: { en: "Search", ar: "ابحث" },
  result: {
    en: "Availability held for 24 hours. Our team confirms by email.",
    ar: "تُحفظ الغرفة ٢٤ ساعة، ويتواصل فريقنا معك بالبريد للتأكيد.",
  },
};

export const stats = {
  rooms: { value: "48", label: { en: "Rooms & residences", ar: "غرفة وجناح" } },
  rooftop: { value: "1", label: { en: "Rooftop restaurant", ar: "مطعم على السطح" } },
  airport: { value: "12", label: { en: "Minutes to airport", ar: "دقيقة إلى المطار" } },
  rating: { value: "4.9", label: { en: "Guest rating", ar: "تقييم الضيوف" } },
};

export const about = {
  eyebrow: { en: "The house", ar: "الدار" },
  title: {
    en: "A house first, a hotel second",
    ar: "بيتٌ أولًا، ثم فندق",
  },
  p1: {
    en: "Dar Al Sama began as a family home on Al-Qi'yah Street, its walls rebuilt lime by lime over nine years. We kept the carved ceilings, the grain of the mud brick, and the way late light falls through the qamariya onto the floor.",
    ar: "بدأت دار السماء بيتًا عائليًا في شارع القِيعة، أُعيد بناء جدرانها جيرًا فوق جير على مدى تسع سنوات. أبقينا على الأسقف المنحوتة، وحبّ الطين، وطريقة سقوط الضوء المتأخر من القمريات على الأرض.",
  },
  p2: {
    en: "What we added is quiet: deep beds, warm water, fast internet, and a team that treats a guest the way a Yemeni household treats a welcome visitor.",
    ar: "أضفنا ما هو هادئ: أسرّة عميقة، وماءٌ دافئ، وإنترنت سريع، وفريقًا يستضيف النزيل كما تستضيفه بيتٌ يمني.",
  },
  quote: {
    en: "Restoration is not decoration. It is listening to a building until it tells you what it wants to be.",
    ar: "الترميم ليس تزيينًا، بل إنصاتٌ للمبنى حتى يخبرك أيّ شيء يريد أن يكون.",
  },
  quoteBy: {
    en: "Nadia Al-Wazir, Director of Restoration",
    ar: "نادية الوزير، مديرة الترميم",
  },
};

export const rooms = {
  eyebrow: { en: "Stay", ar: "الإقامة" },
  title: { en: "Rooms & residences", ar: "الغرف والأجنحة" },
  text: {
    en: "Every room faces either the courtyard or the old city. Rates include breakfast, the hammam, and airport transfer.",
    ar: "كل غرفة تطلّ على الفناء أو على المدينة القديمة. تشمل الأسعار الإفطار والحمّام والتوصيل من المطار.",
  },
  from: { en: "from", ar: "ابتداءً من" },
  perNight: { en: "/ night", ar: "/ ليلة" },
  details: { en: "Room details", ar: "تفاصيل الغرفة" },
  items: [
    {
      name: { en: "Old City Room", ar: "غرفة المدينة القديمة" },
      price: "140",
      size: { en: "32 m² · King bed", ar: "٣٢ م² · سرير كينج" },
      text: {
        en: "Lime-washed walls, a qamariya window over the lane, and a stone bench for reading.",
        ar: "جدرانٌ بالجير، وقمرية تطلّ على الزقاق، ودكّانٌ حجري للقراءة.",
      },
      tags: [
        { en: "Courtyard view", ar: "إطلالة الفناء" },
        { en: "Rain shower", ar: "دش مطري" },
        { en: "Nespresso", ar: "نيسبريسو" },
      ],
    },
    {
      name: { en: "Sana'a Suite", ar: "جناح صنعاء" },
      price: "260",
      size: { en: "58 m² · Separate majlis", ar: "٥٨ م² · مجلس منفصل" },
      text: {
        en: "A sitting room with carved cedar screens, a freestanding tub, and a private terrace.",
        ar: "صالة جلوس بمشربيات أرزٍ منحوتة، وحمامٌ مستقل، وتراسٌ خاص.",
      },
      tags: [
        { en: "Private terrace", ar: "تراس خاص" },
        { en: "Bathtub", ar: "حوض استحمام" },
        { en: "Butler service", ar: "خدمة خادم" },
      ],
    },
    {
      name: { en: "Royal Residence", ar: "الجناح الملكي" },
      price: "480",
      size: { en: "96 m² · Private rooftop", ar: "٩٦ م² · سطح خاص" },
      text: {
        en: "Two bedrooms, a majlis that seats eight, and a rooftop with its own fire pit.",
        ar: "غرفتا نوم، ومجلسٌ يتّسع لثمانية، وسطحٌ بموقدٍ خاص.",
      },
      tags: [
        { en: "Rooftop kitchen", ar: "مطبخ السطح" },
        { en: "Two bedrooms", ar: "غرفتا نوم" },
        { en: "Chef on request", ar: "طهاة عند الطلب" },
      ],
    },
  ],
};

export const dining = {
  eyebrow: { en: "Table", ar: "المائدة" },
  reserve: { en: "Reserve a table", ar: "احجز مائدة" },
  title: { en: "Where the day slows down", ar: "حيث يهدأ النهار" },
  text: {
    en: "Three tables, one kitchen, and a pantry that sources from the same souks the house has used for generations.",
    ar: "ثلاث موائد، ومطبخٌ واحد، ومخزنٌ يقتني من الأسواق التي يقصدها البيت منذ أجيال.",
  },
  items: [
    {
      name: { en: "Sama Rooftop", ar: "سطح السماء" },
      hours: { en: "6:00 pm – midnight", ar: "٦ مساءً – منتصف الليل" },
      text: {
        en: "Yemeni and Levantine mezze served as the towers turn gold. Book the corner table for sunset.",
        ar: "مَازَة يمنية وشامية تُقدَّم بينما تتحوّل الأبراج إلى الذهب. احجز الطاولة الركنية وقت الغروب.",
      },
    },
    {
      name: { en: "Al Bustan Café", ar: "مقهى البستان" },
      hours: { en: "7:00 am – 8:00 pm", ar: "٧ صباحًا – ٨ مساءً" },
      text: {
        en: "Yemeni coffee roasted in house, honey bread warm from the tannur, and long quiet mornings.",
        ar: "قهوة يمنية تُحمَّص في الدار، وخبز عسلٍ ساخن من التنور، وصباحاتٌ طويلة هادئة.",
      },
    },
    {
      name: { en: "Private Majlis Dining", ar: "مائدة المجلس" },
      hours: { en: "By reservation", ar: "بالحجز المسبق" },
      text: {
        en: "A chef's table on hand-woven carpets for six to twelve guests, built around your menu.",
        ar: "طاولة الطاهي على سجادٍ منسوج يدويًا لستة إلى اثني عشر ضيفًا، تُبنى حول قائمتك.",
      },
    },
  ],
};

export const amenities = {
  eyebrow: { en: "Comfort", ar: "الراحة" },
  title: { en: "Everything you need, nothing you don't", ar: "كل ما تحتاجه، ولا شيء زائد" },
  items: [
    { name: { en: "Rooftop pool", ar: "مسبح السطح" }, text: { en: "Heated, open to sunrise", ar: "مُدفّأ، يفتح مع الشروق" } },
    { name: { en: "Hammam & spa", ar: "حمّام وسبا" }, text: { en: "Steam, scrub, two rooms", ar: "بخار وتقشيب وغرفتان" } },
    { name: { en: "Fast Wi-Fi", ar: "إنترنت سريع" }, text: { en: "Fibre in every room", ar: "ألياف في كل غرفة" } },
    { name: { en: "Airport transfer", ar: "توصيل المطار" }, text: { en: "Included, day or night", ar: "مجانًا ليلًا ونهارًا" } },
    { name: { en: "Concierge 24h", ar: "كونسيرج ٢٤ ساعة" }, text: { en: "Guides, drivers, souks", ar: "أدلاء وسائقون وأسواق" } },
    { name: { en: "Fitness room", ar: "صالة لياقة" }, text: { en: "Open 24 hours", ar: "مفتوحة ٢٤ ساعة" } },
    { name: { en: "Secure parking", ar: "مواقف آمنة" }, text: { en: "12 spaces, gated", ar: "١٢ موقفًا، بوابة مغلقة" } },
    { name: { en: "Work corner", ar: "ركن عمل" }, text: { en: "Printers and meeting table", ar: "طابعات وطاولة اجتماعات" } },
  ],
};

export const gallery = {
  eyebrow: { en: "Gallery", ar: "المعرض" },
  title: { en: "Light, stone, and pattern", ar: "الضوء والحجر والزخرفة" },
  text: {
    en: "Photographed inside the house across a single week.",
    ar: "صُوِّرت داخل الدار على مدى أسبوع واحد.",
  },
  captions: [
    { en: "The courtyard at first light", ar: "الفناء مع أول ضوء" },
    { en: "Qamariya, late afternoon", ar: "القمرية بعد الظهر" },
    { en: "Coffee, dates, and honey", ar: "قهوة وتمر وعسل" },
    { en: "The hammam basin", ar: "حوض الحمّام" },
    { en: "Sama Rooftop at dusk", ar: "سطح السماء وقت الغروب" },
    { en: "Old Sana'a from the parapet", ar: "صنعاء القديمة من السور" },
  ],
};

export const testimonials = {
  eyebrow: { en: "Guests", ar: "الضيوف" },
  title: { en: "What people carry home", ar: "ما يحمله الضيوف معهم" },
  items: [
    {
      quote: {
        en: "I have stayed in a lot of beautiful hotels. This is the only one where I felt I was visiting someone.",
        ar: "أقمتُ في كثير من الفنادق الجميلة. هذا الوحيد الذي شعرتُ فيه أنني أزور أحدًا.",
      },
      name: "Layla Haddad",
      role: { en: "Architect, Beirut", ar: "مهندسة معمارية، بيروت" },
    },
    {
      quote: {
        en: "The rooftop at sunset, with the old city lit below, is worth the flight on its own.",
        ar: "سطح الدار عند الغروب، والمدينة القديمة مضاءة تحته، يستحق الرحلة وحده.",
      },
      name: "Tomás Ferreira",
      role: { en: "Photographer, Lisbon", ar: "مصوّر، لشبونة" },
    },
    {
      quote: {
        en: "Twelve days of meetings, and the house never once felt like an office.",
        ar: "اثنا عشر يومًا من الاجتماعات، ولم تشعر الدار يومًا بأنها مكتب.",
      },
      name: "Mona Saeed",
      role: { en: "Programme lead, Amman", ar: "مسؤولة برامج، عمّان" },
    },
  ],
};

export const cta = {
  title: {
    en: "Stay inside a living museum",
    ar: "أقِم داخل متحفٍ حيّ",
  },
  text: {
    en: "Direct rates are always lowest here, and every stay includes breakfast, the hammam, and airport transfer.",
    ar: "أسعار الحجز المباشر هي دائمًا الأقل، وتشمل كل إقامة الإفطار والحمّام والتوصيل من المطار.",
  },
  button: { en: "Book a stay", ar: "احجز إقامتك" },
  call: { en: "or call", ar: "أو اتصل على" },
};

export const contact = {
  eyebrow: { en: "Contact", ar: "تواصل" },
  title: { en: "Tell us when you arrive", ar: "أخبرنا موعد وصولك" },
  text: {
    en: "Send the dates and we will hold a room and reply within two hours.",
    ar: "أرسل تواريخك وسنحجز لك غرفة ونردّ خلال ساعتين.",
  },
  name: { en: "Full name", ar: "الاسم الكامل" },
  email: { en: "Email", ar: "البريد الإلكتروني" },
  phone: { en: "Phone", ar: "الهاتف" },
  dates: { en: "Arrival and departure", ar: "الوصول والمغادرة" },
  message: { en: "Anything we should know?", ar: "هل هناك ما يجب أن نعرفه؟" },
  send: { en: "Send request", ar: "أرسل الطلب" },
  sent: {
    en: "Thank you — your request reached us. We reply within two hours.",
    ar: "شكرًا — وصلنا طلبك. نردّ خلال ساعتين.",
  },
  address: { en: "Al-Qi'yah Street, Old Sana'a, Yemen", ar: "شارع القِيعة، صنعاء القديمة، اليمن" },
  phoneLabel: { en: "Phone", ar: "الهاتف" },
  emailLabel: { en: "Email", ar: "البريد" },
  hoursLabel: { en: "Reception", ar: "الاستقبال" },
  hours: { en: "Open 24 hours, every day", ar: "مفتوح ٢٤ ساعة يوميًا" },
};

export const footer = {
  blurb: {
    en: "A restored Old Sana'a house offering forty-eight rooms and residences, a rooftop table, and a hammam.",
    ar: "بيتٌ مُرمَّم في صنعاء القديمة يقدّم ثمانيًا وأربعين غرفة وجناحًا، ومائدة على السطح، وحمّامًا.",
  },
  links: { en: "Explore", ar: "استكشف" },
  reach: { en: "Reach us", ar: "تواصل معنا" },
  newsletter: { en: "Seasonal rates and quiet weeks", ar: "أسعار الموسم وأسابيع الهدوء" },
  subscribe: { en: "Subscribe", ar: "اشترك" },
  emailPlaceholder: { en: "Your email", ar: "بريدك الإلكتروني" },
  rights: {
    en: "All rights reserved.",
    ar: "جميع الحقوق محفوظة.",
  },
  note: {
    en: "Demo property — names, prices and contact details are fictional.",
    ar: "عقار تجريبي — الأسماء والأسعار وبيانات التواصل وهمية.",
  },
};

export const a11y = {
  skip: { en: "Skip to content", ar: "تخطَّ إلى المحتوى" },
  langSwitch: { en: "Switch language", ar: "تغيير اللغة" },
  closeMenu: { en: "Close menu", ar: "إغلاق القائمة" },
  openMenu: { en: "Open menu", ar: "فتح القائمة" },
};
