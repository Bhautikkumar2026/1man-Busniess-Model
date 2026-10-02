import { SiteSettings, RegisteredLead } from '../types';

export const defaultSiteData: SiteSettings = {
  general: {
    brandName: '1 MAN BUSINESS MODEL',
    brandSub: 'By Siddharth Rajsekar • Freedom Business Model',
    logoShort: '1M',
    currencySymbol: '₹',
    topBannerText: '🔥 LIVE MASTERCLASS: How To Build A ₹10 Lakh/Month 1-Man Business with AI',
    stickyBarTitle: '1-Man Business Model Masterclass',
    supportEmail: 'support@internetlifestylehub.com',
    supportPhone: '+91 98765 43210',
  },
  hero: {
    eyebrow: 'ATTENTION: COACHES, CONSULTANTS, TRAINERS & EXPERTS',
    title: 'Discover The Exact',
    highlightedText: '1-Man Business Model',
    titleEnd: 'To Turn Your Knowledge Into A Scalable, AI-Powered Online Business',
    subheadline: 'Without A Team, Office, Or Complex Technical Headaches.',
    description:
      'Learn the proven 3-step Product → Traffic → Sales system used by 30,000+ creators and consultants to generate predictable 6 to 7-figure recurring revenue in just 2 hours a day.',
    sessionDateText: 'Today / Next Live Batch',
    sessionTimeText: '8:00 PM IST / 10:30 AM EST',
    sessionDuration: '90 Minutes',
    regularPrice: '₹4,999',
    discountedPriceText: 'JUST ₹9 TODAY (99% OFF)',
    spotsText: '🔥 STRICTLY LIMITED TO 500 ATTENDEES',
    videoThumbnail:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
    videoTrailerTitle: 'Masterclass Trailer & Overview',
    videoTrailerDesc:
      'Siddharth Rajsekar reveals the core philosophy of replacing 20-person agencies with 3 AI agents and digital assets.',
    reviewsCount: '34,800+',
    reviewRating: '4.9 / 5',
    studentsCount: '300,000+',
    achieversCount: '150+ Crore Club',
  },
  mentor: {
    name: 'Siddharth Rajsekar',
    shortName: 'Sidz',
    title: "India's Leading AI Digital Coach • Author & Speaker",
    badge: 'MEET YOUR MENTOR',
    photoUrl:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&auto=format&fit=crop&q=80',
    missionQuote: 'My Mission Is To Create',
    missionHighlight: '1 Million Digital Teachers & 1-Man Businesses',
    bioParagraph1:
      'Siddharth Rajsekar (fondly known as Sidz) is the founder of the Internet Lifestyle Hub, one of the world’s largest and most vibrant communities of coaches, trainers, teachers, and experts.',
    bioParagraph2:
      'After spending years in traditional digital marketing agencies dealing with 16-hour workdays, employee turnover, and wafer-thin margins, Siddharth pioneered the Freedom Business Model. By combining micro-memberships, video funnels, and modern AI automation, he scaled his business to ₹50+ Crores while working from home and maintaining peak life balance.',
    bookTitle: '"You Can Coach"',
    bookSales: '100,000+ copies sold worldwide',
    stats: [
      { label: 'Total Mentored', value: '300,000+', sub: 'Across 40+ Countries' },
      { label: 'Ecosystem Revenue', value: '₹50+ Crores', sub: 'Pure Knowledge Assets' },
      { label: 'Crore Club Members', value: '150+', sub: 'Multi-Crore Students' },
      { label: 'Lakh Club Members', value: '3,500+', sub: 'Profitable Creators' },
    ],
    credentials: [
      'Featured in Entrepreneur, Forbes, TEDx, Josh Talks & Business Standard',
      'Mentored top celebrities, industry leaders, doctors, and Fortune 500 executives',
      'Zero agency overhead: 100% proprietary AI & digital asset leverage',
    ],
  },
  payment: {
    ticketPrice: 9,
    regularPrice: '₹4,999',
    currencySymbol: '₹',
    currencyCode: 'INR',
    razorpayKeyId: '',
    razorpayKeySecret: '',
    isPaymentRequired: true,
    testMode: true,
    paymentButtonText: 'Pay ₹9 & Reserve VIP Seat Now',
  },
  secrets: [
    {
      id: 'secret-1',
      number: '01',
      pillTitle: 'THE DIGITAL ASSET ENGINE',
      tagline: 'How To Package Your Knowledge Into High-Ticket Micro-Memberships',
      highlight: 'Turn 1 Hour of Wisdom Into 24/7 Scalable Cashflow',
      description:
        'Stop trading time for money. Discover how to identify your "Superpower Niche" and use Generative AI to map, outline, and create your complete 4-level digital curriculum in under 72 hours.',
      bulletPoints: [
        'The 4-Tier Offer Matrix (Lead Magnet → ₹4,999 Entry → ₹25,000 Core → High Ticket)',
        'How to use AI prompt chaining to extract 10 years of experience into structured video modules',
        'Setting up your zero-cost community hub without complex LMS coding or tech skills',
      ],
      keyOutcome: 'Build 1 asset once, sell it 10,000 times with 92% profit margins',
      timeframe: 'Day 1 to 14',
      badgeColor: 'amber',
    },
    {
      id: 'secret-2',
      number: '02',
      pillTitle: 'THE AUTOMATED VIDEO MONEY FUNNEL',
      tagline: 'Generate High-Intent Inbound Buyers Without Annoying Cold Outreach',
      highlight: 'From "Who Are You?" to "Take My Money" On Autopilot',
      description:
        'Traditional advertising is broken and burning cash. Learn the exact 1-Page Webinar Funnel and YouTube/Meta micro-ads strategy that converts total strangers into raving students.',
      bulletPoints: [
        'The 15-Minute "Value Hook" Video framework that gets 40%+ conversion rates',
        'How to run profitable ads starting at just ₹500/day without hiring expensive agencies',
        'Automated WhatsApp + Email nurture sequences with 68% open rates',
      ],
      keyOutcome: 'Wake up to qualified buyer notifications every single morning',
      timeframe: 'Day 15 to 45',
      badgeColor: 'yellow',
    },
    {
      id: 'secret-3',
      number: '03',
      pillTitle: 'THE 1-MAN AI AUTOMATION OS',
      tagline: 'Run A Multi-Crore Empire In 2 Hours/Day Without Hiring Staff',
      highlight: 'Replace A 15-Person Team With 3 Autonomous AI Workflows',
      description:
        'Scale without the nightmare of managing full-time employees, office rent, or payroll. Install Siddharth’s exact automation stack that handles customer onboarding, billing, support, and community management.',
      bulletPoints: [
        'The "Ghost Operator" AI system for student doubt resolution & community moderation',
        'Zero-touch payment gateways, GST invoicing, and automated affiliate tracking',
        'The Weekly 2-Hour CEO Ritual: 1 Live Q&A, 0 daily operational fires',
      ],
      keyOutcome: 'True time, location, and financial freedom for you and your family',
      timeframe: 'Day 45 to 90',
      badgeColor: 'orange',
    },
  ],
  bonuses: [
    {
      id: 'bonus-1',
      title: 'The 1-Man AI Prompt Engineering Vault',
      subtitle: 'Complete copy-paste library of 150+ master prompts',
      value: '₹7,999',
      description:
        'Pre-engineered prompts for ChatGPT, Claude, and Gemini to generate course outlines, high-converting sales letters, webinar slides, and email sequences in minutes.',
      iconName: 'Sparkles',
      tag: 'INSTANT DOWNLOAD',
    },
    {
      id: 'bonus-2',
      title: '1-Man Business OS Notion & Airtable Workspace',
      subtitle: 'The exact operational dashboard used to manage ₹50+ Cr revenue',
      value: '₹6,499',
      description:
        'Plug-and-play dashboard with content calendars, sales funnel trackers, student CRM, revenue forecasting, and daily task automation templates.',
      iconName: 'Boxes',
      tag: 'READY TEMPLATE',
    },
    {
      id: 'bonus-3',
      title: '7-Figure Offer Architecture Matrix',
      subtitle: 'Step-by-step blueprint to price, package, and position your knowledge',
      value: '₹5,500',
      description:
        'Psychological pricing framework, irresistible guarantee formulas, and stack templates that make your offer a total no-brainer for high-ticket buyers.',
      iconName: 'FileCheck',
      tag: 'FRAMEWORK PDF',
    },
    {
      id: 'bonus-4',
      title: 'VIP Community & Live Hotseat Pass',
      subtitle: 'Access to private post-masterclass Q&A with Siddharth Rajsekar',
      value: '₹5,000',
      description:
        'Ask your specific niche questions directly, get your offer audited live, and connect with fellow ambitious high-performance creators.',
      iconName: 'Users',
      tag: 'EXCLUSIVE ACCESS',
    },
  ],
  testimonials: [
    {
      id: 't-1',
      name: 'Puja Puneet',
      role: 'Life Designer & Author',
      niche: 'Life Coaching & Women Empowerment',
      category: 'growth',
      revenue: '₹14+ Crores',
      timeframe: 'Within 3.5 Years',
      quote:
        'Before Sidz, I was running offline seminars with exhausting travel. Siddharth’s 1-man digital model allowed me to impact 100,000+ women from home while crossing ₹14 Cr in gross sales!',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
      badge: 'Hall of Fame Diamond',
    },
    {
      id: 't-2',
      name: 'Dr. Nitin Parwani',
      role: 'Homeopath & Health Mentor',
      niche: 'Chronic Gut Health & Healing',
      category: 'health',
      revenue: '₹4.2 Crores',
      timeframe: 'In 24 Months',
      quote:
        'As a practicing doctor, I was trapped in 1-on-1 clinic consultations. Moving to the Freedom Model helped me heal thousands across 25 countries while multiplying my income 10x with zero team overhead.',
      image:
        'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
      badge: 'Crore Club Achiever',
    },
    {
      id: 't-3',
      name: 'Mitesh & Indu Khatri',
      role: 'Leadership & Law of Attraction Coaches',
      niche: 'Corporate Leadership & Manifestation',
      category: 'wealth',
      revenue: '₹22+ Crores',
      timeframe: 'Scaled Exponentially',
      quote:
        'The automated video money funnel and community engagement algorithms are pure gold. We went from manual selling to waking up to ₹3 to ₹5 Lakhs in automated registrations daily.',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      badge: 'Legend Member',
    },
    {
      id: 't-4',
      name: 'Dev Gadhvi',
      role: 'Passionpreneur Coach',
      niche: 'Corporate Exit & Solopreneurship',
      category: 'career',
      revenue: '₹18+ Crores',
      timeframe: 'From Scratch',
      quote:
        'Siddharth taught me how to package my 16 years of corporate struggle into a premium coaching empire. Today, my mission reaches millions and the system runs like a Swiss watch.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      badge: 'Hall of Fame Diamond',
    },
    {
      id: 't-5',
      name: 'Gaurav Agrawal',
      role: 'Stock Market & Options Trader',
      niche: 'Algorithmic Wealth Creation',
      category: 'tech',
      revenue: '₹6.8 Crores',
      timeframe: 'In 18 Months',
      quote:
        'The technical automation stack saved me 40+ hours a week. I teach complex trading strategies without spending a single minute on manual billing or link sending.',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
      badge: 'Crore Club Achiever',
    },
  ],
  curriculum: [
    {
      id: 'curr-1',
      time: '00:00 - 00:15',
      title: 'The Shift: Why 90% of Agencies & Freelancers Are Collapsing',
      description:
        'How AI has dismantled the traditional agency model and why the 1-Man Solo Operator is now the most profitable business model on Earth.',
      tag: 'PARADIGM SHIFT',
    },
    {
      id: 'curr-2',
      time: '00:15 - 00:40',
      title: 'Secret #1: The AI Digital Product & Niche Superpower Matrix',
      description:
        'Live demonstration of using AI prompt workflows to package your experience into a 4-tier monetization flywheel in under 2 hours.',
      tag: 'PRODUCT ENGINE',
    },
    {
      id: 'curr-3',
      time: '00:40 - 01:05',
      title: 'Secret #2: The Automated Video Money Funnel Architecture',
      description:
        'The exact 15-minute high-converting video template, landing page wireframe, and ad targeting strategy that drives predictable daily buyers.',
      tag: 'TRAFFIC & SALES',
    },
    {
      id: 'curr-4',
      time: '01:05 - 01:20',
      title: 'Secret #3: The 1-Man Automation Stack & 2-Hour CEO Protocol',
      description:
        'Step-by-step installation of the zero-headcount tech stack that runs customer support, community, payments, and onboarding hands-free.',
      tag: 'SYSTEMS & AI',
    },
    {
      id: 'curr-5',
      time: '01:20 - 01:30',
      title: 'Live Implementation Roadmap, ₹24,999 Bonuses & Open Q&A',
      description:
        'Unlock all downloadable bonus templates and get your specific business questions answered live on the hotseat.',
      tag: 'LIVE ACTION',
    },
  ],
  whoFor: [
    {
      id: 'wf-1',
      text: 'Working Professionals & Corporate Leaders',
      subtext: 'Wanting to monetize 10+ years of domain expertise into high-margin digital assets.',
    },
    {
      id: 'wf-2',
      text: 'Coaches, Trainers, Tutors & Consultants',
      subtext: 'Tired of trading hours for rupees and wanting automated group coaching scale.',
    },
    {
      id: 'wf-3',
      text: 'Agency Owners & Freelancers',
      subtext: 'Exhausted from client micromanagement, employee turnover, and wafer-thin margins.',
    },
    {
      id: 'wf-4',
      text: 'Subject Matter Experts & Content Creators',
      subtext: 'Ready to build recurring membership revenue rather than relying on unstable brand sponsorships.',
    },
  ],
  whoNotFor: [
    {
      id: 'wnf-1',
      text: 'Get-Rich-Quick Seekers',
      subtext: 'People looking for magical overnight buttons without delivering authentic student results.',
    },
    {
      id: 'wnf-2',
      text: 'Theory Collectors & Inaction Takers',
      subtext: 'Those who watch training videos but never implement or launch live assets.',
    },
    {
      id: 'wnf-3',
      text: 'People Unwilling to Learn AI & Modern Systems',
      subtext: 'Those resistant to leveraging modern AI prompts, video communication, and digital funnels.',
    },
  ],
  faqs: [
    {
      id: 'faq-1',
      question: 'Why is this masterclass priced at just ₹9? What is the catch?',
      answer:
        'We charge a nominal commitment fee of just ₹9 (regular price ₹4,999) to ensure that only serious action-takers reserve the limited seats and avoid empty no-shows. In addition, you get ₹24,999 worth of AI frameworks and prompt templates included completely free!',
      category: 'Pricing',
    },
    {
      id: 'faq-2',
      question: 'I am a 9-to-5 working professional. Can I do this with just 2 hours a day?',
      answer:
        'Absolutely! Over 60% of Siddharth’s successful Crore Club members started while working full-time corporate jobs. The 1-Man Business Model is designed specifically to eliminate busywork using AI automation so you only need 1 to 2 focused hours in the morning or evening.',
      category: 'Time & Commitment',
    },
    {
      id: 'faq-3',
      question: 'I am not a technical wizard. Will I get stuck on tools & websites?',
      answer:
        'Not at all. You will be provided with pre-built Notion, Airtable, and no-code LMS templates. You do not need to write a single line of code or hire costly web developers.',
      category: 'Technical',
    },
    {
      id: 'faq-4',
      question: 'What if I don’t know what my "Niche" or "Superpower" is yet?',
      answer:
        'In Secret #1 of the masterclass, Siddharth will take you through the 3-step Niche Clarification Matrix and show you how to prompt AI to test market viability for your exact background in under 10 minutes.',
      category: 'Curriculum',
    },
    {
      id: 'faq-5',
      question: 'Will there be a recording or replay available?',
      answer:
        'Because this is a live interactive session with real-time AI prompt demonstrations, hotseat breakdowns, and live bonus giveaways, replays are NOT guaranteed. We strongly recommend attending live from a quiet room with a notebook.',
      category: 'Session Details',
    },
  ],
  calculatorNiches: [
    {
      id: 'niche-1',
      name: 'Career & Executive Coaching',
      defaultTicket: 4999,
      defaultAudience: 150,
      conversionRate: 0.08,
      profitMarginPercent: 88,
    },
    {
      id: 'niche-2',
      name: 'Health, Wellness & Yoga',
      defaultTicket: 2999,
      defaultAudience: 250,
      conversionRate: 0.1,
      profitMarginPercent: 85,
    },
    {
      id: 'niche-3',
      name: 'Wealth, Stock Market & Finance',
      defaultTicket: 9999,
      defaultAudience: 100,
      conversionRate: 0.07,
      profitMarginPercent: 90,
    },
    {
      id: 'niche-4',
      name: 'AI, Tech & Digital Skills',
      defaultTicket: 5999,
      defaultAudience: 180,
      conversionRate: 0.09,
      profitMarginPercent: 86,
    },
    {
      id: 'niche-5',
      name: 'Business, Sales & Solopreneurship',
      defaultTicket: 7999,
      defaultAudience: 120,
      conversionRate: 0.08,
      profitMarginPercent: 89,
    },
  ],
};

