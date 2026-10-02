import React from 'react';
import { useSite } from '../../context/SiteContext';
import {
  Sparkles,
  X,
  Sliders,
  User,
  Lightbulb,
  Gift,
  Star,
  Calculator,
  Clock,
  HelpCircle,
  Users,
  Settings,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { AdminHeroTab } from './tabs/AdminHeroTab';
import { AdminPaymentTab } from './tabs/AdminPaymentTab';
import { AdminMentorTab } from './tabs/AdminMentorTab';
import { AdminSecretsTab } from './tabs/AdminSecretsTab';
import { AdminBonusesTab } from './tabs/AdminBonusesTab';
import { AdminTestimonialsTab } from './tabs/AdminTestimonialsTab';
import { AdminCalculatorTab } from './tabs/AdminCalculatorTab';
import { AdminCurriculumTab } from './tabs/AdminCurriculumTab';
import { AdminFaqTab } from './tabs/AdminFaqTab';
import { AdminLeadsTab } from './tabs/AdminLeadsTab';
import { AdminPresetsTab } from './tabs/AdminPresetsTab';
import { CreditCard } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { isAdminOpen, setIsAdminOpen, activeAdminTab, setActiveAdminTab, leads } = useSite();

  if (!isAdminOpen) return null;

  const tabs = [
    { id: 'hero', label: 'Hero & Event', icon: Sparkles },
    { id: 'payment', label: 'Razorpay & Price (₹9)', icon: CreditCard },
    { id: 'mentor', label: 'Mentor & Brand', icon: User },
    { id: 'secrets', label: 'The 3 Secrets', icon: Lightbulb },
    { id: 'bonuses', label: 'Bonus Stack', icon: Gift },
    { id: 'testimonials', label: 'Wall of Fame', icon: Star },
    { id: 'calculator', label: 'Revenue Calc', icon: Calculator },
    { id: 'curriculum', label: 'Curriculum & Fit', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'leads', label: 'Leads & CRM', icon: Users, badge: leads.length },
    { id: 'presets', label: 'Presets & Backup', icon: Settings },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-6xl max-h-[92vh] bg-slate-950 border border-amber-500/40 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-heading font-black text-amber-400">
                <Sliders className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-heading font-black text-white text-base sm:text-lg">
                  Website Control & Customizer
                </h2>
                <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                  REAL-TIME SYNC
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Edit headlines, session times, mentor bio, bonuses, testimonials & leads. All changes apply live instantly!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Auto-saved</span>
            </div>

            <button
              onClick={() => setIsAdminOpen(false)}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-2 rounded-xl font-heading font-black text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>Preview Live Page</span>
            </button>

            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close admin panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Strip */}
        <div className="flex items-center gap-1.5 px-4 sm:px-6 py-2.5 border-b border-slate-800 bg-slate-950 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeAdminTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveAdminTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-slate-950 text-amber-400'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950/60">
          {activeAdminTab === 'hero' && <AdminHeroTab />}
          {activeAdminTab === 'payment' && <AdminPaymentTab />}
          {activeAdminTab === 'mentor' && <AdminMentorTab />}
          {activeAdminTab === 'secrets' && <AdminSecretsTab />}
          {activeAdminTab === 'bonuses' && <AdminBonusesTab />}
          {activeAdminTab === 'testimonials' && <AdminTestimonialsTab />}
          {activeAdminTab === 'calculator' && <AdminCalculatorTab />}
          {activeAdminTab === 'curriculum' && <AdminCurriculumTab />}
          {activeAdminTab === 'faq' && <AdminFaqTab />}
          {activeAdminTab === 'leads' && <AdminLeadsTab />}
          {activeAdminTab === 'presets' && <AdminPresetsTab />}
        </div>
      </div>
    </div>
  );
};
