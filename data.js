/*
  Replace the placeholder values below with your own information.
  Every visible item has an English (en) and Persian (fa) version.
  Leave an image path empty to keep the designed placeholder visible.
*/

window.portfolioData = {
  en: {
    shortName: "Mohammadali",
    name: "Mohammadali Esfahani",
    nav: {
      updates: "Updates",
      education: "Education",
      publications: "Publications",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Software Engineering Researcher · AI Practitioner",
      description:
        "I am a computer science researcher working at the intersection of software engineering and artificial intelligence, with a focus on intelligent tools that support developers and software teams.",
      location: "Computer Science · Open to research collaboration",
    },
    placeholders: {
      portrait: "Add your portrait",
      hobby: "Add a personal photo",
      logo: "Institution logo",
      paper: "Paper figure or poster",
    },
    sections: {
      updates: {
        title: "Updates",
        intro: "Recent milestones, publications, awards, and academic news.",
      },
      education: {
        title: "Education",
        intro: "Academic training, research supervision, and thesis work.",
      },
      awards: {
        title: "Awards & Honors",
        intro: "Selected recognition for research, teaching, and service.",
      },
      publications: {
        title: "Selected Publications",
        intro: "A small selection of work that best represents my research.",
      },
      research: { title: "Research Interests" },
      credentials: {
        title: "Skills & Credentials",
        intro: "Technical strengths, professional certificates, and training.",
      },
      personal: { title: "Beyond Research" },
    },
    research: {
      statement:
        "My research interests include software engineering, reviewer recommendation systems, mining software repositories, developer turnover, machine learning, and natural language processing. I am particularly interested in building data-driven tools that improve collaboration and decision-making in software teams.",
    },
    personal: {
      description:
        "Share a little about your interests outside work—books, music, travel, sport, volunteering, or anything that makes the page feel genuinely yours.",
    },
    footer: {
      eyebrow: "Let’s connect",
      title: "Open to thoughtful conversations.",
      description:
        "For research collaborations, speaking, or professional inquiries, the best way to reach me is by email.",
      backToTop: "Back to top ↑",
    },
    labels: {
      supervisor: "Supervisor",
      thesis: "Thesis",
      details: "View",
      logo: "Institution logo",
      paper: "Paper figure or poster",
    },
    links: [
      { label: "Email", url: "mailto:mohammadali.sefidi@gmail.com" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=vsiWWesAAAAJ&hl" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/mohammadali-esfahani/" },
      { label: "GitHub", url: "https://github.com/mojtabaSefidi" },
      { label: "CV", url: "./assets/cv/Mohammadali_Esfahani_CV.pdf" },
    ],
    updates: [
      {
        date: "2026",
        title: "Paper accepted at ICSE 2026",
        description: "Our work studies the cost and benefit of adding an extra code reviewer to mitigate developer turnover.",
        tag: "Publication",
      },
      {
        date: "2025",
        title: "EnrichEvent published in the Iran Journal of Computer Science",
        description: "The paper presents a contextual enrichment approach for emerging event extraction from social data.",
        tag: "Publication",
      },
      {
        date: "2023",
        title: "Completed M.Sc. in Computer Science",
        description: "Graduated from Amirkabir University of Technology with a focus on soft computing and artificial intelligence.",
        tag: "Education",
      },
    ],
    education: [
      {
        degree: "M.Sc. in Computer Science",
        university: "Amirkabir University of Technology",
        supervisor: "Add supervisor",
        thesis: "Add master’s thesis title",
        date: "2021 — 2023",
        logo: "./assets/logos/aut_logo_en.png",
      },
      {
        degree: "B.Sc. in Computer Science",
        university: "Kharazmi University",
        supervisor: "Add supervisor, if applicable",
        thesis: "Add undergraduate thesis or project",
        date: "2017 — 2021",
        logo: "./assets/logos/Kharazmi_logo_en.jpeg",
      },
    ],
    awards: [
      {
        title: "Award or Scholarship Name",
        description: "One sentence describing the recognition and its scope.",
        institution: "Awarding Institution",
        date: "2025",
      },
      {
        title: "Research or Academic Honor",
        description: "Add the selection criteria or achievement if helpful.",
        institution: "Institution Name",
        date: "2024",
      },
      {
        title: "Teaching or Service Award",
        description: "Briefly explain your contribution or accomplishment.",
        institution: "Institution Name",
        date: "2023",
      },
    ],
    publications: [
      {
        title: "The Cost vs the Benefit of Adding an Extra Code Reviewer to Mitigate Developer Turnover through Reviewer Recommenders",
        authors: "Mohammadali Sefidi Esfahani, Fahimeh Hajari, Peter C. Rigby",
        venue: "ICSE · 2026",
        image: "./assets/publications/2026_SofiaLearnerPlus/SimulationMethod.png",
        links: [
          { label: "PDF", url: "https://conf.researchr.org/details/icse-2026/icse-2026-research-track/28/The-Cost-vs-the-Benefit-of-Adding-an-Extra-Code-Reviewer-to-Mitigate-Developer-Turnov" },
          { label: "Code", url: "https://github.com/CESEL/SofiaLearnerPlus" },
          { label: "Data", url: "#" },
          { label: "Conference", url: "https://conf.researchr.org/track/icse-2026/icse-2026-research-track" },
        ],
      },
      {
        title: "EnrichEvent: Enriching Social Data with Contextual Information for Emerging Event Extraction",
        authors: "Mohammadali Sefidi Esfahani, Mohammad Akbari",
        venue: "Iran Journal of Computer Science · 2025",
        image: "./assets/publications/2023_EnrichEvent/Framework_EnrichEvent.png",
        links: [
          { label: "PDF", url: "https://arxiv.org/abs/2307.16082" },
          { label: "Code", url: "https://github.com/mojtabaSefidi/EnrichEvent" },
          { label: "Data", url: "#" },
          { label: "BibTeX", url: "./assets/publications/2023_EnrichEvent/bibtext.txt" },
        ],
      },
      {
        title: "Comparative Study on Performance of ML Models for Fall Detection in Older People",
        authors: "Mohammadali Sefidi Esfahani, Mohammad Fattahian",
        venue: "Preprints.org · 2023",
        image: "./assets/publications/2023_Fall_Detection/Framework.png",
        links: [
          { label: "PDF", url: "https://www.preprints.org/manuscript/202312.2027" },
          { label: "Code", url: "https://github.com/mojtabaSefidi/Fall-Detection-System" },
          { label: "Data", url: "#" },
          { label: "BibTeX", url: "./assets/publications/2023_Fall_Detection/bibtext.txt" },
        ],
      },
      {
        title: "Feature Learning for Identification of Persian Events from Twitter",
        authors: "Mohammadali Sefidi Esfahani, Mohammad Akbari",
        venue: "CSICC · 2023",
        image: "./assets/publications/2023_Feature_Engineering_for_EventDetection/Framework.png",
        links: [
          { label: "PDF", url: "https://drive.google.com/file/d/1cupVjZzVa74ca-YfylT8TC3MoyCCG6NL/view?usp=sharing" },
          { label: "Code", url: "https://github.com/mojtabaSefidi/EnrichEvent" },
          { label: "Data", url: "#" },
          { label: "BibTeX", url: "./assets/publications/2023_Feature_Engineering_for_EventDetection/bibtext.txt" },
        ],
      },
    ],
    credentials: [
      {
        title: "Professional Certificate or Core Skill",
        description: "Describe the capability, course, or credential.",
        institution: "Issuing Institution",
        date: "2025",
        link: "#",
      },
      {
        title: "Technical Training or Certification",
        description: "Add the most relevant details in one line.",
        institution: "Issuing Institution",
        date: "2024",
        link: "#",
      },
    ],
  },

  fa: {
    shortName: "محمدعلی",
    name: "محمدعلی اسفهانی",
    nav: {
      updates: "تازه‌ها",
      education: "تحصیلات",
      publications: "مقالات",
      contact: "تماس",
    },
    hero: {
      eyebrow: "پژوهشگر مهندسی نرم‌افزار · متخصص هوش مصنوعی",
      description:
        "پژوهشگر علوم کامپیوتر در تقاطع مهندسی نرم‌افزار و هوش مصنوعی هستم و بر ابزارهای هوشمند برای پشتیبانی از توسعه‌دهندگان و تیم‌های نرم‌افزاری تمرکز دارم.",
      location: "علوم کامپیوتر · آماده همکاری‌های پژوهشی",
    },
    placeholders: {
      portrait: "تصویر خود را اضافه کنید",
      hobby: "یک تصویر شخصی اضافه کنید",
      logo: "نشان مؤسسه",
      paper: "تصویر یا پوستر مقاله",
    },
    sections: {
      updates: {
        title: "تازه‌ها",
        intro: "آخرین رویدادها، مقالات، افتخارات و خبرهای علمی.",
      },
      education: {
        title: "تحصیلات",
        intro: "سوابق دانشگاهی، استادان راهنما و پایان‌نامه‌ها.",
      },
      awards: {
        title: "جوایز و افتخارات",
        intro: "گزیده‌ای از افتخارات پژوهشی، آموزشی و حرفه‌ای.",
      },
      publications: {
        title: "مقالات منتخب",
        intro: "گزیده‌ای از آثاری که بهترین نماینده مسیر پژوهشی من هستند.",
      },
      research: { title: "علایق پژوهشی" },
      credentials: {
        title: "مهارت‌ها و گواهی‌نامه‌ها",
        intro: "توانایی‌های تخصصی، دوره‌ها و گواهی‌نامه‌های حرفه‌ای.",
      },
      personal: { title: "فراتر از پژوهش" },
    },
    research: {
      statement:
        "علایق پژوهشی من شامل مهندسی نرم‌افزار، سامانه‌های پیشنهاددهنده بازبین کد، کاوش مخازن نرم‌افزاری، جابه‌جایی توسعه‌دهندگان، یادگیری ماشین و پردازش زبان طبیعی است. به‌طور ویژه به ساخت ابزارهای داده‌محور برای بهبود همکاری و تصمیم‌گیری در تیم‌های نرم‌افزاری علاقه‌مندم.",
    },
    personal: {
      description:
        "کمی از علایق خود بیرون از محیط کار بنویسید؛ کتاب، موسیقی، سفر، ورزش، فعالیت داوطلبانه یا هر چیزی که این صفحه را شخصی‌تر می‌کند.",
    },
    footer: {
      eyebrow: "در ارتباط باشیم",
      title: "از گفت‌وگوهای سازنده استقبال می‌کنم.",
      description:
        "برای همکاری پژوهشی، سخنرانی یا پیشنهادهای حرفه‌ای، بهترین راه ارتباط با من ایمیل است.",
      backToTop: "بازگشت به بالا ↑",
    },
    labels: {
      supervisor: "استاد راهنما",
      thesis: "پایان‌نامه",
      details: "مشاهده",
      logo: "نشان مؤسسه",
      paper: "تصویر یا پوستر مقاله",
    },
    links: [
      { label: "ایمیل", url: "mailto:mohammadali.sefidi@gmail.com" },
      { label: "گوگل اسکالر", url: "https://scholar.google.com/citations?user=vsiWWesAAAAJ&hl" },
      { label: "لینکدین", url: "https://www.linkedin.com/in/mohammadali-esfahani/" },
      { label: "گیت‌هاب", url: "https://github.com/mojtabaSefidi" },
      { label: "رزومه", url: "./assets/cv/Mohammadali_Esfahani_CV.pdf" },
    ],
    updates: [
      {
        date: "۱۴۰۵",
        title: "پذیرش مقاله در کنفرانس ICSE 2026",
        description: "این پژوهش هزینه و مزیت افزودن یک بازبین کد اضافی برای کاهش اثر جابه‌جایی توسعه‌دهندگان را بررسی می‌کند.",
        tag: "مقاله",
      },
      {
        date: "۱۴۰۴",
        title: "انتشار مقاله EnrichEvent در Iran Journal of Computer Science",
        description: "این مقاله روشی برای غنی‌سازی زمینه‌ای داده‌های اجتماعی و استخراج رویدادهای نوظهور ارائه می‌کند.",
        tag: "مقاله",
      },
      {
        date: "۱۴۰۲",
        title: "پایان دوره کارشناسی ارشد علوم کامپیوتر",
        description: "فارغ‌التحصیل دانشگاه صنعتی امیرکبیر با گرایش محاسبات نرم و هوش مصنوعی.",
        tag: "تحصیلات",
      },
    ],
    education: [
      {
        degree: "کارشناسی ارشد علوم کامپیوتر",
        university: "دانشگاه صنعتی امیرکبیر",
        supervisor: "نام استاد راهنما را اضافه کنید",
        thesis: "عنوان پایان‌نامه کارشناسی ارشد را اضافه کنید",
        date: "۱۴۰۰ — ۱۴۰۲",
        logo: "./assets/logos/aut_logo_fa.png",
      },
      {
        degree: "کارشناسی علوم کامپیوتر",
        university: "دانشگاه خوارزمی",
        supervisor: "در صورت نیاز نام استاد را اضافه کنید",
        thesis: "عنوان پروژه یا پایان‌نامه کارشناسی را اضافه کنید",
        date: "۱۳۹۶ — ۱۴۰۰",
        logo: "./assets/logos/Kharazmi_logo_fa.png",
      },
    ],
    awards: [
      {
        title: "نام جایزه یا بورسیه",
        description: "در یک جمله این افتخار و گستره آن را توضیح دهید.",
        institution: "نام مؤسسه اعطاکننده",
        date: "۱۴۰۴",
      },
      {
        title: "افتخار علمی یا پژوهشی",
        description: "در صورت نیاز معیار انتخاب یا دستاورد خود را اضافه کنید.",
        institution: "نام مؤسسه",
        date: "۱۴۰۳",
      },
      {
        title: "جایزه آموزشی یا حرفه‌ای",
        description: "مشارکت یا دستاورد خود را به‌طور مختصر توضیح دهید.",
        institution: "نام مؤسسه",
        date: "۱۴۰۲",
      },
    ],
    publications: [
      {
        title: "هزینه در برابر مزیت افزودن یک بازبین کد اضافی برای کاهش جابه‌جایی توسعه‌دهندگان",
        authors: "محمدعلی صفیدی اسفهانی، فهیمه هجری، پیتر سی. ریگبی",
        venue: "ICSE · ۱۴۰۵",
        image: "./assets/publications/2026_SofiaLearnerPlus/SimulationMethod.png",
        links: [
          { label: "مقاله", url: "https://conf.researchr.org/details/icse-2026/icse-2026-research-track/28/The-Cost-vs-the-Benefit-of-Adding-an-Extra-Code-Reviewer-to-Mitigate-Developer-Turnov" },
          { label: "کد", url: "https://github.com/CESEL/SofiaLearnerPlus" },
          { label: "داده", url: "#" },
          { label: "کنفرانس", url: "https://conf.researchr.org/track/icse-2026/icse-2026-research-track" },
        ],
      },
      {
        title: "EnrichEvent: غنی‌سازی داده‌های اجتماعی با اطلاعات زمینه‌ای برای استخراج رویدادهای نوظهور",
        authors: "محمدعلی صفیدی اسفهانی، محمد اکبری",
        venue: "Iran Journal of Computer Science · ۱۴۰۴",
        image: "./assets/publications/2023_EnrichEvent/Framework_EnrichEvent.png",
        links: [
          { label: "مقاله", url: "https://arxiv.org/abs/2307.16082" },
          { label: "کد", url: "https://github.com/mojtabaSefidi/EnrichEvent" },
          { label: "داده", url: "#" },
          { label: "BibTeX", url: "./assets/publications/2023_EnrichEvent/bibtext.txt" },
        ],
      },
      {
        title: "مطالعه تطبیقی عملکرد مدل‌های یادگیری ماشین برای تشخیص سقوط سالمندان",
        authors: "محمدعلی صفیدی اسفهانی، محمد فتاحیان",
        venue: "Preprints.org · ۱۴۰۲",
        image: "./assets/publications/2023_Fall_Detection/Framework.png",
        links: [
          { label: "مقاله", url: "https://www.preprints.org/manuscript/202312.2027" },
          { label: "کد", url: "https://github.com/mojtabaSefidi/Fall-Detection-System" },
          { label: "داده", url: "#" },
          { label: "BibTeX", url: "./assets/publications/2023_Fall_Detection/bibtext.txt" },
        ],
      },
      {
        title: "یادگیری ویژگی برای شناسایی رویدادهای فارسی از توییتر",
        authors: "محمدعلی صفیدی اسفهانی، محمد اکبری",
        venue: "CSICC · ۱۴۰۲",
        image: "./assets/publications/2023_Feature_Engineering_for_EventDetection/Framework.png",
        links: [
          { label: "مقاله", url: "https://drive.google.com/file/d/1cupVjZzVa74ca-YfylT8TC3MoyCCG6NL/view?usp=sharing" },
          { label: "کد", url: "https://github.com/mojtabaSefidi/EnrichEvent" },
          { label: "داده", url: "#" },
          { label: "BibTeX", url: "./assets/publications/2023_Feature_Engineering_for_EventDetection/bibtext.txt" },
        ],
      },
    ],
    credentials: [
      {
        title: "گواهی‌نامه حرفه‌ای یا مهارت اصلی",
        description: "توانایی، دوره یا گواهی‌نامه خود را توضیح دهید.",
        institution: "مؤسسه صادرکننده",
        date: "۱۴۰۴",
        link: "#",
      },
      {
        title: "آموزش تخصصی یا مدرک حرفه‌ای",
        description: "مهم‌ترین جزئیات را در یک خط اضافه کنید.",
        institution: "مؤسسه صادرکننده",
        date: "۱۴۰۳",
        link: "#",
      },
    ],
  },

  images: {
    portrait: "./assets/profile-pics/profile_photo_esfahani.jpg",
    hobby: "",
  },
};
