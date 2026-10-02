import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface FaqSectionProps {
  onOpenModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenModal }) => {
  const { siteData } = useSite();
  const faqs = siteData.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#0c0f17] relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>GOT QUESTIONS?</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
              Questions
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Everything you need to know about the {siteData.general.brandName} Masterclass.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id || idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-amber-500/40 shadow-lg'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isOpen
                        ? 'bg-amber-400 text-slate-950 border-amber-400 rotate-180'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 text-center">
          <h3 className="font-heading font-bold text-xl text-white mb-2">
            Ready to experience the {siteData.general.brandName} in action?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-xl mx-auto">
            Take the leap today. Join {siteData.hero.studentsCount} ambitious individuals who chose freedom over traditional corporate burnout.
          </p>
          <button
            onClick={onOpenModal}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-heading font-black text-sm sm:text-base inline-flex items-center gap-2 shadow-xl shadow-amber-500/25 hover:scale-105 transition-transform cursor-pointer"
          >
            <Sparkles className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>RESERVE MY SEAT FOR {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9} ({siteData.hero.regularPrice} VALUE)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
