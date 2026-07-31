/*
  Replace the placeholder values below with your own information.
  Every visible item has an English (en) and Persian (fa) version.
  Leave an image path empty to keep the designed placeholder visible.
*/

window.portfolioData = {
  en: {
    initials: "ME",
    shortName: "Mohammadali Esfahani",
    name: "Mohammadali Sefidi Esfahani",
    nav: {
      updates: "Updates",
      education: "Education",
      publications: "Publications",
      contact: "Contact",
    },
    hero: {
      eyebrow: "AI for SE Researcher",
      // eyebrow: "AI for SE Researcher · Sharif University of Technology",
      description:
        "I am a computer science researcher exploring how artificial intelligence can improve software engineering through intelligent knowledge management, decision support, and data-driven software development practices.",
      location: "PhD student in Computer Science",
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
        // intro: "Recent milestones, publications, awards, and academic news.",
      },
      education: {
        title: "Education",
        // intro: "Academic training, research supervision, and thesis work.",
      },
      awards: {
        title: "Awards & Honors",
        // intro: "Selected recognition for research, teaching, and service.",
      },
      publications: {
        title: "Selected Publications",
        // intro: "A small selection of work that best represents my research.",
      },
      research: { title: "Research Interests" },
      credentials: {
        title: "Skills & Credentials",
        // intro: "Technical strengths, professional certificates, and training.",
      },
      personal: { title: "Beyond Research" },
    },
    research: {
      statement:
        "My current research explores how code reviewer recommendation systems can mitigate the risks associated with developer turnover while improving software quality. I develop reviewer recommendation strategies that reduce defect risk and foster effective knowledge distribution across software development teams, making projects more resilient to developer turnover.",
    },
    personal: {
      description:
        "Share a little about your interests outside work—books, music, travel, sport, volunteering, or anything that makes the page feel genuinely yours.",
    },
    footer: {
      eyebrow: "Let’s connect",
      title: "Open to Collaborations",
      // description:
      //   "For research collaborations, speaking, or professional inquiries, the best way to reach me is by email.",
      backToTop: "Back to top ↑",
    },
    labels: {
      supervisor: "Supervisor",
      thesis: "Thesis",
      gpa: "Cumulative GPA",
      details: "View",
      logo: "Institution logo",
      paper: "Paper figure or poster",
      openFigure: "Open full-size figure",
    },
    links: [
      { label: "Email", url: "mailto:mohammadali.sefidi@gmail.com", kind: "contact", icon: "./assets/icons/email.svg" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=vsiWWesAAAAJ&hl", kind: "profile", icon: "./assets/icons/google_scholar.svg" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/mohammadali-esfahani/", kind: "contact", icon: "./assets/icons/linkedin.svg" },
      { label: "GitHub", url: "https://github.com/mojtabaSefidi", kind: "profile", icon: "./assets/icons/github.svg" },
      { label: "CV", url: "./assets/cv/Mohammadali_Esfahani_CV.pdf", kind: "profile", indicator: false },
    ],
    updates: [
      // {
      //   date: "September 2026",
      //   title: "Start PhD in Computer Science",
      //   description: "I am Glad to start my PhD in CS at Sharif University of Technology 😊",
      //   link: "#education",
      // },
      {
        date: "Augest 2026",
        title: "Whithraw from my PhD program at Concordia University",
        description: "Due to visa delays",
        link: "#education",
      },
      {
        date: "July 2026",
        title: "Paper Presentation at FSE 2026 Confrance 🎉",
        description: "Mitigating the Risk of Defects and Improving Knowledge Distribution with Code Reviewer Recommenders",
        link: "https://conf.researchr.org/details/fse-2026/fse-2026-research-papers/24/Mitigating-the-Risk-of-Defects-and-Improving-Knowledge-Distribution-with-Code-Reviewe",
      },
      {
        date: "April 2026",
        title: "Paper Presentation at ICSE 2026 Confrance 🎉",
        description: "The Cost vs the Benefit of Adding an Extra Code Reviewer to Mitigate Developer Turnover through Reviewer Recommenders",
        link: "https://conf.researchr.org/details/icse-2026/icse-2026-research-track/28/The-Cost-vs-the-Benefit-of-Adding-an-Extra-Code-Reviewer-to-Mitigate-Developer-Turnov",
      }
    ],

    education: [
      // {
      //   degree: "PhD in Computer Science",
      //   university: "Sharif University of Technology",
      //   supervisor: "",
      //   thesis: "",
      //   gpa: "Add cumulative GPA",
      //   date: "September 2026 — Persent",
      //   logo: "./assets/logos/aut_logo_en.png",
      // },
      {
        degree: "PhD in Software Engineering",
        university: "Concordia University, Montreal, Canada",
        supervisor: "Professor Peter Rigby",
        thesis: "Intelligent SE Knowledge Management Strategies",
        // gpa: "Add cumulative GPA",
        date: "September 2024 — Augest 2026",
        logo: "./assets/logos/concordia_logo.png",
      },
      {
        degree: "MSc. in Computer Science",
        university: "Amirkabir University of Technology, Tehran, Iran",
        supervisor: "Dr. Mohammad Akbari",
        thesis: "Unspecified Event Detection from Twitter",
        gpa: "19.62",
        date: "September 2021 — September 2023",
        logo: "./assets/logos/aut_logo.png",
      },
      {
        degree: "BSc. in Computer Science",
        university: "Kharazmi University, Tehran, Iran",
        supervisor: "Dr. Mohammad Soltanian",
        thesis: "Fall Detection in Elderly People with ML models",
        gpa: "18.26",
        date: "September 2017 — July 2021",
        logo: "./assets/logos/kharazmi_logo.png",
      },
    ],

    awards: [
      {
        title: "Concordia University Tuition Award of Excellence",
        description: "Valued at CA$48,888 (unable to accept due to visa delays)",
        institution: "Concordia University, Montreal, Canada",
        date: "2026",
        logo: "./assets/logos/concordia_logo.png",

      },
      {
        title: "Concordia University Graduate Doctoral Fellowship",
        description: "Valued at CA$56,000 (unable to accept due to visa delays)",
        institution: "Concordia University, Montreal, Canada",
        date: "2025",
        logo: "./assets/logos/concordia_logo.png",

      },
      {
        title: "Concordia University Split Graduate Fellowship GCS",
        description: "Valued at CA$28,000 (unable to accept due to visa delays)",
        institution: "Concordia University, Montreal, Canada",
        date: "2024",
        logo: "./assets/logos/concordia_logo.png",
      },
      {
        title: "1st-Ranked Student",
        description: "Among the MSc. computer science students (2021 entrance)",
        institution: "Amirkabir University of Technology, Tehran, Iran",
        date: "2023",
        logo: "./assets/logos/aut_logo.png",
      },
      {
        title: "1st-Ranked Student",
        description: "Among the BSc. computer science students (2017 entrance)",
        institution: "Kharazmi University, Tehran, Iran",
        date: "2021",
        logo: "./assets/logos/kharazmi_logo.png",
      },
    ],
    publications: [
      {
        title: "Mitigating the Risk of Defects and Improving Knowledge Distribution with Code Reviewer Recommenders",
        authors: "Mohammadali Sefidi Esfahani, Peter C. Rigby",
        venue: "FSE 2026, Montreal, Canada",
        image: "./assets/publications/2026_ExpertPlus/FSE26_Paper_BigPicture.png",
        imageAspectRatio: "2806 / 930",
        caption:
          "Figure 1. Developers have diverse types of knowledge, which can sometimes overlap with each other. Suppose the middle rectangle represents the knowledge required to review the given pull request. While working on this code change, the collective knowledge of the entire reviewer team and the author’s expertise are effective in identifying defects and should be considered in the Changeset Safety Ratio.",
        links: [
          { label: "PDF", url: "https://dl.acm.org/doi/10.1145/3797070", icon: "./assets/icons/pdf.svg" },
          { label: "Code", url: "https://github.com/mojtabaSefidi/Sofia-ExpertPlusPlus", icon: "./assets/icons/code.svg" },
          { label: "Data", url: "https://figshare.com/s/e62f52f5550d0f373815", icon: "./assets/icons/database.svg" },
          { label: "Conference", url: "https://conf.researchr.org/details/fse-2026/fse-2026-research-papers/24/Mitigating-the-Risk-of-Defects-and-Improving-Knowledge-Distribution-with-Code-Reviewe", icon: "./assets/icons/conference.svg" },
          { label: "BibTeX", url: "./assets/publications/2026_ExpertPlus/bibtext.txt" },

        ],
      },
      {
        title: "The Cost vs the Benefit of Adding an Extra Code Reviewer to Mitigate Developer Turnover through Reviewer Recommenders",
        authors: "Mohammadali Sefidi Esfahani, Fahimeh Hajari, Peter C. Rigby",
        venue: "ICSE 2026, Rio, Brazil",
        image: "./assets/publications/2026_SofiaLearnerPlus/ICSE26_Paper_SimulationMethod.png",
        imageAspectRatio: "2594 / 835",
        caption:
          "Figure 1. Simulation methodology. The database contains pull request information, including authors, reviewers, and files. We determine the knowledge distribution and make recommendations based on our defined formulas for each recommender. We take the top-ranked reviewer and, depending on the recommender strategy, use seeded random replacement or add the top candidate to the review. Since alternative reviewers will have done the review in the simulation, this is fed back to the database to update the knowledge distribution for future simulated reviews. The simulation outcome metrics are all calculated relative to the actual historical reviewers.",
        links: [
          { label: "PDF", url: "https://conf.researchr.org/details/icse-2026/icse-2026-research-track/28/The-Cost-vs-the-Benefit-of-Adding-an-Extra-Code-Reviewer-to-Mitigate-Developer-Turnov", icon: "./assets/icons/pdf.svg" },
          { label: "Code", url: "https://github.com/mojtabaSefidi/Sofia-LearnerPlus", icon: "./assets/icons/code.svg" },
          { label: "Data", url: "https://figshare.com/s/b79fc69acad8e11be31a", icon: "./assets/icons/database.svg" },
          { label: "Conference", url: "https://conf.researchr.org/details/icse-2026/icse-2026-research-track/28/The-Cost-vs-the-Benefit-of-Adding-an-Extra-Code-Reviewer-to-Mitigate-Developer-Turnov", icon: "./assets/icons/conference.svg" },
          { label: "BibTeX", url: "./assets/publications/2026_ExpertPlus/bibtext.txt" },
        ],
      },
      {
        title: "EnrichEvent: Enriching Social Data with Contextual Information for Emerging Event Extraction",
        authors: "Mohammadali Sefidi Esfahani, Mohammad Akbari",
        venue: "Iran Journal of Computer Science, 2025",
        image: "./assets/publications/2023_EnrichEvent/EnrichEvent_Paper_Framework.png",
        imageAspectRatio: "1782 / 410",
        caption:
          "Figure 1. An overview of the functionality of our proposed framework, EnrichEvent. The framework processes message blocks in batches corresponding to the incoming social stream. First, the Trending Data Extraction module filters out pointless tweets. Next, the Contextual Knowledge Enhancement component extracts Named Entities and Hashtags from the tweets and builds their representation matrices. Then, the Event Clustering module categorizes the extracted entities into clusters based on their lexical, structural, and contextual representation. Finally, the Event Chain Formation module connects related clusters across consecutive message blocks to form event chains, and the Storage component saves each event’s information as a JSON file in the database.",
        links: [
          { label: "PDF", url: "https://link.springer.com/article/10.1007/s42044-025-00284-2", icon: "./assets/icons/pdf.svg" },
          { label: "Code", url: "https://github.com/mojtabaSefidi/EnrichEvent", icon: "./assets/icons/code.svg" },
          { label: "Data", url: "https://github.com/mojtabaSefidi/EnrichEvent", icon: "./assets/icons/database.svg" },
          { label: "BibTeX", url: "./assets/publications/2023_EnrichEvent/bibtext.txt" },
        ],
      },
      // {
      //   title: "Comparative Study on Performance of ML Models for Fall Detection in Older People",
      //   authors: "Mohammadali Sefidi Esfahani, Mohammad Fattahian",
      //   venue: "Journal of Artificial Intelligence, Virtual Reality, and Human-Centered Computing, 2025",
      //   image: "./assets/publications/2023_Fall_Detection/Framework.png",
      //   links: [
      //     { label: "PDF", url: "https://www.primeopenaccess.com/scholarly-articles/comparative-study-on-performance-of-ml-models-for-fall-detection-in-older-people.pdf" },
      //     { label: "Code", url: "https://github.com/mojtabaSefidi/Fall-Detection-System" },
      //     { label: "Data", url: "https://github.com/mojtabaSefidi/Fall-Detection-System" },
      //     { label: "BibTeX", url: "./assets/publications/2023_Fall_Detection/bibtext.txt" },
      //   ],
      // },
      // {
      //   title: "Feature Learning for Identification of Persian Events from Twitter",
      //   authors: "Mohammadali Sefidi Esfahani, Mohammad Akbari",
      //   venue: "CSICC · 2023",
      //   image: "./assets/publications/2023_Feature_Engineering_for_EventDetection/Framework.png",
      //   links: [
      //     { label: "PDF", url: "https://drive.google.com/file/d/1cupVjZzVa74ca-YfylT8TC3MoyCCG6NL/view?usp=sharing" },
      //     { label: "Code", url: "https://github.com/mojtabaSefidi/EnrichEvent" },
      //     { label: "Data", url: "https://github.com/mojtabaSefidi/EnrichEvent" },
      //     { label: "BibTeX", url: "./assets/publications/2023_Feature_Engineering_for_EventDetection/bibtext.txt" },
      //   ],
      // },
    ],
    credentials: [
      {
        title: "Deep Learning Specialization",
        institution: "Issued by Coursera: DeepLearning.AI",
        date: "November 2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/EWH2TDGVFEVE",
      },
      {
        title: "Natural Language Processing Specialization",
        institution: "Issued by Coursera: DeepLearning.AI",
        date: "November 2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/SF6MHSAFAZHP",
      },
      {
        title: "Machine Learning Specialization",
        institution: "Issued by Coursera: DeepLearning.AI and Standford",
        date: "October 2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3RD33KJ7MKH6",
      },
      {
        title: "Task-oriented course in artificial intelligence and machine learning",
        institution: "Issued by Quera",
        date: "November 2021",
        link: "https://quera.ir/certificate/rH0C63wS",
      },
    ],
  },

  fa: {
    initials: "ME",
    shortName: "محمدعلی اصفهانی",
    name: "محمدعلی اصفهانی",
    nav: {
      updates: "تازه‌ها",
      education: "تحصیلات",
      publications: "مقالات",
      contact: "تماس",
    },
    hero: {
      eyebrow: "پژوهشگر هوش مصنوعی برای مهندسی نرم‌افزار",
      description:
        "من پژوهشگر علوم کامپیوتر هستم و در زمینه کاربرد هوش مصنوعی در مهندسی نرم‌افزار فعالیت می‌کنم. تمرکز پژوهش‌هایم بر این است که با استفاده از هوش مصنوعی، مدیریت دانش در پروژه‌های نرم‌افزاری را هوشمندتر کنم، تصمیم‌گیری را بهبود دهم و فرایندهای توسعه نرم‌افزار را کارآمدتر و قابل‌اعتمادتر سازم.",
      location: "دانشجوی دکتری علوم کامپیوتر",
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
      },
      education: {
        title: "تحصیلات",
      },
      awards: {
        title: "جوایز و افتخارات",
      },
      publications: {
        title: "مقالات منتخب",
      },
      research: { title: "علایق پژوهشی" },
      credentials: {
        title: "مهارت‌ها و گواهی‌نامه‌ها",
      },
      personal: { title: "فراتر از پژوهش" },
    },
    research: {
      statement:
        "تمرکز پژوهش‌های من بر طراحی و ارزیابی سامانه‌های پیشنهاددهنده بازبین کد با هدف کاهش ریسک‌های ناشی از خروج توسعه‌دهندگان از پروژه و بهبود کیفیت نرم‌افزار است. به‌طور مشخص، راهبردهایی برای توصیه و تخصیص بازبین کد ارائه می‌کنم که با کاهش ریسک بروز نقص‌های نرم‌افزاری و تسهیل توزیع مؤثر دانش در میان اعضای تیم، وابستگی پروژه به افراد کلیدی را کاهش داده و تاب‌آوری تیم را در برابر خروج توسعه‌دهندگان افزایش می‌دهند."    
    },
    personal: {
      description:
        "کمی از علایق خود بیرون از محیط کار بنویسید؛ کتاب، موسیقی، سفر، ورزش، فعالیت داوطلبانه یا هر چیزی که این صفحه را شخصی‌تر می‌کند.",
    },
    footer: {
      // eyebrow: "در ارتباط باشیم",
      title: "خوشحال میشم باهم در ارتباط باشیم.",
      // description:
      //   "برای همکاری پژوهشی، سخنرانی یا پیشنهادهای حرفه‌ای، بهترین راه ارتباط با من ایمیل است.",
      backToTop: "بازگشت به بالا ↑",
    },
    labels: {
      supervisor: "استاد راهنما",
      thesis: "پایان‌نامه",
      gpa: "معدل کل",
      details: "مشاهده",
      logo: "نشان مؤسسه",
      paper: "تصویر یا پوستر مقاله",
      openFigure: "مشاهده تصویر در اندازه کامل",
    },
    links: [
      { label: "ایمیل", url: "mailto:mohammadali.sefidi@gmail.com", kind: "contact", icon: "./assets/icons/email.svg" },
      { label: "گوگل اسکالر", url: "https://scholar.google.com/citations?user=vsiWWesAAAAJ&hl", kind: "profile", icon: "./assets/icons/google_scholar.svg" },
      { label: "لینکدین", url: "https://www.linkedin.com/in/mohammadali-esfahani/", kind: "contact", icon: "./assets/icons/linkedin.svg" },
      { label: "گیت‌هاب", url: "https://github.com/mojtabaSefidi", kind: "profile", icon: "./assets/icons/github.svg" },
      { label: "رزومه", url: "./assets/cv/Mohammadali_Esfahani_CV.pdf", kind: "profile", indicator: false },
    ],
    updates: [
      // {
      //   date: "شهریور ۱۴۰۵",
      //   title: "آغاز دوره دکتری علوم کامپیوتر",
      //   description: "خوشحالم که دوره دکتری علوم کامپیوتر خود را در دانشگاه صنعتی شریف آغاز می‌کنم 😊",
      //   link: "#education",
      // },
      {
        date: "مرداد ۱۴۰۵",
        title: "انصراف از دوره دکتری مهندسی نرم‌افزار در دانشگاه کونکوردیا",
        description: "به دلیل عدم دریافت به موقع ویزا",
        link: "#education",
      },
      {
        date: "تیر ۱۴۰۵",
        title: "ارائه مقاله در کنفرانس FSE 2026 🎉",
        description: "Mitigating the Risk of Defects and Improving Knowledge Distribution with Code Reviewer Recommenders",
        link: "https://conf.researchr.org/details/fse-2026/fse-2026-research-papers/24/Mitigating-the-Risk-of-Defects-and-Improving-Knowledge-Distribution-with-Code-Reviewe",
      },
      {
        date: "فروردین ۱۴۰۵",
        title: "ارائه مقاله در کنفرانس ICSE 2026 🎉",
        description: "The Cost vs the Benefit of Adding an Extra Code Reviewer to Mitigate Developer Turnover through Reviewer Recommenders",        link: "https://conf.researchr.org/details/fse-2026/fse-2026-research-papers/24/Mitigating-the-Risk-of-Defects-and-Improving-Knowledge-Distribution-with-Code-Reviewe",
        link: "https://conf.researchr.org/details/icse-2026/icse-2026-research-track/28/The-Cost-vs-the-Benefit-of-Adding-an-Extra-Code-Reviewer-to-Mitigate-Developer-Turnov",
      },
    ],
    education: [
      {
        degree: "دکتری مهندسی نرم‌افزار",
        university: "دانشگاه کنکوردیا، مونترال، کانادا",
        supervisor: "Professor Peter Rigby",
        thesis: "راهبردهای مدیریت هوشمند دانش در مهندسی نرم‌افزار",
        date: "شهریور ۱۴۰۳ — مرداد ۱۴۰۵",
        logo: "./assets/logos/concordia_logo.png",
      },
      {
        degree: "کارشناسی ارشد علوم کامپیوتر",
        university: "دانشگاه صنعتی امیرکبیر، تهران، ایران",
        supervisor: "دکتر محمد اکبری",
        thesis: "تشخیص رویدادهای نامشخص از توییتر",
        gpa: "۱۹٫۶۲",
        date: "شهریور ۱۴۰۰ — شهریور ۱۴۰۲",
        logo: "./assets/logos/aut_logo.png",
      },
      {
        degree: "کارشناسی علوم کامپیوتر",
        university: "دانشگاه خوارزمی، تهران، ایران",
        supervisor: "دکتر محمد سلطانیان",
        thesis: "تشخیص سقوط سالمندان با استفاده از مدل‌های یادگیری ماشین",
        gpa: "۱۸٫۲۶",
        date: "شهریور ۱۳۹۶ — تیر ۱۴۰۰",
        logo: "./assets/logos/kharazmi_logo.png",
      },
    ],
    awards: [
      {
        title: "جایزه تعالی شهریه دانشگاه کنکوردیا",
        description: "به ارزش ۴۸٬۸۸۸ دلار کانادا (به‌دلیل تأخیرهای ویزا امکان پذیرش آن فراهم نشد)",
        institution: "دانشگاه کنکوردیا، مونترال، کانادا",
        date: "۱۴۰۵",
        logo: "./assets/logos/concordia_logo.png",
      },
      {
        title: "بورسیه دکتری تحصیلات تکمیلی دانشگاه کنکوردیا",
        description: "به ارزش ۵۶٬۰۰۰ دلار کانادا (به‌دلیل تأخیرهای ویزا امکان پذیرش آن فراهم نشد)",
        institution: "دانشگاه کنکوردیا، مونترال، کانادا",
        date: "۱۴۰۴",
        logo: "./assets/logos/concordia_logo.png",
      },
      {
        title: "بورسیه تحصیلات تکمیلی مشترک GCS دانشگاه کنکوردیا",
        description: "به ارزش ۲۸٬۰۰۰ دلار کانادا (به‌دلیل تأخیرهای ویزا امکان پذیرش آن فراهم نشد)",
        institution: "دانشگاه کنکوردیا، مونترال، کانادا",
        date: "۱۴۰۳",
        logo: "./assets/logos/concordia_logo.png",
      },
      {
        title: "دانشجوی رتبه اول",
        description: "در میان دانشجویان کارشناسی ارشد علوم کامپیوتر ورودی ۱۴۰۰",
        institution: "دانشگاه صنعتی امیرکبیر، تهران، ایران",
        date: "۱۴۰۲",
        logo: "./assets/logos/aut_logo.png",
      },
      {
        title: "دانشجوی رتبه اول",
        description: "در میان دانشجویان کارشناسی علوم کامپیوتر ورودی ۱۳۹۶",
        institution: "دانشگاه خوارزمی، تهران، ایران",
        date: "۱۴۰۰",
        logo: "./assets/logos/kharazmi_logo.png",
      },
    ],
    publications: [
      {
        title: "Mitigating the Risk of Defects and Improving Knowledge Distribution with Code Reviewer Recommenders",
        authors: "Mohammadali Sefidi Esfahani, Peter C. Rigby",
        venue: "FSE 2026, Montreal, Canada",
        image: "./assets/publications/2026_ExpertPlus/FSE26_Paper_BigPicture.png",
        imageAspectRatio: "2806 / 930",
        caption:
          "Figure 1. Developers have diverse types of knowledge, which can sometimes overlap with each other. Suppose the middle rectangle represents the knowledge required to review the given pull request. While working on this code change, the collective knowledge of the entire reviewer team and the author’s expertise are effective in identifying defects and should be considered in the Changeset Safety Ratio.",
        links: [
          { label: "PDF", url: "https://dl.acm.org/doi/10.1145/3797070", icon: "./assets/icons/pdf.svg" },
          { label: "کد", url: "https://github.com/mojtabaSefidi/Sofia-ExpertPlusPlus", icon: "./assets/icons/code.svg" },
          { label: "داده", url: "https://figshare.com/s/e62f52f5550d0f373815", icon: "./assets/icons/database.svg" },
          { label: "کنفرانس", url: "https://conf.researchr.org/details/fse-2026/fse-2026-research-papers/24/Mitigating-the-Risk-of-Defects-and-Improving-Knowledge-Distribution-with-Code-Reviewe", icon: "./assets/icons/conference.svg" },
          { label: "BibTeX", url: "./assets/publications/2026_ExpertPlus/bibtext.txt" },
        ],
      },
      {
        title: "The Cost vs the Benefit of Adding an Extra Code Reviewer to Mitigate Developer Turnover through Reviewer Recommenders",
        authors: "Mohammadali Sefidi Esfahani, Fahimeh Hajari, Peter C. Rigby",
        venue: "ICSE 2026, Rio, Brazil",
        image: "./assets/publications/2026_SofiaLearnerPlus/ICSE26_Paper_SimulationMethod.png",
        imageAspectRatio: "2594 / 835",
        caption:
          "Figure 1. Simulation methodology. The database contains pull request information, including authors, reviewers, and files. We determine the knowledge distribution and make recommendations based on our defined formulas for each recommender. We take the top-ranked reviewer and, depending on the recommender strategy, use seeded random replacement or add the top candidate to the review. Since alternative reviewers will have done the review in the simulation, this is fed back to the database to update the knowledge distribution for future simulated reviews. The simulation outcome metrics are all calculated relative to the actual historical reviewers.",
        links: [
          { label: "PDF", url: "https://conf.researchr.org/details/icse-2026/icse-2026-research-track/28/The-Cost-vs-the-Benefit-of-Adding-an-Extra-Code-Reviewer-to-Mitigate-Developer-Turnov", icon: "./assets/icons/pdf.svg" },
          { label: "کد", url: "https://github.com/mojtabaSefidi/Sofia-LearnerPlus", icon: "./assets/icons/code.svg" },
          { label: "داده", url: "https://figshare.com/s/b79fc69acad8e11be31a", icon: "./assets/icons/database.svg" },
          { label: "کنفرانس", url: "https://conf.researchr.org/details/icse-2026/icse-2026-research-track/28/The-Cost-vs-the-Benefit-of-Adding-an-Extra-Code-Reviewer-to-Mitigate-Developer-Turnov", icon: "./assets/icons/conference.svg" },
          { label: "BibTeX", url: "./assets/publications/2026_ExpertPlus/bibtext.txt" },
        ],
      },
      {
        title: "EnrichEvent: Enriching Social Data with Contextual Information for Emerging Event Extraction",
        authors: "Mohammadali Sefidi Esfahani, Mohammad Akbari",
        venue: "Iran Journal of Computer Science, 2025",
        image: "./assets/publications/2023_EnrichEvent/EnrichEvent_Paper_Framework.png",
        imageAspectRatio: "1782 / 410",
        caption:
          "Figure 1. An overview of the functionality of our proposed framework, EnrichEvent. The framework processes message blocks in batches corresponding to the incoming social stream. First, the Trending Data Extraction module filters out pointless tweets. Next, the Contextual Knowledge Enhancement component extracts Named Entities and Hashtags from the tweets and builds their representation matrices. Then, the Event Clustering module categorizes the extracted entities into clusters based on their lexical, structural, and contextual representation. Finally, the Event Chain Formation module connects related clusters across consecutive message blocks to form event chains, and the Storage component saves each event’s information as a JSON file in the database.",
        links: [
          { label: "PDF", url: "https://link.springer.com/article/10.1007/s42044-025-00284-2", icon: "./assets/icons/pdf.svg" },
          { label: "کد", url: "https://github.com/mojtabaSefidi/EnrichEvent", icon: "./assets/icons/code.svg" },
          { label: "داده", url: "https://github.com/mojtabaSefidi/EnrichEvent", icon: "./assets/icons/database.svg" },
          { label: "BibTeX", url: "./assets/publications/2023_EnrichEvent/bibtext.txt" },
        ],
      },
    ],
    credentials: [
      {
        title: "دوره تخصصی یادگیری عمیق",
        institution: "ارائه‌شده توسط Coursera: DeepLearning.AI",
        date: "آبان ۱۴۰۲",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/EWH2TDGVFEVE",
      },
      {
        title: "دوره تخصصی پردازش زبان طبیعی",
        institution: "ارائه‌شده توسط Coursera: DeepLearning.AI",
        date: "آبان ۱۴۰۲",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/SF6MHSAFAZHP",
      },
      {
        title: "دوره تخصصی یادگیری ماشین",
        institution: "ارائه‌شده توسط Coursera، DeepLearning.AI و Stanford",
        date: "مهر ۱۴۰۲",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3RD33KJ7MKH6",
      },
      {
        title: "دوره پروژه‌محور هوش مصنوعی و یادگیری ماشین",
        institution: "ارائه‌شده توسط کوئرا",
        date: "آبان ۱۴۰۰",
        link: "https://quera.ir/certificate/rH0C63wS",
      },
    ],
  },

  images: {
    portrait: "./assets/profile-pics/profile_photo_esfahani.jpg",
    hobby: "./assets/profile-pics/BeyondResearch.jpeg",
  },
};
