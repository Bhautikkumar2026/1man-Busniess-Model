import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  SiteSettings,
  RegisteredLead,
  HeroSettings,
  MentorSettings,
  SecretItem,
  Bonus,
  Testimonial,
  FaqItem,
  CurriculumItem,
  WhoIsItem,
  CalculatorNiche,
  SiteGeneralSettings,
  PaymentSettings,
} from '../types';
import { defaultSiteData, sampleInitialLeads, sitePresets } from '../data/defaultSiteData';

interface SiteContextType {
  siteData: SiteSettings;
  leads: RegisteredLead[];
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  activeAdminTab: string;
  setActiveAdminTab: (tab: string) => void;
  
  // Updaters
  updateGeneral: (data: Partial<SiteGeneralSettings>) => void;
  updateHero: (data: Partial<HeroSettings>) => void;
  updateMentor: (data: Partial<MentorSettings>) => void;
  updatePayment: (data: Partial<PaymentSettings>) => void;
  updateSecret: (id: string, data: Partial<SecretItem>) => void;
  addSecret: (secret: SecretItem) => void;
  deleteSecret: (id: string) => void;
  addBonus: (bonus: Bonus) => void;
  updateBonus: (id: string, data: Partial<Bonus>) => void;
  deleteBonus: (id: string) => void;
  addTestimonial: (t: Testimonial) => void;
  updateTestimonial: (id: string, data: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  addFaq: (faq: FaqItem) => void;
  updateFaq: (id: string, data: Partial<FaqItem>) => void;
  deleteFaq: (id: string) => void;
  updateCurriculum: (items: CurriculumItem[]) => void;
  updateWhoFor: (items: WhoIsItem[]) => void;
  updateWhoNotFor: (items: WhoIsItem[]) => void;
  updateCalculatorNiches: (niches: CalculatorNiche[]) => void;
  
  // Lead operations
  addLead: (lead: Omit<RegisteredLead, 'id' | 'registeredAt' | 'leadStatus'>) => void;
  updateLeadStatus: (id: string, status: RegisteredLead['leadStatus'], notes?: string) => void;
  deleteLead: (id: string) => void;
  clearAllLeads: () => void;
  exportLeadsCSV: () => void;
  
  // Preset & Backup operations
  loadPreset: (presetKey: string) => void;
  resetToDefaults: () => void;
  exportConfigJSON: () => string;
  importConfigJSON: (jsonStr: string) => boolean;
}

const STORAGE_SETTINGS_KEY = '1man_business_site_settings_v2';
const STORAGE_LEADS_KEY = '1man_business_leads_v2';

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteData, setSiteData] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SETTINGS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Deep merge to safeguard against missing keys if schema updated
        return {
          ...defaultSiteData,
          ...parsed,
          general: { ...defaultSiteData.general, ...(parsed.general || {}) },
          hero: { ...defaultSiteData.hero, ...(parsed.hero || {}) },
          mentor: { ...defaultSiteData.mentor, ...(parsed.mentor || {}) },
          payment: { ...defaultSiteData.payment, ...(parsed.payment || {}) },
          secrets: parsed.secrets || defaultSiteData.secrets,
          bonuses: parsed.bonuses || defaultSiteData.bonuses,
          testimonials: parsed.testimonials || defaultSiteData.testimonials,
          curriculum: parsed.curriculum || defaultSiteData.curriculum,
          whoFor: parsed.whoFor || defaultSiteData.whoFor,
          whoNotFor: parsed.whoNotFor || defaultSiteData.whoNotFor,
          faqs: parsed.faqs || defaultSiteData.faqs,
          calculatorNiches: parsed.calculatorNiches || defaultSiteData.calculatorNiches,
        };
      }
    } catch (e) {
      console.warn('Failed to load saved settings from localStorage', e);
    }
    return defaultSiteData;
  });

  const [leads, setLeads] = useState<RegisteredLead[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LEADS_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load leads from localStorage', e);
    }
    return sampleInitialLeads;
  });

  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [activeAdminTab, setActiveAdminTab] = useState<string>('hero');

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SETTINGS_KEY, JSON.stringify(siteData));
    } catch (e) {
      console.error('Error saving settings to localStorage', e);
    }
  }, [siteData]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_LEADS_KEY, JSON.stringify(leads));
    } catch (e) {
      console.error('Error saving leads to localStorage', e);
    }
  }, [leads]);

  // Updater functions
  const updateGeneral = (data: Partial<SiteGeneralSettings>) => {
    setSiteData((prev) => ({
      ...prev,
      general: { ...prev.general, ...data },
    }));
  };

  const updateHero = (data: Partial<HeroSettings>) => {
    setSiteData((prev) => ({
      ...prev,
      hero: { ...prev.hero, ...data },
    }));
  };

  const updateMentor = (data: Partial<MentorSettings>) => {
    setSiteData((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, ...data },
    }));
  };

  const updatePayment = (data: Partial<PaymentSettings>) => {
    setSiteData((prev) => ({
      ...prev,
      payment: { ...prev.payment, ...data },
    }));
  };

  const updateSecret = (id: string, data: Partial<SecretItem>) => {
    setSiteData((prev) => ({
      ...prev,
      secrets: prev.secrets.map((s) => (s.id === id ? { ...s, ...data } : s)),
    }));
  };

  const addSecret = (secret: SecretItem) => {
    setSiteData((prev) => ({
      ...prev,
      secrets: [...prev.secrets, secret],
    }));
  };

  const deleteSecret = (id: string) => {
    setSiteData((prev) => ({
      ...prev,
      secrets: prev.secrets.filter((s) => s.id !== id),
    }));
  };

  const addBonus = (bonus: Bonus) => {
    setSiteData((prev) => ({
      ...prev,
      bonuses: [...prev.bonuses, bonus],
    }));
  };

  const updateBonus = (id: string, data: Partial<Bonus>) => {
    setSiteData((prev) => ({
      ...prev,
      bonuses: prev.bonuses.map((b) => (b.id === id ? { ...b, ...data } : b)),
    }));
  };

  const deleteBonus = (id: string) => {
    setSiteData((prev) => ({
      ...prev,
      bonuses: prev.bonuses.filter((b) => b.id !== id),
    }));
  };

  const addTestimonial = (t: Testimonial) => {
    setSiteData((prev) => ({
      ...prev,
      testimonials: [t, ...prev.testimonials],
    }));
  };

  const updateTestimonial = (id: string, data: Partial<Testimonial>) => {
    setSiteData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((t) => (t.id === id ? { ...t, ...data } : t)),
    }));
  };

  const deleteTestimonial = (id: string) => {
    setSiteData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((t) => t.id !== id),
    }));
  };

  const addFaq = (faq: FaqItem) => {
    setSiteData((prev) => ({
      ...prev,
      faqs: [...prev.faqs, faq],
    }));
  };

  const updateFaq = (id: string, data: Partial<FaqItem>) => {
    setSiteData((prev) => ({
      ...prev,
      faqs: prev.faqs.map((f) => (f.id === id ? { ...f, ...data } : f)),
    }));
  };

  const deleteFaq = (id: string) => {
    setSiteData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((f) => f.id !== id),
    }));
  };

  const updateCurriculum = (items: CurriculumItem[]) => {
    setSiteData((prev) => ({
      ...prev,
      curriculum: items,
    }));
  };

  const updateWhoFor = (items: WhoIsItem[]) => {
    setSiteData((prev) => ({
      ...prev,
      whoFor: items,
    }));
  };

  const updateWhoNotFor = (items: WhoIsItem[]) => {
    setSiteData((prev) => ({
      ...prev,
      whoNotFor: items,
    }));
  };

  const updateCalculatorNiches = (niches: CalculatorNiche[]) => {
    setSiteData((prev) => ({
      ...prev,
      calculatorNiches: niches,
    }));
  };

  // Lead management
  const addLead = (newLeadData: Omit<RegisteredLead, 'id' | 'registeredAt' | 'leadStatus'>) => {
    const newLead: RegisteredLead = {
      ...newLeadData,
      id: 'lead-' + Date.now(),
      registeredAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
      leadStatus: 'New',
      paymentStatus: newLeadData.paymentStatus || (siteData.payment.isPaymentRequired ? 'Paid' : 'Paid'),
      paymentId: newLeadData.paymentId || ('pay_' + Math.random().toString(36).substring(2, 10)),
      amountPaid: newLeadData.amountPaid !== undefined ? newLeadData.amountPaid : siteData.payment.ticketPrice,
    };
    setLeads((prev) => [newLead, ...prev]);
  };

  const updateLeadStatus = (id: string, status: RegisteredLead['leadStatus'], notes?: string) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, leadStatus: status, ...(notes !== undefined ? { notes } : {}) } : l))
    );
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
  };

  const clearAllLeads = () => {
    setLeads([]);
  };

  const exportLeadsCSV = () => {
    if (leads.length === 0) {
      alert('No leads to export.');
      return;
    }
    const headers = [
      'ID',
      'Full Name',
      'Email',
      'Phone',
      'Country Code',
      'Status',
      'Preferred Time',
      'Registered At',
      'Lead Stage',
      'Payment Status',
      'Amount Paid',
      'Payment ID',
      'Notes',
    ];
    const rows = leads.map((l) => [
      `"${l.id}"`,
      `"${l.fullName.replace(/"/g, '""')}"`,
      `"${l.email.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.countryCode}"`,
      `"${(l.currentStatus || '').replace(/"/g, '""')}"`,
      `"${(l.preferredTime || '').replace(/"/g, '""')}"`,
      `"${l.registeredAt}"`,
      `"${l.leadStatus}"`,
      `"${l.paymentStatus || 'Paid'}"`,
      `"${l.amountPaid !== undefined ? `${siteData.payment.currencySymbol}${l.amountPaid}` : '₹9'}"`,
      `"${l.paymentId || ''}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `1man_masterclass_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const loadPreset = (presetKey: string) => {
    const preset = sitePresets[presetKey];
    if (!preset) return;
    setSiteData((prev) => ({
      ...prev,
      ...preset.data,
      general: { ...prev.general, ...(preset.data.general || {}) },
      hero: { ...prev.hero, ...(preset.data.hero || {}) },
      mentor: { ...prev.mentor, ...(preset.data.mentor || {}) },
      payment: { ...prev.payment, ...(preset.data.payment || {}) },
    }));
  };

  const resetToDefaults = () => {
    if (window.confirm('Reset all site customizations back to original masterclass defaults?')) {
      setSiteData(defaultSiteData);
      localStorage.removeItem(STORAGE_SETTINGS_KEY);
    }
  };

  const exportConfigJSON = (): string => {
    return JSON.stringify(siteData, null, 2);
  };

  const importConfigJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!parsed || typeof parsed !== 'object') return false;
      setSiteData((prev) => ({
        ...defaultSiteData,
        ...parsed,
        general: { ...defaultSiteData.general, ...(parsed.general || {}) },
        hero: { ...defaultSiteData.hero, ...(parsed.hero || {}) },
        mentor: { ...defaultSiteData.mentor, ...(parsed.mentor || {}) },
        payment: { ...defaultSiteData.payment, ...(parsed.payment || {}) },
      }));
      return true;
    } catch (e) {
      console.error('Invalid JSON configuration', e);
      return false;
    }
  };

  return (
    <SiteContext.Provider
      value={{
        siteData,
        leads,
        isAdminOpen,
        setIsAdminOpen,
        activeAdminTab,
        setActiveAdminTab,
        updateGeneral,
        updateHero,
        updateMentor,
        updatePayment,
        updateSecret,
        addSecret,
        deleteSecret,
        addBonus,
        updateBonus,
        deleteBonus,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        addFaq,
        updateFaq,
        deleteFaq,
        updateCurriculum,
        updateWhoFor,
        updateWhoNotFor,
        updateCalculatorNiches,
        addLead,
        updateLeadStatus,
        deleteLead,
        clearAllLeads,
        exportLeadsCSV,
        loadPreset,
        resetToDefaults,
        exportConfigJSON,
        importConfigJSON,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = (): SiteContextType => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
