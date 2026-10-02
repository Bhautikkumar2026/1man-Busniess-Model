import { Testimonial, Bonus, FaqItem } from '../types';

export const MEDIA_LOGOS = [
  { name: 'Entrepreneur India', label: 'ENTREPRENEUR' },
  { name: 'Forbes India', label: 'FORBES' },
  { name: 'TEDx Speaker', label: 'TEDx' },
  { name: 'Josh Talks', label: 'JOSH TALKS' },
  { name: 'YourStory', label: 'YOURSTORY' },
  { name: 'Business Standard', label: 'BUSINESS STANDARD' },
  { name: 'Silicon India', label: 'SILICON INDIA' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Puja Puneet',
    role: 'Life & Relationship Coach',
    niche: 'Life Design For Women',
    category: 'growth',
    revenue: '₹8.5+ Crores',
    timeframe: 'In 24 Months',
    quote: 'Before meeting Siddharth, I was trading time for money doing 1-on-1 sessions. With the 1-Man Business Model, I packaged my wisdom into an automated digital academy. Now I serve 15,000+ women without any stress!',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    badge: 'Diamond Hall of Fame',
  },
  {
    id: '2',
    name: 'Dr. Nitin Parwani',
    role: 'Health & Diabetes Reversal Coach',
    niche: 'Holistic Health & Wellness',
    category: 'health',
    revenue: '₹3.2+ Crores',
    timeframe: 'In 18 Months',
    quote: 'As a doctor, I thought I needed an expensive clinic. Siddharth showed me how to run an entire digital wellness ecosystem from my laptop with AI tools. I have helped thousands reverse diabetes globally.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80',
    badge: 'Crore Club Winner',
  },
  {
    id: '3',
    name: 'Mitesh & Indu Khatri',
    role: 'Law of Attraction Coaches',
    niche: 'Mindset & Manifestation',
    category: 'growth',
    revenue: '₹14+ Crores',
    timeframe: 'In 3 Years',
    quote: 'The 1-Man Business Model is the purest form of entrepreneurship. Zero office rent, zero massive employee management overhead, and 85%+ net profit margins. It completely transformed our freedom.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    badge: 'Legend Member',
  },
  {
    id: '4',
    name: 'Sunil Chaudhary',
    role: 'SEO & Digital Marketing Coach',
    niche: 'Digital Career Transition',
    category: 'career',
    revenue: '₹1.8+ Crores',
    timeframe: 'In 14 Months',
    quote: 'I left my 14-year corporate grind. Using Siddharth\'s Product → Traffic → Sales formula, I created an automated video funnel that consistently generates high-quality enrollments every day while I sleep.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    badge: 'Crore Club Member',
  },
  {
    id: '5',
    name: 'Riddhi Deorah',
    role: 'Parenting & Mindful Motherhood Coach',
    niche: 'Parenting Mastery',
    category: 'growth',
    revenue: '₹2.4+ Crores',
    timeframe: 'In 20 Months',
    quote: 'I started from my kitchen table as a mother of two. The AI tools and streamlined funnel systems made it possible for me to build a multi-crore brand in just 2-3 focused hours a day.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
    badge: 'Crore Club Member',
  },
  {
    id: '6',
    name: 'Dev Gadhvi',
    role: 'Passionpreneur Mentor',
    niche: 'Career Transition & Passionpreneurship',
    category: 'career',
    revenue: '₹20+ Crores',
    timeframe: 'Ecosystem Scale',
    quote: 'Siddharth\'s principles on building digital tribes and scalable digital assets are unparalleled. If you want true financial, time, and location freedom, this 90-minute masterclass will rewire your brain.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    badge: 'Hall of Fame Icon',
  },
  {
    id: '7',
    name: 'Kavita Sahay',
    role: 'Financial Literacy Coach',
    niche: 'Stock Market & Personal Finance for Women',
    category: 'wealth',
    revenue: '₹95+ Lakhs',
    timeframe: 'In 9 Months',
    quote: 'I had deep financial knowledge but zero sales tech knowledge. Siddharth simplified the entire funnel into 3 distinct pillars. My webinars now convert cold visitors with incredible predictability.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80',
    badge: 'Lakh Club Achiever',
  },
  {
    id: '8',
    name: 'Gaurav Agrawal',
    role: 'AI & Productivity Coach',
    niche: 'AI Automation For Professionals',
    category: 'tech',
    revenue: '₹1.1+ Crores',
    timeframe: 'In 7 Months',
    quote: 'Leveraging AI with the Freedom Business blueprint is a superpower. You don\'t need 20 employees when 3 AI agents handle content, ad copy, and CRM workflows seamlessly.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80',
    badge: 'Crore Club Winner',
  },
];

