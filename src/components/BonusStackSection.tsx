import React from 'react';
import { Gift, Sparkles, LayoutTemplate, Calculator, Users, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface BonusStackSectionProps {
  onOpenModal: () => void;
}

export const BonusStackSection: React.FC<BonusStackSectionProps> = ({ onOpenModal }) => {
  const { siteData } = useSite();
  const bonuses = siteData.bonuses;
  const currency = siteData.general.currencySymbol;

  // Calculate total monetary value
  const totalValueNum = bonuses.reduce((acc, b) => {
    const num = parseInt(b.value.replace(/[^0-9]/g, '')) || 0;
    return acc + num;
  }, 0);

  const formattedTotal =
    currency === '₹'
      ? `₹${totalValueNum.toLocaleString('en-IN')}`
      : `${currency}${totalValueNum.toLocaleString()}`;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return Sparkles;
      case 'LayoutTemplate':
        return LayoutTemplate;
      case 'Calculator':
        return Calculator;
      case 'Users':
        return Users;
      default:
        return Gift;
    }
  };

  return (
    <section id="bonuses" className="py-20 bg-[#090b10] relative overflow-hidden border-t border-slate-800/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Gift className="w-4 h-4" />
            <span>FAST-ACTION BONUSES (WORTH {formattedTotal})</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Register Today & Unlock{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">
              {formattedTotal} Worth of AI Assets
            </span>{' '}
            With Your {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9} Seat
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            These exclusive tools, templates, and frameworks will be unlocked immediately during the live {siteData.hero.sessionDuration} session.
          </p>
        </div>

        {/* Bonuses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {bonuses.map((bonus, idx) => {
            const Icon = getIcon(bonus.iconName);
            return (
              <div
                key={bonus.id || idx}
                className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-extrabold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      BONUS #{idx + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 line-through">Value: {bonus.value}</span>
                      <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                        FREE
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors">
                        {bonus.title}
                      </h3>
                      <p className="text-xs text-amber-200/70 font-semibold mt-0.5">
                        {bonus.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {bonus.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {bonus.tag}
                  </span>
                  <span className="font-mono text-amber-400 font-bold">
                    Included 100% Free
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus Stack Summary Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-amber-500/20 border border-amber-500/40 p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-2xl backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-white mb-6">
            {bonuses.slice(0, 4).map((b, i) => (
              <React.Fragment key={b.id || i}>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> {b.title} ({b.value})
                </span>
                {i < Math.min(bonuses.length - 1, 3) && <span>+</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="text-2xl sm:text-3xl font-heading font-black text-amber-300 mb-6">
            Total Real Value: <span className="line-through text-slate-400 text-xl sm:text-2xl font-normal">{formattedTotal}</span> → <span className="text-emerald-400">INCLUDED FREE WITH {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9} SEAT</span>
          </div>

          <button
            id="bonus-cta-btn"
            onClick={onOpenModal}
            className="px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 font-heading font-black text-base sm:text-xl shadow-2xl shadow-amber-500/30 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-3"
          >
            <span>CLAIM ALL {bonuses.length} BONUSES & BOOK SEAT FOR {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
