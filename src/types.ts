export interface HeroSettings {
  eyebrow: string;
  title: string;
  highlightedText: string;
  titleEnd: string;
  subheadline: string;
  description: string;
  sessionDateText: string;
  sessionTimeText: string;
  sessionDuration: string;
  regularPrice: string;
  discountedPriceText: string;
  spotsText: string;
  videoUrl?: string;
  videoThumbnail: string;
  videoTrailerTitle: string;
  videoTrailerDesc: string;
  reviewsCount: string;
  reviewRating: string;
  studentsCount: string;
  achieversCount: string;
}

export interface MentorSettings {
  name: string;
  shortName: string;
  title: string;
  badge: string;
  photoUrl: string;
  missionQuote: string;
  missionHighlight: string;
  bioParagraph1: string;
  bioParagraph2: string;
  bookTitle: string;
  bookSales: string;
  stats: Array<{
    label: string;
    value: string;
    sub: string;
  }>;
  credentials: string[];
}

export interface SecretItem {
  id: string;
  number: string;
  pillTitle: string;
  tagline: string;
  highlight: string;
  description: string;
  bulletPoints: string[];
  keyOutcome: string;
  timeframe: string;
  badgeColor: string;
}

export interface Bonus {
  id: string;
  title: string;
  subtitle: string;
  value: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  niche: string;
  category: 'career' | 'health' | 'wealth' | 'growth' | 'tech';
  revenue: string;
  timeframe: string;
  quote: string;
  image: string;
  badge: string;
  videoUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CurriculumItem {
  id: string;
  time: string;
  title: string;
  description: string;
  tag: string;
}

export interface WhoIsItem {
  id: string;
  text: string;
  subtext?: string;
}

export interface CalculatorNiche {
  id: string;
  name: string;
  defaultTicket: number;
  defaultAudience: number;
  conversionRate: number; // e.g. 0.05 for 5%
  profitMarginPercent: number;
}

export interface SiteGeneralSettings {
  brandName: string;
  brandSub: string;
  logoShort: string;
  currencySymbol: string;
  topBannerText: string;
  stickyBarTitle: string;
  supportEmail: string;
  supportPhone?: string;
}

export interface PaymentSettings {
  ticketPrice: number;
  regularPrice: string;
  currencySymbol: string;
  currencyCode: string;
  razorpayKeyId: string;
  razorpayKeySecret?: string;
  isPaymentRequired: boolean;
  testMode: boolean;
  paymentButtonText: string;
}

export interface RegisteredLead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  currentStatus: string;
  preferredTime: string;
  registeredAt: string;
  leadStatus: 'New' | 'Contacted' | 'VIP' | 'Attended';
  paymentStatus: 'Paid' | 'Pending' | 'Failed';
  paymentId?: string;
  amountPaid?: number;
  notes?: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  currentStatus: string;
  preferredTime: string;
}

export interface SiteSettings {
  general: SiteGeneralSettings;
  hero: HeroSettings;
  mentor: MentorSettings;
  payment: PaymentSettings;
  secrets: SecretItem[];
  bonuses: Bonus[];
  testimonials: Testimonial[];
  curriculum: CurriculumItem[];
  whoFor: WhoIsItem[];
  whoNotFor: WhoIsItem[];
  faqs: FaqItem[];
  calculatorNiches: CalculatorNiche[];
}

