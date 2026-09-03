// Comprehensive 18-Service Database for Astro Psychic India

export const servicesCategories = [
  "All Services",
  "Psychic Reading",
  "Love and Relationship",
  "Marriage and Family",
  "Career and Business",
  "Finance and Property",
  "Personal Guidance",
  "Spiritual Prayers",
  "Spiritual Protection"
];

export const servicesData = [
  // 8.1 Psychic Reading
  {
    id: "psychic-reading",
    slug: "psychic-reading",
    title: "Psychic Reading",
    category: "Psychic Reading",
    shortDesc: "Spiritual and intuitive observation of past, present, and future possibilities using palmistry, DOB, face reading, and photo analysis.",
    safetyLabel: "Interpretive Guidance",
    imageUrl: "/service_psychic.png",
    icon: "Hand",
    featured: true,
    published: true,
    order: 1,
    seoTitle: "Psychic Reading | Past Present Future | Shekar Guruji",
    seoDesc: "Private psychic readings with Pandit Shekar Guruji using palm observation, date of birth, face reading, and photographs.",
    disclaimer: "MANDATORY RULE: Psychic readings are spiritual and interpretive in nature. No specific result, future prediction, or outcome can be 100% guaranteed.",
    
    overview: "This reading provides a calm, reflective space to explore your life's journey across past events, present circumstances, and future inclinations through traditional psychic observation modalities.",
    whoShouldRequest: [
      "Individuals seeking clarity regarding general life trajectory and personal choices",
      "Those curious about palm lines, date of birth cycles, or photograph energy markers",
      "Visitors wanting a private, non-judgmental dialogue about personal options"
    ],
    commonConcerns: [
      "Past, present and future possibilities",
      "Palm reading line observation",
      "Date-of-birth reading timing cycles",
      "Face reading disposition analysis",
      "Photograph-based energy consultation"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp direct messaging or voice call",
      "High-definition video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Full Name",
      "Date of Birth",
      "Preferred Language",
      "Palm/Face/Personal photograph (where relevant)",
      "Short description of your concern"
    ],
    howItWorks: [
      { step: "01", title: "Submit Information", desc: "Provide your name, DOB, and optional photos via WhatsApp or form." },
      { step: "02", title: "Observation Analysis", desc: "Guruji evaluates your birth parameters and palm/face markers." },
      { step: "03", title: "Private Reading Session", desc: "30-45 minute interactive phone/video discussion." },
      { step: "04", title: "Follow-Up Reflections", desc: "Receive practical perspective for personal peace." }
    ],
    prayerOptions: ["Past & Present Peace Prayer", "Future Clarity Blessing"],
    whyConsult: ["Traditional multi-modal approach", "100% Discretion assured", "Empathetic communication"],
    testimonials: [
      { name: "Siddharth N.", location: "Bengaluru", comment: "Guruji's palm observation was deeply insightful. He gave me calm perspective without making exaggerated claims." }
    ],
    faqs: [
      { q: "Are psychic readings guaranteed to predict exact dates?", a: "No. Readings highlight personal inclinations and timing cycles. Outcomes depend on personal actions and choices." },
      { q: "Can I do a psychic reading via phone or WhatsApp?", a: "Yes. Remote consultations via phone call, audio, or video are equally detailed and convenient." },
      { q: "Is my personal photograph kept private?", a: "Yes, 100%. Photos uploaded for readings are strictly confidential and deleted after the consultation." },
      { q: "Which observation method is best for a beginner?", a: "Combining Date of Birth with Palm photographs yields a balanced, multi-dimensional reading." }
    ],
    relatedServiceIds: ["love-relationship-guidance", "dob-astrology-reading", "career-job-guidance"]
  },

  // 8.2 Love and Relationship Guidance
  {
    id: "love-relationship-guidance",
    slug: "love-relationship-guidance",
    title: "Love and Relationship Guidance",
    category: "Love and Relationship",
    shortDesc: "Empathetic spiritual guidance for relationship misunderstandings, emotional distance, and communication gaps.",
    safetyLabel: "Confidential Support",
    imageUrl: "/service_love.png",
    icon: "Heart",
    featured: true,
    published: true,
    order: 2,
    seoTitle: "Love & Relationship Guidance | Pandit Shekar Guruji",
    seoDesc: "Private relationship consultation addressing misunderstandings, communication distance, and compatibility.",
    disclaimer: "MANDATORY RULE: Spiritual relationship guidance offers emotional perspective. We NEVER promise that a particular person will return or that reconciliation is guaranteed.",
    
    overview: "Navigating relationship challenges requires emotional maturity and spiritual clarity. Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers. Guruji provides private consultations to evaluate relationship dynamics, remove negative energetic blocks, foster open communication, and assess compatibility.",
    whoShouldRequest: [
      "Individuals experiencing emotional distance, negative vibes, or communication breakdowns",
      "Couples navigating bad energy interference, family opposition or inter-personal misunderstandings",
      "Partners seeking traditional compatibility evaluation and relationship healing through powerful prayers"
    ],
    commonConcerns: [
      "Clearing bad energy, black energy & negative relationship vibes",
      "Relationship misunderstandings & emotional distance",
      "Separation concerns & reconciliation discussions",
      "Communication breakdown & trust restoration",
      "Family opposition to partner choices",
      "Inter-personal compatibility evaluation"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp direct messaging or voice call",
      "Video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Names or initials of concerned individuals",
      "Current relationship status",
      "Short concern description",
      "Preferred consultation method"
    ],
    howItWorks: [
      { step: "01", title: "Share Details", desc: "Send names, relationship status, and concern via WhatsApp." },
      { step: "02", title: "Review", desc: "Guruji evaluates underlying emotional markers." },
      { step: "03", title: "Private Dialogue", desc: "Confidential discussion on communication and compatibility." },
      { step: "04", title: "Peace Routine", desc: "Optional relationship peace prayer suggestions." }
    ],
    prayerOptions: ["Relationship Harmony Prayer", "Communication Peace Blessing"],
    whyConsult: ["Complete privacy and respect", "No false promises or coercion", "Direct access to Shekar Guruji"],
    testimonials: [
      { name: "Pooja M.", location: "Mumbai", comment: "Guruji listened with deep empathy during our communication gap. His guidance brought us emotional peace." }
    ],
    faqs: [
      { q: "Can Guruji guarantee that my partner will return?", a: "No. In accordance with ethical standards, no agent can force another person's free will or guarantee reconciliation." },
      { q: "Can I consult if my partner does not know I am calling?", a: "Yes. Individual consultations focus on your own emotional clarity and coping strategies." },
      { q: "Are relationship details kept strictly confidential?", a: "Yes, 100%. Details are held in total confidence and never shared." },
      { q: "How does photograph assessment help in relationship guidance?", a: "Photographs assist Guruji in evaluating visual disposition and energy dynamics between individuals." }
    ],
    relatedServiceIds: ["marriage-guidance", "family-problem-guidance", "psychic-reading"]
  },

  // 8.3 Marriage Guidance
  {
    id: "marriage-guidance",
    slug: "marriage-guidance",
    title: "Marriage Guidance",
    category: "Marriage and Family",
    shortDesc: "Respectful consultation regarding marriage delays, compatibility concerns, family disagreements, and domestic harmony.",
    safetyLabel: "Non-Coercive Consultation",
    imageUrl: "/service_marriage.png",
    icon: "Users",
    featured: true,
    published: true,
    order: 3,
    seoTitle: "Marriage Guidance & Timing | Shekar Guruji",
    seoDesc: "Seek guidance on marriage delays, alliance compatibility, and domestic harmony with Pandit Shekar Guruji.",
    disclaimer: "MANDATORY RULE: Uses respectful, non-coercive language. We do NOT guarantee marriage timing, proposal acceptance, or specific marital outcomes.",
    
    overview: "Marriage is a sacred life decision involving personal readiness and family alignment. Guruji offers observational analysis and prayer guidance to navigate marriage timing, proposal stress, and domestic peace.",
    whoShouldRequest: [
      "Individuals experiencing repeated delays in marriage proposals",
      "Families seeking compatibility alignment for prospective alliances",
      "Couples navigating second-marriage decisions or marital conflict"
    ],
    commonConcerns: [
      "Marriage delays & proposal stalling",
      "Compatibility concerns between prospective partners",
      "Family disagreements & alignment issues",
      "Marital conflict & separation concerns",
      "Second-marriage guidance & clarity"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp direct messaging or voice call",
      "Video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Name",
      "Date of birth",
      "Partner details (where voluntarily provided)",
      "Brief marital background"
    ],
    howItWorks: [
      { step: "01", title: "Submit Background", desc: "Share DOB and marriage context." },
      { step: "02", title: "Timing Assessment", desc: "Evaluating birth parameters and timing lines." },
      { step: "03", title: "Consultation", desc: "Respectful dialogue with Guruji." }
    ],
    prayerOptions: ["Marriage Blessing & Timing Positivity Prayer", "Domestic Harmony Routine"],
    whyConsult: ["Dignified handling of family matters", "Non-coercive approach", "Global remote availability"],
    testimonials: [
      { name: "Anita & Vikram S.", location: "Delhi NCR", comment: "Sharing our honest experience of consulting Guruji regarding proposal timing and family harmony." }
    ],
    faqs: [
      { q: "Do you guarantee marriage within a specific number of days?", a: "No. Ethical spiritual consultations provide timing perspective without making false time-bound promises." },
      { q: "Can parents consult on behalf of their children?", a: "Yes, parents frequently consult regarding family proposal decisions." },
      { q: "Is second-marriage guidance supported?", a: "Yes. Consultations provide objective, non-judgmental reflection for second-marriage choices." },
      { q: "What photos are helpful for marriage compatibility?", a: "Clear palm photos and front-facing photographs of both individuals." }
    ],
    relatedServiceIds: ["love-relationship-guidance", "family-problem-guidance", "dob-astrology-reading"]
  },

  // 8.4 Family Problem Guidance
  {
    id: "family-problem-guidance",
    slug: "family-problem-guidance",
    title: "Family Problem Guidance",
    category: "Marriage and Family",
    shortDesc: "Compassionate spiritual consultation for parent-child concerns, sibling conflicts, household tension, and domestic peace.",
    safetyLabel: "Family Harmony Support",
    imageUrl: "/service_family.png",
    icon: "Home",
    featured: false,
    published: true,
    order: 4,
    seoTitle: "Family Problem Guidance | Shekar Guruji",
    seoDesc: "Spiritual support for domestic peace, parent-child understanding, and resolving household friction.",
    disclaimer: "MANDATORY RULE: Family consultations foster peace and mutual understanding. We strictly DO NOT encourage isolation, retaliation, or harmful action against family members.",
    
    overview: "Domestic harmony is essential for emotional well-being. Guruji provides calm, objective consultation to ease household friction, foster respect between generations, and guide positive family prayer habits.",
    whoShouldRequest: [
      "Parents seeking better communication with children or teens",
      "Family members dealing with prolonged sibling or inter-personal friction",
      "Households experiencing heavy emotional tension"
    ],
    commonConcerns: [
      "Parent-child communication concerns",
      "Sibling conflict & inheritance misunderstandings",
      "Household tension & emotional friction",
      "Communication difficulties within the home",
      "Family peace prayer support"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp voice or text",
      "Video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Name",
      "Family role (e.g. Parent, Child, Spouse)",
      "Summary of family concern",
      "Preferred contact time"
    ],
    howItWorks: [
      { step: "01", title: "Initial Inquiry", desc: "Briefly state the domestic situation." },
      { step: "02", title: "Consultation Call", desc: "Private discussion on communication strategies." }
    ],
    prayerOptions: ["Household Peace Prayer", "Inter-Generational Harmony Blessing"],
    whyConsult: ["Ethical non-retaliatory focus", "Respectful handling of family privacy"],
    testimonials: [
      { name: "Suresh P.", location: "Hyderabad", comment: "Guruji recommended simple prayer routines that brought calm and mutual respect back to our home." }
    ],
    faqs: [
      { q: "Does Guruji advise cutting off family members?", a: "No. Our approach centers on peace, dialogue, and constructive emotional boundary setting." },
      { q: "Can individual family members consult privately?", a: "Yes, individual sessions are completely confidential." },
      { q: "Are prayer routines easy to perform at home?", a: "Yes. They focus on simple morning light, positivity, and peaceful intention." },
      { q: "Can domestic disputes be resolved in one session?", a: "Many visitors find immediate emotional relief; follow-up check-ins are available as needed." }
    ],
    relatedServiceIds: ["marriage-guidance", "love-relationship-guidance", "emotional-distress-guidance"]
  },

  // 8.5 Health and Well-Being Prayer
  {
    id: "health-wellbeing-prayer",
    slug: "health-wellbeing-prayer",
    title: "Health and Well-Being Prayer",
    category: "Spiritual Prayers",
    shortDesc: "Prayer-based spiritual support to foster mental peace, hope, positivity, and emotional strength during illness or stress.",
    safetyLabel: "Prayer Support Only",
    imageUrl: "/service_health.png",
    icon: "Flame",
    featured: true,
    published: true,
    order: 5,
    seoTitle: "Health & Well-Being Prayer | Shekar Guruji",
    seoDesc: "Spiritual prayer support for emotional peace, hope, and positivity.",
    disclaimer: "MANDATORY MEDICAL DISCLAIMER: Spiritual prayer services are intended for emotional and spiritual support only. They DO NOT diagnose, treat, or cure medical conditions and NEVER replace professional medical care or licensed doctors.",
    
    overview: "Spiritual prayer provides a comforting, grounding foundation during physical health challenges or emotional recovery. Guruji guides positive prayer routines to cultivate inner strength and hope alongside ongoing medical treatment.",
    whoShouldRequest: [
      "Individuals or family members seeking prayer support during medical recovery",
      "Visitors looking for spiritual strength and positive energy routines"
    ],
    commonConcerns: [
      "Prayer-based support for physical well-being & recovery",
      "Mental peace & emotional hope during health stress",
      "Positivity alignment & releasing anxiety",
      "Spiritual strength for caregivers"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp direct messaging",
      "Video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Name",
      "General prayer intention",
      "Preferred language"
    ],
    howItWorks: [
      { step: "01", title: "Submit Intention", desc: "Share your well-being prayer request." },
      { step: "02", title: "Prayer Guidance", desc: "Receive customized morning prayer routines." }
    ],
    prayerOptions: ["Health Well-Being Prayer", "Mindful Peace & Recovery Blessing"],
    whyConsult: ["Strict medical compliance", "Compassionate spiritual presence"],
    testimonials: [
      { name: "Meenakshi R.", location: "Chennai", comment: "Guruji's prayer routines gave my family immense peace and hope during my father's surgery recovery." }
    ],
    faqs: [
      { q: "Does prayer replace my doctor's prescription?", a: "ABSOLUTELY NOT. You must always follow your physician's advice. Prayer is purely complementary emotional support." },
      { q: "Can I request prayers for a family member living abroad?", a: "Yes. Remote well-being prayers can be offered regardless of geographic distance." },
      { q: "Are any medical guarantees given?", a: "No. Spiritual prayers foster peace of mind; medical outcomes rest in healthcare hands." },
      { q: "What simple items are used in well-being prayers?", a: "Clean water, fresh flowers, and morning oil lamps (diyas) for peaceful intention." }
    ],
    relatedServiceIds: ["emotional-distress-guidance", "spiritual-protection-consultation"]
  },

  // 8.6 Career and Job Guidance
  {
    id: "career-job-guidance",
    slug: "career-job-guidance",
    title: "Career and Job Guidance",
    category: "Career and Business",
    shortDesc: "Spiritual perspective on employment stagnation, career transitions, workplace friction, and interview confidence.",
    safetyLabel: "Professional Perspective",
    imageUrl: "/service_career.png",
    icon: "Briefcase",
    featured: true,
    published: true,
    order: 6,
    seoTitle: "Career & Job Guidance | Shekar Guruji",
    seoDesc: "Insight into career stagnation, promotion delays, workplace conflict, and professional timing.",
    disclaimer: "MANDATORY RULE: Spiritual career guidance provides personal timing perspective. We strictly avoid guaranteeing job offers, promotions, or specific salary outcomes.",
    
    overview: "Career growth relies on skill, effort, and proper timing. Guruji evaluates planetary cycles and palm lines to help you navigate workplace opposition, promotion delays, and career shift decisions with clarity.",
    whoShouldRequest: [
      "Job seekers experiencing prolonged employment delays or interview anxiety",
      "Professionals facing workplace politics, stagnation, or promotion delays",
      "Individuals considering industry shifts or higher educational paths"
    ],
    commonConcerns: [
      "Employment difficulty & job search stagnation",
      "Career uncertainty & industry transition choices",
      "Workplace conflict & office politics",
      "Promotion concerns & recognition delays",
      "Interview confidence & professional direction"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp direct messaging or voice call",
      "Video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Name",
      "Current role or employment status",
      "Career concern summary",
      "Date of birth (if relevant)"
    ],
    howItWorks: [
      { step: "01", title: "Share Role & Concern", desc: "Provide your professional background." },
      { step: "02", title: "Timing Assessment", desc: "Guruji evaluates career lines and birth cycles." },
      { step: "03", title: "Strategic Session", desc: "Private call discussing timing and focus." }
    ],
    prayerOptions: ["Workplace Harmony Prayer", "Career Progress & Confidence Blessing"],
    whyConsult: ["Discreet professional focus", "Clear timing assessment", "Empathetic advice"],
    testimonials: [
      { name: "Ramesh K.", location: "Bengaluru", comment: "Guruji's timing guidance helped me stay patient during a 6-month promotion delay. His insights were spot on." }
    ],
    faqs: [
      { q: "Will Guruji guarantee that I pass a job interview?", a: "No. Interview success depends on your preparation and interviewer decision. Guidance helps build mindset and timing." },
      { q: "Can palm reading indicate career shifts?", a: "Yes, the Fate and Sun lines indicate periods of change and workplace energy." },
      { q: "Is my corporate employer information kept private?", a: "Yes, 100%. All professional discussions are held under strict confidentiality." },
      { q: "Can students consult for career direction?", a: "Yes, students frequently consult regarding suitable higher education fields." }
    ],
    relatedServiceIds: ["business-guidance", "financial-guidance", "psychic-reading"]
  },

  // 8.7 Business Guidance
  {
    id: "business-guidance",
    slug: "business-guidance",
    title: "Business Guidance",
    category: "Career and Business",
    shortDesc: "Spiritual guidance for business obstacles, partnership alignment, decision clarity, and progress prayers.",
    safetyLabel: "Ethical Business Focus",
    imageUrl: "/service_business.png",
    icon: "TrendingUp",
    featured: false,
    published: true,
    order: 7,
    seoTitle: "Business Guidance & Progress | Shekar Guruji",
    seoDesc: "Spiritual consultation for business obstacles, venture timing, and partnership peace.",
    disclaimer: "MANDATORY BUSINESS DISCLAIMER: Spiritual consultation is for personal mindset and timing analysis. It does NOT replace certified professional business, accounting, tax, or legal legal advice.",
    
    overview: "Running a business requires resilience, sound judgment, and auspicious timing. Guruji offers spiritual reflection for entrepreneurs navigating commercial hurdles, partnership trust, and venture expansions.",
    whoShouldRequest: [
      "Business owners facing unexpected commercial stagnation or customer friction",
      "Partners evaluating business alignment, trust, or venture expansion"
    ],
    commonConcerns: [
      "Business obstacles & revenue stagnation",
      "Partnership trust & alignment issues",
      "Customer concerns & market reputation",
      "Decision clarity for expansion or investments",
      "Workplace negativity & progress prayer"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp text or voice call",
      "Video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Name",
      "Business type or industry",
      "General concern summary",
      "Preferred contact method"
    ],
    howItWorks: [
      { step: "01", title: "Submit Business Context", desc: "Share industry type and specific hurdle." },
      { step: "02", title: "Consultation Call", desc: "Discuss timing, ethics, and focus." }
    ],
    prayerOptions: ["Business Progress & Prosperity Prayer", "Venture Protection Blessing"],
    whyConsult: ["Discreet corporate confidentiality", "Ethical spiritual perspective"],
    testimonials: [
      { name: "Karan T.", location: "Delhi", comment: "Guruji's consultation gave me calm clarity when evaluating a risky business expansion." }
    ],
    faqs: [
      { q: "Does Guruji review business contracts or tax returns?", a: "No. Legal contracts and tax compliance must be handled by certified attorneys and accountants." },
      { q: "Can business partners consult together?", a: "Yes, joint consultations are welcome when mutually agreed." },
      { q: "Are specific financial returns guaranteed?", a: "No. Business success relies on market conditions, hard work, and sound strategy." },
      { q: "What prayers support business positivity?", a: "Morning light prayers focused on ethical growth, customer goodwill, and employee harmony." }
    ],
    relatedServiceIds: ["career-job-guidance", "financial-guidance", "land-property-dispute"]
  },

  // 8.8 Financial Guidance
  {
    id: "financial-guidance",
    slug: "financial-guidance",
    title: "Financial Guidance",
    category: "Finance and Property",
    shortDesc: "Spiritual consultation for managing financial stress, personal debt peace, spending habits, and stability prayers.",
    safetyLabel: "Emotional Grounding",
    imageUrl: "/service_lucky_number.jpg",
    icon: "Coins",
    featured: false,
    published: true,
    order: 8,
    seoTitle: "Financial Guidance & Debt Peace | Shekar Guruji",
    seoDesc: "Spiritual consultation for financial stress, managing debt anxiety, and stability prayers.",
    disclaimer: "MANDATORY FINANCIAL DISCLAIMER: Spiritual consultation is for emotional support and mindset grounding. We NEVER guarantee profit, debt relief, lottery wins, or investment returns.",
    
    overview: "Financial pressure creates heavy emotional strain. Guruji provides calm, objective consultation to help individuals release financial panic, build prudent daily habits, and pray for family financial stability.",
    whoShouldRequest: [
      "Individuals experiencing debt anxiety or financial stress",
      "Families seeking spiritual grounding during economic tightness"
    ],
    commonConcerns: [
      "Financial stress & debt-related anxiety",
      "Income uncertainty & spending discipline clarity",
      "Family financial stability prayers",
      "Releasing fear around money matters"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp messaging or voice",
      "Video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Name",
      "General concern summary only",
      "Preferred contact method"
    ],
    howItWorks: [
      { step: "01", title: "Inquire", desc: "Share general financial stress context." },
      { step: "02", title: "Session", desc: "Private call on emotional grounding and stability." }
    ],
    prayerOptions: ["Financial Stability & Peace Prayer", "Debt Anxiety Relief Blessing"],
    whyConsult: ["Zero commercial pressure", "Respectful handling of debt stress"],
    testimonials: [
      { name: "Deepak G.", location: "Pune", comment: "Guruji did not promise fake lottery wins. He gave me spiritual strength to manage my debts calmly." }
    ],
    faqs: [
      { q: "Does Guruji give stock market or crypto tips?", a: "ABSOLUTELY NOT. We do not provide financial investment or trading advice." },
      { q: "Can spiritual guidance help reduce financial anxiety?", a: "Yes. Prayer routines help quiet panic, enabling clear, realistic financial decision making." },
      { q: "Do I need to disclose exact account balances?", a: "No. Only general descriptions of your concern are needed." },
      { q: "Are lottery or gambling numbers provided?", a: "No. We strictly prohibit gambling or lottery claims." }
    ],
    relatedServiceIds: ["business-guidance", "career-job-guidance", "land-property-dispute"]
  },

  // 8.9 Child-Related and Family Expansion Concerns
  {
    id: "family-expansion-concerns",
    slug: "family-expansion-concerns",
    title: "Child-Related and Family Expansion Concerns",
    category: "Marriage and Family",
    shortDesc: "Spiritual and emotional prayer support related to child well-being and family expansion journey.",
    safetyLabel: "Prayer Support",
    imageUrl: "/service_family_expansion.jpg",
    icon: "Users",
    featured: false,
    published: true,
    order: 9,
    seoTitle: "Family Expansion & Child Prayer | Shekar Guruji",
    seoDesc: "Spiritual prayer support for couples on their family expansion journey and child well-being.",
    disclaimer: "MANDATORY FERTILITY DISCLAIMER: Spiritual prayer support does NOT replace qualified medical diagnosis, IVF treatment, or reproductive healthcare from licensed doctors.",
    
    overview: "The journey toward family expansion can bring profound emotional vulnerability. Guruji offers warm, prayer-based spiritual support to foster peace of mind and positive hope alongside professional healthcare.",
    whoShouldRequest: [
      "Couples seeking prayer support and emotional positivity during family expansion",
      "Parents concerned about their children's focus, health, or emotional peace"
    ],
    commonConcerns: [
      "Spiritual & emotional support for family expansion",
      "Peace of mind during medical fertility journeys",
      "Child growth, focus, & educational well-being prayers",
      "Family blessing for newborn peace"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp text or voice call",
      "Video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Name",
      "General concern summary",
      "Preferred consultation mode"
    ],
    howItWorks: [
      { step: "01", title: "Share Request", desc: "Provide general prayer intention." },
      { step: "02", title: "Prayer Support", desc: "Receive spiritual blessing routines." }
    ],
    prayerOptions: ["Family Blessing Prayer", "Child Well-Being & Focus Prayer"],
    whyConsult: ["Strict medical compliance", "Empathetic, compassionate care"],
    testimonials: [
      { name: "Priya & Rajesh N.", location: "Bengaluru", comment: "Guruji's gentle prayer guidance brought us deep emotional calm throughout our hospital visits." }
    ],
    faqs: [
      { q: "Does prayer guarantee pregnancy or child gender?", a: "ABSOLUTELY NOT. Medical care handles reproductive health. Gender selection is illegal and strictly forbidden." },
      { q: "Should I continue my doctor's treatment?", a: "Yes, 100%. Always follow your gynecologist or fertility specialist's instructions." },
      { q: "Can prayers be done for children's exam stress?", a: "Yes, child focus and calm prayers are very popular for students." },
      { q: "Is our family expansion request kept confidential?", a: "Yes, completely private." }
    ],
    relatedServiceIds: ["health-wellbeing-prayer", "marriage-guidance", "family-problem-guidance"]
  },

  // 8.10 Personal and Intimate Concerns
  {
    id: "personal-intimate-concerns",
    slug: "personal-intimate-concerns",
    title: "Personal and Intimate Concerns",
    category: "Personal Guidance",
    shortDesc: "Strictly private, respectful consultation for sensitive personal concerns using restrained, dignified wording.",
    safetyLabel: "100% Confidential (Adults Only)",
    imageUrl: "/service_personal.jpg",
    icon: "Lock",
    featured: false,
    published: true,
    order: 10,
    seoTitle: "Personal & Intimate Guidance | Shekar Guruji",
    seoDesc: "Discreet, highly confidential spiritual consultation for sensitive personal life concerns.",
    disclaimer: "MANDATORY PRIVACY & AGE RULE: Consultations are restricted to adults (18+). Uses restrained public wording, strict privacy protocols, and medical referrals where appropriate.",
    
    overview: "Certain personal life challenges are difficult to discuss open with family or friends. Guruji provides an absolute safe space, dignity, and confidential spiritual reflection for sensitive personal matters.",
    whoShouldRequest: [
      "Adults (18+) seeking discreet, non-judgmental guidance for sensitive personal dilemmas",
      "Individuals experiencing private emotional distress requiring total anonymity"
    ],
    commonConcerns: [
      "Discreet consultation for sensitive personal concerns",
      "Private emotional distress & boundary confusion",
      "Restrained, dignified guidance without public exposure"
    ],
    methodsAvailable: [
      "Private phone call",
      "Encrypted WhatsApp chat or voice note",
      "Private video consultation"
    ],
    whatToShare: [
      "Age confirmation (18+ required)",
      "Name or initials",
      "Private concern summary",
      "Preferred contact method"
    ],
    howItWorks: [
      { step: "01", title: "Age & Privacy Check", desc: "Confirm age 18+ and submit private summary." },
      { step: "02", title: "Discreet Session", desc: "One-on-one confidential consultation." }
    ],
    prayerOptions: ["Inner Peace & Dignity Prayer", "Emotional Strength Blessing"],
    whyConsult: ["Absolute anonymity guaranteed", "Zero public disclosure", "Restrained dialogue"],
    testimonials: [
      { name: "Anonymous V.", location: "Karnataka", comment: "I felt completely safe speaking with Guruji. He maintained total dignity and privacy." }
    ],
    faqs: [
      { q: "Is age verification mandatory?", a: "Yes. Consultations in this category require confirmation of age 18 or above." },
      { q: "Are these conversations recorded?", a: "No. All private conversations are strictly un-recorded and confidential." },
      { q: "Does Guruji provide clinical sexology or therapy?", a: "No. Medical or intimacy health issues are referred to qualified clinical professionals." },
      { q: "Can I use an initial instead of my full name?", a: "Yes, anonymous initials are completely acceptable." }
    ],
    relatedServiceIds: ["love-relationship-guidance", "emotional-distress-guidance"]
  },

  // 8.11 Political Career Guidance
  {
    id: "political-career-guidance",
    slug: "political-career-guidance",
    title: "Political Career Guidance",
    category: "Career and Business",
    shortDesc: "Spiritual perspective for public figures regarding leadership confidence, public image stress, and conflict management.",
    safetyLabel: "Discreet Consultation",
    imageUrl: "/service_political.jpg",
    icon: "Briefcase",
    featured: false,
    published: true,
    order: 11,
    seoTitle: "Political Career Guidance | Shekar Guruji",
    seoDesc: "Spiritual reflection for public leaders regarding timing, stress management, and public service focus.",
    disclaimer: "MANDATORY RULE: Spiritual consultation provides personal timing and stress perspective. We NEVER promise election victories, political appointments, or guaranteed public success.",
    
    overview: "Public leadership involves intense scrutiny, high-stakes decision stress, and public opposition. Guruji offers confidential spiritual grounding and timing analysis for leaders committed to ethical public service.",
    whoShouldRequest: [
      "Public representatives, leaders, or aspirants navigating high-stress public campaigns",
      "Individuals seeking spiritual focus and conflict management in public life"
    ],
    commonConcerns: [
      "Leadership confidence & public-image stress",
      "Campaign-related personal decision timing",
      "Managing public opposition & conflict stress",
      "Ethical service clarity & peace of mind"
    ],
    methodsAvailable: [
      "Private phone call",
      "Encrypted WhatsApp voice/text",
      "Private video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Name",
      "Public role or aspiration",
      "General concern category"
    ],
    howItWorks: [
      { step: "01", title: "Discreet Contact", desc: "Reach out via direct encrypted WhatsApp." },
      { step: "02", title: "Private Timing Analysis", desc: "Reviewing planetary timing parameters." }
    ],
    prayerOptions: ["Leadership Wisdom & Calm Prayer", "Public Service Protection Blessing"],
    whyConsult: ["High-level discretion", "Ethical leadership focus"],
    testimonials: [],
    faqs: [
      { q: "Are political consultations guaranteed to win elections?", a: "No. Election outcomes depend on public voting and democratic processes. Guidance focuses on personal timing and stress." },
      { q: "Is identity protected from press disclosure?", a: "Yes, 100%. All high-profile consultations are protected under strict non-disclosure." }
    ],
    relatedServiceIds: ["career-job-guidance", "business-guidance", "enemy-conflict-concerns"]
  },

  // 8.12 Sports Performance Guidance
  {
    id: "sports-performance-guidance",
    slug: "sports-performance-guidance",
    title: "Sports Performance Guidance",
    category: "Personal Guidance",
    shortDesc: "Spiritual focus, mental preparation, motivation, and performance prayer for athletes and sports professionals.",
    safetyLabel: "Mental Focus Support",
    imageUrl: "/service_sports.jpg",
    icon: "Sun",
    featured: false,
    published: true,
    order: 12,
    seoTitle: "Sports Performance & Focus | Shekar Guruji",
    seoDesc: "Spiritual prayer support and mental focus guidance for athletes and sports professionals.",
    disclaimer: "MANDATORY SPORTS DISCLAIMER: Spiritual support builds mental calm and focus. It does NOT replace athletic coaching, physical training, medical care, or sports psychology.",
    
    overview: "Peak sports performance demands mental stillness, freedom from performance anxiety, and unwavering focus. Guruji provides prayer support and timing perspective to help athletes achieve inner calm under pressure.",
    whoShouldRequest: [
      "Athletes and sports professionals experiencing competition anxiety or focus blocks",
      "Players seeking spiritual grounding prior to major tournaments or trials"
    ],
    commonConcerns: [
      "Confidence, focus, & competition motivation",
      "Overcoming match anxiety & mental blocks",
      "Performance-related positivity prayer"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp direct chat",
      "Video consultation"
    ],
    whatToShare: [
      "Name",
      "Sport / Athletic discipline",
      "General performance concern"
    ],
    howItWorks: [
      { step: "01", title: "Share Focus Request", desc: "State your upcoming trial or competition." },
      { step: "02", title: "Focus Routine", desc: "Receive morning focus prayer guidance." }
    ],
    prayerOptions: ["Focus & Victory Intent Prayer", "Inner Strength & Recovery Blessing"],
    whyConsult: ["Mental calm under pressure", "Positive athletic encouragement"],
    testimonials: [],
    faqs: [
      { q: "Does prayer replace physical practice or coaching?", a: "No. Physical training and coaching build skills; prayer grounds your mental focus." },
      { q: "Can athletes consult during injury recovery?", a: "Yes. Prayers provide positive emotional hope alongside physical physiotherapy." }
    ],
    relatedServiceIds: ["health-wellbeing-prayer", "career-job-guidance"]
  },

  // 8.13 Enemy and Conflict Concerns
  {
    id: "enemy-conflict-concerns",
    slug: "enemy-conflict-concerns",
    title: "Enemy and Conflict Concerns",
    category: "Spiritual Protection",
    shortDesc: "Spiritual protection prayers and conflict resolution guidance for personal disputes, workplace rivalry, and social opposition.",
    safetyLabel: "Peaceful Resolution",
    imageUrl: "/service_conflict.jpg",
    icon: "Shield",
    featured: true,
    published: true,
    order: 13,
    seoTitle: "Enemy & Conflict Protection | Shekar Guruji",
    seoDesc: "Spiritual protection prayers and peaceful conflict guidance for personal and workplace rivalry.",
    disclaimer: "MANDATORY PEACE RULE: Our guidance focuses strictly on spiritual protection, positivity, and peaceful resolution. We NEVER promote retaliation, coercion, surveillance, threats, or harm against others.",
    
    overview: "Facing un-provoked opposition, workplace rivalry, or social disputes can cause immense distress. Guruji guides protective Vedic prayer routines that shield your home and mind while fostering peaceful resolution.",
    whoShouldRequest: [
      "Visitors facing intense workplace rivalry, false opposition, or social friction",
      "Families seeking spiritual protection prayers for peaceful boundaries"
    ],
    commonConcerns: [
      "Personal disputes & social opposition",
      "Workplace rivalry & false accusations",
      "Family conflict & inter-personal friction",
      "Protection prayer & peaceful resolution"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp messaging or voice",
      "Video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Name",
      "General conflict category (Workplace, Family, Social)",
      "Short concern description"
    ],
    howItWorks: [
      { step: "01", title: "Submit Context", desc: "Describe the opposition situation." },
      { step: "02", title: "Protection Guidance", desc: "Receive protective prayer routines." }
    ],
    prayerOptions: ["Shield of Positivity Prayer", "Peaceful Conflict Resolution Blessing"],
    whyConsult: ["Strict non-retaliatory ethics", "Clean, protective Vedic prayers"],
    testimonials: [
      { name: "Mahesh B.", location: "Bengaluru", comment: "Guruji's protection prayer guidance helped our business navigate workplace rivalry with total peace of mind." }
    ],
    faqs: [
      { q: "Does Guruji perform rituals to harm enemies?", a: "ABSOLUTELY NOT. We strictly forbid negative, harmful, or coercive rituals. All prayers focus purely on your own protection and peace." },
      { q: "Can protection prayers reduce office politics?", a: "Prayers foster internal calm and protective boundaries, helping you respond wisely to friction." },
      { q: "Are criminal or physical threats handled spiritually?", a: "NO. If you face physical danger or illegal harassment, you must contact law enforcement immediately." }
    ],
    relatedServiceIds: ["negative-energy-cleansing", "land-property-dispute", "civil-legal-concerns"]
  },

  // 8.14 Land and Property Dispute Guidance
  {
    id: "land-property-dispute",
    slug: "land-property-dispute",
    title: "Land and Property Dispute Guidance",
    category: "Finance and Property",
    shortDesc: "Spiritual prayer support and perspective regarding family land concerns, property delays, and ownership friction.",
    safetyLabel: "Legal Referral Required",
    imageUrl: "/service_property.jpg",
    icon: "Building",
    featured: false,
    published: true,
    order: 14,
    seoTitle: "Land & Property Dispute Guidance | Shekar Guruji",
    seoDesc: "Spiritual consultation for ancestral property delays, family land peace, and resolution prayers.",
    disclaimer: "MANDATORY LEGAL DISCLAIMER: Spiritual guidance provides emotional grounding and timing analysis. It does NOT replace legal legal counsel. You are advised to consult a qualified lawyer for property laws.",
    
    overview: "Property disputes often involve deep family history and emotional stress. Guruji offers spiritual reflection and peaceful prayers to navigate property delays and foster amicable understanding.",
    whoShouldRequest: [
      "Families experiencing long-standing delays in ancestral property settlement",
      "Individuals seeking peace of mind during real estate ownership discussions"
    ],
    commonConcerns: [
      "Family property concerns & ancestral land delays",
      "Ownership disagreements & document friction",
      "Prayer for peaceful legal resolution"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp direct communication",
      "Video consultation"
    ],
    whatToShare: [
      "Name",
      "General dispute type (Ancestral, Real Estate, Partition)",
      "Short description"
    ],
    howItWorks: [
      { step: "01", title: "Share Summary", desc: "Briefly outline the property issue." },
      { step: "02", title: "Timing Assessment", desc: "Evaluating DOB cycles related to property." }
    ],
    prayerOptions: ["Property Peace & Alignment Prayer", "Ancestral Blessing Routine"],
    whyConsult: ["Calm, non-coercive environment", "Encourages lawful, peaceful resolution"],
    testimonials: [],
    faqs: [
      { q: "Can Guruji change court land rulings?", a: "No. Court rulings are made by judges based on legal law. Prayers help maintain family calm during court processes." },
      { q: "Is a legal lawyer still required?", a: "Yes, 100%. Always work with an experienced real estate advocate." }
    ],
    relatedServiceIds: ["financial-guidance", "civil-legal-concerns", "family-problem-guidance"]
  },

  // 8.15 Lucky Number Consultation
  {
    id: "lucky-number-consultation",
    slug: "lucky-number-consultation",
    title: "Lucky Number Consultation",
    category: "Psychic Reading",
    shortDesc: "Personalized number-oriented consultation based on name numerology, date of birth, and auspicious timing purposes.",
    safetyLabel: "Numerology Analysis",
    imageUrl: "/service_lucky_number.jpg",
    icon: "Calendar",
    featured: false,
    published: true,
    order: 15,
    seoTitle: "Lucky Number Consultation | Shekar Guruji",
    seoDesc: "Personalized name and date of birth numerology consultation with Pandit Shekar Guruji.",
    disclaimer: "MANDATORY GAMBLING DISCLAIMER: Numerology guidance evaluates traditional name and birth numbers. We strictly NEVER imply guaranteed lottery, gambling, betting, or financial winnings.",
    
    overview: "Numbers carry traditional symbolic significance in Vedic numerology. Guruji evaluates your full name and date of birth to suggest harmonious numbers for personal branding, vehicle registration, or date timing.",
    whoShouldRequest: [
      "Individuals seeking auspicious numbers for dates, vehicle numbers, or business naming",
      "Visitors interested in traditional name numerology alignment"
    ],
    commonConcerns: [
      "Personalized number alignment based on name & DOB",
      "Auspicious dates for major life events",
      "Vehicle or business naming numerology"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp direct messaging",
      "Video consultation"
    ],
    whatToShare: [
      "Full Name (exact spelling)",
      "Date of Birth",
      "Purpose (e.g. Business name, Vehicle, Event date)",
      "Preferred contact method"
    ],
    howItWorks: [
      { step: "01", title: "Submit Spelling & DOB", desc: "Provide exact name spelling and birth date." },
      { step: "02", title: "Calculation", desc: "Guruji calculates compound and root numbers." }
    ],
    prayerOptions: ["Harmonious Energy Blessing"],
    whyConsult: ["Traditional calculation accuracy", "Ethical numerology standards"],
    testimonials: [],
    faqs: [
      { q: "Can lucky numbers guarantee winning the lottery?", a: "ABSOLUTELY NOT. We strictly oppose gambling or lottery promises. Numerology is for personal alignment only." },
      { q: "Can name spelling be adjusted slightly?", a: "Yes, traditional numerology offers minor letter adjustments for name harmony." }
    ],
    relatedServiceIds: ["dob-astrology-reading", "business-guidance"]
  },

  // 8.16 Civil and Legal-Life Concerns
  {
    id: "civil-legal-concerns",
    slug: "civil-legal-concerns",
    title: "Civil and Legal-Life Concerns",
    category: "Personal Guidance",
    shortDesc: "Spiritual prayer support and emotional grounding during stressful civil litigation or legal circumstances.",
    safetyLabel: "Spiritual Grounding Only",
    imageUrl: "/service_legal.jpg",
    icon: "Lock",
    featured: false,
    published: true,
    order: 16,
    seoTitle: "Civil & Legal Life Support | Shekar Guruji",
    seoDesc: "Spiritual prayer support and emotional calm during stressful legal proceedings.",
    disclaimer: "MANDATORY LEGAL DISCLAIMER: Spiritual support offers emotional calm during litigation stress. It does NOT interpret laws, provide legal defense, or replace qualified attorneys.",
    
    overview: "Legal proceedings and civil disputes cause immense anxiety. Guruji offers compassionate spiritual prayer support to help you stay composed, patient, and clear-headed throughout court processes.",
    whoShouldRequest: [
      "Individuals facing prolonged civil court cases seeking emotional strength and peace",
      "Families navigating legal stress requiring non-judgmental spiritual prayer support"
    ],
    commonConcerns: [
      "Spiritual & personal support during legal stress",
      "Emotional composure during court proceedings",
      "Prayer for truth & peaceful resolution"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp direct messaging",
      "Video consultation"
    ],
    whatToShare: [
      "Name",
      "General issue category (Civil, Property, Family court)",
      "Preferred contact method"
    ],
    howItWorks: [
      { step: "01", title: "Share Context", desc: "Outline general legal stress." },
      { step: "02", title: "Prayer Support", desc: "Receive emotional peace guidance." }
    ],
    prayerOptions: ["Truth & Peace Prayer", "Courage & Composure Blessing"],
    whyConsult: ["Total discretion", "Calm emotional support"],
    testimonials: [],
    faqs: [
      { q: "Can Guruji influence a judge or court verdict?", a: "No. Court verdicts depend entirely on evidence and law. Prayers help maintain personal sanity and calm." },
      { q: "Is confidentiality maintained?", a: "Yes, 100%. All discussions are strictly private." }
    ],
    relatedServiceIds: ["land-property-dispute", "enemy-conflict-concerns"]
  },

  // 8.17 Emotional Distress and Personal Guidance
  {
    id: "emotional-distress-guidance",
    slug: "emotional-distress-guidance",
    title: "Emotional Distress and Personal Guidance",
    category: "Personal Guidance",
    shortDesc: "Compassionate prayer and spiritual consultation for emotional peace, anxiety relief, and personal clarity.",
    safetyLabel: "Compassionate Prayer",
    imageUrl: "/service_emotional.jpg",
    icon: "Sun",
    featured: true,
    published: true,
    order: 17,
    seoTitle: "Emotional Peace & Personal Guidance | Shekar Guruji",
    seoDesc: "Compassionate spiritual consultation for emotional distress, releasing anxiety, and finding inner peace.",
    disclaimer: "MANDATORY CRISIS & MENTAL HEALTH NOTICE: Spiritual consultation provides prayer-based emotional support. If you are experiencing severe depression, suicidal thoughts, or a mental health crisis, PLEASE contact licensed mental health professionals or emergency crisis helplines immediately (e.g. Tele-MANAS 14416 in India).",
    
    overview: "Life transitions, grief, and emotional exhaustion can leave us feeling overwhelmed. Guruji offers a gentle, prayerful environment to help quiet mental restlessness, restore positivity, and rediscover personal clarity.",
    whoShouldRequest: [
      "Visitors feeling emotionally fatigued, anxious, or burdened by life uncertainty",
      "Individuals seeking grounding spiritual prayer routines for daily peace"
    ],
    commonConcerns: [
      "Compassionate prayer for emotional peace & anxiety relief",
      "Releasing emotional fatigue & mental unrest",
      "Personal clarity during life transitions"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp voice or text",
      "Video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Name or initials",
      "General concern description",
      "Preferred contact method"
    ],
    howItWorks: [
      { step: "01", title: "Reach Out", desc: "Share your desire for emotional peace." },
      { step: "02", title: "Calming Session", desc: "Empathetic, soothing conversation with Guruji." }
    ],
    prayerOptions: ["Mindful Peace Prayer", "Emotional Positivity & Hope Blessing"],
    whyConsult: ["Warm, zero-judgment space", "Focus on gentle spiritual recovery"],
    testimonials: [
      { name: "Kavitha M.", location: "Bengaluru", comment: "Guruji listened with such warmth. His prayer suggestions helped relieve my daily anxiety." }
    ],
    faqs: [
      { q: "Is this a substitute for psychiatric care or therapy?", a: "No. Spiritual prayers foster peace of mind; medical mental health care must be guided by qualified psychiatrists or psychologists." },
      { q: "Can I remain anonymous?", a: "Yes, initials are welcome." }
    ],
    relatedServiceIds: ["health-wellbeing-prayer", "personal-intimate-concerns"]
  },

  // 8.18 Negative-Energy and Spiritual Protection Consultation
  {
    id: "spiritual-protection-consultation",
    slug: "spiritual-protection-consultation",
    title: "Bad & Black Energy, Witchcraft Clearing & Spiritual Protection",
    category: "Spiritual Protection",
    shortDesc: "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers, evil-eye removal, and protective Vedic blessings.",
    safetyLabel: "Clean Vedic Protection",
    imageUrl: "/service_protection.jpg",
    icon: "Shield",
    featured: true,
    published: true,
    order: 18,
    seoTitle: "Bad & Black Energy, Witchcraft Clearing | Pandit Shekar Guruji",
    seoDesc: "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers and spiritual cleansing.",
    disclaimer: "MANDATORY PROTECTION RULE: We strictly DO NOT claim you are definitely cursed, create fear, use countdown pressure tactics, or guarantee instant removal. All prayers are clean, positive Vedic routines.",
    
    overview: "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers. When un-explainable fatigue, persistent negativity, obstacles, or evil eye (Drishti) disturb your life, home, or business, Guruji provides grounding Vedic rituals and protective prayer routines to restore pure light, peace, and spiritual shielding.",
    whoShouldRequest: [
      "Individuals suffering from bad energy, black energy, or suspected witchcraft influences",
      "Families experiencing persistent negative atmosphere or heavy vibes at home",
      "Business owners facing unexplained sudden losses, evil-eye, or negative vibrations"
    ],
    commonConcerns: [
      "Clearing Bad energy, Black energy & Any kind of Witchcraft",
      "Evil eye (Drishti) removal & heavy energy protection",
      "Negative energy cleansing for home & business",
      "Spiritual protection prayer routines & sacred shielding"
    ],
    methodsAvailable: [
      "Phone call consultation",
      "WhatsApp direct messaging or voice",
      "Video consultation",
      "In-person meeting (when enabled by admin)"
    ],
    whatToShare: [
      "Name",
      "General concern category",
      "Preferred contact method"
    ],
    howItWorks: [
      { step: "01", title: "Initial Inquiry", desc: "Describe the negative energy or spiritual concern." },
      { step: "02", title: "Positive Cleansing Routine", desc: "Receive powerful prayer and diya protection routines." }
    ],
    prayerOptions: ["Bad & Black Energy Clearing Prayer", "Witchcraft Protection Vedic Ritual", "House Positivity & Light Prayer", "Drishti Evil-Eye Protection Blessing"],
    whyConsult: ["Zero scare tactics or coercive demands", "Pure light and positive Vedic prayers"],
    testimonials: [
      { name: "Suresh P.", location: "Hyderabad", comment: "Guruji did not create any fear or demand huge sums. He recommended simple morning light prayers that brought harmony to our house." }
    ],
    faqs: [
      { q: "Does Guruji tell visitors they have a deadly curse?", a: "NO. We strictly reject fear-inducing curse claims. We focus purely on positive spiritual light and prayer." },
      { q: "Are expensive animal or blood sacrifices involved?", a: "ABSOLUTELY NOT. Our remedies use only clean Vedic items: oil lamps, flowers, camphor, and sincere prayers." },
      { q: "How long until we feel household peace?", a: "Many families report immediate emotional relief upon starting positive morning prayer routines." }
    ],
    relatedServiceIds: ["enemy-conflict-concerns", "health-wellbeing-prayer"]
  }
];
