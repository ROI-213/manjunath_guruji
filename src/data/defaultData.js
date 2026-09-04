// Default dataset and configuration for Astro Psychic India

export const initialSiteData = {
  header: {
    title: "Astro Psychic India",
    subtitle: "Pandit Shekar Guruji",
    phone: "+91 98456 57808",
    whatsapp: "+919845657808",
    email: "shekarbaba001@gmail.com",
    address: "1st block 13th cross Akshayanagar T C Palya main road Bangalore-560016",
  },
  hero: {
    heading: "Find Guidance for Life’s Difficult Situations.",
    supportingCopy: "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers. Guruji offers private psychic readings and spiritual consultations using palm observation, date of birth, face reading and photographs.",
    highlightLine: "Bad & Black Energy Clearing • Past, Present & Future Guidance",
    primaryCtaText: "WhatsApp Guruji",
    secondaryCtaText: "Call Now",
    tertiaryCtaText: "Book a Private Consultation",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    gurujiTitle: "Pandit Shekar Guruji",
    gurujiTag: "Spiritual Consultant & Psychic Reader",
  },
  contactStrip: {
    message: "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.",
    phoneDisplay: "+91 98456 57808",
    phone: "+919845657808",
    whatsapp: "+919845657808",
    email: "shekarbaba001@gmail.com",
    address: "1st block 13th cross Akshayanagar T C Palya main road Bangalore-560016",
    confidentialityText: "100% Private and confidential consultation & prayer support available.",
    whatsappUrl: "https://wa.me/919845657808?text=Hello%20Pandit%20Shekar%20Guruji%2C%20I%20would%20like%20to%20book%20a%20private%20consultation.",
    callUrl: "tel:+919845657808"
  },
  about: {
    heading: "Meet Pandit Shekar Guruji",
    subheading: "Compassionate, Confidential & Methodical Spiritual Consultations",
    bio: [
      "Pandit Shekar Guruji is a revered spiritual consultant and psychic observer dedicated to helping individuals find clarity amidst uncertainty.",
      "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers, protective Vedic rituals, and spiritual cleansing.",
      "Rooted in authentic traditional practices, Guruji offers personalized guidance by combining palm observation, birth date analysis, face reading features, and photograph assessment.",
      "Every consultation is conducted with strict confidentiality, deep respect for personal values, and a focus on sincere prayer-based spiritual support."
    ],
    methods: [
      { title: "Bad & Black Energy Clearing", desc: "Powerful traditional prayers to clear negative vibes, black energy & witchcraft." },
      { title: "Palm Observation", desc: "Analyzing hand lines and mounts for life trajectory insights." },
      { title: "Date of Birth Analysis", desc: "Evaluating birth timing for natural strengths and cycles." },
      { title: "Face Feature Observation", desc: "Reading facial characteristics to understand personal disposition." },
      { title: "Photograph Assessment", desc: "Examining visual energy markers for personal clarity." },
      { title: "Spiritual Prayer Guidance", desc: "Positive prayer practices tailored to individual well-being." }
    ],
    imageUrl: "/about_guruji_hd_1.jpg",
    images: [
      {
        url: '/about_guruji_hd_1.jpg',
        alt: 'ಶ್ರೀ ಶ್ರೀ ಶ್ರೀ ಹಠಯೋಗಿ ವೀರಾನಂದ ಸ್ವಾಮೀಜಿ',
        title: 'ಶ್ರೀ ಶ್ರೀ ಶ್ರೀ ಹಠಯೋಗಿ ವೀರಾನಂದ ಸ್ವಾಮೀಜಿ',
        role: 'Divine Spiritual Guru & Sacred Lineage',
        tag: '★ Parampara Lineage'
      },
      {
        url: '/about_guruji_hd_2.jpg',
        alt: 'Pandit Shekar Guruji with Devotee',
        title: 'Pandit Shekar Guruji',
        role: 'Sacred Consultations & Devotee Guidance',
        tag: '★ 25+ Years Experience'
      }
    ],
    badgeText: "100% Confidential & Private Environment"
  },

  // 5. ABOUT US PAGE DATASET
  aboutPage: {
    banner: {
      heading: "About Pandit Shekar Guruji",
      breadcrumb: "Home / About Us",
      subtitle: "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers. A compassionate, traditional approach to spiritual guidance.",
      portraitUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    },
    intro: {
      title: "Honest, Respectful & Confidential Spiritual Guidance",
      body: [
        "Pandit Shekar Guruji is an independent spiritual consultant who provides non-judgmental, traditional psychic readings and prayer guidance to individuals facing complex life decisions.",
        "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers and sacred rituals to bring peace, protection, and relief.",
        "With a focus on clarity rather than fear, Guruji offers private consultations through palm observation, date-of-birth charts, face feature analysis, and photograph evaluation.",
        "Whether you prefer to connect remotely via phone or WhatsApp (+91 98456 57808) or arrange a private session, every conversation is treated with utmost discretion, respect, and complete privacy."
      ],
      availabilityText: "Direct Phone & WhatsApp Consultations Available Globally (+91 98456 57808)",
      badge: "Strict Discretion & Privacy Assured"
    },
    detailedMethods: [
      {
        id: "palm-detailed",
        title: "Palm Observation",
        icon: "Hand",
        explanation: "Methodical examination of primary lines (Life, Head, Heart) and palmar mounts to observe personal inclinations, vitality, and emotional tendencies.",
        whatToProvide: "Clear, high-resolution photographs of both palms under natural light.",
        remoteAvailability: "Fully available via WhatsApp photograph upload or live video call.",
        privacyNote: "Uploaded palm images are permanently deleted post-consultation and never stored."
      },
      {
        id: "dob-detailed",
        title: "Date-of-Birth Guidance",
        icon: "Calendar",
        explanation: "Evaluating your numerical birth date and time to understand timing cycles, personal strengths, and optimal periods for decision making.",
        whatToProvide: "Exact date of birth, time of birth (if known), and city of birth.",
        remoteAvailability: "Available via phone call, WhatsApp text, or voice consultation.",
        privacyNote: "Birth data is strictly confidential and used solely during your active reading session."
      },
      {
        id: "face-detailed",
        title: "Face Feature Observation",
        icon: "UserCheck",
        explanation: "Traditional facial observation evaluating forehead structure, eye placement, and facial contour to assess inherent disposition and character.",
        whatToProvide: "Front-facing, un-filtered photograph with clear ambient lighting.",
        remoteAvailability: "Available via direct image submission or video call.",
        privacyNote: "Photos remain strictly between you and Guruji with zero external exposure."
      },
      {
        id: "photo-detailed",
        title: "Photograph-Based Consultation",
        icon: "Image",
        explanation: "Assessment of personal or relationship photographs to assist in understanding emotional connections, compatibility, and interpersonal dynamics.",
        whatToProvide: "Clear photograph of individual or concerned parties with consent.",
        remoteAvailability: "Conveniently submitted through encrypted WhatsApp chat.",
        privacyNote: "All submitted photographs are handled with absolute confidentiality and respect."
      },
      {
        id: "clearing-detailed",
        title: "Energy & Witchcraft Clearing",
        icon: "Shield",
        explanation: "Pandit Shekar Guruji can clear Bad energy, Black energy Any kind of Witchcraft by performing powerful prayers and sacred Vedic protective rituals.",
        whatToProvide: "Details of concerns, affected individual/family names, and photographs.",
        remoteAvailability: "Fully available worldwide via encrypted WhatsApp or phone consultation.",
        privacyNote: "All protective prayers and personal details are conducted with 100% confidentiality."
      }
    ],
    philosophy: [
      { title: "Listen Without Judgment", desc: "Every visitor's situation is met with warmth, empathy, and absolute acceptance without pre-conceived bias.", icon: "HeartHandshake" },
      { title: "Respect Individual Beliefs", desc: "We honor your cultural background, personal faith, and personal freedom of choice.", icon: "Compass" },
      { title: "Maintain Absolute Confidentiality", desc: "Your personal details, queries, and photographs are held in strict confidence.", icon: "Lock" },
      { title: "Clear & Transparent Communication", desc: "Honest explanations of observations without ambiguous or misleading jargon.", icon: "MessageCircle" },
      { title: "Avoid Fear-Based Pressure", desc: "Zero use of spiritual threats, scare tactics, or coercive demands.", icon: "ShieldCheck" },
      { title: "Encourage Responsible Decisions", desc: "Empowering you to make your own informed personal life choices with peace of mind.", icon: "Smile" },
      { title: "Professional Referrals", desc: "Directing visitors to qualified medical, legal, or financial professionals whenever applicable.", icon: "FileText" }
    ],
    areasOfGuidance: [
      { name: "Love & Relationships", icon: "Heart" },
      { name: "Marriage & Family", icon: "Users" },
      { name: "Family Harmony", icon: "Home" },
      { name: "Career Direction", icon: "Briefcase" },
      { name: "Business Growth", icon: "TrendingUp" },
      { name: "Financial Planning", icon: "Coins" },
      { name: "Property Peace", icon: "Building" },
      { name: "Personal Conflicts", icon: "UserX" },
      { name: "Spiritual Concerns", icon: "Sparkles" },
      { name: "Emotional Clarity", icon: "Sun" },
      { name: "Prayer Services", icon: "Flame" },
      { name: "Spiritual Protection", icon: "Shield" }
    ],
    missionVision: {
      mission: "To provide respectful, confidential, and accessible spiritual consultation that offers genuine clarity, emotional grounding, and ethical prayer guidance without fear-based messaging.",
      vision: "To create a globally trusted platform for spiritual learning, seamless appointment booking, and safe private communication rooted in integrity and mutual respect."
    },
    personalMessage: {
      heading: "A Message from Shekar Guruji",
      body: "Life often presents moments of deep uncertainty where an objective perspective and prayerful reflection bring clarity. My goal is to listen to your concerns with complete empathy, observe traditional markers with care, and provide honest guidance that empowers you to walk forward with confidence and peace.",
      imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      ctaText: "Speak with Guruji"
    }
  },

  readingMethods: [
    {
      id: "palm",
      title: "Palm Reading",
      icon: "Hand",
      description: "Observation of primary hand lines, mounts, and symbols to provide insight into past life events, present status, and future inclinations.",
      detailsLink: "#readings"
    },
    {
      id: "dob",
      title: "Date-of-Birth Reading",
      icon: "Calendar",
      description: "Evaluation of birth timing and planetary positions to understand personal cycles, strengths, and optimal timing for major life decisions.",
      detailsLink: "#readings"
    },
    {
      id: "face",
      title: "Face Reading",
      icon: "UserCheck",
      description: "Traditional face feature observation to gain clarity on personal temperament, innate qualities, and character dynamics.",
      detailsLink: "#readings"
    },
    {
      id: "photo",
      title: "Photograph Reading",
      icon: "Image",
      description: "Careful examination of photographs provided during consultation to assist in understanding relationship dynamics and personal energy.",
      detailsLink: "#readings"
    },
    {
      id: "clearing",
      title: "Energy & Witchcraft Clearing",
      icon: "Shield",
      description: "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.",
      detailsLink: "#readings"
    }
  ],
  problemCategories: [
    {
      id: 1,
      title: "Love & Relationship Guidance",
      category: "Love & Relationships",
      description: "Seek clarity on relationship misunderstandings, communication gaps, reconciliation paths, and compatibility concerns.",
      icon: "Heart"
    },
    {
      id: 2,
      title: "Marriage & Family Harmony",
      category: "Family & Marriage",
      description: "Consultation regarding marriage delays, family opposition, domestic peace, and inter-personal understanding.",
      icon: "Users"
    },
    {
      id: 3,
      title: "Career & Business Direction",
      category: "Career & Business",
      description: "Guidance on professional stagnation, career choices, business partnerships, and workplace growth opportunities.",
      icon: "Briefcase"
    },
    {
      id: 4,
      title: "Financial Guidance & Progress",
      category: "Financial Guidance",
      description: "Spiritual perspective on managing financial stresses, overcoming debt concerns, and planning stable future steps.",
      icon: "TrendingUp"
    },
    {
      id: 5,
      title: "Negative Energy & Protection",
      category: "Protection & Positivity",
      description: "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers. Complete spiritual protection & evil-eye cleansing.",
      icon: "Shield"
    },
    {
      id: 6,
      title: "Personal Peace & Well-being",
      category: "Health & Peace",
      description: "Mindful prayer routines, positivity alignment, and spiritual calm to ease mental unrest and emotional fatigue.",
      icon: "Sun"
    },
    {
      id: 7,
      title: "Education & Future Trajectory",
      category: "Education & Future",
      description: "Clarity for students and young professionals seeking focus, exam confidence, and suitable educational fields.",
      icon: "BookOpen"
    },
    {
      id: 8,
      title: "Obstacle Removal & Positivity",
      category: "Protection & Positivity",
      description: "Spiritual consultation focused on identifying personal patterns, clearing negative obstacles, and cultivating positive daily habits.",
      icon: "Sparkles"
    },
    {
      id: 9,
      title: "Inter-Personal Communication",
      category: "Love & Relationships",
      description: "Structured advice for rebuilding trust, resolving emotional distances, and fostering open dialogue with loved ones.",
      icon: "MessageSquare"
    },
    {
      id: 10,
      title: "Family Inheritance & Property Peace",
      category: "Family & Marriage",
      description: "Consultation to navigate emotional stress and seek peaceful resolution in long-standing domestic property discussions.",
      icon: "Home"
    }
  ],
  loveSection: {
    heading: "Love and Relationship Guidance",
    intro: "Understanding the Sacred Path Between Two Hearts. Private consultations for relationship concerns, family harmony, and partner understanding. Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.",
    topics: [
      "Clearing bad energy, black energy & relationship blockages",
      "Inter-personal misunderstandings & emotional distance",
      "Separation concerns & reconciliation discussions",
      "Marriage delays & family alignment",
      "Parental & family opposition in marriage decisions",
      "Communication breakdown & trust restoration",
      "Compatibility evaluation through DOB & palm reading"
    ],
    mandatoryNotice: "Private consultations for relationship concerns, family harmony, and partner understanding. Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.",
    imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80"
  },
  prayerServices: {
    heading: "Spiritual Prayer Services & Energy Cleansing",
    intro: "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers. Spiritual prayer support offers a grounding foundation for individuals seeking peace, emotional strength, and release from negative influences.",
    servicesList: [
      "Bad Energy, Black Energy & Witchcraft Clearing Prayers",
      "Peace & Mindful Calm Prayers",
      "Positivity & Energy Cleansing Consultation",
      "Evil-Eye (Drishti) & Heavy Vibe Guidance",
      "Protection & House Positivity Prayers",
      "Family Harmony & Mutual Understanding Prayers",
      "Business Progress & Ethical Growth Prayers",
      "Marriage Blessing & Well-Being Consultation"
    ],
    mandatoryDisclaimer: "Disclaimer: Spiritual prayer services are intended for personal well-being and emotional support. They do not replace professional medical, legal, financial, or mental-health medical care or legal advice.",
    imageUrl: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80"
  },
  processSteps: [
    {
      number: "01",
      title: "Contact Guruji",
      description: "Reach out via WhatsApp or phone call at +91 98456 57808 to schedule your private consultation time.",
      inputs: ["Preferred Language", "Consultation Type (Call / Video / In-Person)"]
    },
    {
      number: "02",
      title: "Share Basic Details",
      description: "Provide your name, date of birth, time of birth, and location of birth for background evaluation.",
      inputs: ["Full Name", "Date & Time of Birth", "Current City"]
    },
    {
      number: "03",
      title: "Submit Required Information",
      description: "Upload clear photographs of your palm or face if required for deeper observation.",
      inputs: ["Clear Palm Photograph", "Face Photo / Personal Photo", "Brief Statement of Concern"]
    },
    {
      number: "04",
      title: "Private Consultation",
      description: "Engage in a respectful, one-on-one confidential discussion with Pandit Shekar Guruji.",
      inputs: ["Interactive Q&A", "Detailed Observation Analysis"]
    },
    {
      number: "05",
      title: "Receive Guidance",
      description: "Gain structured clarity, practical advice, and tailored spiritual prayer recommendations.",
      inputs: ["Personalized Insights", "Recommended Prayer Habits"]
    },
    {
      number: "06",
      title: "Follow-Up",
      description: "Optional follow-up check-ins to monitor peace of mind and address secondary questions.",
      inputs: ["Follow-Up Call", "Continued Prayer Support"]
    }
  ],
  whyChooseUs: [
    {
      title: "100% Confidentiality Assured",
      desc: "Your personal details, photographs, and discussions are kept strictly private and never shared with third parties.",
      icon: "Lock"
    },
    {
      title: "Respectful & Empathetic Dialogue",
      desc: "Consultations are conducted with warmth, dignity, and zero judgment toward your personal life situation.",
      icon: "Smile"
    },
    {
      title: "Multiple Reading Modalities",
      desc: "Combines palm observation, DOB charts, face features, and photo analysis for balanced understanding.",
      icon: "Layers"
    },
    {
      title: "Comprehensive Life Categories",
      desc: "Guidance spanning relationships, marriage, family, career, business, protection, and emotional well-being.",
      icon: "Compass"
    },
    {
      title: "Direct WhatsApp & Phone Access",
      desc: "Direct line (+91 98456 57808) to schedule appointments and speak directly without call-center intermediaries.",
      icon: "PhoneCall"
    },
    {
      title: "Global Remote Consultations",
      desc: "Available for visitors across India and worldwide via high-definition phone or video consultation.",
      icon: "Globe"
    },
    {
      title: "Transparent Appointments",
      desc: "Clear consultation schedules, honest expectation setting, and straightforward communication.",
      icon: "CheckCircle"
    },
    {
      title: "Ethical Spiritual Standards",
      desc: "Strict policy against fear-inducing claims, guaranteed outcomes, or deceptive spiritual threats.",
      icon: "Award"
    }
  ],
  gallery: [
    {
      id: 1,
      title: "Private Consultation Atmosphere",
      category: "Consultation Setting",
      type: "image",
      url: "https://images.unsplash.com/photo-1545232979-fbf34fe37b38?auto=format&fit=crop&w=800&q=80",
      description: "Serene and confidential consultation space designed for quiet reflection."
    },
    {
      id: 2,
      title: "Traditional Prayer Diya & Altars",
      category: "Prayer Activities",
      type: "image",
      url: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80",
      description: "Sacred oil lamps and flowers used during morning well-being prayer routines."
    },
    {
      id: 3,
      title: "Temple Sanctuary & Morning Light",
      category: "Temple Visits",
      type: "image",
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
      description: "Morning visits to quiet spiritual temples for positivity and communal blessings."
    },
    {
      id: 4,
      title: "Vedic Charts & Palm Manuscripts",
      category: "Guruji",
      type: "image",
      url: "https://images.unsplash.com/photo-1532012164546-f43778669931?auto=format&fit=crop&w=800&q=80",
      description: "Reference texts and planetary charts utilized for precise calculations."
    },
    {
      id: 5,
      title: "Annual Peace Ceremony Gathering",
      category: "Ceremonies",
      type: "image",
      url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      description: "Spiritual gatherings focused on community harmony and universal peace."
    },
    {
      id: 6,
      title: "Spiritual Video Reflection with Guruji",
      category: "Video Messages",
      type: "video",
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "Short video message by Pandit Shekar Guruji on overcoming personal anxiety."
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Ramesh K.",
      location: "Bengaluru, Karnataka",
      category: "Career & Business",
      type: "text",
      rating: 5,
      date: "Recent Visitor",
      comment: "Pandit Shekar Guruji listened patiently to my career uncertainty. His palm reading and timing observations gave me clear emotional perspective when making my business transition."
    },
    {
      id: 2,
      name: "Pooja M.",
      location: "Mumbai, Maharashtra",
      category: "Love & Relationships",
      type: "text",
      rating: 5,
      date: "Recent Visitor",
      comment: "I was going through a stressful period of communication gap with my partner. Guruji’s consultation was completely confidential and calm. The spiritual prayer suggestion helped me regain peace."
    },
    {
      id: 3,
      name: "Suresh P.",
      location: "Hyderabad, Telangana",
      category: "Family Harmony",
      type: "audio",
      rating: 5,
      date: "Recent Visitor",
      comment: "Audio Testimonial: 'Guruji did not create any fear or make big false promises. He gave genuine DOB guidance and recommended simple prayer practices that brought harmony to our home.'",
      audioLength: "01:24"
    },
    {
      id: 4,
      name: "Anita & Vikram S.",
      location: "Delhi NCR",
      category: "Marriage Guidance",
      type: "video",
      rating: 5,
      date: "Recent Visitor",
      comment: "Video Experience: Sharing our honest experience of consulting Pandit Shekar Guruji regarding marriage timing and family understanding.",
      videoLength: "02:10"
    }
  ],
  faqs: [
    {
      question: "Can Pandit Shekar Guruji clear Bad energy, Black energy, and Witchcraft?",
      answer: "Yes. Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers, protective Vedic rituals, and spiritual cleansing for individuals, homes, and businesses."
    },
    {
      question: "Are my consultation details and photographs kept confidential?",
      answer: "Yes, 100%. All personal details, dates of birth, hand photographs, and consultation discussions are strictly confidential and treated with absolute privacy."
    },
    {
      question: "Can I consult Pandit Shekar Guruji via WhatsApp or Phone?",
      answer: "Yes. You can connect directly via WhatsApp or Phone call (+91 98456 57808) for remote consultations, video calls, or scheduling an in-person appointment."
    },
    {
      question: "What items or photos should I prepare before my consultation?",
      answer: "It is helpful to have your exact Date of Birth, Time of Birth, Place of Birth, and clear photographs of your palms or face if requested by Guruji during the intake process."
    },
    {
      question: "Is an in-person meeting mandatory or are phone readings accurate?",
      answer: "In-person visits are welcome, but remote consultations via Phone, WhatsApp Video, or Photograph assessment are equally detailed and convenient for visitors across India and abroad."
    },
    {
      question: "Which languages are supported during the consultation?",
      answer: "Consultations can be conducted in Hindi, English, Kannada, Telugu, and Tamil according to your preference."
    },
    {
      question: "What is the typical duration of a private reading session?",
      answer: "A standard private session lasts between 30 to 45 minutes, allowing ample time for thorough discussion, observation analysis, and Q&A without rushing."
    },
    {
      question: "Are guaranteed results or 100% success promises offered?",
      answer: "No. Spiritual and psychic consultations are based on personal belief, traditional observation, and individual interpretation. In accordance with ethical standards, no specific outcome or result can be guaranteed."
    },
    {
      question: "Do spiritual prayer services replace medical or legal advice?",
      answer: "Not at all. Spiritual prayers and consultations are intended solely for emotional peace, positivity, and personal reflection. They must never replace professional medical diagnosis, legal counsel, or financial advice."
    }
  ],
  sectionVisibility: {
    hero: true,
    contactStrip: true,
    about: true,
    readingMethods: true,
    problemCategories: true,
    loveSection: true,
    prayerServices: true,
    processSteps: true,
    whyChooseUs: true,
    gallery: true,
    testimonials: true,
    faqs: true,
    finalCta: true
  }
};