export const sampleInitialLeads: RegisteredLead[] = [
  {
    id: 'lead-1',
    fullName: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '9876543210',
    countryCode: '+91',
    currentStatus: 'Working Professional (Wants to start coaching)',
    preferredTime: '8:00 PM IST (Today)',
    registeredAt: '2026-08-29 18:24:10',
    leadStatus: 'VIP',
    paymentStatus: 'Paid',
    paymentId: 'pay_rzp_test_9011',
    amountPaid: 9,
    notes: '12 years in IT product management, eager to launch leadership cohort.',
  },
  {
    id: 'lead-2',
    fullName: 'Dr. Ananya Iyer',
    email: 'dr.ananya@example.com',
    phone: '9812345678',
    countryCode: '+91',
    currentStatus: 'Practicing Doctor / Health Consultant',
    preferredTime: '8:00 PM IST (Today)',
    registeredAt: '2026-08-29 19:05:42',
    leadStatus: 'New',
    paymentStatus: 'Paid',
    paymentId: 'pay_rzp_test_9012',
    amountPaid: 9,
    notes: 'Wants to automate gut health nutrition webinars.',
  },
  {
    id: 'lead-3',
    fullName: 'Vikram Mehta',
    email: 'vikram.mehta@agencyhub.io',
    phone: '9765432109',
    countryCode: '+91',
    currentStatus: 'Agency Owner / Freelancer',
    preferredTime: '8:00 PM IST (Today)',
    registeredAt: '2026-08-29 19:40:15',
    leadStatus: 'Contacted',
    paymentStatus: 'Paid',
    paymentId: 'pay_rzp_test_9013',
    amountPaid: 9,
    notes: 'Transitioning from 8 employees to high-margin 1-man digital assets.',
  },
];