export const BONUSES: Bonus[] = [
  {
    id: 'bonus-1',
    title: 'The AI Prompt Vault for Coaches & Creators',
    subtitle: '150+ Plug-and-Play Prompts to Build Your Courses, Content & Ads in 48 Hours',
    value: '₹4,999',
    description: 'Never stare at a blank screen again. Copy-paste prompt templates designed specifically to extract your knowledge, design course curriculum, write high-converting ad scripts, and generate email sequences.',
    iconName: 'Sparkles',
    tag: 'FREE FOR LIVE ATTENDEES',
  },
  {
    id: 'bonus-2',
    title: 'The 1-Man Business OS (Notion & Workflow Suite)',
    subtitle: 'The Exact Architecture to Run a 7-Figure Business in 2 Hours a Day',
    value: '₹6,999',
    description: 'Get Siddharth\'s proprietary digital dashboard template. Track revenue streams, automated funnels, content calendar, customer support triage, and daily high-leverage CEO tasks.',
    iconName: 'LayoutTemplate',
    tag: 'INSTANT DOWNLOAD',
  },
  {
    id: 'bonus-3',
    title: '7-Figure High-Ticket Offer & Pricing Calculator',
    subtitle: 'The Mathematical Formula to Price Your Courses, Memberships & Coaching',
    value: '₹5,999',
    description: 'Stop undercharging. Use this dynamic interactive spreadsheet to craft irresistible Tier-1, Tier-2, and Tier-3 offer stacks that maximize customer lifetime value (LTV).',
    iconName: 'Calculator',
    tag: 'EXCLUSIVE BLUEPRINT',
  },
  {
    id: 'bonus-4',
    title: 'VIP Community Pass & Live Q&A Session with Siddharth',
    subtitle: 'Direct Feedback on Your Niche, Product Idea, and Funnel Strategy',
    value: '₹7,000',
    description: 'Get your exact questions answered live at the end of the masterclass. Plus, get access to the private network of 30,000+ high-caliber coaches and knowledge creators.',
    iconName: 'Users',
    tag: 'LIVE ACCESS ONLY',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Is this Masterclass really 100% Free?',
    answer: 'Yes, absolutely. The 90-minute live masterclass is 100% complimentary when you register today. Siddharth shares his core framework openly to empower you with the clarity and roadmap needed to build a profitable digital business. If you decide you want advanced mentorship later, you can choose to join his paid community, but there is zero obligation.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'I don\'t have a technical background or coding skills. Will this work for me?',
    answer: '100% yes! In fact, the modern 1-Man Business Model is built entirely on modern no-code platforms and AI tools. You do not need to write a single line of code or hire expensive developers. If you know how to send an email and use a browser, you can implement this system.',
    category: 'Eligibility',
  },
  {
    id: 'faq-3',
    question: 'I have a full-time 9-to-5 job. How much time do I need to invest each week?',
    answer: 'Most of our top Crore Club members started while working demanding corporate jobs. The entire model is designed for leverage: you only need 5 to 7 focused hours per week to set up your digital assets. Once launched, AI and automated funnels handle 90% of the daily traffic and lead conversion.',
    category: 'Time Commitment',
  },
  {
    id: 'faq-4',
    question: 'What if I don\'t know my niche or haven\'t created a digital product yet?',
    answer: 'That is exactly why you should attend! Secret #1 in the masterclass is dedicated entirely to the "AI Niche Finder" and the "48-Hour Digital Product Matrix". Siddharth will show you step-by-step how to identify your profitable micro-niche and map out your first sellable offer without guessing.',
    category: 'Content',
  },
  {
    id: 'faq-5',
    question: 'How is this different from traditional agency or drop-shipping models?',
    answer: 'Traditional agency models require hiring large teams, managing client churn, dealing with high operational costs, and working 14-hour days. Drop-shipping suffers from paper-thin margins and shipping nightmares. The 1-Man Business Model is based on digital knowledge assets and micro-memberships with 80-90% net profit margins, zero inventory, and total location independence.',
    category: 'Comparison',
  },
  {
    id: 'faq-6',
    question: 'Will there be a recording/replay provided if I miss the live session?',
    answer: 'Due to the interactive nature of the live masterclass, the live Q&A, and the fast-action bonuses distributed exclusively to attendees, we strongly encourage attending live. Replays are generally not made publicly available.',
    category: 'Logistics',
  },
  {
    id: 'faq-7',
    question: 'What happens immediately after I enter my details?',
    answer: 'You will receive immediate confirmation on screen, an email confirmation with your unique private access link, and a WhatsApp reminder. You will also get access to the pre-webinar preparatory kit so you can come prepared.',
    category: 'Logistics',
  },
];

