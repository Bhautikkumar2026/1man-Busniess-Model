import React, { useState } from 'react';
import { Calculator, Sparkles, Clock, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface BusinessCalculatorProps {
  onOpenModal: () => void;
}

export const BusinessCalculator: React.FC<BusinessCalculatorProps> = ({ onOpenModal }) => {
  const { siteData } = useSite();
  const niches = siteData.calculatorNiches;
  const currency = siteData.general.currencySymbol;

  const [selectedNicheId, setSelectedNicheId] = useState(niches[0]?.id || 'niche-1');
  const [leadsCount, setLeadsCount] = useState(500);
  const [pricePoint, setPricePoint] = useState(niches[0]?.defaultTicket || 4999);

  const selectedNiche = niches.find((n) => n.id === selectedNicheId) || niches[0] || {
    id: 'default',
    name: 'General Coaching',
    defaultTicket: 4999,
    defaultAudience: 150,
    conversionRate: 0.08,
    profitMarginPercent: 85,
  };

  // Calculation formulas
  const estimatedConversions = Math.max(1, Math.round(leadsCount * (selectedNiche.conversionRate || 0.08)));
  const monthlyRevenue = estimatedConversions * pricePoint;
  const annualRevenue = monthlyRevenue * 12;
  const marginFrac = (selectedNiche.profitMarginPercent || 85) / 100;
  const netProfitMonthly = Math.round(monthlyRevenue * marginFrac);
  const agencyProfitMonthly = Math.round(monthlyRevenue * 0.20); // 20% in traditional agency

  const formatCurrency = (val: number) => {
    if (currency === '₹') {
      if (val >= 10000000) {
        return `₹${(val / 10000000).toFixed(2)} Cr`;
      } else if (val >= 100000) {
        return `₹${(val / 100000).toFixed(2)} Lakhs`;
      }
      return `₹${val.toLocaleString('en-IN')}`;
    }
    return `${currency}${val.toLocaleString()}`;
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-[#0c0f17] via-[#090b10] to-[#0c0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE SIMULATOR</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Calculate Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
              1-Man Revenue Potential
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            See the exact numbers you can generate with high-ticket digital products and an AI-automated video funnel.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Inputs Card */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-xl text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>1. Select Your Knowledge Niche</span>
              </h3>

              {/* Niche selector pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
                {niches.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => {
                      setSelectedNicheId(n.id);
                      setPricePoint(n.defaultTicket);
                    }}
                    className={`text-xs font-semibold p-2.5 rounded-xl border text-left transition-all ${
                      selectedNicheId === n.id
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {n.name}
                  </button>
                ))}
              </div>

              {/* Slider 1: Monthly Traffic / Webinar Attendees */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-300">Target Monthly Masterclass Registrations</span>
                  <span className="text-amber-400 font-mono font-bold text-base">
                    {leadsCount.toLocaleString()} Registrations
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="3000"
                  step="50"
                  value={leadsCount}
                  onChange={(e) => setLeadsCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>100 (Starter)</span>
                  <span>1,500 (Moderate)</span>
                  <span>3,000+ (Scale)</span>
                </div>
              </div>

              {/* Slider 2: Product / Bundle Price */}
              <div className="mb-4">
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-300">Average Program / Membership Fee</span>
                  <span className="text-emerald-400 font-mono font-bold text-base">
                    {currency}{pricePoint.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1999"
                  max="49999"
                  step="500"
                  value={pricePoint}
                  onChange={(e) => setPricePoint(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>{currency}1,999 (Mini-Course)</span>
                  <span>{currency}14,999 (Academy)</span>
                  <span>{currency}49,999 (Mastermind)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Based on benchmark {((selectedNiche.conversionRate || 0.08) * 100).toFixed(1)}% conversion rates in the 1-man system.
              </span>
            </div>
          </div>

          {/* Right Projection Card */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                  ESTIMATED 1-MAN OUTPUT
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  ~{estimatedConversions} Paying Students / mo
                </span>
              </div>

              {/* Big Monthly & Annual numbers */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  <p className="text-xs text-slate-400 mb-1">Monthly Gross Revenue</p>
                  <p className="font-heading font-black text-2xl sm:text-3xl text-amber-400">
                    {formatCurrency(monthlyRevenue)}
                  </p>
                </div>
                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  <p className="text-xs text-slate-400 mb-1">Annual Run Rate</p>
                  <p className="font-heading font-black text-2xl sm:text-3xl text-emerald-400">
                    {formatCurrency(annualRevenue)}
                  </p>
                </div>
              </div>

              {/* Profit Margin Comparison */}
              <div className="bg-slate-950/90 rounded-2xl p-4 border border-slate-800/80 mb-6 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    1-Man Model Take-Home ({selectedNiche.profitMarginPercent || 85}% Profit):
                  </span>
                  <span className="font-mono font-bold text-emerald-400 text-sm">
                    {formatCurrency(netProfitMonthly)} / mo
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full"
                    style={{ width: `${selectedNiche.profitMarginPercent || 85}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    Traditional Agency Model (20% Profit after staff/rent):
                  </span>
                  <span className="font-mono">{formatCurrency(agencyProfitMonthly)} / mo</span>
                </div>
              </div>

              {/* Freedom stats */}
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Work only 8-10 hrs/week</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero full-time employees</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-heading font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <span>LEARN HOW TO BUILD THIS LIVE (JOIN FOR JUST {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