// Presets for one-click customization
export const sitePresets: Record<string, { label: string; description: string; data: Partial<SiteSettings> }> = {
  siddharth: {
    label: 'Siddharth Rajsekar (Original 1-Man Business Model)',
    description: 'The flagship freedom business model for digital coaches and educators.',
    data: defaultSiteData,
  },
  bhautik: {
    label: 'Coach Bhautik (High-Impact Life & Leadership Coaching)',
    description: 'Tailored for executive coaching, mindset, career acceleration, and leadership mastery.',
    data: {
      general: {
        brandName: 'HIGH-IMPACT 1-MAN COACHING',
        brandSub: 'By Coach Bhautik • Leadership & Life Transformation',
        logoShort: 'CB',
        currencySymbol: '₹',
        topBannerText: '🔥 LIVE MASTERCLASS: How To Build A ₹5-10 Lakh/Month High-Impact Coaching Practice',
        stickyBarTitle: 'High-Impact Coaching Masterclass with Coach Bhautik',
        supportEmail: 'coach.bhautik@gmail.com',
        supportPhone: '+91 99000 12345',
      },
      hero: {
        eyebrow: 'ATTENTION: ASPIRING COACHES, LEADERS, CONSULTANTS & EXECUTIVES',
        title: 'Discover The Exact',
        highlightedText: 'High-Impact 1-Man Coaching System',
        titleEnd: 'To Turn Your Wisdom Into A Scalable, AI-Powered Coaching Brand',
        subheadline: 'Without Complex Tech, Heavy Hiring, Or Burning Out.',
        description:
          'Learn the proven 3-step Clarity → Client Flow → Conversion framework used to build predictable 6 to 7-figure coaching revenue in just 2 hours a day.',
        sessionDateText: 'Upcoming Live Masterclass',
        sessionTimeText: '8:00 PM IST / 10:30 AM EST',
        sessionDuration: '90 Minutes',
        regularPrice: '₹4,999',
        discountedPriceText: '100% FREE TODAY',
        spotsText: '🔥 STRICTLY LIMITED TO 300 PARTICIPANTS',
        videoThumbnail:
          'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop&q=80',
        videoTrailerTitle: 'Masterclass Overview with Coach Bhautik',
        videoTrailerDesc:
          'Coach Bhautik breaks down how to design transformational coaching programs and automate client acquisition.',
        reviewsCount: '12,500+',
        reviewRating: '4.95 / 5',
        studentsCount: '45,000+',
        achieversCount: '80+ Lakhpatis & Crorepati Coaches',
      },
      mentor: {
        name: 'Coach Bhautik',
        shortName: 'Bhautik',
        title: 'Master Leadership Coach & Digital Coaching Strategist',
        badge: 'MEET COACH BHAUTIK',
        photoUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
        missionQuote: 'My Mission Is To Empower',
        missionHighlight: '100,000 Leaders To Monetize Their True Calling',
        bioParagraph1:
          'Coach Bhautik is a seasoned leadership mentor, life strategist, and digital business architect helping working professionals and aspiring coaches transition into high-income solopreneurs.',
        bioParagraph2:
          'Through proven systems of personal mastery, high-ticket packaging, and automated video funnels, Coach Bhautik has trained thousands across the globe to unlock financial freedom and deep purpose.',
        bookTitle: '"The High-Impact Coach Blueprint"',
        bookSales: '25,000+ copies read',
        stats: [
          { label: 'Leaders Mentored', value: '45,000+', sub: 'Across 18+ Countries' },
          { label: 'Student Earnings', value: '₹12+ Crores', sub: 'Cumulative Impact' },
          { label: 'High-Ticket Closers', value: '500+', sub: 'Certified Mentors' },
          { label: 'Client Satisfaction', value: '99.4%', sub: 'Verified Feedback' },
        ],
        credentials: [
          'Certified Executive & Transformational Master Coach',
          'Keynote Speaker on High-Performance Mindset and Solopreneurship',
          'Creator of the 90-Day High-Impact Coaching Launchpad',
        ],
      },
    },
  },
  agency: {
    label: 'Digital Agency & Solopreneur AI OS',
    description: 'For digital marketers, media buyers, and creators wanting to scale without employees.',
    data: {
      general: {
        brandName: 'SOLO AGENCY AI OS',
        brandSub: 'Automated 1-Man Digital Agency Model',
        logoShort: 'AI',
        currencySymbol: '₹',
        topBannerText: '🔥 MASTERCLASS: Replace A 10-Person Marketing Agency with 3 AI Workflows',
        stickyBarTitle: '1-Man AI Agency Masterclass',
        supportEmail: 'support@soloagency.io',
      },
      hero: {
        eyebrow: 'ATTENTION: FREELANCERS, MEDIA BUYERS & AGENCY FOUNDERS',
        title: 'How To Build A',
        highlightedText: '₹10L/Month 1-Man AI Agency',
        titleEnd: 'Delivering Premium Services in 2 Hours a Day',
        subheadline: 'Zero Full-Time Employees. 85%+ Net Profit Margins.',
        description:
          'Discover the exact AI workflows, autonomous client acquisition funnels, and plug-and-play deliverable templates that eliminate 90% of manual agency grunt work.',
        sessionDateText: 'Live Interactive Session',
        sessionTimeText: '7:30 PM IST',
        sessionDuration: '90 Minutes',
        regularPrice: '₹4,999',
        discountedPriceText: '100% FREE (LIMITED SLOTS)',
        spotsText: '🔥 ONLY 250 PASSES REMAINING',
        videoThumbnail:
          'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
        videoTrailerTitle: 'The 1-Man AI Agency System',
        videoTrailerDesc: 'See how 1 operator handles 20 retainer clients with automated agents.',
        reviewsCount: '8,400+',
        reviewRating: '4.9 / 5',
        studentsCount: '18,000+',
        achieversCount: '₹25+ Cr Agency Revenue',
      },
    },
  },
};