export const WHO_IS_THIS_FOR = [
  {
    title: 'Coaches, Consultants & Trainers',
    desc: 'Who are tired of trading 1-on-1 hours for money and want to scale to thousands of students with digital products & memberships.',
  },
  {
    title: 'Working Corporate Professionals',
    desc: 'Who have 5+ years of domain expertise and want to build a high-income secondary revenue stream to eventually achieve complete career independence.',
  },
  {
    title: 'Content Creators & Freelancers',
    desc: 'Who want to stop relying on sporadic brand deals and client retainer stress by launching their own high-converting digital academy.',
  },
  {
    title: 'Domain Experts, Authors & Teachers',
    desc: 'Who have deep knowledge in fitness, finance, tech, relationships, business, or spirituality and want to impact lives globally.',
  },
];

export const WHO_IS_THIS_NOT_FOR = [
  {
    title: 'Get-Rich-Quick Seekers',
    desc: 'People looking for overnight magic buttons or gambling schemes. This is a real, sustainable, value-driven business architecture.',
  },
  {
    title: 'Spectators Unwilling to Take Action',
    desc: 'People who only consume information but never implement or build real digital assets.',
  },
  {
    title: 'Passive Crypto / MLM Promoters',
    desc: 'This is strictly for authentic knowledge creators and experts who genuinely care about student transformation and ethical value creation.',
  },
  {
    title: 'Those Refusing to Embrace AI & Innovation',
    desc: 'People who insist on outdated, manual 2015-era agency processes and resist using AI leverage.',
  },
];

export const AGENDA_ITEMS = [
  {
    time: '00:00 - 00:20',
    title: 'The Shift to the 1-Man AI Business',
    desc: 'Why the era of bloated agencies with 20 employees is dead, and how solo knowledge creators are generating 7-figures with 85%+ net margins.',
    icon: 'Compass',
  },
  {
    time: '00:20 - 00:45',
    title: 'Secret #1: The AI Niche & Digital Product Engine',
    desc: 'How to extract your tacit knowledge and build high-ticket courses, micro-memberships, and masterminds in 48 hours using AI prompt engineering.',
    icon: 'Cpu',
  },
  {
    time: '00:45 - 00:70',
    title: 'Secret #2: The Automated Video Money Funnel',
    desc: 'The exact high-converting funnel framework that turns cold social media traffic into paying customers 24/7 without cold calling or manual sales reps.',
    icon: 'Video',
  },
  {
    time: '00:70 - 00:90',
    title: 'Secret #3: The 1-Man Automation Operating System',
    desc: 'Automating lead triage, onboarding, community moderation, and ad scaling so you only work 2 hours a day while the system runs like clockwork.',
    icon: 'Workflow',
  },
  {
    time: 'BONUS (90m+)',
    title: 'Live Q&A + Fast-Action Bonus Distribution',
    desc: 'Live interactive hot-seats with Siddharth, real-time funnel audits, and instant unlocking of the ₹24,999 Bonus Vault.',
    icon: 'Gift',
  },
];

export const NICHES_FOR_CALCULATOR = [
  { id: 'business', name: 'Business & Entrepreneurship', avgTicket: 15000, conversionRate: 0.035, multiplier: 1.2 },
  { id: 'career', name: 'Career Growth & Corporate Skills', avgTicket: 8000, conversionRate: 0.04, multiplier: 1.0 },
  { id: 'health', name: 'Health, Fitness & Wellness', avgTicket: 6500, conversionRate: 0.05, multiplier: 1.1 },
  { id: 'wealth', name: 'Finance, Investing & Trading', avgTicket: 18000, conversionRate: 0.03, multiplier: 1.3 },
  { id: 'growth', name: 'Mindset, Relationships & Spirituality', avgTicket: 7500, conversionRate: 0.045, multiplier: 1.0 },
  { id: 'tech', name: 'Tech, AI & Data Science', avgTicket: 12000, conversionRate: 0.038, multiplier: 1.25 },
  { id: 'creative', name: 'Arts, Content & Design', avgTicket: 5500, conversionRate: 0.048, multiplier: 0.95 },
];
